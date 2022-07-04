import{f as J,i as oe,q as Be,R as Ie,c as P,h as R,j as re,g as G,r as _,Q as Fe,af as je,ag as Ke,o as ue,G as ne,n as qe,ah as Ne,ai as Je,v as Ge,aj as Xe,ak as Ye,$ as He,al as Ze,B as ve,z as I,w as W,l as F,E as le,p as ae,am as pe,x as et,W as tt,H as ot,an as nt,I as lt,ao as at,J as it,ap as st,K as rt,aq as ut,S as ct,ar as dt,a1 as X,a2 as h,ab as w,as as Le,a7 as O,a9 as j,F as $,ac as B,a3 as S,a4 as v,a8 as L,d as g,at as E,aa as D,a0 as ft,au as mt,av as te,a5 as ge,a6 as z,aw as ht,ax as ye,N as be,ay as vt}from"./index.bce71b2e.js";import{api as we}from"./axios.7c31a64e.js";import{c as ie}from"./selection.f7dcecfb.js";var pt=J({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:a}}=G(),o=oe(Be);oe(Ie,()=>{console.error("QPage needs to be child of QPageContainer")});const i=P(()=>{const n=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const r=o.isContainer.value===!0?o.containerHeight.value:a.screen.height;return e.styleFn(n,r)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-n+"px":a.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":a.screen.height-n+"px"}}),u=P(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>R("main",{class:u.value,style:i.value},re(t.default))}});const gt=R("div",{class:"q-space"});var yt=J({name:"QSpace",setup(){return()=>gt}}),bt=J({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:a}){const o=G(),i=_(null);let u=0;const n=[];function r(l){const m=[],k=typeof l=="boolean"?l:e.noErrorFocus!==!0,M=++u,U=(C,y)=>{a("validation-"+(C===!0?"success":"error"),y)};for(let C=0;C<n.length;C++){const y=n[C],q=y.validate();if(typeof q.then=="function")m.push(q.then(T=>({valid:T,comp:y}),T=>({valid:!1,comp:y,err:T})));else if(q!==!0){if(e.greedy===!1)return U(!1,y),k===!0&&typeof y.focus=="function"&&y.focus(),Promise.resolve(!1);m.push({valid:!1,comp:y})}}return m.length===0?(U(!0),Promise.resolve(!0)):Promise.all(m).then(C=>{const y=C.filter(Y=>Y.valid!==!0);if(y.length===0)return M===u&&U(!0),!0;const{valid:q,comp:T,err:b}=y[0];return M===u&&(b!==void 0&&console.error(b),U(!1,T),k===!0&&q!==!0&&typeof T.focus=="function"&&T.focus()),!1})}function s(){u++,n.forEach(l=>{typeof l.resetValidation=="function"&&l.resetValidation()})}function c(l){l!==void 0&&ne(l);const m=u+1;r().then(k=>{m===u&&k===!0&&(e.onSubmit!==void 0?a("submit",l):l!==void 0&&l.target!==void 0&&typeof l.target.submit=="function"&&l.target.submit())})}function d(l){l!==void 0&&ne(l),a("reset"),qe(()=>{s(),e.autofocus===!0&&e.noResetFocus!==!0&&f()})}function f(){Ne(()=>{if(i.value===null)return;const l=i.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(i.value.querySelectorAll("[tabindex]"),m=>m.tabIndex>-1);l!=null&&l.focus({preventScroll:!0})})}Fe(Je,{bindComponent(l){n.push(l)},unbindComponent(l){const m=n.indexOf(l);m>-1&&n.splice(m,1)}});let x=!1;return je(()=>{x=!0}),Ke(()=>{x===!0&&e.autofocus===!0&&f()}),ue(()=>{e.autofocus===!0&&f()}),Object.assign(o.proxy,{validate:r,resetValidation:s,submit:c,reset:d,focus:f,getValidationComponents:()=>n}),()=>R("form",{class:"q-form",ref:i,onSubmit:c,onReset:d},re(t.default))}});function xe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var _e=Ge({name:"close-popup",beforeMount(e,{value:t}){const a={depth:xe(t),handler(o){a.depth!==0&&setTimeout(()=>{const i=Xe(e);i!==void 0&&Ye(i,o,a.depth)})},handlerKey(o){He(o,13)===!0&&a.handler(o)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:t,oldValue:a}){t!==a&&(e.__qclosepopup.depth=xe(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function wt(){return oe(Ze)}const xt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _t({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:o,proxy:i,emit:u}=G(),n=_(null);let r;function s(l){return n.value===null?!1:l===void 0||l.touches===void 0||l.touches.length<=1}const c={};a===void 0&&(Object.assign(c,{hide(l){i.hide(l)},toggle(l){i.toggle(l),l.qAnchorHandled=!0},toggleKey(l){He(l,13)===!0&&c.toggle(l)},contextClick(l){i.hide(l),ve(l),qe(()=>{i.show(l),l.qAnchorHandled=!0})},prevent:ve,mobileTouch(l){if(c.mobileCleanup(l),s(l)!==!0)return;i.hide(l),n.value.classList.add("non-selectable");const m=l.target;I(c,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{i.show(l),l.qAnchorHandled=!0},300)},mobileCleanup(l){n.value.classList.remove("non-selectable"),clearTimeout(r),e.value===!0&&l!==void 0&&ie()}}),a=function(l=o.contextMenu){if(o.noParentEvent===!0||n.value===null)return;let m;l===!0?i.$q.platform.is.mobile===!0?m=[[n.value,"touchstart","mobileTouch","passive"]]:m=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:m=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],I(c,"anchor",m)});function d(){le(c,"anchor")}function f(l){for(n.value=l;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;a()}function x(){if(o.target===!1||o.target===""||i.$el.parentNode===null)n.value=null;else if(o.target===!0)f(i.$el.parentNode);else{let l=o.target;if(typeof o.target=="string")try{l=document.querySelector(o.target)}catch{l=void 0}l!=null?(n.value=l.$el||l,a()):(n.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return W(()=>o.contextMenu,l=>{n.value!==null&&(d(),a(l))}),W(()=>o.target,()=>{n.value!==null&&d(),x()}),W(()=>o.noParentEvent,l=>{n.value!==null&&(l===!0?d():a())}),ue(()=>{x(),t!==!0&&o.modelValue===!0&&n.value===null&&u("update:modelValue",!1)}),F(()=>{clearTimeout(r),d()}),{anchorEl:n,canShow:s,anchorEvents:c}}function kt(e,t){const a=_(null);let o;function i(r,s){const c=`${s!==void 0?"add":"remove"}EventListener`,d=s!==void 0?s:o;r!==window&&r[c]("scroll",d,ae.passive),window[c]("scroll",d,ae.passive),o=s}function u(){a.value!==null&&(i(a.value),a.value=null)}const n=W(()=>e.noParentEvent,()=>{a.value!==null&&(u(),t())});return F(n),{localScrollTarget:a,unconfigureScrollTarget:u,changeScrollEvent:i}}let Pe;const{notPassiveCapture:K}=ae,V=[];function N(e){clearTimeout(Pe);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=pe.length-1;for(;a>=0;){const o=pe[a].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;a--}for(let o=V.length-1;o>=0;o--){const i=V[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Ct(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",N,K),document.addEventListener("touchstart",N,K))}function ke(e){const t=V.findIndex(a=>a===e);t>-1&&(V.splice(t,1),V.length===0&&(clearTimeout(Pe),document.removeEventListener("mousedown",N,K),document.removeEventListener("touchstart",N,K)))}let Ce,Te;function $e(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Tt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const se={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{se[`${e}#ltr`]=e,se[`${e}#rtl`]=e});function Se(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:se[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function $t(e,t){let{top:a,left:o,right:i,bottom:u,width:n,height:r}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],o-=t[0],u+=t[1],i+=t[0],n+=t[0],r+=t[1]),{top:a,left:o,right:i,bottom:u,width:n,height:r,middle:o+(i-o)/2,center:a+(u-a)/2}}function St(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Et(e){if(et.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:s,offsetTop:c}=window.visualViewport;s!==Ce&&(r.setProperty("--q-pe-left",s+"px"),Ce=s),c!==Te&&(r.setProperty("--q-pe-top",c+"px"),Te=c)}let t;const{scrollLeft:a,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=$t(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:r,left:s}=e.anchorEl.getBoundingClientRect(),c=r+e.absoluteOffset.top,d=s+e.absoluteOffset.left;t={top:c,left:d,width:1,height:1,right:d+1,center:c,middle:d,bottom:c+1}}let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const u=St(e.el),n={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};qt(n,t,u,e.anchorOrigin,e.selfOrigin),i={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(i.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(i.minHeight=i.maxHeight)),n.maxWidth!==void 0&&(i.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function qt(e,t,a,o,i){const u=a.bottom,n=a.right,r=tt(),s=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+u>s)if(i.vertical==="center")e.top=t[o.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(t[o.vertical]>s/2){const d=Math.min(s,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+n>c)if(e.maxWidth=Math.min(n,c),i.horizontal==="middle")e.left=t[o.horizontal]>c/2?Math.max(0,c-n):0;else if(t[o.horizontal]>c/2){const d=Math.min(c,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(n,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(n,c-e.left)}var Ee=J({name:"QTooltip",inheritAttrs:!1,props:{...xt,...ot,...nt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:$e},self:{type:String,default:"top middle",validator:$e},offset:{type:Array,default:()=>[14,14],validator:Tt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...lt],setup(e,{slots:t,emit:a,attrs:o}){let i,u;const n=G(),{proxy:{$q:r}}=n,s=_(null),c=_(!1),d=P(()=>Se(e.anchor,r.lang.rtl)),f=P(()=>Se(e.self,r.lang.rtl)),x=P(()=>e.persistent!==!0),{registerTick:l,removeTick:m}=at(),{registerTimeout:k,removeTimeout:M}=it(),{transition:U,transitionStyle:C}=st(e,c),{localScrollTarget:y,changeScrollEvent:q,unconfigureScrollTarget:T}=kt(e,me),{anchorEl:b,canShow:Y,anchorEvents:A}=_t({showing:c,configureAnchorEl:ze}),{show:Me,hide:Z}=rt({showing:c,canShow:Y,handleShow:We,handleHide:Oe,hideOnRouteChange:x,processOnMount:!0});Object.assign(A,{delayShow:Ae,delayHide:Qe});const{showPortal:ce,hidePortal:de,renderPortal:Ue}=ut(n,s,Re);if(r.platform.is.mobile===!0){const p={anchorEl:b,innerRef:s,onClickOutside(H){return Z(H),H.target.classList.contains("q-dialog__backdrop")&&ne(H),!0}},ee=P(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);W(ee,H=>{(H===!0?Ct:ke)(p)}),F(()=>{ke(p)})}function We(p){m(),M(),ce(),l(()=>{u=new MutationObserver(()=>Q()),u.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),Q(),me()}),i===void 0&&(i=W(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,Q)),k(()=>{ce(!0),a("show",p)},e.transitionDuration)}function Oe(p){m(),M(),de(),fe(),k(()=>{de(!0),a("hide",p)},e.transitionDuration)}function fe(){u!==void 0&&(u.disconnect(),u=void 0),i!==void 0&&(i(),i=void 0),T(),le(A,"tooltipTemp")}function Q(){const p=s.value;b.value===null||!p||Et({el:p,offset:e.offset,anchorEl:b.value,anchorOrigin:d.value,selfOrigin:f.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ae(p){if(r.platform.is.mobile===!0){ie(),document.body.classList.add("non-selectable");const ee=b.value,H=["touchmove","touchcancel","touchend","click"].map(he=>[ee,he,"delayHide","passiveCapture"]);I(A,"tooltipTemp",H)}k(()=>{Me(p)},e.delay)}function Qe(p){M(),r.platform.is.mobile===!0&&(le(A,"tooltipTemp"),ie(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),k(()=>{Z(p)},e.hideDelay)}function ze(){if(e.noParentEvent===!0||b.value===null)return;const p=r.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];I(A,"anchor",p)}function me(){if(b.value!==null||e.scrollTarget!==void 0){y.value=ct(b.value,e.scrollTarget);const p=e.noParentEvent===!0?Q:Z;q(y.value,p)}}function De(){return c.value===!0?R("div",{...o,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,C.value],role:"complementary"},re(t.default)):null}function Re(){return R(dt,{name:U.value,appear:!0},De)}return F(fe),Object.assign(n.proxy,{updatePosition:Q}),Ue}});const Ht={name:"TableCell",props:{role:{default:"cell"}}},Lt=["role"],Pt=O(" \xA0 ");function Vt(e,t,a,o,i,u){return h(),w("div",{class:"table-cell",role:a.role},[Le(e.$slots,"default",{},()=>[Pt])],8,Lt)}var Ve=X(Ht,[["render",Vt]]);const Mt={name:"TableRow",emits:["row-click"],props:{data:{type:Object,required:!0},columns:{type:Array}},components:{TableCell:Ve}},Ut={class:"table-row",role:"rowgroup"};function Wt(e,t,a,o,i,u){const n=j("table-cell");return h(),w("div",Ut,[(h(!0),w($,null,B(a.columns,(r,s)=>(h(),S(n,{key:s,onClick:t[0]||(t[0]=c=>e.$emit("row-click"))},{default:v(()=>[O(L(a.data[r]),1)]),_:2},1024))),128)),g(n,null,{default:v(()=>[Le(e.$slots,"action-buttons")]),_:3})])}var Ot=X(Mt,[["render",Wt]]);const At={props:{fields:{type:Array},items:{type:Array,required:!0},title:{type:String,default:"Table"}},emits:["row-edit","row-click"],components:{TableCell:Ve,TableRow:Ot}},Qt=["aria-label"],zt={class:"table-header",role:"rowgroup"},Dt=O(" ACTIONS "),Rt={class:"table-body"},Bt=O("Details"),It=O("Edit");function Ft(e,t,a,o,i,u){const n=j("table-cell"),r=j("table-row");return h(),w("div",{class:"custom-table",role:"table","aria-label":a.title},[E("div",zt,[(h(!0),w($,null,B(a.fields,(s,c)=>(h(),S(n,{role:"columnheader",class:"text-uppercase",key:c},{default:v(()=>[O(L(s),1)]),_:2},1024))),128)),g(n,{role:"columnheader",class:"text-uppercase"},{default:v(()=>[Dt]),_:1})]),E("div",Rt,[(h(!0),w($,null,B(a.items,(s,c)=>(h(),S(r,{columns:a.fields,data:s,key:c,onRowClick:d=>e.$emit("row-click",s)},{"action-buttons":v(()=>[g(D,{color:"grey-8",icon:"o_visibility",onClick:d=>e.$emit("row-click",s),round:"",flat:""},{default:v(()=>[g(Ee,null,{default:v(()=>[Bt]),_:1})]),_:2},1032,["onClick"]),g(D,{color:"grey-8",icon:"o_edit",onClick:d=>e.$emit("row-edit",s),round:"",flat:""},{default:v(()=>[g(Ee,null,{default:v(()=>[It]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["columns","data","onRowClick"]))),128))])],8,Qt)}var jt=X(At,[["render",Ft]]);const Kt=ft({name:"IndexPage",components:{TableContainer:jt},setup(){const e=wt(),t=_(null),a=_(!0),o=_(null),i=_(!1),u=_([]),n=P(()=>{if(t.value){const d=t.value.toLowerCase();return u.value.filter(f=>f.name.toLowerCase().includes(d)||f.phone.includes(d)||f.email.toLowerCase().includes(d))}else return u.value}),r=()=>{const d=localStorage.getItem("users");d!=null&&d.length?u.value=JSON.parse(d):we.get("users").then(f=>{f.data&&(u.value=f.data,localStorage.setItem("users",JSON.stringify(f.data)))}).catch(f=>{e.notify({message:f.stack,color:"negative",timeout:5e3,progress:!0})})},s=(d,f=!0)=>{o.value=Object.assign({},d),i.value=!0,a.value=f},c=()=>{e.loading.show(),we.patch(`users/${o.value.id}`,o.value).then(d=>{const f=u.value.findIndex(x=>x.id===o.value.id);u.value[f]=Object.assign({},d.data),localStorage.setItem("users",JSON.stringify(u.value)),i.value=!1,e.notify({message:"User edited successfully",color:"positive",timeout:5e3,progress:!0})}).catch(d=>{e.notify({message:d.stack,color:"negative",timeout:5e3,progress:!0})}).finally(e.loading.hide)};return ue(()=>{r()}),{filteredUsers:n,filterText:t,readonly:a,selectedUser:o,showEditDialog:s,showDialog:i,submitUserEdition:c,users:u}}}),Nt={class:"flex items-center justify-between q-mb-md"},Jt=E("div",{class:"text-h5 text-bold"},"Users",-1),Gt={key:1,class:"text-h5 text-center q-pa-md"},Xt={class:"text-h6"},Yt={class:"row q-col-gutter-md"},Zt={class:"text-capitalize"},eo={class:"col-12 text-bold text-capitalize"},to={class:"text-capitalize"};function oo(e,t,a,o,i,u){const n=j("table-container");return h(),w($,null,[g(pt,{class:"q-pa-md"},{default:v(()=>[E("div",Nt,[Jt,g(te,{modelValue:e.filterText,"onUpdate:modelValue":t[1]||(t[1]=r=>e.filterText=r),label:"Search users here",debounce:"150",outlined:""},{prepend:v(()=>[g(ge,{name:"search"})]),append:v(()=>[e.filterText?(h(),S(ge,{key:0,name:"close",onClick:t[0]||(t[0]=r=>e.filterText=null),class:"cursor-pointer"})):z("",!0)]),_:1},8,["modelValue"])]),e.filteredUsers.length?(h(),S(n,{key:0,items:e.filteredUsers,fields:["name","email","phone"],title:"Users table",onRowClick:e.showEditDialog,onRowEdit:t[2]||(t[2]=r=>e.showEditDialog(r,!1))},null,8,["items","onRowClick"])):(h(),w("div",Gt,L(e.filterText?"No users found":"Loading users..."),1))]),_:1}),g(mt,{modelValue:e.showDialog,"onUpdate:modelValue":t[3]||(t[3]=r=>e.showDialog=r)},{default:v(()=>[g(ht,null,{default:v(()=>[g(ye,{class:"row items-center q-pb-none"},{default:v(()=>[E("div",Xt,L(e.readonly?"User details":"Edit user"),1),g(yt),be(g(D,{icon:"close",flat:"",round:"",dense:""},null,512),[[_e]])]),_:1}),e.selectedUser?(h(),S(ye,{key:0},{default:v(()=>[g(bt,null,{default:v(()=>[E("div",Yt,[(h(!0),w($,null,B(e.selectedUser,(r,s,c)=>(h(),w($,{key:c},[s!=="id"&&["number","string"].includes(typeof r)?(h(),S(te,{key:0,class:"col-12",modelValue:e.selectedUser[s],"onUpdate:modelValue":d=>e.selectedUser[s]=d,readonly:e.readonly,"label-slot":"",dense:"",outlined:""},{label:v(()=>[E("span",Zt,L(s),1)]),_:2},1032,["modelValue","onUpdate:modelValue","readonly"])):typeof r=="object"?(h(),w($,{key:1},[E("div",eo,L(s),1),(h(!0),w($,null,B(r,(d,f,x)=>(h(),w($,{key:x},[f!=="geo"?(h(),S(te,{key:0,class:"col-12",modelValue:e.selectedUser[s][f],"onUpdate:modelValue":l=>e.selectedUser[s][f]=l,readonly:e.readonly,"label-slot":"",dense:"",outlined:""},{label:v(()=>[E("span",to,L(f),1)]),_:2},1032,["modelValue","onUpdate:modelValue","readonly"])):z("",!0)],64))),128))],64)):z("",!0)],64))),128))])]),_:1})]),_:1})):z("",!0),e.readonly?z("",!0):(h(),S(vt,{key:1,align:"center",class:"q-mb-md"},{default:v(()=>[be(g(D,{label:"Cancel",color:"primary",flat:""},null,512),[[_e]]),g(D,{label:"Save",color:"primary",onClick:e.submitUserEdition},null,8,["onClick"])]),_:1}))]),_:1})]),_:1},8,["modelValue"])],64)}var io=X(Kt,[["render",oo]]);export{io as default};
