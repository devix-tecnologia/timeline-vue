import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Perfil, Status } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    eventos: {
        required: true;
        type: PropType<TipoEventoDetalhado[]>;
    };
}, {
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
                data: {
                    toString: () => string;
                    toDateString: () => string;
                    toTimeString: () => string;
                    toLocaleString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleDateString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleTimeString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    valueOf: () => number;
                    getTime: () => number;
                    getFullYear: () => number;
                    getUTCFullYear: () => number;
                    getMonth: () => number;
                    getUTCMonth: () => number;
                    getDate: () => number;
                    getUTCDate: () => number;
                    getDay: () => number;
                    getUTCDay: () => number;
                    getHours: () => number;
                    getUTCHours: () => number;
                    getMinutes: () => number;
                    getUTCMinutes: () => number;
                    getSeconds: () => number;
                    getUTCSeconds: () => number;
                    getMilliseconds: () => number;
                    getUTCMilliseconds: () => number;
                    getTimezoneOffset: () => number;
                    setTime: (time: number) => number;
                    setMilliseconds: (ms: number) => number;
                    setUTCMilliseconds: (ms: number) => number;
                    setSeconds: (sec: number, ms?: number | undefined) => number;
                    setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                    setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setDate: (date: number) => number;
                    setUTCDate: (date: number) => number;
                    setMonth: (month: number, date?: number | undefined) => number;
                    setUTCMonth: (month: number, date?: number | undefined) => number;
                    setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    toUTCString: () => string;
                    toISOString: () => string;
                    toJSON: (key?: any) => string;
                    [Symbol.toPrimitive]: {
                        (hint: "default"): string;
                        (hint: "string"): string;
                        (hint: "number"): number;
                        (hint: string): string | number;
                    };
                };
                previstoPara: {
                    toString: () => string;
                    toDateString: () => string;
                    toTimeString: () => string;
                    toLocaleString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleDateString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleTimeString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    valueOf: () => number;
                    getTime: () => number;
                    getFullYear: () => number;
                    getUTCFullYear: () => number;
                    getMonth: () => number;
                    getUTCMonth: () => number;
                    getDate: () => number;
                    getUTCDate: () => number;
                    getDay: () => number;
                    getUTCDay: () => number;
                    getHours: () => number;
                    getUTCHours: () => number;
                    getMinutes: () => number;
                    getUTCMinutes: () => number;
                    getSeconds: () => number;
                    getUTCSeconds: () => number;
                    getMilliseconds: () => number;
                    getUTCMilliseconds: () => number;
                    getTimezoneOffset: () => number;
                    setTime: (time: number) => number;
                    setMilliseconds: (ms: number) => number;
                    setUTCMilliseconds: (ms: number) => number;
                    setSeconds: (sec: number, ms?: number | undefined) => number;
                    setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                    setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setDate: (date: number) => number;
                    setUTCDate: (date: number) => number;
                    setMonth: (month: number, date?: number | undefined) => number;
                    setUTCMonth: (month: number, date?: number | undefined) => number;
                    setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    toUTCString: () => string;
                    toISOString: () => string;
                    toJSON: (key?: any) => string;
                    [Symbol.toPrimitive]: {
                        (hint: "default"): string;
                        (hint: "string"): string;
                        (hint: "number"): number;
                        (hint: string): string | number;
                    };
                };
                duracao?: number | undefined;
                realizado?: {
                    toString: () => string;
                    toDateString: () => string;
                    toTimeString: () => string;
                    toLocaleString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleDateString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleTimeString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    valueOf: () => number;
                    getTime: () => number;
                    getFullYear: () => number;
                    getUTCFullYear: () => number;
                    getMonth: () => number;
                    getUTCMonth: () => number;
                    getDate: () => number;
                    getUTCDate: () => number;
                    getDay: () => number;
                    getUTCDay: () => number;
                    getHours: () => number;
                    getUTCHours: () => number;
                    getMinutes: () => number;
                    getUTCMinutes: () => number;
                    getSeconds: () => number;
                    getUTCSeconds: () => number;
                    getMilliseconds: () => number;
                    getUTCMilliseconds: () => number;
                    getTimezoneOffset: () => number;
                    setTime: (time: number) => number;
                    setMilliseconds: (ms: number) => number;
                    setUTCMilliseconds: (ms: number) => number;
                    setSeconds: (sec: number, ms?: number | undefined) => number;
                    setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                    setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setDate: (date: number) => number;
                    setUTCDate: (date: number) => number;
                    setMonth: (month: number, date?: number | undefined) => number;
                    setUTCMonth: (month: number, date?: number | undefined) => number;
                    setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    toUTCString: () => string;
                    toISOString: () => string;
                    toJSON: (key?: any) => string;
                    [Symbol.toPrimitive]: {
                        (hint: "default"): string;
                        (hint: "string"): string;
                        (hint: "number"): number;
                        (hint: string): string | number;
                    };
                } | undefined;
                tolerancia: number;
                titulo: string;
                subtitulo: string;
                destaque: string;
                categoria: {
                    nome: string;
                    icone: string;
                };
                status: Status;
                criticidade: import("../type").Criticidade;
                atual: boolean;
                scroll: boolean;
                clicavel?: boolean | undefined;
                observacoes: {
                    mensagem: string;
                    autor: {
                        nome: string;
                    };
                    criadaEm: {
                        toString: () => string;
                        toDateString: () => string;
                        toTimeString: () => string;
                        toLocaleString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        toLocaleDateString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        toLocaleTimeString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        valueOf: () => number;
                        getTime: () => number;
                        getFullYear: () => number;
                        getUTCFullYear: () => number;
                        getMonth: () => number;
                        getUTCMonth: () => number;
                        getDate: () => number;
                        getUTCDate: () => number;
                        getDay: () => number;
                        getUTCDay: () => number;
                        getHours: () => number;
                        getUTCHours: () => number;
                        getMinutes: () => number;
                        getUTCMinutes: () => number;
                        getSeconds: () => number;
                        getUTCSeconds: () => number;
                        getMilliseconds: () => number;
                        getUTCMilliseconds: () => number;
                        getTimezoneOffset: () => number;
                        setTime: (time: number) => number;
                        setMilliseconds: (ms: number) => number;
                        setUTCMilliseconds: (ms: number) => number;
                        setSeconds: (sec: number, ms?: number | undefined) => number;
                        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                        setDate: (date: number) => number;
                        setUTCDate: (date: number) => number;
                        setMonth: (month: number, date?: number | undefined) => number;
                        setUTCMonth: (month: number, date?: number | undefined) => number;
                        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                        toUTCString: () => string;
                        toISOString: () => string;
                        toJSON: (key?: any) => string;
                        [Symbol.toPrimitive]: {
                            (hint: "default"): string;
                            (hint: "string"): string;
                            (hint: "number"): number;
                            (hint: string): string | number;
                        };
                    };
                }[];
            } | null;
        };
    };
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    eventoTimelineClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoStatusEditClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoDetalhadoObservacoesAddClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    editarStatusSalvarClicked: (evento: TipoEventoDetalhado, status: Status, mouseEvent: MouseEvent) => true;
    editarStatusCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    adicionarObservacaoSalvarClicked: (evento: TipoEventoDetalhado, mensagem: String, mouseEvent: MouseEvent) => true;
    adicionarObservacaoCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    voltarClick: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    perfil: {
        required: true;
        type: PropType<Perfil>;
    };
    eventos: {
        required: true;
        type: PropType<TipoEventoDetalhado[]>;
    };
}>> & {
    onVoltarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onEventoTimelineClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEventoStatusEditClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEventoDetalhadoObservacoesAddClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onEditarStatusSalvarClicked?: ((evento: TipoEventoDetalhado, status: Status, mouseEvent: MouseEvent) => any) | undefined;
    onEditarStatusCancelarClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
    onAdicionarObservacaoSalvarClicked?: ((evento: TipoEventoDetalhado, mensagem: String, mouseEvent: MouseEvent) => any) | undefined;
    onAdicionarObservacaoCancelarClicked?: ((evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => any) | undefined;
}, {}, {}>;
export default _default;
