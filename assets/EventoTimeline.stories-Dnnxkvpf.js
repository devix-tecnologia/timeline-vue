import{E as b}from"./EventoTimeline-gA-dGrUj.js";import"./vue.esm-bundler-DivHmBVn.js";import"./IconeCategoria-aa0pGktc.js";/* empty css                 */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconeStatus-DDxYyA1M.js";import"./DescricaoEvento-CN94gHTX.js";import"./SubtituloEvento-DWCj_7dg.js";import"./TituloEvento-DRbZAUa5.js";import"./HoraEvento-7EaNurB4.js";import"./Hora-DY8YDjD9.js";import"./Destaque-nfd_tfd0.js";const j={title:"Devix/Eventos/Moleculas/EventoTimeline",component:b,argTypes:{status:{control:{type:"select"},options:["planejado","realizado","cancelado","adiado","atrasado"]},criticidade:{control:{type:"select"},options:["normal","media","alta"]}}},s=E=>({components:{EventoTimeline:b},setup(){return{args:E}},template:'<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'}),a=s.bind({});a.args={previstoPara:new Date("2023-04-19T11:00Z"),realizado:"",titulo:"Consulta Clinico geral",subtitulo:"Posto de saúde do bairro",destaque:"Estava passando mal",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"media",acao:!1,ehAtual:!1};const e=s.bind({});e.args={previstoPara:new Date("2023-04-19T10:00Z"),realizado:"",titulo:"Consulta",subtitulo:"Posto de saúde",destaque:"",categoria:{nome:"Tele consulta",icone:"call"},status:"realizado",criticidade:"alta",acao:!1,ehAtual:!0};const t=s.bind({});t.args={previstoPara:new Date("2023-04-19T18:00Z"),realizado:"",titulo:"Consulta cardiologista",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Cardiologista",icone:"cardiology"},status:"planejado",criticidade:"alta",acao:!1,ehAtual:!1};const r=s.bind({});r.args={previstoPara:new Date("2023-04-20T12:30Z"),realizado:"",titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",acao:!0,ehAtual:!1};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,d,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,g,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,v,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    EventoTimeline: EventoTimeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<EventoTimeline :status="args.status"  :criticidade="args.criticidade"  :ehAtual="args.ehAtual"  :previstoPara="args.previstoPara"  :realizado="args.realizado"  :categoria="args.categoria"  :titulo="args.titulo"  :subtitulo="args.subtitulo" :destaque="args.destaque" />'
})`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const x=["Padrao","Atual","Importante","Realizado"];export{e as Atual,t as Importante,a as Padrao,r as Realizado,x as __namedExportsOrder,j as default};
