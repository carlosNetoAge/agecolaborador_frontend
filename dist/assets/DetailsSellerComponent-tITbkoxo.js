import{d as $,a as n,l as u,q as e,y as w,z as T,T as X,o as r,F as Z,x as z,E as i,G as M,H as B,_ as y,p as A,J as s,K as P,L as b,M as F,N,m as G,k as K,O as Q,A as L,u as U,v as W,P as j,C as Y,Q as e2}from"./index-BlQoQ2wm.js";/* empty css                                                               */const t2=l=>(M("data-v-6d29bd44"),l=l(),B(),l),s2={class:"audit__container"},a2={class:"table__container"},l2=t2(()=>e("thead",null,[e("tr",null,[e("th",null,"Nº do contrato"),e("th",null,"Tipo de contrato"),e("th",null,"Data ativação"),e("th",null,"Valor do contrato"),e("th",null,"Fatura paga"),e("th",null,"Competência"),e("th",null,"Data do recebimento"),e("th",null,"Valor recebido"),e("th",null,"Percentual comissão"),e("th",null,"Comissão")])],-1)),o2=$({__name:"ListSalesDetails",props:{dataList:Object},emits:["return"],setup(l,{emit:m}){const o=n(l.dataList),p=m,d=()=>{p("return")};return(g,v)=>(r(),u("div",s2,[e("div",{class:"return"},[e("button",{onClick:d}," Voltar ")]),e("div",a2,[e("table",null,[l2,w(X,{name:"fade"},{default:T(()=>[e("tbody",null,[(r(!0),u(Z,null,z(o.value.invoices,(t,c)=>(r(),u("tr",{key:c},[e("td",null,i(t.contract_id),1),e("td",null,i(t.title),1),e("td",null,i(t.approval_date),1),e("td",null,i(t.amount.liquid),1),e("td",null,i(t.invoice!=null?t.invoice.title:"Não recebida"),1),e("td",null,i(t.invoice!=null?t.invoice.competence:" - "),1),e("td",null,i(t.invoice!=null?t.invoice.receipt_date:" - "),1),e("td",null,"R$"+i(t.invoice!=null?t.invoice.total_amount:" 0 "),1),e("td",null,i(t.invoice!=null?t.invoice.percentCommission.toFixed(2):" 0 ")+"%",1),e("td",null,"R$"+i(t.invoice!=null?t.invoice.commission.toFixed(2):" 0 "),1)]))),128))])]),_:1})])])]))}}),i2=y(o2,[["__scopeId","data-v-6d29bd44"]]),n2="data:image/svg+xml,%3csvg%20width='113'%20height='113'%20viewBox='0%200%20113%20113'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='56.2996'%20cy='56.2996'%20r='56.2996'%20fill='%2353AEE2'/%3e%3cpath%20d='M103%2088C94%20102.5%2075.4034%20113%2055.9261%20113C37.2486%20113%2020.1357%20103.348%2010.4556%2089.0852C10.7828%2088.5254%2011.1182%2087.9667%2011.463%2087.4152C13.5713%2083.9807%2026.2501%2078.5406%2044.2308%2076.5871C48.0777%2076.1571%2052.1665%2075.8985%2056.4444%2075.8559C60.9632%2075.804%2065.4134%2076.0969%2069.6653%2076.6307C85.2687%2078.576%2098.5757%2084.4876%20103%2088Z'%20fill='%23BAE6FF'/%3e%3cpath%20d='M70.9573%2077.957C70.9573%2077.957%2067.0107%2085.9975%2056.8951%2086.0069C48.6125%2086.0069%2042.5722%2078.8221%2042.5722%2078.8221C45.4854%2076.207%2045.662%2071.3673%2045.2341%2067.5609C44.8903%2064.4525%2044.1456%2062.0326%2044.1456%2062.0326H68.9207C67.4127%2066.9835%2067.4687%2070.5395%2068.0555%2073.0144C68.9196%2076.6546%2070.9573%2077.957%2070.9573%2077.957Z'%20fill='white'/%3e%3cpath%20d='M68.0535%2073.0154C50.1466%2077.7056%2046.5916%2067.4778%2046.5916%2067.4778L45.2331%2067.5619C44.8894%2064.4535%2044.1447%2062.0336%2044.1447%2062.0336H68.9197C67.4117%2066.9845%2067.4678%2070.5395%2068.0535%2073.0154Z'%20fill='%23263238'/%3e%3cpath%20d='M74.314%2044.6377C74.314%2044.6377%2076.3102%2042.4692%2077.2906%2043.1827C78.271%2043.8962%2079.429%2045.9162%2078.8941%2047.7576C78.3592%2049.599%2076.0422%2052.8081%2075.8646%2054.6796C75.686%2056.5511%2074.4843%2058.6708%2073.1695%2057.4329C71.8536%2056.1938%2074.314%2044.6377%2074.314%2044.6377Z'%20fill='white'/%3e%3cpath%20d='M38.7513%2044.6377C38.7513%2044.6377%2036.7552%2042.4692%2035.7748%2043.1827C34.7944%2043.8962%2033.6364%2045.9162%2034.1712%2047.7576C34.7061%2049.599%2037.0231%2052.8081%2037.2007%2054.6796C37.3794%2056.5511%2038.58%2058.6708%2039.8958%2057.4329C41.2117%2056.1938%2038.7513%2044.6377%2038.7513%2044.6377Z'%20fill='white'/%3e%3cpath%20d='M56.1111%2019.576C81.2059%2019.576%2075.2404%2052.9992%2070.6219%2063.7297C69.0007%2067.4976%2060.5956%2072.4432%2056.5327%2072.4432C52.7534%2072.4432%2044.1042%2066.5328%2042.5713%2062.9933C37.8998%2052.2099%2032.1918%2019.576%2056.1111%2019.576Z'%20fill='white'/%3e%3cpath%20d='M66.4988%2028.1214C66.4988%2028.1214%2057.4975%2031.5082%2047.1607%2028.1214C47.1607%2028.1214%2043.7739%2027.923%2042.4373%2029.6263C41.1007%2031.3295%2042.4373%2036.5878%2042.7935%2038.7262C43.1497%2040.8646%2039.8523%2042.3508%2040.2979%2047.7565L39.0225%2049.6218C39.0225%2049.6218%2035.482%2040.9228%2036.3731%2033.4368C37.2642%2025.9508%2041.9907%2023.0407%2041.9907%2023.0407C41.9907%2023.0407%2044.1447%2016.5757%2056.7726%2016.6245C70.382%2016.6764%2071.756%2024.044%2071.756%2024.044C71.756%2024.044%2080.9837%2030.1975%2074.1582%2050.2491L72.6772%2047.7565C72.6772%2047.7565%2073.3969%2043.7165%2070.9542%2040.1521C69.7651%2038.4167%2071.6677%2033.201%2071.2212%2030.5278C70.7766%2027.8545%2066.4988%2028.1214%2066.4988%2028.1214Z'%20fill='%23263238'/%3e%3cpath%20d='M68.9197%2028.3852C68.9197%2028.3852%2066.1145%2032.5488%2056.8993%2033.4378C56.8993%2033.4378%2057.832%2032.6724%2058.5299%2031.1031C58.5299%2031.1031%2054.7723%2034.3071%2048.7372%2033.4378C42.7021%2032.5685%2039.3808%2037.2587%2039.3808%2037.2587L37.8177%2044.3116C37.8177%2044.3116%2032.2988%2038.0407%2036.2308%2028.0746L34.8173%2029.2472C34.8173%2029.2472%2036.3804%2015.8621%2052.4376%2015.374L50.4882%2014.2015C50.4882%2014.2015%2066.5196%2010.7825%2072.7831%2021.3333C72.7831%2021.3333%2078.3634%2022.3895%2079.7312%2032.0222L78.1681%2031.0055C78.1681%2031.0055%2080.6492%2039.0128%2075.5%2045.7074C75.5%2045.7074%2068.9197%2035.1088%2068.9197%2028.3852Z'%20fill='%23263238'/%3e%3c/svg%3e",c2="data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42%2021C42%2032.598%2032.598%2042%2021%2042C9.40202%2042%200%2032.598%200%2021C0%209.40202%209.40202%200%2021%200C32.598%200%2042%209.40202%2042%2021ZM1.60214%2021C1.60214%2031.7131%2010.2869%2040.3979%2021%2040.3979C31.7131%2040.3979%2040.3979%2031.7131%2040.3979%2021C40.3979%2010.2869%2031.7131%201.60214%2021%201.60214C10.2869%201.60214%201.60214%2010.2869%201.60214%2021Z'%20fill='%23BAE6FF'/%3e%3cg%20clip-path='url(%23clip0_131_1594)'%3e%3cpath%20d='M27.0417%2012H15.9583C13.7757%2012%2012%2013.7757%2012%2015.9583V27.0417C12%2029.2243%2013.7757%2031%2015.9583%2031H27.0417C29.2243%2031%2031%2029.2243%2031%2027.0417V15.9583C31%2013.7757%2029.2243%2012%2027.0417%2012ZM29.4167%2027.0417C29.4167%2028.3511%2028.3511%2029.4167%2027.0417%2029.4167H15.9583C14.6489%2029.4167%2013.5833%2028.3511%2013.5833%2027.0417V15.9583C13.5833%2014.6489%2014.6489%2013.5833%2015.9583%2013.5833H27.0417C28.3511%2013.5833%2029.4167%2014.6489%2029.4167%2015.9583V27.0417ZM24.6667%2023.0833C24.6667%2024.3928%2023.6011%2025.4583%2022.2917%2025.4583V26.25C22.2917%2026.6878%2021.9378%2027.0417%2021.5%2027.0417C21.0622%2027.0417%2020.7083%2026.6878%2020.7083%2026.25V25.4583H20.4962C19.6515%2025.4583%2018.863%2025.0039%2018.4394%2024.2716C18.2201%2023.8924%2018.35%2023.4087%2018.7276%2023.1902C19.1068%2022.9693%2019.5905%2023.1007%2019.809%2023.4784C19.9507%2023.7238%2020.2135%2023.875%2020.4954%2023.875H22.2909C22.7279%2023.875%2023.0825%2023.5203%2023.0825%2023.0833C23.0825%2022.7841%2022.868%2022.5308%2022.5727%2022.4817L20.1653%2022.0803C19.1028%2021.9038%2018.3325%2020.9933%2018.3325%2019.9167C18.3325%2018.6073%2019.3981%2017.5417%2020.7075%2017.5417V16.75C20.7075%2016.313%2021.0614%2015.9583%2021.4992%2015.9583C21.937%2015.9583%2022.2909%2016.313%2022.2909%2016.75V17.5417H22.503C23.3478%2017.5417%2024.1363%2017.9969%2024.5598%2018.7292C24.7791%2019.1076%2024.6493%2019.5913%2024.2716%2019.8106C23.8916%2020.0299%2023.4079%2019.9%2023.1902%2019.5216C23.0485%2019.277%2022.7857%2019.1258%2022.5038%2019.1258H20.7083C20.2713%2019.1258%2019.9167%2019.4813%2019.9167%2019.9175C19.9167%2020.2167%2020.1312%2020.47%2020.4265%2020.5191L22.834%2020.9205C23.8964%2021.097%2024.6667%2022.0075%2024.6667%2023.0841V23.0833Z'%20fill='%2353AEE2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_131_1594'%3e%3crect%20width='19'%20height='19'%20fill='white'%20transform='translate(12%2012)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d2="data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.8333%2010.25C24.4215%2010.4516%2024.9567%2010.7832%2025.3992%2011.22L26.7792%2012.6017C27.2165%2013.0436%2027.5484%2013.5786%2027.75%2014.1667H23.8333V10.25ZM28%2015.8333V25.8333C27.9987%2026.938%2027.5593%2027.997%2026.7782%2028.7782C25.997%2029.5593%2024.938%2029.9987%2023.8333%2030H17.1667C16.062%2029.9987%2015.003%2029.5593%2014.2218%2028.7782C13.4407%2027.997%2013.0013%2026.938%2013%2025.8333V14.1667C13.0013%2013.062%2013.4407%2012.003%2014.2218%2011.2218C15.003%2010.4407%2016.062%2010.0013%2017.1667%2010H22.1667V14.1667C22.1667%2014.6087%2022.3423%2015.0326%2022.6548%2015.3452C22.9674%2015.6577%2023.3913%2015.8333%2023.8333%2015.8333H28ZM24.5067%2024.5108C24.4424%2024.4219%2024.3611%2024.3465%2024.2676%2024.289C24.1741%2024.2315%2024.0702%2024.1931%2023.9618%2024.1759C23.8534%2024.1587%2023.7426%2024.1631%2023.6359%2024.1888C23.5292%2024.2146%2023.4287%2024.2611%2023.34%2024.3258C22.7801%2024.7156%2022.1261%2024.9484%2021.4458%2025C21.1793%2024.9927%2020.9241%2024.8908%2020.7258%2024.7125C20.2909%2024.3674%2019.7543%2024.1755%2019.1992%2024.1667C18.2747%2024.2536%2017.3942%2024.6022%2016.6608%2025.1717C16.5698%2025.2365%2016.4928%2025.3191%2016.4343%2025.4143C16.3758%2025.5096%2016.3371%2025.6157%2016.3205%2025.7262C16.3039%2025.8367%2016.3096%2025.9495%2016.3375%2026.0577C16.3653%2026.166%2016.4146%2026.2675%2016.4825%2026.3563C16.5504%2026.4451%2016.6355%2026.5194%2016.7326%2026.5746C16.8298%2026.6299%2016.9371%2026.665%2017.0481%2026.678C17.1591%2026.6909%2017.2716%2026.6814%2017.3789%2026.6499C17.4862%2026.6185%2017.586%2026.5658%2017.6725%2026.495C18.1163%2026.1474%2018.642%2025.9195%2019.1992%2025.8333C19.4042%2025.8333%2019.5083%2025.8983%2019.7825%2026.0833C20.2573%2026.4584%2020.8441%2026.6637%2021.4492%2026.6667C22.4848%2026.6193%2023.4848%2026.2741%2024.3292%2025.6725C24.5062%2025.5416%2024.6243%2025.3459%2024.6575%2025.1283C24.6908%2024.9106%2024.6366%2024.6886%2024.5067%2024.5108ZM24.6667%2021.6667C24.6667%2021.4457%2024.5789%2021.2337%2024.4226%2021.0774C24.2663%2020.9211%2024.0543%2020.8333%2023.8333%2020.8333H17.1667C16.9457%2020.8333%2016.7337%2020.9211%2016.5774%2021.0774C16.4211%2021.2337%2016.3333%2021.4457%2016.3333%2021.6667C16.3333%2021.8877%2016.4211%2022.0996%2016.5774%2022.2559C16.7337%2022.4122%2016.9457%2022.5%2017.1667%2022.5H23.8333C24.0543%2022.5%2024.2663%2022.4122%2024.4226%2022.2559C24.5789%2022.0996%2024.6667%2021.8877%2024.6667%2021.6667ZM24.6667%2018.3333C24.6667%2018.1123%2024.5789%2017.9004%2024.4226%2017.7441C24.2663%2017.5878%2024.0543%2017.5%2023.8333%2017.5H17.1667C16.9457%2017.5%2016.7337%2017.5878%2016.5774%2017.7441C16.4211%2017.9004%2016.3333%2018.1123%2016.3333%2018.3333C16.3333%2018.5543%2016.4211%2018.7663%2016.5774%2018.9226C16.7337%2019.0789%2016.9457%2019.1667%2017.1667%2019.1667H23.8333C24.0543%2019.1667%2024.2663%2019.0789%2024.4226%2018.9226C24.5789%2018.7663%2024.6667%2018.5543%2024.6667%2018.3333Z'%20fill='%2353AEE2'/%3e%3cpath%20d='M42%2021C42%2032.598%2032.598%2042%2021%2042C9.40202%2042%200%2032.598%200%2021C0%209.40202%209.40202%200%2021%200C32.598%200%2042%209.40202%2042%2021ZM1.60214%2021C1.60214%2031.7131%2010.2869%2040.3979%2021%2040.3979C31.7131%2040.3979%2040.3979%2031.7131%2040.3979%2021C40.3979%2010.2869%2031.7131%201.60214%2021%201.60214C10.2869%201.60214%201.60214%2010.2869%201.60214%2021Z'%20fill='%23BAE6FF'/%3e%3c/svg%3e",r2="data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.8333%209H17.1667C16.062%209.00132%2015.003%209.44073%2014.2218%2010.2218C13.4407%2011.0029%2013.0013%2012.062%2013%2013.1666V28.1665C13.0001%2028.318%2013.0416%2028.4667%2013.1199%2028.5965C13.1982%2028.7262%2013.3105%2028.8322%2013.4445%2028.9029C13.5786%2028.9736%2013.7294%2029.0064%2013.8807%2028.9978C14.0321%2028.9892%2014.1782%2028.9394%2014.3033%2028.854L16.0583%2027.6548L17.8133%2028.854C17.952%2028.9489%2018.1161%2028.9997%2018.2842%2028.9997C18.4522%2028.9997%2018.6163%2028.9489%2018.755%2028.854L20.505%2027.6548L22.255%2028.854C22.3937%2028.9491%2022.558%2029%2022.7262%2029C22.8945%2029%2023.0588%2028.9491%2023.1975%2028.854L24.9475%2027.6556L26.6975%2028.8531C26.8226%2028.9383%2026.9685%2028.9879%2027.1197%2028.9964C27.2708%2029.005%2027.4214%2028.9722%2027.5553%2028.9016C27.6892%2028.831%2027.8013%2028.7253%2027.8797%2028.5958C27.958%2028.4662%2027.9996%2028.3178%2028%2028.1665V13.1666C27.9987%2012.062%2027.5593%2011.0029%2026.7782%2010.2218C25.997%209.44073%2024.938%209.00132%2023.8333%209ZM26.3333%2026.5831L25.4167%2025.9565C25.2778%2025.8612%2025.1134%2025.8102%2024.945%2025.8102C24.7766%2025.8102%2024.6122%2025.8612%2024.4733%2025.9565L22.7233%2027.1556L20.9733%2025.9565C20.8346%2025.8614%2020.6703%2025.8104%2020.5021%2025.8104C20.3339%2025.8104%2020.1696%2025.8614%2020.0308%2025.9565L18.2808%2027.1556L16.5308%2025.9565C16.3923%2025.8617%2016.2283%2025.811%2016.0604%2025.811C15.8925%2025.811%2015.7286%2025.8617%2015.59%2025.9565L14.6667%2026.5831V13.1666C14.6667%2012.5036%2014.9301%2011.8677%2015.3989%2011.3989C15.8677%2010.93%2016.5036%2010.6666%2017.1667%2010.6666H23.8333C24.4964%2010.6666%2025.1323%2010.93%2025.6011%2011.3989C26.0699%2011.8677%2026.3333%2012.5036%2026.3333%2013.1666V26.5831Z'%20fill='%2353AEE2'/%3e%3cpath%20d='M23.8334%2015.6666H17.1667C16.7065%2015.6666%2016.3334%2016.0397%2016.3334%2016.4999C16.3334%2016.9602%2016.7065%2017.3332%2017.1667%2017.3332H23.8334C24.2936%2017.3332%2024.6667%2016.9602%2024.6667%2016.4999C24.6667%2016.0397%2024.2936%2015.6666%2023.8334%2015.6666Z'%20fill='%2353AEE2'/%3e%3cpath%20d='M22.1667%2018.9999H17.1667C16.7065%2018.9999%2016.3334%2019.373%2016.3334%2019.8332C16.3334%2020.2935%2016.7065%2020.6665%2017.1667%2020.6665H22.1667C22.6269%2020.6665%2023%2020.2935%2023%2019.8332C23%2019.373%2022.6269%2018.9999%2022.1667%2018.9999Z'%20fill='%2353AEE2'/%3e%3cpath%20d='M42%2021C42%2032.598%2032.598%2042%2021%2042C9.40202%2042%200%2032.598%200%2021C0%209.40202%209.40202%200%2021%200C32.598%200%2042%209.40202%2042%2021ZM1.60214%2021C1.60214%2031.7131%2010.2869%2040.3979%2021%2040.3979C31.7131%2040.3979%2040.3979%2031.7131%2040.3979%2021C40.3979%2010.2869%2031.7131%201.60214%2021%201.60214C10.2869%201.60214%201.60214%2010.2869%201.60214%2021Z'%20fill='%23BAE6FF'/%3e%3c/svg%3e",u2={class:"relative flex flex-col justify-evenly pl-12"},p2={class:"flex flex-row pt-5"},_2=["src"],v2={class:"flex flex-col justify-evenly min-[1600px]:text-2xl min-[1600px]:m-24 lg:m-10 p-2 md:text-lg w-full text-center gap-2"},h2={class:"font-semibold text-nowrap"},x2=e("span",{class:"absolute w-24 top-8 right-10 border border-age-blue text-age-blue px-2 py-2 rounded-medium text-base font-Bold text-center"},"B2B",-1),m2={class:"flex flex-row justify-evenly"},C2={class:"flex flex-col items-center"},g2=["src"],f2={class:"flex flex-col items-center"},b2=["src"],w2={class:"flex flex-col items-center"},$2=["src"],y2=$({__name:"SellerCard",props:{data:{},periodRefer:{}},setup(l){const a=n(l.data);let o=n(0),p=n(0),d=n(0);return A(()=>{for(const v in a.value.invoices)a.value.invoices[v].invoice&&p.value++;o.value=a.value.contracts.business+a.value.contracts.dedicated,d.value=o.value}),(v,t)=>(r(),u("div",u2,[e("div",p2,[e("img",{src:s(n2),class:"w-32 min-[1600px]:w-40"},null,8,_2),e("div",v2,[e("p",h2,i(a.value.seller),1)])]),x2,e("div",m2,[e("div",C2,[e("img",{class:"object-cover mb-4 min-[1600px]:size-24 size-20",src:s(c2),alt:""},null,8,g2),e("p",null,i(s(o))+" vendas",1)]),e("div",f2,[e("img",{class:"object-cover mb-4 min-[1600px]:size-24 size-20",src:s(d2),alt:""},null,8,b2),e("p",null,i(s(o))+" contratos",1)]),e("div",w2,[e("img",{class:"object-cover mb-4 min-[1600px]:size-24 size-20",src:s(r2),alt:""},null,8,$2),e("p",null,i(s(p))+" faturas",1)])])]))}}),E=l=>(M("data-v-eb6d5dd2"),l=l(),B(),l),F2={class:"flex flex-col justify-between"},L2={class:"relative flex flex-col min-[1600px]:pl-16 md:pl-8 pt-5"},M2=E(()=>e("h2",{class:"text-nowrap text-lg"}," Composição do comissionamento ",-1)),B2={class:"text-nowrap font-semiBold text-3xl pt-5"},E2={class:"flex flex-row items-center min-[1600px]:justify-between md:justify-center h-4/5 md:text-xs min-[1600px]:text-lg px-16 md:px-8"},V2={class:"items__container flex md:justify-between md:w-4/6 text-nowrap min-[1600px]:w-3/6"},k2={class:"items__composition"},H2=E(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#FF8B3D"}}),e("span",null,"Empresarial")],-1)),S2={class:"composition"},D2={class:"items__composition flex"},Z2=E(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#53AEE2"}}),e("span",null,"Link dedicado")],-1)),A2={class:"composition"},z2={class:"items__composition flex"},R2=E(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#FFD8BE"}}),e("span",null,"Meta alcançada")],-1)),I2={class:"composition"},O2={class:"items__composition flex"},j2=E(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#BAE6FF"}}),e("span",null,"fidelizado 36 meses")],-1)),P2={class:"composition"},N2=$({__name:"CommissionsCompositionsCard",props:{data:{}},emits:["viewExtract"],setup(l,{emit:m}){const o=l.data,p=n([]);let d=n(0);const g=()=>{const t={commissionBusiness:parseFloat(o.commissionBusiness.toFixed(2)),commissionDedicated:parseFloat(o.commissionDedicated.toFixed(2)),metaReach:0,loyalty:0};d.value=Object.values(t).reduce((c,C)=>c+C,0),d.value=parseFloat(d.value.toFixed(2));for(let c in t){let C=t[c]/d.value*100;p.value.push(parseFloat(C.toFixed(2)))}},v=n({chart:{width:150,type:"donut",offsetX:-10},labels:["Empresarial","Link dedicado","Meta alcançada","Contrato fidelizado 36 meses"],colors:["#FF8B3D","#53AEE2","#FFD8BE","#BAE6FF"],dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},plotOptions:{pie:{startAngle:-360,endAngle:0,expandOnClick:!1,donut:{size:"80%"}}},fill:{},color:["#53AEE2","#FF8B3D","#BAE6FF","#FFD8BE"],stroke:{curve:"straight",width:0}});return A(g),(t,c)=>{const C=P("apexchart");return r(),u("div",F2,[e("div",L2,[M2,e("span",B2,"R$ "+i(s(d)),1)]),e("div",E2,[w(C,{type:"donut",width:"150",height:"150",options:v.value,series:p.value},null,8,["options","series"]),e("div",V2,[e("div",k2,[H2,e("div",S2,[e("span",null,"R$ "+i(s(o).commissionBusiness?s(o).commissionBusiness.toFixed(2):0),1)])]),e("div",D2,[Z2,e("div",A2,[e("span",null,"R$ "+i(s(o).commissionDedicated?s(o).commissionDedicated.toFixed(2):0),1)])]),e("div",z2,[R2,e("div",I2,[e("span",null,"R$ "+i(s(o).metaReach?s(o).metaReach.toFixed(2):0),1)])]),e("div",O2,[j2,e("div",P2,[e("span",null,"R$ "+i(s(o).loyalty?s(o).loyalty.toFixed(2):0),1)])])])])])}}}),J2=y(N2,[["__scopeId","data-v-eb6d5dd2"]]),q2="data:image/svg+xml,%3csvg%20width='86'%20height='86'%20viewBox='0%200%2086%2086'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M56.2909%2038.8303C56.2909%2038.7243%2056.2761%2038.6182%2056.2476%2038.5168L54.9113%2033.8433C54.2158%2031.4091%2051.9606%2029.7091%2049.4295%2029.7091H35.7875C33.2564%2029.7091%2031.0023%2031.4091%2030.3057%2033.8433L28.9717%2038.5168C28.9432%2038.6182%2028.9272%2038.7243%2028.9272%2038.8303C28.9272%2039.9842%2029.3582%2041.0388%2030.0674%2041.8437V52.5121C30.0674%2055.0273%2032.1128%2057.0727%2034.628%2057.0727H41.4689C43.9841%2057.0727%2046.0295%2055.0273%2046.0295%2052.5121V42.7787C46.4582%2042.5301%2046.8436%2042.2131%2047.1697%2041.8437C48.0054%2042.7923%2049.2288%2043.3909%2050.5901%2043.3909H51.7303C52.1236%2043.3909%2052.5056%2043.3408%2052.8704%2043.2461V55.9326C52.8704%2056.562%2053.3801%2057.0727%2054.0106%2057.0727C54.6411%2057.0727%2055.1507%2056.562%2055.1507%2055.9326V41.8437C55.8599%2041.0399%2056.2909%2039.9842%2056.2909%2038.8303ZM41.4689%2054.7924H34.628C33.3704%2054.7924%2032.3477%2053.7697%2032.3477%2052.5121V50.2318H43.7492V52.5121C43.7492%2053.7697%2042.7265%2054.7924%2041.4689%2054.7924ZM43.7492%2047.9515H32.3477V43.2461C32.7125%2043.3408%2033.0945%2043.3909%2033.4879%2043.3909H34.628C35.9893%2043.3909%2037.2116%2042.7912%2038.0485%2041.8437C38.8853%2042.7923%2040.1076%2043.3909%2041.4689%2043.3909H43.7492V47.9515ZM50.5901%2041.1106C49.3325%2041.1106%2048.3098%2040.0879%2048.3098%2038.8303C48.3098%2038.201%2047.8002%2037.6902%2047.1697%2037.6902C46.5392%2037.6902%2046.0295%2038.201%2046.0295%2038.8303C46.0295%2040.0879%2045.0068%2041.1106%2043.7492%2041.1106H41.4689C40.2113%2041.1106%2039.1886%2040.0879%2039.1886%2038.8303C39.1886%2038.201%2038.6778%2037.6902%2038.0485%2037.6902C37.4191%2037.6902%2036.9083%2038.201%2036.9083%2038.8303C36.9083%2040.0879%2035.8856%2041.1106%2034.628%2041.1106H33.4879C32.9292%2041.1106%2032.4161%2040.9077%2032.0193%2040.5736C31.9863%2040.5405%2031.9521%2040.5098%2031.9156%2040.4801C31.512%2040.0959%2031.2486%2039.5657%2031.2121%2038.9751L32.4982%2034.4704C32.9155%2033.0098%2034.2677%2031.9894%2035.7875%2031.9894H36.9083V34.2697C36.9083%2034.8991%2037.4191%2035.4099%2038.0485%2035.4099C38.6778%2035.4099%2039.1886%2034.8991%2039.1886%2034.2697V31.9894H46.0295V34.2697C46.0295%2034.8991%2046.5392%2035.4099%2047.1697%2035.4099C47.8002%2035.4099%2048.3098%2034.8991%2048.3098%2034.2697V31.9894H49.4295C50.9481%2031.9894%2052.3015%2033.0098%2052.7188%2034.4704L54.006%2038.9751C53.9319%2040.1654%2052.9388%2041.1118%2051.7303%2041.1118H50.5901V41.1106Z'%20fill='%23FF8B3D'/%3e%3cpath%20d='M86%2043C86%2066.7482%2066.7482%2086%2043%2086C19.2518%2086%200%2066.7482%200%2043C0%2019.2518%2019.2518%200%2043%200C66.7482%200%2086%2019.2518%2086%2043ZM3.28057%2043C3.28057%2064.9364%2021.0636%2082.7194%2043%2082.7194C64.9364%2082.7194%2082.7194%2064.9364%2082.7194%2043C82.7194%2021.0636%2064.9364%203.28057%2043%203.28057C21.0636%203.28057%203.28057%2021.0636%203.28057%2043Z'%20fill='%23FF8B3D'/%3e%3c/svg%3e",T2="data:image/svg+xml,%3csvg%20width='86'%20height='86'%20viewBox='0%200%2086%2086'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M86%2043C86%2066.7482%2066.7482%2086%2043%2086C19.2518%2086%200%2066.7482%200%2043C0%2019.2518%2019.2518%200%2043%200C66.7482%200%2086%2019.2518%2086%2043ZM3.28057%2043C3.28057%2064.9364%2021.0636%2082.7194%2043%2082.7194C64.9364%2082.7194%2082.7194%2064.9364%2082.7194%2043C82.7194%2021.0636%2064.9364%203.28057%2043%203.28057C21.0636%203.28057%203.28057%2021.0636%203.28057%2043Z'%20fill='%2353AEE2'/%3e%3cpath%20d='M43.0736%2041.7096L53.5491%2050.4641L46.1294%2056.0299C44.2764%2057.4204%2041.7275%2057.4204%2039.8746%2056.0299L31.8827%2050.0354C31.2064%2049.5285%2030.3829%2049.2535%2029.5372%2049.2535H28.668C27.9474%2049.2535%2027.3636%2048.6697%2027.3636%2047.9504V33.5336C27.3636%2032.8716%2027.8575%2032.3204%2028.5156%2032.2461C30.2839%2032.0493%2031.8762%2031.3391%2033.5051%2030.3904C35.848%2029.185%2038.922%2029.615%2040.8232%2031.3964L41.6272%2032.1692L36.4058%2037.2658C35.0075%2038.6628%2034.7847%2040.8716%2035.8871%2042.3976C36.5647%2043.3398%2037.7909%2044.0383%2039.0719%2044.0383C40.1052%2044.0383%2041.0969%2043.6317%2041.8136%2042.9137L43.0736%2041.7083V41.7096ZM53.3654%2030.3904C51.1632%2029.2892%2048.4163%2029.5759%2046.4486%2031.1045L38.2353%2039.1215C37.7518%2039.6063%2037.6424%2040.3817%2037.9994%2040.8769C38.234%2041.2026%2038.5741%2041.3981%2038.9624%2041.4307C39.3468%2041.4633%2039.7195%2041.3238%2039.9892%2041.0528L44.7038%2036.5843C45.9404%2035.4101%2047.7322%2037.2841%2046.506%2038.4673L44.967%2039.8969L56.1644%2049.2548H57.3333C58.0526%2049.2548%2058.6364%2048.671%2058.6364%2047.9517V33.4893C58.6364%2032.8507%2058.1699%2032.323%2057.5405%2032.2096C55.3331%2031.8108%2053.3641%2030.3917%2053.3641%2030.3917L53.3654%2030.3904Z'%20fill='%2353AEE2'/%3e%3c/svg%3e",V=l=>(M("data-v-af9b5d89"),l=l(),B(),l),X2=V(()=>e("h2",{class:"text-nowrap text-lg pl-10 pt-5"}," Composição das vendas ",-1)),G2={class:"composition__sales"},K2={class:"composition"},Q2=["src"],U2=V(()=>e("div",{class:"type"},[e("span",null,"Link Dedicado")],-1)),W2={class:"value"},Y2=V(()=>e("div",{class:"percent"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},[e("path",{d:"M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"})]),e("span",null,"00,00%")],-1)),e0={class:"composition"},t0=["src"],s0=V(()=>e("div",{class:"type"},[e("span",null,"Empresarial")],-1)),a0={class:"value"},l0=V(()=>e("div",{class:"percent"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"512",height:"512"},[e("path",{d:"M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"})]),e("span",null,"00,00%")],-1)),o0=$({__name:"SalesCard",props:{data:{}},emits:["viewSales"],setup(l,{emit:m}){const o=l.data,p=m,d=()=>{p("viewSales")};return(g,v)=>(r(),u("div",null,[e("div",{class:"relative flex flex-col"},[X2,e("button",{class:"absolute top-5 min-[1600px]:right-16 md:right-5 bg-age-blue text-white py-2 px-4 rounded pr-4",onClick:d},"Visualizar")]),e("div",G2,[e("div",K2,[e("img",{src:s(T2),alt:""},null,8,Q2),U2,e("div",W2,[e("span",null,i(s(o).contracts.dedicated),1),Y2])]),e("div",e0,[e("img",{src:s(q2),alt:""},null,8,t0),s0,e("div",a0,[e("span",null,i(s(o).contracts.business),1),l0])])])]))}}),i0=y(o0,[["__scopeId","data-v-af9b5d89"]]),_=l=>(M("data-v-21287af3"),l=l(),B(),l),n0={class:"flex flex-col justify-between"},c0=_(()=>e("div",{class:"flex flex-col pl-10 pt-5"},[e("h2",{class:"text-xl"},"Níveis de comissionamento vigente")],-1)),d0={id:"links-dedicados",class:"my-5"},r0=_(()=>e("h4",{class:"min-[1600px]:text-xl text-lg flex flex-col pl-10 pb-4"},"Links dedicados",-1)),u0={class:"max-w-full min-[1600px]:h-24 h-16 mx-auto"},p0={class:"flex pb-1"},_0=_(()=>e("div",{class:"flex-1"},null,-1)),v0={class:"flex-1"},h0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 40% ",-1)),x0=[h0],m0={class:"w-1/6 align-center items-center align-middle content-center flex"},C0={class:"w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1"},g0={class:"flex-1"},f0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 50% ",-1)),b0=[f0],w0={class:"w-1/6 align-center items-center align-middle content-center flex"},$0={class:"w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1"},y0={class:"flex-1"},F0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 60% ",-1)),L0=[F0],M0={class:"w-1/6 align-center items-center align-middle content-center flex"},B0={class:"w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1"},E0={class:"flex-1"},V0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 70% ",-1)),k0=[V0],H0=_(()=>e("div",{class:"flex-1"},null,-1)),S0=N('<div class="flex text-xs content-center text-center" data-v-21287af3><div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col" data-v-21287af3><span data-v-21287af3>1 à 2 links dedicados</span></div><div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col" data-v-21287af3><span data-v-21287af3>3 à 4 links dedicados</span></div><div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col" data-v-21287af3><span data-v-21287af3>5 à 9 links dedicados</span></div><div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col" data-v-21287af3><span data-v-21287af3>10 ou mais links dedicados</span></div></div>',1),D0={id:"links-empresariais",class:"my-5"},Z0=_(()=>e("h4",{class:"min-[1600px]:text-xl text-lg flex flex-col pl-10 pb-4"},"Link empresariais",-1)),A0={class:"max-w-full min-[1600px]:h-24 h-16 mx-auto pb-4"},z0={class:"flex pb-1"},R0=_(()=>e("div",{class:"flex-1"},null,-1)),I0={class:"flex-1"},O0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 30% ",-1)),j0=[O0],P0={class:"w-1/6 align-center items-center align-middle content-center flex"},N0={class:"w-full bg-age-lightOrange rounded items-center align-middle align-center flex-1"},J0={class:"flex-1"},q0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 50% ",-1)),T0=[q0],X0={class:"w-1/6 align-center items-center align-middle content-center flex"},G0={class:"w-full bg-age-lightOrange rounded items-center align-middle align-center flex-1"},K0={class:"flex-1"},Q0=_(()=>e("span",{class:"text-white text-center min-[1600px]:text-2xl text-xl w-full"}," 60% ",-1)),U0=[Q0],W0=_(()=>e("div",{class:"flex-1"},null,-1)),Y0=_(()=>e("div",{class:"flex text-xs content-center text-center justify-evenly px-10"},[e("div",{class:"w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col"},[e("span",null,"1 à 10 empresariais")]),e("div",{class:"w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col"},[e("span",null,"11 à 24 empresariais")]),e("div",{class:"w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col"},[e("span",null,"25 ou mais empresariais")])],-1)),ee=$({__name:"CommissionsOnlineCard",props:{data:{}},setup(l){const a=l.data;return(o,p)=>(r(),u("div",n0,[c0,e("div",d0,[r0,e("div",u0,[e("div",p0,[_0,e("div",v0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-blue":s(a).contracts.dedicated>=1,"bg-age-lightBlue":s(a).contracts.dedicated<1}])},x0,2)]),e("div",m0,[e("div",C0,[e("div",{class:"bg-age-blue leading-none py-1 rounded",style:F({width:(Math.min(Math.max(s(a).contracts.dedicated,1),3)-1)*50+"%"})},null,4)])]),e("div",g0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-blue":s(a).contracts.dedicated>=3,"bg-age-lightBlue":s(a).contracts.dedicated<3}])},b0,2)]),e("div",w0,[e("div",$0,[e("div",{class:"bg-age-blue leading-none py-1 rounded",style:F({width:(Math.min(Math.max(s(a).contracts.dedicated,3),5)-3)*50+"%"})},null,4)])]),e("div",y0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-blue":s(a).contracts.dedicated>=5,"bg-age-lightBlue":s(a).contracts.dedicated<5}])},L0,2)]),e("div",M0,[e("div",B0,[e("div",{class:"bg-age-blue leading-none py-1 rounded",style:F({width:(Math.min(Math.max(s(a).contracts.dedicated,5),10)-5)*20+"%"})},null,4)])]),e("div",E0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-blue":s(a).contracts.dedicated>=10,"bg-age-lightBlue":s(a).contracts.dedicated<10}])},k0,2)]),H0])]),S0]),e("div",D0,[Z0,e("div",A0,[e("div",z0,[R0,e("div",I0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-orange":s(a).contracts.business>=1,"bg-age-lightOrange":s(a).contracts.business<1}])},j0,2)]),e("div",P0,[e("div",N0,[e("div",{class:"bg-age-orange leading-none py-1 rounded",style:F({width:(Math.min(Math.max(s(a).contracts.business,1),11)-1)*10+"%"})},null,4)])]),e("div",J0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-orange":s(a).contracts.business>=11,"bg-age-lightOrange":s(a).contracts.business<11}])},T0,2)]),e("div",X0,[e("div",G0,[e("div",{class:"bg-age-orange leading-none py-1 rounded",style:F({width:(Math.min(Math.max(s(a).contracts.business,11),25)-11)*7.1+"%"})},null,4)])]),e("div",K0,[e("div",{class:b(["min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center",{"bg-age-orange":s(a).contracts.business>=25,"bg-age-lightOrange":s(a).contracts.business<25}])},U0,2)]),W0])]),Y0])]))}}),te=y(ee,[["__scopeId","data-v-21287af3"]]),se="/assets/coming-soon-CwsquHJg.png",k=l=>(M("data-v-26b3efa4"),l=l(),B(),l),ae={class:"relative"},le={class:"flex flex-col justify-around"},oe=k(()=>e("div",{class:"flex flex-col pl-10 pt-5"},[e("h2",{class:"text-nowrap text-lg"}," Contagem de pagamentos ")],-1)),ie={class:"flex flex-row justify-between"},ne={id:"chart"},ce={class:"items__container flex flex-col gap-2 md:justify-center md:w-3/5 text-nowrap min-[1600px]:w-3/6"},de={class:"items__composition"},re=k(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#FF8B3D"}}),e("span",null,"Pago")],-1)),ue={class:"composition"},pe={class:"items__composition flex"},_e=k(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#53AEE2"}}),e("span",null,"A ser pago")],-1)),ve={class:"composition"},he={class:"items__composition flex"},xe=k(()=>e("div",{class:"item"},[e("div",{style:{"background-color":"#FFD8BE"}}),e("span",null,"Previsão de ganhos")],-1)),me={class:"composition"},Ce=k(()=>e("div",{class:"absolute bg-[#333] opacity-35 h-full w-full top-0 left-0 rounded-large"},null,-1)),ge={class:"flex justify-center items-center absolute h-full w-full top-0 left-0"},fe=["src"],be=$({__name:"PorcentageCard",props:{data:{}},setup(l){const a=l.data,o=n([0]),p=n([0]),d=n([1,2,3]),g=n({chart:{width:200,height:200,type:"radialBar"},colors:["#53AEE2"],plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{show:!0,value:{show:!1}}}}}),v=n({chart:{width:200,height:200,type:"radialBar"},colors:["#FF8B3D"],plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{show:!0,value:{show:!1}}}}}),t=n({chart:{height:"auto",width:"auto",type:"donut",offsetX:-20},labels:["Pago","A ser pago","Previsão de ganhos"],colors:["#FF8B3D","#53AEE2","#FFD8BE"],dataLabels:{enabled:!1},legend:{show:!1},tooltip:{enabled:!1},plotOptions:{pie:{startAngle:-360,endAngle:0,expandOnClick:!1,donut:{size:"80%"}}},color:["#53AEE2","#FF8B3D","#FFD8BE"],stroke:{curve:"straight",width:0},responive:{brakpoints:1600,options:{chart:{width:200}}}});return A(()=>{v.value.labels=[a.percentInvoiceBusiness*100+"%"],p.value=[a.percentInvoiceBusiness*100],g.value.labels=[a.percentInvoiceDedicated*100+"%"],o.value=[parseFloat(a.percentInvoiceDedicated)*100]}),(C,H)=>{const S=P("apexchart");return r(),u("div",ae,[e("div",le,[oe,e("div",ie,[e("div",ne,[w(S,{type:"donut",options:t.value,series:d.value},null,8,["options","series"])]),e("div",ce,[e("div",de,[re,e("div",ue,[e("span",null,"R$ "+i(d.value[0].toFixed(2)),1)])]),e("div",pe,[_e,e("div",ve,[e("span",null,"R$ "+i(d.value[1].toFixed(2)),1)])]),e("div",he,[xe,e("div",me,[e("span",null,"R$ "+i(d.value[2].toFixed(2)),1)])])])])]),Ce,e("div",ge,[e("img",{src:s(se),class:"w-2/12"},null,8,fe)])])}}}),we=y(be,[["__scopeId","data-v-26b3efa4"]]),$e={class:"table"},ye=N('<div class="header" data-v-108186d1><div class="row" data-v-108186d1><div class="item item1" style="text-align:left;" data-v-108186d1>nome</div><div class="item" style="text-align:center;" data-v-108186d1>Status</div><div class="item" data-v-108186d1>valor</div></div></div>',1),Fe={class:"body"},Le={class:"item item1",style:{"text-align":"left"}},Me={class:"item"},Be={class:"item"},Ee=$({__name:"ListExtracts",props:{seller:Object},emits:["return"],setup(l,{emit:m}){n(l.seller);const o=m,p=()=>{o("return")},d=n([{title:"teste",status:"pago",valor:400},{title:"teste2",status:"A ser pago",valor:700},{title:"teste3",status:"Pendente",valor:300}]);return(g,v)=>(r(),u("div",null,[e("div",{class:"return"},[e("button",{onClick:p}," Voltar ")]),e("div",$e,[ye,e("div",Fe,[(r(!0),u(Z,null,z(d.value,(t,c)=>(r(),u("div",{class:"row",key:c},[e("div",Le,i(t.title),1),e("div",Me,[e("span",{class:b(["badge",{"badge-success":t.status==="pago","badge-progress":t.status==="A ser pago","badge-cancel":t.status==="Pendente"}])},i(t.status),3)]),e("div",Be," R$ "+i(t.valor),1)]))),128))])])]))}}),Ve=y(Ee,[["__scopeId","data-v-108186d1"]]),ke={class:"relative"},He={key:0,class:"return absolute z-10 right-0 -top-24"},Se={class:"details__container h-screen flex flex-col overflow-hidden"},De={key:0,class:"options_extract"},Ze=e("span",null,"Mês de pagamento",-1),Ae=["disabled"],ze=["value"],Re={key:0,class:"flex-grow grid grid-cols-3 grid-rows-2 gap-4 h-4/5"},Ie={key:2,class:"alert"},Oe=e("h1",null," Nenhuma venda registrada no período selecionado, escolha outro período. ",-1),je=[Oe],Je=$({__name:"DetailsSellerComponent",setup(l){const m=()=>{D.push("/ageCommissiona/b2b/financeiro"),c.value="list"},a=n("2024-01-01"),o=n(!1),p=n([{label:"Março de 2024",value:"2024-01-01",refer:"Janeiro de 2024"},{label:"Abril de 2024",value:"2024-02-01",refer:"Fevereiro de 2024"},{label:"Maio de 2024",value:"2024-03-01",refer:"Março de 2024"},{label:"Junho de 2024",value:"2024-04-01",refer:"Abril de 2024"},{label:"Julho de 2024",value:"2024-05-01",refer:"Maio de 2024"},{label:"Agosto de 2024",value:"2024-06-01",refer:"Junho de 2024"}]),d=G(),g=K(),v=()=>{const h=p.value.find(x=>x.value===a.value);H.value=h.refer},t=n({}),c=n(""),C=n(!1),H=n(""),S=async()=>{await g.setInfoPage({title:"Detalhes do Executivo",subtitle:"Vendas, meta, comissionamento, contratos e faturas vinculadas"}),c.value="details"},R=()=>{t.value||(d.removeInfo(),D.push("/home"))},I=()=>{o.value=!0,C.value=!1,Y({method:"get",url:"agerv/b2b/commission/financial/builder/seller",headers:{"Content-Type":"application/json"},params:{period:a.value}}).then(h=>{v(),t.value=h.data[0],o.value=!1,C.value=!0,S(),R()}).catch(h=>{(h.response.status===404||h.response.status===401||h.response.status===500)&&D.push("/home"),R()})},O=n(!1),J=async()=>{const h=await d.getInfo();Object.keys(h.dataSeller).length<=0?(v(),I()):(t.value=h.dataSeller,H.value=h.periodRefer,O.value=!0,S()),o.value=!1,C.value=!0},D=e2(),q=Q(()=>D.currentRoute.value);return A(J),(h,x)=>(r(),u("div",ke,[c.value=="details"&&q.value.path!=="/ageCommissiona/b2b/dashboard/executivo"?(r(),u("div",He,[e("button",{onClick:m},"Voltar")])):L("",!0),e("div",Se,[c.value==="details"&&!O.value?(r(),u("div",De,[Ze,U(e("select",{onChange:I,"onUpdate:modelValue":x[0]||(x[0]=f=>a.value=f),disabled:o.value},[(r(!0),u(Z,null,z(p.value,f=>(r(),u("option",{value:f.value,key:f.value},i(f.label),9,ze))),128))],40,Ae),[[W,a.value]])])):L("",!0),t.value?(r(),u(Z,{key:1},[c.value=="details"&&C.value?(r(),u("div",Re,[w(y2,{data:t.value,periodRefer:H.value,class:"bg-white p-4 rounded-large"},null,8,["data","periodRefer"]),w(J2,{data:t.value,class:"bg-white p-4 rounded-large",onViewExtract:x[1]||(x[1]=f=>c.value="extract")},null,8,["data"]),w(i0,{data:t.value,page:c.value,onViewSales:x[2]||(x[2]=f=>c.value="listSales"),class:"bg-white p-4 rounded-large"},null,8,["data","page"]),w(te,{data:t.value,class:"bg-white p-4 rounded-large col-span-2"},null,8,["data"]),w(we,{data:t.value,class:"bg-white p-4 rounded-large"},null,8,["data"])])):L("",!0),c.value=="listSales"?(r(),j(i2,{key:1,onReturn:x[3]||(x[3]=f=>c.value="details"),dataList:t.value},null,8,["dataList"])):L("",!0),c.value=="extract"?(r(),j(Ve,{key:2,onReturn:x[4]||(x[4]=f=>c.value="details"),data:t.value},null,8,["data"])):L("",!0)],64)):(r(),u("div",Ie,je))])]))}});export{Je as default};
