import{d as M,z as p,r as Z,b as q,s as c,p as d,m,o as l}from"./vue.esm-bundler-DivHmBVn.js";/* empty css                 */import{T as x}from"./Topo-Biv2b3Dq.js";import{E as P}from"./EventoDetalhado-DOcRwGmM.js";import{T as B}from"./Timeline-D2lF4vD9.js";import{E as $}from"./EditarStatus-D7LS5Cq7.js";import{A as z}from"./AdicionarObservacao-BKv1V2JY.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./CabecalhoEventoDetalhado-4eHxiVWB.js";import"./Botao-CtZIT2Wn.js";import"./PerfilTimeline-Dn_SICz7.js";import"./AvatarTimeline-BTvmndzL.js";import"./IconeCategoria-aa0pGktc.js";import"./Hora-DY8YDjD9.js";import"./Observacoes-CudvchaS.js";import"./StatusEvento-CX_YZlS5.js";import"./BotaoStatus-BOr7WOk2.js";import"./IconeStatus-DDxYyA1M.js";import"./EventoTimeline-gA-dGrUj.js";import"./DescricaoEvento-CN94gHTX.js";import"./SubtituloEvento-DWCj_7dg.js";import"./TituloEvento-DRbZAUa5.js";import"./HoraEvento-7EaNurB4.js";import"./Destaque-nfd_tfd0.js";import"./SeparadorPeriodo-DNWoGJ3S.js";import"./BoxData-Cj8Lr_FB.js";import"./EditarEvento-BUydAEek.js";import"./AreaSalvamento-DsM8Wa2O.js";const V=M({props:{perfil:{required:!0,type:Object},eventos:{required:!0,type:Array}},components:{Topo:x,Evento:P,Timeline:B,EditarStatus:$,AdicionarObservacao:z},emits:{eventoTimelineClicked:(e,i)=>!0,eventoStatusEditClicked:(e,i)=>!0,eventoDetalhadoObservacoesAddClicked:(e,i)=>!0,editarStatusSalvarClicked:(e,i,r)=>!0,editarStatusCancelarClicked:(e,i)=>!0,adicionarObservacaoSalvarClicked:(e,i,r)=>!0,adicionarObservacaoCancelarClicked:(e,i)=>!0,voltarClick:e=>!0},setup(e,{emit:i}){const r=p(e,"eventos"),s=p(null),o=Z({topo:{exibir:!0},timeline:{exibir:!0},evento:{exibir:!1},editarStatus:{exibir:!1},adicionarObservacao:{exibir:!1},dados:{eventos:p(e,"eventos"),perfil:p(e,"perfil"),eventosTimeline:r,eventosDetalhados:r,eventoAtual:s}}),C=a=>"observacoes"in a,t=a=>{const n=["Timeline","Evento"];o.topo.exibir=n.includes(a),o.timeline.exibir=a==="Timeline",o.evento.exibir=a==="Evento",o.editarStatus.exibir=a==="EditarStatus",o.adicionarObservacao.exibir=a==="AdicionarObservacao"};return{selecionarEvento:(a,n)=>{C(a)&&(i("eventoTimelineClicked",a,n),o.dados.eventoAtual=a,t("Evento"))},handleVoltarTela:a=>{o.dados.eventoAtual?t("Timeline"):i("voltarClick",a)},handleStatusEditarClick:a=>{t("EditarStatus")},handleStatusCancelarClick:a=>{o.dados.eventoAtual&&(t("Evento"),i("editarStatusCancelarClicked",o.dados.eventoAtual,a))},handleStatusSalvarClick:(a,n)=>{o.dados.eventoAtual&&(t("Evento"),i("editarStatusSalvarClicked",o.dados.eventoAtual,a,n))},handleObservacaoAdicionarClick:a=>{o.dados.eventoAtual&&(i("eventoDetalhadoObservacoesAddClicked",o.dados.eventoAtual,a),t("AdicionarObservacao"))},handleAdicionarObservacaoSalvarClick:(a,n)=>{o.dados.eventoAtual&&(t("Evento"),i("adicionarObservacaoSalvarClicked",o.dados.eventoAtual,a,n))},handleObservacaoAdicionarCancelarClick:a=>{o.dados.eventoAtual&&(t("Evento"),i("adicionarObservacaoCancelarClicked",o.dados.eventoAtual,a))},TemplateTimeline:o}}}),J={class:"pagina","data-testid":"template-timeline"};function N(e,i,r,s,o,C){const t=m("Topo"),T=m("Timeline"),k=m("Evento"),b=m("EditarStatus"),S=m("AdicionarObservacao");return l(),q("div",J,[e.TemplateTimeline.topo.exibir?(l(),c(t,{key:0,titulo:e.TemplateTimeline.dados.perfil.nome,escuro:!1,onVoltarClick:e.handleVoltarTela},null,8,["titulo","onVoltarClick"])):d("",!0),e.TemplateTimeline.timeline.exibir?(l(),c(T,{key:1,"data-testid":"timeline",perfilTimeline:e.TemplateTimeline.dados.perfil,eventosTimeline:e.TemplateTimeline.dados.eventosTimeline,onEventoClick:e.selecionarEvento},null,8,["perfilTimeline","eventosTimeline","onEventoClick"])):d("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.evento.exibir?(l(),c(k,{key:2,"data-testid":"evento-detalhado",perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onObservacaoAdicionarClick:e.handleObservacaoAdicionarClick,onStatusEditarClick:e.handleStatusEditarClick},null,8,["perfil","evento","onObservacaoAdicionarClick","onStatusEditarClick"])):d("",!0),e.TemplateTimeline.dados.eventoAtual&&e.TemplateTimeline.editarStatus.exibir?(l(),c(b,{key:3,"data-testid":"editar-status",salvarVisivel:e.TemplateTimeline.editarStatus.exibir,perfil:e.TemplateTimeline.dados.perfil,evento:e.TemplateTimeline.dados.eventoAtual,onSalvarClick:e.handleStatusSalvarClick,onCancelarClick:e.handleStatusCancelarClick},null,8,["salvarVisivel","perfil","evento","onSalvarClick","onCancelarClick"])):d("",!0),e.TemplateTimeline.adicionarObservacao.exibir?(l(),c(S,{key:4,"data-testid":"adicionar-observacao",salvarVisivel:e.TemplateTimeline.adicionarObservacao.exibir,onAdicionarClick:e.handleAdicionarObservacaoSalvarClick,onCancelarClick:e.handleObservacaoAdicionarCancelarClick},null,8,["salvarVisivel","onAdicionarClick","onCancelarClick"])):d("",!0)])}const D=H(V,[["render",N]]);V.__docgenInfo={exportName:"default",displayName:"TemplateTimeline",description:"",tags:{},props:[{name:"perfil",type:{name:"Perfil"},required:!0},{name:"eventos",type:{name:"TipoEventoDetalhado[]"},required:!0}],events:[{name:"eventoTimelineClicked"},{name:"eventoStatusEditClicked"},{name:"eventoDetalhadoObservacoesAddClicked"},{name:"editarStatusSalvarClicked"},{name:"editarStatusCancelarClicked"},{name:"adicionarObservacaoSalvarClicked"},{name:"adicionarObservacaoCancelarClicked"},{name:"voltarClick"}],sourceFiles:["/home/runner/work/timeline-vue/timeline-vue/src/components/timeline/templates/TemplateTimeline.vue"]};const j={nome:"Maria do Socorro",imagem:"https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",icone:"person"},G=[{data:new Date("2023-04-26T19:00Z"),previstoPara:new Date("2023-04-26T19:00Z"),realizado:new Date("2023-04-26T19:30Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da Covid",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"realizado",criticidade:"media",atual:!1,scroll:!1,clicavel:!0,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]},{data:new Date("2023-04-26T20:10Z"),previstoPara:new Date("2023-04-20:10Z"),realizado:new Date("2023-04-26T20:15Z"),duracao:void 0,tolerancia:10,titulo:"Vacina da gripe",subtitulo:"Posto de saúde do bairro",destaque:"",categoria:{nome:"Vacina",icone:"vaccines"},status:"cancelado",criticidade:"baixa",atual:!1,scroll:!1,clicavel:!1,observacoes:[{mensagem:"Atraso de 10 minutos",autor:{nome:"Maria do Socorro"},criadaEm:new Date("2023-04-26T19:10Z")}]}],Ae={title:"Devix/Eventos/templates/TemplateTimeline",component:D,parameters:{componentSubtitle:"Timeline com tela de detalhes do evento."},argTypes:{}},_={nome:"",imagem:"",icone:""},F=j,w=G,y=e=>({components:{TemplateTimeline:D},setup(){return{handleAdicionarObservacaoSalvarClick:(s,o)=>{s.observacoes.push({mensagem:o,autor:{nome:"José da Silva"},criadaEm:new Date}),alert("Observação adicionada com sucesso!")},handleVoltarClick:s=>{alert("Voltar para a tela anterior!")},args:e}},template:'<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'}),v=y.bind({});v.args={perfil:F,eventos:w};const u=y.bind({});u.args={perfil:_,eventos:w};var f,h,E;v.parameters={...v.parameters,docs:{...(f=v.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (evento: EventoDetalhado, mensagem: string): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
      //TODO: fechar a tela de adicionar observação
      alert('Observação adicionada com sucesso!');
    };
    const handleVoltarClick = (mouseEvent: MouseEvent): void => {
      alert('Voltar para a tela anterior!');
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      handleVoltarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(E=(h=v.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var A,O,g;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    TemplateTimeline
  },
  setup() {
    const handleAdicionarObservacaoSalvarClick = (evento: EventoDetalhado, mensagem: string): void => {
      evento.observacoes.push({
        mensagem: mensagem,
        autor: {
          nome: 'José da Silva'
        },
        criadaEm: new Date()
      });
      //TODO: fechar a tela de adicionar observação
      alert('Observação adicionada com sucesso!');
    };
    const handleVoltarClick = (mouseEvent: MouseEvent): void => {
      alert('Voltar para a tela anterior!');
    };
    return {
      handleAdicionarObservacaoSalvarClick,
      handleVoltarClick,
      args
    };
  },
  template: '<TemplateTimeline v-bind="args" @voltarClick="handleVoltarClick" @adicionarObservacaoSalvarClicked="handleAdicionarObservacaoSalvarClick" />'
})`,...(g=(O=u.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};const Oe=["Timeline","semTitulo"];export{v as Timeline,Oe as __namedExportsOrder,Ae as default,u as semTitulo};
