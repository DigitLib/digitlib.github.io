(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1404:function(e,t,n){"use strict";var r=n(413),o=n(102),c=n(411),l=(n(412),n(414)),f=n(415),d=n(450),h=Object(d.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=c.forwardRef((function(e,t){var n=e.alt,f=e.children,d=e.classes,v=e.className,y=e.component,m=void 0===y?"div":y,w=e.imgProps,O=e.sizes,j=e.src,C=e.srcSet,x=e.variant,I=void 0===x?"circular":x,E=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),k=null,P=function(e){var t=e.src,n=e.srcSet,r=c.useState(!1),o=r[0],l=r[1];return c.useEffect((function(){if(t||n){l(!1);var e=!0,image=new Image;return image.src=t,image.srcSet=n,image.onload=function(){e&&l("loaded")},image.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,n]),o}({src:j,srcSet:C}),S=j||C,R=S&&"error"!==P;return k=R?c.createElement("img",Object(r.a)({alt:n,src:j,srcSet:C,sizes:O,className:d.img},w)):null!=f?f:S&&n?n[0]:c.createElement(h,{className:d.fallback}),c.createElement(m,Object(r.a)({className:Object(l.a)(d.root,d.system,d[I],v,!R&&d.colorDefault),ref:t},E),k)}));t.a=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(v)},1506:function(e,t,n){"use strict";n.r(t);var r=n(417),o=n(421),c=n(415),l=n(420),f=n(411),d=n.n(f),h=n(1441),v=n(445),y=n.n(v),m=n(865),w=n(891),O=n(866),j=n(426),C=n(1404),x=n(1511),I=n(968),E=n.n(I),k=n(758),P=n.n(k),S=n(416),R=n.n(S),A=(n(944),n(1001)),_=n(476),N=n(588);function D(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,p){return z=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},z(e,p)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return K(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(c,e);var t,n,r,o=T(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).state={requestedAnnotations:!1},t.handleSelect=t.handleSelect.bind(K(t)),t.handleKey=t.handleKey.bind(K(t)),t.handleIntersection=t.handleIntersection.bind(K(t)),t}return t=c,(n=[{key:"handleSelect",value:function(){var e=this.props,canvas=e.canvas,t=e.selected,n=e.setCanvas,r=e.focusOnCanvas;t?r():n(canvas.id)}},{key:"handleKey",value:function(e){var t=this.props,canvas=t.canvas,n=t.setCanvas,r=t.focusOnCanvas;this.keys={enter:"Enter",space:" "},this.chars={enter:13,space:32},e.key===this.keys.enter||e.which===this.chars.enter||e.key===this.keys.space||e.which===this.chars.space?r():n(canvas.id)}},{key:"handleIntersection",value:function(e){var t=e.isIntersecting,n=this.props,r=n.annotationsCount,o=n.requestCanvasAnnotations,c=this.state.requestedAnnotations;!t||void 0===r||r>0||c||(this.setState({requestedAnnotations:!0}),o())}},{key:"render",value:function(){var e=this.props,t=e.annotationsCount,n=e.searchAnnotationsCount,canvas=e.canvas,r=e.classes,o=e.config,c=e.selected,l=new _.default(canvas);return d.a.createElement(A.a,{onChange:this.handleIntersection},d.a.createElement("div",{key:canvas.index,className:R()(r.galleryViewItem,c?r.selected:"",n>0?r.hasAnnotations:""),onClick:this.handleSelect,onKeyUp:this.handleKey,role:"button",tabIndex:0},d.a.createElement(N.a,{resource:canvas,labelled:!0,variant:"outside",maxWidth:o.width,maxHeight:o.height,style:{margin:"0 auto",maxWidth:"".concat(Math.ceil(o.height*l.aspectRatio),"px")}},d.a.createElement("div",{className:r.chips},n>0&&d.a.createElement(x.a,{avatar:d.a.createElement(C.a,{className:r.avatar,classes:{circle:r.avatarIcon}},d.a.createElement(P.a,{fontSize:"small"})),label:n,className:R()(r.searchChip),size:"small"}),(t||0)>0&&d.a.createElement(x.a,{avatar:d.a.createElement(C.a,{className:r.avatar,classes:{circle:r.avatarIcon}},d.a.createElement(E.a,{className:r.annotationIcon})),label:t,className:R()(r.annotationsChip),size:"small"})))))}}])&&D(t.prototype,n),r&&D(t,r),c}(f.Component);V.defaultProps={annotationsCount:void 0,config:{height:100,width:null},requestCanvasAnnotations:function(){},searchAnnotationsCount:0,selected:!1};var W=n(509),F=n(898),H=n(629),M=n(1002),J=n(550);function G(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(t){X(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=Object(r.compose)(Object(o.b)((function(e,t){var canvas=t.canvas,n=t.windowId,r=Object(W.g)(e,{windowId:n}),o=Object(F.f)(e,{windowId:n}),c=y()(o.map((function(a){return a.resources}))).filter((function(a){return a.targetId===canvas.id})),l=Object(H.e)(e,{content:"annotations",windowId:n}).length>0;return{annotationsCount:function(){if(l)return Object(M.d)(e,{canvasId:canvas.id}).reduce((function(e,a){return e+a.resources.filter((function(e){return e.targetId===canvas.id})).length}),0)}(),config:Object(J.a)(e).galleryView,searchAnnotationsCount:c.length,selected:r&&r.id===canvas.id}}),(function(e,t){var canvas=t.canvas,n=(t.id,t.windowId);return{focusOnCanvas:function(){return e(m.i(n,"single"))},requestCanvasAnnotations:function(){return e(w.f(n,canvas.id))},setCanvas:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e(O.a.apply(j,[n].concat(r)))}}})),Object(c.a)((function(e){return{annotationIcon:{height:"1rem",width:"1rem"},annotationsChip:U({},e.typography.caption),avatar:{backgroundColor:"transparent"},chips:{opacity:.875,position:"absolute",right:0,textAlign:"right",top:0},galleryViewItem:{"&$hasAnnotations":{border:"2px solid ".concat(e.palette.action.selected)},"&$selected,&$selected$hasAnnotations":{border:"2px solid ".concat(e.palette.primary.main)},"&:focus":{outline:"none"},"&:hover":{backgroundColor:e.palette.action.hover},border:"2px solid transparent",cursor:"pointer",display:"inline-block",margin:"".concat(e.spacing(1),"px ").concat(e.spacing(.5),"px"),maxHeight:function(e){return e.config.height+45},minWidth:"60px",overflow:"hidden",padding:e.spacing(.5),position:"relative",width:"min-content"},hasAnnotations:{},searchChip:U(U({},e.typography.caption),{},{"&$selected $avatar":{backgroundColor:e.palette.highlights.primary},marginTop:2}),selected:{}}}))),L=Y(V);function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,p){return ee=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},ee(e,p)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=re(e);if(t){var o=re(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}var oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(c,e);var t,n,r,o=te(c);function c(){return Q(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.canvases,n=e.classes,r=e.viewingDirection,o=e.windowId,c="right-to-left"===r?"rtl":"ltr";return d.a.createElement(h.a,{component:"section",dir:c,square:!0,elevation:0,className:n.galleryContainer,id:"".concat(o,"-gallery")},t.map((function(canvas){return d.a.createElement(L,{key:canvas.id,windowId:o,canvas:canvas})})))}}])&&Z(t.prototype,n),r&&Z(t,r),c}(f.Component);oe.defaultProps={classes:{},viewingDirection:""};var ae=n(546),ie=Object(r.compose)(Object(c.a)((function(e){return{galleryContainer:{alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"wrap",overflowX:"hidden",overflowY:"scroll",padding:"50px 0 50px 20px",width:"100%"}}})),Object(o.b)((function(e,t){var n=t.windowId;return{canvases:Object(W.f)(e,{windowId:n}),viewingDirection:Object(ae.e)(e,{windowId:n})}})),Object(l.a)("GalleryView"));t.default=ie(oe)}}]);