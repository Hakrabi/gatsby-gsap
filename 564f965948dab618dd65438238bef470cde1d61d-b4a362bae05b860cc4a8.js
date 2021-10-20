/*! For license information please see 564f965948dab618dd65438238bef470cde1d61d-b4a362bae05b860cc4a8.js.LICENSE.txt */
"use strict";(self.webpackChunkccl=self.webpackChunkccl||[]).push([[194],{8958:function(t,e,n){n.d(e,{W:function(){return C}});var r,a,o,i,s,l=function(){return"undefined"!=typeof window},c=function(){return r||l()&&(r=window.gsap)&&r.registerPlugin&&r},h=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,u={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},f=function(t){return Math.round(1e4*t)/1e4},g=function(t){return parseFloat(t||0)},p=function(t,e){return g(t.getAttribute(e))},d=Math.sqrt,m=function(t,e,n,r,a,o){return d(Math.pow((g(n)-g(t))*a,2)+Math.pow((g(r)-g(e))*o,2))},v=function(t){return console.warn(t)},x=function(t){return"non-scaling-stroke"===t.getAttribute("vector-effect")},y=function(t){if(!(t=a(t)[0]))return 0;var e,n,r,o,i,s,l,c=t.tagName.toLowerCase(),f=t.style,g=1,y=1;x(t)&&(y=t.getScreenCTM(),g=d(y.a*y.a+y.b*y.b),y=d(y.d*y.d+y.c*y.c));try{n=t.getBBox()}catch(M){v("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var b=n||{x:0,y:0,width:0,height:0},E=b.x,C=b.y,L=b.width,w=b.height;if(n&&(L||w)||!u[c]||(L=p(t,u[c][0]),w=p(t,u[c][1]),"rect"!==c&&"line"!==c&&(L*=2,w*=2),"line"===c&&(E=p(t,"x1"),C=p(t,"y1"),L=Math.abs(L-E),w=Math.abs(w-C))),"path"===c)o=f.strokeDasharray,f.strokeDasharray="none",e=t.getTotalLength()||0,g!==y&&v("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),e*=(g+y)/2,f.strokeDasharray=o;else if("rect"===c)e=2*L*g+2*w*y;else if("line"===c)e=m(E,C,E+L,C+w,g,y);else if("polyline"===c||"polygon"===c)for(r=t.getAttribute("points").match(h)||[],"polygon"===c&&r.push(r[0],r[1]),e=0,i=2;i<r.length;i+=2)e+=m(r[i-2],r[i-1],r[i],r[i+1],g,y)||0;else"circle"!==c&&"ellipse"!==c||(s=L/2*g,l=w/2*y,e=Math.PI*(3*(s+l)-d((3*s+l)*(s+3*l))));return e||0},b=function(t,e){if(!(t=a(t)[0]))return[0,0];e||(e=y(t)+1);var n=o.getComputedStyle(t),r=n.strokeDasharray||"",i=g(n.strokeDashoffset),s=r.indexOf(",");return s<0&&(s=r.indexOf(" ")),(r=s<0?e:g(r.substr(0,s))||1e-5)>e&&(r=e),[Math.max(0,-i),Math.max(0,r-i)]},E=function(){l()&&(document,o=window,s=r=c(),a=r.utils.toArray,i=-1!==((o.navigator||{}).userAgent||"").indexOf("Edge"))},C={version:"3.0.0",name:"drawSVG",register:function(t){r=t,E()},init:function(t,e,n,r,a){if(!t.getBBox)return!1;s||E();var l,c,h,u,p=y(t)+1;return this._style=t.style,this._target=t,e+""=="true"?e="0 100%":e?-1===(e+"").indexOf(" ")&&(e="0 "+e):e="0 0",c=function(t,e,n){var r,a,o=t.indexOf(" ");return o<0?(r=void 0!==n?n+"":t,a=t):(r=t.substr(0,o),a=t.substr(o+1)),(r=~r.indexOf("%")?g(r)/100*e:g(r))>(a=~a.indexOf("%")?g(a)/100*e:g(a))?[a,r]:[r,a]}(e,p,(l=b(t,p))[0]),this._length=f(p+10),0===l[0]&&0===c[0]?(h=Math.max(1e-5,c[1]-p),this._dash=f(p+h),this._offset=f(p-l[1]+h),this._offsetPT=this.add(this,"_offset",this._offset,f(p-c[1]+h))):(this._dash=f(l[1]-l[0])||1e-6,this._offset=f(-l[0]),this._dashPT=this.add(this,"_dash",this._dash,f(c[1]-c[0])||1e-5),this._offsetPT=this.add(this,"_offset",this._offset,f(-c[0]))),i&&(u=o.getComputedStyle(t)).strokeLinecap!==u.strokeLinejoin&&(c=g(u.strokeMiterlimit),this.add(t.style,"strokeMiterlimit",c,c+.01)),this._live=x(t)||~(e+"").indexOf("live"),this._props.push("drawSVG"),1},render:function(t,e){var n,r,a,o,i=e._pt,s=e._style;if(i){for(e._live&&(n=y(e._target)+11)!==e._length&&(r=n/e._length,e._length=n,e._offsetPT.s*=r,e._offsetPT.c*=r,e._dashPT?(e._dashPT.s*=r,e._dashPT.c*=r):e._dash*=r);i;)i.r(t,i.d),i=i._next;a=e._dash,o=e._offset,n=e._length,s.strokeDashoffset=e._offset,1!==t&&t?s.strokeDasharray=a+"px,"+n+"px":(a-o<.001&&n-a<=10&&(s.strokeDashoffset=o+1),s.strokeDasharray=o<.001&&n-a<=10?"none":o===a?"0px, 999999px":a+"px,"+n+"px")}},getLength:y,getPosition:b};c()&&r.registerPlugin(C)},5619:function(t,e,n){n.d(e,{T4:function(){return N},YR:function(){return T},tT:function(){return H},HC:function(){return I},oZ:function(){return D},$v:function(){return Y},IZ:function(){return z},Ds:function(){return W},qY:function(){return B},g5:function(){return R}});var r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,a=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,o=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,i=/(^[#\.][a-z]|[a-y][a-z])/i,s=Math.PI/180,l=180/Math.PI,c=Math.sin,h=Math.cos,u=Math.abs,f=Math.sqrt,g=Math.atan2,p=1e8,d=function(t){return"string"==typeof t},m=function(t){return"number"==typeof t},v={},x={},y=1e5,b=function(t){return Math.round((t+p)%1*y)/y||(t<0?0:1)},E=function(t){return Math.round(t*y)/y||0},C=function(t){return Math.round(1e10*t)/1e10||0},L=function(t,e,n,r){var a=t[e],o=1===r?6:A(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1},w=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},M=function(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e};function N(t){var e,n=(t=d(t)&&i.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=z(t)):t?d(t)?z(t):m(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function _(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var O={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function T(t,e){var n,r,o,i,s,l,c,h,u,f,g,p,d,m,v,x,y,b,E,C,L,w,M=t.tagName.toLowerCase(),N=.552284749831;return"path"!==M&&t.getBBox?(l=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";--o>-1;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),w=function(t,e){for(var n=e?e.split(","):[],r={},a=n.length;--a>-1;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,O[M]),"rect"===M?(i=w.rx,s=w.ry||i,r=w.x,o=w.y,f=w.width-2*i,g=w.height-2*s,n=i||s?"M"+(x=(m=(d=r+i)+f)+i)+","+(b=o+s)+" V"+(E=b+g)+" C"+[x,C=E+s*N,v=m+i*N,L=E+s,m,L,m-(m-d)/3,L,d+(m-d)/3,L,d,L,p=r+i*(1-N),L,r,C,r,E,r,E-(E-b)/3,r,b+(E-b)/3,r,b,r,y=o+s*(1-N),p,o,d,o,d+(m-d)/3,o,m-(m-d)/3,o,m,o,v,o,x,y,x,b].join(",")+"z":"M"+(r+f)+","+o+" v"+g+" h"+-f+" v"+-g+" h"+f+"z"):"circle"===M||"ellipse"===M?("circle"===M?h=(i=s=w.r)*N:(i=w.rx,h=(s=w.ry)*N),n="M"+((r=w.cx)+i)+","+(o=w.cy)+" C"+[r+i,o+h,r+(c=i*N),o+s,r,o+s,r-c,o+s,r-i,o+h,r-i,o,r-i,o-h,r-c,o-s,r,o-s,r+c,o-s,r+i,o-h,r+i,o].join(",")+"z"):"line"===M?n="M"+w.x1+","+w.y1+" L"+w.x2+","+w.y2:"polyline"!==M&&"polygon"!==M||(n="M"+(r=(u=(t.getAttribute("points")+"").match(a)||[]).shift())+","+(o=u.shift())+" L"+u.join(","),"polygon"===M&&(n+=","+r+","+o+"z")),l.setAttribute("d",R(l._gsRawPath=z(n))),e&&t.parentNode&&(t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t)),l):t}function k(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,E(g(o+(i+(t[e+7]-i)*n-o)*n-a,r)*l)}function H(t,e,n){n=void 0===n?1:C(n)||0,e=C(e)||0;var r=Math.max(0,~~(u(n-e)-1e-8)),a=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=w(t[n],t[n].slice(0));return w(t,e)}(t);if(e>n&&(e=1-e,n=1-n,function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||_(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||I(a);var i,s,l,c,h,f,g,p,d=n>1,m=S(a,e,v,!0),y=S(a,n,x),b=y.segment,E=m.segment,N=y.segIndex,O=m.segIndex,T=y.i,H=m.i,P=O===N,D=T===H&&P;if(d||r){for(i=N<O||P&&T<H||D&&y.t<m.t,L(a,O,H,m.t)&&(O++,i||(N++,D?(y.t=(y.t-m.t)/(1-m.t),T=0):P&&(T-=H))),1-(n-e)<1e-5?N=O-1:!y.t&&N?N--:L(a,N,T,y.t)&&i&&O++,1===m.t&&(O=(O+1)%a.length),h=[],g=1+(f=a.length)*r,p=O,g+=(f-O+N)%f,c=0;c<g;c++)M(h,a[p++%f]);a=h}else if(l=1===y.t?6:A(b,T,y.t),e!==n)for(s=A(E,H,D?m.t/y.t:m.t),P&&(l+=s),b.splice(T+l+2),(s||H)&&E.splice(0,H+s),c=a.length;c--;)(c<O||c>N)&&a.splice(c,1);else b.angle=k(b,T+l,0),m=b[T+=l],y=b[T+1],b.length=b.totalLength=0,b.totalPoints=a.totalPoints=8,b.push(m,y,m,y,m,y,m,y);return a.totalLength=0,a}function P(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,c,h,g,d,m,v,x,y,b,E,C,L=~~t.resolution||12,w=1/L,M=n?e+6*n+1:t.length,N=t[e],_=t[e+1],O=e?e/6*L:0,T=t.samples,k=t.lookup,H=(e?t.minLength:p)||p,P=T[O+n*L-1],I=e?T[O-1]:0;for(T.length=k.length=0,a=e+2;a<M;a+=6){if(o=t[a+4]-N,i=t[a+2]-N,s=t[a]-N,h=t[a+5]-_,g=t[a+3]-_,d=t[a+1]-_,l=c=m=v=0,u(o)<1e-5&&u(h)<1e-5&&u(s)+u(d)<1e-5)t.length>8&&(t.splice(a,6),a-=6,M-=6);else for(r=1;r<=L;r++)l=c-(c=((y=w*r)*y*o+3*(x=1-y)*(y*i+x*s))*y),m=v-(v=(y*y*h+3*x*(y*g+x*d))*y),(E=f(m*m+l*l))<H&&(H=E),I+=E,T[O++]=I;N+=o,_+=h}if(P)for(P-=I;O<T.length;O++)T[O]+=P;if(T.length&&H)for(t.totalLength=C=T[T.length-1]||0,t.minLength=H,E=b=0,r=0;r<C;r+=H)k[E++]=T[b]<r?++b:b;else t.totalLength=T[0]=0;return e?I-T[e/2-1]:I}function I(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=P(t[a]);return t.totalPoints=r,t.totalLength=n,t}function A(t,e,n){if(n<=0||n>=1)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],c=r+(o-r)*n,h=o+(s-o)*n,u=a+(i-a)*n,f=i+(l-i)*n,g=c+(h-c)*n,p=u+(f-u)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return h+=(d-h)*n,f+=(m-f)*n,t.splice(e+2,4,E(c),E(u),E(g),E(p),E(g+(h-g)*n),E(p+(f-p)*n),E(h),E(f),E(d),E(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function S(t,e,n,r){n=n||{},t.totalLength||I(t),(e<0||e>1)&&(e=b(e));var a,o,i,s,l,c,h,u=0,f=t[0];if(e)if(1===e)h=1,c=(f=t[u=t.length-1]).length-8;else{if(t.length>1){for(i=t.totalLength*e,l=c=0;(l+=t[c++].totalLength)<i;)u=c;e=(i-(s=l-(f=t[u]).totalLength))/(l-s)||0}a=f.samples,o=f.resolution,i=f.totalLength*e,s=(c=f.lookup[~~(i/f.minLength)]||0)?a[c-1]:0,(l=a[c])<i&&(s=l,l=a[++c]),h=1/o*((i-s)/(l-s)+c%o),c=6*~~(c/o),r&&1===h&&(c+6<f.length?(c+=6,h=0):u+1<t.length&&(c=h=0,f=t[++u]))}else h=c=u=0,f=t[0];return n.t=h,n.i=c,n.path=t,n.segment=f,n.segIndex=u,n}function D(t,e,n,r){var a,o,i,s,l,c,h,u,f,g=t[0],p=r||{};if((e<0||e>1)&&(e=b(e)),t.length>1){for(i=t.totalLength*e,l=c=0;(l+=t[c++].totalLength)<i;)g=t[c];e=(i-(s=l-g.totalLength))/(l-s)||0}return a=g.samples,o=g.resolution,i=g.totalLength*e,s=(c=g.lookup[e<1?~~(i/g.minLength):g.lookup.length-1]||0)?a[c-1]:0,(l=a[c])<i&&(s=l,l=a[++c]),f=1-(h=1/o*((i-s)/(l-s)+c%o)||0),u=g[c=6*~~(c/o)],p.x=E((h*h*(g[c+6]-u)+3*f*(h*(g[c+4]-u)+f*(g[c+2]-u)))*h+u),p.y=E((h*h*(g[c+7]-(u=g[c+1]))+3*f*(h*(g[c+5]-u)+f*(g[c+3]-u)))*h+u),n&&(p.angle=g.totalLength?k(g,c,h>=1?1-1e-9:h||1e-9):g.angle||0),p}function Y(t,e,n,r,a,o,i){for(var s,l,c,h,u,f=t.length;--f>-1;)for(l=(s=t[f]).length,c=0;c<l;c+=2)h=s[c],u=s[c+1],s[c]=h*e+u*r+o,s[c+1]=h*n+u*a+i;return t._dirty=1,t}function Z(t,e,n,r,a,o,i,l,g){if(t!==l||e!==g){n=u(n),r=u(r);var p=a%360*s,d=h(p),m=c(p),v=Math.PI,x=2*v,y=(t-l)/2,b=(e-g)/2,E=d*y+m*b,C=-m*y+d*b,L=E*E,w=C*C,M=L/(n*n)+w/(r*r);M>1&&(n=f(M)*n,r=f(M)*r);var N=n*n,_=r*r,O=(N*_-N*w-_*L)/(N*w+_*L);O<0&&(O=0);var T=(o===i?-1:1)*f(O),k=T*(n*C/r),H=T*(-r*E/n),P=(t+l)/2+(d*k-m*H),I=(e+g)/2+(m*k+d*H),A=(E-k)/n,S=(C-H)/r,D=(-E-k)/n,Y=(-C-H)/r,Z=A*A+S*S,z=(S<0?-1:1)*Math.acos(A/f(Z)),W=(A*Y-S*D<0?-1:1)*Math.acos((A*D+S*Y)/f(Z*(D*D+Y*Y)));isNaN(W)&&(W=v),!i&&W>0?W-=x:i&&W<0&&(W+=x),z%=x,W%=x;var B,R=Math.ceil(u(W)/(x/4)),V=[],U=W/R,q=4/3*c(U/2)/(1+h(U/2)),G=d*n,j=m*n,K=m*-r,F=d*r;for(B=0;B<R;B++)E=h(a=z+B*U),C=c(a),A=h(a+=U),S=c(a),V.push(E-q*C,C+q*E,A+q*S,S-q*A,A,S);for(B=0;B<V.length;B+=2)E=V[B],C=V[B+1],V[B]=E*G+C*K+P,V[B+1]=E*j+C*F+I;return V[B-2]=l,V[B-1]=g,V}}function z(t){var e,n,a,i,s,l,c,h,f,g,p,d,m,v,x,y=(t+"").replace(o,(function(t){var e=+t;return e<1e-4&&e>-1e-4?0:e})).match(r)||[],b=[],E=0,C=0,L=2/3,w=y.length,M=0,N="ERROR: malformed path: "+t,_=function(t,e,n,r){g=(n-t)/3,p=(r-e)/3,c.push(t+g,e+p,n-g,r-p,n,r)};if(!t||!isNaN(y[0])||isNaN(y[1]))return console.log(N),b;for(e=0;e<w;e++)if(m=s,isNaN(y[e])?l=(s=y[e].toUpperCase())!==y[e]:e--,a=+y[e+1],i=+y[e+2],l&&(a+=E,i+=C),e||(h=a,f=i),"M"===s)c&&(c.length<8?b.length-=1:M+=c.length),E=h=a,C=f=i,c=[a,i],b.push(c),e+=2,s="L";else if("C"===s)c||(c=[0,0]),l||(E=C=0),c.push(a,i,E+1*y[e+3],C+1*y[e+4],E+=1*y[e+5],C+=1*y[e+6]),e+=6;else if("S"===s)g=E,p=C,"C"!==m&&"S"!==m||(g+=E-c[c.length-4],p+=C-c[c.length-3]),l||(E=C=0),c.push(g,p,a,i,E+=1*y[e+3],C+=1*y[e+4]),e+=4;else if("Q"===s)g=E+(a-E)*L,p=C+(i-C)*L,l||(E=C=0),E+=1*y[e+3],C+=1*y[e+4],c.push(g,p,E+(a-E)*L,C+(i-C)*L,E,C),e+=4;else if("T"===s)g=E-c[c.length-4],p=C-c[c.length-3],c.push(E+g,C+p,a+(E+1.5*g-a)*L,i+(C+1.5*p-i)*L,E=a,C=i),e+=2;else if("H"===s)_(E,C,E=a,C),e+=1;else if("V"===s)_(E,C,E,C=a+(l?C-E:0)),e+=1;else if("L"===s||"Z"===s)"Z"===s&&(a=h,i=f,c.closed=!0),("L"===s||u(E-a)>.5||u(C-i)>.5)&&(_(E,C,a,i),"L"===s&&(e+=2)),E=a,C=i;else if("A"===s){if(v=y[e+4],x=y[e+5],g=y[e+6],p=y[e+7],n=7,v.length>1&&(v.length<3?(p=g,g=x,n--):(p=x,g=v.substr(2),n-=2),x=v.charAt(1),v=v.charAt(0)),d=Z(E,C,+y[e+1],+y[e+2],+y[e+3],+v,+x,(l?E:0)+1*g,(l?C:0)+1*p),e+=n,d)for(n=0;n<d.length;n++)c.push(d[n]);E=c[c.length-2],C=c[c.length-1]}else console.log(N);return(e=c.length)<6?(b.pop(),e=0):c[0]===c[e-2]&&c[1]===c[e-1]&&(c.closed=!0),b.totalPoints=M+e,b}function W(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function B(t,e,n){u(t[0]-t[2])<1e-4&&u(t[1]-t[3])<1e-4&&(t=t.slice(2));var r,a,o,i,s,l,p,d,m,v,x,y,b,C,L=t.length-2,w=+t[0],M=+t[1],N=+t[2],_=+t[3],O=[w,M,w,M],T=N-w,k=_-M,H=Math.abs(t[L]-w)<.001&&Math.abs(t[L+1]-M)<.001;for(isNaN(n)&&(n=Math.PI/10),H&&(t.push(N,_),N=w,_=M,w=t[L-2],M=t[L-1],t.unshift(w,M),L+=4),e=e||0===e?+e:1,s=2;s<L;s+=2)r=w,a=M,w=N,M=_,N=+t[s+2],_=+t[s+3],w===N&&M===_||(y=(l=T)*l+(d=k)*d,b=(T=N-w)*T+(k=_-M)*k,C=(p=N-r)*p+(m=_-a)*m,x=(o=Math.acos((y+b-C)/f(4*y*b)))/Math.PI*e,v=f(y)*x,x*=f(b),w===r&&M===a||(o>n?(i=g(m,p),O.push(E(w-h(i)*v),E(M-c(i)*v),E(w),E(M),E(w+h(i)*x),E(M+c(i)*x))):(i=g(d,l),O.push(E(w-h(i)*v),E(M-c(i)*v)),i=g(k,T),O.push(E(w),E(M),E(w+h(i)*x),E(M+c(i)*x)))));return w!==N||M!==_||O.length<4?O.push(E(N),E(_),E(N),E(_)):O.length-=2,H&&(O.splice(0,6),O.length=O.length-6),O}function R(t){m(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+E(a[0])+","+E(a[1])+" C",e=a.length,r=2;r<e;r++)o+=E(a[r++])+","+E(a[r++])+" "+E(a[r++])+","+E(a[r++])+" "+E(a[r++])+","+E(a[r])+" ";a.closed&&(o+="z")}return o}},6131:function(t,e,n){var r=n(1943),a=n(7294),o=n(6132),i=n(6712),s=n(2932),l=n(1431),c=n(2387);o.gsap.registerPlugin(s.i,l.Vq);var h=function(t){function e(e){var n;return(n=t.call(this,e)||this).path=n.props.pageName,n.HeadText={home:["WHY YOU STILL","READING THIS?"],design:["DO YOU LIKE IT?","SO WHY NOT"],webdev:["DO YOU LIKE IT?","SO WHY NOT"],about:["DO YOU LIKE IT?","SO WHY NOT"],vacancies:["“THE ONLY WAY TO DO","GREAT WORK, IS TO","LOVE WHAT YOU DO.”"],contact:[]},n.Head=n.HeadText[n.path],n.Contact={head:[],bottom:[],wrapper:null,realH2:null,wrapperH2:null,cont:null},n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.Contact.timeline=(new l.Vq).from(this.Contact.head,.5,{height:0,stagger:.1}).to(this.Contact.wrapper,.5,{width:0},"+=0.5").from(this.Contact.realH2,.5,{x:"-5%"},"-=0.4").from(this.Contact.wrapperH2,.5,{x:"-5%"},"-=0.5").from(this.Contact.cont,.3,{height:0}).from(this.Contact.bottom,.3,{opacity:0,y:50,stagger:.1},"-=0.1")},n.render=function(){var t=this;return"vacancies"===this.path?a.createElement("section",{className:"still-reading vacancies",ref:function(e){return t.props.Contact.section=e}},a.createElement("div",{className:"load-wrapper",ref:function(e){return t.Contact.wrapper=e}},a.createElement("div",{className:"block"},a.createElement("h2",{className:"vertical-bottom-move small",ref:function(e){return t.Contact.wrapperH2=e}},a.createElement("span",null,a.createElement("span",{ref:function(e){return t.Contact.head[0]=e}},this.Head[0])),a.createElement("span",null,a.createElement("span",{ref:function(e){return t.Contact.head[1]=e}},this.Head[1])),a.createElement("span",null,a.createElement("span",{ref:function(e){return t.Contact.head[2]=e}},this.Head[2]))))),a.createElement("div",{className:"container flex-center"},a.createElement("h2",{className:"small",ref:function(e){return t.Contact.realH2=e}},a.createElement("span",null,this.Head[0]),a.createElement("span",null,this.Head[1]),a.createElement("span",null,this.Head[2])),a.createElement("div",{ref:function(e){return t.Contact.cont=e}},a.createElement("p",{ref:function(e){return t.Contact.bottom[0]=e},className:"sub"},"If the text above is about you ..."),a.createElement("div",{ref:function(e){return t.Contact.bottom[1]=e}},a.createElement(i.Z,{size:"big",to:"/contact"},"CONTACT US BRO")),a.createElement("img",{ref:function(e){return t.Contact.bottom[2]=e},className:"bottom-text",src:c.Z,alt:""})),a.createElement("div",{className:"paint"}))):a.createElement("section",{className:"still-reading",ref:function(e){return t.props.Contact.section=e}},a.createElement("div",{className:"load-wrapper",ref:function(e){return t.Contact.wrapper=e}},a.createElement("div",{className:"block"},a.createElement("h2",{className:"vertical-bottom-move",ref:function(e){return t.Contact.wrapperH2=e}},a.createElement("span",null,a.createElement("span",{ref:function(e){return t.Contact.head[0]=e}},this.Head[0])),a.createElement("span",null,a.createElement("span",{ref:function(e){return t.Contact.head[1]=e}},this.Head[1]))))),a.createElement("div",{className:"container flex-center"},a.createElement("h2",{ref:function(e){return t.Contact.realH2=e}},a.createElement("span",null,this.Head[0]),a.createElement("span",null,this.Head[1])),a.createElement("div",{ref:function(e){return t.Contact.cont=e}},a.createElement("div",{ref:function(e){return t.Contact.bottom[0]=e}},a.createElement(i.Z,{size:"big",to:"/contact"},"CONTACT US")),a.createElement("p",{ref:function(e){return t.Contact.bottom[1]=e},className:"sub"},"and let’s make WEB beautiful together"),a.createElement("img",{ref:function(e){return t.Contact.bottom[2]=e},className:"bottom-text",src:c.Z,alt:""})),a.createElement("div",{className:"paint"})))},e}(a.Component);e.Z=h},2387:function(t,e,n){e.Z=n.p+"static/text-9ce114f2d32e1b2b52b803f938edb80b.svg"}}]);
//# sourceMappingURL=564f965948dab618dd65438238bef470cde1d61d-b4a362bae05b860cc4a8.js.map