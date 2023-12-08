import{S as z}from"./StatusEvento-d441757a.js";/* empty css                 */import"./vue.esm-bundler-491a3490.js";import"./BotaoStatus-d9eee2dc.js";import"./Botao-6c783e22.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-9754205c.js";const h={title:"Devix/Eventos/Moleculas/StatusEvento",component:z,argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido","vazio"]},status:{control:{type:"select"},options:["planejado","atrasado","adiantado","realizado","cancelado","adiado"]}}},s=j=>({components:{StatusEvento:z},setup(){return{editarClick:()=>alert("Clicou no editar status!"),args:j}},template:'<StatusEvento v-bind="args" :editarClick="editarClick"  />'}),a=s.bind({});a.args={status:"planejado",aparencia:"outline"};const t=s.bind({});t.args={status:"atrasado",aparencia:"outline"};const e=s.bind({});e.args={status:"realizado",aparencia:"outline"};const n=s.bind({});n.args={status:"cancelado",aparencia:"outline"};const r=s.bind({});r.args={status:"adiado",aparencia:"outline"};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return {
      editarClick,
      args
    };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />'
})`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return {
      editarClick,
      args
    };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />'
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,C;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return {
      editarClick,
      args
    };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />'
})`,...(C=(m=e.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var g,k,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return {
      editarClick,
      args
    };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />'
})`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,E,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return {
      editarClick,
      args
    };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />'
})`,...(b=(E=r.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const D=["Planejado","Atrasado","Realizado","Cancelado","Adiado"];export{r as Adiado,t as Atrasado,n as Cancelado,a as Planejado,e as Realizado,D as __namedExportsOrder,h as default};
