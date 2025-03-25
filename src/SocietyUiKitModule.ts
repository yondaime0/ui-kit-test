import { NativeModule, requireNativeModule } from 'expo';

import { SocietyUiKitModuleEvents } from './SocietyUiKit.types';

declare class SocietyUiKitModule extends NativeModule<SocietyUiKitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<SocietyUiKitModule>('SocietyUiKit');
