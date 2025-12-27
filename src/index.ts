import { App, Plugin, Component } from 'vue';
import * as components from './components/timeline';
import TimelineComponent from './components/timeline/organismos/Timeline.vue';
import './global.css';

const TimelinePlugin: Plugin = {
  install(app: App, ..._options: unknown[]) {
    Object.keys(components).forEach((key) => {
      const component = (components as Record<string, Component>)[key];
      if (component && typeof component === 'object') {
        app.component(key, component);
      }
    });
  },
};

export default TimelinePlugin;
export { TimelinePlugin, TimelineComponent };
export { Tipos, TiposDetalhado } from './components/timeline';
export * from './components/timeline';
