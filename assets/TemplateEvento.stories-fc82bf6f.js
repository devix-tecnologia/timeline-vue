import{d as _,r,c as g,b as n,o as T}from"./vue.esm-bundler-8df72b13.js";/* empty css                 */import{T as y}from"./Topo-1b5430f7.js";import{E as b}from"./EventoDetalhado-d340f8f5.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{d as k,a as l}from"./EventoDetalhado.mock-eec0f894.js";import"./CabecalhoEventoDetalhado-1fb35dfb.js";import"./Botao-0ecd5bac.js";import"./PerfilTimeline-2afb5f57.js";import"./AvatarTimeline-ac7dfe2b.js";import"./IconeCategoria-3f455349.js";import"./Hora-0c9eae7e.js";import"./Observacoes-a39977b0.js";import"./StatusEvento-caae0206.js";import"./BotaoStatus-d53d9bfc.js";import"./IconeStatus-799bba3e.js";const c=_({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{Topo:y,Evento:b},setup(e){return{}}});const P={class:"pagina"};function S(e,$,M,N,O,j){const u=r("topo"),f=r("Evento");return T(),g("div",P,[n(u,{titulo:e.dadosEvento.categoria.nome,escuro:!1},null,8,["titulo"]),n(f,{perfilEvento:e.perfilEvento,dadosEvento:e.dadosEvento},null,8,["perfilEvento","dadosEvento"])])}const v=h(c,[["render",S]]);c.__docgenInfo={exportName:"default",displayName:"TemplateEvento",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/TemplateEvento.vue"]};const W={title:"Devix/Eventos/Templates/TemplateEvento",component:v,parameters:{componentSubtitle:"Tela de detalhes do evento."},argTypes:{}},q=k,x=l[0],D=l[1],E=e=>({components:{TemplateEvento:v},setup(){return{args:e}},template:'<TemplateEvento :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),o=E.bind({});o.args={perfilEvento:q,dadosEvento:x};const t=E.bind({});t.args={dadosEvento:D};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
//# sourceMappingURL=TemplateEvento.stories-fc82bf6f.js.map
