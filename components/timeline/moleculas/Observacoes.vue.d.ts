import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { Observacao } from '../typeDetalhado';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    tituloBotao: {
        type: StringConstructor;
    };
    observacoes: {
        required: true;
        type: PropType<Observacao[]>;
    };
}, {
    emitirAdicionarClick: (mouseEvent: MouseEvent) => void;
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    adicionarClick: (mouseEvent: MouseEvent) => true;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    tituloBotao: {
        type: StringConstructor;
    };
    observacoes: {
        required: true;
        type: PropType<Observacao[]>;
    };
}>> & {
    onAdicionarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {}, {}>;
export default _default;
