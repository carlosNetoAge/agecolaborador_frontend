import{d as w,a as d,p as V,R as X,l as c,q as e,F as f,x as D,A as F,C as B,o as l,L as N,E as i,N as U,_ as R,k as q,y as A,z,J as M,K as G,S as $,G as H,H as J}from"./index-BBwxEVy_.js";const K="/assets/morning-CSKRONwJ.png",j="/assets/afternoon-CHR2RdtE.png",Y={class:"calendar"},Q={class:"months"},W=["onClick"],Z=["onClick"],ee={class:"dayName"},ae={class:"dayNumber"},te={key:0,class:"dots-container"},se=U('<div class="dot" data-v-d9fbd246></div><div class="dot" data-v-d9fbd246></div><div class="dot" data-v-d9fbd246></div><div class="dot" data-v-d9fbd246></div><div class="dot" data-v-d9fbd246></div>',5),ne=[se],oe=w({__name:"CalendarOperational",props:{statusCalendar:Boolean},emits:["updateData"],setup(_,{emit:b}){const S=_,v=d({}),h=b,y=new Date,g=d(a(y)),m=d(y.getDate()),r=t=>{if(!t){t=new Date;const u=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),k=`${u}-${s}-${o}`;return h("updateData",k)}return h("updateData",t)},x=async()=>{B({method:"get",url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/calendar",headers:{"Content-Type":"application/json"}}).then(t=>{v.value=t.data,r(),T()})};function a(t){const u={month:"long"},s=t.toLocaleString("pt-BR",u);return s.charAt(0).toUpperCase()+s.slice(1)}const p=d(!1),L=d(0),E=d(0),n=d(null),P=t=>{var u,s;p.value=!0,L.value=t.pageX-(((u=n.value)==null?void 0:u.offsetLeft)||0),E.value=((s=n.value)==null?void 0:s.scrollLeft)||0},I=t=>{var o;if(!p.value)return;t.preventDefault();const s=(t.pageX-(((o=n.value)==null?void 0:o.offsetLeft)||0)-L.value)*2;n.value&&(n.value.scrollLeft=E.value-s)},C=()=>{p.value=!1},T=()=>{n.value&&(n.value.addEventListener("mousemove",I),n.value.addEventListener("mouseup",C),n.value.addEventListener("mouseleave",C))};return V(()=>{x()}),X(()=>{n.value&&(n.value.removeEventListener("mousemove",I),n.value.removeEventListener("mouseup",C),n.value.removeEventListener("mouseleave",C))}),(t,u)=>(l(),c("div",Y,[e("div",Q,[(l(!0),c(f,null,D(v.value,(s,o)=>(l(),c("div",{key:o,class:N({month:!0,select:o===g.value}),onClick:k=>[g.value=o,m.value=0]},i(o),11,W))),128))]),e("div",{ref_key:"container",ref:n,class:"days",onMousedown:P},[(l(!0),c(f,null,D(v.value[g.value],(s,o)=>(l(),c("div",{class:"day",key:o},[e("div",{class:N(["box",{selectedDay:m.value===s.day}]),onClick:k=>[m.value=s.day,r(s.extense)]},[e("span",ee,i(s.name),1),e("span",ae,i(s.day),1)],10,Z)]))),128))],544),S.statusCalendar?F("",!0):(l(),c("section",te,ne))]))}}),ce=R(oe,[["__scopeId","data-v-d9fbd246"]]),O=_=>(H("data-v-b1ceb562"),_=_(),J(),_),le={class:"options"},de={class:"container_content"},re={class:"capacity"},ie={class:"period"},ue={class:"header"},ve=O(()=>e("div",{class:"title"}," Capacidade período Manhã ",-1)),pe=["src"],_e={class:"services"},he={class:"title"},me={class:"progress"},ge=["value","max"],fe={class:"info"},ye={class:"period"},Ce={class:"header"},De=O(()=>e("div",{class:"title"}," Capacidade período Tarde ",-1)),be=["src"],xe={class:"services"},ke={class:"title"},$e={class:"progress"},Se=["value","max"],Le={class:"info"},Ee=w({__name:"ScheduleCapacity",setup(_){const b=q();(()=>{b.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Acompanhe a capacidade de agendamento em tempo real"})})();const v=d(!1),h=d({}),y=m=>{v.value=!1,B({url:"https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/",params:{period:m},method:"GET"}).then(r=>{v.value=!0,h.value=r.data}).catch(r=>{console.log(r)})},g=d("operational");return(m,r)=>{const x=G("router-link");return l(),c(f,null,[e("div",le,[A(x,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:r[0]||(r[0]=a=>g.value="operational")},{default:z(()=>[$("Operacional")]),_:1})]),A(ce,{onUpdateData:y,statusCalendar:v.value},null,8,["statusCalendar"]),e("div",de,[e("div",re,[e("div",ie,[e("div",ue,[ve,e("img",{src:M(K),alt:""},null,8,pe)]),e("div",_e,[(l(!0),c(f,null,D(h.value.capacity||[],(a,p)=>(l(),c("div",{class:"service",key:a.id},[e("div",he,[e("h3",null,i(p),1)]),e("div",me,[e("progress",{value:a.manha.used,max:a.manha.capacity},null,8,ge),e("div",fe,[e("span",null,[e("b",null,i(Math.abs(a.manha.capacity-a.manha.used)),1),$(" - "+i(a.manha.capacity-a.manha.used>=0?"Disponíveis":"Excedentes"),1)])])])]))),128))])]),e("div",ye,[e("div",Ce,[De,e("img",{src:M(j),alt:""},null,8,be)]),e("div",xe,[(l(!0),c(f,null,D(h.value.capacity||[],(a,p)=>(l(),c("div",{class:"service",key:a.id},[e("div",ke,[e("h3",null,i(p),1)]),e("div",$e,[e("progress",{value:a.tarde.used,max:a.tarde.capacity},null,8,Se),e("div",Le,[e("span",null,[e("b",null,i(Math.abs(a.tarde.capacity-a.tarde.used)),1),$(" - "+i(a.tarde.capacity-a.tarde.used>=0?"Disponíveis":"Excedentes"),1)])])])]))),128))])])])])],64)}}}),Ne=R(Ee,[["__scopeId","data-v-b1ceb562"]]);export{Ne as default};
