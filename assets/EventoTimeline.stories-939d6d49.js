import{E as b}from"./EventoTimeline-cee59bde.js";import"./vue.esm-bundler-95829c36.js";import"./IconeCategoria-e93aa7d5.js";/* empty css                 */import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-c132f514.js";import"./DescricaoEvento-c9a0d5fe.js";import"./SubtituloEvento-19865ec0.js";import"./TituloEvento-ca4fd27c.js";import"./HoraEvento-a3df9b7a.js";import"./Hora-e9791ba7.js";import"./Destaque-5d975348.js";const j={title:"Devix/Eventos/Moleculas/EventoTimeline",component:b,argTypes:{status:{control:{type:"select"},options:["planejado","realizado","cancelado","adiado","atrasado"]},criticidade:{control:{type:"select"},options:["normal","media","alta"]}}},o=E=>({components:{EventoTimeline:b},setup(){return{args:E}},template:'<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previsto="args.previsto"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'}),a=o.bind({});a.args={previsto:new Date("2023-04-19T11:00Z"),realizado:"",titulo:"Consulta Clinico geral",subtitulo:"Posto de saúde do bairro",destaque:"Estava passando mal",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"media",acao:!1,ehAtual:!1};const e=o.bind({});e.args={previsto:new Date("2023-04-19T10:00Z"),realizado:"",titulo:"Consulta",subtitulo:"Posto de saúde",destaque:"",categoria:{nome:"Tele consulta",icone:"call"},status:"realizado",criticidade:"alta",acao:!1,ehAtual:!0};const t=o.bind({});t.args={previsto:new Date("2023-04-19T18:00Z"),realizado:"",titulo:"Consulta cardiologista",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"alta",acao:!1,ehAtual:!1};const s=o.bind({});s.args={previsto:new Date("2023-04-20T12:30Z"),realizado:"",titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",acao:!0,ehAtual:!1};var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const x=["Padrao","Atual","Importante","Realizado"];export{e as Atual,t as Importante,a as Padrao,s as Realizado,x as __namedExportsOrder,j as default};
//# sourceMappingURL=EventoTimeline.stories-939d6d49.js.map
