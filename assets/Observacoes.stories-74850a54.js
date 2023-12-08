import{O as s}from"./Observacoes-af8a73a5.js";import{d as t}from"./EventoDetalhado.mock-0b8285d5.js";/* empty css                 */import"./vue.esm-bundler-491a3490.js";import"./Botao-6c783e22.js";import"./_plugin-vue_export-helper-c27b6911.js";const k={title:"Devix/Eventos/Moleculas/Observacoes",component:s,argTypes:{}},c=t[0].observacoes,i=n=>({components:{Observacoes:s},setup(){return{adicionarClick:l=>{alert("Clicou no botão adicionar!")},args:n}},template:'<Observacoes v-bind="args" @adicionarClick="adicionarClick" />'}),o=i.bind({});o.args={tituloBotao:"Inserir observação",observacoes:c};var a,e,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
