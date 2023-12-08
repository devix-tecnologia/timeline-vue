import{d as x,C as p,r as _,f as s,p as Z,g as c,q as d,o as l}from"./vue.esm-bundler-491a3490.js";/* empty css                 */import{T as q}from"./Topo-d3d691b3.js";import{E as P}from"./EventoDetalhado-d95d7a3f.js";import{T as $}from"./Timeline-4ca223da.js";import{E as M}from"./EditarStatus-6ac53745.js";import{A as z}from"./AdicionarObservacao-da31a633.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./CabecalhoEventoDetalhado-b8acb63c.js";import"./Botao-6c783e22.js";import"./PerfilTimeline-06d24d11.js";import"./AvatarTimeline-af61e559.js";import"./IconeCategoria-cd0efeab.js";import"./Hora-a3400af0.js";import"./Observacoes-af8a73a5.js";import"./StatusEvento-d441757a.js";import"./BotaoStatus-d9eee2dc.js";import"./IconeStatus-9754205c.js";import"./EventoTimeline-403ae878.js";import"./DescricaoEvento-c6f887b8.js";import"./SubtituloEvento-bd6b25bf.js";import"./TituloEvento-5adb9153.js";import"./HoraEvento-74b38d80.js";import"./Destaque-91fa5f30.js";import"./SeparadorPeriodo-6ea1fa6e.js";import"./BoxData-2ce38ecf.js";import"./EditarEvento-37673706.js";import"./AreaSalvamento-c0dba268.js";const D=x({props:{perfil:{required:!0,type:Object},eventos:{required:!0,type:Array}},components:{Topo:q,Evento:P,Timeline:$,EditarStatus:M,AdicionarObservacao:z},emits:{eventoTimelineClicked:(e,o)=>!0,eventoStatusEditClicked:(e,o)=>!0,eventoDetalhadoObservacoesAddClicked:(e,o)=>!0,editarStatusSalvarClicked:(e,o,t)=>!0,editarStatusCancelarClicked:(e,o)=>!0,adicionarObservacaoSalvarClicked:(e,o,t)=>!0,adicionarObservacaoCancelarClicked:(e,o)=>!0},setup(e,{emit:o}){const t=p(e,"eventos"),u=p(null),i=_({topo:{exibir:!0},timeline:{exibir:!0},evento:{exibir:!1},editarStatus:{exibir:!1},adicionarObservacao:{exibir:!1},dados:{eventos:p(e,"eventos"),perfil:p(e,"perfil"),eventosTimeline:t,eventosDetalhados:t,eventoAtual:u}}),T=a=>"observacoes"in a,n=a=>{const r=["Timeline","Evento"];i.topo.exibir=r.includes(a),i.timeline.exibir=a==="Timeline",i.evento.exibir=a==="Evento",i.editarStatus.exibir=a==="EditarStatus",i.adicionarObservacao.exibir=a==="AdicionarObservacao"};return{selecionarEvento:(a,r)=>{T(a)&&(o("eventoTimelineClicked",a,r),i.dados.eventoAtual=a,n("Timeline"))},handleVoltarTela:a=>{n("Timeline")},handleStatusEditarClick:a=>{n("EditarStatus")},handleStatusCancelarClick:a=>{i.dados.eventoAtual&&(n("Evento"),o("editarStatusCancelarClicked",i.dados.eventoAtual,a))},handleStatusSalvarClick:(a,r)=>{i.dados.eventoAtual&&(n("Evento"),o("editarStatusSalvarClicked",i.dados.eventoAtual,a,r))},handleObservacaoAdicionarClick:a=>{n("AdicionarObservacao")},handleAdicionarObservacaoSalvarClick:(a,r)=>{i.dados.eventoAtual&&(n("Evento"),o("adicionarObservacaoSalvarClicked",i.dados.eventoAtual,a,r))},handleObservacaoAdicionarCancelarClick:a=>{i.dados.eventoAtual&&(n("Evento"),o("adicionarObservacaoCancelarClicked",i.dados.eventoAtual,a))},TemplateTimeline:i}}});const J={class:"pagina","data-testid":"template-timeline"};function N(e,o,t,u,i,T){const n=s("Topo"),C=s("Timeline"),b=s("Evento"),k=s("EditarStatus"),S=s("AdicionarObservacao");return l(),Z("div",J,[e.TemplateTimeline.topo.exibir?(l(),c(n,{key:0,titulo:e.TemplateTimeline.dados.perfil.nome,escuro:!1,onVoltarClick:e.handleVoltarTela},null,8,["titulo","onVoltarClick"])):d("",!0),e.TemplateTimeline.timeline.exibir?(l(),c(C,{key:1,"data-testid":"timeline",perfilTimeline:e.TemplateTimeline.dados.perfil,eventosTimeline:e.TemplateTimeline.dados.eventosTimeline,onEventoClick:e.selecionarEvento},null,8,["perfilTimeline","eventosTimeline","onEventoClick"])):d("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.evento.exibir?(l(),c(b,{key:2,"data-testid":"evento",perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onObservacaoAdicionarClick:e.handleObservacaoAdicionarClick,onStatusEditarClick:e.handleStatusEditarClick},null,8,["perfil","evento","onObservacaoAdicionarClick","onStatusEditarClick"])):d("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.editarStatus.exibir?(l(),c(k,{key:3,salvarVisivel:e.TemplateTimeline.editarStatus.exibir,perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onSalvarClick:e.handleStatusSalvarClick,onCancelarClick:e.handleStatusCancelarClick},null,8,["salvarVisivel","perfil","evento","onSalvarClick","onCancelarClick"])):d("",!0),e.TemplateTimeline.adicionarObservacao.exibir?(l(),c(S,{key:4,salvarVisivel:e.TemplateTimeline.adicionarObservacao.exibir,onAdicionarClick:e.handleAdicionarObservacaoSalvarClick,onCancelarClick:e.handleObservacaoAdicionarCancelarClick},null,8,["salvarVisivel","onAdicionarClick","onCancelarClick"])):d("",!0)])}const y=B(D,[["render",N]]);D.__docgenInfo={exportName:"default",displayName:"TemplateTimeline",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"eventos",type:{name:"TipoEventoDetalhado[]"},required:!0}],events:[{name:"eventoTimelineClicked"},{name:"eventoStatusEditClicked"},{name:"eventoDetalhadoObservacoesAddClicked"},{name:"editarStatusSalvarClicked"},{name:"editarStatusCancelarClicked"},{name:"adicionarObservacaoSalvarClicked"},{name:"adicionarObservacaoCancelarClicked"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/TemplateTimeline.vue"]};const j={nome:"Maria do Socorro",imagem:"https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",icone:"person"},F=[{data:new Date("2023-04-26T19:00Z"),previstoPara:new Date("2023-04-26T19:00Z"),realizado:new Date("2023-04-26T19:30Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da Covid",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",atual:!1,scroll:!1,clicavel:!0,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]},{data:new Date("2023-04-26T20:10Z"),previstoPara:new Date("2023-04-20:10Z"),realizado:new Date("2023-04-26T20:15Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"cancelado",criticidade:"baixa",atual:!1,scroll:!1,clicavel:!1,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]}],Oe={title:"Devix/Eventos/Templates/TemplateTimeline",component:y,parameters:{componentSubtitle:"Timeline com tela de detalhes do evento."},argTypes:{}},I={nome:"",imagem:"",icone:""},R=j,V=F,w=e=>({components:{TemplateTimeline:y},setup(){return{handleAdicionarObservacaoSalvarClick:(t,u)=>{t.observacoes.push({mensagem:u,autor:{nome:"José da Silva"},criadaEm:new Date}),alert("Observação adicionada com sucesso!")},args:e}},template:'<TemplateTimeline v-bind="args" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'}),m=w.bind({});m.args={perfil:R,eventos:V};const v=w.bind({});v.args={perfil:I,eventos:V};var E,f,h;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
    return {
      handleAdicionarObservacaoSalvarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(h=(f=m.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var O,A,g;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
    return {
      handleAdicionarObservacaoSalvarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(g=(A=v.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const Ae=["Timeline","semTitulo"];export{m as Timeline,Ae as __namedExportsOrder,Oe as default,v as semTitulo};
