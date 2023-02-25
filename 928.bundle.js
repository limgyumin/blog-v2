(self.webpackChunkblog_v2=self.webpackChunkblog_v2||[]).push([[928],{1285:(t,e,n)=>{var r={"./2022-retrospection.md":1781,"./compound-component.md":3546,"./new-blog.md":8246,"./ts-infer.md":3455,"./ts-interface.md":9152,"./ts-type-guard.md":3301};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=1285},4153:(t,e,n)=>{"use strict";n.d(e,{Z:()=>x});var r,i,o,a,s,c,u=n(168),l=n(7294),f=n(9163),d=n(6974),h=n(4574),p=f.default.div(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"]))),m=f.default.p(i||(i=(0,u.Z)(["\n  margin-right: 0.75rem;\n  padding: 0.35rem 0.7rem;\n  font-weight: 500;\n  font-size: 0.6rem;\n  border-radius: 6px;\n  letter-spacing: 1.4px;\n  background-color: ",";\n  color: ",";\n"])),(function(t){return t.theme.colors.bgBlack}),(function(t){return t.theme.colors.ftWhite})),v=f.default.p(o||(o=(0,u.Z)(["\n  font-size: 0.85rem;\n  font-weight: 400;\n  color: ",";\n"])),(function(t){return t.theme.colors.ftBlack})),g=f.default.h2(a||(a=(0,u.Z)(["\n  font-size: 1.625rem;\n  font-weight: 600;\n  margin-top: 0.7rem;\n  color: ",";\n\n  "," {\n    font-size: 1.375rem;\n  }\n"])),(function(t){return t.theme.colors.ftBlack}),(function(t){return t.theme.medias.tablet})),Z=f.default.p(s||(s=(0,u.Z)(["\n  margin-top: 0.5rem;\n  font-size: 1rem;\n  font-weight: 400;\n  color: ",";\n"])),(function(t){return t.theme.colors.ftBlack})),y=f.default.li(c||(c=(0,u.Z)(["\n  padding: 1.4rem 1.2rem;\n  background-color: ",";\n  border-radius: 8px;\n  transition: background-color ease 0.3s, color ease 0.3s, box-shadow ease 0.3s,\n    transform ease 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.01, 1.01);\n    background-color: ",";\n    box-shadow: 0px 8px 16px 0px ",";\n\n    ",", ",", "," {\n      color: ",";\n    }\n\n    "," {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),(function(t){return t.theme.colors.bgGray}),(function(t){return t.theme.colors.bgBlack}),(function(t){return t.theme.colors.boxShadow}),g,Z,v,(function(t){return t.theme.colors.ftWhite}),m,(function(t){return t.theme.colors.bgWhite}),(function(t){return t.theme.colors.ftBlack}));const b=function(t){var e=t.post,n=(0,d.s0)(),r=e.id,i=e.title,o=e.description,a=e.category,s=e.createdAt,c=new h.Z(s).format();return l.createElement(y,{onClick:function(){return n("/post/".concat(r))}},l.createElement(p,null,a&&l.createElement(m,{"data-testid":"post-category"},a.toUpperCase()),l.createElement(v,{"data-testid":"post-date"},c)),l.createElement(g,{"data-testid":"post-title"},i),o&&l.createElement(Z,{"data-testid":"post-description"},o))};var k,w=f.default.ul(k||(k=(0,u.Z)(["\n  padding-bottom: 3rem;\n\n  & > * + * {\n    margin-top: 1.5rem;\n  }\n\n  "," {\n    padding-bottom: 2rem;\n\n    & > * + * {\n      margin-top: 1rem;\n    }\n  }\n"])),(function(t){return t.theme.medias.tablet}));const x=function(t){var e=t.posts;return l.createElement(w,{"data-testid":"post-list"},e.map((function(t){return l.createElement(b,{key:t.id,post:t})})))}},4395:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r,i,o=n(168),a=n(7294),s=n(9163),c=s.default.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n"]))),u=s.default.main(i||(i=(0,o.Z)(["\n  max-width: ",";\n  width: inherit;\n  padding: 8rem 1rem 4rem;\n\n  "," {\n    padding: 6rem 1rem 4rem;\n  }\n"])),(function(t){return t.$width}),(function(t){return t.theme.medias.tablet}));const l=function(t){var e=t.as,n=void 0===e?"main":e,r=t.width,i=void 0===r?"700px":r,o=t.children;return a.createElement(c,null,a.createElement(u,{as:n,$width:i},o))}},699:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(5861),i=n(5671),o=n(3144),a=n(7757),s=n.n(a);const c=function(){function t(){(0,i.Z)(this,t)}return(0,o.Z)(t,[{key:"extract",value:function(t){return t.replace(/^\.\/([a-zA-Z_/]+\/)?|\.[a-z]+$/gm,"")}}]),t}(),u=new(function(){function t(e){(0,i.Z)(this,t),this.context=e}var e,n,a;return(0,o.Z)(t,[{key:"getData",value:(a=(0,r.Z)(s().mark((function t(e){var n,r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.context(e),r=(new c).extract(e),t.next=4,fetch(n).then((function(t){return t.text()}));case 4:return i=t.sent,t.abrupt("return",{fileName:r,data:i});case 6:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"import",value:(n=(0,r.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new c,r=this.context.keys().find((function(t){return n.extract(t)===e}))){t.next=4;break}throw new Error("File ".concat(e," not found."));case 4:return t.abrupt("return",this.getData(r));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"importAll",value:(e=(0,r.Z)(s().mark((function t(){var e,n=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.context.keys().map((function(t){return n.getData(t)})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}())(n(1285))},7184:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(5861),i=n(5671),o=n(3144),a=n(4942),s=n(7757),c=n.n(s),u=n(699),l=n(4666);const f=new(n(7694).C)({id:[l.U],title:[l.U],description:[],category:[],createdAt:[l.U]});var d=n(9040);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(){function t(){(0,i.Z)(this,t)}var e;return(0,o.Z)(t,[{key:"load",value:(e=(0,r.Z)(c().mark((function e(){var n,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.list){e.next=2;break}return e.abrupt("return",t.list);case 2:return e.next=4,u.Z.importAll();case 4:return n=e.sent,r=new d.Z,i=n.map((function(t){var e=t.fileName,n=t.data,i=r.transform(n);return f.validate(p({id:e},i))})),t.list=i,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}]),t}();(0,a.Z)(m,"list",null);const v=m},9040:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(885),i=n(2982),o=n(5671),a=n(3144);const s=function(){function t(){(0,o.Z)(this,t)}return(0,a.Z)(t,[{key:"extract",value:function(t){var e=t.match(/(\x2D\x2D\x2D\n)([\s\S]*?)(\n\x2D\x2D\x2D)/m);if(!e)throw new Error("".concat(t," has no matching result."));return(0,r.Z)(e,3)[2]}}]),t}();var c={title:"",description:"",category:"",createdAt:""};const u=function(){function t(){(0,o.Z)(this,t)}return(0,a.Z)(t,[{key:"transform",value:function(t){var e=(new s).extract(t);return(0,i.Z)(e.matchAll(/(\w+):\s?(.+)/gm)).reduce((function(t,e){var n=(0,r.Z)(e,3),i=n[1],o=n[2];return Object.prototype.hasOwnProperty.call(c,i)&&null!=o&&(t[i]=o),t}),c)}}]),t}()},7694:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r,C:()=>a});var r,i=n(5671),o=n(3144);!function(t){t.Success="success",t.Failure="failure"}(r||(r={}));const a=function(){function t(e){(0,i.Z)(this,t),this.validations=e}return(0,o.Z)(t,[{key:"validate",value:function(t){var e=this;return Object.keys(this.validations).forEach((function(n){e.validations[n].forEach((function(e){var i=e(t[n]);if(i.state===r.Failure)throw new Error(i.reason)}))})),t}}]),t}()},4666:(t,e,n)=>{"use strict";n.d(e,{U:()=>i});var r=n(7694),i=function(t){return""!==t.replace(/\s/gm,"")?{state:r.Z.Success}:{state:r.Z.Failure,reason:"Value is empty."}}},8510:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(5671),i=n(3144);const o=function(){function t(e){(0,r.Z)(this,t),this.id=e.id,this.title=e.title,this.description=e.description,this.category=e.category,this.createdAt=e.createdAt}return(0,i.Z)(t,null,[{key:"makeInstance",value:function(e){return new t(e)}}]),t}()},4574:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(5671),i=n(3144),o=n(7484),a=n.n(o),s=n(6176),c=n.n(s);n(9132),a().extend(c());const u=function(){function t(e){(0,r.Z)(this,t),this.date=e}return(0,i.Z)(t,[{key:"format",value:function(){return a()(this.date).locale("ko").format("LL")}}]),t}()},8543:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var r=n(885),i=n(2982),o=n(5671),a=n(3144),s=n(4942),c=function(){function t(e){(0,o.Z)(this,t),(0,s.Z)(this,"paginated",[]),this.list=e,this.paginated=(0,i.Z)(e)}return(0,a.Z)(t,[{key:"skip",value:function(t){var e=this.paginated.slice(t);return this.paginated=e,this}},{key:"take",value:function(t){return{list:this.paginated.slice(0,t),total:this.list.length}}}]),t}();const u=c;var l=function(){function t(e){(0,o.Z)(this,t),this.list=e}return(0,a.Z)(t,[{key:"orderBy",value:function(t,e){return(0,i.Z)(this.list).sort((function(n,r){if("ASC"===e){if(n[t]>r[t])return 1;if(n[t]<r[t])return-1}if("DESC"===e){if(n[t]>r[t])return-1;if(n[t]<r[t])return 1}return 0}))}}]),t}();const f=l;var d=function(){function t(e){(0,o.Z)(this,t),(0,s.Z)(this,"total",0),(0,s.Z)(this,"_list",[]),this._list=(0,i.Z)(e)}return(0,a.Z)(t,[{key:"where",value:function(t,e){var n=this._list.filter((function(n){return e(n[t])}));return this._list=n,this}},{key:"orderBy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC",n=new f(this._list).orderBy(t,e);return this._list=n,this}},{key:"paginate",value:function(t,e){var n=new u(this._list).skip(t).take(e),r=n.list,i=n.total;return this._list=r,this.total=i,this}},{key:"getOne",value:function(){return(0,r.Z)(this._list,1)[0]}},{key:"getMany",value:function(){var t=this.total||this._list.length;return{list:this._list,total:t}}}]),t}();const h=d},1781:(t,e,n)=>{"use strict";t.exports=n.p+"static/053c59020f457454859b.md"},3546:(t,e,n)=>{"use strict";t.exports=n.p+"static/8872d673440beca94c58.md"},8246:(t,e,n)=>{"use strict";t.exports=n.p+"static/a274de29aed64464d86f.md"},3455:(t,e,n)=>{"use strict";t.exports=n.p+"static/f6819fc5bda540713eb4.md"},9152:(t,e,n)=>{"use strict";t.exports=n.p+"static/924833d5877cdcd44bd6.md"},3301:(t,e,n)=>{"use strict";t.exports=n.p+"static/142058fc4d555c07d479.md"}}]);