/*! For license information please see d4ad233efeb1d959420253442063e6db7488fdeb-bb9c875280b8cdd94a33.js.LICENSE.txt */
"use strict";(self.webpackChunkccl=self.webpackChunkccl||[]).push([[630],{4241:function(t,e,n){n.d(e,{X:function(){return $}});var r,i,o,a,s,f,u,p,l=n(5619),h="transform",c=h+"Origin",d=function(t){var e=t.ownerDocument||t;!(h in t.style)&&"msTransform"in t.style&&(c=(h="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(i=window,u=new P,e){r=e,o=e.documentElement,a=e.body;var n=e.createElement("div"),s=e.createElement("div");a.appendChild(n),n.appendChild(s),n.style.position="static",n.style[h]="translate3d(0,0,1px)",p=s.offsetParent!==n,a.removeChild(n)}return e},g=[],m=[],x=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},y=function t(e){return"fixed"===i.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},v=function t(e,n){if(e.parentNode&&(r||d(e))){var i=x(e),o=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=i?n?"rect":"g":"div",u=2!==n?0:100,p=3===n?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",h=r.createElementNS?r.createElementNS(o.replace(/^https/,"http"),a):r.createElement(a);return n&&(i?(f||(f=t(e)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+u+","+p+")"),f.appendChild(h)):(s||((s=t(e)).style.cssText=l),h.style.cssText=l+"width:0.1px;height:0.1px;top:"+p+"px;left:"+u+"px",s.appendChild(h))),h}throw"Need document and parent."},w=function(t,e){var n,r,o,a,l,d,y=x(t),w=t===y,b=y?g:m,T=t.parentNode;if(t===i)return t;if(b.length||b.push(v(t,1),v(t,2),v(t,3)),n=y?f:s,y)o=w?{x:0,y:0}:t.getBBox(),(r=t.transform?t.transform.baseVal:{}).numberOfItems?(a=(r=r.numberOfItems>1?function(t){for(var e=new P,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix).a*o.x+r.c*o.y,l=r.b*o.x+r.d*o.y):(r=u,a=o.x,l=o.y),e&&"g"===t.tagName.toLowerCase()&&(a=l=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+a)+","+(r.f+l)+")"),(w?y:T).appendChild(n);else{if(a=l=0,p)for(r=t.offsetParent,o=t;o&&(o=o.parentNode)&&o!==r&&o.parentNode;)(i.getComputedStyle(o)[h]+"").length>4&&(a=o.offsetLeft,l=o.offsetTop,o=0);if("absolute"!==(d=i.getComputedStyle(t)).position)for(r=t.offsetParent;T!==r;)a+=T.scrollLeft||0,l+=T.scrollTop||0,T=T.parentNode;(o=n.style).top=t.offsetTop-l+"px",o.left=t.offsetLeft-a+"px",o[h]=d[h],o[c]=d[c],o.position="fixed"===d.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},b=function(t,e,n,r,i,o,a){return t.a=e,t.b=n,t.c=r,t.d=i,t.e=o,t.f=a,t},P=function(){function t(t,e,n,r,i,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===i&&(i=0),void 0===o&&(o=0),b(this,t,e,n,r,i,o)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,i=this.e,o=this.f,a=t*r-e*n||1e-10;return b(this,r/a,-e/a,-n/a,t/a,(n*o-r*i)/a,-(t*o-e*i)/a)},e.multiply=function(t){var e=this.a,n=this.b,r=this.c,i=this.d,o=this.e,a=this.f,s=t.a,f=t.c,u=t.b,p=t.d,l=t.e,h=t.f;return b(this,s*e+u*r,s*n+u*i,f*e+p*r,f*n+p*i,o+l*e+h*r,a+l*n+h*i)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,r=this.c,i=this.d,o=this.e,a=this.f;return e===t.a&&n===t.b&&r===t.c&&i===t.d&&o===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,i=this.a,o=this.b,a=this.c,s=this.d,f=this.e,u=this.f;return e.x=n*i+r*a+f||0,e.y=n*o+r*s+u||0,e},t}();function T(t,e,n,s){if(!t||!t.parentNode||(r||d(t)).documentElement===t)return new P;var f=function(t){for(var e,n;t&&t!==a;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),u=x(t)?g:m,p=w(t,n),l=u[0].getBoundingClientRect(),h=u[1].getBoundingClientRect(),c=u[2].getBoundingClientRect(),v=p.parentNode,b=!s&&y(t),T=new P((h.left-l.left)/100,(h.top-l.top)/100,(c.left-l.left)/100,(c.top-l.top)/100,l.left+(b?0:i.pageXOffset||r.scrollLeft||o.scrollLeft||a.scrollLeft||0),l.top+(b?0:i.pageYOffset||r.scrollTop||o.scrollTop||a.scrollTop||0));if(v.removeChild(p),f)for(l=f.length;l--;)(h=f[l]).scaleX=h.scaleY=0,h.renderTransform(1,h);return e?T.inverse():T}var C,N,B,L,O="x,translateX,left,marginLeft,xPercent".split(","),R="y,translateY,top,marginTop,yPercent".split(","),A=Math.PI/180,S=function(t,e,n,r){for(var i=e.length,o=2===r?0:r,a=0;a<i;a++)t[o]=parseFloat(e[a][n]),2===r&&(t[o+1]=0),o+=2;return t},Y=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},E=function(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r},_=function(t,e,n,r,i,o,a,s,f){"cubic"===a.type?e=[e]:(e.unshift(Y(n,r,s),i?Y(n,i,f):0),a.relative&&E(e),e=[(i?l.qY:l.Ds)(e,a.curviness)]);return e=o(H(e,n,a)),V(t,n,r,e,"x",s),i&&V(t,n,i,e,"y",f),(0,l.HC)(e,a.resolution||(0===a.curviness?20:12))},X=function(t){return t},I=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,M=function(t,e,n){var r,i,o,a=T(t);return"svg"===(t.tagName+"").toLowerCase()?(i=(r=t.viewBox.baseVal).x,o=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),i=o=0),e&&"auto"!==e&&(i+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,o+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(i||o?a.apply({x:i,y:o}):{x:a.e,y:a.f})},k=function(t,e,n,r){var i,o=T(t.parentNode,!0,!0),a=o.clone().multiply(T(e)),s=M(t,n,o),f=M(e,r,o),u=f.x,p=f.y;return a.e=a.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(i=e.getAttribute("d").match(I)||[],u+=(i=a.apply({x:+i[0],y:+i[1]})).x,p+=i.y),(i||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(u-=(i=a.apply(e.getBBox())).x,p-=i.y),a.e=u-s.x,a.f=p-s.y,a},H=function(t,e,n){var r,i,o,a=n.align,s=n.matrix,f=n.offsetX,u=n.offsetY,p=n.alignOrigin,h=t[0][0],c=t[0][1],d=Y(e,"x"),g=Y(e,"y");return t&&t.length?(a&&("self"===a||(r=L(a)[0]||e)===e?(0,l.$v)(t,1,0,0,1,d-h,g-c):(p&&!1!==p[2]?C.set(e,{transformOrigin:100*p[0]+"% "+100*p[1]+"%"}):p=[Y(e,"xPercent")/-100,Y(e,"yPercent")/-100],o=(i=k(e,r,p,"auto")).apply({x:h,y:c}),(0,l.$v)(t,i.a,i.b,i.c,i.d,d+i.e-(o.x-i.e),g+i.f-(o.y-i.f)))),s?(0,l.$v)(t,s.a,s.b,s.c,s.d,s.e,s.f):(f||u)&&(0,l.$v)(t,1,0,0,1,f||0,u||0),t):(0,l.T4)("M0,0L0,0")},V=function(t,e,n,r,i,o){var a=e._gsap,s=a.harness,f=s&&s.aliases&&s.aliases[n],u=f&&f.indexOf(",")<0?f:n,p=t._pt=new N(t._pt,e,u,0,0,X,0,a.set(e,u,t));p.u=B(a.get(e,u,o))||0,p.path=r,p.pp=i,t._props.push(u)},$={version:"3.6.0",name:"motionPath",register:function(t,e,n){B=(C=t).utils.getUnit,L=C.utils.toArray,N=n},init:function(t,e){if(!C)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,i,o,a=[],s=e,f=s.path,u=s.autoRotate,p=s.unitX,h=s.unitY,c=s.x,d=s.y,g=f[0],m=(i=e.start,o="end"in e?e.end:1,function(t){return i||1!==o?(0,l.tT)(t,i,o):t});if(this.rawPaths=a,this.target=t,(this.rotate=u||0===u)&&(this.rOffset=parseFloat(u)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=B(t._gsap.get(t,this.rProp))||0),Array.isArray(f)&&!("closed"in f)&&"number"!=typeof g){for(r in g)!c&&~O.indexOf(r)?c=r:!d&&~R.indexOf(r)&&(d=r);for(r in c&&d?a.push(_(this,S(S([],f,c,0),f,d,1),t,c,d,m,e,p||B(f[0][c]),h||B(f[0][d]))):c=d=0,g)r!==c&&r!==d&&a.push(_(this,S([],f,r,2),t,r,0,m,e,B(f[0][r])))}else n=m(H((0,l.T4)(e.path),t,e)),(0,l.HC)(n,e.resolution),a.push(n),V(this,t,e.x||"x",n,"x",e.unitX||"px"),V(this,t,e.y||"y",n,"y",e.unitY||"px")},render:function(t,e){var n=e.rawPaths,r=n.length,i=e._pt;for(t>1?t=1:t<0&&(t=0);r--;)(0,l.oZ)(n[r],t,!r&&e.rotate,n[r]);for(;i;)i.set(i.t,i.p,i.path[i.pp]+i.u,i.d,t),i=i._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?A:1)+e.rOffset+e.ru,e,t)},getLength:function(t){return(0,l.HC)((0,l.T4)(t)).totalLength},sliceRawPath:l.tT,getRawPath:l.T4,pointsToSegment:l.qY,stringToRawPath:l.IZ,rawPathToString:l.g5,transformRawPath:l.$v,getGlobalMatrix:T,getPositionOnPath:l.oZ,cacheRawPathMeasurements:l.HC,convertToPath:function(t,e){return L(t).map((function(t){return(0,l.YR)(t,!1!==e)}))},convertCoordinates:function(t,e,n){var r=T(e,!0,!0).multiply(T(t));return n?r.apply(n):r},getAlignMatrix:k,getRelativePosition:function(t,e,n,r){var i=k(t,e,n,r);return{x:i.e,y:i.f}},arrayToRawPath:function(t,e){var n=S(S([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&E(n),["cubic"===e.type?n:(0,l.qY)(n,e.curviness)]}};(C||"undefined"!=typeof window&&(C=window.gsap)&&C.registerPlugin&&C)&&C.registerPlugin($)}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-bb9c875280b8cdd94a33.js.map