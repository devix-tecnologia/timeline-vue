import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { Perfil, Status, Evento as TipoEvento } from '../type';
import { EventoDetalhado as TipoEventoDetalhado } from '../typeDetalhado';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    eventoTimelineClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoStatusEditClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    eventoDetalhadoObservacoesAddClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    editarStatusSalvarClicked: (evento: TipoEventoDetalhado, status: Status, mouseEvent: MouseEvent) => true;
    editarStatusCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    adicionarObservacaoSalvarClicked: (evento: TipoEventoDetalhado, mensagem: String, mouseEvent: MouseEvent) => true;
    adicionarObservacaoCancelarClicked: (evento: TipoEventoDetalhado, mouseEvent: MouseEvent) => true;
    voltarClick: (mouseEvent: MouseEvent) => true;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
