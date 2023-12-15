import{A as o}from"./AdicionarObservacao-5659fedf.js";import"./vue.esm-bundler-2c57d92d.js";/* empty css                 */import"./EditarEvento-c28e502c.js";import"./AreaSalvamento-49689685.js";import"./Botao-b17e19c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={title:"Devix/Eventos/Templates/AdicionarObservacao",component:o,parameters:{componentSubtitle:"Tela de adicionar observação"},argTypes:{}},t=n=>({components:{AdicionarObservacao:o},setup(){return{handleAdicionarClick:(s,d)=>{alert(`Observação adicionada: ${s}`)},args:n}},template:'<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" />'}),a=t.bind({});a.args={salvarVisivel:!0};var e,r,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AdicionarObservacao
  },
  setup() {
    const handleAdicionarClick = (mensagem: string, mouseEvent: MouseEvent) => {
      alert(\`Observação adicionada: \${mensagem}\`);
    };
    return {
      handleAdicionarClick,
      args
    };
  },
  template: '<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" />'
})`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const O=["Padrao"];export{a as Padrao,O as __namedExportsOrder,g as default};
