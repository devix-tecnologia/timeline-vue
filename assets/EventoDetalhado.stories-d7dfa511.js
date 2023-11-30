import{E as p}from"./EventoDetalhado-7647ce9c.js";import{a as c,d as i}from"./EventoDetalhado.mock-93236a33.js";import"./vue.esm-bundler-fc91e5f6.js";/* empty css                 */import"./CabecalhoEventoDetalhado-aa785ec8.js";import"./Botao-3fb537c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PerfilTimeline-6bdf2348.js";import"./AvatarTimeline-7dff297d.js";import"./IconeCategoria-58eb2e61.js";import"./Hora-8a333c6c.js";import"./Observacoes-da145bc5.js";import"./StatusEvento-c3f58552.js";import"./BotaoStatus-ac04ef16.js";import"./IconeStatus-9d2180a3.js";const O={title:"Devix/Eventos/Organismos/EventoDetalhado",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2078&mode=design&t=gtygrUm9znRhEPR6-4"},componentSubtitle:"Tela de detalhes do evento. Este componente possui um slot que altera o conteúdo da área de descrição. Para usá-lo basta acrescentar <template #descricao></template> na tela que for usar o componente."},argTypes:{}},E=c,v=i[0],g=i[1],m=l=>({components:{EventoDetalhado:p},setup(){return{args:l}},template:'<EventoDetalhado :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'}),e=m.bind({});e.args={perfilEvento:E,dadosEvento:v};const o=m.bind({});o.args={dadosEvento:g};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    EventoDetalhado
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoDetalhado :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'
})`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,n,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    EventoDetalhado
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoDetalhado :perfilEvento="args.perfilEvento" :dadosEvento="args.dadosEvento" />'
})`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const R=["Padrao","SemPerfil"];export{e as Padrao,o as SemPerfil,R as __namedExportsOrder,O as default};
