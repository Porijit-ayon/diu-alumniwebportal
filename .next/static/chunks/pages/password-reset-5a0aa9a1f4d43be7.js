(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{489:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(9008),o=r.n(n);r(7294);var i=r(891),a=r(1145),l=r(6447),s=r(5861),c=r(1057),d=r(5893);function p(e){var t=e.children,r=e.pageTitle;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o(),{children:(0,d.jsx)("title",{children:r?"Alumni System | "+r:"Wellcome to alumni system"})}),(0,d.jsxs)(l.Z,{direction:"row",style:{backgroundColor:"#2E3094",color:"#ffffff",paddingRight:"20px"},children:[(0,d.jsx)(s.Z,{flexGrow:1}),(0,d.jsx)(c.Z,{href:"mailto:projit@diu.edi.bd",startIcon:(0,d.jsx)(i.Z,{}),sx:{color:"#ffffff",textTransform:"lowercase"},children:"porijit35-2711@diu.edu.bd"}),(0,d.jsx)(c.Z,{href:"tel:+8801733791787",startIcon:(0,d.jsx)(a.Z,{}),sx:{color:"#ffffff"},children:"+8801733791787"})]}),(0,d.jsx)("main",{children:t})]})}},4798:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eP}});var n,o=r(29),i=r(7794),a=r.n(i),l=r(3156),s=r(5113),c=r(3366),d=r(7462),p=r(7294),u=r(6010),m=r(4780),h=r(1657),v=r(948),x=r(4867),f=r(1588);function Z(e){return(0,x.Z)("MuiStepper",e)}(0,f.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);var b=r(8216);let g=p.createContext({}),S=p.createContext({});function y(e){return(0,x.Z)("MuiStepConnector",e)}(0,f.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);var w=r(5893);let j=["className"],C=e=>{let{classes:t,orientation:r,alternativeLabel:n,active:o,completed:i,disabled:a}=e,l={root:["root",r,n&&"alternativeLabel",o&&"active",i&&"completed",a&&"disabled"],line:["line",`line${(0,b.Z)(r)}`]};return(0,m.Z)(l,y,t)},L=(0,v.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(({ownerState:e})=>(0,d.Z)({flex:"1 1 auto"},"vertical"===e.orientation&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),M=(0,v.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver(e,t){let{ownerState:r}=e;return[t.line,t[`line${(0,b.Z)(r.orientation)}`]]}})(({ownerState:e,theme:t})=>{let r="light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600];return(0,d.Z)({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:r},"horizontal"===e.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===e.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),R=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStepConnector"}),{className:n}=r,o=(0,c.Z)(r,j),{alternativeLabel:i,orientation:a="horizontal"}=p.useContext(g),{active:l,disabled:s,completed:m}=p.useContext(S),v=(0,d.Z)({},r,{alternativeLabel:i,orientation:a,active:l,completed:m,disabled:s}),x=C(v);return(0,w.jsx)(L,(0,d.Z)({className:(0,u.Z)(x.root,n),ref:t,ownerState:v},o,{children:(0,w.jsx)(M,{className:x.line,ownerState:v})}))}),z=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],N=e=>{let{orientation:t,alternativeLabel:r,classes:n}=e;return(0,m.Z)({root:["root",t,r&&"alternativeLabel"]},Z,n)},E=(0,v.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel]}})(({ownerState:e})=>(0,d.Z)({display:"flex"},"horizontal"===e.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===e.orientation&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),P=(0,w.jsx)(R,{}),$=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStepper"}),{activeStep:n=0,alternativeLabel:o=!1,children:i,className:a,connector:l=P,nonLinear:s=!1,orientation:m="horizontal"}=r,v=(0,c.Z)(r,z),x=(0,d.Z)({},r,{alternativeLabel:o,orientation:m}),f=N(x),Z=p.Children.toArray(i).filter(Boolean),b=Z.map((e,t)=>p.cloneElement(e,(0,d.Z)({index:t,last:t+1===Z.length},e.props))),S=p.useMemo(()=>({activeStep:n,alternativeLabel:o,connector:l,nonLinear:s,orientation:m}),[n,o,l,s,m]);return(0,w.jsx)(g.Provider,{value:S,children:(0,w.jsx)(E,(0,d.Z)({ownerState:x,className:(0,u.Z)(f.root,a),ref:t},v,{children:b}))})});function I(e){return(0,x.Z)("MuiStep",e)}(0,f.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);let T=["active","children","className","completed","disabled","expanded","index","last"],D=e=>{let{classes:t,orientation:r,alternativeLabel:n,completed:o}=e;return(0,m.Z)({root:["root",r,n&&"alternativeLabel",o&&"completed"]},I,t)},k=(0,v.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(({ownerState:e})=>(0,d.Z)({},"horizontal"===e.orientation&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),_=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStep"}),{active:n,children:o,className:i,completed:a,disabled:l,expanded:s=!1,index:m,last:v}=r,x=(0,c.Z)(r,T),{activeStep:f,connector:Z,alternativeLabel:b,orientation:y,nonLinear:j}=p.useContext(g),[C=!1,L=!1,M=!1]=[n,a,l];f===m?C=void 0===n||n:!j&&f>m?L=void 0===a||a:!j&&f<m&&(M=void 0===l||l);let R=p.useMemo(()=>({index:m,last:v,expanded:s,icon:m+1,active:C,completed:L,disabled:M}),[m,v,s,C,L,M]),z=(0,d.Z)({},r,{active:C,orientation:y,alternativeLabel:b,completed:L,disabled:M,expanded:s}),N=D(z),E=(0,w.jsxs)(k,(0,d.Z)({className:(0,u.Z)(N.root,i),ref:t,ownerState:z},x,{children:[Z&&b&&0!==m?Z:null,o]}));return(0,w.jsx)(S.Provider,{value:R,children:Z&&!b&&0!==m?(0,w.jsxs)(p.Fragment,{children:[Z,E]}):E})});var W=r(2066),A=(0,W.Z)((0,w.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),F=(0,W.Z)((0,w.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),H=r(3219);function V(e){return(0,x.Z)("MuiStepIcon",e)}let q=(0,f.Z)("MuiStepIcon",["root","active","completed","error","text"]),O=["active","className","completed","error","icon"],X=e=>{let{classes:t,active:r,completed:n,error:o}=e;return(0,m.Z)({root:["root",r&&"active",n&&"completed",o&&"error"],text:["text"]},V,t)},B=(0,v.ZP)(H.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${q.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${q.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${q.error}`]:{color:(e.vars||e).palette.error.main}})),G=(0,v.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Y=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStepIcon"}),{active:o=!1,className:i,completed:a=!1,error:l=!1,icon:s}=r,p=(0,c.Z)(r,O),m=(0,d.Z)({},r,{active:o,completed:a,error:l}),v=X(m);if("number"==typeof s||"string"==typeof s){let x=(0,u.Z)(i,v.root);return l?(0,w.jsx)(B,(0,d.Z)({as:F,className:x,ref:t,ownerState:m},p)):a?(0,w.jsx)(B,(0,d.Z)({as:A,className:x,ref:t,ownerState:m},p)):(0,w.jsxs)(B,(0,d.Z)({className:x,ref:t,ownerState:m},p,{children:[n||(n=(0,w.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,w.jsx)(G,{className:v.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:m,children:s})]}))}return s});function J(e){return(0,x.Z)("MuiStepLabel",e)}let K=(0,f.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Q=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],U=e=>{let{classes:t,orientation:r,active:n,completed:o,error:i,disabled:a,alternativeLabel:l}=e;return(0,m.Z)({root:["root",r,i&&"error",a&&"disabled",l&&"alternativeLabel"],label:["label",n&&"active",o&&"completed",i&&"error",a&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",o&&"completed",i&&"error",a&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer"]},J,t)},ee=(0,v.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.orientation]]}})(({ownerState:e})=>(0,d.Z)({display:"flex",alignItems:"center",[`&.${K.alternativeLabel}`]:{flexDirection:"column"},[`&.${K.disabled}`]:{cursor:"default"}},"vertical"===e.orientation&&{textAlign:"left",padding:"8px 0"})),et=(0,v.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>(0,d.Z)({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${K.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${K.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${K.alternativeLabel}`]:{textAlign:"center",marginTop:16},[`&.${K.error}`]:{color:(e.vars||e).palette.error.main}})),er=(0,v.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${K.alternativeLabel}`]:{paddingRight:0}})),en=(0,v.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary})),eo=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStepLabel"}),{children:n,className:o,componentsProps:i={},error:a=!1,icon:l,optional:s,StepIconComponent:m,StepIconProps:v}=r,x=(0,c.Z)(r,Q),{alternativeLabel:f,orientation:Z}=p.useContext(g),{active:b,disabled:y,completed:j,icon:C}=p.useContext(S),L=l||C,M=m;L&&!M&&(M=Y);let R=(0,d.Z)({},r,{active:b,alternativeLabel:f,completed:j,disabled:y,error:a,orientation:Z}),z=U(R);return(0,w.jsxs)(ee,(0,d.Z)({className:(0,u.Z)(z.root,o),ref:t,ownerState:R},x,{children:[L||M?(0,w.jsx)(er,{className:z.iconContainer,ownerState:R,children:(0,w.jsx)(M,(0,d.Z)({completed:j,active:b,error:a,icon:L},v))}):null,(0,w.jsxs)(en,{className:z.labelContainer,ownerState:R,children:[n?(0,w.jsx)(et,(0,d.Z)({className:z.label,ownerState:R},i.label,{children:n})):null,s]})]}))});eo.muiName="StepLabel";var ei=r(8662),ea=r(6067),el=r(577),es=r(2734),ec=r(1705);function ed(e){return(0,x.Z)("MuiCollapse",e)}(0,f.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);let ep=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],eu=e=>{let{orientation:t,classes:r}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,m.Z)(n,ed,r)},em=(0,v.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})(({theme:e,ownerState:t})=>(0,d.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,d.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})),eh=(0,v.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>(0,d.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),ev=(0,v.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>(0,d.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),ex=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiCollapse"}),{addEndListener:n,children:o,className:i,collapsedSize:a="0px",component:l,easing:s,in:m,onEnter:v,onEntered:x,onEntering:f,onExit:Z,onExited:b,onExiting:g,orientation:S="vertical",style:y,timeout:j=ea.x9.standard,TransitionComponent:C=ei.ZP}=r,L=(0,c.Z)(r,ep),M=(0,d.Z)({},r,{orientation:S,collapsedSize:a}),R=eu(M),z=(0,es.Z)(),N=p.useRef(),E=p.useRef(null),P=p.useRef(),$="number"==typeof a?`${a}px`:a,I="horizontal"===S,T=I?"width":"height";p.useEffect(()=>()=>{clearTimeout(N.current)},[]);let D=p.useRef(null),k=(0,ec.Z)(t,D),_=e=>t=>{if(e){let r=D.current;void 0===t?e(r):e(r,t)}},W=()=>E.current?E.current[I?"clientWidth":"clientHeight"]:0,A=_((e,t)=>{E.current&&I&&(E.current.style.position="absolute"),e.style[T]=$,v&&v(e,t)}),F=_((e,t)=>{let r=W();E.current&&I&&(E.current.style.position="");let{duration:n,easing:o}=(0,el.C)({style:y,timeout:j,easing:s},{mode:"enter"});if("auto"===j){let i=z.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${i}ms`,P.current=i}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[T]=`${r}px`,e.style.transitionTimingFunction=o,f&&f(e,t)}),H=_((e,t)=>{e.style[T]="auto",x&&x(e,t)}),V=_(e=>{e.style[T]=`${W()}px`,Z&&Z(e)}),q=_(b),O=_(e=>{let t=W(),{duration:r,easing:n}=(0,el.C)({style:y,timeout:j,easing:s},{mode:"exit"});if("auto"===j){let o=z.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${o}ms`,P.current=o}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[T]=$,e.style.transitionTimingFunction=n,g&&g(e)}),X=e=>{"auto"===j&&(N.current=setTimeout(e,P.current||0)),n&&n(D.current,e)};return(0,w.jsx)(C,(0,d.Z)({in:m,onEnter:A,onEntered:H,onEntering:F,onExit:V,onExited:q,onExiting:O,addEndListener:X,nodeRef:D,timeout:"auto"===j?null:j},L,{children:(e,t)=>(0,w.jsx)(em,(0,d.Z)({as:l,className:(0,u.Z)(R.root,i,{entered:R.entered,exited:!m&&"0px"===$&&R.hidden}[e]),style:(0,d.Z)({[I?"minWidth":"minHeight"]:$},y),ownerState:(0,d.Z)({},M,{state:e}),ref:k},t,{children:(0,w.jsx)(eh,{ownerState:(0,d.Z)({},M,{state:e}),className:R.wrapper,ref:E,children:(0,w.jsx)(ev,{ownerState:(0,d.Z)({},M,{state:e}),className:R.wrapperInner,children:o})})}))}))});function ef(e){return(0,x.Z)("MuiStepContent",e)}ex.muiSupportAuto=!0,(0,f.Z)("MuiStepContent",["root","last","transition"]);let eZ=["children","className","TransitionComponent","transitionDuration","TransitionProps"],eb=e=>{let{classes:t,last:r}=e;return(0,m.Z)({root:["root",r&&"last"],transition:["transition"]},ef,t)},eg=(0,v.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.last&&t.last]}})(({ownerState:e,theme:t})=>(0,d.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}`},e.last&&{borderLeft:"none"})),eS=(0,v.ZP)(ex,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),ey=p.forwardRef(function(e,t){let r=(0,h.Z)({props:e,name:"MuiStepContent"}),{children:n,className:o,TransitionComponent:i=ex,transitionDuration:a="auto",TransitionProps:l}=r,s=(0,c.Z)(r,eZ),{orientation:m}=p.useContext(g),{active:v,last:x,expanded:f}=p.useContext(S),Z=(0,d.Z)({},r,{last:x}),b=eb(Z),y=a;return"auto"!==a||i.muiSupportAuto||(y=void 0),(0,w.jsx)(eg,(0,d.Z)({className:(0,u.Z)(b.root,o),ref:t,ownerState:Z},s,{children:(0,w.jsx)(eS,(0,d.Z)({as:i,in:v||f,className:b.transition,ownerState:Z,timeout:y,unmountOnExit:!0},l,{children:n}))}))});var ew=r(6447),ej=r(5861),eC=r(1903),eL=r(1057),eM=r(4808),eR=r(8456),ez=r(9669),eN=r.n(ez),eE=r(489);function eP(){var e,t,r=(0,p.useState)(Math.floor(1e5+9e5*Math.random())),n=r[0];r[1];var i=(0,p.useState)(),c=i[0],d=i[1],u=(0,p.useState)(),m=u[0],h=u[1],v=(0,p.useState)(!1),x=v[0],f=v[1],Z=(0,p.useState)(),b=Z[0],g=Z[1],S=(0,p.useState)(),y=S[0],j=S[1],C=(0,p.useState)(),L=C[0],M=C[1],R=(0,p.useState)(),z=R[0],N=R[1],E=(0,p.useState)(0),P=E[0],I=E[1],T=(0,p.useState)(),D=T[0],k=T[1],W=(e=(0,o.Z)(a().mark(function e(t){var r;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,eN().post("/api/alumni/sendVerificationCode?email=".concat(c,"&code=").concat(n));case 4:"Sorry, no account found with this email address"==(r=e.sent.data)?j(r):(g(r),I(1)),f(!1);case 8:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)}),A=(t=(0,o.Z)(a().mark(function e(t){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),I(3),e.prev=3,e.next=6,eN().put("/api/alumni/resetPassword?email=".concat(c,"&password=").concat(m));case 6:k(e.sent.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.message);case 14:f(!1);case 15:case"end":return e.stop()}},e,null,[[3,11]])})),function(e){return t.apply(this,arguments)});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(eE.Z,{pageTitle:"password reset",children:(0,w.jsx)(l.Z,{sx:{mt:"50px"},children:(0,w.jsxs)(s.Z,{variant:"outlined",sx:{width:{xs:"100%",sm:"90%",md:"50%"},marginX:"auto",p:"20px"},children:[(0,w.jsxs)($,{activeStep:P,orientation:"vertical",children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(eo,{children:"Send code"}),(0,w.jsx)(ey,{children:(0,w.jsxs)(ew.Z,{spacing:1,component:"form",onSubmit:W,children:[(0,w.jsx)(ej.Z,{align:"center",color:"error",children:y||null}),(0,w.jsx)(eC.Z,{type:"email",size:"small",color:"secondary",label:"Enter email address",variant:"outlined",placeholder:"Enter email address",required:!0,onChange:function(e){return d(e.target.value)}}),(0,w.jsx)(eL.Z,{disabled:!c,color:"secondary",variant:"contained",type:"submit",children:"Send code"})]})})]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(eo,{children:"Veryfication code"}),(0,w.jsx)(ey,{children:(0,w.jsxs)(ew.Z,{spacing:1,component:"form",onSubmit:function(e){e.preventDefault(),n==L?I(2):(g(),N("You have inputed invalid code"))},children:[(0,w.jsx)(ej.Z,{align:"center",color:"secondary",children:b||null}),(0,w.jsx)(ej.Z,{align:"center",color:"error",children:z||null}),(0,w.jsx)(eC.Z,{type:"text",size:"small",color:"secondary",label:"Enter code",variant:"outlined",placeholder:"Type verification code",required:!0,onChange:function(e){return M(e.target.value)}}),(0,w.jsx)(eL.Z,{disabled:!L,color:"secondary",variant:"contained",type:"submit",children:"Verify code"})]})})]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(eo,{children:"Change password"}),(0,w.jsx)(ey,{children:(0,w.jsxs)(ew.Z,{spacing:1,component:"form",onSubmit:A,children:[(0,w.jsx)(eC.Z,{type:"text",size:"small",color:"secondary",label:"Enter new password",variant:"outlined",placeholder:"Enter new password",required:!0,onChange:function(e){return h(e.target.value)}}),(0,w.jsx)(eL.Z,{disabled:!m,color:"secondary",variant:"contained",type:"submit",children:"Change password"})]})})]})]}),(0,w.jsx)(ej.Z,{color:"secondary",align:"center",children:D||null})]})})}),(0,w.jsx)(eM.Z,{open:x,children:(0,w.jsx)(eR.Z,{sx:{color:"#115D56"}})})]})}},587:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password-reset",function(){return r(4798)}])}},function(e){e.O(0,[669,21,774,888,179],function(){return e(e.s=587)}),_N_E=e.O()}]);