import{m as F,a as Q}from"./afternoon-D3aPXxoM.js";import{d as G,r as i,a as R,D as T,c as s,b as e,F as D,f as I,j as M,A as U,k as X,o,q as w,t,y as $,_ as J,i as O,g as x,h as V,u as S,n as W,E as v}from"./index-BFCxkFIm.js";const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0NJREFUWIXFl89rXFUUxz/nznuvaZvMJKUZGplpZ2rSWkf8VRSLuEgWIkQEpULddN9VERcVhC7aggkudCXkD0grKAWhKi5sRSjtRmqbGWpUOoFJ2pBpTCeZSTPzXuZ0MUmcpNV5b0yY7+rdd+85ny/cd889T/Cp2d5d4aVt3iDIgMILQALoXJl+AEwI/AZ62fGc77rH7y/4ySuNFkw+03FAjTklwjFgh0+/iwoXqOpw/Pb8n00ZyB2JbZeFhbMoJwHLJ3ijXIUvvFLhdHKCJd8GcofCfRKSiyjPNQneSLnuLbvvJW4v3mtoYOrZzpdU9Eege1Pg/2hSxQzG03O3/tVA7lC4T4xc3QL4mgkX75VkpjS9+sKsPmQTtImRr7cQDhCzsS7ljsS2P2bAbo+co3a8fMnau5+uoRG6hkaw9u4PYuIw88WPVwcCtaNGyGQI8LVHL17FPpACwP19jJmjbwQxUXTx+pKZ0rQBUGNOBYEjgrXv6bWhlegFaVhS6tVuY50GMLO9u8IrRca/VCmNjqwNi6MjoBooBXA8f3B3h0ylwh8ocj5oNIB9sFYm3PF0M+GIcMyADDQVbQyhnhihPTEwpvH6J0iVAUsDfPn16jr3JTveqe3c4rcXmPvkRPAkwvMymYrkgd2BAk2Ip369h9gOAOpWuHu4B6rLQS3MGCAcNEosaw0OILaDWE3dV5HmNm8TZYD5FvILBsi2DC/cMbU2qmW6aUAvtwxf5Sdjs+0SUGoBvuSI84OJZvJFha8ChW6s+6qB7wKB89FMvlg7hlUdBlzffLeyrv67f2RQtxKEX/EMQwAhgM/vl//+MNrWIfC63wzl6z9jIp2442kKZz+iOv/AN13gs3i68M3Kc03ZBG12e+QKymu+MzWnaw/Lhf6+vyhDXUuWnGDJVe9dILd1bL2rlvX+KnydAYBkpjStYt4GJreAnlMTeit+c3aq/uVjd0E8PXcr5Cy/LMIvmwi/5uK9Gh+bG9s48cTLqOdGMb+4VHhTkTP8vxpRQfj0YbnQX/8vUK+GnWQ2tXPPSgN5HNjpE1wCRpcNw/vGCnf+a6HvVnYm1d3uSmVQoR/lRSDJ+t/zLMoN4IojzvfRTL7oJ+8j1aQO2ezJ6AQAAAAASUVORK5CYII=",K={class:"calendar"},Z={class:"months"},Y=["onClick"],H=["onClick"],q={class:"dayName"},aa={class:"dayNumber"},ea={key:0,class:"dots-container"},ta=$('<div class="dot" data-v-a62ebf3e></div><div class="dot" data-v-a62ebf3e></div><div class="dot" data-v-a62ebf3e></div><div class="dot" data-v-a62ebf3e></div><div class="dot" data-v-a62ebf3e></div>',5),sa=[ta],oa=G({__name:"CalendarOperational",props:{statusCalendar:Boolean},emits:["updateData"],setup(E,{emit:z}){const N=E,f=i({}),g=z,C=new Date,A=i(k(C)),y=i(C.getDate()),b=c=>{if(!c){c=new Date;const _=c.getFullYear(),l=String(c.getMonth()+1).padStart(2,"0"),u=String(c.getDate()).padStart(2,"0"),B=`${_}-${l}-${u}`;return g("updateData",B)}return g("updateData",c)},L=async()=>{U({method:"get",url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/calendar",headers:{"Content-Type":"application/json",Authorization:"Bearer "+X.get("token")}}).then(c=>{f.value=c.data,b(),P()})};function k(c){const _={month:"long"},l=c.toLocaleString("pt-BR",_);return l.charAt(0).toUpperCase()+l.slice(1)}const p=i(!1),r=i(0),d=i(0),n=i(null),a=c=>{var _,l;p.value=!0,r.value=c.pageX-(((_=n.value)==null?void 0:_.offsetLeft)||0),d.value=((l=n.value)==null?void 0:l.scrollLeft)||0},m=c=>{var u;if(!p.value)return;c.preventDefault();const l=(c.pageX-(((u=n.value)==null?void 0:u.offsetLeft)||0)-r.value)*2;n.value&&(n.value.scrollLeft=d.value-l)},h=()=>{p.value=!1},P=()=>{n.value&&(n.value.addEventListener("mousemove",m),n.value.addEventListener("mouseup",h),n.value.addEventListener("mouseleave",h))};return R(()=>{L()}),T(()=>{n.value&&(n.value.removeEventListener("mousemove",m),n.value.removeEventListener("mouseup",h),n.value.removeEventListener("mouseleave",h))}),(c,_)=>(o(),s("div",K,[e("div",Z,[(o(!0),s(D,null,I(f.value,(l,u)=>(o(),s("div",{key:u,class:w({month:!0,select:u===A.value}),onClick:B=>[A.value=u,y.value=0]},t(u),11,Y))),128))]),e("div",{ref_key:"container",ref:n,class:"days",onMousedown:a},[(o(!0),s(D,null,I(f.value[A.value],(l,u)=>(o(),s("div",{class:"day",key:u},[e("div",{class:w(["box",{selectedDay:y.value===l.day}]),onClick:B=>[y.value=l.day,b(l.extense)]},[e("span",q,t(l.name),1),e("span",aa,t(l.day),1)],10,H)]))),128))],544),N.statusCalendar?M("",!0):(o(),s("section",ea,sa))]))}}),na=J(oa,[["__scopeId","data-v-a62ebf3e"]]),ca={class:"options"},la={class:"container_content"},da={class:"capacity"},ra={class:"period"},ia={class:"header"},ua=e("div",{class:"title"}," Capacidade período Manhã ",-1),va=["src"],pa={class:"services"},ha={class:"title"},_a=["onMouseover","src"],fa={key:1,class:"info_content"},ga={class:"progress"},Aa=["value","max"],ya={class:"info"},ma={key:0},Ca={key:1},ba={class:"period"},ka={class:"header"},Ma=e("div",{class:"title"}," Capacidade período Tarde ",-1),Da=["src"],La={class:"services"},Sa={class:"title"},Ia=["onMouseover","src"],wa={key:1,class:"info_content"},za={class:"progress"},Ba=["value","max"],xa={class:"info"},Ea={key:0},Na={key:1},Ga=G({__name:"ScheduleCapacity",setup(E){const z=O();(()=>{z.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Acompanhe a capacidade de agendamento em tempo real"})})();const f=i(!1),g=i({}),C=i(),A=r=>{f.value=!1,C.value=r,U({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity",params:{period:r},method:"GET",headers:{Authorization:"Bearer "+X.get("token")}}).then(d=>{f.value=!0,g.value=d.data}).catch(d=>{console.log(d)})},y=r=>r.split(":").slice(0,2).join(":"),b=r=>r.split("-").reverse().join("/"),L=i("capacity"),k=i("");setInterval(()=>{A(C.value)},1e4);const p=r=>{k.value=r};return(r,d)=>{const n=W("router-link");return o(),s(D,null,[e("div",ca,[x(n,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:d[0]||(d[0]=a=>L.value="capacity")},{default:V(()=>[v("Capacidade")]),_:1}),x(n,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/operacional",onClick:d[1]||(d[1]=a=>L.value="operational")},{default:V(()=>[v("Operacional")]),_:1})]),x(na,{onUpdateData:A,statusCalendar:f.value},null,8,["statusCalendar"]),e("div",la,[e("div",da,[e("div",ra,[e("div",ia,[ua,e("img",{src:S(F),alt:""},null,8,va)]),e("div",pa,[(o(!0),s(D,null,I(g.value.manha||[],(a,m)=>(o(),s("div",{class:"service",key:m},[e("div",ha,[a.status=="fechada"?(o(),s("img",{key:0,onMouseover:h=>p(a.servico+"manha"),onMouseleave:d[2]||(d[2]=h=>p("")),src:S(j),alt:"info"},null,40,_a)):M("",!0),e("span",null,t(a.servico)+" "+t(a.status=="fechada"?" - Fechada":""),1),a.status=="fechada"&&k.value==a.servico+"manha"?(o(),s("div",fa,[e("p",null,[v("Data: "),e("b",null,t(b(a.data_fechamento)+" às "+y(a.hora_fechamento)+"h"),1)]),e("p",null,[v("Motivo: "),e("b",null,t(a.motivo_fechamento),1)])])):M("",!0)]),e("div",ga,[e("progress",{class:w({closed:a.status=="fechada"}),value:a.utilizado,max:a.capacidade},null,10,Aa),e("div",ya,[a.status=="aberta"?(o(),s("span",ma,[e("b",null,t(Math.abs(a.capacidade-a.utilizado)),1),v(" - "+t(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)])):(o(),s("span",Ca,[e("b",null,t(a.capacidade-a.utilizado>=0?0:Math.abs(a.capacidade-a.utilizado)),1),v(" - "+t(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)]))])])]))),128))])]),e("div",ba,[e("div",ka,[Ma,e("img",{src:S(Q),alt:""},null,8,Da)]),e("div",La,[(o(!0),s(D,null,I(g.value.tarde||[],(a,m)=>(o(),s("div",{class:"service",key:m},[e("div",Sa,[a.status=="fechada"?(o(),s("img",{key:0,onMouseover:h=>p(a.servico+"tarde"),onMouseleave:d[3]||(d[3]=h=>p("")),src:S(j),alt:"info"},null,40,Ia)):M("",!0),e("span",null,t(a.servico)+" "+t(a.status=="fechada"?" - Fechada":""),1),a.status=="fechada"&&k.value==a.servico+"tarde"?(o(),s("div",wa,[e("p",null,[v("Data: "),e("b",null,t(b(a.data_fechamento)+" às "+y(a.hora_fechamento)+"h"),1)]),e("p",null,[v("Motivo: "),e("b",null,t(a.motivo_fechamento),1)])])):M("",!0)]),e("div",za,[e("progress",{class:w({closed:a.status=="fechada"}),value:a.utilizado,max:a.capacidade},null,10,Ba),e("div",xa,[a.status=="aberta"?(o(),s("span",Ea,[e("b",null,t(Math.abs(a.capacidade-a.utilizado)),1),v(" - "+t(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)])):(o(),s("span",Na,[e("b",null,t(a.capacidade-a.utilizado>=0?0:Math.abs(a.capacidade-a.utilizado)),1),v(" - "+t(a.capacidade-a.utilizado>=0?"Disponíveis":"Excedentes"),1)]))])])]))),128))])])])])],64)}}});export{Ga as default};
