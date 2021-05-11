(this["webpackJsonppolygon-faucet-frontend"]=this["webpackJsonppolygon-faucet-frontend"]||[]).push([[0],{259:function(e){e.exports=JSON.parse('{"homepage":"https://matic.supply","name":"polygon-faucet-frontend","version":"0.1.0","private":true,"dependencies":{"@hcaptcha/react-hcaptcha":"^0.3.6","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","axios":"^0.21.1","gh-pages":"^3.1.0","react":"^17.0.2","react-accessible-accordion":"^3.3.4","react-dom":"^17.0.2","react-global-configuration":"^1.4.1","react-hcaptcha":"^0.1.1","react-markdown":"^6.0.1","react-scripts":"4.0.3","react-toastify":"^7.0.4","web-vitals":"^1.0.1","web3":"^1.3.5"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},263:function(e){e.exports=JSON.parse('{"apiurl":"https://backend.matic.supply:3000","explorer":"https://explorer-mainnet.maticvigil.com","maxAmount":1000000000000000,"hcaptchasitekey":"d712e7c4-b981-4761-bb8c-c7af95d016dd"}')},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},382:function(e,t,n){},396:function(e,t){},419:function(e,t){},421:function(e,t){},497:function(e,t){},499:function(e,t){},531:function(e,t){},536:function(e,t){},538:function(e,t){},545:function(e,t){},558:function(e,t){},659:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(90),r=n.n(c),s=(n(271),n(31)),i=n.p+"static/media/logo.57d8ffc7.svg",l=(n(272),n(259)),u=(n(273),n(7));var h=function(e){var t=e.text,n=e.loadingText,o=e.color,c=e.disabled,r=e.hidden,i=e.onClick,l=Object(a.useState)(!1),h=Object(s.a)(l,2),d=h[0],p=h[1],b=Object(a.useCallback)((function(){p(!0),i().then((function(){p(!1)}))}),[i]);return Object(u.jsx)("button",{className:"BackupButton",disabled:d|c,onClick:d?null:b,style:{margin:"10px",backgroundColor:o,display:!r||"none"},children:d?n||"Loading\u2026":t})},d=n(20),p=n(91),b=n.n(p);n(382);function f(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(u.jsxs)(d.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0,onChange:function(e){if(e.length>n.length){var t=e[e.length-1],a=document.getElementById("accordion__panel-".concat(t)).getBoundingClientRect().bottom;a>window.innerHeight&&window.scrollBy(0,a-window.innerHeight)}o(e)},children:[Object(u.jsxs)(d.b,{children:[Object(u.jsx)(d.d,{children:Object(u.jsx)(d.c,{children:"What is a Faucet ?"})}),Object(u.jsx)(d.e,{children:Object(u.jsx)(b.a,{className:"Explanations",children:"A `Faucet` is a tool that provides a small amount of funds to start using a cryptocurrency without having to buy some. \n    It's often a shity website with plenty of adds that will send you funds half the time, only after asking you to input your email to send you spam later.  \n    `Polygon` had none for its mainnet, so here's one, without the crap you usually get on typical faucets"})})]}),Object(u.jsxs)(d.b,{children:[Object(u.jsx)(d.d,{children:Object(u.jsx)(d.c,{children:"How much can I get ?"})}),Object(u.jsx)(d.e,{children:Object(u.jsx)(b.a,{className:"Explanations",children:"`Plenty enough!`  \n    Transactions on Polygon network are dirt cheap. Forget Ethereum, forget BSC, we're talking about fractions of a cent for most transactions.  \n    So this faucet will only send you `0.001 MATIC` - which is enough to deposit some fund on Aave and [earn fresh MATIC](https://medium.com/stakingbits/guide-to-yield-farming-with-aave-on-polygon-matic-network-a03bd2154275), for instance  \n    With `0.001 MATIC`, you can do `100` basic transactions on Polygon network ! You can even deposit or withdraw funds on `Aave`, even though it is a pretty expensive transaction (`50$+` on Ethereum, `1$+` on Binance Smart Chain). \n    The goal of this faucet is not to make you rich but just to make the onboarding to Polygon smoother.  \n    You can use it up to 3 times a day, for the most clumsy of us \ud83d\ude44  \n    Feel free to send some spare change at `0x8C5a6C767Ee7084a8C656Acd457Da9561163aE7E` to replenish the faucet once you're rich \ud83e\udd84"})})]}),Object(u.jsxs)(d.b,{children:[Object(u.jsx)(d.d,{children:Object(u.jsx)(d.c,{children:"How to earn (much) more MATIC ?"})}),Object(u.jsx)(d.e,{children:Object(u.jsx)(b.a,{className:"Explanations",children:"* First bring your assets from Ethereum to Polygon through [the bridge](https://wallet.matic.network/bridge/)  \n    Then there's a variety of things you can do:  \n    * Swapping assets on [QuickSwap](https://quickswap.exchange/) or [ComethSwap](https://swap.cometh.io/#/swap), the equivalents of `Uniswap` on Polygon  \n    [Paraswap](https://paraswap.io/#/?network=polygon) is also available and will route your swaps through the cheapest path.  \n    * Depositing your assets on [Aave](https://app.aave.com/dashboard) or [Curve](https://polygon.curve.fi/) to farm some fresh MATIC  \n    * Enjoy the same functionalities Ethereum has, only with less friction \ud83e\udd84  \n    "})})]})]})}var g=n(19),m=n.n(g),j=n(72),x=n(6),w=n(8),y=n(260),v=n.n(y),O=function(){function e(){Object(x.a)(this,e),this.connected=!1,this.busy=!1,this.web3Provider=null,this.web3=null,this.balance=0,this.network=0}return Object(w.a)(e,[{key:"connect",value:function(){var e=Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connected){e.next=20;break}if(!window.ethereum){e.next=20;break}return this.web3Provider=window.ethereum,e.prev=3,e.next=6,this.web3Provider.request({method:"eth_requestAccounts",params:[]});case 6:this.account=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("User denied account access: ".concat(e.t0));case 12:return this.web3=new v.a(this.web3Provider),e.next=15,this.web3.eth.net.getId();case 15:if(this.network=e.sent,137!=this.network){e.next=20;break}return this.connected=!0,console.log("connected: ".concat(this.account," ").concat(typeof this.account)),e.abrupt("return",this.account);case 20:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFormattedBalance",value:function(e,t){var n=this.web3.utils.toBN(e),a=this.web3.utils.toBN(Math.pow(10,t)),o=n.div(a).toString(),c=n.mod(a).toString();return o+"."+(c=c.padStart(t,"0"))+" MATIC"}},{key:"getBalance",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,n,a=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],n=18,e.next=4,this.web3.eth.getBalance(String(this.account));case 4:return this.balance=e.sent,this.formatted_balance=this.getFormattedBalance(this.balance,n),e.abrupt("return",t?this.formatted_balance:this.balance);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=n(262),C=n.n(k),B=n(32),A=n.n(B);function S(){return(S=Object(j.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),a=A.a.get("apiurl")+"/rpc-mainnet/matic/"+t+"/"+n,console.log("Sending request..."),e.next=5,C.a.get(a).then((function(e){if(200===e.status)return A.a.get("explorer")+"/tx/"+e.data.hash}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e,t){return S.apply(this,arguments)},P=n(73),T=(n(657),n(263)),E=n(264),F=n.n(E);A.a.set(T);var I=new O;var M=function(){var e=Object(a.useState)("Not connected"),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),r=Object(s.a)(c,2),d=r[0],p=r[1],b=Object(a.useState)(""),g=Object(s.a)(b,2),m=g[0],j=g[1],x=Object(a.useState)(""),w=Object(s.a)(x,2),y=w[0],v=w[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(P.a,{hideProgressBar:!0}),Object(u.jsxs)("div",{className:"App-banner",children:[Object(u.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{className:"App-title",children:"Polygon Faucet"})]}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsxs)("div",{className:"Commands",children:[Object(u.jsx)(h,{text:"Connect",loadingText:"Loading...",color:"#8248e5",hidden:"Not connected"!==n,onClick:function(){return I.connect().then((function(e){e?(o(e),I.getBalance().then((function(e){p(e)}))):P.b.error("Wrong network: Please select Matic/Polygon network first")}))}}),Object(u.jsx)(h,{text:Number(d)>=A.a.get("maxAmount")?"Balance too high":"Receive",loadingText:"Sending...",color:"#8248e5",disabled:Number(d)>=A.a.get("maxAmount")||""===y,hidden:"Not connected"===n,onClick:function(){return N(n,y).then((function(e){P.b.success("Transaction sent!"),j(e),p(I.getFormattedBalance(Number(I.balance+A.a.get("maxAmount")),18)),v("")})).catch((function(e){P.b.error("".concat(e.response.data.err.message," \ud83d\ude45"))}))}})]}),Object(u.jsx)("form",{id:"receive",action:"",method:"POST",children:Object(u.jsx)(F.a,{theme:"dark",sitekey:A.a.get("hcaptchasitekey"),onVerify:function(e,t){v(e)}})}),Object(u.jsx)("p",{hidden:"Not connected"===n,children:n}),Object(u.jsx)("p",{hidden:"Not connected"===n,children:"Your balance: "+String(d)}),Object(u.jsx)("a",{hidden:""===m,target:"_blank",rel:"noopener noreferrer",href:m,children:m}),Object(u.jsx)("br",{}),Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"App-footer",children:[Object(u.jsxs)("p",{children:["A modest Web App built by ",Object(u.jsx)("a",{href:"https://github.com/TamtamHero",target:"_blank",rel:"noopener noreferrer",children:"TamtamHero"})," with React, hosted on Github. v","".concat(l.version),"."," ",Object(u.jsx)("a",{href:"https://github.com/TamtamHero/polygon-faucet/",children:"PRs welcomed and appreciated \u2728"})]}),Object(u.jsxs)("p",{children:["Ethereum/Polygon donation: ",Object(u.jsx)("a",{h:!0,href:"https://explorer-mainnet.maticvigil.com/address/0x97d5CeBb87cBeB641c0C17C2d4d29339CDCF91D2/transactions",target:"_blanc",rel:"noopener noreferrer",children:"0x97d5CeBb87cBeB641c0C17C2d4d29339CDCF91D2"})]})]})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,663)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),_()}},[[659,1,2]]]);
//# sourceMappingURL=main.2c4313fc.chunk.js.map