import { UlaCallback } from '.';
import { PluginResult } from './model/plugin-result';
export declare class EventHandler {
    private plugins;
    private enabledPlugins;
    constructor(plugins: any[]);
    /**
  