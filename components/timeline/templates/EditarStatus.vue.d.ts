import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Status } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}, {
    aoSalvar: (status: Status, mouseEvent: MouseEvent) => void;
    aoCancelar: (mouseEvent: MouseEvent) => void;
    atualizarSelecionado: (novoValor: Status) => void;
    selecionado: import('./vue/dist/vue.esm-bundler.js').Ref<Status>;
    getAparencia: import('./vue/dist/vue.esm-bundler.js').ComputedRef<(botao: string) => "outline" | "preenchido">;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    salvarClick: (status: Status, mouseEvent: MouseEvent) => true;
    cancelarClick: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>> & {
    onSalvarClick?: ((status: Status, mouseEvent: MouseEvent) => any) | undefined;
    onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    salvarVisivel: boolean;
}, {}>;
export default _default;
