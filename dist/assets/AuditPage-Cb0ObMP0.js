import{d as B,a as s,k as M,m as P,p as w,w as R,l as o,q as e,u as V,v as E,F as b,x as g,y as F,z as J,T as N,A as k,C as T,D as q,o as n,E as r,G as z,H as D,I as O,_ as $}from"./index-DRhu8c7v.js";/* empty css                                                               */const C=i=>(z("data-v-d77c2811"),i=i(),D(),i),j={key:0,class:"audit__container"},G={class:"period"},H=["disabled"],L=["value"],U={class:"table__container"},X=C(()=>e("thead",null,[e("tr",null,[e("th",null,"Executivo"),e("th",null,"Vendas"),e("th",null,"Comissão"),e("th",null,"Status")])],-1)),K={key:0},Q=["onClick"],W=C(()=>e("td",null,[e("span",null,"Pendente")],-1)),Y=B({__name:"AuditPage",setup(i){const p=s("list"),f=s([]),u=s(!1),c=s(!1),l=s("2024-01-01"),v=s(""),I=M(),A=P(),h=s([{label:"Março de 2024",value:"2024-01-01",refer:"Janeiro de 2024"},{label:"Abril de 2024",value:"2024-02-01",refer:"Fevereiro de 2024"},{label:"Maio de 2024",value:"2024-03-01",refer:"Março de 2024"},{label:"Junho de 2024",value:"2024-04-01",refer:"Abril de 2024"},{label:"Julho de 2024",value:"2024-05-01",refer:"Maio de 2024"},{label:"Agosto de 2024",value:"2024-06-01",refer:"Junho de 2024"}]),x=t=>{m(),A.setInfo(t,v.value),p.value="details",O.push("/ageCommissiona/b2/financeiro/seller")},_=()=>{c.value=!0,u.value=!1,T({method:"get",url:"agerv/b2b/commission/financial/builder",headers:{"Content-Type":"application/json",Authorization:"Bearer "+q.get("token")},params:{period:l.value}}).then(t=>{m(),f.value=t.data,u.value=!0,c.value=!1,y()}).catch(t=>{})};w(_),R(l,(t,d)=>{t!==d&&_()});const m=()=>{v.value=h.value.find(t=>t.value===l.value).refer},y=()=>{I.setInfoPage({title:"Auditoria de vendas B2B - Referente à "+v.value,subtitle:"Examine cada transação, garantindo precisão e integridade nas vendas."})};return(t,d)=>p.value==="list"?(n(),o("div",j,[e("div",G,[V(e("select",{onChange:_,"onUpdate:modelValue":d[0]||(d[0]=a=>l.value=a),disabled:c.value},[(n(!0),o(b,null,g(h.value,a=>(n(),o("option",{value:a.value,key:a.value},r(a.label),9,L))),128))],40,H),[[E,l.value]])]),e("div",U,[e("table",null,[X,F(N,{name:"fade"},{default:J(()=>[u.value?(n(),o("tbody",K,[(n(!0),o(b,null,g(f.value,(a,S)=>(n(),o("tr",{key:S,onClick:Z=>x(a)},[e("td",null,r(a.seller),1),e("td",null,r(a.contracts.dedicated+a.contracts.business),1),e("td",null,"R$ "+r((a.commissionDedicated+a.commissionBusiness).toFixed(2)),1),W],8,Q))),128))])):k("",!0)]),_:1})])])])):k("",!0)}}),te=$(Y,[["__scopeId","data-v-d77c2811"]]);export{te as default};
