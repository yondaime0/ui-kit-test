import HTMLView from "react-native-htmlview";
import { useStyles } from "react-native-unistyles";

import { stylesheet } from "./UIHtmlView.styles";

import type { FC } from "react";

const UIHtmlView: FC<{ value: string }> = ({ value }) => {
  const { styles } = useStyles(stylesheet);

  const urlPattern = /https?:\/\/[^\s<]+/g;
  const updatedValue = value.replaceAll(
    urlPattern,
    (url) => `<a href="${url}">${url}</a>`
  );

  return (
    <HTMLView
      value={updatedValue}
      stylesheet={styles}
      paragraphBreak=""
      lineBreak=""
    />
  ) as unknown as JSX.Element;
};

export default UIHtmlView;
