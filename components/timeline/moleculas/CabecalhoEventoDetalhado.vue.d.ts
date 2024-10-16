import { PropType } from 'vue';
import { EventoDetalhado } from '../typeDetalhado';
import { Perfil } from '../type';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>> & Readonly<{}>, {}, {}, {
    Botao: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        titulo: {
            type: StringConstructor;
            default: string;
        };
        icone: {
            type: StringConstructor;
        };
        aparencia: {
            type: PropType<import('./Botao.vue').Aparencia>;
            default: import('./Botao.vue').Aparencia;
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
            type: PropType<import('./Botao.vue').Aparencia>;
            default: import('./Botao.vue').Aparencia;
        };
        tamanho: {
            type: PropType<import('./Botao.vue').Tamanho>;
            default: import('./Botao.vue').Tamanho;
        };
    }>> & Readonly<{
        onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    }>, {
        titulo: string;
        aparencia: import('./Botao.vue').Aparencia;
        tamanho: import('./Botao.vue').Tamanho;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    PerfilTimeline: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        imagemPerfil: {
            type: StringConstructor;
        };
        nomePerfil: {
            type: StringConstructor;
        };
        iconePerfil: {
            type: StringConstructor;
        };
        formatoReduzido: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: import('vue').ComputedRef<{
            "formato-reduzido": boolean;
            "formato-normal": boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        imagemPerfil: {
            type: StringConstructor;
        };
        nomePerfil: {
            type: StringConstructor;
        };
        iconePerfil: {
            type: StringConstructor;
        };
        formatoReduzido: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        formatoReduzido: boolean;
    }, {}, {
        AvatarTimeline: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            imagem: {
                type: StringConstructor;
            };
            icone: {
                type: StringConstructor;
            };
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            imagem: {
                type: StringConstructor;
            };
            icone: {
                type: StringConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    IconeCategoria: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        iconeCategoria: {
            type: StringConstructor;
            required: true;
        };
        categoria: {
            type: StringConstructor;
        };
        escuro: {
            type: BooleanConstructor;
            default: boolean;
        };
        tipo: {
            type: StringConstructor;
        };
        borderColor: {
            type: StringConstructor;
        };
        backgroundColor: {
            type: StringConstructor;
        };
    }>, {
        classes: import('vue').ComputedRef<{
            [x: string]: boolean;
            "bg-escuro": boolean;
            "bg-claro": boolean;
        }>;
        style: import('vue').ComputedRef<{
            borderColor: string | undefined;
            backgroundColor: string | undefined;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        iconeCategoria: {
            type: StringConstructor;
            required: true;
        };
        categoria: {
            type: StringConstructor;
        };
        escuro: {
            type: BooleanConstructor;
            default: boolean;
        };
        tipo: {
            type: StringConstructor;
        };
        borderColor: {
            type: StringConstructor;
        };
        backgroundColor: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {
        escuro: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    Hora: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        hora: {
            required: true;
            type: DateConstructor;
        };
        aparencia: {
            type: StringConstructor;
            default: string;
            validator(aparencia: string): boolean;
        };
    }>, {
        horas: import('vue').Ref<Date, Date>;
        classes: import('vue').ComputedRef<{
            [x: string]: boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        hora: {
            required: true;
            type: DateConstructor;
        };
        aparencia: {
            type: StringConstructor;
            default: string;
            validator(aparencia: string): boolean;
        };
    }>> & Readonly<{}>, {
        aparencia: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
