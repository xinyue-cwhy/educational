(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-194f0bad"],{"218c":function(t,n,o){"use strict";o("77ab")},5850:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t._t("default")],2)},s=[],a={name:"lf_first"},c=a,i=o("2877"),u=Object(i["a"])(c,e,s,!1,null,"cf125412",null);n["a"]=u.exports},"77ab":function(t,n,o){},b0c0:function(t,n,o){var e=o("83ab"),s=o("9bf2").f,a=Function.prototype,c=a.toString,i=/^\s*function ([^ (]*)/,u="name";e&&!(u in a)&&s(a,u,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},d9ab:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("lf_first",[0!=this.res.length?o("label",{attrs:{id:"sub"}},[t._v("根据您的id，查询到您所受课程为 "),o("span",[t._v(t._s(this.res[this.name].sub1))]),t._v("和 "),o("span",[t._v(t._s(this.res[this.name].sub2))])]):t._e(),0!=this.res.length?o("select",{attrs:{id:"specialty"},on:{change:function(n){return t.indexSelect(n)}}},[o("option",{attrs:{disabled:"disabled",selected:"selected"}},[t._v("-请选择课程-")]),o("option",{domProps:{value:this.res[this.name].sub1}},[t._v(t._s(this.res[this.name].sub1))]),o("option",{domProps:{value:this.res[this.name].sub2}},[t._v(t._s(this.res[this.name].sub2))])]):t._e(),o("div",{staticClass:"content"},t._l(t.account,(function(n,e){return o("ul",[o("li",[t._v("书籍名称："),o("span",[t._v(t._s(n.bookname))])]),o("li",[t._v("描述信息："),o("span",[t._v(t._s(n.account))])]),o("li",[t._v("售价："),o("span",[t._v(t._s(n.price)+"￥")])]),o("li",[o("button",{staticClass:"book",on:{click:function(n){return t.bookin(e)}}},[t._v("选择")])])])})),0)])],1)},s=[],a=(o("b0c0"),o("5850")),c=o("bc3a"),i=o.n(c),u={name:"kcgl",components:{lf_first:a["a"]},data:function(){return{id:this.$route.query.s_id,res:[],name:null,books:[],book:[],account:[],bookbtn:[]}},mounted:function(){var t=this;i.a.post("api/user/selectT").then((function(n){for(var o in t.res=n.data,t.res)t.id==t.res[o].name&&(t.name=o)})).catch((function(t){console.log(t)}))},methods:{indexSelect:function(t){var n=this;this.book=[],this.account=[],i.a.post("api/user/books").then((function(o){for(var e in n.books=o.data,n.books)t.target.value==n.books[e].subname&&n.book.push(e);for(var s in n.book)n.account.push(n.books[n.book[s]])})).then((function(t){console.log(t)}))},bookin:function(t){console.log(this.account[t]);var n=this.account[t].subname,o=this.account[t].bookname,e=this.account[t].account,s=this.account[t].price,a=this.account[t].major;i.a.post("api/user/selecinbook",{subname:n}).then((function(c){if(0!=c.data.length)alert("您已经选过该课程所用书籍");else{var u=document.getElementsByClassName("book");u[t].innerHTML="已选择";for(var r=0;r<u.length;r++)u[r].disabled=!0;i.a.post("api/user/addbooks",{subname:n,bookname:o,account:e,price:s,major:a}).then((function(t){alert("您已经成功选择该课程所用书籍")})).catch((function(t){console.log(t)}))}})).catch((function(t){console.log(t)}))}}},r=u,l=(o("218c"),o("2877")),b=Object(l["a"])(r,e,s,!1,null,"6fde144b",null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-194f0bad.5b1d4f11.js.map