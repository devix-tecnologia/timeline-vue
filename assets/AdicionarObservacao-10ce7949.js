import{d as v,e as d,f as m,g as p,j as u,o as b,k as C,v as k,l as t}from"./vue.esm-bundler-66f7a54e.js";/* empty css                 */import{E as f}from"./EditarEvento-3376c8c2.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const c=v({props:{salvarVisivel:{type:Boolean},observacao:{type:String}},components:{EditarEvento:f},emits:{adicionarClick:(a,e)=>!0,cancelarClick:a=>!0},setup(a,{emit:e}){const s=d({observacaoLocal:a.observacao||""});return{salvar:o=>{const r=s.value.observacaoLocal;e("adicionarClick",r,o)},cancelar:o=>{e("cancelarClick",o)},state:s}}});const E=t("h2",null,"Observação:",-1);function g(a,e,s,i,l,o){const r=m("EditarEvento");return b(),p(r,{"data-testid":"adicionar-observacao",salvarVisivel:a.salvarVisivel,observacao:a.state.observacaoLocal,"onUpdate:observacao":e[1]||(e[1]=n=>a.state.observacaoLocal=n),onSalvarClick:a.salvar,onCancelarClick:a.cancelar},{conteudo:u(()=>[E,C(t("textarea",{"data-testid":"observacao-textarea","onUpdate:modelValue":e[0]||(e[0]=n=>a.state.observacaoLocal=n),placeholder:""},null,512),[[k,a.state.observacaoLocal]])]),_:1},8,["salvarVisivel","observacao","onSalvarClick","onCancelarClick"])}const O=_(c,[["render",g]]);c.__docgenInfo={exportName:"default",displayName:"AdicionarObservacao",description:"",tags:{},props:[{name:"salvarVisivel",type:{name:"boolean"}},{name:"observacao",type:{name:"string"}}],events:[{name:"adicionarClick"},{name:"cancelarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/AdicionarObservacao.vue"]};export{O as A};
