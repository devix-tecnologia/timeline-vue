import{d as p,a as i,f as a,j as m,t,k as c,o as u}from"./vue.esm-bundler-95829c36.js";import{B as l}from"./BoxData-9a329036.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const s=p({name:"SeparadorPeriodo",props:{dataSeparador:{required:!0,type:Date}},components:{BoxData:l},setup(o){const e=new Array(12);return e[0]="Janeiro",e[1]="Fevereiro",e[2]="Março",e[3]="Abril",e[4]="Maio",e[5]="Junho",e[6]="Julho",e[7]="Agosto",e[8]="Setembro",e[9]="Outubro",e[10]="Novembro",e[11]="Dezembro",{mesCorrente:r=>e[r]}}});const S={class:"separadorPeriodo"},f={class:"areaData"},v={class:"titulo"};function h(o,e,n,r,g,y){const d=c("BoxData");return u(),i("div",S,[a("div",f,[m(d,{dataNumero:o.dataSeparador.getDate()},null,8,["dataNumero"])]),a("h3",v,t(o.mesCorrente(o.dataSeparador.getMonth()))+" de "+t(o.dataSeparador.getFullYear()),1)])}const P=_(s,[["render",h]]);s.__docgenInfo={displayName:"SeparadorPeriodo",exportName:"default",description:"",tags:{},props:[{name:"dataSeparador",type:{name:"date"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/SeparadorPeriodo.vue"]};export{P as S};
//# sourceMappingURL=SeparadorPeriodo-1ff13c52.js.map
