import{B as q}from"./Botao-3fb537c3.js";import"./vue.esm-bundler-fc91e5f6.js";/* empty css                 */import"./_plugin-vue_export-helper-c27b6911.js";const _={title:"Devix/Eventos/Moleculas/Botao",component:q,parameters:{componentSubtitle:"Este componente possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot."},argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido","vazio"]},tamanho:{control:{type:"select"},options:["pequeno","medio","grande"]}}},n=S=>({components:{Botao:q},setup(){return{args:S,handleClick:()=>{alert("Clicado no botão.")}}},template:'<Botao v-bind="args" @click="handleClick" />'}),o=n.bind({});o.args={titulo:"Botao claro",aparencia:"outline",tamanho:"medio",icone:"add"};const e=n.bind({});e.args={titulo:"Botao escuro",aparencia:"preenchido",tamanho:"medio",icone:"home"};const a=n.bind({});a.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"pequeno",icone:""};const t=n.bind({});t.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"grande",icone:""};const r=n.bind({});r.args={titulo:"Botao como link",aparencia:"vazio",tamanho:"pequeno",icone:""};var s,c,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,k,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,B,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(v=(B=r.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const f=["outline","preenchido","Pequeno","Grande","Vazio"];export{t as Grande,a as Pequeno,r as Vazio,f as __namedExportsOrder,_ as default,o as outline,e as preenchido};
