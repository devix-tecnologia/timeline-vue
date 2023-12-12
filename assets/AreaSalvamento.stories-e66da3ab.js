import{A as c}from"./AreaSalvamento-de735b3b.js";/* empty css                 */import"./vue.esm-bundler-66f7a54e.js";import"./Botao-08b1ee46.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={title:"Devix/Eventos/Moleculas/AreaSalvamento",component:c,parameters:{componentSubtitle:"Este componente possui um <slot> padrão que carrega conteúdo acima dos botões"},argTypes:{}},n=l=>({components:{AreaSalvamento:c},setup(){return{salvarClick:()=>{alert("Clicado no botão salvar.")},cancelarClick:()=>{alert("Clicado no botão cancelar.")}}},template:'<AreaSalvamento @salvarClick="salvarClick" @cancelarClick="cancelarClick"/>'}),a=n.bind({});a.args={};var e,r,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AreaSalvamento
  },
  setup() {
    const salvarClick = () => {
      alert('Clicado no botão salvar.');
    };
    const cancelarClick = () => {
      alert('Clicado no botão cancelar.');
    };
    return {
      salvarClick,
      cancelarClick
    };
  },
  template: '<AreaSalvamento @salvarClick="salvarClick" @cancelarClick="cancelarClick"/>'
})`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const k=["Padrao"];export{a as Padrao,k as __namedExportsOrder,d as default};
