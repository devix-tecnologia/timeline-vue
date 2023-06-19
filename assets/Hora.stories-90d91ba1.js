import{H as n}from"./Hora-e9791ba7.js";import"./vue.esm-bundler-95829c36.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={title:"Devix/Eventos/Atomos/Hora",component:n,argTypes:{hora:{control:{type:"date"}},aparencia:{control:{type:"select"},options:["padrao","riscada"]}}},i=new Date,m=d=>({components:{Hora:n},setup(){return{args:d}},template:'<Hora :hora="args.hora" :aparencia="args.aparencia" />'}),a=m.bind({});a.args={hora:i,aparencia:"padrao"};const r=m.bind({});r.args={hora:i,aparencia:"riscada"};var o,e,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Hora
  },
  setup() {
    return {
      args
    };
  },
  template: '<Hora :hora="args.hora" :aparencia="args.aparencia" />'
})`,...(s=(e=a.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};var t,c,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Hora
  },
  setup() {
    return {
      args
    };
  },
  template: '<Hora :hora="args.hora" :aparencia="args.aparencia" />'
})`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const H=["Padrao","Riscada"];export{a as Padrao,r as Riscada,H as __namedExportsOrder,h as default};
//# sourceMappingURL=Hora.stories-90d91ba1.js.map
