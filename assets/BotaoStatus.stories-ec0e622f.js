import{B as j}from"./BotaoStatus-ac04ef16.js";/* empty css                 */import"./vue.esm-bundler-fc91e5f6.js";import"./Botao-3fb537c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-9d2180a3.js";const P={title:"Devix/Eventos/Moleculas/BotaoStatus",component:j,argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido"]},status:{control:{type:"select"},options:["planejado","atrasado","realizado","cancelado","adiado"]}}},r=z=>({components:{BotaoStatus:j},setup(){return{args:z,handleClick:()=>{alert("Clicado no botão.")}}},template:'<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'}),a=r.bind({});a.args={status:"planejado",aparencia:"outline"};const t=r.bind({});t.args={status:"atrasado",aparencia:"outline"};const e=r.bind({});e.args={status:"realizado",aparencia:"outline"};const s=r.bind({});s.args={status:"cancelado",aparencia:"outline"};const o=r.bind({});o.args={status:"adiado",aparencia:"outline"};var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    BotaoStatus
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
  template: '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'
})`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    BotaoStatus
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
  template: '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'
})`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    BotaoStatus
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
  template: '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'
})`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,k,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    BotaoStatus
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
  template: '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'
})`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var S,B,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    BotaoStatus
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
  template: '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'
})`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const R=["Planejado","Atrasado","Realizado","Cancelado","Adiado"];export{o as Adiado,t as Atrasado,s as Cancelado,a as Planejado,e as Realizado,R as __namedExportsOrder,P as default};
