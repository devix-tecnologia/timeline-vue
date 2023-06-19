import{d as _,a as g,j as r,k as n,o as T}from"./vue.esm-bundler-95829c36.js";/* empty css                 */import{T as y}from"./Topo-86b25b5b.js";import{E as k}from"./EventoDetalhado-5509e454.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{d as P,a as l}from"./EventoDetalhado.mock-eec0f894.js";import"./CabecalhoEventoDetalhado-ab155f97.js";import"./Botao-2956d7a6.js";import"./PerfilTimeline-f8ece612.js";import"./AvatarTimeline-7b0f5889.js";import"./IconeCategoria-e93aa7d5.js";import"./Hora-e9791ba7.js";import"./Observacoes-a7c21bac.js";import"./StatusEvento-603c7ae1.js";import"./BotaoStatus-13f93061.js";import"./IconeStatus-c132f514.js";const c=_({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:y,Evento:k},setup(e){return{}}});const b={class:"pagina"};function S(e,$,j,M,N,O){const u=n("topo"),f=n("Evento");return T(),g("div",b,[r(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),r(f,{perfilEvento:e.perfilEvento,dadosEvento:e.dadosEvento},null,8,["perfilEvento","dadosEvento"])])}const v=h(c,[["render",S]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/Templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},q=P,x=l[0],D=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:q,dadosEvento:x};const t=E.bind({});t.args={dadosEvento:D};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
//# sourceMappingURL=TemplateEvento.stories-f73c7c5d.js.map
