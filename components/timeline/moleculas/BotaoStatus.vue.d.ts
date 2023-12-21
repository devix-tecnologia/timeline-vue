import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Status } from '../type';
import { Aparencia } from './Botao.vue';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        type: PropType<Status>;
        default: string;
    };
}, {
    emitirClick: (mouseEvent: MouseEvent) => void;
    classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        type: PropType<Status>;
        default: string;
    };
}>> & {
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    status: Status;
}, {}>;
export default _default;
