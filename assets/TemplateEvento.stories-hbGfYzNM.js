import{d as g,b as _,l as n,m as r,o as T}from"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import{T as b}from"./Topo-D0kzdJGB.js";import{E as h}from"./EventoDetalhado-Bz8tMKpw.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as y,a as l}from"./EventoDetalhado.mock-DhZSYTPG.js";import"./CabecalhoEventoDetalhado-LChgtgkK.js";import"./Botao-Degnhl23.js";import"./PerfilTimeline-wc7EAhTz.js";import"./AvatarTimeline-Bbr_iXEb.js";import"./IconeCategoria-Cea-Wblr.js";import"./Hora-CM2SEGV8.js";import"./Observacoes-DSOAm4Fv.js";import"./StatusEvento-DFrejBFP.js";import"./BotaoStatus-DRLXfGXL.js";import"./IconeStatus-DvtOm-CD.js";const c=g({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:b,Evento:h},setup(e){return{}}}),P={class:"pagina"};function S(e,x,M,N,O,j){const u=r("topo"),f=r("Evento");return T(),_("div",P,[n(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),n(f,{perfil:e.perfilEvento,evento:e.dadosEvento},null,8,["perfil","evento"])])}const v=k(c,[["render",S]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},q=y,D=l[0],$=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:q,dadosEvento:D};const t=E.bind({});t.args={dadosEvento:$};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
