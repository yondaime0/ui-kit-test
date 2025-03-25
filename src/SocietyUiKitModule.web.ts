import { registerWebModule, NativeModule } from 'expo';

import { SocietyUiKitModuleEvents } from './SocietyUiKit.types';

class SocietyUiKitModule extends NativeModule<SocietyUiKitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(SocietyUiKitModule);
