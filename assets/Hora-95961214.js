import{d as s,g as t,f as n,e as p,t as a,n as i,o as d}from"./vue.esm-bundler-2c57d92d.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";const r=s({name:"Hora",props:{hora:{required:!0,type:Date},aparencia:{type:String,default:"padrao",validator(e){return["padrao","riscada"].includes(e)}}},components:{},setup(e){return{horas:t(new Date(e.hora)),classes:n(()=>({[`hora-${e.aparencia||""}`]:!0}))}}});function u(e,o,l,m,_,f){return d(),p("div",{class:i(["hora",e.classes])},a(e.horas.getHours())+":"+a(e.horas.getMinutes().toString().padStart(2,"0")),3)}const v=c(r,[["render",u],["__scopeId","data-v-d3082250"]]);r.__docgenInfo={displayName:"Hora",exportName:"default",description:"",tags:{},props:[{name:"hora",type:{name:"date"},required:!0},{name:"aparencia",type:{name:"string"},defaultValue:{func:!1,value:'"padrao"'},values:["padrao","riscada"]}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/atomos/Hora.vue"]};export{v as H};
