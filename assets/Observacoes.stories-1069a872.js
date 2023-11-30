import{O as s}from"./Observacoes-da145bc5.js";import{d as c}from"./EventoDetalhado.mock-93236a33.js";/* empty css                 */import"./vue.esm-bundler-fc91e5f6.js";import"./Botao-3fb537c3.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={title:"Devix/Eventos/Moleculas/Observacoes",component:s,argTypes:{}},i=c[0].observacoes,n=t=>({components:{Observacoes:s},setup(){return{adicionarClick:l=>{alert("Clicou no botão adicionar!")},args:t}},template:'<Observacoes v-bind="args" @adicionarClick="adicionarClick" />'}),o=n.bind({});o.args={tituloBotao:"Inserir observação",observacoes:i};var a,e,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Observacoes
  },
  setup() {
    const adicionarClick = (mouseEvent: MouseEvent) => {
      alert('Clicou no botão adicionar!');
    };
    return {
      adicionarClick,
      args
    };
  },
  template: '<Observacoes v-bind="args" @adicionarClick="adicionarClick" />'
})`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const O=["Padrao"];export{o as Padrao,O as __namedExportsOrder,k as default};
