/* empty css                 */import{d as v,b as t,s as n,p as s,t as i,g as o,l as u,n as h,m as d,o as a}from"./vue.esm-bundler-DivHmBVn.js";import{B as f}from"./Botao-CtZIT2Wn.js";import{P as g}from"./PerfilTimeline-Dn_SICz7.js";import{I as y}from"./IconeCategoria-aa0pGktc.js";import{H as P}from"./Hora-DY8YDjD9.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const c=v({components:{Botao:f,PerfilTimeline:g,IconeCategoria:y,Hora:P},name:"CabecalhoEventoDetalhado",props:{perfil:{required:!0,type:Object},evento:{required:!0,type:Object}},setup(e){return{}}}),C={key:1,class:"criticidade"},b={class:"titulo"},z={class:"dataHora"},k={class:"box"},D={class:"horaEvento"},E={key:0,class:"horaRealizada texto-grande"},q={key:1,class:"horaPlanejada texto-pequeno"},B={key:2,class:"horaRealizada texto-grande"},I={class:"box"},H={class:"horaEvento"};function N(e,r,R,j,S,$){const m=d("PerfilTimeline"),p=d("IconeCategoria"),l=d("Hora");return a(),t("section",{class:h(["cabecalho-evento",["criticidade-"+e.evento.criticidade]])},[e.perfil?(a(),n(m,{key:0,nomePerfil:e.perfil.nome,imagemPerfil:e.perfil.imagem,iconePerfil:e.perfil.icone,formatoReduzido:!0},null,8,["nomePerfil","imagemPerfil","iconePerfil"])):s("",!0),e.evento.criticidade!=="baixa"?(a(),t("div",C," Criticidade: "+i(e.evento.criticidade),1)):s("",!0),o("div",b,[u(p,{iconeCategoria:e.evento.categoria.icone,categoria:e.evento.categoria.nome},null,8,["iconeCategoria","categoria"]),o("h1",null,i(e.evento.titulo),1)]),o("div",z,[o("div",k,[r[0]||(r[0]=o("span",{class:"material-symbols-outlined"}," calendar_month ",-1)),o("div",D,[e.evento.realizado?(a(),t("div",E,i(e.evento.realizado.toLocaleDateString()),1)):s("",!0),e.evento.realizado?(a(),t("div",q,i(e.evento.realizado.toLocaleDateString()),1)):(a(),t("div",B,i(e.evento.previstoPara.toLocaleDateString()),1))])]),o("div",I,[r[1]||(r[1]=o("span",{class:"material-symbols-outlined"}," schedule ",-1)),o("div",H,[e.evento.realizado?(a(),n(l,{key:0,class:"horaRealizada texto-grande",hora:e.evento.realizado},null,8,["hora"])):s("",!0),e.evento.realizado?(a(),n(l,{key:1,class:"horaPlanejada texto-pequeno",hora:e.evento.previstoPara},null,8,["hora"])):(a(),n(l,{key:2,class:"horaRealizada texto-grande",hora:e.evento.previstoPara},null,8,["hora"]))])])])],2)}const G=_(c,[["render",N],["__scopeId","data-v-aa43d357"]]);c.__docgenInfo={displayName:"CabecalhoEventoDetalhado",exportName:"default",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"evento",type:{name:"EventoDetalhado"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/CabecalhoEventoDetalhado.vue"]};export{G as C};
