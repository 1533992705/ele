(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fc2dc69"],{"0fa5":function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"shop"},[s.isShow3?i("div",{staticClass:"yinying"}):s._e(),s.isShow5?s._e():i("nav",[s._m(0)]),i("section",{staticClass:"s1"},[i("router-link",{attrs:{to:"/shopDetail"}},[i("div",{staticClass:"s11"},[i("img",{staticClass:"s11img",attrs:{src:"https://elm.cangdu.org/img/"+s.shop.image_path}}),i("div",[i("h4",[s._v(s._s(s.shop.name))]),i("p",[s._v("商家配送 / 分钟送达 / 配送费￥"+s._s(s.shop.float_delivery_fee))]),i("p",[s._v("公告："+s._s(s.shop.promotion_info))])]),i("i",{staticClass:"el-icon-arrow-right"})])]),s.isShow?i("router-link",{attrs:{to:""}},[i("div",{staticClass:"s12",on:{click:function(t){s.isShow5=!s.isShow5}}},[i("p",[i("span",[s._v(s._s(s.shop.activities[0]?s.shop.activities[0].icon_name:""))]),i("span",[s._v(s._s(s.shop.activities[0]?s.shop.activities[0].description:"")+"（APP专享）")])]),i("p",[i("span",[s._v(s._s(s.shop.activities[0]?s.shop.activities.length:"")+"个活动")]),i("i",{staticClass:"el-icon-arrow-right"})])])]):s._e(),s.isShow5?i("div",{staticClass:"zzz"},[i("h2",[s._v(s._s(s.shop.name))]),i("div",{staticClass:"zzz1"},[s._v("优惠信息")]),i("ul",s._l(s.shop.activities,(function(t){return i("li",[i("p",[i("span",[s._v(s._s(t.icon_name))]),s._v(s._s(t.description)+"(APP专享)")])])})),0),i("div",{staticClass:"zzz1"},[s._v("商家公告")]),i("p",[s._v(s._s(s.shop.promotion_info))]),i("i",{staticClass:"el-icon-circle-close",on:{click:function(t){s.isShow5=!s.isShow5}}})]):s._e()],1),i("section",{staticClass:"s2"},[s.isShow2?i("div",{staticClass:"s21"},[i("span",[s._v("商品")])]):s._e(),s.isShow2?s._e():i("div",{on:{click:function(t){s.isShow2=!0}}},[i("span",[s._v("商品")])]),s.isShow2?i("div",{on:{click:function(t){s.isShow2=!1}}},[i("span",[s._v("评价")])]):s._e(),s.isShow2?s._e():i("div",{staticClass:"s21"},[i("span",[s._v("评价")])])]),s.isShow2?i("section",{staticClass:"commodity"},[i("div",{staticClass:"left"},[i("ul",s._l(s.category_list,(function(t,e){return i("li",{class:{listyle:s.changeLeftstyle==e},on:{click:function(t){return s.listyle(e)}}},[s._v(s._s(t.name)+" "),s.getNum(t)>0?i("span",{staticClass:"Number"},[s._v(s._s(s.getNum(t)))]):s._e()])})),0)]),i("div",{staticClass:"right"},[i("ul",{staticClass:"right_ul"},s._l(s.category_list2,(function(t,e){return i("li",{staticClass:"right_ul_li"},[i("div",[i("p",{staticClass:"ellipsis"},[i("span",[s._v(s._s(t.name))]),i("span",[s._v(s._s(t.description))])]),i("span",[s._v("...")])]),i("ul",s._l(t.foods,(function(t,o){return i("li",[i("div",{on:{click:function(i){return s.toFoodDetail(t)}}},[t.attributes[0]?i("div",{staticClass:"news"},[i("p",[s._v("新品")])]):s._e(),i("img",{staticClass:"rimg",attrs:{src:"https://elm.cangdu.org/img/"+t.image_path}}),i("h3",[s._v(s._s(t.name)),t.attributes[0]?i("span",[s._v("招牌")]):s._e()]),i("p",{staticClass:"fp1"},[s._v(s._s(t.description?t.description:""))]),i("p",{staticClass:"fp2"},[i("span",[s._v("月售"+s._s(t.month_sales)+"份")]),i("span",[s._v("好评率"+s._s(t.satisfy_rate)+"%")])]),t.attributes[0]?i("p",{staticClass:"fp3"},[s._v(s._s(t.name))]):s._e()]),i("div",{staticClass:"ff"},[i("div",{staticClass:"z1"},[i("span",[s._v("￥")]),i("span",[s._v(s._s(t.specfoods[0].price))])]),t.specifications[0]?i("div",{staticClass:"z2"},[s.getCount(t)>0?i("i",{staticClass:"el-icon-remove-outline z31",staticStyle:{color:"#999"}}):s._e(),s.getCount(t)>0?i("span",{staticClass:"z22"},[s._v(s._s(s.getCount(t)))]):s._e(),i("span",{staticClass:"z21",on:{click:function(t){return s.guige(e,o)}}},[s._v("选规格")]),s.isShow4==e+""+o?i("div",{staticClass:"Specifications"},[i("div",{staticClass:"SS1"},[i("h4",[s._v(s._s(t.name))]),i("i",{staticClass:"el-icon-close",on:{click:function(t){s.isShow4=-1,s.isShow3=!1}}})]),i("div",{staticClass:"SS2"},[i("h5",[s._v(s._s(t.specifications[0].name))]),i("ul",s._l(t.specifications[0].values,(function(t,e){return i("li",{staticClass:"ellipsis",class:{liS:s.changeLeft==e},on:{click:function(t){return s.changeLiX(e)}}},[s._v(" "+s._s(t)+" ")])})),0)]),i("div",{staticClass:"SS3"},[i("div",[i("span",[s._v("￥")]),i("span",[s._v(s._s(t.specfoods[s.changeLeft].price))])]),i("div",{on:{click:function(i){return s.addShops(t.specfoods[s.changeLeft])}}},[s._v("加入购物车")])])]):s._e()]):s._e(),t.specifications[0]?s._e():i("div",{staticClass:"z3"},[s.getCount(t.specfoods[0])>0?i("i",{staticClass:"el-icon-remove-outline z31",on:{click:function(i){return s.delShops(t.specfoods[0])}}}):s._e(),s.getCount(t.specfoods[0])>0?i("span",[s._v(s._s(s.getCount(t.specfoods[0])))]):s._e(),i("i",{staticClass:"el-icon-circle-plus z32",on:{click:function(i){return s.addShops(t.specfoods[0])}}})])])])})),0)])})),0)]),s.isShow6?i("div",{staticClass:"bottomC"},[i("div",{staticClass:"botA",on:{click:function(t){s.isShow6=!s.isShow6}}}),i("div",{staticClass:"botB"},[i("div",{staticClass:"botB1"},[i("h4",[s._v("购物车")]),i("div",[i("span",{on:{click:s.clearShops}},[i("i",{staticClass:"el-icon-delete"}),s._v("清空")])])]),i("ul",s._l(this.shops,(function(t){return i("li",[i("div",{staticClass:"botB_li1"},[i("p",[s._v(s._s(t.name))]),i("p",[s._v(s._s(""!=t.specs?t.specs:""))])]),i("div",{staticClass:"botB_li2"},[i("span",[s._v("￥")]),i("span",[s._v(s._s(t.price))])]),i("div",{staticClass:"botB_li3"},[i("i",{staticClass:"el-icon-remove-outline",on:{click:function(i){return s.delShops(t)}}}),i("span",[s._v(s._s(t.quantity))]),i("i",{staticClass:"el-icon-circle-plus",on:{click:function(i){return s.addShops(t)}}})])])})),0)])]):s._e(),s.isShowX?s._e():i("div",{staticClass:"bottomZ"}),s.isShow5?s._e():i("div",{staticClass:"bottom"},[i("div",{on:{click:function(t){s.isShow6=!s.isShow6}}},[i("div",{staticClass:"bo1",style:{background:s.isShowX?"#3190e8":"#333"}},[i("i",{staticClass:"el-icon-shopping-cart-2"}),s.isShowX?i("span",{staticClass:"BS"},[s._v(s._s(s.counts))]):s._e()]),i("div",{staticClass:"bo2"},[i("div",[s._v("￥"+s._s(s.money)+".00")]),i("div",[s._v("配送费￥"+s._s(s.shop.float_delivery_fee))])])]),i("div",{staticClass:"bo3",style:{background:s.isShowY?"#4cd964":"#333"}},[s.isShowY?s._e():i("span",[s._v("还差￥"+s._s(s.cost)+"起送")]),s.isShowY?i("span",{staticStyle:{color:"white","font-size":".7rem","font-weight":"700"},on:{click:s.confirmOrder}},[s._v("去结算")]):s._e()])])]):s._e(),s.isShow2?s._e():i("section",{staticClass:"evaluate"},[i("div",{staticClass:"e1"},[i("div",[i("p",[s._v(s._s(s.shop.rating))]),i("p",[s._v("综合评价")]),i("p",[s._v("高于周边商家76.9%")])]),i("div",[i("p",[i("span",[s._v("服务态度")]),i("el-rate",{staticClass:"e1R",attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:4.7,callback:function(t){s.$set(4,"7",t)},expression:"4.7"}})],1),i("p",[i("span",[s._v("菜品评价")]),i("el-rate",{staticClass:"e1R",attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:4.8,callback:function(t){s.$set(4,"8",t)},expression:"4.8"}})],1),s._m(1)])]),i("ul",{staticClass:"e2"},s._l(s.ratings,(function(t,e){return i("li",{class:{e2_li_style:s.e2_li_i==e},on:{click:function(t){return s.e2style(e)}}},[s._v(" "+s._s(t.name)+"("+s._s(t.count)+") ")])})),0),i("ul",{staticClass:"e3"},s._l(s.ratingu,(function(t){return i("li",[i("img",{attrs:{src:"https://elm.cangdu.org/img/default.jpg"}}),i("div",[i("div",{staticClass:"h"},[i("div",[i("p",[s._v(s._s(t.username))]),i("p",[i("el-rate",{staticClass:"e1R",attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.rating_star,callback:function(i){s.$set(t,"rating_star",i)},expression:"u.rating_star"}}),i("span",[s._v(s._s(t.time_spent_desc))])],1)]),i("p",[s._v(s._s(t.rated_at))])]),i("ul",s._l(t.item_ratings,(function(s){return i("li",[i("img",{staticClass:"ratingImg",attrs:{src:"https://fuss10.elemecdn.com/"+s.image_hash}})])})),0),i("ul",{staticClass:"food_name"},s._l(t.item_ratings,(function(t){return i("li",{staticClass:"ellipsis"},[s._v(" "+s._s(t.food_name)+" ")])})),0)])])})),0)])])},o=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("a",{attrs:{href:"javascript:history.back(-1)"}},[i("i",{staticClass:"el-icon-arrow-left i1"})])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",[i("span",[s._v("送达时间")]),i("span",[s._v("分钟")])])}],a=(i("a434"),i("b0c0"),{name:"Shop",data:function(){return{shop:[],isShow:!1,isShow2:!0,category_list:[],category_list2:[],changeLeftstyle:0,ratings:[],e2_li_i:0,ratingu:[],shop1:[],shop2:[],isShow3:!1,isShow4:-1,changeLeft:0,isShow5:!1,isShow6:!1,shops:[],money:"",counts:"",isShowX:!1,isShowY:!1,cost:"",geohash:"",entities:[],isShow7:!1}},created:function(){var s=this;this.shop=JSON.parse(localStorage.getItem("shop")),this.geohash=JSON.parse(localStorage.getItem("position"))[0].geohash,this.cost=this.shop.float_minimum_order_amount,this.shop.activities[0]?this.isShow=!0:this.isShow=!1,this.getShops,this.axios.get("/shopping/getcategory/"+this.shop.id).then((function(t){s.category_list=t.category_list,s.category_list2=t.category_list})).catch((function(s){})),this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+this.shop.id+"/ratings/tags").then((function(t){s.ratings=t})).catch((function(s){})),this.axios.get("https://elm.cangdu.org/ugc/v2/restaurants/"+this.shop.id+"/ratings?offset=0&limit=10").then((function(t){s.ratingu=t})).catch((function(s){}))},methods:{listyle:function(s){this.changeLeftstyle=s;var t=".right>ul>li:nth-child("+(s+1)+")";this.$el.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})},e2style:function(s){this.e2_li_i=s},guige:function(s,t){this.isShow4=s+""+t,this.isShow3=!0},changeLiX:function(s){this.changeLeft=s},addShops:function(s){var t;if(s.id&&(s.food_id=s.id),1==s.specs.length&&(s.specs=s.specs[0].value),null==localStorage.getItem("shops"))t=[],t.push({restaurant_id:s.restaurant_id,item_id:s.item_id,id:s.food_id,name:s.name,packing_fee:s.packing_fee,quantity:1,sku_id:s.sku_id,price:s.price,specs:s.specs,stock:s.stock}),this.shops=t,localStorage.setItem("shops",JSON.stringify(t));else{t=JSON.parse(localStorage.getItem("shops"));for(var i=!0,e=0;e<t.length;e++)t[e].id==s.food_id&&(t[e].quantity+=1,i=!1);i&&t.push({restaurant_id:s.restaurant_id,item_id:s.item_id,id:s.food_id,name:s.name,packing_fee:s.packing_fee,quantity:1,sku_id:s.sku_id,price:s.price,specs:s.specs,stock:s.stock}),localStorage.setItem("shops",JSON.stringify(t)),this.shops=[];for(var o=0;o<t.length;o++)this.shop.id==t[o].restaurant_id&&this.shops.push(t[o])}this.counts+=1,this.money+=s.price,this.isShowzzz,this.isShow3=!1,this.isShow4=-1,this.changeLeft=0},delShops:function(s){s.id&&(s.food_id=s.id);for(var t=JSON.parse(localStorage.getItem("shops")),i=0;i<this.shops.length;i++)this.shops[i].id==s.food_id&&(this.shops[i].quantity>1?this.shops[i].quantity-=1:this.shops.splice(i,1),this.counts-=1,this.money-=s.price);for(var e=0;e<t.length;e++)t[e].id==s.food_id&&(t[e].quantity>1?t[e].quantity-=1:t.splice(e,1));""==this.shops&&(this.isShow6=!1),localStorage.setItem("shops",JSON.stringify(t)),this.isShowzzz},clearShops:function(){var s=JSON.parse(localStorage.getItem("shops"));if(localStorage.getItem("shops"))for(var t=0;t<s.length;t++)this.shop.id==s[t].restaurant_id&&(s.splice(t,1),t--);localStorage.setItem("shops",JSON.stringify(s)),this.counts=0,this.money=0,this.isShow6=!1,this.shops=[],this.isShowzzz},getCount:function(s){for(var t=0,i=0;i<this.shops.length;i++)this.shops[i].name==s.name&&(t+=this.shops[i].quantity);return t},getNum:function(s){for(var t=0,i=0;i<this.shops.length;i++)for(var e=0;e<s.foods.length;e++)this.shops[i].item_id==s.foods[e].item_id&&(t+=this.shops[i].quantity);return t},confirmOrder:function(){var s=this;this.entities=[];for(var t=[],i=0;i<this.shops.length;i++)t.push({attrs:[],extra:{},id:this.shops[i].id,name:this.shops[i].name,packing_fee:this.shops[i].packing_fee,price:this.shops[i].price,quantity:this.shops[i].quantity,sku_id:this.shops[i].sku_id,specs:this.shops[i].specs,stock:this.shops[i].stock});this.entities.push(t),console.log(this.shop.id,this.geohash,this.entities),this.axios.post("/v1/carts/checkout",{restaurant_id:this.shop.id,geohash:this.geohash,entities:this.entities}).then((function(t){console.log(t),s.$router.push({path:"/confirmOrder",query:{cart_id:t.id}})})).catch((function(s){console.log(s)}))},toFoodDetail:function(s){this.$router.push("/foodDetail"),localStorage.setItem("foodDetail",JSON.stringify(s))}},computed:{getShops:function(){this.shops=[],this.money=0,this.counts=0;var s=JSON.parse(localStorage.getItem("shops"));if(localStorage.getItem("shops"))for(var t=0;t<s.length;t++)this.shop.id==s[t].restaurant_id&&(this.shops.push(s[t]),this.counts=this.counts+s[t].quantity,this.money=this.money+s[t].quantity*s[t].price);this.isShowzzz},isShowzzz:function(){this.counts>0?this.isShowX=!0:this.isShowX=!1,this.money>=this.cost?this.isShowY=!0:(this.isShowY=!1,this.cost=this.cost-this.money),this.shops==[]&&(this.isShow6=!1)}}}),n=a,c=(i("1c37"),i("45a5"),i("2877")),r=Object(c["a"])(n,e,o,!1,null,"7bce938a",null);t["default"]=r.exports},"1c37":function(s,t,i){"use strict";var e=i("ef8e"),o=i.n(e);o.a},"1dde":function(s,t,i){var e=i("d039"),o=i("b622"),a=i("2d00"),n=o("species");s.exports=function(s){return a>=51||!e((function(){var t=[],i=t.constructor={};return i[n]=function(){return{foo:1}},1!==t[s](Boolean).foo}))}},"45a5":function(s,t,i){"use strict";var e=i("8a8a"),o=i.n(e);o.a},"65f0":function(s,t,i){var e=i("861d"),o=i("e8b5"),a=i("b622"),n=a("species");s.exports=function(s,t){var i;return o(s)&&(i=s.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?e(i)&&(i=i[n],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},8418:function(s,t,i){"use strict";var e=i("c04e"),o=i("9bf2"),a=i("5c6c");s.exports=function(s,t,i){var n=e(t);n in s?o.f(s,n,a(0,i)):s[n]=i}},"8a8a":function(s,t,i){},a434:function(s,t,i){"use strict";var e=i("23e7"),o=i("23cb"),a=i("a691"),n=i("50c4"),c=i("7b0b"),r=i("65f0"),h=i("8418"),l=i("1dde"),p=i("ae40"),u=l("splice"),_=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,d=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!u||!_},{splice:function(s,t){var i,e,l,p,u,_,m=c(this),S=n(m.length),C=o(s,S),w=arguments.length;if(0===w?i=e=0:1===w?(i=0,e=S-C):(i=w-2,e=d(f(a(t),0),S-C)),S+i-e>v)throw TypeError(g);for(l=r(m,e),p=0;p<e;p++)u=C+p,u in m&&h(l,p,m[u]);if(l.length=e,i<e){for(p=C;p<S-e;p++)u=p+e,_=p+i,u in m?m[_]=m[u]:delete m[_];for(p=S;p>S-e+i;p--)delete m[p-1]}else if(i>e)for(p=S-e;p>C;p--)u=p+e-1,_=p+i-1,u in m?m[_]=m[u]:delete m[_];for(p=0;p<i;p++)m[p+C]=arguments[p+2];return m.length=S-e+i,l}})},ae40:function(s,t,i){var e=i("83ab"),o=i("d039"),a=i("5135"),n=Object.defineProperty,c={},r=function(s){throw s};s.exports=function(s,t){if(a(c,s))return c[s];t||(t={});var i=[][s],h=!!a(t,"ACCESSORS")&&t.ACCESSORS,l=a(t,0)?t[0]:r,p=a(t,1)?t[1]:void 0;return c[s]=!!i&&!o((function(){if(h&&!e)return!0;var s={length:-1};h?n(s,1,{enumerable:!0,get:r}):s[1]=1,i.call(s,l,p)}))}},b0c0:function(s,t,i){var e=i("83ab"),o=i("9bf2").f,a=Function.prototype,n=a.toString,c=/^\s*function ([^ (]*)/,r="name";e&&!(r in a)&&o(a,r,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(s){return""}}})},e8b5:function(s,t,i){var e=i("c6b6");s.exports=Array.isArray||function(s){return"Array"==e(s)}},ef8e:function(s,t,i){}}]);
//# sourceMappingURL=chunk-7fc2dc69.e76e47f8.js.map