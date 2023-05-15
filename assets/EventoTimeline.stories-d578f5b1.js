import{E as b}from"./EventoTimeline-61bd53d9.js";import"./vue.esm-bundler-7082b39b.js";import"./IconeCategoria-c4efef16.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-d396b882.js";import"./DescricaoEvento-5b14aa65.js";import"./SubtituloEvento-4819db3c.js";import"./TituloEvento-40dca76d.js";import"./HoraEvento-d306b576.js";import"./Hora-c1990b3e.js";import"./Destaque-f2412ac0.js";const Z={title:"Devix/Timeline/Moleculas/EventoTimeline",component:b,argTypes:{status:{control:{type:"select"},options:["planejado","realizado","cancelado","adiado","atrasado"]},criticidade:{control:{type:"select"},options:["normal","media","alta"]}}},r=z=>({components:{EventoTimeline:b},setup(){return{args:z}},template:'<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'}),a=r.bind({});a.args={previsto:new Date("2023-04-19T11:00Z"),realizado:"",titulo:"Consulta Clinico geral",subtitulo:"Posto de saúde do bairro",destaque:"Estava passando mal",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"media",acao:!1,ehAtual:!1};const e=r.bind({});e.args={previsto:new Date("2023-04-19T10:00Z"),realizado:"",titulo:"Consulta",subtitulo:"Posto de saúde",destaque:"",categoria:{nome:"Tele consulta",icone:"call"},status:"realizado",criticidade:"alta",acao:!1,ehAtual:!0};const t=r.bind({});t.args={previsto:new Date("2023-04-19T18:00Z"),realizado:"",titulo:"Consulta cardiologista",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"alta",acao:!1,ehAtual:!1};const s=r.bind({});s.args={previsto:new Date("2023-04-20T12:30Z"),realizado:"",titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",acao:!0,ehAtual:!1};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,d,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,g,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,v,T;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const j=["Padrao","Atual","Importante","Realizado"];export{e as Atual,t as Importante,a as Padrao,s as Realizado,j as __namedExportsOrder,Z as default};
//# sourceMappingURL=EventoTimeline.stories-d578f5b1.js.map
