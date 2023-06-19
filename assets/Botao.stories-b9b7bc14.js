import{B as S}from"./Botao-2956d7a6.js";import"./vue.esm-bundler-95829c36.js";/* empty css                 */import"./_plugin-vue_export-helper-c27b6911.js";const E={title:"Devix/Eventos/Moleculas/Botao",component:S,parameters:{componentSubtitle:"Este componente possui um <slot> padrão que carrega conteúdo dentro do botão. Por padrão, ícone e título são passados por props, mas podem ser sobrescritos pelo conteúdo do slot."},argTypes:{aparencia:{control:{type:"select"},options:["outline","preenchido","vazio"]},tamanho:{control:{type:"select"},options:["pequeno","medio","grande"]}}},n=a=>({components:{Botao:S},setup(){return{args:a}},template:'<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'}),o=n.bind({});o.args={titulo:"Botao claro",aparencia:"outline",tamanho:"medio",icone:"add",aoClicar:a=>alert("Olá, outline!")};const e=n.bind({});e.args={titulo:"Botao escuro",aparencia:"preenchido",tamanho:"medio",icone:"home",aoClicar:a=>alert("Olá, Preenchido!")};const r=n.bind({});r.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"pequeno",icone:"",aoClicar:a=>alert("Olá, Pequeno!")};const t=n.bind({});t.args={titulo:"Botao escuro",aparencia:"outline",tamanho:"grande",icone:"",aoClicar:a=>alert("Olá, Grande!")};const s=n.bind({});s.args={titulo:"Botao como link",aparencia:"vazio",tamanho:"pequeno",icone:"",aoClicar:a=>alert("Olá, Vazio!")};var c,i,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    return {
      args
    };
  },
  template: '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'
})`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    return {
      args
    };
  },
  template: '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'
})`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,d,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    return {
      args
    };
  },
  template: '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'
})`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var B,C,v;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    return {
      args
    };
  },
  template: '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'
})`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var b,q,O;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Botao
  },
  setup() {
    return {
      args
    };
  },
  template: '<Botao :titulo="args.titulo" :icone="args.icone" :aparencia="args.aparencia" :tamanho="args.tamanho" :aoClicar="args.aoClicar" />'
})`,...(O=(q=s.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const G=["outline","preenchido","Pequeno","Grande","Vazio"];export{t as Grande,r as Pequeno,s as Vazio,G as __namedExportsOrder,E as default,o as outline,e as preenchido};
//# sourceMappingURL=Botao.stories-b9b7bc14.js.map
