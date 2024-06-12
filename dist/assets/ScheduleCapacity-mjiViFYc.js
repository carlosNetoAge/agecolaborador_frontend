import{d as F,a as i,m as N,P as Y,o as l,l as r,p as s,F as C,u as S,L as A,E as y,I as w,_ as T,k as H,x,y as M,N as B,K as J,J as E,G as K,H as U}from"./index-BVqtlgUh.js";const z="/assets/morning-CSKRONwJ.png",G="/assets/afternoon-CHR2RdtE.png",W={class:"calendar"},j={class:"months"},q=["onClick"],Q=["onClick"],Z={class:"dayName"},ee={class:"dayNumber"},ae=F({__name:"CalendarOperational",setup(c){const p=i(!1),_=i(0),u=i(0),t=i(null),n=e=>{var o,a;p.value=!0,_.value=e.pageX-(((o=t.value)==null?void 0:o.offsetLeft)||0),u.value=((a=t.value)==null?void 0:a.scrollLeft)||0},g=e=>{var v;if(!p.value)return;e.preventDefault();const a=(e.pageX-(((v=t.value)==null?void 0:v.offsetLeft)||0)-_.value)*2;t.value&&(t.value.scrollLeft=u.value-a)},d=()=>{p.value=!1};N(()=>{t.value&&(t.value.addEventListener("mousemove",g),t.value.addEventListener("mouseup",d),t.value.addEventListener("mouseleave",d))}),Y(()=>{t.value&&(t.value.removeEventListener("mousemove",g),t.value.removeEventListener("mouseup",d),t.value.removeEventListener("mouseleave",d))});const k=i(0),I=e=>(e.endsWith(".")&&(e=e.slice(0,-1)),e.charAt(0).toUpperCase()+e.slice(1)),b=i(new Date().getMonth()+1),m=i(""),f=i([]),D=Array.from({length:12},(e,o)=>{const a=new Date(0,o),v={month:"long"},h=new Intl.DateTimeFormat("pt-BR",v);return I(h.format(a))}),L=e=>{f.value=[],b.value=e;const o=new Date().getFullYear();k.value=new Date(o,e,0).getDate();for(let a=1;a<=k.value;a++)f.value.push(V(e,a))};N(()=>{L(b.value),m.value=D.map((e,o)=>{if(e===D[new Date().getMonth()])return e}).filter(e=>e)[0]});const V=(e,o)=>{const a={weekday:"short"},v=new Intl.DateTimeFormat("pt-BR",a),h=new Date(new Date().getFullYear(),e-1,o);return I(v.format(h))},R=i({}),O=i(0),$=i(0),X=(e,o)=>{O.value=e,$.value=o,R.value={date:new Date().getFullYear()+`-${e}-${o}`}};return(e,o)=>(l(),r("div",W,[s("div",j,[(l(!0),r(C,null,S(w(D),(a,v)=>(l(),r("div",{key:a,class:A({month:!0,select:a===m.value}),onClick:h=>[m.value=a,L(v+1)]},y(a),11,q))),128))]),s("div",{ref_key:"container",ref:t,class:"days",onMousedown:n},[(l(!0),r(C,null,S(f.value,(a,v)=>(l(),r("div",{class:"day",key:v,onClick:h=>X(b.value,v+1)},[s("div",{class:A(["box",{selectedDay:$.value===v+1}])},[s("span",Z,y(a),1),s("span",ee,y(v+1),1)],2)],8,Q))),128))],544)]))}}),se=T(ae,[["__scopeId","data-v-adec9c85"]]),P=c=>(K("data-v-b447eae6"),c=c(),U(),c),te={class:"options"},oe={class:"container_content"},ve={class:"capacity"},ie={class:"period"},ne={class:"header"},de=P(()=>s("div",{class:"title"}," Capacidade período Manhã ",-1)),le=["src"],re=B('<div class="services" data-v-b447eae6><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Ativações</h3></div><div class="progress" data-v-b447eae6><progress value="100" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>0 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Visitas Técnicas</h3></div><div class="progress" data-v-b447eae6><progress value="60" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>42 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Mudança de endereço</h3></div><div class="progress" data-v-b447eae6><progress value="35" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>65 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Mudança de ponto</h3></div><div class="progress" data-v-b447eae6><progress value="15" max="20" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>20 - Disponíveis</span></div></div></div></div>',1),ce={class:"period"},pe={class:"header"},ue=P(()=>s("div",{class:"title"}," Capacidade período Tarde ",-1)),ge=["src"],he=B('<div class="services" data-v-b447eae6><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Ativações</h3></div><div class="progress" data-v-b447eae6><progress value="100" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>0 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Visitas Técnicas</h3></div><div class="progress" data-v-b447eae6><progress value="60" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>42 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Mudança de endereço</h3></div><div class="progress" data-v-b447eae6><progress value="35" max="100" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>65 - Disponíveis</span></div></div></div><div class="service" data-v-b447eae6><div class="title" data-v-b447eae6><h3 data-v-b447eae6>Mudança de ponto</h3></div><div class="progress" data-v-b447eae6><progress value="15" max="20" data-v-b447eae6></progress><div class="info" style="right:0;top:-2vh;" data-v-b447eae6><span data-v-b447eae6>20 - Disponíveis</span></div></div></div></div>',1),_e=F({__name:"ScheduleCapacity",setup(c){const p=H();(()=>{p.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Acompanhe a capacidade de agendamento em tempo real"})})();const u=i("operational");return(t,n)=>{const g=J("router-link");return l(),r(C,null,[s("div",te,[x(g,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:n[0]||(n[0]=d=>u.value="operational")},{default:M(()=>[E("Operacional")]),_:1}),x(g,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/aprovacao",onClick:n[1]||(n[1]=d=>u.value="approbation")},{default:M(()=>[E("Aprovação")]),_:1})]),x(se),s("div",oe,[s("div",ve,[s("div",ie,[s("div",ne,[de,s("img",{src:w(z),alt:""},null,8,le)]),re]),s("div",ce,[s("div",pe,[ue,s("img",{src:w(G),alt:""},null,8,ge)]),he])])])],64)}}}),me=T(_e,[["__scopeId","data-v-b447eae6"]]);export{me as default};
