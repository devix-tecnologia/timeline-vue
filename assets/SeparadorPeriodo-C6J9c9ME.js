import{d as p,b as i,g as a,l as m,t,m as c,o as u}from"./vue.esm-bundler-DRZWSEY8.js";import{B as l}from"./BoxData-DtCXFAhW.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const s=p({name:"SeparadorPeriodo",props:{dataSeparador:{required:!0,type:Date}},components:{BoxData:l},setup(o){const e=new Array(12);return e[0]="Janeiro",e[1]="Fevereiro",e[2]="Março",e[3]="Abril",e[4]="Maio",e[5]="Junho",e[6]="Julho",e[7]="Agosto",e[8]="Setembro",e[9]="Outubro",e[10]="Novembro",e[11]="Dezembro",{mesCorrente:r=>e[r]}}}),S={class:"separadorPeriodo"},f={class:"areaData"},h={class:"titulo"};function g(o,e,n,r,v,D){const d=c("BoxData");return u(),i("div",S,[a("div",f,[m(d,{dataNumero:o.dataSeparador.getDate()},null,8,["dataNumero"])]),a("h3",h,t(o.mesCorrente(o.dataSeparador.getMonth()))+" de "+t(o.dataSeparador.getFullYear()),1)])}const y=_(s,[["render",g]]);s.__docgenInfo={displayName:"SeparadorPeriodo",exportName:"default",description:"",tags:{},props:[{name:"dataSeparador",type:{name:"date"},required:!0}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/moleculas/SeparadorPeriodo.vue"]};export{y as S};
