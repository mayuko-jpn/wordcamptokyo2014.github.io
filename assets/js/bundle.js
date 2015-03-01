!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return o(n?n:e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e){var t=e("./app/script.js");$("#main").html(t)},{"./app/script.js":3}],2:[function(e,t,n){!function(e,t){"object"==typeof n&&n?t(n):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Mustache={})}(this,function(e){function t(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,t){return d.call(e,t)}function o(e){return!r(v,e)}function i(e){return String(e).replace(/[&<>"'\/]/g,function(e){return g[e]})}function s(t,r){function i(){if(b&&!_)for(;g.length;)delete v[g.pop()];else g=[];b=!1,_=!1}function s(e){if("string"==typeof e&&(e=e.split(y,2)),!l(e)||2!==e.length)throw new Error("Invalid tags: "+e);p=new RegExp(n(e[0])+"\\s*"),h=new RegExp("\\s*"+n(e[1])),f=new RegExp("\\s*"+n("}"+e[1]))}if(!t)return[];var p,h,f,d=[],v=[],g=[],b=!1,_=!1;s(r||e.tags);for(var E,U,j,T,S,q,C=new c(t);!C.eos();){if(E=C.pos,j=C.scanUntil(p))for(var N=0,O=j.length;O>N;++N)T=j.charAt(N),o(T)?g.push(v.length):_=!0,v.push(["text",T,E,E+1]),E+=1,"\n"===T&&i();if(!C.scan(p))break;if(b=!0,U=C.scan(x)||"name",C.scan(w),"="===U?(j=C.scanUntil(m),C.scan(m),C.scanUntil(h)):"{"===U?(j=C.scanUntil(f),C.scan(k),C.scanUntil(h),U="&"):j=C.scanUntil(h),!C.scan(h))throw new Error("Unclosed tag at "+C.pos);if(S=[U,j,E,C.pos],v.push(S),"#"===U||"^"===U)d.push(S);else if("/"===U){if(q=d.pop(),!q)throw new Error('Unopened section "'+j+'" at '+E);if(q[1]!==j)throw new Error('Unclosed section "'+q[1]+'" at '+E)}else"name"===U||"{"===U||"&"===U?_=!0:"="===U&&s(j)}if(q=d.pop())throw new Error('Unclosed section "'+q[1]+'" at '+C.pos);return u(a(v))}function a(e){for(var t,n,r=[],o=0,i=e.length;i>o;++o)t=e[o],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function u(e){for(var t,n,r=[],o=r,i=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":o.push(t),i.push(t),o=t[4]=[];break;case"/":n=i.pop(),n[5]=t[2],o=i.length>0?i[i.length-1][4]:r;break;default:o.push(t)}return r}function c(e){this.string=e,this.tail=e,this.pos=0}function p(e,t){this.view=null==e?{}:e,this.cache={".":this.view},this.parent=t}function h(){this.cache={}}var f=Object.prototype.toString,l=Array.isArray||function(e){return"[object Array]"===f.call(e)},d=RegExp.prototype.test,v=/\S/,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},w=/\s*/,y=/\s+/,m=/\s*=/,k=/\s*\}/,x=/#|\^|\/|>|\{|&|=|!/;c.prototype.eos=function(){return""===this.tail},c.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},c.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},p.prototype.push=function(e){return new p(e,this)},p.prototype.lookup=function(e){var n,r=this.cache;if(e in r)n=r[e];else{for(var o,i,s=this;s;){if(e.indexOf(".")>0)for(n=s.view,o=e.split("."),i=0;null!=n&&i<o.length;)n=n[o[i++]];else"object"==typeof s.view&&(n=s.view[e]);if(null!=n)break;s=s.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=s(e,t)),r},h.prototype.render=function(e,t,n){var r=this.parse(e),o=t instanceof p?t:new p(t);return this.renderTokens(r,o,n,e)},h.prototype.renderTokens=function(e,t,n,r){for(var o,i,s,a="",u=0,c=e.length;c>u;++u)s=void 0,o=e[u],i=o[0],"#"===i?s=this._renderSection(o,t,n,r):"^"===i?s=this._renderInverted(o,t,n,r):">"===i?s=this._renderPartial(o,t,n,r):"&"===i?s=this._unescapedValue(o,t):"name"===i?s=this._escapedValue(o,t):"text"===i&&(s=this._rawValue(o)),void 0!==s&&(a+=s);return a},h.prototype._renderSection=function(e,n,r,o){function i(e){return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(l(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,o);else if("object"==typeof u||"string"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,o);else if(t(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),i),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,o);return a}},h.prototype._renderInverted=function(e,t,n,r){var o=t.lookup(e[1]);return!o||l(o)&&0===o.length?this.renderTokens(e[4],t,n,r):void 0},h.prototype._renderPartial=function(e,n,r){if(r){var o=t(r)?r(e[1]):r[e[1]];return null!=o?this.renderTokens(this.parse(o),n,r,o):void 0}},h.prototype._unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},h.prototype._escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},h.prototype._rawValue=function(e){return e[1]},e.name="mustache.js",e.version="1.1.0",e.tags=["{{","}}"];var b=new h;e.clearCache=function(){return b.clearCache()},e.parse=function(e,t){return b.parse(e,t)},e.render=function(e,t,n){return b.render(e,t,n)},e.to_html=function(n,r,o,i){var s=e.render(n,r,o);return t(i)?void i(s):s},e.escape=i,e.Scanner=c,e.Context=p,e.Writer=h})},{}],3:[function(e,t){t.exports=function(){var t=e("./../../../bower_components/mustache/mustache.js"),n=new XMLHttpRequest,r="https://api.github.com/users/wordcamptokyo2014/repos";n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=JSON.parse(n.responseText);console.log(e)}},n.open("GET",r,!0),n.send();var o={firstName:"Yutaro",Lastname:"Miyazaki"},i="<h1>{{firstName}} {{lastName}}</h1>",s=t.render(i,o);return s}},{"./../../../bower_components/mustache/mustache.js":2}]},{},[1]);