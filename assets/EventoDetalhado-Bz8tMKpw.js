import{d as m,b as v,l as o,w as t,T as n,m as r,o as f,g as h,k as C,q as E,t as b}from"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import{C as k}from"./CabecalhoEventoDetalhado-LChgtgkK.js";import{O as _}from"./Observacoes-DSOAm4Fv.js";import{S as O}from"./StatusEvento-DFrejBFP.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i=m({name:"EventoDetalhado",props:{perfil:{required:!0,type:Object},evento:{required:!0,type:Object}},components:{CabecalhoEventoDetalhado:k,Observacoes:_,StatusEvento:O},emits:{statusEditarClick:e=>!0,observacaoAdicionarClick:e=>!0},setup(e,{emit:s}){return{handleEditarClick:a=>{s("statusEditarClick",a)},handleAdicionarObservacaoClick:a=>{s("observacaoAdicionarClick",a)}}}}),B={class:"evento","data-testid":"evento-detalhado"},D={class:"descricao"};function y(e,s,c,d,a,S){const l=r("CabecalhoEventoDetalhado"),p=r("Observacoes"),u=r("StatusEvento");return f(),v("div",B,[o(n,{name:"fadeBaixo",mode:"out-in",appear:""},{default:t(()=>[o(l,{perfil:e.perfil,evento:e.evento},null,8,["perfil","evento"])]),_:1}),o(n,{name:"fadeBaixo",mode:"out-in",appear:""},{default:t(()=>[h("section",D,[C(e.$slots,"descricao",{},()=>[E(b(e.evento.subtitulo),1)])])]),_:3}),o(n,{name:"fadeBaixo",mode:"out-in",appear:""},{default:t(()=>[o(p,{observacoes:e.evento.observacoes,tituloBotao:"Inserir observação",onAdicionarClick:e.handleAdicionarObservacaoClick},null,8,["observacoes","onAdicionarClick"])]),_:1}),o(n,{name:"fadeBaixo",mode:"out-in",appear:""},{default:t(()=>[o(u,{"data-testid":"status-evento",aparencia:"preenchido",status:e.evento.status,onClick:e.handleEditarClick},null,8,["status","onClick"])]),_:1})])}const T=A(i,[["render",y]]);i.__docgenInfo={displayName:"EventoDetalhado",exportName:"default",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"evento",type:{name:"EventoDetalhado"},required:!0}],events:[{name:"statusEditarClick"},{name:"observacaoAdicionarClick"}],slots:[{name:"descricao"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/organismos/EventoDetalhado.vue"]};export{T as E};
