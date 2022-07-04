import{f as E,c as f,h as q,j as F,r as L,k as Ve,o as j,n as Z,l as K,m as we,g as R,p as be,i as qe,q as ae,w as k,s as Fe,u as ke,t as Ce,v as ot,x as I,y as rt,z as Y,A as ce,B as $e,C as de,D as ge,E as fe,G as He,H as ut,I as st,J as ct,K as dt,L as ft,M as G,N as vt,O as ze,P as mt,Q as We,R as ht,S as bt,U as gt,V as yt,W as ve,X as J,a as pt,Y as wt,Z as qt,_ as kt,$ as Ct,a0 as Ae,a1 as Ie,a2 as N,a3 as ee,a4 as $,d as B,a5 as _t,a6 as Lt,a7 as te,a8 as Te,a9 as Ee,aa as St,ab as xt,ac as Bt,F as $t,ad as zt}from"./index.bce71b2e.js";import{c as Tt}from"./selection.f7dcecfb.js";var Et=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:l.value},F(i.default))}}),Ot=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:l.value},F(i.default))}});function Pt(){const e=L(!Ve.value);return e.value===!1&&j(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver!="undefined",Oe=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ye=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let l=null,r,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?u():l===null&&(l=setTimeout(u,e.debounce))}function u(){if(clearTimeout(l),l=null,r){const{offsetWidth:c,offsetHeight:a}=r;(c!==t.width||a!==t.height)&&(t={width:c,height:a},i("resize",t))}}const m=R();if(Object.assign(m.proxy,{trigger:n}),Ne===!0){let c;return j(()=>{Z(()=>{r=m.proxy.$el.parentNode,r&&(c=new ResizeObserver(n),c.observe(r),u())})}),K(()=>{clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),we}else{let C=function(){clearTimeout(l),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",n,be.passive),a=void 0)},b=function(){C(),r&&r.contentDocument&&(a=r.contentDocument.defaultView,a.addEventListener("resize",n,be.passive),u())};const c=Pt();let a;return j(()=>{Z(()=>{r=m.proxy.$el,r&&b()})}),K(C),()=>{if(c.value===!0)return q("object",{style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:b})}}}}),Dt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:l}){const{proxy:{$q:r}}=R(),t=qe(ae,()=>{console.error("QHeader needs to be child of QLayout")}),n=L(parseInt(e.heightHint,10)),u=L(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?n.value:0;const v=n.value-t.scroll.value.position;return v>0?v:0}),a=f(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),C=f(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=f(()=>{const v=t.rows.value.top,S={};return v[0]==="l"&&t.left.space===!0&&(S[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(S[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function d(v,S){t.update("header",v,S)}function y(v,S){v.value!==S&&(v.value=S)}function _({height:v}){y(n,v),d("size",v)}function p(v){C.value===!0&&y(u,!0),l("focusin",v)}k(()=>e.modelValue,v=>{d("space",v),y(u,!0),t.animate()}),k(c,v=>{d("offset",v)}),k(()=>e.reveal,v=>{v===!1&&y(u,e.modelValue)}),k(u,v=>{t.animate(),l("reveal",v)}),k(t.scroll,v=>{e.reveal===!0&&y(u,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const O={};return t.instances.header=O,e.modelValue===!0&&d("size",n.value),d("space",e.modelValue),d("offset",c.value),K(()=>{t.instances.header===O&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const v=Fe(i.default,[]);return e.elevated===!0&&v.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(q(ye,{debounce:0,onResize:_})),q("header",{class:b.value,style:g.value,onFocusin:p},v)}}}),pe=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const l=f(()=>parseInt(e.lines,10)),r=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>q("div",{style:t.value,class:r.value},F(i.default))}}),Qt=E({name:"QList",props:{...ke,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:i}){const l=R(),r=Ce(e,l.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q("div",{class:t.value},F(i.default))}});const _e={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Mt=Object.keys(_e);_e.all=!0;function Pe(e){const i={};for(const l of Mt)e[l]===!0&&(i[l]=!0);return Object.keys(i).length===0?_e:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function De(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function me(e,i,l){const r=ge(e);let t,n=r.left-i.event.x,u=r.top-i.event.y,m=Math.abs(n),c=Math.abs(u);const a=i.direction;a.horizontal===!0&&a.vertical!==!0?t=n<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=u<0?"up":"down":a.up===!0&&u<0?(t="up",m>c&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.down===!0&&u>0?(t="down",m>c&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.left===!0&&n<0?(t="left",m<c&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down"))):a.right===!0&&n>0&&(t="right",m<c&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down")));let C=!1;if(t===void 0&&l===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,C=!0,t==="left"||t==="right"?(r.left-=n,m=0,n=0):(r.top-=u,c=0,u=0)}return{synthetic:C,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:r,direction:t,isFirst:i.event.isFirst,isFinal:l===!0,duration:Date.now()-i.event.time,distance:{x:m,y:c},offset:{x:n,y:u},delta:{x:r.left-i.event.lastX,y:r.top-i.event.lastY}}}}let Rt=0;var he=ot({name:"touch-pan",beforeMount(e,{value:i,modifiers:l}){if(l.mouse!==!0&&I.has.touch!==!0)return;function r(n,u){l.mouse===!0&&u===!0?He(n):(l.stop===!0&&de(n),l.prevent===!0&&$e(n))}const t={uid:"qvtp_"+Rt++,handler:i,modifiers:l,direction:Pe(l),noop:we,mouseStart(n){De(n,t)&&rt(n)&&(Y(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(De(n,t)){const u=n.target;Y(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(I.is.firefox===!0&&ce(e,!0),t.lastEvt=n,u===!0||l.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const a=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&$e(a),n.cancelBubble===!0&&de(a),Object.assign(a,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:a}}de(n)}const{left:m,top:c}=ge(n);t.event={x:m,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(n){if(t.event===void 0)return;const u=ge(n),m=u.left-t.event.x,c=u.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=n;const a=t.event.mouse===!0,C=()=>{r(n,a),l.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,l.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const y=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{y(),d()},50):y()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(n,t.event.mouse);const{payload:d,synthetic:y}=me(n,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&C(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=y===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){C(),t.event.detected=!0,t.move(n);return}const b=Math.abs(m),g=Math.abs(c);b!==g&&(t.direction.horizontal===!0&&b>g||t.direction.vertical===!0&&b<g||t.direction.up===!0&&b<g&&c<0||t.direction.down===!0&&b<g&&c>0||t.direction.left===!0&&b>g&&m<0||t.direction.right===!0&&b>g&&m>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(fe(t,"temp"),I.is.firefox===!0&&ce(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(n===void 0?t.lastEvt:n,t).payload);const{payload:m}=me(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,l.mouse===!0&&Y(t,"main",[[e,"mousedown","mouseStart",`passive${l.mouseCapture===!0?"Capture":""}`]]),I.has.touch===!0&&Y(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const l=e.__qtouchpan;l!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&l.end(),l.handler=i.value),l.direction=Pe(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),fe(i,"main"),fe(i,"temp"),I.is.firefox===!0&&ce(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Qe=150;var Vt=E({name:"QDrawer",inheritAttrs:!1,props:{...ut,...ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"on-layout","mini-state"],setup(e,{slots:i,emit:l,attrs:r}){const t=R(),{proxy:{$q:n}}=t,u=Ce(e,n),{preventBodyScroll:m}=mt(),{registerTimeout:c}=ct(),a=qe(ae,()=>{console.error("QDrawer needs to be child of QLayout")});let C,b,g;const d=L(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),y=f(()=>e.mini===!0&&d.value!==!0),_=f(()=>y.value===!0?e.miniWidth:e.width),p=L(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),O=f(()=>e.persistent!==!0&&(d.value===!0||je.value===!0));function v(o,h){if(P(),o!==!1&&a.animate(),T(0),d.value===!0){const x=a.instances[U.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),Q(1),a.isContainer.value!==!0&&m(!0)}else Q(0),o!==!1&&re(!1);c(()=>{o!==!1&&re(!0),h!==!0&&l("show",o)},Qe)}function S(o,h){V(),o!==!1&&a.animate(),Q(0),T(H.value*_.value),ue(),h!==!0&&c(()=>{l("hide",o)},Qe)}const{show:s,hide:w}=dt({showing:p,hideOnRouteChange:O,handleShow:v,handleHide:S}),{addToHistory:P,removeFromHistory:V}=ft(p,w,O),D={belowBreakpoint:d,hide:w},z=f(()=>e.side==="right"),H=f(()=>(n.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),Le=L(0),W=L(!1),ne=L(!1),Se=L(_.value*H.value),U=f(()=>z.value===!0?"left":"right"),ie=f(()=>p.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),le=f(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(z.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),A=f(()=>e.overlay===!1&&p.value===!0&&d.value===!1),je=f(()=>e.overlay===!0&&p.value===!0&&d.value===!1),Ke=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&W.value===!1?" hidden":"")),Ue=f(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),xe=f(()=>z.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Xe=f(()=>z.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ye=f(()=>{const o={};return a.header.space===!0&&xe.value===!1&&(le.value===!0?o.top=`${a.header.offset}px`:a.header.space===!0&&(o.top=`${a.header.size}px`)),a.footer.space===!0&&Xe.value===!1&&(le.value===!0?o.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(o.bottom=`${a.footer.size}px`)),o}),Ge=f(()=>{const o={width:`${_.value}px`,transform:`translateX(${Se.value}px)`};return d.value===!0?o:Object.assign(o,Ye.value)}),Je=f(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ze=f(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${y.value===!0?"mini":"standard"}`+(le.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(xe.value===!0?" q-drawer--top-padding":""))),et=f(()=>{const o=n.lang.rtl===!0?e.side:U.value;return[[he,it,void 0,{[o]:!0,mouse:!0}]]}),tt=f(()=>{const o=n.lang.rtl===!0?U.value:e.side;return[[he,Be,void 0,{[o]:!0,mouse:!0}]]}),at=f(()=>{const o=n.lang.rtl===!0?U.value:e.side;return[[he,Be,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){lt(d,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(d,o=>{o===!0?(C=p.value,p.value===!0&&w(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(p.value===!0?(T(0),Q(0),ue()):s(!1))}),k(()=>e.side,(o,h)=>{a.instances[h]===D&&(a.instances[h]=void 0,a[h].space=!1,a[h].offset=0),a.instances[o]=D,a[o].size=_.value,a[o].space=A.value,a[o].offset=ie.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),k(()=>e.behavior+e.breakpoint,oe),k(a.isContainer,o=>{p.value===!0&&m(o!==!0),o===!0&&oe()}),k(a.scrollbarWidth,()=>{T(p.value===!0?0:void 0)}),k(ie,o=>{M("offset",o)}),k(A,o=>{l("on-layout",o),M("space",o)}),k(z,()=>{T()}),k(_,o=>{T(),se(e.miniToOverlay,o)}),k(()=>e.miniToOverlay,o=>{se(o,_.value)}),k(()=>n.lang.rtl,()=>{T()}),k(()=>e.mini,()=>{e.modelValue===!0&&(nt(),a.animate())}),k(y,o=>{l("mini-state",o)});function T(o){o===void 0?Z(()=>{o=p.value===!0?0:_.value,T(H.value*o)}):(a.isContainer.value===!0&&z.value===!0&&(d.value===!0||Math.abs(o)===_.value)&&(o+=H.value*a.scrollbarWidth.value),Se.value=o)}function Q(o){Le.value=o}function re(o){const h=o===!0?"remove":a.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function nt(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,b=setTimeout(()=>{ne.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(o){if(p.value!==!1)return;const h=_.value,x=G(o.distance.x,0,h);if(o.isFinal===!0){x>=Math.min(75,h)===!0?s():(a.animate(),Q(0),T(H.value*h)),W.value=!1;return}T((n.lang.rtl===!0?z.value!==!0:z.value)?Math.max(h-x,0):Math.min(0,x-h)),Q(G(x/h,0,1)),o.isFirst===!0&&(W.value=!0)}function Be(o){if(p.value!==!0)return;const h=_.value,x=o.direction===e.side,X=(n.lang.rtl===!0?x!==!0:x)?G(o.distance.x,0,h):0;if(o.isFinal===!0){Math.abs(X)<Math.min(75,h)===!0?(a.animate(),Q(1),T(0)):w(),W.value=!1;return}T(H.value*X),Q(G(1-X/h,0,1)),o.isFirst===!0&&(W.value=!0)}function ue(){m(!1),re(!0)}function M(o,h){a.update(e.side,o,h)}function lt(o,h){o.value!==h&&(o.value=h)}function se(o,h){M("size",o===!0?e.miniWidth:h)}return a.instances[e.side]=D,se(e.miniToOverlay,_.value),M("space",A.value),M("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),j(()=>{l("on-layout",A.value),l("mini-state",y.value),C=e.showIfAbove===!0;const o=()=>{(p.value===!0?v:S)(!1,!0)};if(a.totalWidth.value!==0){Z(o);return}g=k(a.totalWidth,()=>{g(),g=void 0,p.value===!1&&e.showIfAbove===!0&&d.value===!1?s(!1):o()})}),K(()=>{g!==void 0&&g(),clearTimeout(b),p.value===!0&&ue(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const o=[];d.value===!0&&(e.noSwipeOpen===!1&&o.push(vt(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),et.value)),o.push(ze("div",{ref:"backdrop",class:Ke.value,style:Ue.value,"aria-hidden":"true",onClick:w},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>at.value)));const h=y.value===!0&&i.mini!==void 0,x=[q("div",{...r,key:""+h,class:[Je.value,r.class]},h===!0?i.mini():F(i.default))];return e.elevated===!0&&p.value===!0&&x.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(ze("aside",{ref:"content",class:Ze.value,style:Ge.value},x,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>tt.value)),q("div",{class:"q-drawer-container"},o)}}}),Ft=E({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:l}}=R(),r=qe(ae,()=>{console.error("QPageContainer needs to be child of QLayout")});We(ht,!0);const t=f(()=>{const n={};return r.header.space===!0&&(n.paddingTop=`${r.header.size}px`),r.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(n.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),n});return()=>q("div",{class:"q-page-container",style:t.value},F(i.default))}});const{passive:Me}=be,Ht=["both","horizontal","vertical"];var Wt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ht.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,n;k(()=>e.scrollTarget,()=>{c(),m()});function u(){r!==null&&r();const b=Math.max(0,gt(t)),g=yt(t),d={top:b-l.position.top,left:g-l.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";l.position={top:b,left:g},l.directionChanged=l.direction!==y,l.delta=d,l.directionChanged===!0&&(l.direction=y,l.inflectionPoint=l.position),i("scroll",{...l})}function m(){t=bt(n,e.scrollTarget),t.addEventListener("scroll",a,Me),a(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",a,Me),t=void 0)}function a(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(r===null){const[g,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{d(g),r=null}}}const C=R();return j(()=>{n=C.proxy.$el.parentNode,m()}),K(()=>{r!==null&&r(),c()}),Object.assign(C.proxy,{trigger:a,getPosition:()=>l}),we}}),At=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:l}){const{proxy:{$q:r}}=R(),t=L(null),n=L(r.screen.height),u=L(e.container===!0?0:r.screen.width),m=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),a=L(Ve.value===!0?0:ve()),C=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),g=f(()=>a.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),d=f(()=>a.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function y(s){if(e.container===!0||document.qScrollPrevented!==!0){const w={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};m.value=w,e.onScroll!==void 0&&l("scroll",w)}}function _(s){const{height:w,width:P}=s;let V=!1;n.value!==w&&(V=!0,n.value=w,e.onScrollHeight!==void 0&&l("scroll-height",w),O()),u.value!==P&&(V=!0,u.value=P),V===!0&&e.onResize!==void 0&&l("resize",s)}function p({height:s}){c.value!==s&&(c.value=s,O())}function O(){if(e.container===!0){const s=n.value>c.value?ve():0;a.value!==s&&(a.value=s)}}let v;const S={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:a,totalWidth:f(()=>u.value+a.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:m,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(s,w,P){S[s][w]=P}};if(We(ae,S),ve()>0){let P=function(){s=null,w.classList.remove("hide-scrollbar")},V=function(){if(s===null){if(w.scrollHeight>r.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(P,300)},D=function(z){s!==null&&z==="remove"&&(clearTimeout(s),P()),window[`${z}EventListener`]("resize",V)},s=null;const w=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),pt(()=>{D("remove")})}return()=>{const s=wt(i.default,[q(Wt,{onScroll:y}),q(ye,{onResize:_})]),w=q("div",{class:C.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},s);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(ye,{onResize:p}),q("div",{class:"absolute-full",style:g.value},[q("div",{class:"scroll",style:d.value},[w])])]):w}}}),Re=E({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const l=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:l.value},F(i.default))}}),It=E({name:"QItem",props:{...ke,...qt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:l}){const{proxy:{$q:r}}=R(),t=Ce(e,r),{hasRouterLink:n,hasLink:u,linkProps:m,linkClass:c,linkTag:a,navigateToRouterLink:C}=kt(),b=L(null),g=L(null),d=f(()=>e.clickable===!0||u.value===!0||e.tag==="label"),y=f(()=>e.disable!==!0&&d.value===!0),_=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),p=f(()=>{if(e.insetLevel===void 0)return null;const s=r.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function O(s){y.value===!0&&(g.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===b.value?g.value.focus():document.activeElement===g.value&&b.value.focus()),n.value===!0&&C(s),l("click",s))}function v(s){if(y.value===!0&&Ct(s,13)===!0){He(s),s.qKeyEvent=!0;const w=new MouseEvent("click",s);w.qKeyEvent=!0,b.value.dispatchEvent(w)}l("keyup",s)}function S(){const s=Fe(i.default,[]);return y.value===!0&&s.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:g})),s}return()=>{const s={ref:b,class:_.value,style:p.value,onClick:O,onKeyup:v};return y.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,m.value)):d.value===!0&&(s["aria-disabled"]="true"),q(a.value,s,S())}}});const Nt=Ae({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function jt(e,i,l,r,t,n){return N(),ee(It,{clickable:"",tag:"a",href:e.link},{default:$(()=>[e.icon?(N(),ee(Re,{key:0,avatar:""},{default:$(()=>[B(_t,{name:e.icon},null,8,["name"])]),_:1})):Lt("",!0),B(Re,null,{default:$(()=>[B(pe,null,{default:$(()=>[te(Te(e.title),1)]),_:1}),B(pe,{caption:""},{default:$(()=>[te(Te(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Kt=Ie(Nt,[["render",jt]]);const Ut=[{title:"Home",icon:"home",link:"/"}],Xt=Ae({name:"MainLayout",components:{EssentialLink:Kt},setup(){const e=L(!1);return{essentialLinks:Ut,leftDrawerOpen:e,toggleLeftDrawer:()=>{e.value=!e.value}}}}),Yt=te(" FreightWaves Challenge "),Gt=te(" Main menu ");function Jt(e,i,l,r,t,n){const u=Ee("EssentialLink"),m=Ee("router-view");return N(),ee(At,{view:"hHh lpR fFf"},{default:$(()=>[B(Dt,{elevated:""},{default:$(()=>[B(Ot,null,{default:$(()=>[B(St,{icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer,flat:"",dense:"",round:""},null,8,["onClick"]),B(Et,null,{default:$(()=>[Yt]),_:1})]),_:1})]),_:1}),B(Vt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=c=>e.leftDrawerOpen=c),behavior:"mobile",elevated:""},{default:$(()=>[B(Qt,null,{default:$(()=>[B(pe,{header:""},{default:$(()=>[Gt]),_:1}),(N(!0),xt($t,null,Bt(e.essentialLinks,c=>(N(),ee(u,zt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(Ft,null,{default:$(()=>[B(m)]),_:1})]),_:1})}var aa=Ie(Xt,[["render",Jt]]);export{aa as default};
