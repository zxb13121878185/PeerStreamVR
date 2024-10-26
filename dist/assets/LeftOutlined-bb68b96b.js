import{h as X,e as g,P as H,r as K,a0 as _e,G as re,I as Dt,k as v,T as Oe,v as ft,u as Ve,q as vt,Q as Nt,n as Z,i as p,aq as Tt,ao as Be,t as ge,j as D,aM as Rt,N as jt,A as ze,aJ as Ze,p as we,m as ye,af as Re,l as de,aj as Ae,s as Ee,as as dt,W as pt,X as $t,Z as kt,Y as Lt,$ as Ft,aN as Qe,J as ke,ai as Ke,aO as Vt}from"./index-ff77ca57.js";import{i as Bt,w as Me,c as Ie,S as je,s as mt,g as zt,h as Ht,j as Wt,k as Gt,e as Yt}from"./index-20432540.js";import{T as gt,O as Pe,K as Ut}from"./Overflow-feb0de69.js";var U={adjustX:1,adjustY:1},q=[0,0],yt={left:{points:["cr","cl"],overflow:U,offset:[-4,0],targetOffset:q},right:{points:["cl","cr"],overflow:U,offset:[4,0],targetOffset:q},top:{points:["bc","tc"],overflow:U,offset:[0,-4],targetOffset:q},bottom:{points:["tc","bc"],overflow:U,offset:[0,4],targetOffset:q},topLeft:{points:["bl","tl"],overflow:U,offset:[0,-4],targetOffset:q},leftTop:{points:["tr","tl"],overflow:U,offset:[-4,0],targetOffset:q},topRight:{points:["br","tr"],overflow:U,offset:[0,-4],targetOffset:q},rightTop:{points:["tl","tr"],overflow:U,offset:[4,0],targetOffset:q},bottomRight:{points:["tr","br"],overflow:U,offset:[0,4],targetOffset:q},rightBottom:{points:["bl","br"],overflow:U,offset:[4,0],targetOffset:q},bottomLeft:{points:["tl","bl"],overflow:U,offset:[0,4],targetOffset:q},leftBottom:{points:["br","bl"],overflow:U,offset:[-4,0],targetOffset:q}},qt={prefixCls:String,id:String,overlayInnerStyle:H.any};const Xt=X({compatConfig:{MODE:3},name:"Content",props:qt,slots:["overlay"],setup:function(e,n){var a=n.slots;return function(){var o;return g("div",{class:"".concat(e.prefixCls,"-inner"),id:e.id,role:"tooltip",style:e.overlayInnerStyle},[(o=a.overlay)===null||o===void 0?void 0:o.call(a)])}}});var Jt=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"];function et(){}const Zt=X({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:H.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:H.string.def("right"),transitionName:String,animation:H.any,afterVisibleChange:H.func.def(function(){}),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:H.string.def("rc-tooltip"),mouseEnterDelay:H.number.def(.1),mouseLeaveDelay:H.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:H.object.def(function(){return{}}),arrowContent:H.any.def(null),tipId:String,builtinPlacements:H.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},slots:["arrowContent","overlay"],setup:function(e,n){var a=n.slots,o=n.attrs,i=n.expose,s=K(),y=function(){var M=e.prefixCls,P=e.tipId,_=e.overlayInnerStyle;return[g("div",{class:"".concat(M,"-arrow"),key:"arrow"},[Oe(a,e,"arrowContent")]),g(Xt,{key:"content",prefixCls:M,id:P,overlayInnerStyle:_},{overlay:a.overlay})]},c=function(){return s.value.getPopupDomNode()};i({getPopupDomNode:c,triggerDOM:s,forcePopupAlign:function(){var M;return(M=s.value)===null||M===void 0?void 0:M.forcePopupAlign()}});var C=K(!1),u=K(!1);return _e(function(){var f=e.destroyTooltipOnHide;if(typeof f=="boolean")C.value=f;else if(f&&re(f)==="object"){var M=f.keepParent;C.value=M===!0,u.value=M===!1}}),function(){var f=e.overlayClassName,M=e.trigger,P=e.mouseEnterDelay,_=e.mouseLeaveDelay,w=e.overlayStyle,R=e.prefixCls,j=e.afterVisibleChange,J=e.transitionName,E=e.animation,x=e.placement,I=e.align;e.destroyTooltipOnHide;var d=e.defaultVisible,m=Dt(e,Jt),O=v({},m);e.visible!==void 0&&(O.popupVisible=e.visible);var b=v(v(v({popupClassName:f,prefixCls:R,action:M,builtinPlacements:yt,popupPlacement:x,popupAlign:I,afterPopupVisibleChange:j,popupTransitionName:J,popupAnimation:E,defaultPopupVisible:d,destroyPopupOnHide:C.value,autoDestroy:u.value,mouseLeaveDelay:_,popupStyle:w,mouseEnterDelay:P},O),o),{},{onPopupVisibleChange:e.onVisibleChange||et,onPopupAlign:e.onPopupAlign||et,ref:s,popup:y()});return g(gt,b,{default:a.default})}}});var Yn=ft("success","processing","error","default","warning"),Qt=ft("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");const en=function(){return{trigger:[String,Array],visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:{type:Object,default:void 0},overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:{type:Object,default:void 0},builtinPlacements:{type:Object,default:void 0},children:Array,onVisibleChange:Function,"onUpdate:visible":Function}};var tn={adjustX:1,adjustY:1},tt={adjustX:0,adjustY:0},nn=[0,0];function nt(t){return typeof t=="boolean"?t?tn:tt:v(v({},tt),t)}function an(t){var e=t.arrowWidth,n=e===void 0?4:e,a=t.horizontalArrowShift,o=a===void 0?16:a,i=t.verticalArrowShift,s=i===void 0?8:i,y=t.autoAdjustOverflow,c=t.arrowPointAtCenter,C={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(o+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(s+n)]},topRight:{points:["br","tc"],offset:[o+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(s+n)]},bottomRight:{points:["tr","bc"],offset:[o+n,4]},rightBottom:{points:["bl","cr"],offset:[4,s+n]},bottomLeft:{points:["tl","bc"],offset:[-(o+n),4]},leftBottom:{points:["br","cl"],offset:[-4,s+n]}};return Object.keys(C).forEach(function(u){C[u]=c?v(v({},C[u]),{},{overflow:nt(y),targetOffset:nn}):v(v({},yt[u]),{},{overflow:nt(y)}),C[u].ignoreShake=!0}),C}function on(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=0,n=t.length;e<n;e++)if(t[e]!==void 0)return t[e]}var ln=function(e,n){var a={},o=v({},e);return n.forEach(function(i){e&&i in e&&(a[i]=e[i],delete o[i])}),{picked:a,omitted:o}},at=new RegExp("^(".concat(Qt.join("|"),")(-inverse)?$")),rn=function(){return v(v({},en()),{},{title:H.any})};const un=X({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:Bt(rn(),{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:["title"],setup:function(e,n){var a=n.slots,o=n.emit,i=n.attrs,s=n.expose,y=Ve("tooltip",e),c=y.prefixCls,C=y.getPopupContainer,u=K(on([e.visible,e.defaultVisible])),f=K();vt(function(){Nt(e.defaultVisible===void 0,"Tooltip","'defaultVisible' is deprecated, please use 'v-model:visible'")});var M;Z(function(){return e.visible},function(I){Me.cancel(M),M=Me(function(){u.value=!!I})});var P=function(){var d,m=(d=e.title)!==null&&d!==void 0?d:a.title;return!m&&m!==0},_=function(d){var m=P();e.visible===void 0&&(u.value=m?!1:d),m||(o("update:visible",d),o("visibleChange",d))},w=function(){return f.value.getPopupDomNode()};s({getPopupDomNode:w,visible:u,forcePopupAlign:function(){var d;return(d=f.value)===null||d===void 0?void 0:d.forcePopupAlign()}});var R=p(function(){var I=e.builtinPlacements,d=e.arrowPointAtCenter,m=e.autoAdjustOverflow;return I||an({arrowPointAtCenter:d,autoAdjustOverflow:m})}),j=function(d){return d||d===""},J=function(d){var m=d.type;if(re(m)==="object"&&d.props&&((m.__ANT_BUTTON===!0||m==="button")&&j(d.props.disabled)||m.__ANT_SWITCH===!0&&(j(d.props.disabled)||j(d.props.loading)))){var O=ln(Rt(d),["position","left","right","top","bottom","float","display","zIndex"]),b=O.picked,$=O.omitted,S=v(v({display:"inline-block"},b),{},{cursor:"not-allowed",lineHeight:1,width:d.props&&d.props.block?"100%":null}),z=v(v({},$),{},{pointerEvents:"none"}),k=Ie(d,{style:z},!0);return g("span",{style:S,class:"".concat(c.value,"-disabled-compatible-wrapper")},[k])}return d},E=function(){var d,m;return(d=e.title)!==null&&d!==void 0?d:(m=a.title)===null||m===void 0?void 0:m.call(a)},x=function(d,m){var O=R.value,b=Object.keys(O).filter(function(z){return O[z].points[0]===m.points[0]&&O[z].points[1]===m.points[1]})[0];if(b){var $=d.getBoundingClientRect(),S={top:"50%",left:"50%"};b.indexOf("top")>=0||b.indexOf("Bottom")>=0?S.top="".concat($.height-m.offset[1],"px"):(b.indexOf("Top")>=0||b.indexOf("bottom")>=0)&&(S.top="".concat(-m.offset[1],"px")),b.indexOf("left")>=0||b.indexOf("Right")>=0?S.left="".concat($.width-m.offset[0],"px"):(b.indexOf("right")>=0||b.indexOf("Left")>=0)&&(S.left="".concat(-m.offset[0],"px")),d.style.transformOrigin="".concat(S.left," ").concat(S.top)}};return function(){var I,d,m,O=e.openClassName,b=e.color,$=e.overlayClassName,S=(I=Tt((d=a.default)===null||d===void 0?void 0:d.call(a)))!==null&&I!==void 0?I:null;S=S.length===1?S[0]:S;var z=u.value;if(e.visible===void 0&&P()&&(z=!1),!S)return null;var k=J(Be(S)?S:g("span",null,[S])),ee=ge((m={},D(m,O||"".concat(c.value,"-open"),!0),D(m,k.props&&k.props.class,k.props&&k.props.class),m)),ne=ge($,D({},"".concat(c.value,"-").concat(b),b&&at.test(b))),te,ae;b&&!at.test(b)&&(te={backgroundColor:b},ae={backgroundColor:b});var ue=v(v(v({},i),e),{},{prefixCls:c.value,getPopupContainer:C.value,builtinPlacements:R.value,visible:z,ref:f,overlayClassName:ne,overlayInnerStyle:te,onVisibleChange:_,onPopupAlign:x});return g(Zt,ue,{default:function(){return[u.value?Ie(k,{class:ee}):k]},arrowContent:function(){return g("span",{class:"".concat(c.value,"-arrow-content"),style:ae},null)},overlay:E})}}}),sn=jt(un);var cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const fn=cn;function ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),a.forEach(function(o){vn(t,o,n[o])})}return t}function vn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var He=function(e,n){var a=ot({},e,n.attrs);return g(ze,ot({},a,{icon:fn}),null)};He.displayName="EllipsisOutlined";He.inheritAttrs=!1;const dn=He;var pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};const mn=pn;function lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),a.forEach(function(o){gn(t,o,n[o])})}return t}function gn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var We=function(e,n){var a=lt({},e,n.attrs);return g(ze,lt({},a,{icon:mn}),null)};We.displayName="RightOutlined";We.inheritAttrs=!1;const Un=We;function yn(t,e,n,a){var o=n?n.call(a,t,e):void 0;if(o!==void 0)return!!o;if(t===e)return!0;if(re(t)!=="object"||!t||re(e)!=="object"||!e)return!1;var i=Object.keys(t),s=Object.keys(e);if(i.length!==s.length)return!1;for(var y=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var C=i[c];if(!y(C))return!1;var u=t[C],f=e[C];if(o=n?n.call(a,u,f,C):void 0,o===!1||o===void 0&&u!==f)return!1}return!0}function Ce(t,e,n,a){return yn(Ze(t),Ze(e),n,a)}var bt=Symbol("menuContextKey"),ht=function(e){we(bt,e)},ie=function(){return ye(bt)},Ct=Symbol("ForceRenderKey"),bn=function(e){we(Ct,e)},Mt=function(){return ye(Ct,!1)},Pt=Symbol("menuFirstLevelContextKey"),Ot=function(e){we(Pt,e)},hn=function(){return ye(Pt,!0)},De=X({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0},isRootMenu:{type:Boolean,default:void 0}},setup:function(e,n){var a=n.slots,o=ie(),i=v({},o);return e.mode!==void 0&&(i.mode=Re(e,"mode")),e.isRootMenu!==void 0&&(i.isRootMenu=Re(e,"isRootMenu")),e.overflowDisabled!==void 0&&(i.overflowDisabled=Re(e,"overflowDisabled")),ht(i),function(){var s;return(s=a.default)===null||s===void 0?void 0:s.call(a)}}});const Cn=ht;function Mn(){}var Pn=1/0,On=je&&1/mt(new je([,-0]))[1]==Pn?function(t){return new je(t)}:Mn;const In=On;var Sn=200;function wn(t,e,n){var a=-1,o=Ht,i=t.length,s=!0,y=[],c=y;if(n)s=!1,o=Wt;else if(i>=Sn){var C=e?null:In(t);if(C)return mt(C);s=!1,o=Gt,c=new zt}else c=e?[]:y;e:for(;++a<i;){var u=t[a],f=e?e(u):u;if(u=n||u!==0?u:0,s&&f===f){for(var M=c.length;M--;)if(c[M]===f)continue e;e&&c.push(f),y.push(u)}else o(c,f,n)||(c!==y&&c.push(f),y.push(u))}return y}function $e(t){return t&&t.length?wn(t):[]}var Kn=Symbol("siderCollapsed"),qn=Symbol("siderHookProvider"),xe="$$__vc-menu-more__key",It=Symbol("KeyPathContext"),Ge=function(){return ye(It,{parentEventKeys:p(function(){return[]}),parentKeys:p(function(){return[]}),parentInfo:{}})},xn=function(e,n,a){var o=Ge(),i=o.parentEventKeys,s=o.parentKeys,y=p(function(){return[].concat(de(i.value),[e])}),c=p(function(){return[].concat(de(s.value),[n])});return we(It,{parentEventKeys:y,parentKeys:c,parentInfo:a}),c},St=Symbol("measure"),rt=X({compatConfig:{MODE:3},setup:function(e,n){var a=n.slots;return we(St,!0),function(){var o;return(o=a.default)===null||o===void 0?void 0:o.call(a)}}}),Ye=function(){return ye(St,!1)};const _n=xn;function wt(t){var e=ie(),n=e.mode,a=e.rtl,o=e.inlineIndent;return p(function(){return n.value!=="inline"?null:a.value?{paddingRight:"".concat(t.value*o.value,"px")}:{paddingLeft:"".concat(t.value*o.value,"px")}})}var An=0,En=function(){return{id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:H.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function}};const Ne=X({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:En(),slots:["icon","title"],setup:function(e,n){var a=n.slots,o=n.emit,i=n.attrs,s=pt(),y=Ye(),c=re(s.vnode.key)==="symbol"?String(s.vnode.key):s.vnode.key;Ae(re(s.vnode.key)!=="symbol","MenuItem",'MenuItem `:key="'.concat(String(c),'"` not support Symbol type'));var C="menu_item_".concat(++An,"_$$_").concat(c),u=Ge(),f=u.parentEventKeys,M=u.parentKeys,P=ie(),_=P.prefixCls,w=P.activeKeys,R=P.disabled,j=P.changeActiveKeys,J=P.rtl,E=P.inlineCollapsed,x=P.siderCollapsed,I=P.onItemClick,d=P.selectedKeys,m=P.registerMenuInfo,O=P.unRegisterMenuInfo,b=hn(),$=K(!1),S=p(function(){return[].concat(de(M.value),[c])}),z={eventKey:C,key:c,parentEventKeys:f,parentKeys:M,isLeaf:!0};m(C,z),Ee(function(){O(C)}),Z(w,function(){$.value=!!w.value.find(function(r){return r===c})},{immediate:!0});var k=p(function(){return R.value||e.disabled}),ee=p(function(){return d.value.includes(c)}),ne=p(function(){var r,l="".concat(_.value,"-item");return r={},D(r,"".concat(l),!0),D(r,"".concat(l,"-danger"),e.danger),D(r,"".concat(l,"-active"),$.value),D(r,"".concat(l,"-selected"),ee.value),D(r,"".concat(l,"-disabled"),k.value),r}),te=function(l){return{key:c,eventKey:C,keyPath:S.value,eventKeyPath:[].concat(de(f.value),[C]),domEvent:l,item:v(v({},e),i)}},ae=function(l){if(!k.value){var h=te(l);o("click",l),I(h)}},ue=function(l){k.value||(j(S.value),o("mouseenter",l))},Q=function(l){k.value||(j([]),o("mouseleave",l))},pe=function(l){if(o("keydown",l),l.which===Ut.ENTER){var h=te(l);o("click",l),I(h)}},me=function(l){j(S.value),o("focus",l)},W=function(l,h){var N=g("span",{class:"".concat(_.value,"-title-content")},[h]);return(!l||Be(h)&&h.type==="span")&&h&&E.value&&b&&typeof h=="string"?g("div",{class:"".concat(_.value,"-inline-collapsed-noicon")},[h.charAt(0)]):N},be=wt(p(function(){return S.value.length}));return function(){var r,l,h,N;if(y)return null;var T=(r=e.title)!==null&&r!==void 0?r:(l=a.title)===null||l===void 0?void 0:l.call(a),L=dt((h=a.default)===null||h===void 0?void 0:h.call(a)),B=L.length,F=T;typeof T=="undefined"?F=b&&B?L:"":T===!1&&(F="");var G={title:F};!x.value&&!E.value&&(G.title=null,G.visible=!1);var se={};e.role==="option"&&(se["aria-selected"]=ee.value);var ce=Oe(a,e,"icon");return g(sn,v(v({},G),{},{placement:J.value?"left":"right",overlayClassName:"".concat(_.value,"-inline-collapsed-tooltip")}),{default:function(){return[g(Pe.Item,v(v(v({component:"li"},i),{},{id:e.id,style:v(v({},i.style||{}),be.value),class:[ne.value,(N={},D(N,"".concat(i.class),!!i.class),D(N,"".concat(_.value,"-item-only-child"),(ce?B+1:B)===1),N)],role:e.role||"menuitem",tabindex:e.disabled?null:-1,"data-menu-id":c,"aria-disabled":e.disabled},se),{},{onMouseenter:ue,onMouseleave:Q,onClick:ae,onKeydown:pe,onFocus:me,title:typeof T=="string"?T:void 0}),{default:function(){return[Ie(ce,{class:"".concat(_.value,"-item-icon")},!1),W(ce,L)]}})]}})}}});var le={adjustX:1,adjustY:1},Dn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},Nn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},Tn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};const it=X({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:["popup"],emits:["visibleChange"],setup:function(e,n){var a=n.slots,o=n.emit,i=K(!1),s=ie(),y=s.getPopupContainer,c=s.rtl,C=s.subMenuOpenDelay,u=s.subMenuCloseDelay,f=s.builtinPlacements,M=s.triggerSubMenuAction,P=s.isRootMenu,_=s.forceSubMenuRender,w=s.motion,R=s.defaultMotions,j=Mt(),J=p(function(){return c.value?v(v({},Nn),f.value):v(v({},Dn),f.value)}),E=p(function(){return Tn[e.mode]}),x=K();Z(function(){return e.visible},function(m){Me.cancel(x.value),x.value=Me(function(){i.value=m})},{immediate:!0}),Ee(function(){Me.cancel(x.value)});var I=function(O){o("visibleChange",O)},d=p(function(){var m,O,b=w.value||((m=R.value)===null||m===void 0?void 0:m[e.mode])||((O=R.value)===null||O===void 0?void 0:O.other),$=typeof b=="function"?b():b;return $?$t($.name,{css:!0}):void 0});return function(){var m=e.prefixCls,O=e.popupClassName,b=e.mode,$=e.popupOffset,S=e.disabled;return g(gt,{prefixCls:m,popupClassName:ge("".concat(m,"-popup"),D({},"".concat(m,"-rtl"),c.value),O),stretch:b==="horizontal"?"minWidth":null,getPopupContainer:P.value?y.value:function(z){return z.parentNode},builtinPlacements:J.value,popupPlacement:E.value,popupVisible:i.value,popupAlign:$&&{offset:$},action:S?[]:[M.value],mouseEnterDelay:C.value,mouseLeaveDelay:u.value,onPopupVisibleChange:I,forceRender:j||_.value,popupAnimation:d.value},{popup:a.popup,default:a.default})}}});var Kt=function(e,n){var a,o=n.slots,i=n.attrs,s=ie(),y=s.prefixCls,c=s.mode;return g("ul",v(v({},i),{},{class:ge(y.value,"".concat(y.value,"-sub"),"".concat(y.value,"-").concat(c.value==="inline"?"inline":"vertical")),"data-menu-list":!0}),[(a=o.default)===null||a===void 0?void 0:a.call(o)])};Kt.displayName="SubMenuList";const xt=Kt,Rn=X({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup:function(e,n){var a=n.slots,o=p(function(){return"inline"}),i=ie(),s=i.motion,y=i.mode,c=i.defaultMotions,C=p(function(){return y.value===o.value}),u=K(!C.value),f=p(function(){return C.value?e.open:!1});Z(y,function(){C.value&&(u.value=!1)},{flush:"post"});var M=p(function(){var P,_,w=s.value||((P=c.value)===null||P===void 0?void 0:P[o.value])||((_=c.value)===null||_===void 0?void 0:_.other),R=typeof w=="function"?w():w;return v(v({},R),{},{appear:e.keyPath.length<=1})});return function(){var P;return u.value?null:g(De,{mode:o.value},{default:function(){return[g(kt,M.value,{default:function(){return[Lt(g(xt,{id:e.id},{default:function(){return[(P=a.default)===null||P===void 0?void 0:P.call(a)]}}),[[Ft,f.value]])]}})]}})}}});var ut=0,jn=function(){return{icon:H.any,title:H.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function}};const Se=X({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:jn(),slots:["icon","title","expandIcon"],setup:function(e,n){var a,o,i=n.slots,s=n.attrs,y=n.emit;Ot(!1);var c=Ye(),C=pt(),u=re(C.vnode.key)==="symbol"?String(C.vnode.key):C.vnode.key;Ae(re(C.vnode.key)!=="symbol","SubMenu",'SubMenu `:key="'.concat(String(u),'"` not support Symbol type'));var f=Qe(u)?u:"sub_menu_".concat(++ut,"_$$_not_set_key"),M=(a=e.eventKey)!==null&&a!==void 0?a:Qe(u)?"sub_menu_".concat(++ut,"_$$_").concat(u):f,P=Ge(),_=P.parentEventKeys,w=P.parentInfo,R=P.parentKeys,j=p(function(){return[].concat(de(R.value),[f])}),J=K([]),E={eventKey:M,key:f,parentEventKeys:_,childrenEventKeys:J,parentKeys:R};(o=w.childrenEventKeys)===null||o===void 0||o.value.push(M),Ee(function(){if(w.childrenEventKeys){var V;w.childrenEventKeys.value=(V=w.childrenEventKeys)===null||V===void 0?void 0:V.value.filter(function(A){return A!=M})}}),_n(M,f,E);var x=ie(),I=x.prefixCls,d=x.activeKeys,m=x.disabled,O=x.changeActiveKeys,b=x.mode,$=x.inlineCollapsed,S=x.antdMenuTheme,z=x.openKeys,k=x.overflowDisabled,ee=x.onOpenChange,ne=x.registerMenuInfo,te=x.unRegisterMenuInfo,ae=x.selectedSubMenuKeys,ue=x.expandIcon,Q=u!=null,pe=!c&&(Mt()||!Q);bn(pe),(c&&Q||!c&&!Q||pe)&&(ne(M,E),Ee(function(){te(M)}));var me=p(function(){return"".concat(I.value,"-submenu")}),W=p(function(){return m.value||e.disabled}),be=K(),r=K(),l=p(function(){return z.value.includes(f)}),h=p(function(){return!k.value&&l.value}),N=p(function(){return ae.value.includes(f)}),T=K(!1);Z(d,function(){T.value=!!d.value.find(function(V){return V===f})},{immediate:!0});var L=function(A){W.value||(y("titleClick",A,f),b.value==="inline"&&ee(f,!l.value))},B=function(A){W.value||(O(j.value),y("mouseenter",A))},F=function(A){W.value||(O([]),y("mouseleave",A))},G=wt(p(function(){return j.value.length})),se=function(A){b.value!=="inline"&&ee(f,A)},ce=function(){O(j.value)},he=M&&"".concat(M,"-popup"),qe=p(function(){return ge(I.value,"".concat(I.value,"-").concat(S.value),e.popupClassName)}),_t=function(A,Y){if(!Y)return $.value&&!R.value.length&&A&&typeof A=="string"?g("div",{class:"".concat(I.value,"-inline-collapsed-noicon")},[A.charAt(0)]):g("span",{class:"".concat(I.value,"-title-content")},[A]);var oe=Be(A)&&A.type==="span";return g(ke,null,[Ie(Y,{class:"".concat(I.value,"-item-icon")},!1),oe?A:g("span",{class:"".concat(I.value,"-title-content")},[A])])},Te=p(function(){return b.value!=="inline"&&j.value.length>1?"vertical":b.value}),At=p(function(){return b.value==="horizontal"?"vertical":b.value}),Et=p(function(){return Te.value==="horizontal"?"vertical":Te.value}),Xe=function(){var A=me.value,Y=Oe(i,e,"icon"),oe=e.expandIcon||i.expandIcon||ue.value,fe=_t(Oe(i,e,"title"),Y);return g("div",{style:G.value,class:"".concat(A,"-title"),tabindex:W.value?null:-1,ref:be,title:typeof fe=="string"?fe:null,"data-menu-id":f,"aria-expanded":h.value,"aria-haspopup":!0,"aria-controls":he,"aria-disabled":W.value,onClick:L,onFocus:ce},[fe,b.value!=="horizontal"&&oe?oe(v(v({},e),{},{isOpen:h.value})):g("i",{class:"".concat(A,"-arrow")},null)])};return function(){var V;if(c){var A;return Q?(A=i.default)===null||A===void 0?void 0:A.call(i):null}var Y=me.value,oe=function(){return null};return!k.value&&b.value!=="inline"?oe=function(){return g(it,{mode:Te.value,prefixCls:Y,visible:!e.internalPopupClose&&h.value,popupClassName:qe.value,popupOffset:e.popupOffset,disabled:W.value,onVisibleChange:se},{default:function(){return[Xe()]},popup:function(){return g(De,{mode:Et.value,isRootMenu:!1},{default:function(){return[g(xt,{id:he,ref:r},{default:i.default})]}})}})}:oe=function(){return g(it,null,{default:Xe})},g(De,{mode:At.value},{default:function(){return[g(Pe.Item,v(v({component:"li"},s),{},{role:"none",class:ge(Y,"".concat(Y,"-").concat(b.value),s.class,(V={},D(V,"".concat(Y,"-open"),h.value),D(V,"".concat(Y,"-active"),T.value),D(V,"".concat(Y,"-selected"),N.value),D(V,"".concat(Y,"-disabled"),W.value),V)),onMouseenter:B,onMouseleave:F,"data-submenu-id":f}),{default:function(){return g(ke,null,[oe(),!k.value&&g(Rn,{id:he,open:h.value,keyPath:j.value},{default:i.default})])}})]}})}}});var $n=function(){return{id:String,prefixCls:String,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},motion:Object,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:.1},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}},st=[];const ve=X({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:$n(),slots:["expandIcon","overflowedIndicator"],setup:function(e,n){var a=n.slots,o=n.emit,i=n.attrs,s=Ve("menu",e),y=s.prefixCls,c=s.direction,C=s.getPrefixCls,u=K({}),f=ye(Kn,K(void 0)),M=p(function(){return f.value!==void 0?f.value:e.inlineCollapsed}),P=K(!1);vt(function(){P.value=!0}),_e(function(){Ae(!(e.inlineCollapsed===!0&&e.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Ae(!(f.value!==void 0&&e.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});var _=K([]),w=K([]),R=K({});Z(u,function(){for(var r={},l=0,h=Object.values(u.value);l<h.length;l++){var N=h[l];r[N.key]=N}R.value=r},{flush:"post"}),_e(function(){if(e.activeKey!==void 0){var r=[],l=e.activeKey?R.value[e.activeKey]:void 0;l&&e.activeKey!==void 0?r=$e([].concat(Ke(l.parentKeys),e.activeKey)):r=[],Ce(_.value,r)||(_.value=r)}}),Z(function(){return e.selectedKeys},function(r){r&&(w.value=r.slice())},{immediate:!0,deep:!0});var j=K([]);Z([R,w],function(){var r=[];w.value.forEach(function(l){var h=R.value[l];h&&(r=r.concat(Ke(h.parentKeys)))}),r=$e(r),Ce(j.value,r)||(j.value=r)},{immediate:!0});var J=function(l){if(e.selectable){var h=l.key,N=w.value.includes(h),T;e.multiple?N?T=w.value.filter(function(B){return B!==h}):T=[].concat(de(w.value),[h]):T=[h];var L=v(v({},l),{},{selectedKeys:T});Ce(T,w.value)||(e.selectedKeys===void 0&&(w.value=T),o("update:selectedKeys",T),N&&e.multiple?o("deselect",L):o("select",L)),O.value!=="inline"&&!e.multiple&&E.value.length&&S(st)}},E=K([]);Z(function(){return e.openKeys},function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E.value;Ce(E.value,r)||(E.value=r.slice())},{immediate:!0,deep:!0});var x,I=function(l){clearTimeout(x),x=setTimeout(function(){e.activeKey===void 0&&(_.value=l),o("update:activeKey",l[l.length-1])})},d=p(function(){return!!e.disabled}),m=p(function(){return c.value==="rtl"}),O=K("vertical"),b=K(!1);_e(function(){(e.mode==="inline"||e.mode==="vertical")&&M.value?(O.value="vertical",b.value=M.value):(O.value=e.mode,b.value=!1)});var $=p(function(){return O.value==="inline"}),S=function(l){E.value=l,o("update:openKeys",l),o("openChange",l)},z=K(E.value),k=K(!1);Z(E,function(){$.value&&(z.value=E.value)},{immediate:!0}),Z($,function(){if(!k.value){k.value=!0;return}$.value?E.value=z.value:S(st)},{immediate:!0});var ee=p(function(){var r;return r={},D(r,"".concat(y.value),!0),D(r,"".concat(y.value,"-root"),!0),D(r,"".concat(y.value,"-").concat(O.value),!0),D(r,"".concat(y.value,"-inline-collapsed"),b.value),D(r,"".concat(y.value,"-rtl"),m.value),D(r,"".concat(y.value,"-").concat(e.theme),!0),r}),ne=p(function(){return C()}),te=p(function(){return{horizontal:{name:"".concat(ne.value,"-slide-up")},inline:Yt,other:{name:"".concat(ne.value,"-zoom-big")}}});Ot(!0);var ae=function r(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=[],N=u.value;return l.forEach(function(T){var L=N[T],B=L.key,F=L.childrenEventKeys;h.push.apply(h,[B].concat(de(r(Ke(F)))))}),h},ue=function(l){o("click",l),J(l)},Q=function(l,h){var N,T=((N=R.value[l])===null||N===void 0?void 0:N.childrenEventKeys)||[],L=E.value.filter(function(F){return F!==l});if(h)L.push(l);else if(O.value!=="inline"){var B=ae(Ke(T));L=$e(L.filter(function(F){return!B.includes(F)}))}Ce(E,L)||S(L)},pe=function(l,h){u.value=v(v({},u.value),{},D({},l,h))},me=function(l){delete u.value[l],u.value=v({},u.value)},W=K(0),be=p(function(){return e.expandIcon||a.expandIcon?function(r){var l=e.expandIcon||a.expandIcon;return l=typeof l=="function"?l(r):l,Ie(l,{class:"".concat(y.value,"-submenu-expand-icon")},!1)}:null});return Cn({store:u,prefixCls:y,activeKeys:_,openKeys:E,selectedKeys:w,changeActiveKeys:I,disabled:d,rtl:m,mode:O,inlineIndent:p(function(){return e.inlineIndent}),subMenuCloseDelay:p(function(){return e.subMenuCloseDelay}),subMenuOpenDelay:p(function(){return e.subMenuOpenDelay}),builtinPlacements:p(function(){return e.builtinPlacements}),triggerSubMenuAction:p(function(){return e.triggerSubMenuAction}),getPopupContainer:p(function(){return e.getPopupContainer}),inlineCollapsed:b,antdMenuTheme:p(function(){return e.theme}),siderCollapsed:f,defaultMotions:p(function(){return P.value?te.value:null}),motion:p(function(){return P.value?e.motion:null}),overflowDisabled:K(void 0),onOpenChange:Q,onItemClick:ue,registerMenuInfo:pe,unRegisterMenuInfo:me,selectedSubMenuKeys:j,isRootMenu:K(!0),expandIcon:be,forceSubMenuRender:p(function(){return e.forceSubMenuRender})}),function(){var r,l,h=dt((r=a.default)===null||r===void 0?void 0:r.call(a)),N=W.value>=h.length-1||O.value!=="horizontal"||e.disabledOverflow,T=O.value!=="horizontal"||e.disabledOverflow?h:h.map(function(B,F){return g(De,{key:B.key,overflowDisabled:F>W.value},{default:function(){return B}})}),L=((l=a.overflowedIndicator)===null||l===void 0?void 0:l.call(a))||g(dn,null,null);return g(Pe,v(v({},i),{},{onMousedown:e.onMousedown,prefixCls:"".concat(y.value,"-overflow"),component:"ul",itemComponent:Ne,class:[ee.value,i.class],role:"menu",id:e.id,data:T,renderRawItem:function(F){return F},renderRawRest:function(F){var G=F.length,se=G?h.slice(-G):null;return g(ke,null,[g(Se,{eventKey:xe,key:xe,title:L,disabled:N,internalPopupClose:G===0},{default:function(){return se}}),g(rt,null,{default:function(){return[g(Se,{eventKey:xe,key:xe,title:L,disabled:N,internalPopupClose:G===0},{default:function(){return se}})]}})])},maxCount:O.value!=="horizontal"||e.disabledOverflow?Pe.INVALIDATE:Pe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(F){W.value=F}}),{default:function(){return[g(Vt,{to:"body"},{default:function(){return[g("div",{style:{display:"none"},"aria-hidden":!0},[g(rt,null,{default:function(){return[T]}})])]}})]}})}}});var kn=function(){return{title:H.any}};const Le=X({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:kn(),slots:["title"],setup:function(e,n){var a=n.slots,o=n.attrs,i=ie(),s=i.prefixCls,y=p(function(){return"".concat(s.value,"-item-group")}),c=Ye();return function(){var C,u;return c?(C=a.default)===null||C===void 0?void 0:C.call(a):g("li",v(v({},o),{},{onClick:function(M){return M.stopPropagation()},class:y.value}),[g("div",{title:typeof e.title=="string"?e.title:void 0,class:"".concat(y.value,"-title")},[Oe(a,e,"title")]),g("ul",{class:"".concat(y.value,"-list")},[(u=a.default)===null||u===void 0?void 0:u.call(a)])])}}});var Ln=function(){return{prefixCls:String,dashed:Boolean}};const Fe=X({compatConfig:{MODE:3},name:"AMenuDivider",props:Ln(),setup:function(e){var n=Ve("menu",e),a=n.prefixCls,o=p(function(){var i;return i={},D(i,"".concat(a.value,"-item-divider"),!0),D(i,"".concat(a.value,"-item-divider-dashed"),!!e.dashed),i});return function(){return g("li",{class:o.value},null)}}});ve.install=function(t){return t.component(ve.name,ve),t.component(Ne.name,Ne),t.component(Se.name,Se),t.component(Fe.name,Fe),t.component(Le.name,Le),t};ve.Item=Ne;ve.Divider=Fe;ve.SubMenu=Se;ve.ItemGroup=Le;var Fn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};const Vn=Fn;function ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),a.forEach(function(o){Bn(t,o,n[o])})}return t}function Bn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ue=function(e,n){var a=ct({},e,n.attrs);return g(ze,ct({},a,{icon:Vn}),null)};Ue.displayName="LeftOutlined";Ue.inheritAttrs=!1;const Xn=Ue;export{dn as E,Xn as L,ve as M,Qt as P,Un as R,qn as S,sn as T,Ne as _,Kn as a,Yn as b,on as f,an as g,Ce as s};