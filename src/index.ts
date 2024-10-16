import { App, Plugin, Component } from 'vue';
import * as components from './components/timeline';
import './global.css';

const Timeline: Plugin = {
  install(app: App, ..._options: unknown[]) {
    Object.keys(components).forEach((key) => {
      const component = (components as Record<string, Component>)[key];
      if (component && typeof component === 'object') {
        app.component(key, component);
      }
    });
  },
};

export { Timeline };

export * from './components/timeline';
