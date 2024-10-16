import { PropType } from 'vue';
import { Categoria, Status, Criticidade } from '../type';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
}>, {
    handleClick: (mouseEvent: MouseEvent) => void;
    eventoSelecionado: import('vue').ComputedRef<{
        atual: boolean;
        padrao: boolean;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}>> & Readonly<{
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}>, {
    ehAtual: boolean;
    clicavel: boolean;
}, {}, {
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
    HoraEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        horaPrevista: {
            type: DateConstructor;
            required: true;
        };
        horaRealizada: {
            required: false;
            type: PropType<Date | null>;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        horaPrevista: {
            type: DateConstructor;
            required: true;
        };
        horaRealizada: {
            required: false;
            type: PropType<Date | null>;
        };
    }>> & Readonly<{}>, {}, {}, {
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
    DescricaoEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        titulo: {
            required: true;
            type: StringConstructor;
        };
        subtitulo: {
            required: false;
            type: StringConstructor;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        titulo: {
            required: true;
            type: StringConstructor;
        };
        subtitulo: {
            required: false;
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {
        TituloEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            titulo: {
                required: true;
                type: StringConstructor;
            };
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            titulo: {
                required: true;
                type: StringConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        SubtituloEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            subtitulo: {
                required: true;
                type: StringConstructor;
            };
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            subtitulo: {
                required: true;
                type: StringConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    Destaque: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        texto: {
            type: StringConstructor;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        texto: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
