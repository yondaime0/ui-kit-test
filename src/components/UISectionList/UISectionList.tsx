import { useCallback } from "react";
import {
  DefaultSectionT,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  SectionListData,
  SectionListRenderItem,
  ViewStyle
} from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedProps,
  useAnimatedReaction,
  useSharedValue
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

// this is used to make flexible header space
function UISectionList<T>({
  sections,
  style,
  renderItem,
  keyExtractor,
  renderSectionHeader,
  contentPadding,
  flexibleSpaceAnimation,
  scrollEnabled = true,
  defaultCollapsed = false,
  flexibleSpace = 0,
  ...props
}: Readonly<{
  sections: SectionListData<T>[];
  style?: ViewStyle;
  estimatedItemSize?: number;
  renderItem: SectionListRenderItem<T, DefaultSectionT>;
  keyExtractor: (item: T) => string;
  renderSectionHeader: (info: {
    section: { title: string };
  }) => React.ReactElement;
  onEndReached?: () => void;
  ListEmptyComponent?: React.ReactNode;
  ListFooterComponent?: React.ReactNode;
  scrollEnabled?: boolean;
  contentPadding?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  flexibleSpaceAnimation?: SharedValue<number>;
  flexibleSpace?: number;
  defaultCollapsed?: boolean;
}>) {
  const insets = useSafeAreaInsets();

  const currentScrollViewOffset = useSharedValue(
    defaultCollapsed ? flexibleSpace : 0
  );

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      currentScrollViewOffset.value = event.nativeEvent.contentOffset.y;
    },
    [currentScrollViewOffset]
  );

  useAnimatedReaction(
    () => currentScrollViewOffset.value,
    (value) => {
      if (flexibleSpaceAnimation) {
        flexibleSpaceAnimation.value = interpolate(
          value,
          [0, flexibleSpace],
          [1, 0]
        );
      }
    }
  );

  const animatedProps = useAnimatedProps(() => ({
    scrollIndicatorInsets: {
      top: Math.max(0, flexibleSpace - currentScrollViewOffset.value)
    }
  }));

  return (
    <AnimatedSectionList
      nestedScrollEnabled
      scrollEventThrottle={16}
      onScroll={handleScroll}
      snapToOffsets={[0, flexibleSpace]}
      snapToAlignment="start"
      snapToEnd={false}
      style={style}
      contentContainerStyle={{
        paddingTop: flexibleSpace + (contentPadding?.top ?? 0),
        paddingBottom: contentPadding?.bottom ?? insets.bottom,
        paddingLeft: contentPadding?.left,
        paddingRight: contentPadding?.right
      }}
      contentOffset={defaultCollapsed ? { x: 0, y: flexibleSpace } : undefined}
      animatedProps={animatedProps}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="never"
      contentInsetAdjustmentBehavior="never"
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      // @ts-expect-error: typing was lost on `Animated.createAnimatedComponent`
      sections={sections}
      // @ts-expect-error: typing was lost on `Animated.createAnimatedComponent`
      renderItem={renderItem}
      // @ts-expect-error: typing was lost on `Animated.createAnimatedComponent`
      keyExtractor={keyExtractor}
      // @ts-expect-error: typing was lost on `Animated.createAnimatedComponent`
      renderSectionHeader={renderSectionHeader}
      scrollEnabled={scrollEnabled}
      {...props}
    />
  );
}

export default UISectionList;
