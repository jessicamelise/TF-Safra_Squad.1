(this.webpackJsonprendimentus=this.webpackJsonprendimentus||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/card-blue.f883bf0c.svg"},,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo-safra-gold.a5ece4f7.svg"},function(e,t,a){e.exports=a.p+"static/media/logo-safra.9c9f49e3.svg"},function(e,t,a){e.exports=a.p+"static/media/logout.4f5acf35.svg"},function(e,t,a){e.exports=a.p+"static/media/back.18d452f5.svg"},function(e,t,a){e.exports=a.p+"static/media/invoice.c7fb71cb.svg"},function(e,t,a){e.exports=a.p+"static/media/card.19b994dd.svg"},function(e,t,a){e.exports=a.p+"static/media/contact.6b01b095.svg"},function(e,t,a){e.exports=a.p+"static/media/invoice-blue.f55e34d1.svg"},function(e,t,a){e.exports=a.p+"static/media/contact-blue.c8b1fdf3.svg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),s=(a(36),a(37),a(8)),l=a(1),u=function(e){return c.a.createElement("input",{type:e.type,className:e.className,onChange:e.onChange,name:e.name,value:e.value})},m=(a(38),function(e){var t=Object(l.f)();return c.a.createElement("form",{className:"form-login"},c.a.createElement("label",{className:"label-login"},c.a.createElement(u,{className:"input-login",onChange:e.onChangeLogin})),c.a.createElement("button",{className:"button-login",onClick:function(){t.push("/profile")}},"Consultar"))}),i=a(22),f=a.n(i),p=(a(44),function(){return c.a.createElement("main",{className:"main-home"},c.a.createElement("div",{className:"container-home"},c.a.createElement("img",{src:f.a,alt:"",className:"logo-home"}),c.a.createElement("p",{className:"gold"},"Rendimentus"),c.a.createElement("section",{className:"section-cpf"},c.a.createElement("p",{className:"cpf-cnpj"},"CPF/CNPJ")),c.a.createElement(m,null)))}),d=a(3),b=(a(19),function(e){var t=Object(l.f)();return c.a.createElement("div",{className:"card",onClick:function(){t.push(e.onClick)}},c.a.createElement("h2",{className:"bank"},e.bankNumber," / ",e.bankName),c.a.createElement("div",{className:"card-account"},c.a.createElement("p",{className:"first-p"},"Ag: ",e.agency),c.a.createElement("p",null,"CC: ",e.accountNumber)),c.a.createElement("div",{className:"card-balance"},c.a.createElement("p",{className:"first-p"},c.a.createElement("i",{className:"fa fa-money"})," ",e.balance.toFixed(2)),c.a.createElement("p",{className:"first-p"},c.a.createElement("i",{className:"fa fa-credit-card"})," ",e.creditExpenses.toFixed(2))))}),E=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"bank"},e.bankNumber," / ",e.bankName),c.a.createElement("div",{className:"card-account"},c.a.createElement("p",{className:"agency"},"Ag: ",e.agency),c.a.createElement("p",null,"CC: ",e.accountNumber)),c.a.createElement("p",null,"Produto: ",e.product))},v=function(e){return c.a.createElement("div",{className:"creditOffers",onClick:function(){return e.onClick()}},c.a.createElement("div",{className:"container-warn-icon"},c.a.createElement("i",{className:"fa fa-exclamation-triangle"})),c.a.createElement("div",{className:"container-warn-text"},c.a.createElement("p",null,"Temos propostas de cr\xe9dito para voc\xea. Clique Aqui!")))},h=function(e){return c.a.createElement("img",{src:e.src,alt:e.alt,className:e.className})},N=a(23),g=a.n(N),x=a(24),k=a.n(x),j=a(25),O=a.n(j),y=(a(45),a(4)),C=a.n(y),w=a(9),F=function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),u=s[0],m=s[1],i="/profile"===Object(l.g)().pathname,f=Object(l.f)();Object(n.useEffect)((function(){F().then((function(e){var t=e.client.map((function(e){return e.name})).reduce((function(e,t){return e+="<p>".concat(t.name,"</p>")}));t=t.split(" ")[0],r(t);var a=e.client.map((function(e){return e.cpf})).reduce((function(e,t){return e+="<p>".concat(t.cpf,"</p>")}));m(a)}))}),[]);var p=function(e){f.push(e)};return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"images-header"},c.a.createElement("div",{className:i?"visibility":"back",onClick:function(){return p("/profile")}},c.a.createElement(h,{src:O.a,alt:"back",className:"img-back"})),c.a.createElement("div",{className:"logo"},c.a.createElement(h,{src:g.a,alt:"logo",className:"img-logo"})),c.a.createElement("div",{className:"logout",onClick:function(){return p("/")}},c.a.createElement(h,{src:k.a,alt:"logout",className:"logout-image"}))),c.a.createElement("nav",null,c.a.createElement("div",{className:"client-info"},c.a.createElement("p",{id:"client-name",className:"client-name"},"Ol\xe1, ",a,"!"),c.a.createElement("p",{className:"client-account"},"CPF: ",u))))},I=(a(47),function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()),S=function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),u=s[0],m=s[1],i=Object(l.f)();Object(n.useEffect)((function(){S().then((function(e){return r(e.banks)}))}),[]),Object(n.useEffect)((function(){I().then((function(e){return m(e.myProducts)}))}),[]);var f,p,h=function(e){return e.reduce((function(e,t){return e+t.accounts[0].balance}),0)},N=function(e){var t=[],a=0;return e.forEach((function(e){var a=e.accounts[0].accountExtract;t.push(a)})),a+=t.reduce((function(e,t){return e+t.value}),0)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("section",{className:"cards-products"},(f=h(a),p=N(a),f-p<800?c.a.createElement(v,{onClick:function(){return e="/offers",void i.push(e);var e}}):c.a.createElement(c.a.Fragment,null)),c.a.createElement("h3",null,"Meus Produtos"),u.map((function(e,t){return c.a.createElement(E,{key:t,agency:e.client.agency,accountNumber:e.client.accountNumber,bankNumber:e.client.bankNumber,bankName:e.client.bankName,product:e.code})}))),c.a.createElement("section",{className:"cards-profile"},c.a.createElement("h3",null,"Minhas Contas"),a.map((function(e,t){return c.a.createElement(b,{key:t,bankNumber:e.bankNumber,bankName:e.name,agency:e.accounts[0].agency,accountNumber:e.accounts[0].accountNumber,balance:e.accounts[0].balance,creditExpenses:e.accounts[0].creditExpenses,onClick:"/statement/".concat(e.name),accountManager:e.accounts[0].accountManager.email})})).reverse()),c.a.createElement("footer",{className:"profile-footer"},c.a.createElement("p",null,"Saldo das contas: ",h(a).toFixed(2)),c.a.createElement("p",null,"Fatura dos cart\xf5es: ",N(a).toFixed(2)),c.a.createElement("p",null,"Total: ",(h(a)-N(a)).toFixed(2))))},W=(a(14),function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()),B=a(26),A=a.n(B),P=a(27),R=a.n(P),$=a(28),J=a.n($),_=a(29),q=a.n(_),V=a(12),z=a.n(V),G=a(30),L=a.n(G),D=(a(48),function(){var e=Object(l.f)(),t=Object(l.g)(),a=function(e){return t.pathname===e},n=function(t){e.push(t)};return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{onClick:function(){return n("/statement/".concat(t.pathname.split("/")[2]))},className:a("/statement/".concat(t.pathname.split("/")[2]))?"footer-background-white div-footer":"footer-background-blue div-footer"},c.a.createElement(h,{className:"footer-images",src:a("/statement/".concat(t.pathname.split("/")[2]))?q.a:A.a})),c.a.createElement("div",{onClick:function(){return n("/invoice/".concat(t.pathname.split("/")[2]))},className:a("/invoice/".concat(t.pathname.split("/")[2]))?"footer-background-white div-footer":"footer-background-blue div-footer"},c.a.createElement(h,{className:"footer-images",src:a("/invoice/".concat(t.pathname.split("/")[2]))?z.a:R.a})),c.a.createElement("div",{onClick:function(){return n("/contact/".concat(t.pathname.split("/")[2]))},className:a("/contact/".concat(t.pathname.split("/")[2]))?"footer-background-white div-footer":"footer-background-blue div-footer"},c.a.createElement(h,{className:"footer-images",src:a("/contact/".concat(t.pathname.split("/")[2]))?L.a:J.a})))}),H=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(l.g)();return Object(n.useEffect)((function(){W().then((function(e){r(e.find((function(e){return e.name===o.pathname.split("/")[2]})).accounts[0].accountExtract)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("h1",{className:"h-extract"},"Extrato"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"div-extract"},a.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("p",{className:"p-extract p-bold"},e.name),c.a.createElement("p",{className:"p-extract span-date-value"},c.a.createElement("span",null,e.date.split("T")[0]),c.a.createElement("span",null,"R$ ",e.value)),c.a.createElement("p",{className:"p-margin"}))})))),c.a.createElement(D,null))},K=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(l.g)(),s=Object(l.f)();Object(n.useEffect)((function(){W().then((function(e){r(e.find((function(e){return e.name===o.pathname.split("/")[2]})).accounts[0].accountExtract)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("h1",{className:"h-extract"},"Fatura"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"div-extract text-center"},c.a.createElement(h,{className:"icon-card",src:V.Card}),c.a.createElement("p",{className:"p-size"},"R$ ",a.reduce((function(e,t){return e+t.value}),0).toFixed(2))),c.a.createElement("div",{className:"div-extract p-margin see-statement"},c.a.createElement("p",{onClick:function(){return e="/statement/".concat(o.pathname.split("/")[2]),void s.push(e);var e}},"Ver Extrato Completo"))),c.a.createElement(D,null))},Q=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),u=s[0],m=s[1],i=Object(l.g)();return Object(n.useEffect)((function(){W().then((function(e){r(e.find((function(e){return e.name===i.pathname.split("/")[2]})).accounts[0].accountManager)}))}),[]),Object(n.useEffect)((function(){W().then((function(e){return m(e.find((function(e){return e.name===i.pathname.split("/")[2]})))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("h1",{className:"h-extract"},"Contato"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"div-extract"},c.a.createElement("h3",{className:"p-margin"},"Central"),c.a.createElement("p",null,"Telefone: ",Object.values(u)[3]),c.a.createElement("h3",{className:"p-margin"},"Gerente"),c.a.createElement("p",{className:"p-extract"},"Nome: ",Object.values(a)[0]),c.a.createElement("p",{className:"p-extract"},"E-mail: ",Object.values(a)[1]),c.a.createElement("p",{className:"p-extract"},"Telefone: ",Object.values(a)[2]))),c.a.createElement(D,null))},U=function(e){return c.a.createElement("div",{className:"card-offers ".concat(e.hasBank),onClick:function(){window.confirm("Voc\xea tem interesse nesse produto?")?alert("Em breve a institui\xe7\xe3o financeira entrar\xe1 em contato com voc\xea!"):alert("cancelado")}},c.a.createElement("div",{className:"title-card-offer"},c.a.createElement("h2",{className:"offers"},e.bankName," "),c.a.createElement("p",{className:"min-tax"},e.minTax)),c.a.createElement("p",null," ",e.offerName),c.a.createElement("div",{className:"offers-account"},c.a.createElement("p",null,e.type),c.a.createElement("p",null,"R$: ",e.value),c.a.createElement("p",null,"Taxa: ",e.rate,"%"),c.a.createElement("p",null,"N\xb0 de parcelas: ",e.maxInstallments)))},X=(a(49),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),l=s[0],u=s[1],m=function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(w.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m().then((function(e){return r(e)}))}),[]),Object(n.useEffect)((function(){i().then((function(e){return u(e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("section",{className:"cards-offers"},function(e,t){var a,n=e.map((function(e){return parseInt(e.bankNumber)}));t.forEach((function(e,a){n.includes(parseInt(e.bank.cod))||(t.splice(a,1),t.push(e))}));var r=0;return t.forEach((function(e,t){0===t&&(a=e.rate),e.rate<a&&(r=t)})),t.map((function(e,t){return n.includes(parseInt(e.bank.cod))&&t===r?c.a.createElement(U,{key:t,minTax:"Menor Taxa!",bankName:e.bank.name,offerName:e.name,value:e.value,type:e.type,rate:e.rate,maxInstallments:e.maxInstallments,hasBank:"bank-border"}):t===r?c.a.createElement(U,{key:t,minTax:"Menor Taxa!",bankName:e.bank.name,offerName:e.name,value:e.value,type:e.type,rate:e.rate,maxInstallments:e.maxInstallments,hasBank:""}):n.includes(parseInt(e.bank.cod))?c.a.createElement(U,{key:t,minTax:"",bankName:e.bank.name,offerName:e.name,value:e.value,type:e.type,rate:e.rate,maxInstallments:e.maxInstallments,hasBank:"bank-border"}):c.a.createElement(U,{key:t,minTax:"",bankName:e.bank.name,offerName:e.name,value:e.value,type:e.type,rate:e.rate,maxInstallments:e.maxInstallments,hasBank:""})}))}(l,a)))});var Y=function(){return c.a.createElement(s.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:p}),c.a.createElement(l.a,{path:"/profile",component:M}),c.a.createElement(l.a,{path:"/statement",component:H}),c.a.createElement(l.a,{path:"/invoice",component:K}),c.a.createElement(l.a,{path:"/contact",component:Q}),c.a.createElement(l.a,{path:"/header",component:T}),c.a.createElement(l.a,{path:"/footer",component:D}),c.a.createElement(l.a,{path:"/offers",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.2ff3e0c3.chunk.js.map