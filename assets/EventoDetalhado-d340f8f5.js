import{d as l,r as s,c,b as o,w as a,T as t,o as p,a as v,k as u,l as m,t as E}from"./vue.esm-bundler-8df72b13.js";/* empty css                 */import{C as f}from"./CabecalhoEventoDetalhado-1fb35dfb.js";import{O as _}from"./Observacoes-a39977b0.js";import{S as h}from"./StatusEvento-caae0206.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const n=l({props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object}},components:{CabecalhoEventoDetalhado:f,Observacoes:_,StatusEvento:h},setup(e){return{}}});const b={class:"evento"},y={class:"descricao"};function B(e,D,O,S,g,N){const r=s("CabecalhoEventoDetalhado"),d=s("Observacoes"),i=s("StatusEvento");return p(),c("div",b,[o(t,{name:"fadeBaixo",mode:"out-in",appear:""},{default:a(()=>[o(r,{perfilEvento:e.perfilEvento,dadosEvento:e.dadosEvento,aoClicar:e.dadosEvento.aoClicar},null,8,["perfilEvento","dadosEvento","aoClicar"])]),_:1}),o(t,{name:"fadeBaixo",mode:"out-in",appear:""},{default:a(()=>[v("section",y,[u(e.$slots,"descricao",{},()=>[m(E(e.dadosEvento.subtitulo),1)])])]),_:3}),o(t,{name:"fadeBaixo",mode:"out-in",appear:""},{default:a(()=>[o(d,{observacoes:e.dadosEvento.observacoes,tituloBotao:"Inserir observação",aoClicar:e.dadosEvento.aoClicar},null,8,["observacoes","aoClicar"])]),_:1}),o(t,{name:"fadeBaixo",mode:"out-in",appear:""},{default:a(()=>[o(i,{aparencia:"preenchido",aoClicar:e.dadosEvento.aoClicar,status:e.dadosEvento.status},null,8,["aoClicar","status"])]),_:1})])}const V=C(n,[["render",B]]);n.__docgenInfo={exportName:"default",displayName:"EventoDetalhado",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"Perfil"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0}],slots:[{name:"descricao"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/organismos/EventoDetalhado.vue"]};export{V as E};
//# sourceMappingURL=EventoDetalhado-d340f8f5.js.map