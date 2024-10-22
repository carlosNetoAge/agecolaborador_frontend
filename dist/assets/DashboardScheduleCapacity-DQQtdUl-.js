import{d as V,r as u,a as Q,c as n,b as e,F as D,f as M,j as L,t as o,A as P,k as R,o as d,q as W,p as Z,l as j,_ as F,E as S,x as z,B as N,i as X,z as E,g as G,h as q,u as I,e as U,G as H,v as ee,n as te,y as se}from"./index-B1Nb2StW.js";const oe="/assets/order_warning-CQvWwiF1.png",le="/assets/order_approval-bze_dPfJ.png",ae="/assets/order_surplus-BGa76hjP.png",de="/assets/order_all-C1TV9-7P.png",ne="/assets/order_rescheduled-BmTKGCY8.png",Y=t=>(Z("data-v-fca4bad3"),t=t(),j(),t),ce={class:"reschedule_modal"},re={class:"card"},ie={class:"close__btn"},ue=Y(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),ve=[ue],_e=Y(()=>e("h1",null,"Reagendar Ordem de Serviço",-1)),he={key:0,class:"days"},pe={class:"day"},ge={class:"infoDay"},me={class:"period"},Se=["onClick","disabled"],fe={class:"reschedule-button"},be=V({__name:"RescheduleOrder",props:["osSelected"],emits:["closeModal","closeAll"],setup(t,{emit:k}){const{osSelected:f}=t;u(!1);const x=u(""),r=u([]),v=u(!0),b=k,p=()=>{b("closeModal")},$=()=>{b("closeAll")},O=()=>{v.value=!0,P({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/reschedule",method:"get",params:{typeService:f.servico},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(i=>{r.value=i.data,v.value=!1}).catch(i=>{console.log(i)})},a=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],g=i=>{const _=new Date(i),y=_.getUTCDate(),A=a[_.getUTCMonth()],c=_.getUTCFullYear();return`${y} de ${A} de ${c}`},m=u({date:"",period:"",order:""}),T=(i,_)=>{m.value={date:i,period:_,order:f.protocolo},x.value=`${i} ${_}`},B=()=>{P({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/reschedule-order",method:"post",data:{order:m.value.order,period:m.value.period,date:m.value.date},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(i=>{$()}).catch(i=>{console.log(i)})};return Q(()=>{O()}),(i,_)=>(d(),n("div",ce,[e("div",re,[e("div",ie,[(d(),n("svg",{onClick:_[0]||(_[0]=y=>p()),xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},ve))]),_e,v.value?L("",!0):(d(),n("div",he,[(d(!0),n(D,null,M(r.value,(y,A)=>(d(),n("div",pe,[e("div",ge,[e("p",null,o(y.dayName)+", "+o(g(A)),1)]),e("div",me,[(d(!0),n(D,null,M(y.period||[],(c,s)=>(d(),n("button",{onClick:w=>T(A,s),class:W({selected:x.value==A+" "+s,disable:c.status!="aberta"}),disabled:c.status!="aberta"},o(s),11,Se))),256))])]))),256))])),e("div",fe,[x.value!=""?(d(),n("button",{key:0,onClick:_[1]||(_[1]=y=>B())}," Reagendar ordem de serviço # "+o(t.osSelected.protocolo),1)):L("",!0)])])]))}}),$e=F(be,[["__scopeId","data-v-fca4bad3"]]),J=t=>(Z("data-v-5a729f5e"),t=t(),j(),t),ye={class:"modal__log"},we={class:"card"},Ce={class:"close__btn"},xe=J(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),ke=[xe],Ae=J(()=>e("h1",null,"Histórico da Ordem de Serviço",-1)),Oe={class:"logs"},Be=V({__name:"LogOrder",props:["osStatus"],emits:["closeModal"],setup(t,{emit:k}){const f=k,x=()=>{f("closeModal")},r=v=>new Date(v).toLocaleString();return(v,b)=>(d(),n("div",ye,[e("div",we,[e("div",Ce,[(d(),n("svg",{onClick:b[0]||(b[0]=p=>x()),xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},ke))]),Ae,e("div",Oe,[(d(!0),n(D,null,M(t.osStatus,(p,$)=>(d(),n("div",{class:"log",key:$},[e("span",null,[S(o(p.descricao)+" - ",1),e("b",null,o(p.created_at?r(p.created_at):"00/00/2024, 00:00:00"),1)]),e("span",{style:z({backgroundColor:p.cor_indicativa})},o(p.titulo),5)]))),128))])])]))}}),Ie=F(Be,[["__scopeId","data-v-5a729f5e"]]),C=t=>(Z("data-v-6846f572"),t=t(),j(),t),Le={key:0,class:"modal"},Te={class:"card"},De={class:"close__btn"},Me=C(()=>e("path",{d:"m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"},null,-1)),Pe=[Me],Re=C(()=>e("h1",null,"Gerenciamento da Ordem de Serviço",-1)),ze={class:"info"},Ve=C(()=>e("b",null,"Protocolo:",-1)),Ze=C(()=>e("b",null,"Servico:",-1)),je=C(()=>e("b",null,"Tipo de serviço:",-1)),Fe=C(()=>e("b",null,"Agendamento:",-1)),Ee=C(()=>e("b",null,"Periodo:",-1)),Ge=C(()=>e("b",null,"Status:",-1)),Ue=C(()=>e("b",null,"Localidade:",-1)),Ne={class:"options"},qe=["disabled"],He=["disabled"],Ye=V({__name:"ActionsOrder",props:["osSelected","modalStatus"],emits:["closeModal"],setup(t,{emit:k}){const{osSelected:f,modalStatus:x}=t,r=u(!1),v=u(!1),b=O=>{P({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/approval-order",method:"POST",data:{order:O},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(a=>{$(),f.value=[]}).catch(a=>{console.log(a)})},p=k,$=()=>{p("closeModal")};return(O,a)=>t.modalStatus?(d(),n("div",Le,[e("div",Te,[e("div",De,[(d(),n("svg",{onClick:$,xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},Pe))]),Re,e("div",ze,[e("p",null,[Ve,S(" #"+o(t.osSelected.protocolo),1)]),e("p",null,[Ze,S(" "+o(t.osSelected.servico),1)]),e("p",null,[je,S(" "+o(t.osSelected.subservico),1)]),e("p",null,[Fe,S(" "+o(t.osSelected.hora_agendamento),1)]),e("p",null,[Ee,S(" "+o(t.osSelected.periodo),1)]),e("p",null,[Ge,S(" "+o(t.osSelected.status_order[0].titulo),1)]),e("p",null,[Ue,S(" "+o(t.osSelected.localidade),1)])]),e("div",Ne,[e("button",{onClick:a[0]||(a[0]=g=>b(t.osSelected.protocolo)),disabled:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16,style:z({backgroundColor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#ccc":"#11B15B",color:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#111":"#fff",cursor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"not-allowed":"pointer"})}," Aprovar entrada ",12,qe),e("button",{onClick:a[1]||(a[1]=g=>r.value=!0),disabled:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16,style:z({backgroundColor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#ccc":"#53AEE2",color:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"#111":"#fff",cursor:t.osSelected.status_order[0].id==15||t.osSelected.status_order[0].id==16?"not-allowed":"pointer"})}," Reagendar OS ",12,He),e("button",{onClick:a[2]||(a[2]=g=>v.value=!0),style:{"background-color":"#5183FF",color:"#fff"}},"Histórico da OS")])]),r.value?(d(),N($e,{key:0,onCloseAll:a[3]||(a[3]=g=>[$(),r.value=!1]),onCloseModal:a[4]||(a[4]=g=>r.value=!1),osSelected:t.osSelected},null,8,["osSelected"])):L("",!0),v.value?(d(),N(Ie,{key:1,onCloseModal:a[5]||(a[5]=g=>v.value=!1),osStatus:t.osSelected.status_order},null,8,["osStatus"])):L("",!0)])):L("",!0)}}),Je=F(Ye,[["__scopeId","data-v-6846f572"]]),h=t=>(Z("data-v-08ff836b"),t=t(),j(),t),Ke={class:"dashboard__page"},Qe={class:"options"},We={class:"navbar"},Xe={class:"cards"},et={class:"card"},tt=h(()=>e("div",{class:"info"},[e("div",{class:"title"},[e("p",null,"Ordens do dia")]),e("div",{class:"value"},[e("span",null," - "),e("span")])],-1)),st={class:"icon"},ot=["src"],lt={class:"card"},at={class:"info"},dt=h(()=>e("div",{class:"title"},[e("p",null,"Ordens excedentes")],-1)),nt={class:"value"},ct=h(()=>e("span",null,null,-1)),rt={class:"icon"},it=["src"],ut={class:"card"},vt={class:"info"},_t=h(()=>e("div",{class:"title"},[e("p",null,"Ordens aprovadas")],-1)),ht={class:"value"},pt=h(()=>e("span",null,null,-1)),gt={class:"icon"},mt=["src"],St={class:"card"},ft={class:"info"},bt=h(()=>e("div",{class:"title"},[e("p",null,"Ordens reagendadas")],-1)),$t={class:"value"},yt=h(()=>e("span",null,null,-1)),wt={class:"icon"},Ct=["src"],xt={class:"card"},kt={class:"info"},At=h(()=>e("div",{class:"title"},[e("p",null,"Ordens pendentes")],-1)),Ot={class:"value"},Bt=h(()=>e("span",null,null,-1)),It={class:"icon"},Lt=["src"],Tt={class:"actions"},Dt={class:"search"},Mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 513.749 513.749",style:{"enable-background":"new 0 0 513.749 513.749"},"xml:space":"preserve",width:"512",height:"512"},Pt=h(()=>e("g",null,[e("path",{d:"M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"})],-1)),Rt=[Pt],zt={class:"period"},Vt={class:"status"},Zt=se('<option value="all" data-v-08ff836b>Todos</option><option value="surplus" data-v-08ff836b>Excedentes</option><option value="approved" data-v-08ff836b>Aprovado</option><option value="rescheduled" data-v-08ff836b>Reagendas</option><option value="pending" data-v-08ff836b>Pendentes</option>',5),jt=[Zt],Ft=h(()=>e("div",{class:"clear"},[e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24"},[e("path",{d:"m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"})])])],-1)),Et={class:"table_orders"},Gt=h(()=>e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Protocolo"),e("th",null,"Tipo"),e("th",{style:{"text-align":"left"}},"Serviço"),e("th",null,"Agendamento"),e("th",null,"Período"),e("th",{style:{"text-align":"left"}},"Status"),e("th",null,"Localidade"),e("th",null,"Aberta por"),e("th",null,"Setor"),e("th",null,"Solicitante"),e("th",null,"Aprovado por"),e("th",null,"Ações")])],-1)),Ut={style:{"text-align":"left"}},Nt={style:{"text-align":"left"}},qt={class:"status"},Ht=h(()=>e("td",null,null,-1)),Yt=["onClick"],Jt=h(()=>e("svg",{class:"actions_order",xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"512",height:"512"},[e("circle",{cx:"12",cy:"2",r:"2"}),e("circle",{cx:"12",cy:"12",r:"2"}),e("circle",{cx:"12",cy:"22",r:"2"})],-1)),Kt=[Jt],Qt=V({__name:"DashboardScheduleCapacity",setup(t){const k=X(),f=u({}),x=()=>{k.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Aprove o excedente de ordens de serviço que não entraram no sistema por limitação do capacity."})};u("all");const r=u([]),v=new Date,b=v.getFullYear(),p=String(v.getMonth()+1).padStart(2,"0"),$=String(v.getDate()).padStart(2,"0"),O=`${b}-${p}-${$}`,a=u(O),g=u(""),m=u("all"),T=u([]),B=u(!1),i=()=>{P({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/dashboard",method:"GET",params:{period:a.value},headers:{"Content-Type":"application/json",Authorization:"Bearer "+R.get("token")}}).then(c=>{r.value=c.data}).catch(c=>{console.log(c)})},_=E(()=>{const c=new Set;return r.value.forEach(s=>{s.status_order.some(w=>w.id===15)&&c.add(s.id)}),c.size}),y=E(()=>{const c=new Set;return r.value.forEach(s=>{s.status_order.some(w=>w.id===16)&&c.add(s.id)}),c.size}),A=E(()=>{const c=g.value.toString().toLowerCase();return r.value.filter(s=>{const w=s.protocolo.toLowerCase().includes(c);let l=!0;return m.value==="approved"?l=s.status_order[0].id===15:m.value==="rescheduled"?l=s.status_order[0].id===16:m.value==="pending"&&(l=s.status_order[0].id!==15&&s.status_order[0].id!==16),w&&l})});return i(),x(),(c,s)=>{const w=te("router-link");return d(),n("div",Ke,[e("div",Qe,[e("div",We,[G(w,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/dashboard",onClick:s[0]||(s[0]=l=>f.value="dashboard")},{default:q(()=>[S("Dashboard")]),_:1}),G(w,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/gerenciamento",onClick:s[1]||(s[1]=l=>f.value="management")},{default:q(()=>[S("Gerenciamento")]),_:1})])]),e("div",Xe,[e("div",et,[tt,e("div",st,[e("img",{src:I(de),alt:""},null,8,ot)])]),e("div",lt,[e("div",at,[dt,e("div",nt,[e("span",null,o(r.value.length),1),ct])]),e("div",rt,[e("img",{src:I(ae),alt:""},null,8,it)])]),e("div",ut,[e("div",vt,[_t,e("div",ht,[e("span",null,o(_.value),1),pt])]),e("div",gt,[e("img",{src:I(le),alt:""},null,8,mt)])]),e("div",St,[e("div",ft,[bt,e("div",$t,[e("span",null,o(y.value),1),yt])]),e("div",wt,[e("img",{src:I(ne),alt:""},null,8,Ct)])]),e("div",xt,[e("div",kt,[At,e("div",Ot,[e("span",null,o(r.value.length-_.value-y.value),1),Bt])]),e("div",It,[e("img",{src:I(oe),alt:""},null,8,Lt)])])]),e("div",Tt,[e("div",Dt,[(d(),n("svg",Mt,Rt)),U(e("input",{type:"number",placeholder:"Pesquisar (Protocolo)","onUpdate:modelValue":s[2]||(s[2]=l=>g.value=l)},null,512),[[H,g.value]])]),e("div",zt,[U(e("input",{type:"date",name:"period","onUpdate:modelValue":s[3]||(s[3]=l=>a.value=l),onChange:i},null,544),[[H,a.value]])]),e("div",Vt,[U(e("select",{name:"status",id:"status","onUpdate:modelValue":s[4]||(s[4]=l=>m.value=l)},jt,512),[[ee,m.value]])]),Ft]),e("div",Et,[e("table",null,[Gt,e("tbody",null,[(d(!0),n(D,null,M(A.value,(l,K)=>(d(),n("tr",{key:K},[e("td",Ut,"# "+o(l.protocolo),1),e("td",null,o(l.servico),1),e("td",Nt,o(l.subservico),1),e("td",null,o(l.hora_agendamento),1),e("td",null,o(l.periodo),1),e("td",null,[e("div",qt,[e("div",{class:"badge",style:z({backgroundColor:l.status_order[0].cor_indicativa})},null,4),e("span",null,o(l.status_order[0].titulo),1)])]),e("td",null,o(l.localidade),1),e("td",null,o(l.aberta_por),1),e("td",null,o(l.setor),1),Ht,e("td",null,o(l.aprovador),1),e("td",null,[e("div",{style:{cursor:"pointer"},onClick:Wt=>[T.value=l,B.value=!0]},Kt,8,Yt)])]))),128))])])]),G(Je,{modalStatus:B.value,onCloseModal:s[5]||(s[5]=l=>[B.value=!1,i()]),osSelected:T.value},null,8,["modalStatus","osSelected"])])}}}),es=F(Qt,[["__scopeId","data-v-08ff836b"]]);export{es as default};