(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146],{20054:function(n,e,t){"use strict";function i(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function r(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function o(){}t.d(e,{ZP:function(){return U}});var a=.7,s=1/a,c="\\s*([+-]?\\d+)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",d=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),p=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),m=new RegExp("^rgba\\("+[c,c,c,l]+"\\)$"),f=new RegExp("^rgba\\("+[u,u,u,l]+"\\)$"),g=new RegExp("^hsl\\("+[l,u,u]+"\\)$"),x=new RegExp("^hsla\\("+[l,u,u,l]+"\\)$"),b={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function y(){return this.rgb().formatHex()}function w(){return this.rgb().formatRgb()}function v(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=d.exec(n))?(t=e[1].length,e=parseInt(e[1],16),6===t?k(e):3===t?new M(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===t?S(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===t?S(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=h.exec(n))?new M(e[1],e[2],e[3],1):(e=p.exec(n))?new M(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=m.exec(n))?S(e[1],e[2],e[3],e[4]):(e=f.exec(n))?S(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=g.exec(n))?z(e[1],e[2]/100,e[3]/100,1):(e=x.exec(n))?z(e[1],e[2]/100,e[3]/100,e[4]):b.hasOwnProperty(n)?k(b[n]):"transparent"===n?new M(NaN,NaN,NaN,0):null}function k(n){return new M(n>>16&255,n>>8&255,255&n,1)}function S(n,e,t,i){return i<=0&&(n=e=t=NaN),new M(n,e,t,i)}function N(n){return n instanceof o||(n=v(n)),n?new M((n=n.rgb()).r,n.g,n.b,n.opacity):new M}function M(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}function j(){return"#"+C(this.r)+C(this.g)+C(this.b)}function _(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===n?")":", "+n+")")}function C(n){return((n=Math.max(0,Math.min(255,Math.round(n)||0)))<16?"0":"")+n.toString(16)}function z(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new E(n,e,t,i)}function O(n){if(n instanceof E)return new E(n.h,n.s,n.l,n.opacity);if(n instanceof o||(n=v(n)),!n)return new E;if(n instanceof E)return n;var e=(n=n.rgb()).r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),a=Math.max(e,t,i),s=NaN,c=a-r,l=(a+r)/2;return c?(s=e===a?(t-i)/c+6*(t<i):t===a?(i-e)/c+2:(e-t)/c+4,c/=l<.5?a+r:2-a-r,s*=60):c=l>0&&l<1?0:s,new E(s,c,l,n.opacity)}function E(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}function R(n,e,t){return 255*(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)}i(o,v,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:y,formatHex:y,formatHsl:function(){return O(this).formatHsl()},formatRgb:w,toString:w}),i(M,(function(n,e,t,i){return 1===arguments.length?N(n):new M(n,e,t,null==i?1:i)}),r(o,{brighter:function(n){return n=null==n?s:Math.pow(s,n),new M(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=null==n?a:Math.pow(a,n),new M(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:j,formatHex:j,formatRgb:_,toString:_})),i(E,(function(n,e,t,i){return 1===arguments.length?O(n):new E(n,e,t,null==i?1:i)}),r(o,{brighter:function(n){return n=null==n?s:Math.pow(s,n),new E(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?a:Math.pow(a,n),new E(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+360*(this.h<0),e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new M(R(n>=240?n-240:n+120,r,i),R(n,r,i),R(n<120?n+240:n-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===n?")":", "+n+")")}}));var Z=Math.PI/180,P=180/Math.PI,T=-.14861,L=1.78277,A=-.29227,D=-.90649,V=1.97294,I=V*D,q=V*L,Y=L*A-D*T;function F(n){if(n instanceof J)return new J(n.h,n.s,n.l,n.opacity);n instanceof M||(n=N(n));var e=n.r/255,t=n.g/255,i=n.b/255,r=(Y*i+I*e-q*t)/(Y+I-q),o=i-r,a=(V*(t-r)-A*o)/D,s=Math.sqrt(a*a+o*o)/(V*r*(1-r)),c=s?Math.atan2(a,o)*P-120:NaN;return new J(c<0?c+360:c,s,r,n.opacity)}function H(n,e,t,i){return 1===arguments.length?F(n):new J(n,e,t,null==i?1:i)}function J(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}function W(n){return function(){return n}}function B(n,e){return function(t){return n+t*e}}function $(n,e){var t=e-n;return t?B(n,t):W(isNaN(n)?e:n)}function K(n){return function e(t){function i(e,i){var r=n((e=H(e)).h,(i=H(i)).h),o=$(e.s,i.s),a=$(e.l,i.l),s=$(e.opacity,i.opacity);return function(n){return e.h=r(n),e.s=o(n),e.l=a(Math.pow(n,t)),e.opacity=s(n),e+""}}return t=+t,i.gamma=e,i}(1)}i(J,H,r(o,{brighter:function(n){return n=null==n?s:Math.pow(s,n),new J(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?a:Math.pow(a,n),new J(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*Z,e=+this.l,t=isNaN(this.s)?0:this.s*e*(1-e),i=Math.cos(n),r=Math.sin(n);return new M(255*(e+t*(T*i+L*r)),255*(e+t*(A*i+D*r)),255*(e+t*(V*i)),this.opacity)}}));K((function(n,e){var t=e-n;return t?B(n,t>180||t<-180?t-360*Math.round(t/360):t):W(isNaN(n)?e:n)}));var X=K($),G=(X(H(-100,.75,.35),H(80,1.5,.8)),X(H(260,.75,.35),H(80,1.5,.8)),H());function U(n){(n<0||n>1)&&(n-=Math.floor(n));var e=Math.abs(n-.5);return G.h=360*n-100,G.s=1.5-1.5*e,G.l=.8-.9*e,G+""}},7098:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(76422),r=(t(2784),t(48090)),o=t(18476),a=t.n(o),s=(t(73113),t(15961),t(2847),t(52322));function c(n){var e=n.lines;return(0,s.jsx)("span",{"aria-hidden":"true",className:"line-numbers-rows",children:e.map((function(n,t){return(0,s.jsx)("span",{},"line-number-".concat(e.length,"-").concat(t))}))})}function l(n){var e=n.children,t=e.match(/\n(?!$)/g),o=t?t.length+1:1,l=new Array(o+1).fill(1),u=[r.renderToString((0,s.jsx)(c,{lines:l})),a().highlight(e,a().languages.ts,"tsx")].join("");return(0,s.jsxs)("pre",{className:"jsx-3645412256 codeblock line-numbers",children:[(0,s.jsx)("code",{dangerouslySetInnerHTML:{__html:u},className:"jsx-3645412256"}),(0,s.jsx)(i.default,{id:"3645412256",children:[".codeblock.jsx-3645412256 code.jsx-3645412256{display:block;padding:0 0 0 1.5rem;border-radius:0;font-weight:300;font-size:14px;line-height:1.4em;background:white;color:#495057;}",".codeblock.line-numbers.jsx-3645412256{padding-left:0;}","@media (max-width:600px){.codeblock.jsx-3645412256 code.jsx-3645412256{font-size:10px;padding:0;pointer-events:none;}}"]})]})}try{Codeblock.displayName="Codeblock",Codeblock.__docgenInfo={description:"",displayName:"Codeblock",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Codeblock.tsx#Codeblock"]={docgenInfo:Codeblock.__docgenInfo,name:"Codeblock",path:"src/components/Codeblock.tsx#Codeblock"})}catch(u){}},84479:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var i=t(76422),r=t(2784),o=t(72779),a=t.n(o),s=t(60594),c=t(52322),l=(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,c.jsx)("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),(0,c.jsx)("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),(0,c.jsx)("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),(0,c.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,c.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]});function u(n){var e=n.branch,t=void 0===e?"master":e,r=n.exampleDirectoryName;return r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("a",{href:"https://codesandbox.io/s/github/airbnb/visx/tree/".concat(t,"/packages/visx-demo/src/sandboxes/").concat(r),rel:"nofollow noopener noreferrer",target:"_blank",className:"jsx-3803197895 sandbox-link",children:[l,"\xa0Try it on CodeSandbox"]}),(0,c.jsx)(i.default,{id:"3803197895",children:[".sandbox-link.jsx-3803197895{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#222;}"]})]}):null}var d=u;try{u.displayName="CodeSandboxLink",u.__docgenInfo={description:"",displayName:"CodeSandboxLink",props:{branch:{defaultValue:{value:"master"},description:"",name:"branch",required:!1,type:{name:"string"}},exampleDirectoryName:{defaultValue:null,description:"",name:"exampleDirectoryName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeSandboxLink.tsx#CodeSandboxLink"]={docgenInfo:u.__docgenInfo,name:"CodeSandboxLink",path:"src/components/CodeSandboxLink.tsx#CodeSandboxLink"})}catch(y){}var h=t(44828),p=t(7098),m=t(39097);function f(n){var e=n.packageName,t=function(n){var e=n.split("@visx/")[1];return e?"docs/".concat(e):null}(e);return t?(0,c.jsx)(m.default,{href:t,children:(0,c.jsx)("a",{children:e})}):null}var g=f;try{f.displayName="VisxDocLink",f.__docgenInfo={description:"",displayName:"VisxDocLink",props:{packageName:{defaultValue:null,description:"",name:"packageName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisxDocLink.tsx#VisxDocLink"]={docgenInfo:f.__docgenInfo,name:"VisxDocLink",path:"src/components/VisxDocLink.tsx#VisxDocLink"})}catch(y){}var x=t(65437),b=(0,s.Z)((function(n){var e=n.screenWidth,t=n.children,o=n.title,s=n.component,l=n.shadow,u=void 0!==l&&l,m=n.events,f=void 0!==m&&m,b=n.margin,y=n.description,w=n.codeSandboxDirectoryName,v=n.packageJson,k=Math.min(800,(e||0)-40),S=.6*k,N=(0,r.useMemo)((function(){return(0,x.Z)(v)}),[v]);return(0,c.jsxs)(h.Z,{title:o,children:[(0,c.jsx)("div",{className:"jsx-1780118371 container",children:(0,c.jsxs)("div",{style:{width:k},className:"jsx-1780118371",children:[(0,c.jsx)("h1",{className:"jsx-1780118371",children:o}),(0,c.jsx)("div",{className:"jsx-1780118371 "+(a()(!!u&&"shadow",o.split(" ").join("-"),"chart")||""),children:r.createElement(s,{width:k,height:S,margin:b,events:f})}),y&&r.createElement(y,{width:k,height:S}),w&&(0,c.jsx)("div",{className:"jsx-1780118371 sandbox-link",children:(0,c.jsx)(d,{exampleDirectoryName:w})}),N.length>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"jsx-1780118371",children:"Documentation"}),(0,c.jsx)("div",{className:"jsx-1780118371 doc-links",children:N.map((function(n){return(0,c.jsx)(g,{packageName:n},n)}))})]}),t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"jsx-1780118371",children:"Code"}),(0,c.jsx)("div",{className:"jsx-1780118371 code",children:(0,c.jsx)(p.Z,{children:t})})]})]})}),(0,c.jsx)(i.default,{id:"1780118371",children:[".container.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-bottom:40px;}",".container.jsx-1780118371 h1.jsx-1780118371{margin-top:15px;line-height:0.9em;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}",".container.jsx-1780118371 h2.jsx-1780118371{margin-top:15px;margin-bottom:5px;}",".chart.jsx-1780118371{border-radius:14px;}",".shadow.jsx-1780118371{border-radius:14px;box-shadow:0 1px 6px rgba(0,0,0,0.1);}",".sandbox-link.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".doc-links.jsx-1780118371{font-size:13px;}",".doc-links.jsx-1780118371 a{margin-right:6px;}"]})]})}));try{Show.displayName="Show",Show.__docgenInfo={description:"",displayName:"Show",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"Component<ShowProvidedProps>"}},codeSandboxDirectoryName:{defaultValue:null,description:"",name:"codeSandboxDirectoryName",required:!1,type:{name:"string"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},events:{defaultValue:null,description:"",name:"events",required:!1,type:{name:"boolean"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"MarginShape"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"Component<{ width: number; height: number; }>"}},windowResizeDebounceTime:{defaultValue:null,description:"",name:"windowResizeDebounceTime",required:!1,type:{name:"number"}},packageJson:{defaultValue:null,description:"",name:"packageJson",required:!1,type:{name:"PackageJson"}},screenWidth:{defaultValue:null,description:"",name:"screenWidth",required:!1,type:{name:"number"}},screenHeight:{defaultValue:null,description:"",name:"screenHeight",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Show.tsx#Show"]={docgenInfo:Show.__docgenInfo,name:"Show",path:"src/components/Show.tsx#Show"})}catch(y){}},65437:function(n,e,t){"use strict";function i(n){var e,t=[];return Object.keys(null!==(e=null===n||void 0===n?void 0:n.dependencies)&&void 0!==e?e:{}).forEach((function(n){n.startsWith("@visx/")&&t.push(n)})),t}t.d(e,{Z:function(){return i}});try{i.displayName="extractVisxDepsFromPackageJson",i.__docgenInfo={description:"",displayName:"extractVisxDepsFromPackageJson",props:{dependencies:{defaultValue:null,description:"",name:"dependencies",required:!1,type:{name:"{ [packageName: string]: string; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"]={docgenInfo:i.__docgenInfo,name:"extractVisxDepsFromPackageJson",path:"src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"})}catch(r){}},62202:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});t(2784);var i=t(49944),r=t(27300),o=t(84479),a=t(52322);var s=function(){return(0,a.jsx)(o.Z,{component:i.Z,title:"Zoom I",codeSandboxDirectoryName:"visx-zoom-i",packageJson:r,children:'/* eslint react/jsx-handler-names: "off" */\nimport React, { useState } from \'react\';\nimport { interpolateRainbow } from \'d3-scale-chromatic\';\nimport { Zoom } from \'@visx/zoom\';\nimport { localPoint } from \'@visx/event\';\nimport { RectClipPath } from \'@visx/clip-path\';\nimport genPhyllotaxis, {\n  GenPhyllotaxisFunction,\n  PhyllotaxisPoint,\n} from \'@visx/mock-data/lib/generators/genPhyllotaxis\';\nimport { scaleLinear } from \'@visx/scale\';\n\nconst bg = \'#0a0a0a\';\nconst points = [...new Array(1000)];\n\nconst colorScale = scaleLinear<number>({ range: [0, 1], domain: [0, 1000] });\nconst sizeScale = scaleLinear<number>({ domain: [0, 600], range: [0.5, 8] });\n\nconst initialTransform = {\n  scaleX: 1.27,\n  scaleY: 1.27,\n  translateX: -211.62,\n  translateY: 162.59,\n  skewX: 0,\n  skewY: 0,\n};\n\nexport type ZoomIProps = {\n  width: number;\n  height: number;\n};\n\nexport default function ZoomI({ width, height }: ZoomIProps) {\n  const [showMiniMap, setShowMiniMap] = useState<boolean>(true);\n\n  const generator: GenPhyllotaxisFunction = genPhyllotaxis({ radius: 10, width, height });\n  const phyllotaxis: PhyllotaxisPoint[] = points.map((d, i) => generator(i));\n\n  return (\n    <>\n      <Zoom<SVGSVGElement>\n        width={width}\n        height={height}\n        scaleXMin={1 / 2}\n        scaleXMax={4}\n        scaleYMin={1 / 2}\n        scaleYMax={4}\n        initialTransformMatrix={initialTransform}\n      >\n        {(zoom) => (\n          <div className="relative">\n            <svg\n              width={width}\n              height={height}\n              style={{ cursor: zoom.isDragging ? \'grabbing\' : \'grab\', touchAction: \'none\' }}\n              ref={zoom.containerRef}\n            >\n              <RectClipPath id="zoom-clip" width={width} height={height} />\n              <rect width={width} height={height} rx={14} fill={bg} />\n              <g transform={zoom.toString()}>\n                {phyllotaxis.map(({ x, y }, i) => (\n                  <React.Fragment key={`dot-${i}`}>\n                    <circle\n                      cx={x}\n                      cy={y}\n                      r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}\n                      fill={interpolateRainbow(colorScale(i) ?? 0)}\n                    />\n                  </React.Fragment>\n                ))}\n              </g>\n              <rect\n                width={width}\n                height={height}\n                rx={14}\n                fill="transparent"\n                onTouchStart={zoom.dragStart}\n                onTouchMove={zoom.dragMove}\n                onTouchEnd={zoom.dragEnd}\n                onMouseDown={zoom.dragStart}\n                onMouseMove={zoom.dragMove}\n                onMouseUp={zoom.dragEnd}\n                onMouseLeave={() => {\n                  if (zoom.isDragging) zoom.dragEnd();\n                }}\n                onDoubleClick={(event) => {\n                  const point = localPoint(event) || { x: 0, y: 0 };\n                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });\n                }}\n              />\n              {showMiniMap && (\n                <g\n                  clipPath="url(#zoom-clip)"\n                  transform={`\n                    scale(0.25)\n                    translate(${width * 4 - width - 60}, ${height * 4 - height - 60})\n                  `}\n                >\n                  <rect width={width} height={height} fill="#1a1a1a" />\n                  {phyllotaxis.map(({ x, y }, i) => (\n                    <React.Fragment key={`dot-sm-${i}`}>\n                      <circle\n                        cx={x}\n                        cy={y}\n                        r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}\n                        fill={interpolateRainbow(colorScale(i) ?? 0)}\n                      />\n                    </React.Fragment>\n                  ))}\n                  <rect\n                    width={width}\n                    height={height}\n                    fill="white"\n                    fillOpacity={0.2}\n                    stroke="white"\n                    strokeWidth={4}\n                    transform={zoom.toStringInvert()}\n                  />\n                </g>\n              )}\n            </svg>\n            <div className="controls">\n              <button\n                type="button"\n                className="btn btn-zoom"\n                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}\n              >\n                +\n              </button>\n              <button\n                type="button"\n                className="btn btn-zoom btn-bottom"\n                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}\n              >\n                -\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.center}>\n                Center\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.reset}>\n                Reset\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.clear}>\n                Clear\n              </button>\n            </div>\n            <div className="mini-map">\n              <button\n                type="button"\n                className="btn btn-lg"\n                onClick={() => setShowMiniMap(!showMiniMap)}\n              >\n                {showMiniMap ? \'Hide\' : \'Show\'} Mini Map\n              </button>\n            </div>\n          </div>\n        )}\n      </Zoom>\n      <div className="description">\n        Based on Mike Bostock&apos;s{\' \'}\n        <a href="https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45">Pan & Zoom III</a>\n      </div>\n      <style jsx>{`\n        .btn {\n          margin: 0;\n          text-align: center;\n          border: none;\n          background: #2f2f2f;\n          color: #888;\n          padding: 0 4px;\n          border-top: 1px solid #0a0a0a;\n        }\n        .btn-lg {\n          font-size: 12px;\n          line-height: 1;\n          padding: 4px;\n        }\n        .btn-zoom {\n          width: 26px;\n          font-size: 22px;\n        }\n        .btn-bottom {\n          margin-bottom: 1rem;\n        }\n        .description {\n          font-size: 12px;\n          margin-right: 0.25rem;\n        }\n        .controls {\n          position: absolute;\n          top: 15px;\n          right: 15px;\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n        .mini-map {\n          position: absolute;\n          bottom: 25px;\n          right: 15px;\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n        .relative {\n          position: relative;\n        }\n      `}</style>\n    </>\n  );\n}\n'})}},15469:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zoom-i",function(){return t(62202)}])},79196:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var i=function(){function n(n){var e=n.x,t=void 0===e?0:e,i=n.y,r=void 0===i?0:i;this.x=0,this.y=0,this.x=t,this.y=r}var e=n.prototype;return e.value=function(){return{x:this.x,y:this.y}},e.toArray=function(){return[this.x,this.y]},n}()},60594:function(n,e,t){"use strict";e.Z=function(n){var e;return(e=function(e){var t,i;function a(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))||this).state={screenWidth:void 0,screenHeight:void 0},n.resize=(0,r.default)((function(){n.setState((function(){return{screenWidth:window.innerWidth,screenHeight:window.innerHeight}}))}),n.props.windowResizeDebounceTime,{leading:n.props.enableDebounceLeadingCall}),n}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,c(t,i);var l=a.prototype;return l.componentDidMount=function(){window.addEventListener("resize",this.resize,!1),this.resize()},l.componentWillUnmount=function(){window.removeEventListener("resize",this.resize,!1),this.resize.cancel()},l.render=function(){var e=this.state,t=e.screenWidth,i=e.screenHeight;return null==t||null==i?null:o.default.createElement(n,s({screenWidth:t,screenHeight:i},this.props))},a}(o.default.Component)).propTypes={screenWidth:i.default.number,screenHeight:i.default.number},e.defaultProps={windowResizeDebounceTime:300,enableDebounceLeadingCall:!0},e};var i=a(t(13980)),r=a(t(99788)),o=a(t(2784));function a(n){return n&&n.__esModule?n:{default:n}}function s(){return(s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function c(n,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n})(n,e)}},42613:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(27230),r=(0,t(63458).Z)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(n){return r((0,i.Z)(),n)}},84698:function(n,e,t){"use strict";function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}t.d(e,{Z:function(){return i}})},64993:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(84698);var r=t(7245);function o(n){return function(n){if(Array.isArray(n))return(0,i.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,r.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7245:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var i=t(84698);function r(n,e){if(n){if("string"===typeof n)return(0,i.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,i.Z)(n,e):void 0}}},27230:function(n,e,t){"use strict";t.d(e,{Q:function(){return s},Z:function(){return c}});var i=t(90461),r=t(30486),o=t(55545),a=t(1452);function s(n){var e=n.domain;return n.ticks=function(n){var t=e();return(0,i.ZP)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var i=e();return(0,a.Z)(i[0],i[i.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var r,o,a=e(),s=0,c=a.length-1,l=a[s],u=a[c],d=10;for(u<l&&(o=l,l=u,u=o,o=s,s=c,c=o);d-- >0;){if((o=(0,i.G9)(l,u,t))===r)return a[s]=l,a[c]=u,e(a);if(o>0)l=Math.floor(l/o)*o,u=Math.ceil(u/o)*o;else{if(!(o<0))break;l=Math.ceil(l*o)/o,u=Math.floor(u*o)/o}r=o}return n},n}function c(){var n=(0,r.ZP)();return n.copy=function(){return(0,r.JG)(n,c())},o.o.apply(n,arguments),s(n)}},1452:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var i=t(90461),r=t(17206);var o=t(38119),a=t(14090);function s(n,e,t,s){var c,l=(0,i.ly)(n,e,t);switch((s=(0,o.Z)(null==s?",f":s)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=s.precision||isNaN(c=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,r.Z)(e)/3)))-(0,r.Z)(Math.abs(n)))}(l,u))||(s.precision=c),(0,a.jH)(s,u);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(c=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,(0,r.Z)(e)-(0,r.Z)(n))+1}(l,Math.max(Math.abs(n),Math.abs(e))))||(s.precision=c-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(c=function(n){return Math.max(0,-(0,r.Z)(Math.abs(n)))}(l))||(s.precision=c-2*("%"===s.type))}return(0,a.WU)(s)}},27300:function(n){"use strict";n.exports=JSON.parse('{"name":"@visx/demo-zoom-i","description":"Standalone visx zoom demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/clip-path":"latest","@visx/event":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/zoom":"latest","d3-scale-chromatic":"^1.5.0","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","zoom"]}')}},function(n){n.O(0,[9774,1603,5272,1021,9097,2914,9431,9944,2888,179],(function(){return e=15469,n(n.s=e);var e}));var e=n.O();_N_E=e}]);