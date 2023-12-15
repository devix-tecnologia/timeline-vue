import{E as i}from"./EventoDetalhado-558f2f6a.js";import{d as c,a as m}from"./EventoDetalhado.mock-99457809.js";import"./vue.esm-bundler-2c57d92d.js";/* empty css                 */import"./CabecalhoEventoDetalhado-f39fee56.js";import"./Botao-b17e19c7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PerfilTimeline-6f22df10.js";import"./AvatarTimeline-abf7ef71.js";import"./IconeCategoria-e079c2bd.js";import"./Hora-95961214.js";import"./Observacoes-ff5caa76.js";import"./StatusEvento-bd3ccd46.js";import"./BotaoStatus-7131e699.js";import"./IconeStatus-69ce0bf0.js";const O={title:"Devix/Eventos/Organismos/EventoDetalhado",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2078&mode=design&t=gtygrUm9znRhEPR6-4"},componentSubtitle:"Tela de detalhes do evento. Este componente possui um slot que altera o conteúdo da área de descrição. Para usá-lo basta acrescentar <template #descricao></template> na tela que for usar o componente."},argTypes:{}},g=c,v=m[0],u=m[1],d=l=>({components:{EventoDetalhado:i},setup(){return{args:l}},template:'<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />'}),e=d.bind({});e.args={perfil:g,evento:v};const o=d.bind({});o.args={evento:u};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    EventoDetalhado
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />'
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var n,s,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    EventoDetalhado
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />'
})`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const R=["Padrao","SemPerfil"];export{e as Padrao,o as SemPerfil,R as __namedExportsOrder,O as default};
