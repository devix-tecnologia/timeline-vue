import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Aparencia } from './Botao.vue';
import { Status } from '../type';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        required: true;
        type: PropType<Status>;
    };
}, {
    emitClick: (mouseEvent: MouseEvent) => void;
    props: import("@vue/shared").LooseRequired<{
        readonly status: Status;
        readonly aparencia?: Aparencia | undefined;
        readonly onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    } & {}>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        required: true;
        type: PropType<Status>;
    };
}>> & {
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {}, {}>;
export default _default;
