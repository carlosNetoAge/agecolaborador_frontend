import{d as oe,a as u,l as h,q as e,J as l,E as c,A as Z,L,C as E,D as H,o as p,G as se,H as ae,S as z,_ as ne,k as ce,O as re,y as Y,z as K,u as I,U as ee,v as q,F as te,x as ie,P as de,K as ue,N as pe}from"./index-oALXprK-.js";const F="/assets/confirm-Bt6C-TPo.png",W="/assets/pending-DiSv79qu.png",le="/assets/not_sending-Ca5jW9XR.png",X="/assets/schedule-BQ7OQ84X.png",_e="/assets/place-DROFwzNo.png",G="/assets/service-BekhWjbd.png",ve="/assets/approval-CzNgNMl0.png",he="/assets/pre_approval-BiIaNcZA.png",me="/assets/register-BoRrDKH9.png",P="/assets/star_full-oLyS9BV2.png",ge="/assets/protocol-BbJrHlA1.png",fe="/assets/send_confirm-CwjlG5nR.png",be="/assets/car_displacement-CMwsrYQa.png",xe="/assets/identify-DzPAtZ3C.png",$e="/assets/cellphone-BjqW_nkd.png",ye="/assets/email-ap9XjAHx.png",Se="/assets/contract-D_d7mlHp.png",Ce="/assets/address-BMauXCqH.png",Ae="/assets/number_plate-oApmADCB.png",we="/assets/neighborhood-BGmSbVdo.png",ke="/assets/city-DrwU6BxR.png",De="/assets/copy-xWBjRDqc.png",V="/assets/danger-DW5lSG0a.png",_=g=>(se("data-v-b78e9497"),g=g(),ae(),g),Oe={class:"modal"},Te={class:"card"},Be={class:"close__btn"},Ie=_(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),Pe=[Ie],Fe=_(()=>e("h3",null,[z("Informações sobre a ordem de serviço - "),e("b",null,"EM DESENVOLVIMENTO")],-1)),Me={class:"content__info"},Ne={key:0,class:"info"},Le=_(()=>e("tr",null,[e("th",null," Nome "),e("th",null,"Celular"),e("th",null,"E-mail"),e("th",null,"Contrato")],-1)),Ve={class:"flex"},Ze=["src"],Ee={class:"flex"},He=["src"],ze={class:"flex"},Re=["src"],je={class:"flex"},Ue=["src"],qe=_(()=>e("tr",null,[e("th",null,"Endereço"),e("th",null,"Número"),e("th",null,"Bairro"),e("th",null,"Cidade")],-1)),We={class:"flex"},Xe=["src"],Ge={class:"flex"},Je=["src"],Qe={class:"flex"},Ye=["src"],Ke={class:"flex"},et=["src"],tt={key:1,class:"info_service"},ot=_(()=>e("tr",null,[e("th",null,"Serviço"),e("th",null,"Sub Serviço"),e("th",null,"Protocolo"),e("th",null,"Status")],-1)),st={class:"flex"},at=["src"],nt={class:"flex"},lt=["src"],ct={class:"flex"},rt=["src"],it={class:"flex"},dt=["src"],ut=_(()=>e("tr",null,[e("th",null,"Agendamento"),e("th",null,"Atendimento"),e("th",null,"Deslocamento"),e("th",null,"Nota do atendimento")],-1)),pt={class:"flex"},_t=["src"],vt={class:"flex"},ht=["src"],mt={class:"flex"},gt=["src"],ft={class:"flex"},bt=["src"],xt=["src"],$t=["src"],yt=["src"],St=["src"],Ct={key:2,class:"actions"},At=_(()=>e("h4",null,"Ações disponíveis",-1)),wt={class:"buttons"},kt=["disabled"],Dt=["src"],Ot=_(()=>e("span",null,"Enviar confirmação",-1)),Tt=["disabled"],Bt=["src"],It=_(()=>e("span",null,"Aprovar",-1)),Pt=["disabled"],Ft=["src"],Mt=_(()=>e("span",null,"Solicitar aprovação",-1)),Nt=["disabled"],Lt=["src"],Vt=_(()=>e("span",null,"Reagendar",-1)),Zt=["src"],Et=_(()=>e("span",null,"Copiar informações",-1)),Ht={disabled:"",class:"disabled-button"},zt=["src"],Rt=_(()=>e("span",null,"Histórico",-1)),jt=oe({__name:"OptionsSchedule",props:{osInfo:{},permissions:{}},emits:["closeModal"],setup(g,{emit:R}){const M=R,C=g,b=u(C.osInfo),t=u({}),f=u(C.permissions),i=u({sendConfirm:!1,approval:!1,preApproval:!1,reschedule:!1,copy:!1,register:!1}),A=()=>{M("closeModal")},w=()=>{E({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/data",method:"get",headers:{Authorization:"Bearer "+H.get("token")},params:{protocol:b.value.protocolo}}).then(s=>{t.value=s.data,i.value.sendConfirm=y(),i.value.approval=D(),i.value.preApproval=J()}).catch(s=>{console.error(s)})};w();const j=s=>{const n=`*Nome:* ${s.cliente_nome},
*Celular:* ${s.celular_1},
*Contrato:* ${s.contrato_id},
*Endereço:* ${s.endereco}, ${s.numero}, ${s.area_despacho}, ${s.cidade}/DF,
*Serviço:* ${s.sub_servico},
*Protocolo:* ${s.protocolo},
*Agendamento:* ${N(s.data_agendamento)}`;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(n).then(()=>{}).catch(r=>{console.error("Erro ao copiar para a área de transferência: ",r)});else{const r=document.createElement("textarea");r.value=n,document.body.appendChild(r),r.select();try{document.execCommand("copy")}catch(v){console.error("Erro ao copiar para a área de transferência: ",v)}document.body.removeChild(r)}},N=s=>{const n=new Date(s),r=String(n.getDate()).padStart(2,"0"),v=String(n.getMonth()+1).padStart(2,"0"),d=n.getFullYear(),a=String(n.getHours()).padStart(2,"0"),x=String(n.getMinutes()).padStart(2,"0"),o=String(n.getSeconds()).padStart(2,"0");return`${r}/${v}/${d} ${a}:${x}:${o}`},$=s=>{switch(s){case"Confirmado":return{src:F,alt:"confirmado",text:"Confirmado"};case"Pendente":return{src:le,alt:"pendente",text:"Pendente"};case"Atendente":return{src:F,alt:"Confirmado",text:"Confirmado"};default:return{src:W,alt:"não enviado",text:"Não enviado"}}},k=s=>({"Fechada Produtiva":F,"Fechada Improdutiva":V,"OS em Deslocamento":be,"Transbordo da capacidade":V,"Agenda fechada":V,"Fora do período":V})[s]||W,D=()=>{const n=["Transbordo da capacidade","Agenda fechada","Fora do período"].includes(t.value.status),r=f.value.approval;return n&&r},J=()=>{const n=["Transbordo da capacidade","Agenda fechada","Fora do período"].includes(t.value.status),r=f.value.preApproval;return console.log(n,f.value),n&&r},O=s=>["OS em Deslocamento","Atendimento Iniciado","Fora do período","Transbordo da capacidade","Agenda fechada","Aberta Aguardando Responsável","Aberta Aguardando Agendamento","Aberta Aguardando Atendimento"].includes(s),y=()=>{const s=["Confirmado","Pendente","Atendente"],n=!s.includes(t.value.confirmacao_cliente),r=!s.includes(t.value.confirmacao_deslocamento),v=t.value.status=="Aberta Aguardando Atendimento";return n&&r&&v},T=()=>{E({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/send/confirm ",method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+H.get("token")},data:{protocol:b.value.protocolo}}).then(s=>{w()}).catch(s=>{console.error(s)})},U=()=>{E({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/approval-order",method:"POST",data:{order:t.value.protocolo},headers:{"Content-Type":"application/json",Authorization:"Bearer "+H.get("token")}}).then(s=>{w()}).catch(s=>{console.error(s)})};return(s,n)=>(p(),h("div",Oe,[e("div",Te,[e("div",Be,[(p(),h("svg",{onClick:A,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Pe))]),Fe,e("div",Me,[t.value.protocolo?(p(),h("div",Ne,[e("table",null,[Le,e("tr",null,[e("td",null,[e("div",Ve,[e("img",{src:l(xe),alt:"calendar"},null,8,Ze),e("span",null,c(t.value.cliente_nome),1)])]),e("td",null,[e("div",Ee,[e("img",{src:l($e),alt:"calendar"},null,8,He),e("span",null,c(t.value.celular_1),1)])]),e("td",null,[e("div",ze,[e("img",{src:l(ye),alt:"calendar"},null,8,Re),e("span",null,c(t.value.email),1)])]),e("td",null,[e("div",je,[e("img",{src:l(Se),alt:"contrato"},null,8,Ue),e("span",null,c(t.value.contrato_id),1)])])]),qe,e("tr",null,[e("td",null,[e("div",We,[e("img",{src:l(Ce),alt:"endereço"},null,8,Xe),e("span",null,c(t.value.endereco),1)])]),e("td",null,[e("div",Ge,[e("img",{src:l(Ae),alt:"número"},null,8,Je),e("span",null,c(t.value.numero),1)])]),e("td",null,[e("div",Qe,[e("img",{src:l(we),alt:"número"},null,8,Ye),e("span",null,c(t.value.area_despacho),1)])]),e("td",null,[e("div",Ke,[e("img",{src:l(ke),alt:"número"},null,8,et),e("span",null,c(t.value.cidade)+" - DF",1)])])])])])):Z("",!0),t.value.protocolo?(p(),h("div",tt,[e("table",null,[ot,e("tr",null,[e("td",null,[e("div",st,[e("img",{src:l(G),alt:"calendar"},null,8,at),e("span",null,c(t.value.servico),1)])]),e("td",null,[e("div",nt,[e("img",{src:l(G),alt:"calendar"},null,8,lt),e("span",null,c(t.value.sub_servico),1)])]),e("td",null,[e("div",ct,[e("img",{src:l(ge),alt:"calendar"},null,8,rt),e("span",null,c(t.value.protocolo),1)])]),e("td",null,[e("div",it,[e("img",{src:k(b.value.status),alt:"calendar"},null,8,dt),e("span",null,c(t.value.status),1)])])]),ut,e("tr",null,[e("td",null,[e("div",pt,[e("img",{src:l(X),alt:"calendar"},null,8,_t),e("span",null,c(N(t.value.data_agendamento)),1)])]),e("td",null,[e("div",vt,[e("img",{src:$(t.value.confirmacao_cliente).src,alt:"calendar"},null,8,ht),e("span",null,c($(t.value.confirmacao_cliente).text),1)])]),e("td",null,[e("div",mt,[e("img",{src:$(t.value.confirmacao_deslocamento).src,alt:"calendar"},null,8,gt),e("span",null,c($(t.value.confirmacao_deslocamento).text),1)])]),e("td",null,[e("div",ft,[e("img",{src:l(P),alt:"star"},null,8,bt),e("img",{src:l(P),alt:"star"},null,8,xt),e("img",{src:l(P),alt:"star"},null,8,$t),e("img",{src:l(P),alt:"star"},null,8,yt),e("img",{src:l(P),alt:"star"},null,8,St)])])])])])):Z("",!0),t.value.protocolo?(p(),h("div",Ct,[At,e("div",wt,[e("button",{onClick:n[0]||(n[0]=r=>T()),disabled:!i.value.sendConfirm,class:L({"disabled-button":!i.value.sendConfirm})},[e("img",{src:l(fe),alt:"enviar confirmação"},null,8,Dt),Ot],10,kt),e("button",{onClick:n[1]||(n[1]=r=>U()),disabled:!i.value.approval,class:L({"disabled-button":!i.value.approval})},[e("img",{src:l(ve),alt:"aprovar os"},null,8,Bt),It],10,Tt),e("button",{onClick:n[2]||(n[2]=r=>T(t.value.protocolo)),disabled:!i.value.preApproval,class:L({"disabled-button":!i.value.preApproval})},[e("img",{src:l(he),alt:"aprovar os"},null,8,Ft),Mt],10,Pt),e("button",{onClick:n[3]||(n[3]=r=>T(t.value.protocolo)),disabled:!O(t.value.status),class:L([{"disabled-button":!O(t.value.status)},"disabled-button"])},[e("img",{src:l(X),alt:"reagendar os"},null,8,Lt),Vt],10,Nt),e("button",{onClick:n[4]||(n[4]=r=>j(t.value))},[e("img",{src:l(De),alt:"copiar"},null,8,Zt),Et]),e("button",Ht,[e("img",{src:l(me),alt:"histórico"},null,8,zt),Rt])])])):Z("",!0)])])]))}}),Ut=ne(jt,[["__scopeId","data-v-b78e9497"]]),m=g=>(se("data-v-fee74940"),g=g(),ae(),g),qt={class:"options"},Wt={class:"operational__dashboard"},Xt={class:"filters"},Gt={class:"actions"},Jt={class:"search"},Qt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve",width:"512",height:"512"},Yt=m(()=>e("g",null,[e("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),Kt=[Yt],eo={class:"period"},to={class:"status"},oo=m(()=>e("option",{value:"all"},"Todos Serviços",-1)),so=m(()=>e("option",{value:"activations"},"Ativações",-1)),ao=m(()=>e("option",{value:"vt"},"Visita Técnica",-1)),no=m(()=>e("option",{value:"me"},"Mudança de endereço",-1)),lo=[oo,so,ao,no],co={class:"status"},ro=m(()=>e("option",{value:"all"},"Todos os periodos",-1)),io=m(()=>e("option",{value:"morning"},"Manhã",-1)),uo=m(()=>e("option",{value:"afternoon"},"Tarde",-1)),po=[ro,io,uo],_o={class:"status"},vo=pe('<option value="all" data-v-fee74940>Todos Status</option><option value="closed_productive" data-v-fee74940>Fechada produtiva</option><option value="pending_att" data-v-fee74940>Aguardando atendimento</option><option value="pending_technical" data-v-fee74940>Aguardando Responsável</option><option value="pending_schedule" data-v-fee74940>Aguardando Agendamento</option><option value="displacement" data-v-fee74940>Os em deslocamento</option><option value="closed_improductive" data-v-fee74940>Fechada improdutiva</option>',7),ho=[vo],mo={class:"clear"},go=m(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[e("path",{d:"m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"})],-1)),fo=[go],bo={class:"table_orders"},xo=m(()=>e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Protocolo"),e("th",{style:{"text-align":"left"}},"Serviço"),e("th",null,"Agendamento"),e("th",{style:{"text-align":"left"}},"Status"),e("th",{style:{"text-align":"left"}},"Confirmação do cliente"),e("th",{style:{"text-align":"left"}},"Localidade"),e("th",null,"Ações")])],-1)),$o={style:{"text-align":"left"}},yo=["onClick"],So={style:{"text-align":"left"}},Co={class:"flex"},Ao=["src"],wo={class:"flex"},ko=["src"],Do={class:"flex"},Oo=["fill"],To=m(()=>e("path",{d:"m24,24H0v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v1ZM3.718,5.202L1.4,2.982.018,4.426l2.317,2.22,1.383-1.443Zm3.862-2.493L6.367-.008l-1.826.814,1.213,2.717,1.826-.814Zm16.402,1.717l-1.383-1.443-2.317,2.22,1.383,1.443,2.317-2.22Zm-4.523-3.619L17.633-.008l-1.213,2.717,1.826.814,1.213-2.717Zm1.541,12.193c0-4.963-4.037-9-9-9S3,8.037,3,13v5h18v-5Zm-9-2c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4v2Z"},null,-1)),Bo=[To],Io={style:{"text-align":"left"}},Po={key:0,class:"flex"},Fo=["src","alt"],Mo={key:1,class:"flex"},No=["src","alt"],Lo={class:"flex"},Vo=["src"],Zo=["onClick"],Eo=m(()=>e("svg",{class:"actions_order",xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512"},[e("circle",{cx:"12",cy:"2",r:"2"}),e("circle",{cx:"12",cy:"12",r:"2"}),e("circle",{cx:"12",cy:"22",r:"2"})],-1)),Ho=[Eo],zo=oe({__name:"OperationalSchedule",setup(g){const R=ce(),M=u([]),C=u([]),b=u(""),t=u("all"),f=u("all"),i=u("all"),A=new Date,w=A.getFullYear(),j=String(A.getMonth()+1).padStart(2,"0"),N=String(A.getDate()).padStart(2,"0"),$=`${w}-${j}-${N}`,k=u(!1),D=u($);(()=>{R.setInfoPage({title:"Agenda Operacional Aniel",subtitle:"Acompanhe o status de agendamento em tempo real"})})();const O=u("operational"),y=()=>{E({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/dashboard-operational",method:"get",params:{period:D.value},headers:{Authorization:"Bearer "+H.get("token")}}).then(d=>{M.value=d.data.dashboard,C.value=d.data.permissions}).catch(d=>{console.log(d)})},T=re(()=>{const d=b.value.toString().toLowerCase();return M.value.filter(a=>{const x=a.protocolo.toLowerCase().includes(d);let o=!0;t.value==="closed_productive"?o=a.status==="Fechada Produtiva":t.value==="pending_att"?o=a.status==="Aberta Aguardando Atendimento":t.value==="closed_improductive"?o=a.status==="Fechada Improdutiva":t.value==="pending_technical"?o=a.status==="Aberta Aguardando Responsável":t.value==="displacement"?o=a.status==="OS em Deslocamento":t.value==="pending_schedule"&&(o=a.status==="Aberta Aguardando Agendamento");let S=!0;f.value==="activations"?S=a.servico==="Ativação":f.value==="vt"?S=a.servico==="Visita Técnica":f.value==="me"&&(S=a.servico==="Mudança De Endereço");let B=!0;const Q=new Date(a.data_agendamento).getHours();return i.value==="morning"?B=Q<12:i.value==="afternoon"&&(B=Q>=12),x&&o&&S&&B})});y(),setInterval(()=>{y()},1e4);const U=function(d){const x=btoa(JSON.stringify({personId:d,pbxInfo:{},availableAttendance:!0}));window.open("https://erp.agetelecom.com.br/people_informations?hash="+x,"_blank")},s=()=>{b.value="",f.value="all",t.value="all",i.value="all",y()},n=u({}),r=d=>{k.value=!0,n.value=d},v=d=>{switch(d){case"Confirmado":return{src:F,alt:"confirmado",text:"Confirmado"};case"Pendente":return{src:le,alt:"pendente",text:"Pendente"};case"Atendente":return{src:F,alt:"Confirmado",text:"Confirmado"};default:return{src:W,alt:"não enviado",text:"Não enviado"}}};return(d,a)=>{const x=ue("router-link");return p(),h(te,null,[e("div",qt,[Y(x,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:a[0]||(a[0]=o=>O.value="capacity")},{default:K(()=>[z("Capacidade")]),_:1}),Y(x,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/operacional",onClick:a[1]||(a[1]=o=>O.value="operational")},{default:K(()=>[z("Operacional")]),_:1})]),e("div",Wt,[e("div",Xt,[e("div",Gt,[e("div",Jt,[(p(),h("svg",Qt,Kt)),I(e("input",{type:"number",placeholder:"Pesquisar (Protocolo)","onUpdate:modelValue":a[2]||(a[2]=o=>b.value=o)},null,512),[[ee,b.value]])]),e("div",eo,[I(e("input",{type:"date",name:"period","onUpdate:modelValue":a[3]||(a[3]=o=>D.value=o),onChange:y},null,544),[[ee,D.value]])]),e("div",to,[I(e("select",{name:"status",id:"status","onUpdate:modelValue":a[4]||(a[4]=o=>f.value=o)},lo,512),[[q,f.value]])]),e("div",co,[I(e("select",{name:"period",id:"period","onUpdate:modelValue":a[5]||(a[5]=o=>i.value=o)},po,512),[[q,i.value]])]),e("div",_o,[I(e("select",{name:"status",id:"status","onUpdate:modelValue":a[6]||(a[6]=o=>t.value=o)},ho,512),[[q,t.value]])]),e("div",mo,[e("button",{onClick:a[7]||(a[7]=o=>s())},fo)])])]),e("div",bo,[e("table",null,[xo,e("tbody",null,[(p(!0),h(te,null,ie(T.value,(o,S)=>(p(),h("tr",{key:S},[e("td",$o,[e("b",{onClick:B=>U(o.cliente_id),style:{"user-select":"none",cursor:"pointer"}},"# ",8,yo),z(c(o.protocolo),1)]),e("td",So,[e("div",Co,[e("img",{src:l(G),alt:"servico"},null,8,Ao),e("span",null,c(o.sub_servico),1)])]),e("td",null,[e("div",wo,[e("img",{src:l(X),alt:"agenda"},null,8,ko),e("span",null,c(o.data_agendamento),1)])]),e("td",null,[e("div",Do,[(p(),h("svg",{fill:o.cor_indicativa??"#cccccc",xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Bo,8,Oo)),e("span",null,c(o.status),1)])]),e("td",Io,[o.status!="OS em Deslocamento"?(p(),h("div",Po,[e("img",{src:v(o.confirmacao_cliente).src,alt:v(o.confirmacao_deslocamento).alt},null,8,Fo),e("span",null,c(v(o.confirmacao_cliente).text),1)])):(p(),h("div",Mo,[e("img",{src:v(o.confirmacao_deslocamento).src,alt:v(o.confirmacao_deslocamento).alt},null,8,No),e("span",null,c(v(o.confirmacao_deslocamento).text),1)]))]),e("td",null,[e("div",Lo,[e("img",{src:l(_e),alt:"local"},null,8,Vo),e("span",null,c(o.localidade),1)])]),e("td",null,[e("div",{style:{cursor:"pointer"},onClick:B=>r(o)},Ho,8,Zo)])]))),128))])])])]),k.value==!0?(p(),de(Ut,{key:0,osInfo:n.value,permissions:C.value,onCloseModal:a[8]||(a[8]=o=>k.value=!1)},null,8,["osInfo","permissions"])):Z("",!0)],64)}}}),jo=ne(zo,[["__scopeId","data-v-fee74940"]]);export{jo as default};
