import{H as p}from"./Hora-95961214.js";import"./vue.esm-bundler-2c57d92d.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={title:"Devix/Eventos/Atomos/Hora",component:p,argTypes:{hora:{control:{type:"date"}},aparencia:{control:{type:"select"},options:["padrao","riscada"]}}},i=new Date,m=d=>({components:{Hora:p},setup(){return{args:d}},template:'<Hora :hora="args.hora" :aparencia="args.aparencia" />'}),a=m.bind({});a.args={hora:i,aparencia:"padrao"};const r=m.bind({});r.args={hora:i,aparencia:"riscada"};var o,e,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Hora
  },
  setup() {
    return {
      args
    };
  },
  template: '<Hora :hora="args.hora" :aparencia="args.aparencia" />'
})`,...(n=(e=a.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};var s,t,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Hora
  },
  setup() {
    return {
      args
    };
  },
  template: '<Hora :hora="args.hora" :aparencia="args.aparencia" />'
})`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const H=["Padrao","Riscada"];export{a as Padrao,r as Riscada,H as __namedExportsOrder,h as default};
