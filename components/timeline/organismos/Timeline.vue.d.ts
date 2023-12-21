import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Evento, Perfil } from '../type';
type TipoEventoTimeline = {
    tipo: 'dia';
    valor: Date;
    key: number;
} | {
    tipo: 'evento';
    valor: Evento;
    key: number;
} | {
    tipo: 'eventos';
    valor: Evento[];
    key: number;
};
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    perfilTimeline: {
        required: false;
        type: PropType<Perfil>;
    };
    eventosTimeline: {
        required: true;
        type: PropType<Evento[]>;
    };
}, {
    eventosPorTipo: import('./vue/dist/vue.esm-bundler.js').ComputedRef<TipoEventoTimeline[]>;
    scrollParaItemAtual: () => void;
    handleEventoClick: (evento: Evento, mouseEvent: MouseEvent) => void;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    eventoClick: (evento: Evento, mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    perfilTimeline: {
        required: false;
        type: PropType<Perfil>;
    };
    eventosTimeline: {
        required: true;
        type: PropType<Evento[]>;
    };
}>> & {
    onEventoClick?: ((evento: Evento, mouseEvent: MouseEvent) => any) | undefined;
}, {}, {}>;
export default _default;
