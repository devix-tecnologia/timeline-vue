import{d as v,f as m,s as p,w as d,m as u,o as b,y as C,z as k,g as t}from"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import{E as f}from"./EditarEvento-D0R0T-oK.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const c=v({props:{salvarVisivel:{type:Boolean},observacao:{type:String}},components:{EditarEvento:f},emits:{adicionarClick:(a,e)=>!0,cancelarClick:a=>!0},setup(a,{emit:e}){const s=m({observacaoLocal:a.observacao||""});return{salvar:o=>{const r=s.value.observacaoLocal;e("adicionarClick",r,o)},cancelar:o=>{e("cancelarClick",o)},state:s}}}),g=t("h2",null,"Observação:",-1);function V(a,e,s,i,l,o){const r=u("EditarEvento");return b(),p(r,{"data-testid":"adicionar-observacao",salvarVisivel:a.salvarVisivel,observacao:a.state.observacaoLocal,"onUpdate:observacao":e[1]||(e[1]=n=>a.state.observacaoLocal=n),onSalvarClick:a.salvar,onCancelarClick:a.cancelar},{conteudo:d(()=>[g,C(t("textarea",{"data-testid":"observacao-textarea","onUpdate:modelValue":e[0]||(e[0]=n=>a.state.observacaoLocal=n),placeholder:""},null,512),[[k,a.state.observacaoLocal]])]),_:1},8,["salvarVisivel","observacao","onSalvarClick","onCancelarClick"])}const A=E(c,[["render",V]]);c.__docgenInfo={exportName:"default",displayName:"AdicionarObservacao",description:"",tags:{},props:[{name:"salvarVisivel",type:{name:"boolean"}},{name:"observacao",type:{name:"string"}}],events:[{name:"adicionarClick"},{name:"cancelarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/AdicionarObservacao.vue"]};export{A};