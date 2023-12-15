import{E as v}from"./EditarEvento-c28e502c.js";import"./vue.esm-bundler-2c57d92d.js";/* empty css                 */import"./AreaSalvamento-49689685.js";import"./Botao-b17e19c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={title:"Devix/Eventos/Organismos/EditarEvento",component:v,parameters:{componentSubtitle:"Este componente serve como tela única de edição do evento. Possui <slots> que carregam conteúdo em suas respectivas áreas: #conteudo e #salvamento."},argTypes:{}},d=r=>({components:{EditarEvento:v},setup(){return{args:r}},template:'<EditarEvento :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />'}),a=d.bind({});a.args={salvarVisivel:!0,aoClicar:r=>alert("Olá!")};const e=d.bind({});e.args={salvarVisivel:!1,aoClicar:r=>alert("Olá!")};var s,o,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    EditarEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<EditarEvento :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />'
})`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    EditarEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<EditarEvento :dadosEvento="args.dadosEvento" :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />'
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const V=["Padrao","SalvarInvisivel"];export{a as Padrao,e as SalvarInvisivel,V as __namedExportsOrder,C as default};
