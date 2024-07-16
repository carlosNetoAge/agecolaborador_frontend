import{d as B,a as c,p as V,R as X,l,q as e,F as y,x as k,A as F,C as M,D as w,o as d,L as z,E as i,N as U,_ as R,k as q,y as I,z as G,J as N,K as H,S as L,G as J,H as K}from"./index-H4olzobg.js";const j="/assets/morning-CSKRONwJ.png",Y="/assets/afternoon-CHR2RdtE.png",Q={class:"calendar"},W={class:"months"},Z=["onClick"],ee=["onClick"],ae={class:"dayName"},te={class:"dayNumber"},se={key:0,class:"dots-container"},oe=U('<div class="dot" data-v-e79afc52></div><div class="dot" data-v-e79afc52></div><div class="dot" data-v-e79afc52></div><div class="dot" data-v-e79afc52></div><div class="dot" data-v-e79afc52></div>',5),ne=[oe],ce=B({__name:"CalendarOperational",props:{statusCalendar:Boolean},emits:["updateData"],setup(_,{emit:x}){const E=_,v=c({}),p=x,C=new Date,f=c(S(C)),m=c(C.getDate()),h=t=>{if(!t){t=new Date;const u=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),$=`${u}-${s}-${n}`;return p("updateData",$)}return p("updateData",t)},r=async()=>{M({method:"get",url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/calendar",headers:{"Content-Type":"application/json",Authorization:"Bearer "+w.get("token")}}).then(t=>{v.value=t.data,h(),T()})};function S(t){const u={month:"long"},s=t.toLocaleString("pt-BR",u);return s.charAt(0).toUpperCase()+s.slice(1)}const a=c(!1),g=c(0),b=c(0),o=c(null),P=t=>{var u,s;a.value=!0,g.value=t.pageX-(((u=o.value)==null?void 0:u.offsetLeft)||0),b.value=((s=o.value)==null?void 0:s.scrollLeft)||0},A=t=>{var n;if(!a.value)return;t.preventDefault();const s=(t.pageX-(((n=o.value)==null?void 0:n.offsetLeft)||0)-g.value)*2;o.value&&(o.value.scrollLeft=b.value-s)},D=()=>{a.value=!1},T=()=>{o.value&&(o.value.addEventListener("mousemove",A),o.value.addEventListener("mouseup",D),o.value.addEventListener("mouseleave",D))};return V(()=>{r()}),X(()=>{o.value&&(o.value.removeEventListener("mousemove",A),o.value.removeEventListener("mouseup",D),o.value.removeEventListener("mouseleave",D))}),(t,u)=>(d(),l("div",Q,[e("div",W,[(d(!0),l(y,null,k(v.value,(s,n)=>(d(),l("div",{key:n,class:z({month:!0,select:n===f.value}),onClick:$=>[f.value=n,m.value=0]},i(n),11,Z))),128))]),e("div",{ref_key:"container",ref:o,class:"days",onMousedown:P},[(d(!0),l(y,null,k(v.value[f.value],(s,n)=>(d(),l("div",{class:"day",key:n},[e("div",{class:z(["box",{selectedDay:m.value===s.day}]),onClick:$=>[m.value=s.day,h(s.extense)]},[e("span",ae,i(s.name),1),e("span",te,i(s.day),1)],10,ee)]))),128))],544),E.statusCalendar?F("",!0):(d(),l("section",se,ne))]))}}),le=R(ce,[["__scopeId","data-v-e79afc52"]]),O=_=>(J("data-v-e1cfdb33"),_=_(),K(),_),de={class:"options"},ie={class:"container_content"},re={class:"capacity"},ue={class:"period"},ve={class:"header"},_e=O(()=>e("div",{class:"title"}," Capacidade período Manhã ",-1)),pe=["src"],he={class:"services"},ge={class:"title"},fe={class:"progress"},me=["value","max"],ye={class:"info"},Ce={class:"period"},De={class:"header"},ke=O(()=>e("div",{class:"title"}," Capacidade período Tarde ",-1)),xe=["src"],Se={class:"services"},$e={class:"title"},Le={class:"progress"},Ee=["value","max"],be={class:"info"},Ae=B({__name:"ScheduleCapacity",setup(_){const x=q();(()=>{x.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Acompanhe a capacidade de agendamento em tempo real"})})();const v=c(!1),p=c({}),C=c(),f=h=>{v.value=!1,C.value=h,M({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity",params:{period:h},method:"GET",headers:{Authorization:"Bearer "+w.get("token")}}).then(r=>{v.value=!0,p.value=r.data}).catch(r=>{console.log(r)})},m=c("operational");return(h,r)=>{const S=H("router-link");return d(),l(y,null,[e("div",de,[I(S,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:r[0]||(r[0]=a=>m.value="operational")},{default:G(()=>[L("Operacional")]),_:1})]),I(le,{onUpdateData:f,statusCalendar:v.value},null,8,["statusCalendar"]),e("div",ie,[e("div",re,[e("div",ue,[e("div",ve,[_e,e("img",{src:N(j),alt:""},null,8,pe)]),e("div",he,[(d(!0),l(y,null,k(p.value.manha||[],(a,g)=>(d(),l("div",{class:"service",key:g},[e("div",ge,[e("h3",null,i(a.servico),1)]),e("div",fe,[e("progress",{value:a.utilizado,max:a.capacidade},null,8,me),e("div",ye,[e("span",null,[e("b",null,i(Math.abs(a.capacidade-a.utilizado)),1),L(" - "+i(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)])])])]))),128))])]),e("div",Ce,[e("div",De,[ke,e("img",{src:N(Y),alt:""},null,8,xe)]),e("div",Se,[(d(!0),l(y,null,k(p.value.tarde||[],(a,g)=>(d(),l("div",{class:"service",key:g},[e("div",$e,[e("h3",null,i(a.servico),1)]),e("div",Le,[e("progress",{value:a.utilizado,max:a.capacidade},null,8,Ee),e("div",be,[e("span",null,[e("b",null,i(Math.abs(a.capacidade-a.utilizado)),1),L(" - "+i(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)])])])]))),128))])])])])],64)}}}),Ie=R(Ae,[["__scopeId","data-v-e1cfdb33"]]);export{Ie as default};
