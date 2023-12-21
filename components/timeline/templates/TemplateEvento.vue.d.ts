import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    perfilEvento: {
        required: true;
        type: PropType<Perfil>;
    };
    dadosEvento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    perfilEvento: {
        required: true;
        type: PropType<Perfil>;
    };
    dadosEvento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>>, {}, {}>;
export default _default;
