(this.webpackJsonphardrigth=this.webpackJsonphardrigth||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),o=a(7),s=a(3),i=a(5),m=a(4),u=a(19),d=a.n(u);a(90),a(94);d.a.initializeApp({apiKey:"AIzaSyB8DBSvDN_5foTY5A-KV6FL3qVGLaSV90k",authDomain:"hardrigth.firebaseapp.com",databaseURL:"https://hardrigth.firebaseio.com",projectId:"hardrigth",storageBucket:"hardrigth.appspot.com",messagingSenderId:"399727334615",appId:"1:399727334615:web:a3ba6d4792a8621f5acc92"});d.a.firestore();var p=new d.a.auth.GoogleAuthProvider,g=a(56),E=a.n(g),h=a(57),f=a.n(h),b=a(58),v=a.n(b),w=a(59),_=a.n(w),N=a(60),y=a.n(N),L=function(e){var t=e.i,a=[f.a,v.a,_.a,y.a];return c.a.createElement("div",{id:"unit".concat(t),className:"unit",onClick:function(){return function(e){var t=document.querySelector(e);t.classList.add("animate__animated"),t.classList.add("animate__hinge")}("#unit".concat(t))}},c.a.createElement("div",{className:"cell"},c.a.createElement("div",{className:"cell-img"},c.a.createElement("img",{src:a[t],alt:"Tickets"})),c.a.createElement("div",{className:"cell-info"},c.a.createElement("span",null,[200,"320M","320M",320][t]),c.a.createElement("span",null,["tickets","customers","agents","customers"][t]))),c.a.createElement("div",{className:"under-".concat(t)}))},k=function(e){var t=e.content,a=e.id;return c.a.createElement("button",{id:a,className:"general"},t)},S=function(e){var t=e.i;return c.a.createElement("ul",null,c.a.createElement("li",{className:"thead"},["Products","Pricing","Solutions","Demo","Services"][t]),c.a.createElement("li",{className:"tbody"},["Enterprice","Premier Pro","Careers","Support","Pricing"][t]),c.a.createElement("li",{className:"tbody"},["Developers","After Effects","Blog","Contact Us","Customers"][t]),c.a.createElement("li",{className:"tbody"},["iPhone App","Final Cut Pro","Swag Store","Status Page","Sla"][t]))},O=a(26),x=a.n(O),A=a(61),j=a.n(A),C=a(62),I=a.n(C),q=a(63),T=a.n(q),U=a(64),R=a.n(U),P=a(65),D=a.n(P),G=a(21),B=a.n(G),H=a(35),F="[Auth] Login",W="[Auth] Logout",M="[UI] Set Error",Y="[UI] Remove Error",K="[UI] Start loading",V="[UI] Finish loading",J=function(e){return{type:M,payload:e}},Q=function(){return{type:V}},z=a(20),X=a.n(z),Z=function(e,t){return function(a){a({type:K}),d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a($(t.uid,t.displayName)),a(Q())})).catch((function(e){console.log(e),a(Q()),X.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Acept"})}))}},$=function(e,t){return{type:F,payload:{uid:e,displayName:t}}},ee=function(){return{type:W}},te=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return c.a.createElement("footer",null,c.a.createElement("div",{className:"container1"},c.a.createElement("hr",null),c.a.createElement("div",{className:"cont-table-auth"},c.a.createElement("div",{className:"footer-table"},[0,1,2,3,4].map((function(e){return c.a.createElement(S,{key:e,i:e})}))),c.a.createElement("div",{className:"footer-auth"},c.a.createElement("div",null,!e&&c.a.createElement(i.b,{className:"link-login",to:"/auth/login"},c.a.createElement("span",{className:"login"},"Login")),c.a.createElement(i.b,{to:"/auth/register"},c.a.createElement(k,{id:"footer-button",content:"get started"}))))),c.a.createElement("img",{className:"logoi",src:x.a,alt:"Logo"}),c.a.createElement("div",{className:"foot"},c.a.createElement("div",{className:"legals-cont"},c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("a",{href:"#a"},"HardRigth.io, Inc.")),c.a.createElement("span",null,c.a.createElement("a",{href:"#a"},"Terms")),e&&c.a.createElement(i.b,{className:"link-login",to:"/auth/login",onClick:function(){t(function(){var e=Object(H.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signOut();case 2:t(ee());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},c.a.createElement("span",{className:"logout"},"Logout")))),c.a.createElement("div",{className:"social-cont"},c.a.createElement("div",null,c.a.createElement("div",{className:"social"},c.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:j.a,alt:"Facebook"})),c.a.createElement("a",{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:I.a,alt:"Twitter"})),c.a.createElement("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:T.a,alt:"Youtube"})),c.a.createElement("a",{href:"https://pinterest.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:R.a,alt:"Pinteres"})),c.a.createElement("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:D.a,alt:"Linkedin"}))))))))},ae=function(){return window.scrollTo(0,0),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"getahead"},c.a.createElement("img",{className:"animate__animated animate__slideInDown animate__faster",src:E.a,alt:"imgWoman"}),c.a.createElement("div",{className:"gacont animate__animated animate__slideInRight animate__faster"},c.a.createElement("h2",null,"Get ahead of the curve"),c.a.createElement("p",{className:"p1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.")),c.a.createElement("div",{className:"gadata container1 animate__animated animate__slideInLeft animate__faster"},c.a.createElement("h4",null,"Based on data from:"),c.a.createElement("div",{className:"cells container1"},[0,1,2,3].map((function(e){return c.a.createElement(L,{key:e,i:e})}))))),c.a.createElement(te,null))},ne=a(38),ce=a.n(ne),le=a(15),re=a(6),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],l=a[1],r=function(){l(e)},o=function(e){var t=e.target;l(Object(re.a)(Object(re.a)({},c),{},Object(le.a)({},t.name,t.value)))};return[c,o,r]},se=function(){var e=oe({name:"",email:"",phone:"",message:""}),t=Object(s.a)(e,3),a=t[0],n=t[1],l=t[2],r=a.name,o=a.email,i=a.phone,m=a.message;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l()}},c.a.createElement("input",{name:"name",type:"text",placeholder:"Name",maxLength:"40",required:!0,value:r,onChange:n}),c.a.createElement("hr",null),c.a.createElement("input",{name:"email",type:"text",placeholder:"Email",maxLength:"40",required:!0,value:o,onChange:n}),c.a.createElement("hr",null),c.a.createElement("input",{name:"phone",type:"tel",placeholder:"Phone",maxLength:"16",required:!0,value:i,onChange:n}),c.a.createElement("hr",null),c.a.createElement("span",null,"How would you like us to respond?"),c.a.createElement("input",{name:"respond",type:"radio",value:"email"}),c.a.createElement("label",{htmlFor:""},"Email"),c.a.createElement("input",{name:"respond",type:"radio",value:"phone"}),c.a.createElement("label",{htmlFor:""},"Phone"),c.a.createElement("input",{name:"message",type:"text",placeholder:"Message",maxLength:"100",required:!0,value:m,onChange:n}),c.a.createElement("hr",null),c.a.createElement(k,{id:"contact-button",content:"submit"}))},ie=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement("section",{className:"contactus"},c.a.createElement("div",{className:"location"},a&&c.a.createElement("div",{className:"fields animate__animated animate__bounceIn"},c.a.createElement("img",{src:x.a,alt:"H"}),c.a.createElement("span",null,"fields court station road"),c.a.createElement("span",null,"Epworth DN9 1JZ - United Kingdom Company Reg: 8202467"),c.a.createElement("div",{className:"triangulo"})),c.a.createElement("img",{className:"popup",src:ce.a,alt:"O"}),c.a.createElement("img",{className:"popuph",src:ce.a,alt:"O",onClick:function(){l(!a)}})),c.a.createElement("div",{id:"contact"},c.a.createElement("div",null,c.a.createElement("h2",null,"contact us"),c.a.createElement("span",null,"Send us a message"),c.a.createElement(se,null))))},me=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"headcont animate__animated animate__slideInLeft animate__faster"},c.a.createElement("h1",null,"HR software",c.a.createElement("br",null),"that really matters"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."),c.a.createElement(i.b,{to:"/auth/register"},c.a.createElement(k,{id:"header-button",content:"get started"}))))},ue=function(){return window.scrollTo(0,0),c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement(ie,null),c.a.createElement(te,null))},de=a(66),pe=a.n(de),ge=a(67),Ee=a.n(ge),he=a(68),fe=a.n(he),be=a(69),ve=a.n(be),we=function(){var e=Object(m.g)().pathname,t=Object(n.useState)({menuHamburgerShowed:!0}),a=Object(s.a)(t,2),l=a[0],r=a[1],u=l.menuHamburgerShowed,d=Object(o.c)((function(e){return e.auth})).name,p=function(){window.innerWidth<=768&&(document.querySelector(".menu-list").classList.toggle("show-list"),r({menuHamburgerShowed:!u}))},g=function(){var e=document.querySelectorAll(".link-nav-bar");document.querySelectorAll(".navbar")[0].classList.add("changes-nav-bar"),document.querySelector("#nav-button").classList.add("changes-button-nav-bar"),document.querySelector("#logo-blue").classList.add("show-block"),document.querySelector("#logo-white").classList.add("show-none");for(var t=0;t<e.length;t++)e[t].classList.add("changes-text-nav-bar")};return Object(n.useLayoutEffect)((function(){"/products"!==e&&"/"!==e&&g();var t=function(){"/products"!==e&&"/"!==e||(0===window.scrollY&&window.innerWidth>768&&function(){var e=document.querySelectorAll(".link-nav-bar");document.querySelectorAll(".navbar")[0].classList.toggle("changes-nav-bar"),document.querySelector("#nav-button").classList.toggle("changes-button-nav-bar"),document.querySelector("#logo-blue").classList.toggle("show-block"),document.querySelector("#logo-white").classList.toggle("show-none");for(var t=0;t<e.length;t++)e[t].classList.toggle("changes-text-nav-bar")}(),window.scrollY>0&&window.innerWidth>768&&g())};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[e]),c.a.createElement("section",{className:"navbar animate__animated animate__bounceInDown"},c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"logos-cont"},c.a.createElement("img",{id:"logo-white",className:"",src:pe.a,alt:"HARDRIGTH"}),c.a.createElement("img",{id:"logo-blue",className:"show-none",src:Ee.a,alt:"HARDRIGTH"}),u?c.a.createElement("img",{id:"menu-icon",src:fe.a,alt:"Menu",onClick:p}):c.a.createElement("img",{id:"close-icon",src:ve.a,alt:"X",onClick:p})),c.a.createElement("nav",null,c.a.createElement("ul",{className:"menu-list"},c.a.createElement("li",null,c.a.createElement(i.b,{className:"link-nav-bar",to:"/products",onClick:p},"products")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"link-nav-bar",to:"/pricing",onClick:p},"pricing")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"link-nav-bar",to:"/ocult/solutions",onClick:p},"solutions")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"link-nav-bar",to:"/ocult/demo",onClick:p},"demo")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"link-nav-bar",to:"/ocult/services",onClick:p},"services")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/auth/register"},c.a.createElement(k,{id:"nav-button",content:"".concat(d||"get started")})))))))},_e=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,a=oe({email:"nando@gmail.com",password:"123456"}),n=Object(s.a)(a,2),l=n[0],r=n[1],m=l.email,u=l.password;return c.a.createElement("section",{className:"auth__main"},c.a.createElement("div",{className:"auth__box-container"},c.a.createElement("h3",{className:"auth__title"},"Login"),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(Z(m,u))}},c.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:m,onChange:r}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",className:"auth__input",value:u,onChange:r}),c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"Login"),c.a.createElement("div",{className:"auth__social-networks"},c.a.createElement("p",null,"Login With Social Networks"),c.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){d.a.auth().signInWithPopup(p).then((function(t){var a=t.user;e($(a.uid,a.displayName))}))}))}},c.a.createElement("div",{className:"google-icon-wrapper"},c.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),c.a.createElement("p",{className:"btn-text"},c.a.createElement("b",null,"Sign in with google")))),c.a.createElement(i.b,{to:"/auth/register",className:"link"},"Create new account"))))},Ne=a(39),ye=a.n(Ne),Le=function(){var e=Object(o.b)(),t=oe({name:"Hernando",lastname:"Carbonell",email:"nandoe@gmail.com",phone:"333333333",password:"abc123",password2:"abc123"}),a=Object(s.a)(t,2),n=a[0],l=a[1],r=n.name,i=n.lastname,m=n.email,u=n.phone,p=n.password,g=n.password2,E=["text","text","email","tel","password","password"],h=["name","lastname","email","phone","password","password2"],f=[r,i,m,u,p,g],b=function(e){X.a.fire({title:"Error!",text:e,icon:"error",confirmButtonText:"Acept"})},v=function(){return 0===r.trim().length?(e(J("Name is required")),b("Name is required"),!1):0===i.trim().length?(e(J("Last Name is required")),b("Last Name is required"),!1):ye.a.isEmail(m)?ye.a.isNumeric(u)?p!==g||p.length<5?(e(J("Password should be at least 6 characters and match each other")),b("Password should be at least 6 characters and match each other"),!1):(e({type:Y}),!0):(e(J("Unvalid phone format")),b("Unvalid phone format"),!1):(e(J("Unvalid email format")),b("Unvalid email format"),!1)};return c.a.createElement("div",{className:"form-info"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),v()&&e(function(e,t,a){return function(n){d.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(H.a)(B.a.mark((function e(t){var c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:a});case 3:n($(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),X.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Acept"})}))}}(m,p,r))}},["first name","last name","email","phone number","password","confirm password"].map((function(e,t){return c.a.createElement("div",{className:"reg-cont",key:e},c.a.createElement("span",null,e),c.a.createElement("input",{type:E[t],name:h[t],value:f[t],onChange:l}))})),c.a.createElement(k,{id:"get-started-button",content:"get started"})))},ke=function(){return window.scrollTo(0,0),c.a.createElement("section",{className:"getcare animate__animated animate__zoomIn animate__faster"},c.a.createElement("div",{className:"form-box"},c.a.createElement("div",{className:"info-cont"},c.a.createElement("div",null,c.a.createElement("h2",null,"Get Care Now"),c.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum libero sit amet metus commodo lacinia."),c.a.createElement(Le,null)))))},Se=function(){return c.a.createElement("div",null,c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/auth/login",component:_e}),c.a.createElement(m.b,{exact:!0,path:"/auth/register",component:ke}),c.a.createElement(m.a,{to:"/auth/login"})))},Oe=a(27),xe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return c.a.createElement(m.b,Object.assign({},n,{component:function(e){return t?c.a.createElement(m.a,{to:"/"}):c.a.createElement(a,e)}}))},Ae=a(70),je=a.n(Ae),Ce=a(71),Ie=a.n(Ce),qe=a(72),Te=a.n(qe),Ue=a(73),Re=a.n(Ue),Pe=a(74),De=a.n(Pe),Ge=function(e){var t=e.i,a=[Te.a,Re.a,De.a];return c.a.createElement("div",{className:"card-slider animate__animated show-none-card ".concat(0===t&&"slide-selected show-block-card"," ").concat(0===t&&window.innerWidth<=768&&"animate__bounceIn")},c.a.createElement("h3",null,["Learn from our research","Learn from our research","Learn from our research"][t]),c.a.createElement("span",null,["Lorem ipsum dolor","Lorem ipsum dolor","Lorem ipsum dolor"][t]),c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:a[t],alt:"Cuadrado"})),c.a.createElement("span",null,["Read report","Read report","Read report"][t]))},Be=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],l=a[1],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;l(c+e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;l(c-e)},i=function(){l(e)},m=function(){l(2)};return{counter:c,increment:r,decrement:o,reset:i,reset2:m}}(0),t=e.counter,a=e.increment,l=e.decrement,r=e.reset,o=e.reset2,i=function(e){var n=document.querySelectorAll(".card-slider");if(e?a(1):l(1),window.innerWidth>768)switch(t){case 0:n[0].classList.toggle("slide-selected"),e?n[t+1].classList.toggle("slide-selected"):(n[2].classList.toggle("slide-selected"),o());break;case 1:n[t].classList.toggle("slide-selected"),e?n[t+1].classList.toggle("slide-selected"):n[t-1].classList.toggle("slide-selected");break;case 2:n[2].classList.toggle("slide-selected"),e?(n[0].classList.toggle("slide-selected"),r()):n[t-1].classList.toggle("slide-selected")}else switch(t){case 0:n[0].classList.toggle("show-block-card"),n[0].classList.toggle("animate__bounceIn"),e?(n[t+1].classList.toggle("show-block-card"),n[t+1].classList.toggle("animate__bounceIn")):(n[2].classList.toggle("show-block-card"),n[2].classList.toggle("animate__bounceIn"),o());break;case 1:n[t].classList.toggle("show-block-card"),n[t].classList.toggle("animate__bounceIn"),e?(n[t+1].classList.toggle("show-block-card"),n[t+1].classList.toggle("animate__bounceIn")):(n[t-1].classList.toggle("show-block-card"),n[t-1].classList.toggle("animate__bounceIn"));break;case 2:n[2].classList.toggle("show-block-card"),n[2].classList.toggle("animate__bounceIn"),e?(n[0].classList.toggle("show-block-card"),n[0].classList.toggle("animate__bounceIn"),r()):(n[t-1].classList.toggle("show-block-card"),n[t-1].classList.toggle("animate__bounceIn"))}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"slide"},c.a.createElement("div",{className:"cont"},[0,1,2].map((function(e){return c.a.createElement(Ge,{key:e,i:e})})))),c.a.createElement("div",{className:"pass"},c.a.createElement("img",{className:"btnld",src:je.a,alt:"<",onClick:function(){return i(!1)}}),c.a.createElement("img",{className:"btnrd",src:Ie.a,alt:">",onClick:function(){return i(!0)}})))},He=function(){return window.scrollTo(0,0),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"learnfrom"},c.a.createElement("h2",null,"Learn from our research"),c.a.createElement("p",{className:"p1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"),c.a.createElement(Be,null)),c.a.createElement(te,null))},Fe=a(75),We=a.n(Fe),Me=a(76),Ye=a.n(Me),Ke=a(77),Ve=a.n(Ke),Je=function(e){var t=e.industry,a=e.state,n=e.setState,l=e.visualChanges;return a.itemShowed&&c.a.createElement("div",{className:"selectlist",key:t,onClick:function(){return function(e){document.querySelector(".divselect").classList.add("select-selected"),n((function(t){return Object(re.a)(Object(re.a)({},t),{},{isearch:"",select:e})})),l()}(t)}},c.a.createElement("span",null,t))},Qe=function(e){var t=e.isearch,a=e.handleInputChange;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{id:"inputIndustry",type:"text",name:"isearch",placeholder:"Search",autoComplete:"off",value:t,onChange:a}))},ze=function(){var e=Object(n.useState)({select:"Select",showed:!1,itemShowed:!0}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],l=a[1],r=[1,2,3,4,5,6],o=function(){l(e);for(var t=0;t<r.length;t++){document.getElementsByClassName("selectlist")[t+1].style.display="grid"}},i=function(e){for(var t=e.target,a=0,n=0;n<r.length;n++){var o=document.getElementsByClassName("selectlist");-1===document.getElementsByClassName("selectlist")[n+1].innerText.toLowerCase().search(t.value.toLowerCase())?o[n+1].style.display="none":(o[n+1].style.display="grid",a++)}document.querySelector(".select-plegable").style.height="".concat(50*a+50,"px"),l(Object(re.a)(Object(re.a)({},c),{},Object(le.a)({},t.name,t.value)))};return[c,i,o]}({isearch:"",contIndustry:6}),o=Object(s.a)(r,3),i=o[0].isearch,m=o[1],u=o[2],d=a.select,p=a.showed,g=function(){document.querySelector(".select-plegable").classList.toggle("show-select"),document.querySelector("#rowselect").classList.toggle("row-rotate-select"),document.querySelector(".industry-select").classList.toggle("border-select"),document.querySelector(".select-plegable").removeAttribute("style")},E=function(){g(),l(Object(re.a)(Object(re.a)({},a),{},{showed:!p})),u()};return window.scrollTo(0,0),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"seewhere"},c.a.createElement("div",{className:"container2"},c.a.createElement("h2",null,"See where you stand"),c.a.createElement("p",{className:"p2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing"),c.a.createElement("span",null,"industry"),c.a.createElement("div",{className:"industry-select"},c.a.createElement("div",{className:"divhouse"},c.a.createElement("img",{className:"animate__animated animate__tada",src:We.a,alt:""})),c.a.createElement("div",{className:"divselect",onClick:E},c.a.createElement("span",null,d)),c.a.createElement("div",{className:"divrow",onClick:E},c.a.createElement("img",{id:"rowselect",src:Ye.a,alt:"row"})),c.a.createElement("div",{className:"select-plegable"},c.a.createElement("div",{className:"selectlist"},c.a.createElement("div",null,c.a.createElement(Qe,{isearch:i,handleInputChange:m}),c.a.createElement("img",{src:Ve.a,alt:"search"}))),["Education","Energy","Entertainment & Gaming","Financial Services","Government & Non-profit","Healthcare"].map((function(e){return c.a.createElement(Je,{key:e,industry:e,state:a,setState:l,visualChanges:g})})))))),c.a.createElement(te,null))},Xe=a(78),Ze=a.n(Xe),$e=a(79),et=a.n($e),tt=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=function(){l(!a)};return window.scrollTo(0,0),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"seewherevideo"},c.a.createElement("h2",null,"See where you stand"),c.a.createElement("p",{className:"p2 container2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing"),c.a.createElement("div",{className:"videosw"},c.a.createElement("img",{src:Ze.a,alt:"Video",onClick:r})),a&&c.a.createElement("div",{className:"videout",onClick:r},c.a.createElement("div",null,c.a.createElement("div",{className:"contdivvideo"},c.a.createElement("img",{src:et.a,alt:"X"}),c.a.createElement("iframe",{className:"animate__animated animate__backInDown",id:"videoiframe",src:"https://player.vimeo.com/video/95746815",width:"1069",height:"601",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0,title:"Video"}))))),c.a.createElement(te,null))},at=function(){return c.a.createElement("div",null,c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/ocult/solutions",component:ze}),c.a.createElement(m.b,{exact:!0,path:"/ocult/demo",component:He}),c.a.createElement(m.b,{exact:!0,path:"/ocult/services",component:tt})))},nt=function(e){var t=e.isAuthenticated,a=e.component,n=Object(Oe.a)(e,["isAuthenticated","component"]);return c.a.createElement(m.b,Object.assign({},n,{component:function(e){return t?c.a.createElement(a,e):c.a.createElement(m.a,{to:"/auth/login"})}}))},ct=function(){var e=Object(o.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(!1),p=Object(s.a)(u,2),g=p[0],E=p[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e($(t.uid,t.displayName)),E(!0)):E(!1),r(!1)}))}),[e,r,E]),l?c.a.createElement("h1",null,"Espere..."):c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(we,null),c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/",component:ue}),c.a.createElement(m.b,{exact:!0,path:"/products",component:ue}),c.a.createElement(m.b,{exact:!0,path:"/pricing",component:ae}),c.a.createElement(nt,{path:"/ocult",component:at,isAuthenticated:g}),c.a.createElement(xe,{path:"/auth",component:Se,isAuthenticated:g}),c.a.createElement(m.a,{to:"/"}))))},lt=a(13),rt=a(80),ot={loading:!1,msgError:null},st="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.d,it=Object(lt.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{uid:t.payload.uid,name:t.payload.displayName};case W:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(re.a)(Object(re.a)({},e),{},{msgError:t.payload});case Y:return Object(re.a)(Object(re.a)({},e),{},{msgError:null});case K:return Object(re.a)(Object(re.a)({},e),{},{loading:!0});case V:return Object(re.a)(Object(re.a)({},e),{},{loading:!1});default:return e}}}),mt=Object(lt.e)(it,st(Object(lt.a)(rt.a))),ut=function(){return c.a.createElement(o.a,{store:mt},c.a.createElement(ct,null))};a(173);r.a.render(c.a.createElement(ut,null),document.getElementById("root"))},26:function(e,t,a){e.exports=a.p+"static/media/Group_12.98edc9f1.svg"},38:function(e,t,a){e.exports=a.p+"static/media/Group_14.030f37c3.svg"},56:function(e,t,a){e.exports=a.p+"static/media/room-GkWrEPTyDRs-unsplash.3eb76130.png"},57:function(e,t,a){e.exports=a.p+"static/media/Icon_TICKETS.4c736bc7.svg"},58:function(e,t,a){e.exports=a.p+"static/media/Icon_CUSTOMERS.41d1ca76.svg"},59:function(e,t,a){e.exports=a.p+"static/media/icon_AGENTS.6c3d85b0.svg"},60:function(e,t,a){e.exports=a.p+"static/media/icon_CUSTOMERS2.89d45357.svg"},61:function(e,t,a){e.exports=a.p+"static/media/Facebook.59c6a908.svg"},62:function(e,t,a){e.exports=a.p+"static/media/twitter.d49ccd07.svg"},63:function(e,t,a){e.exports=a.p+"static/media/Youtube.f45dc6dc.svg"},64:function(e,t,a){e.exports=a.p+"static/media/Pinteres.2ee57eb8.svg"},65:function(e,t,a){e.exports=a.p+"static/media/In.b64d510c.svg"},66:function(e,t,a){e.exports=a.p+"static/media/logo.ed60cbb7.svg"},67:function(e,t,a){e.exports=a.p+"static/media/Logo_Fixed_Header.853c0341.svg"},68:function(e,t,a){e.exports=a.p+"static/media/Hamburger_menu_icon.44ff44cb.svg"},69:function(e,t,a){e.exports=a.p+"static/media/close_icon_2.21c5c698.svg"},70:function(e,t,a){e.exports=a.p+"static/media/pass_i.99abd844.svg"},71:function(e,t,a){e.exports=a.p+"static/media/pass_d.3804c259.svg"},72:function(e,t,a){e.exports=a.p+"static/media/Group.2934814f.svg"},73:function(e,t,a){e.exports=a.p+"static/media/Group_6.7dbf409c.svg"},74:function(e,t,a){e.exports=a.p+"static/media/Group_7.cbef2529.svg"},75:function(e,t,a){e.exports=a.p+"static/media/home.1efba43a.svg"},76:function(e,t,a){e.exports=a.p+"static/media/row.a2ec9c91.svg"},77:function(e,t,a){e.exports=a.p+"static/media/search_icon.35b55efa.svg"},78:function(e,t,a){e.exports=a.p+"static/media/Group_4.0af55481.svg"},79:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAKBJREFUOBGtk0sOgCAMRME9Sz2P91+beJw6g5DwqcUfScOnb0ao4ETEI1ZEcDcb2aTxLg3QyYaYRx5kEotOVhrQjWI20wT5Ukz23LWS6HYyZCzAylVH1kBtrRK1k0awY85gM+tT+QBmsbKQYo67ulA0Vco/JvwSIv/WZ0doxPHM2pq6UQu0ctFsCIC6ZJB4cpUX8Lk+7MObx1SaxMf06Tkf1YTKKCbO+4wAAAAASUVORK5CYII="},81:function(e,t,a){e.exports=a(174)}},[[81,1,2]]]);
//# sourceMappingURL=main.0b7bfea4.chunk.js.map