/* empty css                 */import{d as v,r as d,c as t,f as n,g as s,t as i,a,b as h,n as u,o,p as E,m as f}from"./vue.esm-bundler-8df72b13.js";import{B as _}from"./Botao-0ecd5bac.js";import{P as g}from"./PerfilTimeline-2afb5f57.js";import{I as C}from"./IconeCategoria-3f455349.js";import{H as y}from"./Hora-0c9eae7e.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const l=v({components:{Botao:_,PerfilTimeline:g,IconeCategoria:C,Hora:y},name:"CabecalhoEventoDetalhado",props:{perfilEvento:{required:!0,type:Object},dadosEvento:{required:!0,type:Object},aoClicar:{required:!1,type:Function}},setup(e){return{}}});const c=e=>(E("data-v-e8d44815"),e=e(),f(),e),b={key:1,class:"criticidade"},z={class:"titulo"},P={class:"dataHora"},D=["onclick"],I=c(()=>a("span",{class:"material-symbols-outlined"}," calendar_month ",-1)),q={class:"horaEvento"},S={key:0,class:"horaRealizada texto-grande"},B={key:1,class:"horaPlanejada texto-pequeno"},j={key:2,class:"horaRealizada texto-grande"},H=["onclick"],N=c(()=>a("span",{class:"material-symbols-outlined"}," schedule ",-1)),R={class:"horaEvento"};function $(e,L,T,V,w,F){const p=d("PerfilTimeline"),m=d("IconeCategoria"),r=d("Hora");return o(),t("section",{class:u(["cabecalho-evento",["criticidade-"+e.dadosEvento.criticidade]])},[e.perfilEvento?(o(),n(p,{key:0,nomePerfil:e.perfilEvento.nome,imagemPerfil:e.perfilEvento.imagem,iconePerfil:e.perfilEvento.icone,formatoReduzido:!0},null,8,["nomePerfil","imagemPerfil","iconePerfil"])):s("",!0),e.dadosEvento.criticidade!=="baixa"?(o(),t("div",b," Criticidade: "+i(e.dadosEvento.criticidade),1)):s("",!0),a("div",z,[h(m,{iconeCategoria:e.dadosEvento.categoria.icone,categoria:e.dadosEvento.categoria.nome},null,8,["iconeCategoria","categoria"]),a("h1",null,i(e.dadosEvento.titulo),1)]),a("div",P,[a("div",{onclick:e.aoClicar,class:"box"},[I,a("div",q,[e.dadosEvento.realizado?(o(),t("div",S,i(e.dadosEvento.realizado.toLocaleDateString()),1)):s("",!0),e.dadosEvento.realizado?(o(),t("div",B,i(e.dadosEvento.realizado.toLocaleDateString()),1)):(o(),t("div",j,i(e.dadosEvento.previsto.toLocaleDateString()),1))])],8,D),a("div",{onclick:e.aoClicar,class:"box"},[N,a("div",R,[e.dadosEvento.realizado?(o(),n(r,{key:0,class:"horaRealizada texto-grande",hora:e.dadosEvento.realizado},null,8,["hora"])):s("",!0),e.dadosEvento.realizado?(o(),n(r,{key:1,class:"horaPlanejada texto-pequeno",hora:e.dadosEvento.previsto},null,8,["hora"])):(o(),n(r,{key:2,class:"horaRealizada texto-grande",hora:e.dadosEvento.previsto},null,8,["hora"]))])],8,H)])],2)}const U=k(l,[["render",$],["__scopeId","data-v-e8d44815"]]);l.__docgenInfo={displayName:"CabecalhoEventoDetalhado",exportName:"default",description:"",tags:{},props:[{name:"perfilEvento",type:{name:"object"},required:!0},{name:"dadosEvento",type:{name:"EventoDetalhado"},required:!0},{name:"aoClicar",type:{name:"AoClicarEvento"},required:!1}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/CabecalhoEventoDetalhado.vue"]};export{U as C};
//# sourceMappingURL=CabecalhoEventoDetalhado-1fb35dfb.js.map
