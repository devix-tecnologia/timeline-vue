import{d as g,b as _,l as r,m as n,o as T}from"./vue.esm-bundler-DivHmBVn.js";/* empty css                 */import{T as b}from"./Topo-Biv2b3Dq.js";import{E as h}from"./EventoDetalhado-DOcRwGmM.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as y,a as l}from"./EventoDetalhado.mock-C6mEC650.js";import"./CabecalhoEventoDetalhado-4eHxiVWB.js";import"./Botao-CtZIT2Wn.js";import"./PerfilTimeline-Dn_SICz7.js";import"./AvatarTimeline-BTvmndzL.js";import"./IconeCategoria-aa0pGktc.js";import"./Hora-DY8YDjD9.js";import"./Observacoes-CudvchaS.js";import"./StatusEvento-CX_YZlS5.js";import"./BotaoStatus-BOr7WOk2.js";import"./IconeStatus-DDxYyA1M.js";const c=g({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:b,Evento:h},setup(e){return{}}}),P={class:"pagina"};function S(e,x,M,N,O,j){const u=n("topo"),f=n("Evento");return T(),_("div",P,[r(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),r(f,{perfil:e.perfilEvento,evento:e.dadosEvento},null,8,["perfil","evento"])])}const v=k(c,[["render",S]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},q=y,D=l[0],$=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:q,dadosEvento:D};const t=E.bind({});t.args={dadosEvento:$};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    TemplateEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'
})`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,i,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    TemplateEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'
})`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const X=["Padrao","SemPerfil"];export{o as Padrao,t as SemPerfil,X as __namedExportsOrder,W as default};
