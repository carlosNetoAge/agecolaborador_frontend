import{d as X,a as _,l as p,q as t,J as o,E as d,L as I,o as r,G,H as J,S as F,_ as Y,k as st,O as et,y as j,z as q,u as O,U,v as Q,F as W,x as ot,P as at,A as nt,C as lt,D as ct,K as it,N as dt}from"./index-1v1x9Cat.js";const T="/assets/confirm-Bt6C-TPo.png",H="/assets/pending-DiSv79qu.png",K="/assets/not_sending-Ca5jW9XR.png",R="/assets/schedule-BQ7OQ84X.png",rt="/assets/place-DROFwzNo.png",z="/assets/service-BekhWjbd.png",ut="/assets/approval-CzNgNMl0.png",_t="/assets/pre_approval-BiIaNcZA.png",pt="/assets/register-BoRrDKH9.png",A="/assets/star_full-oLyS9BV2.png",vt="/assets/protocol-BbJrHlA1.png",ht="/assets/send_confirm-CwjlG5nR.png",mt="/assets/car_displacement-CMwsrYQa.png",gt="/assets/identify-DzPAtZ3C.png",ft="/assets/cellphone-BjqW_nkd.png",bt="/assets/email-ap9XjAHx.png",xt="/assets/contract-D_d7mlHp.png",St="/assets/address-BMauXCqH.png",$t="/assets/number_plate-oApmADCB.png",yt="/assets/neighborhood-BGmSbVdo.png",Ct="/assets/city-DrwU6BxR.png",wt="/assets/copy-xWBjRDqc.png",P="/assets/danger-DW5lSG0a.png",c=v=>(G("data-v-eab47ca8"),v=v(),J(),v),At={class:"modal"},kt={class:"card"},Dt={class:"close__btn"},Bt=c(()=>t("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),It=[Bt],Ot=c(()=>t("h3",null,[F("Informações sobre a ordem de serviço - "),t("b",null,"EM DESENVOLVIMENTO")],-1)),Pt={class:"content__info"},Ft={class:"info"},Tt=c(()=>t("tr",null,[t("th",null," Nome "),t("th",null,"Celular"),t("th",null,"E-mail"),t("th",null,"Contrato")],-1)),Lt={class:"flex"},Mt=["src"],Nt=c(()=>t("span",null,"Luana Silva de Souza",-1)),Vt={class:"flex"},Zt=["src"],Et=c(()=>t("span",null,"(61) 99999-9999",-1)),Ht={class:"flex"},Rt=["src"],zt=c(()=>t("span",null," luanasilva@agelelecom.com.br ",-1)),jt={class:"flex"},qt=["src"],Ut=c(()=>t("span",null,"182712",-1)),Qt=c(()=>t("tr",null,[t("th",null,"Endereço"),t("th",null,"Número"),t("th",null,"Bairro"),t("th",null,"Cidade")],-1)),Wt={class:"flex"},Xt=["src"],Gt=c(()=>t("span",null,"Qn 7d conjunto 30 quadra 2",-1)),Jt={class:"flex"},Yt=["src"],Kt=c(()=>t("span",null,"Casa 209",-1)),ts={class:"flex"},ss=["src"],es=c(()=>t("span",null,"Planaltina",-1)),os={class:"flex"},as=["src"],ns=c(()=>t("span",null,"Brasília - DF",-1)),ls={class:"info_service"},cs=c(()=>t("tr",null,[t("th",null,"Serviço"),t("th",null,"Sub Serviço"),t("th",null,"Protocolo"),t("th",null,"Status")],-1)),is={class:"flex"},ds=["src"],rs={class:"flex"},us=["src"],_s={class:"flex"},ps=["src"],vs={class:"flex"},hs=["src"],ms=c(()=>t("tr",null,[t("th",null,"Agendamento"),t("th",null,"Atendimento"),t("th",null,"Deslocamento"),t("th",null,"Nota do atendimento")],-1)),gs={class:"flex"},fs=["src"],bs={class:"flex"},xs=["src"],Ss={class:"flex"},$s=["src"],ys={class:"flex"},Cs=["src"],ws=["src"],As=["src"],ks=["src"],Ds=["src"],Bs={class:"actions"},Is=c(()=>t("h4",null,"Ações disponíveis",-1)),Os={class:"buttons"},Ps=["disabled"],Fs=["src"],Ts=c(()=>t("span",null,"Enviar confirmação",-1)),Ls=["disabled"],Ms=["src"],Ns=c(()=>t("span",null,"Aprovar",-1)),Vs=["disabled"],Zs=["src"],Es=c(()=>t("span",null,"Solicitar aprovação",-1)),Hs=["disabled"],Rs=["src"],zs=c(()=>t("span",null,"Reagendar",-1)),js=["src"],qs=c(()=>t("span",null,"Copiar informações",-1)),Us=["src"],Qs=c(()=>t("span",null,"Histórico",-1)),Ws=X({__name:"OptionsSchedule",props:{osInfo:{},permissions:{}},emits:["closeModal"],setup(v,{emit:L}){const k=L,C=v,n=_(C.osInfo),u=_(C.permissions),g=()=>{k("closeModal")},w=()=>{const l=`*Nome:* Luana Silva de Souza,
*Celular:* (61) 99999-9999,
*Contrato:* 10293,
*Endereço:* Qn 7D conjunto 30, casa 209, Planaltina, Brasília/DF,
*Serviço:* Plano Combo ativação,
*Protocolo:* 192812,
*Agendamento:* 01/08/2024 08:00`;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(l).then(()=>{}).catch(s=>{console.error("Erro ao copiar para a área de transferência: ",s)});else{const s=document.createElement("textarea");s.value=l,document.body.appendChild(s),s.select();try{document.execCommand("copy")}catch(h){console.error("Erro ao copiar para a área de transferência: ",h)}document.body.removeChild(s)}},M=l=>{const s=new Date(l),h=String(s.getDate()).padStart(2,"0"),Z=String(s.getMonth()+1).padStart(2,"0"),B=s.getFullYear(),E=String(s.getHours()).padStart(2,"0"),i=String(s.getMinutes()).padStart(2,"0"),a=String(s.getSeconds()).padStart(2,"0");return`${h}/${Z}/${B} ${E}:${i}:${a}`},b=l=>{switch(l){case"Confirmado":return{src:T,alt:"confirmado",text:"Confirmado"};case"Pendente":return{src:K,alt:"pendente",text:"Pendente"};default:return{src:H,alt:"não enviado",text:"Não enviado"}}},N=l=>({"Fechada Produtiva":T,"Fechada Improdutiva":P,"OS em Deslocamento":mt,"Transbordo da capacidade":P,"Agenda fechada":P,"Fora do período":P})[l]||H,D=l=>{const s=["Transbordo da capacidade","Agenda fechada","Fora do período"];return u.value.approval&&s.includes(l)},x=l=>{const s=["Transbordo da capacidade","Agenda fechada","Fora do período"];return u.value.preApproval&&s.includes(l)},S=l=>["OS em Deslocamento","Atendimento Iniciado","Fora do período","Transbordo da capacidade","Agenda fechada","Aberta Aguardando Responsável","Aberta Aguardando Agendamento","Aberta Aguardando Atendimento"].includes(l),V=l=>!["Confirmado","Pendente"].includes(l)&&n.value.status==="Aberta Aguardando Atendimento",f=()=>{};return(l,s)=>(r(),p("div",At,[t("div",kt,[t("div",Dt,[(r(),p("svg",{onClick:g,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},It))]),Ot,t("div",Pt,[t("div",Ft,[t("table",null,[Tt,t("tr",null,[t("td",null,[t("div",Lt,[t("img",{src:o(gt),alt:"calendar"},null,8,Mt),Nt])]),t("td",null,[t("div",Vt,[t("img",{src:o(ft),alt:"calendar"},null,8,Zt),Et])]),t("td",null,[t("div",Ht,[t("img",{src:o(bt),alt:"calendar"},null,8,Rt),zt])]),t("td",null,[t("div",jt,[t("img",{src:o(xt),alt:"contrato"},null,8,qt),Ut])])]),Qt,t("tr",null,[t("td",null,[t("div",Wt,[t("img",{src:o(St),alt:"endereço"},null,8,Xt),Gt])]),t("td",null,[t("div",Jt,[t("img",{src:o($t),alt:"número"},null,8,Yt),Kt])]),t("td",null,[t("div",ts,[t("img",{src:o(yt),alt:"número"},null,8,ss),es])]),t("td",null,[t("div",os,[t("img",{src:o(Ct),alt:"número"},null,8,as),ns])])])])]),t("div",ls,[t("table",null,[cs,t("tr",null,[t("td",null,[t("div",is,[t("img",{src:o(z),alt:"calendar"},null,8,ds),t("span",null,d(n.value.servico),1)])]),t("td",null,[t("div",rs,[t("img",{src:o(z),alt:"calendar"},null,8,us),t("span",null,d(n.value.sub_servico),1)])]),t("td",null,[t("div",_s,[t("img",{src:o(vt),alt:"calendar"},null,8,ps),t("span",null,d(n.value.protocolo),1)])]),t("td",null,[t("div",vs,[t("img",{src:N(n.value.status),alt:"calendar"},null,8,hs),t("span",null,d(n.value.status),1)])])]),ms,t("tr",null,[t("td",null,[t("div",gs,[t("img",{src:o(R),alt:"calendar"},null,8,fs),t("span",null,d(M(n.value.data_agendamento)),1)])]),t("td",null,[t("div",bs,[t("img",{src:b(n.value.confirmacao_cliente).src,alt:"calendar"},null,8,xs),t("span",null,d(b(n.value.confirmacao_cliente).text),1)])]),t("td",null,[t("div",Ss,[t("img",{src:b(n.value.confirmacao_cliente).src,alt:"calendar"},null,8,$s),t("span",null,d(b(n.value.confirmacao_cliente).text),1)])]),t("td",null,[t("div",ys,[t("img",{src:o(A),alt:"star"},null,8,Cs),t("img",{src:o(A),alt:"star"},null,8,ws),t("img",{src:o(A),alt:"star"},null,8,As),t("img",{src:o(A),alt:"star"},null,8,ks),t("img",{src:o(A),alt:"star"},null,8,Ds)])])])])]),t("div",Bs,[Is,t("div",Os,[t("button",{onClick:s[0]||(s[0]=h=>f()),disabled:!V(n.value.confirmacao_cliente),class:I({"disabled-button":!V(n.value.confirmacao_cliente)})},[t("img",{src:o(ht),alt:"enviar confirmação"},null,8,Fs),Ts],10,Ps),t("button",{onClick:s[1]||(s[1]=h=>f(n.value.protocolo)),disabled:!D(n.value.status),class:I({"disabled-button":!D(n.value.status)})},[t("img",{src:o(ut),alt:"aprovar os"},null,8,Ms),Ns],10,Ls),t("button",{onClick:s[2]||(s[2]=h=>f(n.value.protocolo)),disabled:!x(n.value.status),class:I({"disabled-button":!x(n.value.status)})},[t("img",{src:o(_t),alt:"aprovar os"},null,8,Zs),Es],10,Vs),t("button",{onClick:s[3]||(s[3]=h=>f(n.value.protocolo)),disabled:!S(n.value.status),class:I({"disabled-button":!S(n.value.status)})},[t("img",{src:o(R),alt:"reagendar os"},null,8,Rs),zs],10,Hs),t("button",{onClick:w},[t("img",{src:o(wt),alt:"copiar"},null,8,js),qs]),t("button",null,[t("img",{src:o(pt),alt:"histórico"},null,8,Us),Qs])])])])])]))}}),Xs=Y(Ws,[["__scopeId","data-v-eab47ca8"]]),m=v=>(G("data-v-8ab4b05c"),v=v(),J(),v),Gs={class:"options"},Js={class:"operational__dashboard"},Ys={class:"filters"},Ks={class:"actions"},te={class:"search"},se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve",width:"512",height:"512"},ee=m(()=>t("g",null,[t("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),oe=[ee],ae={class:"period"},ne={class:"status"},le=m(()=>t("option",{value:"all"},"Todos Serviços",-1)),ce=m(()=>t("option",{value:"activations"},"Ativações",-1)),ie=m(()=>t("option",{value:"vt"},"Visita Técnica",-1)),de=m(()=>t("option",{value:"me"},"Mudança de endereço",-1)),re=[le,ce,ie,de],ue={class:"status"},_e=dt('<option value="all" data-v-8ab4b05c>Todos Status</option><option value="closed_productive" data-v-8ab4b05c>Fechada produtiva</option><option value="pending_att" data-v-8ab4b05c>Aguardando atendimento</option><option value="pending_technical" data-v-8ab4b05c>Aguardando Responsável</option><option value="displacement" data-v-8ab4b05c>Os em deslocamento</option><option value="closed_improductive" data-v-8ab4b05c>Fechada improdutiva</option>',6),pe=[_e],ve={class:"clear"},he=m(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[t("path",{d:"m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"})],-1)),me=[he],ge={class:"table_orders"},fe=m(()=>t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Protocolo"),t("th",{style:{"text-align":"left"}},"Serviço"),t("th",null,"Agendamento"),t("th",{style:{"text-align":"left"}},"Status"),t("th",{style:{"text-align":"left"}},"Confirmação do cliente"),t("th",{style:{"text-align":"left"}},"Localidade"),t("th",null,"Ações")])],-1)),be={style:{"text-align":"left"}},xe=["onClick"],Se={style:{"text-align":"left"}},$e={class:"flex"},ye=["src"],Ce={class:"flex"},we=["src"],Ae={class:"flex"},ke=["fill"],De=m(()=>t("path",{d:"m24,24H0v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v1ZM3.718,5.202L1.4,2.982.018,4.426l2.317,2.22,1.383-1.443Zm3.862-2.493L6.367-.008l-1.826.814,1.213,2.717,1.826-.814Zm16.402,1.717l-1.383-1.443-2.317,2.22,1.383,1.443,2.317-2.22Zm-4.523-3.619L17.633-.008l-1.213,2.717,1.826.814,1.213-2.717Zm1.541,12.193c0-4.963-4.037-9-9-9S3,8.037,3,13v5h18v-5Zm-9-2c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4v2Z"},null,-1)),Be=[De],Ie={style:{"text-align":"left"}},Oe={class:"flex"},Pe=["src"],Fe=["src"],Te=["src"],Le=["src"],Me={class:"flex"},Ne=["src"],Ve=["onClick"],Ze=m(()=>t("svg",{class:"actions_order",xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512"},[t("circle",{cx:"12",cy:"2",r:"2"}),t("circle",{cx:"12",cy:"12",r:"2"}),t("circle",{cx:"12",cy:"22",r:"2"})],-1)),Ee=[Ze],He=X({__name:"OperationalSchedule",setup(v){const L=st(),k=_([]),C=_([]),n=_(""),u=_("all"),g=_("all"),w=new Date,M=w.getFullYear(),b=String(w.getMonth()+1).padStart(2,"0"),N=String(w.getDate()).padStart(2,"0"),D=`${M}-${b}-${N}`,x=_(!1),S=_(D);(()=>{L.setInfoPage({title:"Agenda Operacional Aniel",subtitle:"Acompanhe o status de agendamento em tempo real"})})();const f=_("operational"),l=()=>{lt({url:"http://localhost:8000/integrator/aniel/management-schedule/dashboard-operational",method:"get",params:{period:S.value},headers:{Authorization:"Bearer "+ct.get("token")}}).then(i=>{k.value=i.data.dashboard,C.value=i.data.permissions}).catch(i=>{console.log(i)})},s=et(()=>{const i=n.value.toString().toLowerCase();return k.value.filter(a=>{const $=a.protocolo.toLowerCase().includes(i);let e=!0;u.value==="closed_productive"?e=a.status==="Fechada Produtiva":u.value==="pending_att"?e=a.status==="Aberta Aguardando Atendimento":u.value==="closed_improductive"?e=a.status==="Fechada Improdutiva":u.value==="pending_technical"?e=a.status==="Aberta Aguardando Responsável":u.value==="displacement"&&(e=a.status==="OS em Deslocamento");let y=!0;return g.value==="activations"?y=a.servico==="Ativação":g.value==="vt"?y=a.servico==="Visita Técnica":g.value==="me"&&(y=a.servico==="Mudança De Endereço"),$&&e&&y})});l(),setInterval(()=>{l()},1e4);const h=function(i){const $=btoa(JSON.stringify({personId:i,pbxInfo:{},availableAttendance:!0}));window.open("https://erp.agetelecom.com.br/people_informations?hash="+$,"_blank")},Z=()=>{n.value="",g.value="all",u.value="all",l()},B=_({}),E=i=>{x.value=!0,B.value=i};return(i,a)=>{const $=it("router-link");return r(),p(W,null,[t("div",Gs,[j($,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:a[0]||(a[0]=e=>f.value="capacity")},{default:q(()=>[F("Capacidade")]),_:1}),j($,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/operacional",onClick:a[1]||(a[1]=e=>f.value="operational")},{default:q(()=>[F("Operacional")]),_:1})]),t("div",Js,[t("div",Ys,[t("div",Ks,[t("div",te,[(r(),p("svg",se,oe)),O(t("input",{type:"number",placeholder:"Pesquisar (Protocolo)","onUpdate:modelValue":a[2]||(a[2]=e=>n.value=e)},null,512),[[U,n.value]])]),t("div",ae,[O(t("input",{type:"date",name:"period","onUpdate:modelValue":a[3]||(a[3]=e=>S.value=e),onChange:l},null,544),[[U,S.value]])]),t("div",ne,[O(t("select",{name:"status",id:"status","onUpdate:modelValue":a[4]||(a[4]=e=>g.value=e)},re,512),[[Q,g.value]])]),t("div",ue,[O(t("select",{name:"status",id:"status","onUpdate:modelValue":a[5]||(a[5]=e=>u.value=e)},pe,512),[[Q,u.value]])]),t("div",ve,[t("button",{onClick:a[6]||(a[6]=e=>Z())},me)])])]),t("div",ge,[t("table",null,[fe,t("tbody",null,[(r(!0),p(W,null,ot(s.value,(e,y)=>(r(),p("tr",{key:y},[t("td",be,[t("b",{onClick:tt=>h(e.cliente_id),style:{"user-select":"none",cursor:"pointer"}},"# ",8,xe),F(d(e.protocolo),1)]),t("td",Se,[t("div",$e,[t("img",{src:o(z),alt:"servico"},null,8,ye),t("span",null,d(e.sub_servico),1)])]),t("td",null,[t("div",Ce,[t("img",{src:o(R),alt:"agenda"},null,8,we),t("span",null,d(e.data_agendamento),1)])]),t("td",null,[t("div",Ae,[(r(),p("svg",{fill:e.cor_indicativa??"#cccccc",xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Be,8,ke)),t("span",null,d(e.status),1)])]),t("td",Ie,[t("div",Oe,[e.confirmacao_cliente=="Confirmado"?(r(),p("img",{key:0,src:o(T),alt:"confirmado"},null,8,Pe)):e.confirmacao_cliente=="Pendente"?(r(),p("img",{key:1,src:o(K),alt:"pendente"},null,8,Fe)):e.confirmacao_cliente=="Atendente"?(r(),p("img",{key:2,src:o(T),alt:"confirmado"},null,8,Te)):(r(),p("img",{key:3,src:o(H),alt:"confirmado"},null,8,Le)),t("span",null,d(e.confirmacao_cliente??"Não enviada"),1)])]),t("td",null,[t("div",Me,[t("img",{src:o(rt),alt:"local"},null,8,Ne),t("span",null,d(e.localidade),1)])]),t("td",null,[t("div",{style:{cursor:"pointer"},onClick:tt=>E(e)},Ee,8,Ve)])]))),128))])])])]),x.value==!0?(r(),at(Xs,{key:0,osInfo:B.value,permissions:C.value,onCloseModal:a[7]||(a[7]=e=>x.value=!1)},null,8,["osInfo","permissions"])):nt("",!0)],64)}}}),ze=Y(He,[["__scopeId","data-v-8ab4b05c"]]);export{ze as default};
