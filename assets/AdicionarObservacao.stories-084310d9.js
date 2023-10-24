import{d as v,r as m,f as d,w as u,o as _,A as b,B as f,a as i}from"./vue.esm-bundler-8df72b13.js";/* empty css                 */import{E as g}from"./EditarEvento-73d6d2b6.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./AreaSalvamento-be33c20c.js";import"./Botao-0ecd5bac.js";const n=v({props:{aoClicar:{required:!1,type:Function},salvarVisivel:{type:Boolean},observacao:{type:String}},components:{EditarEvento:g},setup(e){return{}}});const E=i("h2",null,"Observação:",-1);function O(e,o,A,y,x,T){const l=m("EditarEvento");return _(),d(l,{aoClicar:e.aoClicar,salvarVisivel:e.salvarVisivel},{conteudo:u(()=>[E,b(i("textarea",{"onUpdate:modelValue":o[0]||(o[0]=p=>e.observacao=p),placeholder:""},null,512),[[f,e.observacao]])]),_:1},8,["aoClicar","salvarVisivel"])}const c=C(n,[["render",O]]);n.__docgenInfo={exportName:"default",displayName:"AdicionarObservacao",description:"",tags:{},props:[{name:"aoClicar",type:{name:"AoClicarEvento"},required:!1},{name:"salvarVisivel",type:{name:"boolean"}},{name:"observacao",type:{name:"string"}}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/Templates/AdicionarObservacao.vue"]};const S={title:"Devix/Eventos/Templates/AdicionarObservacao",component:c,parameters:{componentSubtitle:"Tela de adicionar observação"},argTypes:{}},V=e=>({components:{AdicionarObservacao:c},setup(){return{args:e}},template:'<AdicionarObservacao :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />'}),a=V.bind({});a.args={salvarVisivel:!0,aoClicar:e=>alert("Olá!")};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AdicionarObservacao
  },
  setup() {
    return {
      args
    };
  },
  template: '<AdicionarObservacao :aoClicar="args.aoClicar" :salvarVisivel="args.salvarVisivel" />'
})`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const q=["Padrao"];export{a as Padrao,q as __namedExportsOrder,S as default};
//# sourceMappingURL=AdicionarObservacao.stories-084310d9.js.map
