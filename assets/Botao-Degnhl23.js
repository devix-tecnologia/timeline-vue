import{d as u,r as m,e as p,b as s,k as d,o as i,t as l,p as f,q as E}from"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={PEQUENO:"pequeno",MEDIO:"medio",GRANDE:"grande"},h={OUTLINE:"outline",PREENCHIDO:"preenchido",VAZIO:"vazio"},r=u({name:"Botao",props:{titulo:{type:String,default:""},icone:{type:String},aparencia:{type:String,default:h.OUTLINE},tamanho:{type:String,default:y.MEDIO}},emits:{click:e=>!0},setup(e,{emit:a}){e=m(e);const t=o=>{a("click",o)},n=p(()=>({[`${e.aparencia}`]:!0,[`${e.tamanho}`]:!0}));return{handleClick:t,classes:n}}}),v={key:0,class:"material-symbols-outlined"};function g(e,a,t,n,o,I){return i(),s("button",{class:"btn","data-testid":"botao",onClick:a[0]||(a[0]=(...c)=>e.handleClick&&e.handleClick(...c))},[d(e.$slots,"default",{},()=>[e.icone?(i(),s("span",v,l(e.icone),1)):f("",!0),E(" "+l(e.titulo),1)],!0)])}const C=k(r,[["render",g],["__scopeId","data-v-adc6e80a"]]);r.__docgenInfo={displayName:"Botao",exportName:"default",description:"",tags:{},props:[{name:"titulo",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icone",type:{name:"string"}},{name:"aparencia",type:{name:"Aparencia"},defaultValue:{func:!1,value:"Aparencias.OUTLINE"}},{name:"tamanho",type:{name:"Tamanho"},defaultValue:{func:!1,value:"Tamanhos.MEDIO"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/Botao.vue"]};export{C as B};