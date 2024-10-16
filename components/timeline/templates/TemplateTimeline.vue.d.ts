import { PropType } from 'vue';
import { Perfil, Status, Evento as TipoEvento } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    eventos: {
        required: true;
        type: PropType<TipoEventoDetalhado[]>;
    };
}>, {
    selecionarEvento: (evento: TipoEvento, mouseEvent: MouseEvent) => void;
    handleVoltarTela: (mouseEvent: MouseEvent) => void;
    handleStatusEditarClick: (mouseEvent: MouseEvent) => void;
    handleStatusCancelarClick: (mouseEvent: MouseEvent) => void;
    handleStatusSalvarClick: (status: Status, mouseEvent: MouseEvent) => void;
    handleObservacaoAdicionarClick: (mouseEvent: MouseEvent) => void;
    handleAdicionarObservacaoSalvarClick: (mensagem: String, mouseEvent: MouseEvent) => void;
    handleObservacaoAdicionarCancelarClick: (mouseEvent: MouseEvent) => void;
    TemplateTimeline: {
        topo: {
            exibir: boolean;
        };
        timeline: {
            exibir: boolean;
        };
        evento: {
            exibir: boolean;
        };
        editarStatus: {
            exibir: boolean;
        };
        adicionarObservacao: {
            exibir: boolean;
        };
        dados: {
            eventos: TipoEventoDetalhado[];
            perfil: Perfil;
            eventosTimeline: TipoEventoDetalhado[];
            eventosDetalhados: TipoEventoDetalhado[];
            eventoAtual: {
                data: Date;
                previstoPara: Date;
                duracao?: number | undefined;
                realizado?: Date | undefined;
                tolerancia: number;
                titulo: string;
                subtitulo: string;
                destaque: string;
                categoria: {
                    nome: string;
                    icone: string;
                };
                status: Status;
                criticidade: import('../type').Criticidade;
                atual: boolean;
                scroll: boolean;
                clicavel?: boolean | undefined;
                observacoes: {
                    mensagem: string;
                    autor: {
                        nome: string;
                    };
                    criadaEm: Date;
                }[];
            } | null;
        };
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    eventoTimelineClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoStatusEditClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoDetalhadoObservacoesAddClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    editarStatusSalvarClicked: (evento: TipoEventoDetalhado, status: Status, mouseEvent: MouseEvent) => true;
    editarStatusCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    adicionarObservacaoSalvarClicked: (evento: TipoEventoDetalhado, mensagem: String, mouseEvent: MouseEvent) => true;
    adicionarObservacaoCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    voltarClick: (mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    eventos: {
        required: true;
        type: PropType<TipoEventoDetalhado[]>;
    };
}>> & Readonly<{
    onVoltarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onEventoTimelineClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEventoStatusEditClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEventoDetalhadoObservacoesAddClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEditarStatusSalvarClicked?: ((evento: TipoEventoDetalhado, status: Status, mouseEvent: MouseEvent) => any) | undefined;
    onEditarStatusCancelarClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onAdicionarObservacaoSalvarClicked?: ((evento: TipoEventoDetalhado, mensagem: String, mouseEvent: MouseEvent) => any) | undefined;
    onAdicionarObservacaoCancelarClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
}>, {}, {}, {
    Topo: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        titulo: {
            type: StringConstructor;
        };
        escuro: {
            type: BooleanConstructor;
            default: boolean;
        };
        link: {};
    }>, {
        emitirVoltarClick: (mouseEvent: MouseEvent) => void;
        classes: import('vue').ComputedRef<{
            'bg-escuro': boolean;
            'bg-claro': boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        voltarClick: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        titulo: {
            type: StringConstructor;
        };
        escuro: {
            type: BooleanConstructor;
            default: boolean;
        };
        link: {};
    }>> & Readonly<{
        onVoltarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    }>, {
        escuro: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    Evento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        perfil: {
            required: true;
            type: PropType<Perfil>;
        };
        evento: {
            required: true;
            type: PropType<TipoEventoDetalhado>;
        };
    }>, {
        handleEditarClick: (mouseEvent: MouseEvent) => void;
        handleAdicionarObservacaoClick: (mouseEvent: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        statusEditarClick: (mouseEvent: MouseEvent) => true;
        observacaoAdicionarClick: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        perfil: {
            required: true;
            type: PropType<Perfil>;
        };
        evento: {
            required: true;
            type: PropType<TipoEventoDetalhado>;
        };
    }>> & Readonly<{
        onStatusEditarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        onObservacaoAdicionarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    }>, {}, {}, {
        CabecalhoEventoDetalhado: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            perfil: {
                required: true;
                type: PropType<Perfil>;
            };
            evento: {
                required: true;
                type: PropType<TipoEventoDetalhado>;
            };
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            perfil: {
                required: true;
                type: PropType<Perfil>;
            };
            evento: {
                required: true;
                type: PropType<TipoEventoDetalhado>;
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
        Observacoes: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            tituloBotao: {
                type: StringConstructor;
            };
            observacoes: {
                required: true;
                type: PropType<import('../typeDetalhado').Observacao[]>;
            };
        }>, {
            emitirAdicionarClick: (mouseEvent: MouseEvent) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            adicionarClick: (mouseEvent: MouseEvent) => true;
        }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            tituloBotao: {
                type: StringConstructor;
            };
            observacoes: {
                required: true;
                type: PropType<import('../typeDetalhado').Observacao[]>;
            };
        }>> & Readonly<{
            onAdicionarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
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
        StatusEvento: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            aparencia: {
                type: PropType<import('../moleculas/Botao.vue').Aparencia>;
            };
            status: {
                required: true;
                type: PropType<Status>;
            };
        }>, {
            emitClick: (mouseEvent: MouseEvent) => void;
            props: import('@vue/shared').LooseRequired<Readonly<import('vue').ExtractPropTypes<{
                aparencia: {
                    type: PropType<import('../moleculas/Botao.vue').Aparencia>;
                };
                status: {
                    required: true;
                    type: PropType<Status>;
                };
            }>> & Readonly<{
                onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
            }> & {}>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (mouseEvent: MouseEvent) => true;
        }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            aparencia: {
                type: PropType<import('../moleculas/Botao.vue').Aparencia>;
            };
            status: {
                required: true;
                type: PropType<Status>;
            };
        }>> & Readonly<{
            onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        }>, {}, {}, {
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
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    Timeline: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        perfilTimeline: {
            required: false;
            type: PropType<Perfil>;
        };
        eventosTimeline: {
            required: true;
            type: PropType<TipoEvento[]>;
        };
    }>, {
        eventosPorTipo: import('vue').ComputedRef<({
            tipo: "dia";
            valor: Date;
            key: number;
        } | {
            tipo: "evento";
            valor: TipoEvento;
            key: number;
        } | {
            tipo: "eventos";
            valor: TipoEvento[];
            key: number;
        })[]>;
        scrollParaItemAtual: () => void;
        handleEventoClick: (evento: TipoEvento, mouseEvent: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        eventoClick: (evento: TipoEvento, mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        perfilTimeline: {
            required: false;
            type: PropType<Perfil>;
        };
        eventosTimeline: {
            required: true;
            type: PropType<TipoEvento[]>;
        };
    }>> & Readonly<{
        onEventoClick?: ((evento: TipoEvento, mouseEvent: MouseEvent) => any) | undefined;
    }>, {}, {}, {
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
        SeparadorPeriodo: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            dataSeparador: {
                required: true;
                type: DateConstructor;
            };
        }>, {
            mesCorrente: (mes: number) => any;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            dataSeparador: {
                required: true;
                type: DateConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {
            BoxData: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
                dataNumero: {
                    required: true;
                    type: NumberConstructor;
                };
                aparencia: {
                    type: StringConstructor;
                };
            }>, {
                classes: import('vue').ComputedRef<{
                    [x: string]: boolean;
                }>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
                dataNumero: {
                    required: true;
                    type: NumberConstructor;
                };
                aparencia: {
                    type: StringConstructor;
                };
            }>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        EventoTimeline: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            status: {
                required: true;
                type: PropType<Status>;
            };
            criticidade: {
                required: true;
                type: PropType<import('../type').Criticidade>;
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
                type: PropType<import('../type').Categoria>;
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
                type: PropType<import('../type').Criticidade>;
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
                type: PropType<import('../type').Categoria>;
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
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    EditarStatus: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        salvarVisivel: {
            type: BooleanConstructor;
        };
        evento: {
            required: true;
            type: PropType<TipoEventoDetalhado>;
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
            type: PropType<TipoEventoDetalhado>;
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
    AdicionarObservacao: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        salvarVisivel: {
            type: BooleanConstructor;
        };
        observacao: {
            type: StringConstructor;
        };
    }>, {
        salvar: (mouseEvent: MouseEvent) => void;
        cancelar: (mouseEvent: MouseEvent) => void;
        state: import('vue').Ref<{
            observacaoLocal: string;
        }, {
            observacaoLocal: string;
        } | {
            observacaoLocal: string;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        adicionarClick: (mensagem: string, mouseEvent: MouseEvent) => true;
        cancelarClick: (mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        salvarVisivel: {
            type: BooleanConstructor;
        };
        observacao: {
            type: StringConstructor;
        };
    }>> & Readonly<{
        onAdicionarClick?: ((mensagem: string, mouseEvent: MouseEvent) => any) | undefined;
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
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
