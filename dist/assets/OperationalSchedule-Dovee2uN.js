import{d as Q,a as _,l as p,q as t,J as a,E as c,L as M,C as H,D as R,o as u,G as Y,H as K,S as L,_ as tt,k as ot,O as at,y as U,z as W,u as P,U as X,v as G,F as J,x as nt,P as lt,A as ct,K as it,N as rt}from"./index-B7FCeGJ5.js";const I="/assets/confirm-Bt6C-TPo.png",z="/assets/pending-DiSv79qu.png",et="/assets/not_sending-Ca5jW9XR.png",j="/assets/schedule-BQ7OQ84X.png",dt="/assets/place-DROFwzNo.png",q="/assets/service-BekhWjbd.png",ut="/assets/approval-CzNgNMl0.png",_t="/assets/pre_approval-BiIaNcZA.png",pt="/assets/register-BoRrDKH9.png",B="/assets/star_full-oLyS9BV2.png",vt="/assets/protocol-BbJrHlA1.png",ht="/assets/send_confirm-CwjlG5nR.png",mt="/assets/car_displacement-CMwsrYQa.png",gt="/assets/identify-DzPAtZ3C.png",ft="/assets/cellphone-BjqW_nkd.png",bt="/assets/email-ap9XjAHx.png",$t="/assets/contract-D_d7mlHp.png",xt="/assets/address-BMauXCqH.png",St="/assets/number_plate-oApmADCB.png",yt="/assets/neighborhood-BGmSbVdo.png",Ct="/assets/city-DrwU6BxR.png",At="/assets/copy-xWBjRDqc.png",N="/assets/danger-DW5lSG0a.png",d=v=>(Y("data-v-90c688de"),v=v(),K(),v),wt={class:"modal"},kt={class:"card"},Dt={class:"close__btn"},Bt=d(()=>t("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),It=[Bt],Ot=d(()=>t("h3",null,[L("Informações sobre a ordem de serviço - "),t("b",null,"EM DESENVOLVIMENTO")],-1)),Tt={class:"content__info"},Ft={class:"info"},Mt=d(()=>t("tr",null,[t("th",null," Nome "),t("th",null,"Celular"),t("th",null,"E-mail"),t("th",null,"Contrato")],-1)),Pt={class:"flex"},Nt=["src"],Lt={class:"flex"},Vt=["src"],Zt={class:"flex"},Et=["src"],Ht={class:"flex"},Rt=["src"],zt=d(()=>t("tr",null,[t("th",null,"Endereço"),t("th",null,"Número"),t("th",null,"Bairro"),t("th",null,"Cidade")],-1)),jt={class:"flex"},qt=["src"],Ut={class:"flex"},Wt=["src"],Xt={class:"flex"},Gt=["src"],Jt={class:"flex"},Qt=["src"],Yt={class:"info_service"},Kt=d(()=>t("tr",null,[t("th",null,"Serviço"),t("th",null,"Sub Serviço"),t("th",null,"Protocolo"),t("th",null,"Status")],-1)),te={class:"flex"},ee=["src"],se={class:"flex"},oe=["src"],ae={class:"flex"},ne=["src"],le={class:"flex"},ce=["src"],ie=d(()=>t("tr",null,[t("th",null,"Agendamento"),t("th",null,"Atendimento"),t("th",null,"Deslocamento"),t("th",null,"Nota do atendimento")],-1)),re={class:"flex"},de=["src"],ue={class:"flex"},_e=["src"],pe={class:"flex"},ve=["src"],he={class:"flex"},me=["src"],ge=["src"],fe=["src"],be=["src"],$e=["src"],xe={class:"actions"},Se=d(()=>t("h4",null,"Ações disponíveis",-1)),ye={class:"buttons"},Ce=["disabled"],Ae=["src"],we=d(()=>t("span",null,"Enviar confirmação",-1)),ke=["disabled"],De=["src"],Be=d(()=>t("span",null,"Aprovar",-1)),Ie=["disabled"],Oe=["src"],Te=d(()=>t("span",null,"Solicitar aprovação",-1)),Fe=["disabled"],Me=["src"],Pe=d(()=>t("span",null,"Reagendar",-1)),Ne=["src"],Le=d(()=>t("span",null,"Copiar informações",-1)),Ve={disabled:"",class:"disabled-button"},Ze=["src"],Ee=d(()=>t("span",null,"Histórico",-1)),He=Q({__name:"OptionsSchedule",props:{osInfo:{},permissions:{}},emits:["closeModal"],setup(v,{emit:V}){const O=V,C=v,h=_(C.osInfo),e=_({}),m=_(C.permissions),A=()=>{O("closeModal")},T=()=>{H({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/data",method:"get",headers:{Authorization:"Bearer "+R.get("token")},params:{protocol:h.value.protocolo}}).then(s=>{e.value=s.data}).catch(s=>{console.error(s)})};T();const Z=s=>{const n=`*Nome:* ${s.cliente_nome},
*Celular:* ${s.celular_1},
*Contrato:* ${s.contrato_id},
*Endereço:* ${s.endereco}, ${s.numero}, ${s.area_despacho}, ${s.cidade}/DF,
*Serviço:* ${s.sub_servico},
*Protocolo:* ${s.protocolo},
*Agendamento:* ${F(s.data_agendamento)}`;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(n).then(()=>{}).catch(i=>{console.error("Erro ao copiar para a área de transferência: ",i)});else{const i=document.createElement("textarea");i.value=n,document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch(D){console.error("Erro ao copiar para a área de transferência: ",D)}document.body.removeChild(i)}},F=s=>{const n=new Date(s),i=String(n.getDate()).padStart(2,"0"),D=String(n.getMonth()+1).padStart(2,"0"),r=n.getFullYear(),l=String(n.getHours()).padStart(2,"0"),f=String(n.getMinutes()).padStart(2,"0"),o=String(n.getSeconds()).padStart(2,"0");return`${i}/${D}/${r} ${l}:${f}:${o}`},$=s=>{switch(s){case"Confirmado":return{src:I,alt:"confirmado",text:"Confirmado"};case"Pendente":return{src:et,alt:"pendente",text:"Pendente"};case"Atendente":return{src:I,alt:"Confirmado",text:"Confirmado"};default:return{src:z,alt:"não enviado",text:"Não enviado"}}},w=s=>({"Fechada Produtiva":I,"Fechada Improdutiva":N,"OS em Deslocamento":mt,"Transbordo da capacidade":N,"Agenda fechada":N,"Fora do período":N})[s]||z,x=s=>{const n=["Transbordo da capacidade","Agenda fechada","Fora do período"];return m.value.approval&&n.includes(s)},E=s=>{const n=["Transbordo da capacidade","Agenda fechada","Fora do período"];return m.value.preApproval&&n.includes(s)},k=s=>["OS em Deslocamento","Atendimento Iniciado","Fora do período","Transbordo da capacidade","Agenda fechada","Aberta Aguardando Responsável","Aberta Aguardando Agendamento","Aberta Aguardando Atendimento"].includes(s),b=s=>!["Confirmado","Pendente"].includes(s)&&h.value.status==="Aberta Aguardando Atendimento",S=()=>{H({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/send/confirm ",method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")},data:{protocol:h.value.protocolo}}).then(s=>{T()}).catch(s=>{console.error(s)})};return(s,n)=>(u(),p("div",wt,[t("div",kt,[t("div",Dt,[(u(),p("svg",{onClick:A,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},It))]),Ot,t("div",Tt,[t("div",Ft,[t("table",null,[Mt,t("tr",null,[t("td",null,[t("div",Pt,[t("img",{src:a(gt),alt:"calendar"},null,8,Nt),t("span",null,c(e.value.cliente_nome),1)])]),t("td",null,[t("div",Lt,[t("img",{src:a(ft),alt:"calendar"},null,8,Vt),t("span",null,c(e.value.celular_1),1)])]),t("td",null,[t("div",Zt,[t("img",{src:a(bt),alt:"calendar"},null,8,Et),t("span",null,c(e.value.email),1)])]),t("td",null,[t("div",Ht,[t("img",{src:a($t),alt:"contrato"},null,8,Rt),t("span",null,c(e.value.contrato_id),1)])])]),zt,t("tr",null,[t("td",null,[t("div",jt,[t("img",{src:a(xt),alt:"endereço"},null,8,qt),t("span",null,c(e.value.endereco),1)])]),t("td",null,[t("div",Ut,[t("img",{src:a(St),alt:"número"},null,8,Wt),t("span",null,c(e.value.numero),1)])]),t("td",null,[t("div",Xt,[t("img",{src:a(yt),alt:"número"},null,8,Gt),t("span",null,c(e.value.area_despacho),1)])]),t("td",null,[t("div",Jt,[t("img",{src:a(Ct),alt:"número"},null,8,Qt),t("span",null,c(e.value.cidade)+" - DF",1)])])])])]),t("div",Yt,[t("table",null,[Kt,t("tr",null,[t("td",null,[t("div",te,[t("img",{src:a(q),alt:"calendar"},null,8,ee),t("span",null,c(e.value.servico),1)])]),t("td",null,[t("div",se,[t("img",{src:a(q),alt:"calendar"},null,8,oe),t("span",null,c(e.value.sub_servico),1)])]),t("td",null,[t("div",ae,[t("img",{src:a(vt),alt:"calendar"},null,8,ne),t("span",null,c(e.value.protocolo),1)])]),t("td",null,[t("div",le,[t("img",{src:w(h.value.status),alt:"calendar"},null,8,ce),t("span",null,c(e.value.status),1)])])]),ie,t("tr",null,[t("td",null,[t("div",re,[t("img",{src:a(j),alt:"calendar"},null,8,de),t("span",null,c(F(e.value.data_agendamento)),1)])]),t("td",null,[t("div",ue,[t("img",{src:$(e.value.confirmacao_cliente).src,alt:"calendar"},null,8,_e),t("span",null,c($(e.value.confirmacao_cliente).text),1)])]),t("td",null,[t("div",pe,[t("img",{src:$(e.value.confirmacao_deslocamento).src,alt:"calendar"},null,8,ve),t("span",null,c($(e.value.confirmacao_deslocamento).text),1)])]),t("td",null,[t("div",he,[t("img",{src:a(B),alt:"star"},null,8,me),t("img",{src:a(B),alt:"star"},null,8,ge),t("img",{src:a(B),alt:"star"},null,8,fe),t("img",{src:a(B),alt:"star"},null,8,be),t("img",{src:a(B),alt:"star"},null,8,$e)])])])])]),t("div",xe,[Se,t("div",ye,[t("button",{onClick:n[0]||(n[0]=i=>S()),disabled:!b(e.value.confirmacao_cliente),class:M({"disabled-button":!b(e.value.confirmacao_cliente)})},[t("img",{src:a(ht),alt:"enviar confirmação"},null,8,Ae),we],10,Ce),t("button",{onClick:n[1]||(n[1]=i=>S(e.value.protocolo)),disabled:!x(e.value.status),class:M({"disabled-button":!x(e.value.status)})},[t("img",{src:a(ut),alt:"aprovar os"},null,8,De),Be],10,ke),t("button",{onClick:n[2]||(n[2]=i=>S(e.value.protocolo)),disabled:!E(e.value.status),class:M({"disabled-button":!E(e.value.status)})},[t("img",{src:a(_t),alt:"aprovar os"},null,8,Oe),Te],10,Ie),t("button",{onClick:n[3]||(n[3]=i=>S(e.value.protocolo)),disabled:!k(e.value.status),class:M([{"disabled-button":!k(e.value.status)},"disabled-button"])},[t("img",{src:a(j),alt:"reagendar os"},null,8,Me),Pe],10,Fe),t("button",{onClick:n[4]||(n[4]=i=>Z(e.value))},[t("img",{src:a(At),alt:"copiar"},null,8,Ne),Le]),t("button",Ve,[t("img",{src:a(pt),alt:"histórico"},null,8,Ze),Ee])])])])])]))}}),Re=tt(He,[["__scopeId","data-v-90c688de"]]),g=v=>(Y("data-v-15faa42f"),v=v(),K(),v),ze={class:"options"},je={class:"operational__dashboard"},qe={class:"filters"},Ue={class:"actions"},We={class:"search"},Xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve",width:"512",height:"512"},Ge=g(()=>t("g",null,[t("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),Je=[Ge],Qe={class:"period"},Ye={class:"status"},Ke=g(()=>t("option",{value:"all"},"Todos Serviços",-1)),ts=g(()=>t("option",{value:"activations"},"Ativações",-1)),es=g(()=>t("option",{value:"vt"},"Visita Técnica",-1)),ss=g(()=>t("option",{value:"me"},"Mudança de endereço",-1)),os=[Ke,ts,es,ss],as={class:"status"},ns=rt('<option value="all" data-v-15faa42f>Todos Status</option><option value="closed_productive" data-v-15faa42f>Fechada produtiva</option><option value="pending_att" data-v-15faa42f>Aguardando atendimento</option><option value="pending_technical" data-v-15faa42f>Aguardando Responsável</option><option value="displacement" data-v-15faa42f>Os em deslocamento</option><option value="closed_improductive" data-v-15faa42f>Fechada improdutiva</option>',6),ls=[ns],cs={class:"clear"},is=g(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[t("path",{d:"m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"})],-1)),rs=[is],ds={class:"table_orders"},us=g(()=>t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Protocolo"),t("th",{style:{"text-align":"left"}},"Serviço"),t("th",null,"Agendamento"),t("th",{style:{"text-align":"left"}},"Status"),t("th",{style:{"text-align":"left"}},"Confirmação do cliente"),t("th",{style:{"text-align":"left"}},"Localidade"),t("th",null,"Ações")])],-1)),_s={style:{"text-align":"left"}},ps=["onClick"],vs={style:{"text-align":"left"}},hs={class:"flex"},ms=["src"],gs={class:"flex"},fs=["src"],bs={class:"flex"},$s=["fill"],xs=g(()=>t("path",{d:"m24,24H0v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v1ZM3.718,5.202L1.4,2.982.018,4.426l2.317,2.22,1.383-1.443Zm3.862-2.493L6.367-.008l-1.826.814,1.213,2.717,1.826-.814Zm16.402,1.717l-1.383-1.443-2.317,2.22,1.383,1.443,2.317-2.22Zm-4.523-3.619L17.633-.008l-1.213,2.717,1.826.814,1.213-2.717Zm1.541,12.193c0-4.963-4.037-9-9-9S3,8.037,3,13v5h18v-5Zm-9-2c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4v2Z"},null,-1)),Ss=[xs],ys={style:{"text-align":"left"}},Cs={class:"flex"},As=["src"],ws=["src"],ks=["src"],Ds=["src"],Bs={class:"flex"},Is=["src"],Os=["onClick"],Ts=g(()=>t("svg",{class:"actions_order",xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512"},[t("circle",{cx:"12",cy:"2",r:"2"}),t("circle",{cx:"12",cy:"12",r:"2"}),t("circle",{cx:"12",cy:"22",r:"2"})],-1)),Fs=[Ts],Ms=Q({__name:"OperationalSchedule",setup(v){const V=ot(),O=_([]),C=_([]),h=_(""),e=_("all"),m=_("all"),A=new Date,T=A.getFullYear(),Z=String(A.getMonth()+1).padStart(2,"0"),F=String(A.getDate()).padStart(2,"0"),$=`${T}-${Z}-${F}`,w=_(!1),x=_($);(()=>{V.setInfoPage({title:"Agenda Operacional Aniel",subtitle:"Acompanhe o status de agendamento em tempo real"})})();const k=_("operational"),b=()=>{H({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/dashboard-operational",method:"get",params:{period:x.value},headers:{Authorization:"Bearer "+R.get("token")}}).then(r=>{O.value=r.data.dashboard,C.value=r.data.permissions}).catch(r=>{console.log(r)})},S=at(()=>{const r=h.value.toString().toLowerCase();return O.value.filter(l=>{const f=l.protocolo.toLowerCase().includes(r);let o=!0;e.value==="closed_productive"?o=l.status==="Fechada Produtiva":e.value==="pending_att"?o=l.status==="Aberta Aguardando Atendimento":e.value==="closed_improductive"?o=l.status==="Fechada Improdutiva":e.value==="pending_technical"?o=l.status==="Aberta Aguardando Responsável":e.value==="displacement"&&(o=l.status==="OS em Deslocamento");let y=!0;return m.value==="activations"?y=l.servico==="Ativação":m.value==="vt"?y=l.servico==="Visita Técnica":m.value==="me"&&(y=l.servico==="Mudança De Endereço"),f&&o&&y})});b(),setInterval(()=>{b()},1e4);const s=function(r){const f=btoa(JSON.stringify({personId:r,pbxInfo:{},availableAttendance:!0}));window.open("https://erp.agetelecom.com.br/people_informations?hash="+f,"_blank")},n=()=>{h.value="",m.value="all",e.value="all",b()},i=_({}),D=r=>{w.value=!0,i.value=r};return(r,l)=>{const f=it("router-link");return u(),p(J,null,[t("div",ze,[U(f,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:l[0]||(l[0]=o=>k.value="capacity")},{default:W(()=>[L("Capacidade")]),_:1}),U(f,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/operacional",onClick:l[1]||(l[1]=o=>k.value="operational")},{default:W(()=>[L("Operacional")]),_:1})]),t("div",je,[t("div",qe,[t("div",Ue,[t("div",We,[(u(),p("svg",Xe,Je)),P(t("input",{type:"number",placeholder:"Pesquisar (Protocolo)","onUpdate:modelValue":l[2]||(l[2]=o=>h.value=o)},null,512),[[X,h.value]])]),t("div",Qe,[P(t("input",{type:"date",name:"period","onUpdate:modelValue":l[3]||(l[3]=o=>x.value=o),onChange:b},null,544),[[X,x.value]])]),t("div",Ye,[P(t("select",{name:"status",id:"status","onUpdate:modelValue":l[4]||(l[4]=o=>m.value=o)},os,512),[[G,m.value]])]),t("div",as,[P(t("select",{name:"status",id:"status","onUpdate:modelValue":l[5]||(l[5]=o=>e.value=o)},ls,512),[[G,e.value]])]),t("div",cs,[t("button",{onClick:l[6]||(l[6]=o=>n())},rs)])])]),t("div",ds,[t("table",null,[us,t("tbody",null,[(u(!0),p(J,null,nt(S.value,(o,y)=>(u(),p("tr",{key:y},[t("td",_s,[t("b",{onClick:st=>s(o.cliente_id),style:{"user-select":"none",cursor:"pointer"}},"# ",8,ps),L(c(o.protocolo),1)]),t("td",vs,[t("div",hs,[t("img",{src:a(q),alt:"servico"},null,8,ms),t("span",null,c(o.sub_servico),1)])]),t("td",null,[t("div",gs,[t("img",{src:a(j),alt:"agenda"},null,8,fs),t("span",null,c(o.data_agendamento),1)])]),t("td",null,[t("div",bs,[(u(),p("svg",{fill:o.cor_indicativa??"#cccccc",xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Ss,8,$s)),t("span",null,c(o.status),1)])]),t("td",ys,[t("div",Cs,[o.confirmacao_cliente=="Confirmado"?(u(),p("img",{key:0,src:a(I),alt:"confirmado"},null,8,As)):o.confirmacao_cliente=="Pendente"?(u(),p("img",{key:1,src:a(et),alt:"pendente"},null,8,ws)):o.confirmacao_cliente=="Atendente"?(u(),p("img",{key:2,src:a(I),alt:"confirmado"},null,8,ks)):(u(),p("img",{key:3,src:a(z),alt:"confirmado"},null,8,Ds)),t("span",null,c(o.confirmacao_cliente??"Não enviada"),1)])]),t("td",null,[t("div",Bs,[t("img",{src:a(dt),alt:"local"},null,8,Is),t("span",null,c(o.localidade),1)])]),t("td",null,[t("div",{style:{cursor:"pointer"},onClick:st=>D(o)},Fs,8,Os)])]))),128))])])])]),w.value==!0?(u(),lt(Re,{key:0,osInfo:i.value,permissions:C.value,onCloseModal:l[7]||(l[7]=o=>w.value=!1)},null,8,["osInfo","permissions"])):ct("",!0)],64)}}}),Ns=tt(Ms,[["__scopeId","data-v-15faa42f"]]);export{Ns as default};
