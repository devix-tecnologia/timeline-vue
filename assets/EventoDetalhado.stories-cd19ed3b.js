import{E as i}from"./EventoDetalhado-d95d7a3f.js";import{a as c,d as m}from"./EventoDetalhado.mock-0b8285d5.js";import"./vue.esm-bundler-491a3490.js";/* empty css                 */import"./CabecalhoEventoDetalhado-b8acb63c.js";import"./Botao-6c783e22.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PerfilTimeline-06d24d11.js";import"./AvatarTimeline-af61e559.js";import"./IconeCategoria-cd0efeab.js";import"./Hora-a3400af0.js";import"./Observacoes-af8a73a5.js";import"./StatusEvento-d441757a.js";import"./BotaoStatus-d9eee2dc.js";import"./IconeStatus-9754205c.js";const O={title:"Devix/Eventos/Organismos/EventoDetalhado",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2078&mode=design&t=gtygrUm9znRhEPR6-4"},componentSubtitle:"Tela de detalhes do evento. Este componente possui um slot que altera o conteúdo da área de descrição. Para usá-lo basta acrescentar <template #descricao></template> na tela que for usar o componente."},argTypes:{}},g=c,u=m[0],v=m[1],d=l=>({components:{EventoDetalhado:i},setup(){return{args:l}},template:'<EventoDetalhado :perfil="args.perfil" :evento="args.evento" />'}),e=d.bind({});e.args={perfil:g,evento:u};const o=d.bind({});o.args={evento:v};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
