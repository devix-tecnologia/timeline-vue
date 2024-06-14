import{B as x}from"./Botao-Degnhl23.js";import"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={title:"Devix/Eventos/Moleculas/Botao",component:x,parameters:{componentSubtitle:"Este componente possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot."},argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido","vazio"]},tamanho:{control:{type:"select"},options:["pequeno","medio","grande"]}}},r=E=>({components:{Botao:x},setup(){return{args:E,handleClick:()=>{alert("Clicado no botão.")}}},template:'<Botao v-bind="args" @click="handleClick" />'}),o=r.bind({});o.args={titulo:"Botao claro",aparencia:"outline",tamanho:"medio",icone:"add"};const n=r.bind({});n.args={titulo:"Botao escuro",aparencia:"preenchido",tamanho:"medio",icone:"home"};const e=r.bind({});e.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"pequeno",icone:""};const a=r.bind({});a.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"grande",icone:""};const t=r.bind({});t.args={titulo:"Botao como link",aparencia:"vazio",tamanho:"pequeno",icone:""};var s,c,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Botao v-bind="args" @click="handleClick" />'
})`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Botao v-bind="args" @click="handleClick" />'
})`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Botao v-bind="args" @click="handleClick" />'
})`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Botao v-bind="args" @click="handleClick" />'
})`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,B,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Botao v-bind="args" @click="handleClick" />'
})`,...(v=(B=t.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const f=["outline","preenchido","Pequeno","Grande","Vazio"];export{a as Grande,e as Pequeno,t as Vazio,f as __namedExportsOrder,_ as default,o as outline,n as preenchido};
