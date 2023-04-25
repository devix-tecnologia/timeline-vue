import { Plugin } from "vue";
import * as components from "./components/timeline";
import "./global.css";

const Timeline: Plugin = {
  install(app, ...options) {
    for (const key in components) {
      // @ts-expect-error
      app.component(key, components[key]);
    }
  },
};

export default Timeline;

export * from "./components/timeline";
