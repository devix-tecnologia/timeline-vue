import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Categoria, Status, Criticidade } from '../type';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    status: {
        required: true;
        type: PropType<Status>;
    };
    criticidade: {
        required: true;
        type: PropType<Criticidade>;
    };
    ehAtual: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    previstoPara: {
        required: true;
        type: DateConstructor;
    };
    realizadoEm: {
        required: false;
        type: PropType<Date | null>;
    };
    categoria: {
        required: true;
        type: PropType<Categoria>;
    };
    titulo: {
        required: true;
        type: StringConstructor;
    };
    subtitulo: {
        required: false;
        type: StringConstructor;
    };
    textoDestaque: {
        required: false;
        type: StringConstructor;
    };
    clicavel: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleClick: (mouseEvent: MouseEvent) => void;
    eventoSelecionado: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        atual: boolean;
        padrao: boolean;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    status: {
        required: true;
        type: PropType<Status>;
    };
    criticidade: {
        required: true;
        type: PropType<Criticidade>;
    };
    ehAtual: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    previstoPara: {
        required: true;
        type: DateConstructor;
    };
    realizadoEm: {
        required: false;
        type: PropType<Date | null>;
    };
    categoria: {
        required: true;
        type: PropType<Categoria>;
    };
    titulo: {
        required: true;
        type: StringConstructor;
    };
    subtitulo: {
        required: false;
        type: StringConstructor;
    };
    textoDestaque: {
        required: false;
        type: StringConstructor;
    };
    clicavel: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    ehAtual: boolean;
    clicavel: boolean;
}, {}>;
export default _default;
