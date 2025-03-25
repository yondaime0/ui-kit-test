import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetTextInput
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  Keyboard,
  ListRenderItem,
  Pressable,
  useColorScheme,
  View
} from "react-native";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIPicker.styles";
import { UIPickerItem, UIPickerProps } from "./UIPicker.types";
import { ICONS } from "../../assets";
import { UIBottomSheetModal } from "../UIBottomSheetModal";
import { UICard } from "../UICard";
import { UIIcon } from "../UIIcon";
import { UILoader } from "../UILoader";
import { UIText } from "../UIText";

function UIPicker<T extends UIPickerItem>({
  items,
  selectedValue,
  placeholder,
  listHeaderTitle,
  errorMessage,
  isLoading,
  onSelectValue,
  renderItem,
  itemTextStyle,
  titleTextProps,
  rightElement,
  onEndReached,
  searchEnabled,
  onSearchChange,
  ListFooterComponent,
  initialSearchValue
}: UIPickerProps<T>) {
  const ref = useRef<BottomSheetModal>(null);
  const { styles, theme } = useStyles(stylesheet);
  const [searchQuery, setSearchQuery] = useState<string>(
    initialSearchValue ?? ""
  );

  const colorScheme = useColorScheme();

  const filteredItems = useMemo(() => {
    if (!onSearchChange && searchQuery) {
      const words = searchQuery.trim().toLowerCase().split(/\s+/);
      return items?.filter((item) => {
        const normalizedItem = item?.label?.trim().toLowerCase();
        return words.every((word) => normalizedItem.includes(word));
      });
    }
    return items;
  }, [items, searchQuery]);

  const selectedValueLabel = useMemo(() => {
    return selectedValue
      ? filteredItems.find(
          (item) => item.value.toString() === selectedValue.toString()
        )?.label
      : undefined;
  }, [filteredItems, selectedValue]);

  const openBottomSheet = () => {
    Keyboard.dismiss();
    ref.current?.present();
  };
  const onSelect = (item: { label: string; value: string | number }) => {
    ref.current?.forceClose();

    onSelectValue(item);
  };

  const defaultListItem = useCallback<ListRenderItem<T>>(
    ({ item }) => (
      <Pressable
        onPress={() => onSelect(item)}
        style={styles.bottomSheetListItem}
      >
        <UIText
          color={selectedValue === item.value ? "main" : undefined}
          style={itemTextStyle}
        >
          {item.label}
        </UIText>
      </Pressable>
    ),
    [selectedValue, itemTextStyle, onSelect]
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  return (
    <View>
      <UICard
        style={styles.card(!!selectedValue)}
        appearance="elevated"
        onPress={openBottomSheet}
      >
        <UIText
          font="medium"
          size="sm"
          color={
            selectedValue
              ? colorScheme === "dark"
                ? "white"
                : "black"
              : "secondary"
          }
          style={styles.labelText}
          numberOfLines={2}
          {...titleTextProps}
        >
          {selectedValueLabel ?? placeholder}
        </UIText>

        {rightElement ?? (
          <UIIcon
            xml={ICONS.arrowDown}
            width={12}
            height={12}
            fill={colorScheme === "dark" ? "white" : "black"}
          />
        )}
      </UICard>
      {errorMessage ? (
        <UIText
          size="xs"
          font="semibold"
          color="error"
          style={styles.errorMessage}
        >
          {errorMessage}
        </UIText>
      ) : null}

      <UIBottomSheetModal ref={ref} enableDynamicSizing={!searchEnabled}>
        <BottomSheetFlatList
          data={filteredItems}
          contentContainerStyle={styles.bottomSheetList}
          keyboardShouldPersistTaps="handled"
          renderItem={
            renderItem?.({
              handleSelect: (item) => onSelect(item)
            }) ?? defaultListItem
          }
          ListFooterComponent={ListFooterComponent}
          onEndReached={onEndReached}
          ListEmptyComponent={() => {
            if (isLoading) {
              return <UILoader />;
            }
            return null;
          }}
          ListHeaderComponent={
            <>
              <UIText style={styles.bottomSheetHeader} font="semibold">
                {listHeaderTitle}
              </UIText>
              {searchEnabled ? (
                <View style={styles.searchContainer}>
                  <UIIcon
                    xml={ICONS.search}
                    stroke={theme.colors.gray}
                    fill="transparent"
                    width={16}
                    height={16}
                  />

                  <BottomSheetTextInput
                    style={styles.search}
                    placeholder="Пошук"
                    value={searchQuery}
                    autoFocus
                    onChangeText={handleSearchChange}
                    placeholderTextColor={theme.colors.gray}
                    selectionColor={theme.colors.main}
                  />
                </View>
              ) : null}
            </>
          }
        />
      </UIBottomSheetModal>
    </View>
  );
}

export default UIPicker;
