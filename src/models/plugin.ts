import { PluginModule } from "./plugin_module";

export interface LennaPlugin {
    name: string;
    url?: string;
    icon?: string;
    enabled: boolean;
    config: Object;
    plugin?: PluginModule;
    process?: Function;
}