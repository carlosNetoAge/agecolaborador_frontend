import{d as V,a as u,p as W,l as n,q as e,F as T,x as P,A as D,E as o,C as I,D as R,o as d,L as Q,G as Z,H as F,_ as j,S,M as z,P as N,k as X,O as E,y as U,z as H,J as B,u as G,W as q,v as ee,K as te,N as se}from"./index-DvqIzfx7.js";const oe="/assets/order_warning-CQvWwiF1.png",le="/assets/order_approval-bze_dPfJ.png",ae="/assets/order_surplus-BGa76hjP.png",de="/assets/order_all-C1TV9-7P.png",ne="/assets/order_rescheduled-BmTKGCY8.png",Y=t=>(Z("data-v-fca4bad3"),t=t(),F(),t),ce={class:"reschedule_modal"},re={class:"card"},ie={class:"close__btn"},ue=Y(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),ve=[ue],_e=Y(()=>e("h1",null,"Reagendar Ordem de Serviço",-1)),he={key:0,class:"days"},pe={class:"day"},ge={class:"infoDay"},me={class:"period"},Se=["onClick","disabled"],be={class:"reschedule-button"},fe=V({__name:"RescheduleOrder",props:["osSelected"],emits:["closeModal","closeAll"],setup(t,{emit:k}){const{osSelected:b}=t;u(!1);const x=u(""),c=u([]),v=u(!0),f=k,p=()=>{f("closeModal")},$=()=>{f("closeAll")},A=()=>{v.value=!0,I({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/reschedule",method:"get",params:{typeService:b.servico},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(r=>{c.value=r.data,v.value=!1}).catch(r=>{console.log(r)})},a=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],g=r=>{const _=new Date(r),y=_.getUTCDate(),O=a[_.getUTCMonth()],i=_.getUTCFullYear();return`${y} de ${O} de ${i}`},m=u({date:"",period:"",order:""}),M=(r,_)=>{m.value={date:r,period:_,order:b.protocolo},x.value=`${r} ${_}`},L=()=>{I({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/reschedule-order",method:"post",data:{order:m.value.order,period:m.value.period,date:m.value.date},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(r=>{$()}).catch(r=>{console.log(r)})};return W(()=>{A()}),(r,_)=>(d(),n("div",ce,[e("div",re,[e("div",ie,[(d(),n("svg",{onClick:_[0]||(_[0]=y=>p()),xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},ve))]),_e,v.value?D("",!0):(d(),n("div",he,[(d(!0),n(T,null,P(c.value,(y,O)=>(d(),n("div",pe,[e("div",ge,[e("p",null,o(y.dayName)+", "+o(g(O)),1)]),e("div",me,[(d(!0),n(T,null,P(y.period||[],(i,l)=>(d(),n("button",{onClick:w=>M(O,l),class:Q({selected:x.value==O+" "+l,disable:i.status!="aberta"}),disabled:i.status!="aberta"},o(l),11,Se))),256))])]))),256))])),e("div",be,[x.value!=""?(d(),n("button",{key:0,onClick:_[1]||(_[1]=y=>L())}," Reagendar ordem de serviço # "+o(t.osSelected.protocolo),1)):D("",!0)])])]))}}),$e=j(fe,[["__scopeId","data-v-fca4bad3"]]),J=t=>(Z("data-v-5a729f5e"),t=t(),F(),t),ye={class:"modal__log"},we={class:"card"},Ce={class:"close__btn"},xe=J(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),ke=[xe],Oe=J(()=>e("h1",null,"Histórico da Ordem de Serviço",-1)),Ae={class:"logs"},Le=V({__name:"LogOrder",props:["osStatus"],emits:["closeModal"],setup(t,{emit:k}){const b=k,x=()=>{b("closeModal")},c=v=>new Date(v).toLocaleString();return(v,f)=>(d(),n("div",ye,[e("div",we,[e("div",Ce,[(d(),n("svg",{onClick:f[0]||(f[0]=p=>x()),xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},ke))]),Oe,e("div",Ae,[(d(!0),n(T,null,P(t.osStatus,(p,$)=>(d(),n("div",{class:"log",key:$},[e("span",null,[S(o(p.descricao)+" - ",1),e("b",null,o(p.created_at?c(p.created_at):"00/00/2024, 00:00:00"),1)]),e("span",{style:z({backgroundColor:p.cor_indicativa})},o(p.titulo),5)]))),128))])])]))}}),Be=j(Le,[["__scopeId","data-v-5a729f5e"]]),C=t=>(Z("data-v-6846f572"),t=t(),F(),t),De={key:0,class:"modal"},Me={class:"card"},Te={class:"close__btn"},Pe=C(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),Ie=[Pe],Re=C(()=>e("h1",null,"Gerenciamento da Ordem de Serviço",-1)),ze={class:"info"},Ve=C(()=>e("b",null,"Protocolo:",-1)),Ze=C(()=>e("b",null,"Servico:",-1)),Fe=C(()=>e("b",null,"Tipo de serviço:",-1)),je=C(()=>e("b",null,"Agendamento:",-1)),Ee=C(()=>e("b",null,"Periodo:",-1)),Ue=C(()=>e("b",null,"Status:",-1)),Ge=C(()=>e("b",null,"Localidade:",-1)),Ne={class:"options"},He=["disabled"],qe=["disabled"],Ye=V({__name:"ActionsOrder",props:["osSelected","modalStatus"],emits:["closeModal"],setup(t,{emit:k}){const{osSelected:b,modalStatus:x}=t,c=u(!1),v=u(!1),f=A=>{I({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/approval-order",method:"POST",data:{order:A},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(a=>{$(),b.value=[]}).catch(a=>{console.log(a)})},p=k,$=()=>{p("closeModal")};return(A,a)=>t.modalStatus?(d(),n("div",De,[e("div",Me,[e("div",Te,[(d(),n("svg",{onClick:$,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Ie))]),Re,e("div",ze,[e("p",null,[Ve,S(" #"+o(t.osSelected.protocolo),1)]),e("p",null,[Ze,S(" "+o(t.osSelected.servico),1)]),e("p",null,[Fe,S(" "+o(t.osSelected.subservico),1)]),e("p",null,[je,S(" "+o(t.osSelected.hora_agendamento),1)]),e("p",null,[Ee,S(" "+o(t.osSelected.periodo),1)]),e("p",null,[Ue,S(" "+o(t.osSelected.status_order[0].titulo),1)]),e("p",null,[Ge,S(" "+o(t.osSelected.localidade),1)])]),e("div",Ne,[e("button",{onClick:a[0]||(a[0]=g=>f(t.osSelected.protocolo)),disabled:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16,style:z({backgroundColor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#ccc":"#11B15B",color:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#111":"#fff",cursor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"not-allowed":"pointer"})}," Aprovar entrada ",12,He),e("button",{onClick:a[1]||(a[1]=g=>c.value=!0),disabled:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16,style:z({backgroundColor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#ccc":"#53AEE2",color:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#111":"#fff",cursor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"not-allowed":"pointer"})}," Reagendar OS ",12,qe),e("button",{onClick:a[2]||(a[2]=g=>v.value=!0),style:{"background-color":"#5183FF",color:"#fff"}},"Histórico da OS")])]),c.value?(d(),N($e,{key:0,onCloseAll:a[3]||(a[3]=g=>[$(),c.value=!1]),onCloseModal:a[4]||(a[4]=g=>c.value=!1),osSelected:t.osSelected},null,8,["osSelected"])):D("",!0),v.value?(d(),N(Be,{key:1,onCloseModal:a[5]||(a[5]=g=>v.value=!1),osStatus:t.osSelected.status_order},null,8,["osStatus"])):D("",!0)])):D("",!0)}}),Je=j(Ye,[["__scopeId","data-v-6846f572"]]),h=t=>(Z("data-v-f339d5b6"),t=t(),F(),t),Ke={class:"dashboard__page"},We={class:"options"},Qe={class:"navbar"},Xe={class:"cards"},et={class:"card"},tt=h(()=>e("div",{class:"info"},[e("div",{class:"title"},[e("p",null,"Ordens do dia")]),e("div",{class:"value"},[e("span",null," - "),e("span")])],-1)),st={class:"icon"},ot=["src"],lt={class:"card"},at={class:"info"},dt=h(()=>e("div",{class:"title"},[e("p",null,"Ordens excedentes")],-1)),nt={class:"value"},ct=h(()=>e("span",null,null,-1)),rt={class:"icon"},it=["src"],ut={class:"card"},vt={class:"info"},_t=h(()=>e("div",{class:"title"},[e("p",null,"Ordens aprovadas")],-1)),ht={class:"value"},pt=h(()=>e("span",null,null,-1)),gt={class:"icon"},mt=["src"],St={class:"card"},bt={class:"info"},ft=h(()=>e("div",{class:"title"},[e("p",null,"Ordens reagendadas")],-1)),$t={class:"value"},yt=h(()=>e("span",null,null,-1)),wt={class:"icon"},Ct=["src"],xt={class:"card"},kt={class:"info"},Ot=h(()=>e("div",{class:"title"},[e("p",null,"Ordens pendentes")],-1)),At={class:"value"},Lt=h(()=>e("span",null,null,-1)),Bt={class:"icon"},Dt=["src"],Mt={class:"actions"},Tt={class:"search"},Pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve",width:"512",height:"512"},It=h(()=>e("g",null,[e("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),Rt=[It],zt={class:"period"},Vt={class:"status"},Zt=se('<option value="all" data-v-f339d5b6>Todos</option><option value="surplus" data-v-f339d5b6>Excedentes</option><option value="approved" data-v-f339d5b6>Aprovado</option><option value="rescheduled" data-v-f339d5b6>Reagendas</option><option value="pending" data-v-f339d5b6>Pendentes</option>',5),Ft=[Zt],jt=h(()=>e("div",{class:"clear"},[e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[e("path",{d:"m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"})])])],-1)),Et={class:"table_orders"},Ut=h(()=>e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Protocolo"),e("th",null,"Tipo"),e("th",{style:{"text-align":"left"}},"Serviço"),e("th",null,"Agendamento"),e("th",null,"Período"),e("th",{style:{"text-align":"left"}},"Status"),e("th",null,"Localidade"),e("th",null,"Aberta por"),e("th",null,"Setor"),e("th",null,"Solicitante"),e("th",null,"Aprovado por"),e("th",null,"Ações")])],-1)),Gt={style:{"text-align":"left"}},Nt={style:{"text-align":"left"}},Ht={class:"status"},qt=h(()=>e("td",null,null,-1)),Yt=["onClick"],Jt=h(()=>e("svg",{class:"actions_order",xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512"},[e("circle",{cx:"12",cy:"2",r:"2"}),e("circle",{cx:"12",cy:"12",r:"2"}),e("circle",{cx:"12",cy:"22",r:"2"})],-1)),Kt=[Jt],Wt=V({__name:"DashboardScheduleCapacity",setup(t){const k=X(),b=u({}),x=()=>{k.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Aprove o excedente de ordens de serviço que não entraram no sistema por limitação do capacity."})};u("all");const c=u([]),v=new Date,f=v.getFullYear(),p=String(v.getMonth()+1).padStart(2,"0"),$=String(v.getDate()).padStart(2,"0"),A=`${f}-${p}-${$}`,a=u(A),g=u(""),m=u("all"),M=u([]),L=u(!1),r=()=>{I({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/dashboard",method:"GET",params:{period:a.value},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(i=>{c.value=i.data}).catch(i=>{console.log(i)})},_=E(()=>c.value.reduce((i,l)=>{const w=l.status_order.filter(s=>s.id===15).length;return i+w},0)),y=E(()=>c.value.reduce((i,l)=>{const w=l.status_order.filter(s=>s.id===16).length;return i+w},0)),O=E(()=>{const i=g.value.toString().toLowerCase();return c.value.filter(l=>{const w=l.protocolo.toLowerCase().includes(i);let s=!0;return m.value==="approved"?s=l.status_order[0].id===15:m.value==="rescheduled"?s=l.status_order[0].id===16:m.value==="pending"&&(s=l.status_order[0].id!==15&&l.status_order[0].id!==16),w&&s})});return r(),x(),(i,l)=>{const w=te("router-link");return d(),n("div",Ke,[e("div",We,[e("div",Qe,[U(w,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:l[0]||(l[0]=s=>b.value="operational")},{default:H(()=>[S("Operacional")]),_:1}),U(w,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/dashboard",onClick:l[1]||(l[1]=s=>b.value="dashboard")},{default:H(()=>[S("Dashboard")]),_:1})])]),e("div",Xe,[e("div",et,[tt,e("div",st,[e("img",{src:B(de),alt:""},null,8,ot)])]),e("div",lt,[e("div",at,[dt,e("div",nt,[e("span",null,o(c.value.length),1),ct])]),e("div",rt,[e("img",{src:B(ae),alt:""},null,8,it)])]),e("div",ut,[e("div",vt,[_t,e("div",ht,[e("span",null,o(_.value),1),pt])]),e("div",gt,[e("img",{src:B(le),alt:""},null,8,mt)])]),e("div",St,[e("div",bt,[ft,e("div",$t,[e("span",null,o(y.value),1),yt])]),e("div",wt,[e("img",{src:B(ne),alt:""},null,8,Ct)])]),e("div",xt,[e("div",kt,[Ot,e("div",At,[e("span",null,o(c.value.length-_.value-y.value),1),Lt])]),e("div",Bt,[e("img",{src:B(oe),alt:""},null,8,Dt)])])]),e("div",Mt,[e("div",Tt,[(d(),n("svg",Pt,Rt)),G(e("input",{type:"number",placeholder:"Pesquisar (Protocolo)","onUpdate:modelValue":l[2]||(l[2]=s=>g.value=s)},null,512),[[q,g.value]])]),e("div",zt,[G(e("input",{type:"date",name:"period","onUpdate:modelValue":l[3]||(l[3]=s=>a.value=s),onChange:r},null,544),[[q,a.value]])]),e("div",Vt,[G(e("select",{name:"status",id:"status","onUpdate:modelValue":l[4]||(l[4]=s=>m.value=s)},Ft,512),[[ee,m.value]])]),jt]),e("div",Et,[e("table",null,[Ut,e("tbody",null,[(d(!0),n(T,null,P(O.value,(s,K)=>(d(),n("tr",{key:K},[e("td",Gt,"# "+o(s.protocolo),1),e("td",null,o(s.servico),1),e("td",Nt,o(s.subservico),1),e("td",null,o(s.hora_agendamento),1),e("td",null,o(s.periodo),1),e("td",null,[e("div",Ht,[e("div",{class:"badge",style:z({backgroundColor:s.status_order[0].cor_indicativa})},null,4),e("span",null,o(s.status_order[0].titulo),1)])]),e("td",null,o(s.localidade),1),e("td",null,o(s.aberta_por),1),e("td",null,o(s.setor),1),qt,e("td",null,o(s.aprovador),1),e("td",null,[e("div",{style:{cursor:"pointer"},onClick:Qt=>[M.value=s,L.value=!0]},Kt,8,Yt)])]))),128))])])]),U(Je,{modalStatus:L.value,onCloseModal:l[5]||(l[5]=s=>[L.value=!1,r()]),osSelected:M.value},null,8,["modalStatus","osSelected"])])}}}),es=j(Wt,[["__scopeId","data-v-f339d5b6"]]);export{es as default};
