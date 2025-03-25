import { useCallback, useEffect, useRef } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UITabsList.styles";
import { UITabsListProps } from "./UITabsList.types";
import { UIButton } from "../../components";

const UITabsList: React.FC<UITabsListProps> = ({
  tabs,
  selectedTabIndex,
  onTabClick,
  style
}) => {
  const { styles } = useStyles(stylesheet);

  const listRef = useRef<FlatList>(null);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item, index }) => (
      <UIButton
        onPress={() => onTabClick(index)}
        size="small"
        color={index === selectedTabIndex ? undefined : "outlined-main"}
      >
        {item}
      </UIButton>
    ),
    [selectedTabIndex, onTabClick]
  );

  useEffect(() => {
    if (selectedTabIndex === 0) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    } else if (selectedTabIndex === tabs.length - 1) {
      listRef.current?.scrollToEnd({ animated: true });
    } else if (selectedTabIndex !== -1) {
      listRef.current?.scrollToIndex({
        index: selectedTabIndex,
        animated: true,
        viewPosition: 0.5
      });
    }
  }, [selectedTabIndex, tabs]);

  return (
    <FlatList
      ref={listRef}
      horizontal
      data={tabs}
      renderItem={renderItem}
      style={[styles.wrapper, style]}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default UITabsList;
