(this.webpackJsonpspeer=this.webpackJsonpspeer||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n,i=s(1),c=s.n(i),r=s(21),a=s.n(r),l=(s(28),s(23)),o=s(11),d=(s(29),["title","titleId"]);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)s=c[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}function u(e,t){var s=e.title,c=e.titleId,r=b(e,d);return i.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48px",height:"48px",ref:t,"aria-labelledby":c},r),s?i.createElement("title",{id:c},s):null,n||(n=i.createElement("path",{d:"M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"})))}var m=i.forwardRef(u),h=(s.p,s(42)),v=s(40),O=s(2),x={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}},originX:0},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}};var f=function(e){var t=e.toggleOpen,s=e.className;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v.a.div,{role:"button",variants:x,whileHover:{scale:1.15},whileTap:{scale:.95},className:s?"lihead ".concat(s):"lihead",onClick:function(){return t()},children:Object(O.jsx)("h2",{className:"listItems",children:"What is it"})}),Object(O.jsx)(v.a.div,{role:"button",variants:x,whileHover:{scale:1.15},whileTap:{scale:.95},className:s?"lihead ".concat(s):"lihead",onClick:function(){return t()},children:Object(O.jsx)("h2",{className:"listItems",children:"Perks"})}),Object(O.jsx)(v.a.div,{role:"button",variants:x,whileHover:{scale:1.15},whileTap:{scale:.95},className:s?"lihead ".concat(s):"lihead",onClick:function(){return t()},children:Object(O.jsx)("h2",{className:"listItems",children:"Pricing"})})]})};var g=function(e){var t=Object(h.a)(!1,!0),s=Object(o.a)(t,2),n=s[0],i=s[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(v.a.nav,{initial:!1,animate:n?"open":"closed",style:n?{}:{transitionDelay:"1s",width:"100px",height:"100px",overflow:"hidden"},children:[Object(O.jsx)(v.a.div,{className:e.bgClassName?"background ".concat(e.bgClassName):"background",variants:{open:{clipPath:"circle(240px at 50px 50px)",transition:{type:"spring",stiffness:20,restDelta:2}},closed:{clipPath:"circle(0px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}}}),Object(O.jsx)(v.a.ul,{variants:{open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},className:"ulhead",children:Object(O.jsx)(f,{className:e.liClassName,isOpen:n,toggleOpen:i})}),Object(O.jsx)("div",{role:"button",onClick:function(){return i()},className:e.svgClassName?"menubutton ".concat(e.svgClassName):"menubutton",tabIndex:"1",children:Object(O.jsx)(m,{className:n?"":e.menuClassName})})]}),Object(O.jsx)("h1",{className:e.titleClassName?"nav-title ".concat(e.titleClassName):"nav-title",children:"EXP|CON"})]})};s(31),s(32);var p=function(e){var t,s=Object(i.useRef)(null),n=Object(i.useRef)(null);return Object(O.jsxs)("div",{id:e.id,ref:s,role:"button",onClick:e.onClick,className:"btn2 ".concat(null!==(t=e.className)&&void 0!==t?t:""),tabIndex:"1",onMouseEnter:function(){s.current.onmousemove=function(e){var t,s,i,c=e.clientX,r=e.clientY;console.log(),null===(t=n.current)||void 0===t||t.style.setProperty("--x",c+"px"),null===(s=n.current)||void 0===s||s.style.setProperty("--y",r+"px"),null===(i=n.current)||void 0===i||i.classList.add("btn2-effect-working")}},onMouseLeave:function(){n.current.classList.remove("btn2-effect-working")},children:[Object(O.jsx)("span",{children:e.children}),Object(O.jsx)("div",{className:"btn2-effect",ref:n})]})},N=function(e){var t=Object(i.useState)([]),s=Object(o.a)(t,2),n=s[0],c=s[1],r=Object(i.useRef)(null);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"yellow-container",onMouseMove:function(e){var t,s;null===(t=r.current)||void 0===t||t.setAttribute("cx",e.clientX),null===(s=r.current)||void 0===s||s.setAttribute("cy",e.clientY)},onMouseDown:function(e){console.log(e.button),0!==e.button&&1!==e.button||(c((function(t){return[].concat(Object(l.a)(t),[{x:e.clientX/window.innerWidth*100,y:e.clientY/window.innerHeight*100}])})),console.log(e.clientX/window.innerWidth*100),console.log(e.clientY/window.innerHeight*100),console.log("================"))},children:[Object(O.jsx)(g,{menuClassName:"blacksvg",titleClassName:"yellow-nav-title",bgClassName:"yellow-nav-bg",liClassName:"yellow-nav-li",svgClassName:"yellow-nav-svg"}),Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{width:"100%",height:"100%"},children:[Object(O.jsx)("defs",{style:{width:"100%",height:"100%"},children:Object(O.jsxs)("clipPath",{id:"mask",style:{width:"100%",height:"100%"},children:[Object(O.jsx)("circle",{id:"mask-circle",cx:"55%",cy:"50%",r:"15%",style:{fill:"#ffffff"}}),Object(O.jsx)("circle",{id:"mask-circle",cx:"25%",cy:"95%",r:"8%",style:{fill:"#ffffff"}}),n.map((function(e,t){return Object(O.jsx)("circle",{id:"mask-circle",cx:e.x+"%",cy:e.y+"%",r:"8%",style:{fill:"#ffffff"}},"cc"+t+e.x+e.y)}))]})}),Object(O.jsxs)("g",{clipPath:"url(#mask)",children:[Object(O.jsx)("rect",{width:"100%",height:"100%",fill:"#272730"}),Object(O.jsx)("image",{className:"imagepls",xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:"https://raw.githubusercontent.com/AshenCat/speer/master/src/assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/Image4.png",width:"100%"})]}),Object(O.jsx)("circle",{ref:r,id:"circle-shadow",cx:"50%",cy:"50%",r:"8%",style:{stroke:"#ffffff",fill:"transparent",strokeWidth:"5"}})]}),Object(O.jsxs)("div",{className:"yellow-text-container",children:[Object(O.jsx)("h1",{className:"hero-h",children:"Front row seats"}),Object(O.jsx)("div",{className:"hero-subtext",children:Object(O.jsxs)("h2",{className:"hero-h",children:["Experience concerts up close and personal. ",Object(O.jsx)("small",{children:"(Object-fit and position isn't working)"})]})}),Object(O.jsx)(p,{children:"SEE DEMO"})]})]})})},w=s(41),A=(s.p,s(33),function(e){var t;return Object(O.jsx)("div",{role:"button",className:"btn-container ".concat(null!==(t=e.className)&&void 0!==t?t:""),tabIndex:"1",onClick:e.onClick,children:Object(O.jsx)("div",{className:"btn-rgb-lights",children:e.children})})}),y=(s(34),["https://raw.githubusercontent.com/AshenCat/speer/master/src/assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/Image1.png","https://raw.githubusercontent.com/AshenCat/speer/master/src/assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/Image2.png","https://raw.githubusercontent.com/AshenCat/speer/master/src/assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/Image3.png"]),C=s(22);var k=function(){var e=Object(i.useState)([0,0]),t=Object(o.a)(e,2),s=Object(o.a)(t[0],2),n=s[0],c=s[1],r=t[1],a=Object(i.useRef)(null),l=Object(i.useRef)(null),d=Object(i.useRef)(null),j=Object(C.a)(0,y.length,n);return Object(i.useEffect)((function(){return window.interval=setInterval((function(){return r((function(e){var t=Object(o.a)(e,2),s=t[0],n=t[1];return 2===s?[0,n]:[s+1,n]}))}),1e4),function(){clearInterval(window.interval)}}),[]),Object(i.useEffect)((function(){0===n?(a.current.classList.add("hero-slider-btn-filled"),l.current.classList.remove("hero-slider-btn-filled"),d.current.classList.remove("hero-slider-btn-filled")):1===n?(a.current.classList.remove("hero-slider-btn-filled"),l.current.classList.add("hero-slider-btn-filled"),d.current.classList.remove("hero-slider-btn-filled")):2===n&&(a.current.classList.remove("hero-slider-btn-filled"),l.current.classList.remove("hero-slider-btn-filled"),d.current.classList.add("hero-slider-btn-filled"))}),[n]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"hero-container",children:[Object(O.jsx)(g,{titleClassName:"hero-nav-title",bgClassName:"hero-nav-bg",liClassName:"hero-nav-li",svgClassName:"hero-nav-svg"}),Object(O.jsx)(w.a,{initial:!1,custom:c,children:Object(O.jsx)(v.a.img,{style:2===j?{objectPosition:"bottom"}:{},className:"concert-img",src:y[j],custom:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{opacity:{duration:1}}},n)}),Object(O.jsxs)("div",{className:"hero-text-container",children:[Object(O.jsx)("h1",{className:"hero-h",children:"Interactive Concert Experience"}),Object(O.jsx)("div",{className:"hero-subtext",children:Object(O.jsx)("h2",{className:"hero-h",children:"Experience your favorite artists like never before from the comfort of your own home."})}),Object(O.jsx)(A,{children:"TRY IT NOW"})]}),Object(O.jsxs)("div",{className:"hero-slider-btn-container",children:[Object(O.jsx)("div",{ref:a,role:"button",className:"hero-slider-btn",onClick:function(){return r([0,c])}}),Object(O.jsx)("div",{ref:l,role:"button",className:"hero-slider-btn",onClick:function(){return r([1,c])}}),Object(O.jsx)("div",{ref:d,role:"button",className:"hero-slider-btn",onClick:function(){return r([2,c])}})]})]})})},L=(s(35),function(){return Object(O.jsxs)("div",{className:"perks-container",children:[Object(O.jsx)(g,{titleClassName:"hero-nav-title",bgClassName:"hero-nav-bg",liClassName:"hero-nav-li",svgClassName:"hero-nav-svg"}),Object(O.jsx)(A,{className:"perks-btn",children:"Try it now!"}),Object(O.jsxs)("div",{className:"perks-text",children:[Object(O.jsx)("h1",{className:"perks-h",children:"PERKS"}),Object(O.jsxs)("div",{className:"perks-boxes",children:[Object(O.jsxs)("div",{className:"perks-box",children:[Object(O.jsx)("h2",{className:"perks-box-color r",children:"Subscription Payment Model"}),Object(O.jsx)("div",{className:"perks-box-text",children:"No commitment, Cancel anytime. Never worry about forgetting payment again!"})]}),Object(O.jsxs)("div",{className:"perks-box",children:[Object(O.jsx)("h2",{className:"perks-box-color c",children:"No Fee Cancelation Policy"}),Object(O.jsx)("div",{className:"perks-box-text",children:"No commitment, Cancel anytime. Never worry about forgetting payment again!"})]}),Object(O.jsxs)("div",{className:"perks-box",children:[Object(O.jsx)("h2",{className:"perks-box-color y",children:"Subscription Payment Model"}),Object(O.jsx)("div",{className:"perks-box-text",children:"No commitment, Cancel anytime. Never worry about forgetting payment again!"})]})]})]})]})}),I=(s(36),s.p+"static/media/SmallSpeaker1-03.6b61794a.png"),S=s.p+"static/media/SmallSpeaker2-03.79194761.png",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAOCAYAAACB8ipxAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TxSoVBTuIOGRonSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyr2vCKAQQjoRURipp5IL2bgOb7u4ePrXZRneZ/7c/QreZMBPpF4jumGRbxBPLNp6Zz3iUOsJCnE58TjBl2Q+JHrsstvnIsOCzwzZGRS88QhYrHYwXIHs5KhEk8ThxVVo3wh67LCeYuzWqmx1j35C4N5bSXNdZqjiGMJCSQhQkYNZVRgIUqrRoqJFO3HPPwjjj9JLplcZTByLKAKFZLjB/+D392ahalJNykYA7pfbPsjAvTsAs26bX8f23bzBPA/A1da219tALOfpNfbWvgIGNgGLq7bmrwHXO4Aw0+6ZEiO5KcpFArA+xl9Uw4YugX61tzeWvs4fQAy1NXyDXBwCIwVKXvd492Bzt7+PdPq7wdAmXKTwf10kgAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+UIEAILAX1DAfwAAAHiSURBVFjD1ZfNK4RBGMB/ryXWRq3EohSl7IGDsnJ3o1DOTk4o/AM+blzUujizKec9yErhJhcXyclBOShfkTYW6/Jsjck779fWm6emnmbmN8878z4fM2AvVUAl/iUiLSzeCvj9pTPwLDtAJoDRTMj8GnAYgJ8HLr1C1cAL8ArU+DAaNg9wDXwBCZ/8KVAEerxAIwIVgWEfRsPm+xR+ygffCnwLv/jXhAobcNxGdyv/nR+THGnLW/JHN7T+NgkXgHfgVhufBnKi++FngP0AvGq/H9jVxpuBmOifwI02vgJsi94BHGhO1AjUa2GvyiZAHMgqru3UssKUJGy+FtjywB/Jj1Gr97oSmk7tDOhST3ESeDMAeWBOcWFdwuYngEcD/wEsG644Q+LZJn7V7oqSMoApF7khbL5TNvgXP+CCbwLubfhBU3Foc6g0ThI232S4tLa44KNAg81Ys+ngxhT9TsLDS3UqJ/8szQs/Wga+lArysgdHvgp4ELfMycUxCZxL35PDE6Sc/KmEXQLYc8kDXGl8O3DigT+WuRdAr1TXrBOflFOe1RJwDZCWqtNtMFoOvgAsaQncAhZkbRMfl/ym8xHpKzjwlrxU0tprxZI9Ge3XGRaOuXD1oHzU59pu5kQD8r+efj+B9PF/mOzROAAAAABJRU5ErkJggg==";var E=function(){return Object(O.jsxs)("div",{style:{position:"relative"},children:[Object(O.jsx)(g,{titleClassName:"review-nav-title",bgClassName:"review-nav-bg",liClassName:"review-nav-li",svgClassName:"review-nav-svg"}),Object(O.jsxs)("div",{className:"reviews-container",children:[Object(O.jsxs)("div",{className:"reviews-speakers",children:[Object(O.jsx)("img",{src:I,alt:"aa",className:"reviews-speakers-img rsil"}),Object(O.jsx)("img",{src:S,alt:"aa",className:"reviews-speakers-img rsir"})]}),Object(O.jsxs)("div",{className:"reviews-text",children:[Object(O.jsx)("h1",{className:"reviews-h",children:"REVIEWS"}),Object(O.jsxs)("div",{className:"reviews-boxes",children:[Object(O.jsxs)("div",{className:"reviews-box",children:[Object(O.jsx)("div",{className:"reviews-rating",children:Object(O.jsx)("img",{src:D,alt:"stars?",width:"100%"})}),Object(O.jsx)("h2",{className:"reviews-artist",children:"Artist"}),Object(O.jsx)("h3",{className:"reviews-testimonials",children:"\"Love it, it's the best. I can't live without it!\""})]}),Object(O.jsxs)("div",{className:"reviews-box",children:[Object(O.jsx)("div",{className:"reviews-rating",children:Object(O.jsx)("img",{src:D,alt:"stars?",width:"100%"})}),Object(O.jsx)("h2",{className:"reviews-artist",children:"Producer"}),Object(O.jsx)("h3",{className:"reviews-testimonials",children:"\"Love it, it's the best. I can't live without it!\""})]}),Object(O.jsxs)("div",{className:"reviews-box",children:[Object(O.jsx)("div",{className:"reviews-rating",children:Object(O.jsx)("img",{src:D,alt:"stars?",width:"100%"})}),Object(O.jsx)("h2",{className:"reviews-artist",children:"Music Fan"}),Object(O.jsx)("h3",{className:"reviews-testimonials",children:"\"Love it, it's the best. I can't live without it!\""})]})]})]})]})]})},T=(s(37),s.p+"static/media/sample.bb19bb44.wav"),P=s.p+"static/media/medium17.771514b8.png",M=s.p+"static/media/medium27.f22c4155.png";var B=function(){var e,t=Object(i.useState)(!1),s=Object(o.a)(t,2),n=s[0],c=s[1],r=Object(i.useState)(!1),a=Object(o.a)(r,2),l=a[0],d=a[1],j=Object(i.useRef)(null),b=function(){l&&(n?document.getElementById("audio").pause():document.getElementById("audio").play(),c((function(e){return!e})))};return Object(O.jsxs)("div",{className:"sound",onMouseMove:function(t){var s,n,i,c;null===(s=j.current)||void 0===s||s.classList.add("sound-flt-div-moving"),null===(n=j.current)||void 0===n||n.classList.remove("sound-flt-div-not-moving");var r=t.clientX,a=t.clientY;null===(i=j.current)||void 0===i||i.style.setProperty("--x",r-75+"px"),null===(c=j.current)||void 0===c||c.style.setProperty("--y",a-90+"px"),clearTimeout(e),e=setTimeout((function(){var e,t;null===(e=j.current)||void 0===e||e.classList.add("sound-flt-div-not-moving"),null===(t=j.current)||void 0===t||t.classList.remove("sound-flt-div-moving")}),100)},onMouseLeave:function(){},onClick:b,children:[Object(O.jsx)("div",{onClick:b,className:"sound-flt-div",ref:j,children:Object(O.jsxs)("span",{children:["\ud83d\udce2",l&&"\ud83c\udfb6"]})}),Object(O.jsx)(g,{svgOpen:"soundSvgOpen",titleOpen:"soundTitleOpen",menuClassName:"blacksvg",titleClassName:"sound-nav-title",bgClassName:"sound-nav-bg",liClassName:"sound-nav-li",svgClassName:"sound-nav-svg"}),Object(O.jsx)("audio",{id:"audio",children:Object(O.jsx)("source",{src:T,type:"audio/mpeg"})}),Object(O.jsxs)("div",{className:"sound-container",children:[Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)("img",{onMouseOver:function(){return d(!0)},onMouseLeave:function(){return d(!1)},className:"speaker-img sleft",src:P,alt:"speaker"}),Object(O.jsx)("img",{onMouseOver:function(){return d(!0)},onMouseLeave:function(){return d(!1)},className:"speaker-img sright",src:M,alt:"speaker"})]}),Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("h1",{className:"sound-h",children:"Superior Sound"}),Object(O.jsx)("h2",{className:"sound-h",children:"Experience live versions of your favourite songs."}),Object(O.jsx)(p,{id:"btn2",className:"sound-btn-demo",children:"See Demo"})]})]})]})};var F=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{}),Object(O.jsx)(B,{}),Object(O.jsx)(N,{}),Object(O.jsx)(L,{}),Object(O.jsx)(E,{})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),c(e),r(e)}))};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),R()}},[[38,1,2]]]);
//# sourceMappingURL=main.28ce7922.chunk.js.map