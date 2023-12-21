import { App, Plugin } from "vue";
import * as components from "./components/timeline";
import "./global.css";

const Timeline: Plugin = {
  install(app: App, ...options: any[]) {
    Object.keys(components).forEach((key) => {
      const component = (components as any)[key];
      if (component && typeof component === "object") {
        app.component(key, component);
      }
    });
  },
};

export { Timeline };

export * from "./components/timeline";
