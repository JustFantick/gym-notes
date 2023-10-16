(self.webpackChunktodo_react=self.webpackChunktodo_react||[]).push([[287],{7397:(e,n,t)=>{"use strict";t.d(n,{Z:()=>k});var r=t(7294),s=t(3379),i=t.n(s),a=t(7795),o=t.n(a),l=t(569),c=t.n(l),u=t(3565),d=t.n(u),p=t(9216),m=t.n(p),f=t(4589),b=t.n(f),y=t(5326),j={};j.styleTagTransform=b(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=m(),i()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var v=t(720),h=t(504),g=t(381),x=t.n(g),_=t(2298);function k(e){var n=e.weekday,t=e.hour,s=e.setTime,i="HH:mm";return r.createElement(v._,{dateAdapter:_.Q,adapterLocale:"uk"},r.createElement("div",{className:"clock"},r.createElement("div",{className:"clock__weekday"},n),r.createElement(h.I,{value:x()(t,i),skipDisabled:!0,shouldDisableTime:function(e,n){var t=e.hour();return"hours"===n&&(t<12||t>18)},timeStep:30,ampm:!1,onChange:function(e){return s(e.format(i))}})))}},6912:(e,n,t)=>{"use strict";t.d(n,{f:()=>i});var r=t(7294),s=t(4663),i=function(e){var n=e.name,t=void 0===n?"":n,i=e.setName,a=e.label,o=void 0===a?"":a,l=e.isValid,c=void 0===l||l;return r.createElement(s.S,{isValid:c},r.createElement("label",{className:"input-wrapper__name-label"},o,r.createElement("input",{type:"text",name:"name",value:t,placeholder:"______",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&e.target.blur()}})))}},126:(e,n,t)=>{"use strict";t.d(n,{p:()=>A});var r=t(7294),s=t(4663),i=t(7965),a=t(3379),o=t.n(a),l=t(7795),c=t.n(l),u=t(569),d=t.n(u),p=t(3565),m=t.n(p),f=t(9216),b=t.n(f),y=t(4589),j=t.n(y),v=t(9806),h={};function g(e){var n=e.coefficient,t=e.onClick,s=e.theme,a=void 0===s?"green":s;return r.createElement(i.E.div,{className:"quick-increase-button ".concat("green"===a?"":"yellow"),whileHover:{scale:1.1},whileTap:{scale:.9},onClick:t},"+".concat(n))}h.styleTagTransform=j(),h.setAttributes=m(),h.insert=d().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=b(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var x=t(2469),_=t(9167),k={};function w(e){var n=e.value,t=e.setValue;return r.createElement("div",{className:"digital-counter"},r.createElement("div",{className:"digital-counter__minus",onClick:function(){return t(n-1)}},"-"),r.createElement("div",{className:"digital-counter__value"},n),r.createElement("div",{className:"digital-counter__plus",onClick:function(){return t(n+1)}},"+"))}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}k.styleTagTransform=j(),k.setAttributes=m(),k.insert=d().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=b(),o()(_.Z,k),_.Z&&_.Z.locals&&_.Z.locals;var A=function(e){var n,t,i=e.subscriptionValue,a=e.setSubscription,o=(n=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,i=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){o=!0,s=e}finally{try{a||null==t.return||t.return()}finally{if(o)throw s}}return i}}(n,t)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],c=o[1];return r.createElement(r.Fragment,null,r.createElement(s.S,null,r.createElement("div",{className:"subscription"},r.createElement("div",{className:"subscription__label",onClick:function(e){e.preventDefault(),c(!0)}},"Стартовий абонемент:",r.createElement("span",null,i)),r.createElement("div",{className:"subscription__increase-btns"},[1,2,3,4].map((function(e){return r.createElement(g,{key:e,coefficient:e,onClick:function(){return a(i+e)}})})),r.createElement(g,{coefficient:"n",onClick:function(){return c(!0)}})))),r.createElement(x.Z,{isOpen:l,closePopup:c},r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(w,{value:i,setValue:a}))))}},4663:(e,n,t)=>{"use strict";t.d(n,{S:()=>v});var r=t(7294),s=t(3379),i=t.n(s),a=t(7795),o=t.n(a),l=t(569),c=t.n(l),u=t(3565),d=t.n(u),p=t(9216),m=t.n(p),f=t(4589),b=t.n(f),y=t(2487),j={};j.styleTagTransform=b(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=m(),i()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var v=function(e){var n=e.children,t=e.isValid,s=void 0===t||t;return r.createElement("div",{className:"input-wrapper ".concat(!s&&"non-valid")},n)}},8577:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(7294);function s(e){var n=e.children;return r.createElement("div",{style:{padding:"20px"}},n)}},2469:(e,n,t)=>{"use strict";t.d(n,{Z:()=>g});var r=t(7294),s=t(3379),i=t.n(s),a=t(7795),o=t.n(a),l=t(569),c=t.n(l),u=t(3565),d=t.n(u),p=t(9216),m=t.n(p),f=t(4589),b=t.n(f),y=t(2597),j={};j.styleTagTransform=b(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=m(),i()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var v=t(7965),h=t(1241);function g(e){var n=e.children,t=e.isOpen,s=e.closePopup,i=(0,h.P)(),a=i.lockScroll,o=i.unlockScroll;return(0,r.useEffect)((function(){t?a():o()}),[t]),r.createElement(v.E.div,{className:"popup",onClick:function(e){e.target.closest(".popup__body")||s()},"data-isopen":t,layout:!0},r.createElement(v.E.div,{className:"popup__body",variants:{closed:{y:"100%"},open:{y:0}},animate:t?"open":"closed"},n))}},3832:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var r=t(7294),s=t(3379),i=t.n(s),a=t(7795),o=t.n(a),l=t(569),c=t.n(l),u=t(3565),d=t.n(u),p=t(9216),m=t.n(p),f=t(4589),b=t.n(f),y=t(9575),j={};j.styleTagTransform=b(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=m(),i()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var v=t(8213),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m(),i()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var g=t(7965);function x(e){var n=e.status,t=e.setStatus,s=e.day,i=e.time,a=e.openPopup;return r.createElement(g.E.div,{className:"schedule-day",onClick:function(e){!e.target.closest(".schedule-day__time")||e.target.closest(".schedule-day__time")&&!n?t():e.target.closest(".schedule-day__time")&&n&&a()},layout:!0,"data-isactive":n,whileHover:{scale:1.05},whileTap:{scale:.9},transition:{duration:.5,type:"spring"}},r.createElement("div",{className:"schedule-day__label"},s),r.createElement(g.E.div,{className:"schedule-day__time",variants:{inActive:{y:"15px",opacity:0,transition:{duration:.5,type:"spring"}},active:{y:0,opacity:1,transition:{duration:.5,type:"spring"}}},animate:n?"active":"inActive"},i))}var _=t(2469),k=t(7397);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,i=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){o=!0,s=e}finally{try{a||null==t.return||t.return()}finally{if(o)throw s}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e){var n=e.schedule,t=e.setSchedule,s=Z((0,r.useState)(!1),2),i=s[0],a=s[1],o=Z((0,r.useState)(0),2),l=o[0],c=o[1];function u(e){a(!0),c(e)}return r.createElement(r.Fragment,null,r.createElement("div",{className:"schedule"},n.map((function(e,s){return r.createElement(x,{key:s,time:e.time,day:e.weekday.short,status:e.isActive,setStatus:function(){return e=s,void t(n.map((function(n,t){return t!==e?n:(n.isActive||setTimeout((function(){u(t)}),200),E(E({},n),{},{isActive:!n.isActive}))})));var e},openPopup:function(){return u(s)}})}))),r.createElement(_.Z,{isOpen:i,closePopup:function(){return a(!1)}},r.createElement("center",null,r.createElement(k.Z,{hour:n[l]&&n[l].time,weekday:n[l]&&n[l].weekday.full,setTime:function(e){t(n.map((function(n,t){return t!==l?n:E(E({},n),{},{time:e})}))),a(!1)}}))))}},6633:(e,n,t)=>{"use strict";t.d(n,{N:()=>v});var r=t(7294),s=t(3379),i=t.n(s),a=t(7795),o=t.n(a),l=t(569),c=t.n(l),u=t(3565),d=t.n(u),p=t(9216),m=t.n(p),f=t(4589),b=t.n(f),y=t(5207),j={};j.styleTagTransform=b(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=m(),i()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var v=function(e){var n=e.children;return r.createElement("h2",{className:"section-title"},n)}},5326:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,'.clock {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: 1px solid #3b3b3b;\n}\n.clock__weekday {\n  padding-left: 15px;\n  border-bottom: 1px solid #3b3b3b;\n  padding-bottom: 10px;\n  color: #f2f2f2;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: normal;\n  text-align-last: left;\n}\n.MuiMenuItem-root {\n  border-radius: 10px !important;\n  color: #f2f2f2 !important;\n  font-size: 1.2rem !important;\n}\n.MuiMenuItem-root[aria-selected="true"] {\n  background-color: #f2f2f2 !important;\n  color: #619B8A !important;\n}\n',""]);const o=a},9167:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,".digital-counter {\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.digital-counter__minus,\n.digital-counter__value,\n.digital-counter__plus {\n  line-height: 1;\n  font-size: 55px;\n  color: #3b3b3b;\n  font-weight: 400;\n}\n.digital-counter__value {\n  padding: 15px 20px;\n  width: 95px;\n  text-align: center;\n  position: relative;\n}\n.digital-counter__value::before,\n.digital-counter__value::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 75%;\n  width: 3px;\n  border-radius: 5px;\n  background-color: #3b3b3b;\n}\n.digital-counter__value::before {\n  left: 0;\n}\n.digital-counter__value::after {\n  right: 0;\n}\n.digital-counter__minus,\n.digital-counter__plus {\n  width: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]);const o=a},2487:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,".input-wrapper {\n  padding: 20px;\n  border-radius: 10px;\n  background-color: #f2f2f2;\n}\n.input-wrapper.non-valid {\n  background-color: #fef0ef;\n}\n.input-wrapper input,\n.input-wrapper label {\n  background-color: transparent;\n  font-size: 18px;\n  color: #3b3b3b;\n}\n.input-wrapper__name-label {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: color 0.3s ease-in;\n}\n.input-wrapper__name-label input {\n  font-size: 20px;\n  color: #3b3b3b;\n}\n.input-wrapper__name-label input::placeholder {\n  font-size: 28px;\n  letter-spacing: 3px;\n}\n.subscription {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.subscription__label {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 20px;\n}\n.subscription__label span {\n  max-width: 50px;\n  color: #619B8A;\n  font-size: 22px;\n  font-weight: 500;\n}\n.subscription__increase-btns {\n  display: flex;\n  gap: 15px;\n}\n",""]);const o=a},2597:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,'.popup {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: flex-end;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popup__body {\n  max-height: 85vh;\n  background-color: #619B8A;\n  width: 100%;\n  padding: 20px 30px;\n  border-radius: 10px 10px 0 0;\n}\n.popup[data-isopen="true"] {\n  opacity: 1;\n  visibility: visible;\n}\n.flex-gap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n}\n.felx-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',""]);const o=a},9806:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,".quick-increase-button {\n  cursor: pointer;\n  color: #f2f2f2;\n  font-family: 'Varela Round';\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  padding: 6px 12px;\n  border-radius: 25px;\n  background-color: #619B8A;\n}\n.quick-increase-button.yellow {\n  background-color: #fbba72;\n  color: #3b3b3b;\n}\n",""]);const o=a},8213:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,'.schedule-day {\n  width: 150px;\n  padding: 20px;\n  background-color: #619B8A;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  opacity: 0.65;\n  transition: opacity 0.3s ease;\n}\n.schedule-day__label,\n.schedule-day__time {\n  color: #f2f2f2;\n}\n.schedule-day__label {\n  font-size: 24px;\n}\n.schedule-day__time {\n  font-family: "Space Grotesk";\n  font-size: 28px;\n}\n.schedule-day[data-isactive=true] {\n  opacity: 1;\n}\n',""]);const o=a},9575:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,".schedule {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  justify-items: center;\n  column-gap: 30px;\n  row-gap: 15px;\n}\n",""]);const o=a},5207:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(8081),s=t.n(r),i=t(3645),a=t.n(i)()(s());a.push([e.id,".section-title {\n  font-family: 'Inter';\n  color: #3b3b3b;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n",""]);const o=a},6700:(e,n,t)=>{var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":5684,"./bo.js":5684,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1626,"./en-sg.js":1626,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=6700},3499:(e,n,t)=>{"use strict";t.d(n,{V:()=>a});var r=t(270),s=t(2060);const i=(0,t(782).tJ)((0,s.n)(((e,n)=>({idCounter:1,incrementIdCounter:()=>e((e=>{e.idCounter++})),visitors:[],setVisitorName:(t,r)=>{const s=n().visitors.filter((e=>e.id==t))[0];e((e=>{e.visitors[n().visitors.indexOf(s)].name=r}))},setVisitorSubscription:(t,r)=>{const s=n().visitors.filter((e=>e.id==t))[0];e((e=>{e.visitors[n().visitors.indexOf(s)].subscription=r}))},setVisitorSchedule:(t,r)=>{const s=n().visitors.filter((e=>e.id==t))[0];e((e=>{e.visitors[n().visitors.indexOf(s)].schedule=r}))},addNewVisitor:(t,r,s)=>{e((e=>{e.visitors.push({id:n().idCounter,name:t,subscription:r,schedule:s})})),n().incrementIdCounter()},scheduleTemplate:[{date:1,weekday:{short:"Пн",full:"Понеділок"},isActive:!1,time:"12:00"},{date:2,weekday:{short:"Вт",full:"Вівторок"},isActive:!1,time:"12:00"},{date:3,weekday:{short:"Ср",full:"Середа"},isActive:!1,time:"12:00"},{date:4,weekday:{short:"Чт",full:"Четвер"},isActive:!1,time:"12:00"},{date:5,weekday:{short:"Пт",full:"П'ятниця"},isActive:!1,time:"12:00"},{date:6,weekday:{short:"Сб",full:"Субота"},isActive:!1,time:"12:00"}],todayDate:null,setTodayDate:n=>{e((e=>{e.todayDate=n}))},todaysVisitors:[],setTodaysVisitors:n=>{e((e=>{e.todaysVisitors=n}))},switchTodaysVisitorAttendance:t=>{const r=n().todaysVisitors.filter((e=>e.id==t))[0],s=n().todaysVisitors.indexOf(r);e((e=>{e.todaysVisitors[s].isCame=!e.todaysVisitors[s].isCame}))},addTodaysVisitor:n=>{e((e=>{e.todaysVisitors.push(n)}))}}))),{name:"visitors store",partialize:e=>Object.fromEntries(Object.entries(e).filter((([e])=>!["scheduleTemplate"].includes(e))))}),a=(0,r.Ue)(i)}}]);