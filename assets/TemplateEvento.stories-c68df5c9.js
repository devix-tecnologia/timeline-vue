import{d as _,f as n,p as g,n as r,o as T}from"./vue.esm-bundler-66f7a54e.js";/* empty css                 */import{T as y}from"./Topo-125bcbb7.js";import{E as h}from"./EventoDetalhado-2dd9239b.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{a as P,d as l}from"./EventoDetalhado.mock-0b8285d5.js";import"./CabecalhoEventoDetalhado-62e29421.js";import"./Botao-08b1ee46.js";import"./PerfilTimeline-b0630a91.js";import"./AvatarTimeline-80268aae.js";import"./IconeCategoria-b421ed22.js";import"./Hora-9143104c.js";import"./Observacoes-4c01a195.js";import"./StatusEvento-b1e54093.js";import"./BotaoStatus-8db56226.js";import"./IconeStatus-009f1bbd.js";const c=_({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:y,Evento:h},setup(e){return{}}});const b={class:"pagina"};function D(e,$,M,N,O,j){const u=n("topo"),f=n("Evento");return T(),g("div",b,[r(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),r(f,{perfil:e.perfilEvento,evento:e.dadosEvento},null,8,["perfil","evento"])])}const v=k(c,[["render",D]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/Templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},S=P,q=l[0],x=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:S,dadosEvento:q};const t=E.bind({});t.args={dadosEvento:x};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
