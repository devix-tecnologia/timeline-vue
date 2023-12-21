import { PropType } from './vue/dist/vue.esm-bundler.js';
import { EventoDetalhado } from '../typeDetalhado';
import { Perfil } from '../type';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>>, {}, {}>;
export default _default;
