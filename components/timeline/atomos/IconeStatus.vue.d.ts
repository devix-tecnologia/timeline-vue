import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Status } from '../type';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    status: {
        required: true;
        type: PropType<Status>;
    };
}, {
    classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    status: {
        required: true;
        type: PropType<Status>;
    };
}>>, {}, {}>;
export default _default;
