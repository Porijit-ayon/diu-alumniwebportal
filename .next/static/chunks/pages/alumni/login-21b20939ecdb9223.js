(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{2450:function(e,n,r){"use strict";var t=r(4836);n.Z=void 0;var s=t(r(4938)),i=r(5893),l=(0,s.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=l},489:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(9008),s=r.n(t);r(7294);var i=r(891),l=r(1145),a=r(6447),o=r(5861),c=r(1057),d=r(5893);function u(e){var n=e.children,r=e.pageTitle;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s(),{children:(0,d.jsx)("title",{children:r?"Alumni System | "+r:"Wellcome to alumni system"})}),(0,d.jsxs)(a.Z,{direction:"row",style:{backgroundColor:"#2E3094",color:"#ffffff",paddingRight:"20px"},children:[(0,d.jsx)(o.Z,{flexGrow:1}),(0,d.jsx)(c.Z,{href:"mailto:projit@diu.edi.bd",startIcon:(0,d.jsx)(i.Z,{}),sx:{color:"#ffffff",textTransform:"lowercase"},children:"porijit35-2711@diu.edu.bd"}),(0,d.jsx)(c.Z,{href:"tel:+8801733791787",startIcon:(0,d.jsx)(l.Z,{}),sx:{color:"#ffffff"},children:"+8801733791787"})]}),(0,d.jsx)("main",{children:n})]})}},5339:function(e,n,r){"use strict";var t=r(29),s=r(7794),i=r.n(s),l=r(6447),a=r(7357),o=r(5861),c=r(5113),d=r(1903),u=r(1057),h=r(4808),p=r(8456),x=r(7294),f=r(1664),g=r.n(f),m=r(5675),j=r.n(m),Z=r(2450),w=r(1163),b=r(5601),v=r(5152),y=r.n(v),_=r(9669),k=r.n(_),C=r(5893);function E(){var e,n=(0,x.useState)(!1),r=n[0],s=n[1],f=(0,x.useState)(),m=f[0],v=f[1],y=(0,x.useState)(),_=y[0],E=y[1],S=(0,x.useState)(),z=S[0],N=S[1],P=(0,x.useContext)(b.v).dispatch,T=(0,w.useRouter)(),R=(e=(0,t.Z)(i().mark(function e(n){var r;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s(!0),n.target.reset(),e.prev=3,e.next=6,k().post("/api/alumni/login?email=".concat(_,"&password=").concat(z));case 6:if(r=e.sent.data,0!==_.localeCompare(r.email)){e.next=15;break}if(P({type:"USER_LOGIN",payload:r}),!r.isAdmin){e.next=14;break}return e.abrupt("return",T.push("/dashboard"));case 14:return e.abrupt("return",T.push("/alumni/profile"));case 15:v(r),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0.message);case 21:s(!1);case 22:case"end":return e.stop()}},e,null,[[3,18]])})),function(n){return e.apply(this,arguments)});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(l.Z,{direction:"row",spacing:1,sx:{marginTop:"50px"},children:[(0,C.jsx)(a.Z,{sx:{display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},width:"50%"},children:(0,C.jsx)(o.Z,{style:{height:"400px",display:"grid",placeContent:"center"},children:(0,C.jsx)(j(),{src:"/img/alumni.png",alt:"alumni pic",width:400,height:400})})}),(0,C.jsx)(a.Z,{sx:{flexGrow:1,height:"400px",display:"grid",placeContent:"center"},children:(0,C.jsx)(c.Z,{sx:{padding:"20px"},elevation:2,children:(0,C.jsxs)(l.Z,{onSubmit:R,spacing:1,component:"form",children:[(0,C.jsx)(j(),{src:"/img/logo.png",alt:"logo",width:300,height:100}),(0,C.jsx)(o.Z,{align:"center",variant:"bold",component:"h1",children:"Sign in"}),(0,C.jsx)(o.Z,{color:"error",align:"center",children:m||null}),(0,C.jsx)(d.Z,{label:"Email address",type:"email",placeholder:"E-mail address",size:"small",required:!0,fullWidth:!0,color:"secondary",onChange:function(e){return E(e.target.value)}}),(0,C.jsx)(d.Z,{label:"Password",type:"password",placeholder:"Password",size:"small",required:!0,fullWidth:!0,color:"secondary",InputProps:{endAdornment:(0,C.jsx)(Z.Z,{})},onChange:function(e){return N(e.target.value)}}),(0,C.jsx)(o.Z,{align:"center",children:"admin@alumni.com | admin123"}),(0,C.jsx)(a.Z,{style:{textAlign:"center"},children:(0,C.jsx)(u.Z,{type:"submit",variant:"contained",color:"secondary",fullWidth:!0,disableFocusRipple:!0,children:"Login"})}),(0,C.jsx)(o.Z,{children:(0,C.jsx)(g(),{href:"/password-reset",passHress:!0,children:(0,C.jsx)("a",{children:"Forgot password?"})})}),(0,C.jsx)(o.Z,{children:(0,C.jsx)(g(),{href:"/alumni/registration",passHress:!0,children:(0,C.jsx)("a",{style:{color:"green"},children:" Register now"})})})]})})})]}),(0,C.jsx)(h.Z,{open:r,children:(0,C.jsx)(p.Z,{color:"inherit"})})]})}n.Z=y()(function(){return Promise.resolve(E)},{ssr:!1})},6531:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}}),r(7294);var t=r(5339),s=r(489),i=r(5893);function l(){return(0,i.jsx)(s.Z,{pageTitle:"Login",children:(0,i.jsx)(t.Z,{})})}},8644:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alumni/login",function(){return r(6531)}])}},function(e){e.O(0,[669,21,664,774,888,179],function(){return e(e.s=8644)}),_N_E=e.O()}]);