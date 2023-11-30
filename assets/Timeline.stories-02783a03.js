import{T as p,d as c,a as l}from"./Timeline.mock-7fdc3d8a.js";import"./vue.esm-bundler-fc91e5f6.js";import"./EventoTimeline-6c33c365.js";import"./IconeCategoria-58eb2e61.js";/* empty css                 */import"./_plugin-vue_export-helper-c27b6911.js";import"./IconeStatus-9d2180a3.js";import"./DescricaoEvento-f5b82c67.js";import"./SubtituloEvento-0241d03e.js";import"./TituloEvento-6d6faf8d.js";import"./HoraEvento-75cca04a.js";import"./Hora-8a333c6c.js";import"./Destaque-61c3ca27.js";import"./SeparadorPeriodo-849d6bef.js";import"./BoxData-c5acfdfb.js";import"./PerfilTimeline-6bdf2348.js";import"./AvatarTimeline-7dff297d.js";const S={title:"Devix/Eventos/Organismos/Timeline",component:p,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Eb4gpZ5HsK3xPAErpd8TQl/timeline-ui?type=design&node-id=226-2538&mode=design&t=gtygrUm9znRhEPR6-4"},componentSubtitle:"Linha do tempo padrão com identidade da Devix"},argTypes:{}},d=c,v=l;function g(o){const e=new Date,i=e.getMonth()+1;for(let n=0;n<o.length;n++){const r=o[n];r.data.getMonth()+1>=i&&(r.data.setMonth(e.getMonth(),e.getDate()),r.previstoPara.setMonth(e.getMonth(),e.getDate()))}}g(l);const u=o=>({components:{Timeline:p},setup(){return{args:o,emitirEventoClick:i=>{alert(`foi clicado no evento ${i.titulo}`)}}},template:'<Timeline v-bind="args" @eventoClick="emitirEventoClick" style="position: relative" />'}),t=u.bind({});t.args={perfilTimeline:d,eventosTimeline:v};var a,s,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Timeline: Timeline
  },
  setup() {
    const emitirEventoClick = (evento: Evento) => {
      alert(\`foi clicado no evento \${evento.titulo}\`);
    };
    return {
      args,
      emitirEventoClick
    };
  },
  template: '<Timeline v-bind="args" @eventoClick="emitirEventoClick" style="position: relative" />'
})`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const $=["Padrao"];export{t as Padrao,$ as __namedExportsOrder,S as default};
