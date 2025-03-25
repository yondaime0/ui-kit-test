import * as React from 'react';

import { SocietyUiKitViewProps } from './SocietyUiKit.types';

export default function SocietyUiKitView(props: SocietyUiKitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
