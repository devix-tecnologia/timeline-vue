import{O as s}from"./Observacoes-DSOAm4Fv.js";import{a as t}from"./EventoDetalhado.mock-DhZSYTPG.js";/* empty css                 */import"./vue.esm-bundler-DRZWSEY8.js";import"./Botao-Degnhl23.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Devix/Eventos/Moleculas/Observacoes",component:s,argTypes:{}},c=t[0].observacoes,i=n=>({components:{Observacoes:s},setup(){return{adicionarClick:l=>{alert("Clicou no botão adicionar!")},args:n}},template:'<Observacoes v-bind="args" @adicionarClick="adicionarClick" />'}),o=i.bind({});o.args={tituloBotao:"Inserir observação",observacoes:c};var a,e,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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