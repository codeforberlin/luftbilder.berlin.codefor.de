(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var b=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"292e":function(e,t,n){},"420a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("d81d");function a(e,t,n,a,i,o){var l=Object(r["k"])("Nav"),s=Object(r["k"])("Map");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["f"])(l,{brand:i.brand,maps:i.maps,map:i.map,onChangeMap:o.changeMap,onChangeCenter:o.changeCenter},null,8,["brand","maps","map","onChangeMap","onChangeCenter"]),Object(r["f"])(s,{map:i.map,center:i.center,zoom:i.zoom},null,8,["map","center","zoom"])],64)}var i=Object(r["q"])("data-v-41332e22");Object(r["i"])("data-v-41332e22");var o={class:"map",id:"map"};Object(r["h"])();var l=i((function(e,t,n,a,i,l){return Object(r["g"])(),Object(r["c"])("div",o)})),s=(n("a9e3"),n("6cc5"),n("e11e")),c=n.n(s),b={name:"Map",props:{map:Object,center:Array,zoom:Number},data:function(){return{leafletMap:null,leafletLayer:null}},methods:{setupLeafletMap:function(){this.leafletMap=c.a.map("map"),this.changeView(),this.changeMap()},changeMap:function(){this.leafletLayer&&this.leafletMap.removeLayer(this.leafletLayer),this.leafletLayer=c.a.tileLayer(this.map.url,this.map.options).addTo(this.leafletMap)},changeView:function(){this.leafletMap.setView(this.center,this.zoom)}},watch:{map:function(){this.changeMap()},center:function(){this.changeView()}},mounted:function(){this.setupLeafletMap()}};n("b685");b.render=l,b.__scopeId="data-v-41332e22";var p=b,f=(n("b0c0"),Object(r["q"])("data-v-09183f86"));Object(r["i"])("data-v-09183f86");var d={class:"nav-top"},u={class:"nav-left"},h={class:"info"},m={class:"nav-right"},g={class:"nav-bottom"},O={class:"map-year"};Object(r["h"])();var j=f((function(e,t,n,a,i,o){var l=Object(r["k"])("Info");return Object(r["g"])(),Object(r["c"])("nav",null,[Object(r["f"])("div",d,[Object(r["f"])("div",u,[Object(r["f"])("h1",null,[Object(r["f"])("a",{href:n.brand.href},Object(r["l"])(n.brand.text),9,["href"])]),Object(r["f"])("div",h,[Object(r["f"])("a",{href:"",onClick:t[1]||(t[1]=Object(r["p"])((function(){return o.toggleInfo&&o.toggleInfo.apply(o,arguments)}),["prevent"]))},[Object(r["f"])("img",{src:a.iconInfo,alt:"Information"},null,8,["src"])])])]),Object(r["f"])("div",m,[Object(r["f"])("form",{onSubmit:t[3]||(t[3]=Object(r["p"])((function(e){return o.searchLocation()}),["prevent"]))},[Object(r["o"])(Object(r["f"])("input",{class:"search-input",type:"search",placeholder:"Search address","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.searchString=e})},null,512),[[r["n"],i.searchString]])],32),Object(r["o"])(Object(r["f"])("select",{class:"map-select","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.currentMapIndex=e}),onUpdate:t[5]||(t[5]=function(t){return o.changeMap(e.index)})},[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.maps,(function(e,t){return Object(r["g"])(),Object(r["c"])("option",{key:t,value:t},Object(r["l"])(e.name),9,["value"])})),128))],544),[[r["m"],i.currentMapIndex]])])]),Object(r["f"])("div",g,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.maps,(function(e,t){return Object(r["g"])(),Object(r["c"])("a",{class:"map-thumbnail",key:t,style:o.getBackgroundImage(e),onClick:Object(r["p"])((function(e){return o.changeMap(t)}),["prevent"])},[Object(r["f"])("p",O,Object(r["l"])(o.getYear(e)),1)],12,["onClick"])})),128))]),i.info?(Object(r["g"])(),Object(r["c"])(l,{key:0,map:n.map,onOnClose:o.toggleInfo},null,8,["map","onOnClose"])):Object(r["d"])("",!0)])})),v=(n("d3b7"),n("ac1f"),n("5319"),n("1276"),Object(r["q"])("data-v-47905411"));Object(r["i"])("data-v-47905411");var y={class:"modal"},x=Object(r["f"])("p",null,[Object(r["e"])(" luftbilder.berlin.codefor.de ist ein Projekt des "),Object(r["f"])("a",{href:"https://codefor.de/berlin"},"OK Lab Berlins"),Object(r["e"])(". Mehr Karten gibt es auf "),Object(r["f"])("a",{href:"https://maps.berlin.codefor.de"},"maps.berlin.codefor.de"),Object(r["e"])(". ")],-1),D=Object(r["f"])("p",null,[Object(r["e"])(" Den Source-Code gibt es auf "),Object(r["f"])("a",{href:"https://github.com/codeforberlin/luftbilder.berlin.codefor.de"},"GitHub"),Object(r["e"])(". ")],-1),_=Object(r["e"])(" Die aktuelle Karte zeigt "),M=Object(r["e"])(". Hinter dem Link gibt es mehr Informationen. ");Object(r["h"])();var k=v((function(e,t,n,a,i,o){return Object(r["g"])(),Object(r["c"])("div",y,[Object(r["f"])("a",{href:"",class:"close",onClick:t[1]||(t[1]=Object(r["p"])((function(){return o.handleClose&&o.handleClose.apply(o,arguments)}),["prevent"]))},"×"),x,D,Object(r["f"])("p",null,[_,Object(r["f"])("span",{innerHTML:n.map.options.attribution},null,8,["innerHTML"]),M])])})),B={name:"Info",props:{map:Object,onClose:Function},methods:{handleClose:function(){this.$emit("onClose")}}};n("a206");B.render=k,B.__scopeId="data-v-47905411";var L=B,E=n("d399"),Z=n.n(E),G={name:"Nav",props:{brand:Object,maps:Array,map:Object},components:{Info:L},setup:function(){return{iconInfo:Z.a}},data:function(){return{currentMapIndex:this.maps.indexOf(this.map),searchString:"",info:!1}},watch:{currentMapIndex:function(e){this.$emit("changeMap",e)}},methods:{searchLocation:function(){var e=this;if(this.searchString){var t="https://nominatim.openstreetmap.org/search?format=json&q=Berlin "+encodeURIComponent(this.searchString);fetch(t).then((function(e){return e.json()})).then((function(t){t.length>0&&e.$emit("changeCenter",[t[0].lat,t[0].lon])}))}},toggleInfo:function(){this.info=!this.info},changeMap:function(e){this.$emit("changeMap",e)},getBackgroundImage:function(e){var t=e.url.replace(/\{z\}\/\{x\}\/\{y\}/i,"16/35198/21494");return{backgroundImage:"url(".concat(t,")")}},getYear:function(e){return e.name.split(" ")[1]}}};n("f78d");G.render=j,G.__scopeId="data-v-09183f86";var z=G,I={name:"App",data:function(){return{brand:this.$config.brand,maps:this.$config.maps,map:this.$config.maps[0],center:this.$config.view.center,zoom:this.$config.view.zoom}},components:{Map:p,Nav:z},methods:{changeMap:function(e){this.map=this.maps[e]},changeCenter:function(e){this.center=e}}};n("6620");I.render=a;var P=I,C=n("7dc5"),w=Object(r["b"])(P);w.config.globalProperties.$config=C,w.mount("#app")},6620:function(e,t,n){"use strict";n("420a")},"6a10":function(e,t,n){},"7dc5":function(e){e.exports=JSON.parse('{"brand":{"text":"luftbilder.berlin.codefor.de","href":"https://luftbilder.berlin.codefor.de"},"view":{"center":[52.51,13.37628],"zoom":15},"maps":[{"name":"Luftbilder 2022","url":"https://tiles.codefor.de/berlin-2022-dop20rgbi/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2022_true_rgbi@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2022 (DOP20RGBI)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2021","url":"https://tiles.codefor.de/berlin-2021-dop20rgbi/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2021_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2021 (DOP20RGBI)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2020","url":"https://tiles.codefor.de/berlin-2020-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2020_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2020 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2019","url":"https://tiles.codefor.de/berlin-2019-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2019_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2019 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2018","url":"https://tiles.codefor.de/berlin-2018-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2018_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2018 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2017","url":"https://tiles.codefor.de/berlin-2017-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2017_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2017 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2016","url":"https://tiles.codefor.de/berlin-2016-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2016_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2016 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2015","url":"https://tiles.codefor.de/berlin-2015-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2015_rgb@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2015 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2014","url":"https://tiles.codefor.de/berlin-2014-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2014@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2014 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2010","url":"https://tiles.codefor.de/berlin-2010-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2010@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2010 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2007","url":"https://tiles.codefor.de/berlin-2007-dop20rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2007@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2007 (DOP20RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2006","url":"https://tiles.codefor.de/berlin-2006-dop15pan/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2006@senstadt&type=FEED\\">Digitale Schwarz-Weiß-Orthophotos 2006 (DOP15PAN)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 2004","url":"https://tiles.codefor.de/berlin-2004-dop25rgb/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild2004@senstadt&type=FEED\\">Geoportal Berlin / Digitale farbige Orthophotos 2004 (DOP25RGB)</a>","minZoom":10,"maxZoom":20}},{"name":"Luftbilder 1928","url":"https://tiles.codefor.de/berlin-1928/{z}/{x}/{y}.png","options":{"attribution":"<a target=\\"blank\\" href=\\"https://fbinter.stadt-berlin.de/fb/berlin/service.jsp?id=a_luftbild1928@senstadt&type=FEED\\">Geoportal Berlin / Luftbilder 1928, Maßstab 1:4 000</a>","minZoom":10,"maxZoom":20}}]}')},a206:function(e,t,n){"use strict";n("cf07")},b685:function(e,t,n){"use strict";n("292e")},cf07:function(e,t,n){},d399:function(e,t,n){e.exports=n.p+"img/icon-info.32aa8313.svg"},f78d:function(e,t,n){"use strict";n("6a10")}});
//# sourceMappingURL=app.4b7be584.js.map