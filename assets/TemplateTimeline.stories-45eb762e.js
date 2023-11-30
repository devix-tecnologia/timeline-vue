import{d as _,C as d,r as q,f as t,p as P,g as n,q as l,o as r}from"./vue.esm-bundler-fc91e5f6.js";/* empty css                 */import{T as $}from"./Topo-e464306a.js";import{E as w}from"./EventoDetalhado-7647ce9c.js";import{T as B,d as J,a as M}from"./Timeline.mock-7fdc3d8a.js";import{E as N}from"./EditarStatus-fe3c4018.js";import{A as R}from"./AdicionarObservacao-ab87323c.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./CabecalhoEventoDetalhado-aa785ec8.js";import"./Botao-3fb537c3.js";import"./PerfilTimeline-6bdf2348.js";import"./AvatarTimeline-7dff297d.js";import"./IconeCategoria-58eb2e61.js";import"./Hora-8a333c6c.js";import"./Observacoes-da145bc5.js";import"./StatusEvento-c3f58552.js";import"./BotaoStatus-ac04ef16.js";import"./IconeStatus-9d2180a3.js";import"./EventoTimeline-6c33c365.js";import"./DescricaoEvento-f5b82c67.js";import"./SubtituloEvento-0241d03e.js";import"./TituloEvento-6d6faf8d.js";import"./HoraEvento-75cca04a.js";import"./Destaque-61c3ca27.js";import"./SeparadorPeriodo-849d6bef.js";import"./BoxData-c5acfdfb.js";import"./EditarEvento-714e3176.js";import"./AreaSalvamento-2f6a0f5e.js";const y=_({props:{perfil:{required:!0,type:Object},eventos:{required:!0,type:Array}},components:{Topo:$,EventoDetalhado:w,Timeline:B,EditarStatus:N,AdicionarObservacao:R},emits:{eventoClick:a=>!0,statusEditarClick:a=>!0,observacaoAdicionarClick:a=>!0,statusSalvarClick:(a,o)=>!0,statusCancelarClick:a=>!0,observacaoAdicionarSalvarClick:(a,o)=>!0,observacaoAdicionarCancelarClick:a=>!0},setup(a,{emit:o}){const m=d(a,"eventos"),v=d(null),e=q({topo:{exibir:!0},timeline:{exibir:!0},evento:{exibir:!1},editarStatus:{exibir:!1},adicionarObservacao:{exibir:!1},dados:{eventos:d(a,"eventos"),perfil:d(a,"perfil"),eventosTimeline:m,eventoAtual:v}}),b=i=>i.observacoes!==void 0;return{aoSelecionarEvento:i=>{e.topo.exibir=!0,e.timeline.exibir=!1,e.evento.exibir=!0,e.editarStatus.exibir=!1,e.adicionarObservacao.exibir=!1,b(i)&&(e.dados.eventoAtual=i,o("eventoClick",i))},aoVoltarParaTelaAnterior:()=>{e.topo.exibir=!0,e.timeline.exibir=!e.timeline.exibir,e.evento.exibir=!e.evento.exibir,e.editarStatus.exibir=!1,e.adicionarObservacao.exibir=!1},handleStatusEditarClick:i=>{e.topo.exibir=!1,e.timeline.exibir=!1,e.evento.exibir=!1,e.editarStatus.exibir=!0,e.adicionarObservacao.exibir=!0,o("statusEditarClick",i)},handleStatusSalvarClick:(i,p)=>{e.topo.exibir=!0,e.timeline.exibir=!1,e.evento.exibir=!0,e.editarStatus.exibir=!1,e.adicionarObservacao.exibir=!1,o("statusSalvarClick",i,p)},handleStatusCancelarClick:i=>{e.topo.exibir=!0,e.timeline.exibir=!1,e.evento.exibir=!0,e.adicionarObservacao.exibir=!1,e.editarStatus.exibir=!1,o("statusCancelarClick",i)},handleObservacaoAdicionarClick:i=>{e.topo.exibir=!1,e.timeline.exibir=!1,e.evento.exibir=!1,e.editarStatus.exibir=!1,e.adicionarObservacao.exibir=!0,o("observacaoAdicionarClick",i)},handleAdicionarObservacaoSalvarClick:(i,p)=>{e.topo.exibir=!0,e.timeline.exibir=!1,e.evento.exibir=!0,e.editarStatus.exibir=!1,e.adicionarObservacao.exibir=!1,o("observacaoAdicionarSalvarClick",i,p)},handleObservacaoAdicionarCancelarClick:i=>{e.topo.exibir=!0,e.timeline.exibir=!1,e.evento.exibir=!0,e.adicionarObservacao.exibir=!1,e.editarStatus.exibir=!1,o("observacaoAdicionarCancelarClick",i)},TemplateTimeline:e}}});const j={class:"pagina","data-testid":"template-timeline"};function F(a,o,m,v,e,b){const C=t("topo"),T=t("Timeline"),k=t("EventoDetalhado"),f=t("EditarStatus"),S=t("AdicionarObservacao");return r(),P("div",j,[a.TemplateTimeline.topo.exibir?(r(),n(C,{key:0,titulo:a.TemplateTimeline.dados.perfil.nome,escuro:!1,onVoltarClick:a.aoVoltarParaTelaAnterior},null,8,["titulo","onVoltarClick"])):l("",!0),a.TemplateTimeline.timeline.exibir?(r(),n(T,{key:1,"data-testid":"timeline",perfilTimeline:a.TemplateTimeline.dados.perfil,"eventos-timeline":a.TemplateTimeline.dados.eventosTimeline,onEventoClick:a.aoSelecionarEvento},null,8,["perfilTimeline","eventos-timeline","onEventoClick"])):l("",!0),a.TemplateTimeline.evento.exibir&&a.TemplateTimeline.dados.eventoAtual?(r(),n(k,{key:2,"data-testid":"evento",perfil:a.TemplateTimeline.dados.perfil,evento:a.TemplateTimeline.dados.eventoAtual,onStatusEditarClick:a.handleStatusEditarClick,onObservacaoAdicionarClick:a.handleObservacaoAdicionarClick},null,8,["perfil","evento","onStatusEditarClick","onObservacaoAdicionarClick"])):l("",!0),a.TemplateTimeline.dados.eventoAtual&&a.TemplateTimeline.editarStatus.exibir?(r(),n(f,{key:3,salvarVisivel:a.TemplateTimeline.editarStatus.exibir,evento:a.TemplateTimeline.dados.eventoAtual,onSalvarClick:a.handleStatusSalvarClick,onCancelarClick:a.handleStatusCancelarClick},null,8,["salvarVisivel","evento","onSalvarClick","onCancelarClick"])):l("",!0),a.TemplateTimeline.adicionarObservacao.exibir?(r(),n(S,{key:4,salvarVisivel:a.TemplateTimeline.adicionarObservacao.exibir,onAdicionarClick:a.handleAdicionarObservacaoSalvarClick,onCancelarClick:a.handleObservacaoAdicionarCancelarClick},null,8,["salvarVisivel","onAdicionarClick","onCancelarClick"])):l("",!0)])}const u=z(y,[["render",F]]);y.__docgenInfo={exportName:"default",displayName:"TemplateTimeline",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"eventos",type:{name:"TipoEventoDetalhado[]"},required:!0}],events:[{name:"eventoClick"},{name:"statusEditarClick"},{name:"observacaoAdicionarClick"},{name:"statusSalvarClick"},{name:"statusCancelarClick"},{name:"observacaoAdicionarSalvarClick"},{name:"observacaoAdicionarCancelarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/TemplateTimeline.vue"]};const he={title:"Devix/Eventos/Templates/TemplateTimeline",component:u,parameters:{componentSubtitle:"Timeline com tela de detalhes do evento."},argTypes:{}},I={nome:"",imagem:"",icone:""},G=J,D=M,V=a=>({components:{TemplateTimeline:u},setup(){return{handleAdicionarObservacaoSalvarClick:(m,v)=>{u.dados.eventoDetalhado.observacoes.push({mensagem:m,autor:{nome:"José da Silva"},criadaEm:new Date})},args:a}},template:'<TemplateTimeline v-bind="args" @observacaoAdicionarSalvarClick="handleAdicionarObservacaoSalvarClick" />'}),s=V.bind({});s.args={perfil:G,eventos:D};const c=V.bind({});c.args={perfil:I,eventos:D};var A,h,E;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (mensagem: String, mouseEvent: MouseEvent): void => {
      // Remover alteração dos dados ao finalizar testes
      TemplateTimeline.dados.eventoDetalhado!.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @observacaoAdicionarSalvarClick="handleAdicionarObservacaoSalvarClick" />'
})`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,O,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (mensagem: String, mouseEvent: MouseEvent): void => {
      // Remover alteração dos dados ao finalizar testes
      TemplateTimeline.dados.eventoDetalhado!.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @observacaoAdicionarSalvarClick="handleAdicionarObservacaoSalvarClick" />'
})`,...(g=(O=c.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};const Ee=["Timeline","semTitulo"];export{s as Timeline,Ee as __namedExportsOrder,he as default,c as semTitulo};
