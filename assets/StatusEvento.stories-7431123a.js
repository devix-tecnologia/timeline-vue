import{S as z}from"./StatusEvento-caae0206.js";/* empty css                 */import"./vue.esm-bundler-8df72b13.js";import"./BotaoStatus-d53d9bfc.js";import"./Botao-0ecd5bac.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-799bba3e.js";const T={title:"Devix/Eventos/Moleculas/StatusEvento",component:z,argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido"]},status:{control:{type:"select"},options:["planejado","atrasado","realizado","cancelado","adiado"]}}},n=a=>({components:{StatusEvento:z},setup(){return{args:a}},template:'<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'}),t=n.bind({});t.args={status:"planejado",aparencia:"outline",aoClicar:a=>alert("Olá, planejado!")};const e=n.bind({});e.args={status:"atrasado",aparencia:"outline",aoClicar:a=>alert("Olá, atrasado!")};const r=n.bind({});r.args={status:"realizado",aparencia:"outline",aoClicar:a=>alert("Olá, realizado!")};const s=n.bind({});s.args={status:"cancelado",aparencia:"outline",aoClicar:a=>alert("Olá, cancelado!")};const o=n.bind({});o.args={status:"adiado",aparencia:"outline",aoClicar:a=>alert("Olá, adiado!")};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'
})`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'
})`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,g,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'
})`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,C,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'
})`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,b,j;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    StatusEvento
  },
  setup() {
    return {
      args
    };
  },
  template: '<StatusEvento :aparencia="args.aparencia" :aoClicar="args.aoClicar" :status="args.status"  />'
})`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const h=["Planejado","Atrasado","Realizado","Cancelado","Adiado"];export{o as Adiado,e as Atrasado,s as Cancelado,t as Planejado,r as Realizado,h as __namedExportsOrder,T as default};
//# sourceMappingURL=StatusEvento.stories-7431123a.js.map
