import { PropType } from 'vue';
import { Status } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>, {
    aoSalvar: (status: Status, mouseEvent: MouseEvent) => void;
    aoCancelar: (mouseEvent: MouseEvent) => void;
    atualizarSelecionado: (novoValor: Status) => void;
    selecionado: import('vue').Ref<Status, Status>;
    getAparencia: import('vue').ComputedRef<(botao: string) => "outline" | "preenchido">;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    salvarClick: (status: Status, mouseEvent: MouseEvent) => true;
    cancelarClick: (mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    evento: {
        required: true;
        type: PropType<EventoDetalhado>;
    };
}>> & Readonly<{
    onSalvarClick?: ((status: Status, mouseEvent: MouseEvent) => any) | undefined;
    onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}>, {
    salvarVisivel: boolean;
}, {}, {
    EditarEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        salvarVisivel: {
            type: BooleanConstructor;
        };
    }>, {
        emitirSalvarClick: (mouseEvent: MouseEvent) => void;
        emitirCancelarClick: (mouseEvent: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        salvarClick: (mouseEvent: MouseEvent) => true;
        cancelarClick: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        salvarVisivel: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onSalvarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    }>, {
        salvarVisivel: boolean;
    }, {}, {
        AreaSalvamento: import('vue').DefineComponent<{}, {
            emitirSalvarClick: (mouseEvent: MouseEvent) => void;
            emitirCancelarClick: (mouseEvent: MouseEvent) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            salvarClick: (mouseEvent: MouseEvent) => true;
            cancelarClick: (mouseEvent: MouseEvent) => true;
        }, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
            onSalvarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
            onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        }>, {}, {}, {
            Botao: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
                titulo: {
                    type: StringConstructor;
                    default: string;
                };
                icone: {
                    type: StringConstructor;
                };
                aparencia: {
                    type: PropType<import('../moleculas/Botao.vue').Aparencia>;
                    default: import('../moleculas/Botao.vue').Aparencia;
                };
                tamanho: {
                    type: PropType<import('../moleculas/Botao.vue').Tamanho>;
                    default: import('../moleculas/Botao.vue').Tamanho;
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
                    type: PropType<import('../moleculas/Botao.vue').Aparencia>;
                    default: import('../moleculas/Botao.vue').Aparencia;
                };
                tamanho: {
                    type: PropType<import('../moleculas/Botao.vue').Tamanho>;
                    default: import('../moleculas/Botao.vue').Tamanho;
                };
            }>> & Readonly<{
                onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
            }>, {
                titulo: string;
                aparencia: import('../moleculas/Botao.vue').Aparencia;
                tamanho: import('../moleculas/Botao.vue').Tamanho;
            }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
    BotaoStatus: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        aparencia: {
            type: PropType<import('../moleculas/Botao.vue').Aparencia>;
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
        click: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        aparencia: {
            type: PropType<import('../moleculas/Botao.vue').Aparencia>;
        };
        status: {
            type: PropType<Status>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
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
                type: PropType<import('../moleculas/Botao.vue').Aparencia>;
                default: import('../moleculas/Botao.vue').Aparencia;
            };
            tamanho: {
                type: PropType<import('../moleculas/Botao.vue').Tamanho>;
                default: import('../moleculas/Botao.vue').Tamanho;
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
                type: PropType<import('../moleculas/Botao.vue').Aparencia>;
                default: import('../moleculas/Botao.vue').Aparencia;
            };
            tamanho: {
                type: PropType<import('../moleculas/Botao.vue').Tamanho>;
                default: import('../moleculas/Botao.vue').Tamanho;
            };
        }>> & Readonly<{
            onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        }>, {
            titulo: string;
            aparencia: import('../moleculas/Botao.vue').Aparencia;
            tamanho: import('../moleculas/Botao.vue').Tamanho;
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
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
