import{d as x,C as p,r as _,l as c,e as Z,u as d,q as m,o as l}from"./vue.esm-bundler-2c57d92d.js";/* empty css                 */import{T as q}from"./Topo-7917c71b.js";import{E as M}from"./EventoDetalhado-558f2f6a.js";import{T as P}from"./Timeline-20cdb5c9.js";import{E as $}from"./EditarStatus-09a8884f.js";import{A as z}from"./AdicionarObservacao-5659fedf.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./CabecalhoEventoDetalhado-f39fee56.js";import"./Botao-b17e19c7.js";import"./PerfilTimeline-6f22df10.js";import"./AvatarTimeline-abf7ef71.js";import"./IconeCategoria-e079c2bd.js";import"./Hora-95961214.js";import"./Observacoes-ff5caa76.js";import"./StatusEvento-bd3ccd46.js";import"./BotaoStatus-7131e699.js";import"./IconeStatus-69ce0bf0.js";import"./EventoTimeline-4da5dd1b.js";import"./DescricaoEvento-a26f1433.js";import"./SubtituloEvento-0f85e282.js";import"./TituloEvento-94736f80.js";import"./HoraEvento-94b96a99.js";import"./Destaque-77bc7696.js";import"./SeparadorPeriodo-acd193d5.js";import"./BoxData-eb97db15.js";import"./EditarEvento-c28e502c.js";import"./AreaSalvamento-49689685.js";const V=x({props:{perfil:{required:!0,type:Object},eventos:{required:!0,type:Array}},components:{Topo:q,Evento:M,Timeline:P,EditarStatus:$,AdicionarObservacao:z},emits:{eventoTimelineClicked:(e,i)=>!0,eventoStatusEditClicked:(e,i)=>!0,eventoDetalhadoObservacoesAddClicked:(e,i)=>!0,editarStatusSalvarClicked:(e,i,r)=>!0,editarStatusCancelarClicked:(e,i)=>!0,adicionarObservacaoSalvarClicked:(e,i,r)=>!0,adicionarObservacaoCancelarClicked:(e,i)=>!0,voltarClick:e=>!0},setup(e,{emit:i}){const r=p(e,"eventos"),s=p(null),o=_({topo:{exibir:!0},timeline:{exibir:!0},evento:{exibir:!1},editarStatus:{exibir:!1},adicionarObservacao:{exibir:!1},dados:{eventos:p(e,"eventos"),perfil:p(e,"perfil"),eventosTimeline:r,eventosDetalhados:r,eventoAtual:s}}),C=a=>"observacoes"in a,n=a=>{const t=["Timeline","Evento"];o.topo.exibir=t.includes(a),o.timeline.exibir=a==="Timeline",o.evento.exibir=a==="Evento",o.editarStatus.exibir=a==="EditarStatus",o.adicionarObservacao.exibir=a==="AdicionarObservacao"};return{selecionarEvento:(a,t)=>{C(a)&&(i("eventoTimelineClicked",a,t),o.dados.eventoAtual=a,n("Evento"))},handleVoltarTela:a=>{o.dados.eventoAtual?n("Timeline"):i("voltarClick",a)},handleStatusEditarClick:a=>{n("EditarStatus")},handleStatusCancelarClick:a=>{o.dados.eventoAtual&&(n("Evento"),i("editarStatusCancelarClicked",o.dados.eventoAtual,a))},handleStatusSalvarClick:(a,t)=>{o.dados.eventoAtual&&(n("Evento"),i("editarStatusSalvarClicked",o.dados.eventoAtual,a,t))},handleObservacaoAdicionarClick:a=>{o.dados.eventoAtual&&(i("eventoDetalhadoObservacoesAddClicked",o.dados.eventoAtual,a),n("AdicionarObservacao"))},handleAdicionarObservacaoSalvarClick:(a,t)=>{o.dados.eventoAtual&&(n("Evento"),i("adicionarObservacaoSalvarClicked",o.dados.eventoAtual,a,t))},handleObservacaoAdicionarCancelarClick:a=>{o.dados.eventoAtual&&(n("Evento"),i("adicionarObservacaoCancelarClicked",o.dados.eventoAtual,a))},TemplateTimeline:o}}});const J={class:"pagina","data-testid":"template-timeline"};function N(e,i,r,s,o,C){const n=c("Topo"),T=c("Timeline"),k=c("Evento"),b=c("EditarStatus"),E=c("AdicionarObservacao");return l(),Z("div",J,[e.TemplateTimeline.topo.exibir?(l(),d(n,{key:0,titulo:e.TemplateTimeline.dados.perfil.nome,escuro:!1,onVoltarClick:e.handleVoltarTela},null,8,["titulo","onVoltarClick"])):m("",!0),e.TemplateTimeline.timeline.exibir?(l(),d(T,{key:1,"data-testid":"timeline",perfilTimeline:e.TemplateTimeline.dados.perfil,eventosTimeline:e.TemplateTimeline.dados.eventosTimeline,onEventoClick:e.selecionarEvento},null,8,["perfilTimeline","eventosTimeline","onEventoClick"])):m("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.evento.exibir?(l(),d(k,{key:2,"data-testid":"evento-detalhado",perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onObservacaoAdicionarClick:e.handleObservacaoAdicionarClick,onStatusEditarClick:e.handleStatusEditarClick},null,8,["perfil","evento","onObservacaoAdicionarClick","onStatusEditarClick"])):m("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.editarStatus.exibir?(l(),d(b,{key:3,"data-testid":"editar-status",salvarVisivel:e.TemplateTimeline.editarStatus.exibir,perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onSalvarClick:e.handleStatusSalvarClick,onCancelarClick:e.handleStatusCancelarClick},null,8,["salvarVisivel","perfil","evento","onSalvarClick","onCancelarClick"])):m("",!0),e.TemplateTimeline.adicionarObservacao.exibir?(l(),d(E,{key:4,"data-testid":"adicionar-observacao",salvarVisivel:e.TemplateTimeline.adicionarObservacao.exibir,onAdicionarClick:e.handleAdicionarObservacaoSalvarClick,onCancelarClick:e.handleObservacaoAdicionarCancelarClick},null,8,["salvarVisivel","onAdicionarClick","onCancelarClick"])):m("",!0)])}const D=B(V,[["render",N]]);V.__docgenInfo={exportName:"default",displayName:"TemplateTimeline",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"eventos",type:{name:"TipoEventoDetalhado[]"},required:!0}],events:[{name:"eventoTimelineClicked"},{name:"eventoStatusEditClicked"},{name:"eventoDetalhadoObservacoesAddClicked"},{name:"editarStatusSalvarClicked"},{name:"editarStatusCancelarClicked"},{name:"adicionarObservacaoSalvarClicked"},{name:"adicionarObservacaoCancelarClicked"},{name:"voltarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/TemplateTimeline.vue"]};const j={nome:"Maria do Socorro",imagem:"https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",icone:"person"},F=[{data:new Date("2023-04-26T19:00Z"),previstoPara:new Date("2023-04-26T19:00Z"),realizado:new Date("2023-04-26T19:30Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da Covid",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",atual:!1,scroll:!1,clicavel:!0,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]},{data:new Date("2023-04-26T20:10Z"),previstoPara:new Date("2023-04-20:10Z"),realizado:new Date("2023-04-26T20:15Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"cancelado",criticidade:"baixa",atual:!1,scroll:!1,clicavel:!1,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]}],Ae={title:"Devix/Eventos/templates/TemplateTimeline",component:D,parameters:{componentSubtitle:"Timeline com tela de detalhes do evento."},argTypes:{}},I={nome:"",imagem:"",icone:""},R=j,y=F,w=e=>({components:{TemplateTimeline:D},setup(){return{handleAdicionarObservacaoSalvarClick:(s,o)=>{s.observacoes.push({mensagem:o,autor:{nome:"José da Silva"},criadaEm:new Date}),alert("Observação adicionada com sucesso!")},handleVoltarClick:s=>{alert("Voltar para a tela anterior!")},args:e}},template:'<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'}),v=w.bind({});v.args={perfil:R,eventos:y};const u=w.bind({});u.args={perfil:I,eventos:y};var S,h,f;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (evento: EventoDetalhado, mensagem: string): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
      //TODO: fechar a tela de adicionar observação
      alert('Observação adicionada com sucesso!');
    };
    const handleVoltarClick = (mouseEvent: MouseEvent): void => {
      alert('Voltar para a tela anterior!');
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      handleVoltarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(f=(h=v.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,O,g;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (evento: EventoDetalhado, mensagem: string): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
      //TODO: fechar a tela de adicionar observação
      alert('Observação adicionada com sucesso!');
    };
    const handleVoltarClick = (mouseEvent: MouseEvent): void => {
      alert('Voltar para a tela anterior!');
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      handleVoltarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(g=(O=u.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};const Oe=["Timeline","semTitulo"];export{v as Timeline,Oe as __namedExportsOrder,Ae as default,u as semTitulo};
