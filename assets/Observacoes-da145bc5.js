/* empty css                 */import{d as u,r as _,f as v,p as r,l as s,F as b,A as f,n as g,o as i,t,y as h,z as k}from"./vue.esm-bundler-fc91e5f6.js";import{B as y}from"./Botao-3fb537c3.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const m=u({components:{Botao:y},name:"Observacoes",props:{tituloBotao:{type:String},observacoes:{required:!0,type:Object}},emits:{adicionarClick:e=>!0},setup(e,{emit:n}){const c=a=>{n("adicionarClick",a)};return e.observacoes.sort((a,d)=>d.criadaEm.getTime()-a.criadaEm.getTime()),e=_(e),{emitirAdicionarClick:c}}});const C=e=>(h("data-v-2fd919a9"),e=e(),k(),e),E={class:"box box-observacoes"},O=C(()=>s("h3",null,"Observações:",-1)),S={class:"lista-obs"},x=["data-testid"],I={class:"texto"},$={class:"autor"};function F(e,n,c,a,d,N){const p=v("Botao");return i(),r("section",E,[O,s("ul",S,[(i(!0),r(b,null,f(e.observacoes,(o,l)=>(i(),r("li",{"data-testid":`observacao-${l}`,key:l,class:"lista-item"},[s("p",I,t(o.mensagem),1),s("div",$,t(o.autor.nome)+" em "+t(o.criadaEm.toLocaleDateString())+" às "+t(o.criadaEm.getHours())+":"+t(o.criadaEm.getMinutes().toString().padStart(2,"0")),1)],8,x))),128))]),g(p,{titulo:e.tituloBotao,"data-testid":"botao-adicionar",icone:"add",aparencia:"preenchido",tamanho:"pequeno",onClick:e.emitirAdicionarClick},null,8,["titulo","onClick"])])}const L=B(m,[["render",F],["__scopeId","data-v-2fd919a9"]]);m.__docgenInfo={displayName:"Observacoes",exportName:"default",description:"",tags:{},props:[{name:"tituloBotao",type:{name:"string"}},{name:"observacoes",type:{name:"Observacao[]"},required:!0}],events:[{name:"adicionarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/Observacoes.vue"]};export{L as O};
