import{d as i,r,m as c,p,l as t,t as u,x as m,o as d,y as _,z as v}from"./vue.esm-bundler-491a3490.js";/* empty css                 */import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const l=i({name:"Topo",props:{titulo:{type:String},escuro:{type:Boolean,default:!0},link:{}},emits:{voltarClick:e=>!0},setup(e,{emit:o}){const s=a=>{o("voltarClick",a)};return e=r(e),{emitirVoltarClick:s,classes:c(()=>({"bg-escuro":e.escuro,"bg-claro":!e.escuro}))}}});const k=e=>(_("data-v-c9b653e2"),e=e(),v(),e),b={class:"conteudoTitulo"},y=k(()=>t("span",{class:"material-symbols-outlined"}," arrow_back ",-1)),C=[y],g={class:"titulo"};function h(e,o,s,a,T,I){return d(),p("div",{class:m(["topo",e.classes])},[t("div",b,[t("button",{class:"btn_voltar",onClick:o[0]||(o[0]=(...n)=>e.emitirVoltarClick&&e.emitirVoltarClick(...n)),"data-testid":"topo"},C),t("h3",g,u(e.titulo),1)])],2)}const $=f(l,[["render",h],["__scopeId","data-v-c9b653e2"]]);l.__docgenInfo={displayName:"Topo",exportName:"default",description:"",tags:{},props:[{name:"titulo",type:{name:"string"}},{name:"escuro",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"link"}],events:[{name:"voltarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/Topo.vue"]};export{$ as T};
