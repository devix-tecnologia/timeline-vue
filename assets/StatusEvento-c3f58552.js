/* empty css                 */import{d as c,r,f as i,p,n as u,o as d,y as l,z as m,l as _}from"./vue.esm-bundler-fc91e5f6.js";import{B as v}from"./BotaoStatus-ac04ef16.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const o=c({components:{BotaoStatus:v},name:"StatusEvento",props:{aparencia:{type:String},status:{required:!0,type:String}},emits:{editarClick:e=>!0},setup(e,{emit:t}){const a=s=>{t("editarClick",s)};return e=r(e),{handleEditarClick:a}}});const f=e=>(l("data-v-c7bc7440"),e=e(),m(),e),k={class:"box box-status"},h=f(()=>_("h3",null,"Status:",-1));function C(e,t,a,s,E,y){const n=i("BotaoStatus");return d(),p("section",k,[h,u(n,{aparencia:e.aparencia,status:e.status,"data-testid":"status-evento",onClick:e.handleEditarClick},null,8,["aparencia","status","onClick"])])}const x=S(o,[["render",C],["__scopeId","data-v-c7bc7440"]]);o.__docgenInfo={displayName:"StatusEvento",exportName:"default",description:"",tags:{},props:[{name:"aparencia",type:{name:"Aparencia"}},{name:"status",type:{name:"Status"},required:!0}],events:[{name:"editarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/StatusEvento.vue"]};export{x as S};
