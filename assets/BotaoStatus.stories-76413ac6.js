import{B as x}from"./BotaoStatus-d9eee2dc.js";/* empty css                 */import"./vue.esm-bundler-491a3490.js";import"./Botao-6c783e22.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-9754205c.js";const P={title:"Devix/Eventos/Moleculas/BotaoStatus",component:x,argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido"]},status:{control:{type:"select"},options:["planejado","atrasado","realizado","cancelado","adiado"]}}},o=E=>({components:{BotaoStatus:x},setup(){return{args:E,handleClick:()=>{alert("Clicado no botão.")}}},template:'<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />'}),a=o.bind({});a.args={status:"planejado",aparencia:"outline"};const t=o.bind({});t.args={status:"atrasado",aparencia:"outline"};const n=o.bind({});n.args={status:"realizado",aparencia:"outline"};const e=o.bind({});e.args={status:"cancelado",aparencia:"outline"};const s=o.bind({});s.args={status:"adiado",aparencia:"outline"};var r,c,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,k,h;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(h=(k=e.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var S,B,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const R=["Planejado","Atrasado","Realizado","Cancelado","Adiado"];export{s as Adiado,t as Atrasado,e as Cancelado,a as Planejado,n as Realizado,R as __namedExportsOrder,P as default};
