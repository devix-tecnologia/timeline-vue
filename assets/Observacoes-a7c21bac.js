/* empty css                 */import{d,r as u,a as s,f as t,F as m,v as _,j as v,k as b,o as r,t as a,q as g,u as f}from"./vue.esm-bundler-95829c36.js";import{B as h}from"./Botao-2956d7a6.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const i=d({components:{Botao:h},name:"Observacoes",props:{tituloBotao:{type:String},aoClicar:{required:!1,type:Function},observacoes:{required:!0,type:Object}},setup(e){return e.observacoes.sort((c,n)=>n.criadaEm.getTime()-c.criadaEm.getTime()),e=u(e),{}}});const B=e=>(g("data-v-e90a0cb4"),e=e(),f(),e),E={class:"box box-observacoes"},O=B(()=>t("h3",null,"Observações:",-1)),x={class:"lista-obs"},C={class:"texto"},S={class:"autor"};function q(e,c,n,k,F,I){const l=b("Botao");return r(),s("section",E,[O,t("ul",x,[(r(!0),s(m,null,_(e.observacoes,(o,p)=>(r(),s("li",{key:p,class:"lista-item"},[t("p",C,a(o.mensagem),1),t("div",S,a(o.autor.nome)+" em "+a(o.criadaEm.toLocaleDateString())+" às "+a(o.criadaEm.getHours())+":"+a(o.criadaEm.getMinutes().toString().padStart(2,"0")),1)]))),128))]),v(l,{titulo:e.tituloBotao,aoClicar:e.aoClicar,icone:"add",aparencia:"preenchido",tamanho:"pequeno"},null,8,["titulo","aoClicar"])])}const D=y(i,[["render",q],["__scopeId","data-v-e90a0cb4"]]);i.__docgenInfo={displayName:"Observacoes",exportName:"default",description:"",tags:{},props:[{name:"tituloBotao",type:{name:"string"}},{name:"aoClicar",type:{name:"AoClicarEvento"},required:!1},{name:"observacoes",type:{name:"Observacao[]"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/Observacoes.vue"]};export{D as O};
//# sourceMappingURL=Observacoes-a7c21bac.js.map
