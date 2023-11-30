import{E as s}from"./EditarStatus-fe3c4018.js";import{d as i}from"./EventoDetalhado.mock-93236a33.js";import"./vue.esm-bundler-fc91e5f6.js";/* empty css                 */import"./EditarEvento-714e3176.js";import"./AreaSalvamento-2f6a0f5e.js";import"./Botao-3fb537c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-9d2180a3.js";import"./BotaoStatus-ac04ef16.js";const V={title:"Devix/Eventos/Templates/EditarStatus",component:s,parameters:{componentSubtitle:"Tela de edição de Status"},argTypes:{}},d=i[0],p=t=>({components:{EditarStatus:s},setup(){return{args:t}},template:'<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel"  :dadosEvento="args.dadosEvento"  />'}),a=p.bind({});a.args={dadosEvento:d,salvarVisivel:!0,aoClicar:t=>alert("Olá!")};var r,e,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    EditarStatus
  },
  setup() {
    return {
      args
    };
  },
  template: '<EditarStatus :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel"  :dadosEvento="args.dadosEvento"  />'
})`,...(o=(e=a.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const T=["Padrao"];export{a as Padrao,T as __namedExportsOrder,V as default};
