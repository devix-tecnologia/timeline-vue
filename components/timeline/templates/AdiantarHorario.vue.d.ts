import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { EventoDetalhado } from '../typeDetalhado';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}, {
    AdiantarHorario: {
        salvarVisivel: boolean;
        horarioOriginal: Date;
        horarioNovo: Date;
        horarioFormatado: string;
    };
    adiantarHorario: () => void;
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>>, {
    salvarVisivel: boolean;
}, {}>;
export default _default;
