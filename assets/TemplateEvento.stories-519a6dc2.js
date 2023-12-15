import{d as _,l as n,e as g,p as r,o as T}from"./vue.esm-bundler-2c57d92d.js";/* empty css                 */import{T as y}from"./Topo-7917c71b.js";import{E as h}from"./EventoDetalhado-558f2f6a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{d as P,a as l}from"./EventoDetalhado.mock-99457809.js";import"./CabecalhoEventoDetalhado-f39fee56.js";import"./Botao-b17e19c7.js";import"./PerfilTimeline-6f22df10.js";import"./AvatarTimeline-abf7ef71.js";import"./IconeCategoria-e079c2bd.js";import"./Hora-95961214.js";import"./Observacoes-ff5caa76.js";import"./StatusEvento-bd3ccd46.js";import"./BotaoStatus-7131e699.js";import"./IconeStatus-69ce0bf0.js";const c=_({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:y,Evento:h},setup(e){return{}}});const b={class:"pagina"};function S(e,$,M,N,O,j){const u=n("topo"),f=n("Evento");return T(),g("div",b,[r(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),r(f,{perfil:e.perfilEvento,evento:e.dadosEvento},null,8,["perfil","evento"])])}const v=k(c,[["render",S]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},q=P,x=l[0],D=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:q,dadosEvento:x};const t=E.bind({});t.args={dadosEvento:D};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
