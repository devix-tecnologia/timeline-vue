import { PropType } from 'vue';
import { Status } from '../type';
import { Aparencia } from './Botao.vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        type: PropType<Status>;
        default: string;
    };
}>, {
    emitirClick: (mouseEvent: MouseEvent) => void;
    classes: import('vue').ComputedRef<{
        [x: string]: boolean;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (_mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    aparencia: {
        type: PropType<Aparencia>;
    };
    status: {
        type: PropType<Status>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((_mouseEvent: MouseEvent) => any) | undefined;
}>, {
    status: Status;
}, {}, {
    Botao: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        titulo: {
            type: StringConstructor;
            default: string;
        };
        icone: {
            type: StringConstructor;
        };
        aparencia: {
            type: PropType<Aparencia>;
            default: Aparencia;
        };
        tamanho: {
            type: PropType<import('./Botao.vue').Tamanho>;
            default: import('./Botao.vue').Tamanho;
        };
    }>, {
        handleClick: (mouseEvent: MouseEvent) => void;
        classes: import('vue').ComputedRef<{
            [x: string]: boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        titulo: {
            type: StringConstructor;
            default: string;
        };
        icone: {
            type: StringConstructor;
        };
        aparencia: {
            type: PropType<Aparencia>;
            default: Aparencia;
        };
        tamanho: {
            type: PropType<import('./Botao.vue').Tamanho>;
            default: import('./Botao.vue').Tamanho;
        };
    }>> & Readonly<{
        onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    }>, {
        titulo: string;
        aparencia: Aparencia;
        tamanho: import('./Botao.vue').Tamanho;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    IconeStatus: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        status: {
            required: true;
            type: PropType<Status>;
        };
    }>, {
        classes: import('vue').ComputedRef<{
            [x: string]: boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        status: {
            required: true;
            type: PropType<Status>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
