import{d as x,k as f,a as v,U as S,l as i,q as e,y as p,z as u,F as _,x as A,N as y,K as P,o as n,S as b,E as a,L as I,G as k,H as B,_ as M}from"./index-CO4deE9E.js";const q=o=>(k("data-v-b579d317"),o=o(),B(),o),w={class:"options"},N={class:"navbar"},D=q(()=>e("div",{class:"actions"},[e("button",null,"Aprovar"),e("button",null,"Rejeitar"),e("button",null,"Reagendar")],-1)),R={class:"table"},T=y('<div class="header" data-v-b579d317><div class="row" data-v-b579d317><div class="cntr" data-v-b579d317><input type="checkbox" id="cbx" class="hidden-xs-up cbxInput" data-v-b579d317><label for="cbx" class="cbx" data-v-b579d317></label></div><div class="item" style="text-align:left;" data-v-b579d317>Serviço</div><div class="item" data-v-b579d317>Tipo</div><div class="item" data-v-b579d317>Data/Hora agendada</div><div class="item" data-v-b579d317>Período</div><div class="item" data-v-b579d317>Contrato</div><div class="item" data-v-b579d317>Nº da O.S</div><div class="item" data-v-b579d317>Setor</div><div class="item" data-v-b579d317>Solicitante</div><div class="item" style="text-align:center;" data-v-b579d317>Status</div></div></div>',1),V={class:"body"},z={class:"cntr"},E=["id"],$=["for"],j={class:"item",style:{"text-align":"left"}},F={class:"item"},J={class:"item"},L={class:"it em"},O={class:"item"},H={class:"item"},G={class:"item"},K={class:"item"},U={class:"item",style:{"text-align":"center"}},Q=x({__name:"ApprovalScheduleCapacity",setup(o){const m=f(),c=v({}),h=()=>{m.setInfoPage({title:"Agenda Técnica Aniel",subtitle:"Aprove o excedente de ordens de serviço que não entraram no sistema por limitação do capacity."})};S(()=>{h()});const g=l=>({Aprovado:"success","Pré-Aprovado":"progress",Rejeitado:"warning","Inserido no Aniel":"success","Pendente de aprovação":"progress","Reagendado pelo cliente":"success",Expirado:"warning"})[l]||"default",C=v([{title:"Mudança de endereço",type:"ME",segment:"B2C",schedule:"12/06/2024 14:00",period:"Tarde",collaborator:"Juliano Silva",contract:"219821",os:"120212",contact:"6199999-9999",nameClient:"Fulano de Souza",sector:"SAC",request:"Betania",status:"Aprovado"},{title:"Ativação Plano Combo",type:"Ativação",segment:"B2C",schedule:"12/06/2024 10:00",period:"Manhã",collaborator:"Ana Lima",contract:"219822",os:"120212",contact:"6198888-8888",nameClient:"Ciclano Pereira",sector:"MCV",request:"Jhefferson",status:"Pré-Aprovado"},{title:"Mudança de Ponto",type:"MP",segment:"B2C",schedule:"12/06/2024 16:00",period:"Tarde",collaborator:"Marcos Dias",contract:"219823",os:"120212",contact:"6197777-7777",nameClient:"Beltrano Silva",sector:"Suporte",request:"Denise",status:"Aprovado"},{title:"Ativação Plano Combo",type:"Ativação",segment:"B2C",schedule:"12/06/2024 11:00",period:"Manhã",collaborator:"Joana Souza",contract:"219824",os:"120212",contact:"6196666-6666",nameClient:"Maria Oliveira",sector:"Condomínio",request:"Daiane",status:"Rejeitado"}]);return(l,s)=>{const r=P("router-link");return n(),i(_,null,[e("div",w,[e("div",N,[p(r,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel",onClick:s[0]||(s[0]=t=>c.value="operational")},{default:u(()=>[b("Operacional")]),_:1}),p(r,{"exact-active-class":"select",to:"/ageIntegra/agenda-aniel/aprovacao",onClick:s[1]||(s[1]=t=>c.value="approbation")},{default:u(()=>[b("Aprovação")]),_:1})]),D]),e("div",R,[T,e("div",V,[(n(!0),i(_,null,A(C.value,(t,d)=>(n(),i("div",{class:"row",key:d},[e("div",z,[e("input",{type:"checkbox",id:`cbx${d}`,class:"hidden-xs-up cbxInput"},null,8,E),e("label",{for:`cbx${d}`,class:"cbx"},null,8,$)]),e("div",j,a(t.title),1),e("div",F,a(t.type),1),e("div",J,a(t.schedule),1),e("div",L,a(t.period),1),e("div",O,a(t.contract),1),e("div",H,a(t.os),1),e("div",G,a(t.sector),1),e("div",K,a(t.request),1),e("div",U,[e("span",{class:I(["badge",g(t.status)])},a(t.status),3)])]))),128))])])],64)}}}),X=M(Q,[["__scopeId","data-v-b579d317"]]);export{X as default};
