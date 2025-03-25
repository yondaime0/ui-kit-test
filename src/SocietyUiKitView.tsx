import { requireNativeView } from 'expo';
import * as React from 'react';

import { SocietyUiKitViewProps } from './SocietyUiKit.types';

const NativeView: React.ComponentType<SocietyUiKitViewProps> =
  requireNativeView('SocietyUiKit');

export default function SocietyUiKitView(props: SocietyUiKitViewProps) {
  return <NativeView {...props} />;
}
