import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}, {
    handleEditarClick: (mouseEvent: MouseEvent) => void;
    handleAdicionarObservacaoClick: (mouseEvent: MouseEvent) => void;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    statusEditarClick: (mouseEvent: MouseEvent) => true;
    observacaoAdicionarClick: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>> & {
    onStatusEditarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onObservacaoAdicionarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {}, {}>;
export default _default;
