(()=>{var e={91:(e,t,n)=>{(function(){function e(e,t){var n,r=e.split("."),i=N;r[0]in i||!i.execScript||i.execScript("var "+r[0]);for(;r.length&&(n=r.shift());)r.length||void 0===t?i=i[n]?i[n]:i[n]={}:i[n]=t}function t(e,t){function n(){}n.prototype=t.prototype,e.M=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.N=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function n(e,t){null!=e&&this.a.apply(this,arguments)}function r(e){e.b=""}function i(e,t){return e>t?1:e<t?-1:0}function a(e,t){this.b=e,this.a={};for(var n=0;n<t.length;n++){var r=t[n];this.a[r.b]=r}}function l(e){return function(e,t){e.sort(function(e,t){return e.b-t.b}||i)}(e=function(e){var t,n=[],r=0;for(t in e)n[r++]=e[t];return n}(e.a)),e}function o(e,t){switch(this.b=e,this.g=!!t.v,this.a=t.c,this.i=t.type,this.h=!1,this.a){case Z:case H:case U:case Y:case G:case O:case j:this.h=!0}this.f=t.defaultValue}function u(){this.a={},this.f=this.j().a,this.b=this.g=null}function s(e,t){for(var n=l(e.j()),r=0;r<n.length;r++){var i=(o=n[r]).b;if(null!=t.a[i]){e.b&&delete e.b[o.b];var a=11==o.a||10==o.a;if(o.g)for(var o=c(t,i)||[],u=0;u<o.length;u++){var d=e,m=i,p=a?o[u].clone():o[u];d.a[m]||(d.a[m]=[]),d.a[m].push(p),d.b&&delete d.b[m]}else o=c(t,i),a?(a=c(e,i))?s(a,o):h(e,i,o.clone()):h(e,i,o)}}}function c(e,t){var n=e.a[t];if(null==n)return null;if(e.g){if(!(t in e.b)){var r=e.g,i=e.f[t];if(null!=n)if(i.g){for(var a=[],l=0;l<n.length;l++)a[l]=r.b(i,n[l]);n=a}else n=r.b(i,n);return e.b[t]=n}return e.b[t]}return n}function d(e,t,n){var r=c(e,t);return e.f[t].g?r[n||0]:r}function m(e,t){var n;if(null!=e.a[t])n=d(e,t,void 0);else e:{if(void 0===(n=e.f[t]).f){var r=n.i;if(r===Boolean)n.f=!1;else if(r===Number)n.f=0;else{if(r!==String){n=new r;break e}n.f=n.h?"0":""}}n=n.f}return n}function p(e,t){return e.f[t].g?null!=e.a[t]?e.a[t].length:0:null!=e.a[t]?1:0}function h(e,t,n){e.a[t]=n,e.b&&(e.b[t]=n)}function f(e,t){var n,r=[];for(n in t)0!=n&&r.push(new o(n,t[n]));return new a(e,r)}function g(){u.call(this)}function v(){u.call(this)}function y(){u.call(this)}function b(){}function x(){}function w(){}function S(){this.a={}}function k(e){return 0==e.length||ne.test(e)}function D(e,t){if(null==t)return null;t=t.toUpperCase();var n=e.a[t];if(null==n){if(null==(n=W[t]))return null;n=(new w).a(y.j(),n),e.a[t]=n}return n}function F(e){return null==(e=Q[e])?"ZZ":e[0]}function C(e){this.H=RegExp(" "),this.C="",this.m=new n,this.w="",this.i=new n,this.u=new n,this.l=!0,this.A=this.o=this.F=!1,this.G=S.b(),this.s=0,this.b=new n,this.B=!1,this.h="",this.a=new n,this.f=[],this.D=e,this.J=this.g=P(this,this.D)}function P(e,t){var n;if(null!=t&&isNaN(t)&&t.toUpperCase()in W){if(null==(n=D(e.G,t)))throw Error("Invalid region code: "+t);n=m(n,10)}else n=0;return null!=(n=D(e.G,F(n)))?n:re}function L(e){for(var t=e.f.length,n=0;n<t;++n){var i,a=e.f[n],l=m(a,1);if(e.w==l)return!1;i=e;var o=m(s=a,1);if(-1!=o.indexOf("|"))i=!1;else{var u;o=(o=o.replace(ie,"\\d")).replace(ae,"\\d"),r(i.m),u=i;var s=m(s,2),c="999999999999999".match(o)[0];0<(u=c.length<u.a.b.length?"":(u=c.replace(new RegExp(o,"g"),s)).replace(RegExp("9","g")," ")).length?(i.m.a(u),i=!0):i=!1}if(i)return e.w=l,e.B=oe.test(d(a,4)),e.s=0,!0}return e.l=!1}function I(e,t){for(var n=[],r=t.length-3,i=e.f.length,a=0;a<i;++a){var l=e.f[a];0==p(l,3)?n.push(e.f[a]):(l=d(l,3,Math.min(r,p(l,3)-1)),0==t.search(l)&&n.push(e.f[a]))}e.f=n}function _(e){return e.l=!0,e.A=!1,e.f=[],e.s=0,r(e.m),e.w="",B(e)}function M(e){for(var t=e.a.toString(),n=e.f.length,r=0;r<n;++r){var i=e.f[r],a=m(i,1);if(new RegExp("^(?:"+a+")$").test(t))return e.B=oe.test(d(i,4)),E(e,t=t.replace(new RegExp(a,"g"),d(i,2)))}return""}function E(e,t){var n=e.b.b.length;return e.B&&0<n&&" "!=e.b.toString().charAt(n-1)?e.b+" "+t:e.b+t}function B(e){var t=e.a.toString();if(3<=t.length){for(var n=e.o&&0==e.h.length&&0<p(e.g,20)?c(e.g,20)||[]:c(e.g,19)||[],r=n.length,i=0;i<r;++i){var a=n[i];0<e.h.length&&k(m(a,4))&&!d(a,6)&&null==a.a[5]||(0!=e.h.length||e.o||k(m(a,4))||d(a,6))&&le.test(m(a,2))&&e.f.push(a)}return I(e,t),0<(t=M(e)).length?t:L(e)?V(e):e.i.toString()}return E(e,t)}function V(e){var t=e.a.toString(),n=t.length;if(0<n){for(var r="",i=0;i<n;i++)r=$(e,t.charAt(i));return e.l?E(e,r):e.i.toString()}return e.b.toString()}function T(e){var t,n=e.a.toString(),i=0;return(t=1==d(e.g,10)&&("1"==(t=e.a.toString()).charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1)))?(i=1,e.b.a("1").a(" "),e.o=!0):null!=e.g.a[15]&&(t=new RegExp("^(?:"+d(e.g,15)+")"),null!=(t=n.match(t))&&null!=t[0]&&0<t[0].length&&(e.o=!0,i=t[0].length,e.b.a(n.substring(0,i)))),r(e.a),e.a.a(n.substring(i)),n.substring(0,i)}function R(e){var t=e.u.toString(),n=new RegExp("^(?:\\+|"+d(e.g,11)+")");return null!=(n=t.match(n))&&null!=n[0]&&0<n[0].length&&(e.o=!0,n=n[0].length,r(e.a),e.a.a(t.substring(n)),r(e.b),e.b.a(t.substring(0,n)),"+"!=t.charAt(0)&&e.b.a(" "),!0)}function A(e){if(0==e.a.b.length)return!1;var t,i=new n;e:{if(0!=(t=e.a.toString()).length&&"0"!=t.charAt(0))for(var a,l=t.length,o=1;3>=o&&o<=l;++o)if((a=parseInt(t.substring(0,o),10))in Q){i.a(t.substring(o)),t=a;break e}t=0}return 0!=t&&(r(e.a),e.a.a(i.toString()),"001"==(i=F(t))?e.g=D(e.G,""+t):i!=e.D&&(e.g=P(e,i)),e.b.a(""+t).a(" "),e.h="",!0)}function $(e,t){if(0<=(i=e.m.toString()).substring(e.s).search(e.H)){var n=i.search(e.H),i=i.replace(e.H,t);return r(e.m),e.m.a(i),e.s=n,i.substring(0,e.s+1)}return 1==e.f.length&&(e.l=!1),e.w="",e.i.toString()}var N=this;n.prototype.b="",n.prototype.set=function(e){this.b=""+e},n.prototype.a=function(e,t,n){if(this.b+=String(e),null!=t)for(var r=1;r<arguments.length;r++)this.b+=arguments[r];return this},n.prototype.toString=function(){return this.b};var j=1,O=2,Z=3,H=4,U=6,Y=16,G=18;u.prototype.set=function(e,t){h(this,e.b,t)},u.prototype.clone=function(){var e=new this.constructor;return e!=this&&(e.a={},e.b&&(e.b={}),s(e,this)),e},t(g,u);var K=null;t(v,u);var q=null;t(y,u);var z=null;g.prototype.j=function(){var e=K;return e||(K=e=f(g,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),e},g.j=g.prototype.j,v.prototype.j=function(){var e=q;return e||(q=e=f(v,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),e},v.j=v.prototype.j,y.prototype.j=function(){var e=z;return e||(z=e=f(y,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:v},2:{name:"fixed_line",c:11,type:v},3:{name:"mobile",c:11,type:v},4:{name:"toll_free",c:11,type:v},5:{name:"premium_rate",c:11,type:v},6:{name:"shared_cost",c:11,type:v},7:{name:"personal_number",c:11,type:v},8:{name:"voip",c:11,type:v},21:{name:"pager",c:11,type:v},25:{name:"uan",c:11,type:v},27:{name:"emergency",c:11,type:v},28:{name:"voicemail",c:11,type:v},29:{name:"short_code",c:11,type:v},30:{name:"standard_rate",c:11,type:v},31:{name:"carrier_specific",c:11,type:v},33:{name:"sms_services",c:11,type:v},24:{name:"no_international_dialling",c:11,type:v},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:g},20:{name:"intl_number_format",v:!0,c:11,type:g},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),e},y.j=y.prototype.j,b.prototype.a=function(e){throw new e.b,Error("Unimplemented")},b.prototype.b=function(e,t){if(11==e.a||10==e.a)return t instanceof u?t:this.a(e.i.prototype.j(),t);if(14==e.a){if("string"==typeof t&&J.test(t)){var n=Number(t);if(0<n)return n}return t}if(!e.h)return t;if((n=e.i)===String){if("number"==typeof t)return String(t)}else if(n===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||J.test(t)))return Number(t);return t};var J=/^-?[0-9]+$/;t(x,b),x.prototype.a=function(e,t){var n=new e.b;return n.g=this,n.a=t,n.b={},n},t(w,x),w.prototype.b=function(e,t){return 8==e.a?!!t:b.prototype.b.apply(this,arguments)},w.prototype.a=function(e,t){return w.M.a.call(this,e,t)};var Q={32:["BE"]},W={BE:[null,[null,null,"4\\d{8}|[1-9]\\d{7}",null,null,null,null,null,null,[8,9]],[null,null,"(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}",null,null,null,"12345678",null,null,[8]],[null,null,"4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}",null,null,null,"470123456",null,null,[9]],[null,null,"800[1-9]\\d{4}",null,null,null,"80012345",null,null,[8]],[null,null,"(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",null,null,null,"90012345",null,null,[8]],[null,null,"7879\\d{4}",null,null,null,"78791234",null,null,[8]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],"BE",32,"00","0",null,null,"0",null,null,null,[[null,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"],"0$1"],[null,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-7]|8(?:0[2-8]|[1-79])"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],[null,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,"78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}",null,null,null,"78102345",null,null,[8]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};S.b=function(){return S.a?S.a:S.a=new S};var X={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},ee=RegExp("[+＋]+"),te=RegExp("([0-9０-９٠-٩۰-۹])"),ne=/^\(?\$1\)?$/,re=new y;h(re,11,"NA");var ie=/\[([^\[\]])*\]/g,ae=/\d(?=[^,}][^,}])/g,le=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),oe=/[- ]/;C.prototype.K=function(){this.C="",r(this.i),r(this.u),r(this.m),this.s=0,this.w="",r(this.b),this.h="",r(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=P(this,this.D))},C.prototype.L=function(e){return this.C=function(e,t){e.i.a(t);var n,i=t;if(te.test(i)||1==e.i.b.length&&ee.test(i)?("+"==(i=t)?(n=i,e.u.a(i)):(n=X[i],e.u.a(n),e.a.a(n)),t=n):(e.l=!1,e.F=!0),!e.l){if(!e.F)if(R(e)){if(A(e))return _(e)}else if(0<e.h.length&&(i=e.a.toString(),r(e.a),e.a.a(e.h),e.a.a(i),n=(i=e.b.toString()).lastIndexOf(e.h),r(e.b),e.b.a(i.substring(0,n))),e.h!=T(e))return e.b.a(" "),_(e);return e.i.toString()}switch(e.u.b.length){case 0:case 1:case 2:return e.i.toString();case 3:if(!R(e))return e.h=T(e),B(e);e.A=!0;default:return e.A?(A(e)&&(e.A=!1),e.b.toString()+e.a.toString()):0<e.f.length?(i=$(e,t),0<(n=M(e)).length?n:(I(e,e.a.toString()),L(e)?V(e):e.l?E(e,i):e.i.toString())):B(e)}}(this,e)},e("Cleave.AsYouTypeFormatter",C),e("Cleave.AsYouTypeFormatter.prototype.inputDigit",C.prototype.L),e("Cleave.AsYouTypeFormatter.prototype.clear",C.prototype.K)}).call("object"==typeof n.g&&n.g?n.g:window)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";var e="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},t=function(e,n,r,i,a,l,o,u,s,c){var d=this;d.numeralDecimalMark=e||".",d.numeralIntegerScale=n>0?n:0,d.numeralDecimalScale=r>=0?r:2,d.numeralThousandsGroupStyle=i||t.groupStyle.thousand,d.numeralPositiveOnly=!!a,d.stripLeadingZeroes=!1!==l,d.prefix=o||""===o?o:"",d.signBeforePrefix=!!u,d.tailPrefix=!!s,d.delimiter=c||""===c?c:",",d.delimiterRE=c?new RegExp("\\"+c,"g"):""};t.groupStyle={thousand:"thousand",lakh:"lakh",wan:"wan",none:"none"},t.prototype={getRawValue:function(e){return e.replace(this.delimiterRE,"").replace(this.numeralDecimalMark,".")},format:function(e){var n,r,i,a,l=this,o="";switch(e=e.replace(/[A-Za-z]/g,"").replace(l.numeralDecimalMark,"M").replace(/[^\dM-]/g,"").replace(/^\-/,"N").replace(/\-/g,"").replace("N",l.numeralPositiveOnly?"":"-").replace("M",l.numeralDecimalMark),l.stripLeadingZeroes&&(e=e.replace(/^(-)?0+(?=\d)/,"$1")),r="-"===e.slice(0,1)?"-":"",i=void 0!==l.prefix?l.signBeforePrefix?r+l.prefix:l.prefix+r:r,a=e,e.indexOf(l.numeralDecimalMark)>=0&&(a=(n=e.split(l.numeralDecimalMark))[0],o=l.numeralDecimalMark+n[1].slice(0,l.numeralDecimalScale)),"-"===r&&(a=a.slice(1)),l.numeralIntegerScale>0&&(a=a.slice(0,l.numeralIntegerScale)),l.numeralThousandsGroupStyle){case t.groupStyle.lakh:a=a.replace(/(\d)(?=(\d\d)+\d$)/g,"$1"+l.delimiter);break;case t.groupStyle.wan:a=a.replace(/(\d)(?=(\d{4})+$)/g,"$1"+l.delimiter);break;case t.groupStyle.thousand:a=a.replace(/(\d)(?=(\d{3})+$)/g,"$1"+l.delimiter)}return l.tailPrefix?r+a.toString()+(l.numeralDecimalScale>0?o.toString():"")+l.prefix:i+a.toString()+(l.numeralDecimalScale>0?o.toString():"")}};var r=t,i=function(e,t,n){var r=this;r.date=[],r.blocks=[],r.datePattern=e,r.dateMin=t.split("-").reverse().map((function(e){return parseInt(e,10)})),2===r.dateMin.length&&r.dateMin.unshift(0),r.dateMax=n.split("-").reverse().map((function(e){return parseInt(e,10)})),2===r.dateMax.length&&r.dateMax.unshift(0),r.initBlocks()};i.prototype={initBlocks:function(){var e=this;e.datePattern.forEach((function(t){"Y"===t?e.blocks.push(4):e.blocks.push(2)}))},getISOFormatDate:function(){var e=this,t=e.date;return t[2]?t[2]+"-"+e.addLeadingZero(t[1])+"-"+e.addLeadingZero(t[0]):""},getBlocks:function(){return this.blocks},getValidatedDate:function(e){var t=this,n="";return e=e.replace(/[^\d]/g,""),t.blocks.forEach((function(r,i){if(e.length>0){var a=e.slice(0,r),l=a.slice(0,1),o=e.slice(r);switch(t.datePattern[i]){case"d":"00"===a?a="01":parseInt(l,10)>3?a="0"+l:parseInt(a,10)>31&&(a="31");break;case"m":"00"===a?a="01":parseInt(l,10)>1?a="0"+l:parseInt(a,10)>12&&(a="12")}n+=a,e=o}})),this.getFixedDateString(n)},getFixedDateString:function(e){var t,n,r,i=this,a=i.datePattern,l=[],o=0,u=0,s=0,c=0,d=0,m=0,p=!1;return 4===e.length&&"y"!==a[0].toLowerCase()&&"y"!==a[1].toLowerCase()&&(d=2-(c="d"===a[0]?0:2),t=parseInt(e.slice(c,c+2),10),n=parseInt(e.slice(d,d+2),10),l=this.getFixedDate(t,n,0)),8===e.length&&(a.forEach((function(e,t){switch(e){case"d":o=t;break;case"m":u=t;break;default:s=t}})),m=2*s,c=o<=s?2*o:2*o+2,d=u<=s?2*u:2*u+2,t=parseInt(e.slice(c,c+2),10),n=parseInt(e.slice(d,d+2),10),r=parseInt(e.slice(m,m+4),10),p=4===e.slice(m,m+4).length,l=this.getFixedDate(t,n,r)),4!==e.length||"y"!==a[0]&&"y"!==a[1]||(m=2-(d="m"===a[0]?0:2),n=parseInt(e.slice(d,d+2),10),r=parseInt(e.slice(m,m+2),10),p=2===e.slice(m,m+2).length,l=[0,n,r]),6!==e.length||"Y"!==a[0]&&"Y"!==a[1]||(m=2-.5*(d="m"===a[0]?0:4),n=parseInt(e.slice(d,d+2),10),r=parseInt(e.slice(m,m+4),10),p=4===e.slice(m,m+4).length,l=[0,n,r]),l=i.getRangeFixedDate(l),i.date=l,0===l.length?e:a.reduce((function(e,t){switch(t){case"d":return e+(0===l[0]?"":i.addLeadingZero(l[0]));case"m":return e+(0===l[1]?"":i.addLeadingZero(l[1]));case"y":return e+(p?i.addLeadingZeroForYear(l[2],!1):"");case"Y":return e+(p?i.addLeadingZeroForYear(l[2],!0):"")}}),"")},getRangeFixedDate:function(e){var t=this,n=t.datePattern,r=t.dateMin||[],i=t.dateMax||[];return!e.length||r.length<3&&i.length<3||n.find((function(e){return"y"===e.toLowerCase()}))&&0===e[2]?e:i.length&&(i[2]<e[2]||i[2]===e[2]&&(i[1]<e[1]||i[1]===e[1]&&i[0]<e[0]))?i:r.length&&(r[2]>e[2]||r[2]===e[2]&&(r[1]>e[1]||r[1]===e[1]&&r[0]>e[0]))?r:e},getFixedDate:function(e,t,n){return e=Math.min(e,31),t=Math.min(t,12),n=parseInt(n||0,10),(t<7&&t%2==0||t>8&&t%2==1)&&(e=Math.min(e,2===t?this.isLeapYear(n)?29:28:30)),[e,t,n]},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},addLeadingZero:function(e){return(e<10?"0":"")+e},addLeadingZeroForYear:function(e,t){return t?(e<10?"000":e<100?"00":e<1e3?"0":"")+e:(e<10?"0":"")+e}};var a=i,l=function(e,t){var n=this;n.time=[],n.blocks=[],n.timePattern=e,n.timeFormat=t,n.initBlocks()};l.prototype={initBlocks:function(){var e=this;e.timePattern.forEach((function(){e.blocks.push(2)}))},getISOFormatTime:function(){var e=this,t=e.time;return t[2]?e.addLeadingZero(t[0])+":"+e.addLeadingZero(t[1])+":"+e.addLeadingZero(t[2]):""},getBlocks:function(){return this.blocks},getTimeFormatOptions:function(){return"12"===String(this.timeFormat)?{maxHourFirstDigit:1,maxHours:12,maxMinutesFirstDigit:5,maxMinutes:60}:{maxHourFirstDigit:2,maxHours:23,maxMinutesFirstDigit:5,maxMinutes:60}},getValidatedTime:function(e){var t=this,n="";e=e.replace(/[^\d]/g,"");var r=t.getTimeFormatOptions();return t.blocks.forEach((function(i,a){if(e.length>0){var l=e.slice(0,i),o=l.slice(0,1),u=e.slice(i);switch(t.timePattern[a]){case"h":parseInt(o,10)>r.maxHourFirstDigit?l="0"+o:parseInt(l,10)>r.maxHours&&(l=r.maxHours+"");break;case"m":case"s":parseInt(o,10)>r.maxMinutesFirstDigit?l="0"+o:parseInt(l,10)>r.maxMinutes&&(l=r.maxMinutes+"")}n+=l,e=u}})),this.getFixedTimeString(n)},getFixedTimeString:function(e){var t,n,r,i=this,a=i.timePattern,l=[],o=0,u=0,s=0,c=0,d=0,m=0;return 6===e.length&&(a.forEach((function(e,t){switch(e){case"s":o=2*t;break;case"m":u=2*t;break;case"h":s=2*t}})),m=s,d=u,c=o,t=parseInt(e.slice(c,c+2),10),n=parseInt(e.slice(d,d+2),10),r=parseInt(e.slice(m,m+2),10),l=this.getFixedTime(r,n,t)),4===e.length&&i.timePattern.indexOf("s")<0&&(a.forEach((function(e,t){switch(e){case"m":u=2*t;break;case"h":s=2*t}})),m=s,d=u,t=0,n=parseInt(e.slice(d,d+2),10),r=parseInt(e.slice(m,m+2),10),l=this.getFixedTime(r,n,t)),i.time=l,0===l.length?e:a.reduce((function(e,t){switch(t){case"s":return e+i.addLeadingZero(l[2]);case"m":return e+i.addLeadingZero(l[1]);case"h":return e+i.addLeadingZero(l[0])}}),"")},getFixedTime:function(e,t,n){return n=Math.min(parseInt(n||0,10),60),t=Math.min(t,60),[e=Math.min(e,60),t,n]},addLeadingZero:function(e){return(e<10?"0":"")+e}};var o=l,u=function(e,t){var n=this;n.delimiter=t||""===t?t:" ",n.delimiterRE=t?new RegExp("\\"+t,"g"):"",n.formatter=e};u.prototype={setFormatter:function(e){this.formatter=e},format:function(e){var t=this;t.formatter.clear();for(var n,r="",i=!1,a=0,l=(e=(e=(e=e.replace(/[^\d+]/g,"")).replace(/^\+/,"B").replace(/\+/g,"").replace("B","+")).replace(t.delimiterRE,"")).length;a<l;a++)n=t.formatter.inputDigit(e.charAt(a)),/[\s()-]/g.test(n)?(r=n,i=!0):i||(r=n);return(r=r.replace(/[()]/g,"")).replace(/[\s-]/g,t.delimiter)}};var s=u,c={blocks:{uatp:[4,5,6],amex:[4,6,5],diners:[4,6,4],discover:[4,4,4,4],mastercard:[4,4,4,4],dankort:[4,4,4,4],instapayment:[4,4,4,4],jcb15:[4,6,5],jcb:[4,4,4,4],maestro:[4,4,4,4],visa:[4,4,4,4],mir:[4,4,4,4],unionPay:[4,4,4,4],general:[4,4,4,4]},re:{uatp:/^(?!1800)1\d{0,14}/,amex:/^3[47]\d{0,13}/,discover:/^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,diners:/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,mastercard:/^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,dankort:/^(5019|4175|4571)\d{0,12}/,instapayment:/^63[7-9]\d{0,13}/,jcb15:/^(?:2131|1800)\d{0,11}/,jcb:/^(?:35\d{0,2})\d{0,12}/,maestro:/^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,mir:/^220[0-4]\d{0,12}/,visa:/^4\d{0,15}/,unionPay:/^(62|81)\d{0,14}/},getStrictBlocks:function(e){var t=e.reduce((function(e,t){return e+t}),0);return e.concat(19-t)},getInfo:function(e,t){var n=c.blocks,r=c.re;for(var i in t=!!t,r)if(r[i].test(e)){var a=n[i];return{type:i,blocks:t?this.getStrictBlocks(a):a}}return{type:"unknown",blocks:t?this.getStrictBlocks(n.general):n.general}}},d=c,m={noop:function(){},strip:function(e,t){return e.replace(t,"")},getPostDelimiter:function(e,t,n){if(0===n.length)return e.slice(-t.length)===t?t:"";var r="";return n.forEach((function(t){e.slice(-t.length)===t&&(r=t)})),r},getDelimiterREByDelimiter:function(e){return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"g")},getNextCursorPosition:function(e,t,n,r,i){return t.length===e?n.length:e+this.getPositionOffset(e,t,n,r,i)},getPositionOffset:function(e,t,n,r,i){var a,l,o;return a=this.stripDelimiters(t.slice(0,e),r,i),l=this.stripDelimiters(n.slice(0,e),r,i),0!=(o=a.length-l.length)?o/Math.abs(o):0},stripDelimiters:function(e,t,n){var r=this;if(0===n.length){var i=t?r.getDelimiterREByDelimiter(t):"";return e.replace(i,"")}return n.forEach((function(t){t.split("").forEach((function(t){e=e.replace(r.getDelimiterREByDelimiter(t),"")}))})),e},headStr:function(e,t){return e.slice(0,t)},getMaxLength:function(e){return e.reduce((function(e,t){return e+t}),0)},getPrefixStrippedValue:function(e,t,n,r,i,a,l,o,u){if(0===n)return e;if(e===t&&""!==e)return"";if(u&&"-"==e.slice(0,1)){var s="-"==r.slice(0,1)?r.slice(1):r;return"-"+this.getPrefixStrippedValue(e.slice(1),t,n,s,i,a,l,o,u)}if(r.slice(0,n)!==t&&!o)return l&&!r&&e?e:"";if(r.slice(-n)!==t&&o)return l&&!r&&e?e:"";var c=this.stripDelimiters(r,i,a);return e.slice(0,n)===t||o?e.slice(-n)!==t&&o?c.slice(0,-n-1):o?e.slice(0,-n):e.slice(n):c.slice(n)},getFirstDiffIndex:function(e,t){for(var n=0;e.charAt(n)===t.charAt(n);)if(""===e.charAt(n++))return-1;return n},getFormattedValue:function(e,t,n,r,i,a){var l="",o=i.length>0,u="";return 0===n?e:(t.forEach((function(t,s){if(e.length>0){var c=e.slice(0,t),d=e.slice(t);u=o?i[a?s-1:s]||u:r,a?(s>0&&(l+=u),l+=c):(l+=c,c.length===t&&s<n-1&&(l+=u)),e=d}})),l)},fixPrefixCursor:function(e,t,n,r){if(e){var i=e.value,a=n||r[0]||" ";if(e.setSelectionRange&&t&&!(t.length+a.length<=i.length)){var l=2*i.length;setTimeout((function(){e.setSelectionRange(l,l)}),1)}}},checkFullSelection:function(e){try{return(window.getSelection()||document.getSelection()||{}).toString().length===e.length}catch(e){}return!1},setSelection:function(e,t,n){if(e===this.getActiveElement(n)&&!(e&&e.value.length<=t))if(e.createTextRange){var r=e.createTextRange();r.move("character",t),r.select()}else try{e.setSelectionRange(t,t)}catch(e){console.warn("The input element type does not support selection")}},getActiveElement:function(e){var t=e.activeElement;return t&&t.shadowRoot?this.getActiveElement(t.shadowRoot):t},isAndroid:function(){return navigator&&/android/i.test(navigator.userAgent)},isAndroidBackspaceKeydown:function(e,t){return!!(this.isAndroid()&&e&&t)&&t===e.slice(0,-1)}},p={assign:function(t,n){return n=n||{},(t=t||{}).creditCard=!!n.creditCard,t.creditCardStrictMode=!!n.creditCardStrictMode,t.creditCardType="",t.onCreditCardTypeChanged=n.onCreditCardTypeChanged||function(){},t.phone=!!n.phone,t.phoneRegionCode=n.phoneRegionCode||"AU",t.phoneFormatter={},t.time=!!n.time,t.timePattern=n.timePattern||["h","m","s"],t.timeFormat=n.timeFormat||"24",t.timeFormatter={},t.date=!!n.date,t.datePattern=n.datePattern||["d","m","Y"],t.dateMin=n.dateMin||"",t.dateMax=n.dateMax||"",t.dateFormatter={},t.numeral=!!n.numeral,t.numeralIntegerScale=n.numeralIntegerScale>0?n.numeralIntegerScale:0,t.numeralDecimalScale=n.numeralDecimalScale>=0?n.numeralDecimalScale:2,t.numeralDecimalMark=n.numeralDecimalMark||".",t.numeralThousandsGroupStyle=n.numeralThousandsGroupStyle||"thousand",t.numeralPositiveOnly=!!n.numeralPositiveOnly,t.stripLeadingZeroes=!1!==n.stripLeadingZeroes,t.signBeforePrefix=!!n.signBeforePrefix,t.tailPrefix=!!n.tailPrefix,t.swapHiddenInput=!!n.swapHiddenInput,t.numericOnly=t.creditCard||t.date||!!n.numericOnly,t.uppercase=!!n.uppercase,t.lowercase=!!n.lowercase,t.prefix=t.creditCard||t.date?"":n.prefix||"",t.noImmediatePrefix=!!n.noImmediatePrefix,t.prefixLength=t.prefix.length,t.rawValueTrimPrefix=!!n.rawValueTrimPrefix,t.copyDelimiter=!!n.copyDelimiter,t.initValue=void 0!==n.initValue&&null!==n.initValue?n.initValue.toString():"",t.delimiter=n.delimiter||""===n.delimiter?n.delimiter:n.date?"/":n.time?":":n.numeral?",":(n.phone," "),t.delimiterLength=t.delimiter.length,t.delimiterLazyShow=!!n.delimiterLazyShow,t.delimiters=n.delimiters||[],t.blocks=n.blocks||[],t.blocksLength=t.blocks.length,t.root="object"==typeof e&&e?e:window,t.document=n.document||t.root.document,t.maxLength=0,t.backspace=!1,t.result="",t.onValueChanged=n.onValueChanged||function(){},t}},h=function(e,t){var n=this,r=!1;if("string"==typeof e?(n.element=document.querySelector(e),r=document.querySelectorAll(e).length>1):void 0!==e.length&&e.length>0?(n.element=e[0],r=e.length>1):n.element=e,!n.element)throw new Error("[cleave.js] Please check the element");if(r)try{console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.")}catch(e){}t.initValue=n.element.value,n.properties=h.DefaultProperties.assign({},t),n.init()};h.prototype={init:function(){var e=this,t=e.properties;t.numeral||t.phone||t.creditCard||t.time||t.date||0!==t.blocksLength||t.prefix?(t.maxLength=h.Util.getMaxLength(t.blocks),e.isAndroid=h.Util.isAndroid(),e.lastInputValue="",e.isBackward="",e.onChangeListener=e.onChange.bind(e),e.onKeyDownListener=e.onKeyDown.bind(e),e.onFocusListener=e.onFocus.bind(e),e.onCutListener=e.onCut.bind(e),e.onCopyListener=e.onCopy.bind(e),e.initSwapHiddenInput(),e.element.addEventListener("input",e.onChangeListener),e.element.addEventListener("keydown",e.onKeyDownListener),e.element.addEventListener("focus",e.onFocusListener),e.element.addEventListener("cut",e.onCutListener),e.element.addEventListener("copy",e.onCopyListener),e.initPhoneFormatter(),e.initDateFormatter(),e.initTimeFormatter(),e.initNumeralFormatter(),(t.initValue||t.prefix&&!t.noImmediatePrefix)&&e.onInput(t.initValue)):e.onInput(t.initValue)},initSwapHiddenInput:function(){var e=this;if(e.properties.swapHiddenInput){var t=e.element.cloneNode(!0);e.element.parentNode.insertBefore(t,e.element),e.elementSwapHidden=e.element,e.elementSwapHidden.type="hidden",e.element=t,e.element.id=""}},initNumeralFormatter:function(){var e=this.properties;e.numeral&&(e.numeralFormatter=new h.NumeralFormatter(e.numeralDecimalMark,e.numeralIntegerScale,e.numeralDecimalScale,e.numeralThousandsGroupStyle,e.numeralPositiveOnly,e.stripLeadingZeroes,e.prefix,e.signBeforePrefix,e.tailPrefix,e.delimiter))},initTimeFormatter:function(){var e=this.properties;e.time&&(e.timeFormatter=new h.TimeFormatter(e.timePattern,e.timeFormat),e.blocks=e.timeFormatter.getBlocks(),e.blocksLength=e.blocks.length,e.maxLength=h.Util.getMaxLength(e.blocks))},initDateFormatter:function(){var e=this.properties;e.date&&(e.dateFormatter=new h.DateFormatter(e.datePattern,e.dateMin,e.dateMax),e.blocks=e.dateFormatter.getBlocks(),e.blocksLength=e.blocks.length,e.maxLength=h.Util.getMaxLength(e.blocks))},initPhoneFormatter:function(){var e=this.properties;if(e.phone)try{e.phoneFormatter=new h.PhoneFormatter(new e.root.Cleave.AsYouTypeFormatter(e.phoneRegionCode),e.delimiter)}catch(e){throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")}},onKeyDown:function(e){var t=this,n=e.which||e.keyCode;t.lastInputValue=t.element.value,t.isBackward=8===n},onChange:function(e){var t=this,n=t.properties,r=h.Util;t.isBackward=t.isBackward||"deleteContentBackward"===e.inputType;var i=r.getPostDelimiter(t.lastInputValue,n.delimiter,n.delimiters);t.isBackward&&i?n.postDelimiterBackspace=i:n.postDelimiterBackspace=!1,this.onInput(this.element.value)},onFocus:function(){var e=this,t=e.properties;e.lastInputValue=e.element.value,t.prefix&&t.noImmediatePrefix&&!e.element.value&&this.onInput(t.prefix),h.Util.fixPrefixCursor(e.element,t.prefix,t.delimiter,t.delimiters)},onCut:function(e){h.Util.checkFullSelection(this.element.value)&&(this.copyClipboardData(e),this.onInput(""))},onCopy:function(e){h.Util.checkFullSelection(this.element.value)&&this.copyClipboardData(e)},copyClipboardData:function(e){var t,n=this.properties,r=h.Util,i=this.element.value;t=n.copyDelimiter?i:r.stripDelimiters(i,n.delimiter,n.delimiters);try{e.clipboardData?e.clipboardData.setData("Text",t):window.clipboardData.setData("Text",t),e.preventDefault()}catch(e){}},onInput:function(e){var t=this,n=t.properties,r=h.Util,i=r.getPostDelimiter(e,n.delimiter,n.delimiters);return n.numeral||!n.postDelimiterBackspace||i||(e=r.headStr(e,e.length-n.postDelimiterBackspace.length)),n.phone?(!n.prefix||n.noImmediatePrefix&&!e.length?n.result=n.phoneFormatter.format(e):n.result=n.prefix+n.phoneFormatter.format(e).slice(n.prefix.length),void t.updateValueState()):n.numeral?(n.prefix&&n.noImmediatePrefix&&0===e.length?n.result="":n.result=n.numeralFormatter.format(e),void t.updateValueState()):(n.date&&(e=n.dateFormatter.getValidatedDate(e)),n.time&&(e=n.timeFormatter.getValidatedTime(e)),e=r.stripDelimiters(e,n.delimiter,n.delimiters),e=r.getPrefixStrippedValue(e,n.prefix,n.prefixLength,n.result,n.delimiter,n.delimiters,n.noImmediatePrefix,n.tailPrefix,n.signBeforePrefix),e=n.numericOnly?r.strip(e,/[^\d]/g):e,e=n.uppercase?e.toUpperCase():e,e=n.lowercase?e.toLowerCase():e,n.prefix&&(n.tailPrefix?e+=n.prefix:e=n.prefix+e,0===n.blocksLength)?(n.result=e,void t.updateValueState()):(n.creditCard&&t.updateCreditCardPropsByValue(e),e=r.headStr(e,n.maxLength),n.result=r.getFormattedValue(e,n.blocks,n.blocksLength,n.delimiter,n.delimiters,n.delimiterLazyShow),void t.updateValueState()))},updateCreditCardPropsByValue:function(e){var t,n=this.properties,r=h.Util;r.headStr(n.result,4)!==r.headStr(e,4)&&(t=h.CreditCardDetector.getInfo(e,n.creditCardStrictMode),n.blocks=t.blocks,n.blocksLength=n.blocks.length,n.maxLength=r.getMaxLength(n.blocks),n.creditCardType!==t.type&&(n.creditCardType=t.type,n.onCreditCardTypeChanged.call(this,n.creditCardType)))},updateValueState:function(){var e=this,t=h.Util,n=e.properties;if(e.element){var r=e.element.selectionEnd,i=e.element.value,a=n.result;r=t.getNextCursorPosition(r,i,a,n.delimiter,n.delimiters),e.isAndroid?window.setTimeout((function(){e.element.value=a,t.setSelection(e.element,r,n.document,!1),e.callOnValueChanged()}),1):(e.element.value=a,n.swapHiddenInput&&(e.elementSwapHidden.value=e.getRawValue()),t.setSelection(e.element,r,n.document,!1),e.callOnValueChanged())}},callOnValueChanged:function(){var e=this,t=e.properties;t.onValueChanged.call(e,{target:{name:e.element.name,value:t.result,rawValue:e.getRawValue()}})},setPhoneRegionCode:function(e){var t=this;t.properties.phoneRegionCode=e,t.initPhoneFormatter(),t.onChange()},setRawValue:function(e){var t=this,n=t.properties;e=null!=e?e.toString():"",n.numeral&&(e=e.replace(".",n.numeralDecimalMark)),n.postDelimiterBackspace=!1,t.element.value=e,t.onInput(e)},getRawValue:function(){var e=this.properties,t=h.Util,n=this.element.value;return e.rawValueTrimPrefix&&(n=t.getPrefixStrippedValue(n,e.prefix,e.prefixLength,e.result,e.delimiter,e.delimiters,e.noImmediatePrefix,e.tailPrefix,e.signBeforePrefix)),e.numeral?e.numeralFormatter.getRawValue(n):t.stripDelimiters(n,e.delimiter,e.delimiters)},getISOFormatDate:function(){var e=this.properties;return e.date?e.dateFormatter.getISOFormatDate():""},getISOFormatTime:function(){var e=this.properties;return e.time?e.timeFormatter.getISOFormatTime():""},getFormattedValue:function(){return this.element.value},destroy:function(){var e=this;e.element.removeEventListener("input",e.onChangeListener),e.element.removeEventListener("keydown",e.onKeyDownListener),e.element.removeEventListener("focus",e.onFocusListener),e.element.removeEventListener("cut",e.onCutListener),e.element.removeEventListener("copy",e.onCopyListener)},toString:function(){return"[Cleave Object]"}},h.NumeralFormatter=r,h.DateFormatter=a,h.TimeFormatter=o,h.PhoneFormatter=s,h.CreditCardDetector=d,h.Util=m,h.DefaultProperties=p,("object"==typeof e&&e?e:window).Cleave=h;const f=h;n(91),window.onload=()=>{console.log(document.getElementsByClassName("test")[0]),new f(".my-input",{date:!0,dateMin:"2000-01-01",dateMax:"2099-12-31",datePattern:["d","m","Y"]}),new f(".input-01",{prefix:"STUDENT-"}),new f(".test",{blocks:[2,2,2,3,2],delimiters:[".",".","-","."]}),new f(".age",{numeral:!0,numeralPositiveOnly:!0}),new f(".phone",{blocks:[3,3,2,2,2],delimiters:[" "," "," "," "],prefix:"+32"})}})()})();