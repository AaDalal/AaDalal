(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6616)}])},7837:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var s=i(5893),l=i(1664),r=i.n(l),n=i(7294);let a=e=>{e?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(localStorage.theme="light",document.documentElement.classList.remove("dark"))},o=()=>"light"!==localStorage.theme&&"dark"===localStorage.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches;var c=i(2236);let d={dark:{circle:{r:9},mask:{cx:"50%",cy:"23%"},svg:{transform:"rotate(40deg)"},lines:{opacity:0}},light:{circle:{r:5},mask:{cx:"100%",cy:"0%"},svg:{transform:"rotate(90deg)"},lines:{opacity:1}},springConfig:{mass:4,tension:250,friction:35}},u=e=>{let{children:t,size:i=24,animationProperties:l=d,moonColor:r="white",sunColor:u="black",style:f,...m}=e,[h,g]=(0,n.useState)();(0,n.useEffect)(()=>g(o()),[]);let x=(0,n.useMemo)(()=>l!==d?Object.assign(d,l):l,[l]),{circle:p,svg:v,lines:w,mask:j}=x[h?"dark":"light"],y=(0,c.q_)({...v,config:l.springConfig}),b=(0,c.q_)({...p,config:l.springConfig}),_=(0,c.q_)({...j,config:l.springConfig}),N=(0,c.q_)({...w,config:l.springConfig}),k=()=>{a(!h),g(!h)};return(0,s.jsxs)(c.q.svg,{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",color:h?r:u,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",onClick:k,style:{cursor:"pointer",...y,...f},...m,children:[(0,s.jsxs)("mask",{id:"circle-mask",children:[(0,s.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),(0,s.jsx)(c.q.circle,{style:_,r:"9",fill:"black"})]}),(0,s.jsx)(c.q.circle,{cx:"12",cy:"12",fill:h?r:u,style:b,mask:"url(#circle-mask)"}),(0,s.jsxs)(c.q.g,{stroke:"currentColor",style:N,children:[(0,s.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,s.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,s.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,s.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,s.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,s.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,s.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,s.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})]})};function f(e){var t,i;let{currentPost:l,posts:n,style:a}=e,o=n.map(e=>e.slug).indexOf(l.slug);o=-1===o?0:o;let c=e=>(0,s.jsx)("a",{href:"/".concat(e.slug),className:"opacity-75",children:e.title},e.slug),d=n.slice(0,o).map(c),f=n.slice(o+1).map(c);return(0,s.jsxs)("div",{style:{...a},className:"full grid grid-cols-8 font-medium",children:[(0,s.jsxs)("div",{className:"col-span-3 md:col-span-2 p-4 border-2 flex flex-row justify-between items-center flex-shrink",children:[(0,s.jsx)(r(),{className:"font-bold text-xl",href:"/",children:"aadalal"}),(0,s.jsx)(u,{})]}),(0,s.jsxs)("div",{className:"col-span-5 md:col-span-6 py-4 px-2 border-y-2 border-r-2 grid grid-cols-16 gap-6 overflow-hidden whitespace-nowrap flex items-center justify-center",children:[(0,s.jsx)("div",{className:"col-span-5 md:col-span-6 flex justify-end items-center flex-shrink gap-5",children:d}),(0,s.jsxs)("div",{className:"col-span-6 md:col-span-4 flex flex-row justify-between items-center flex-shrink-0",children:[(0,s.jsx)(r(),{id:"previous-post",href:(null===(t=n[o-1])||void 0===t?void 0:t.slug)||"#",className:n[o-1]?"":"opacity-50 cursor-not-allowed",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8",fill:"currentColor",viewBox:"144 64 224 384",children:(0,s.jsx)("path",{d:"M368 64L144 256l224 192V64z"})})}),(0,s.jsx)("div",{className:"shrink text-2xl font-junicode",children:l.title}),(0,s.jsx)(r(),{id:"next-post",href:(null===(i=n[o+1])||void 0===i?void 0:i.slug)||"#",className:n[o+1]?"":"opacity-50 cursor-not-allowed dark:text-white",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"h-8 dark:text-white",viewBox:"144 64 224 384",children:(0,s.jsx)("path",{d:"M144 448l224-192L144 64v384z"})})})]}),(0,s.jsx)("div",{className:"col-span-5 md:col-span-6 flex justify-start items-center flex-shrink gap-5",children:f})]})]})}},6569:function(e,t,i){"use strict";var s=i(5893);let l=e=>{let{content:t,title:i,date:l}=e;return(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-3 mt-4",children:[(0,s.jsxs)("div",{className:"my-10",children:[(0,s.jsx)("div",{className:"text-8xl w-3/4 font-junicode",children:i}),(0,s.jsx)("span",{className:"italic opacity-75",children:l})]}),(0,s.jsx)("article",{className:"prose prose-a:text-blue-600 hover:prose-a:text-blue-500",dangerouslySetInnerHTML:{__html:t}})]})};t.Z=l},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(6495).Z,l=i(2648).Z,r=i(1598).Z,n=i(7273).Z,a=r(i(7294)),o=l(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var f=l(i(7746));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function x(e,t,i,l,r,n,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&n(!0),null==l?void 0:l.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;l.current(s({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let p=a.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:l,widthInt:r,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:h,loading:g,srcString:p,config:v,unoptimized:w,loader:j,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:_,setShowAltText:N,onLoad:k,onError:C}=e,S=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},S,{loading:g,width:r,height:l,decoding:"async","data-nimg":m?"fill":"1",className:c,style:s({},d,u)},i,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&x(e,p,h,y,b,_,w))},[p,h,y,b,_,C,w,t]),onLoad:e=>{let t=e.currentTarget;x(t,p,h,y,b,_,w)},onError:e=>{N(!0),"blur"===h&&_(!0),C&&C(e)}})))}),v=a.forwardRef((e,t)=>{let i,l;var r,{src:x,sizes:v,unoptimized:w=!1,priority:j=!1,loading:y,className:b,quality:_,width:N,height:k,fill:C,style:S,onLoad:E,onLoadingComplete:z,placeholder:M="empty",blurDataURL:O,layout:I,objectFit:L,objectPosition:R,lazyBoundary:P,lazyRoot:q}=e,A=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=a.useContext(u.ImageConfigContext),F=a.useMemo(()=>{let e=m||B||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return s({},e,{allSizes:t,deviceSizes:i})},[B]),T=A,V=T.loader||f.default;delete T.loader;let D="__next_img_default"in V;if(D){if("custom"===F.loader)throw Error('Image with src "'.concat(x,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:i}=t,s=n(t,["config"]);return e(s)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(S=s({},S,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!v&&(v=t)}let W="",Z=g(N),G=g(k);if("object"==typeof(r=x)&&(h(r)||void 0!==r.src)){let e=h(x)?x.default:x;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,l=e.blurHeight,O=O||e.blurDataURL,W=e.src,!C){if(Z||G){if(Z&&!G){let t=Z/e.width;G=Math.round(e.height*t)}else if(!Z&&G){let t=G/e.height;Z=Math.round(e.width*t)}}else Z=e.width,G=e.height}}let H=!j&&("lazy"===y||void 0===y);((x="string"==typeof x?x:W).startsWith("data:")||x.startsWith("blob:"))&&(w=!0,H=!1),F.unoptimized&&(w=!0),D&&x.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0);let[U,J]=a.useState(!1),[X,Y]=a.useState(!1),$=g(_),K=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:R}:{},X?{}:{color:"transparent"},S),Q="blur"===M&&O&&!U?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:G,blurWidth:i,blurHeight:l,blurDataURL:O,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:s,width:l,quality:r,sizes:n,loader:a}=e;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:s,allSizes:l}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(i);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let r=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:r,kind:"x"}}(t,l,n),d=o.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:o.map((e,s)=>"".concat(a({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:s+1).concat(c)).join(", "),src:a({config:t,src:i,quality:r,width:o[d]})}}({config:F,src:x,unoptimized:w,width:Z,quality:$,sizes:v,loader:V}),et=x,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:T.crossOrigin},es=a.useRef(E);a.useEffect(()=>{es.current=E},[E]);let el=a.useRef(z);a.useEffect(()=>{el.current=z},[z]);let er=s({isLazy:H,imgAttributes:ee,heightInt:G,widthInt:Z,qualityInt:$,className:b,imgStyle:K,blurStyle:Q,loading:y,config:F,fill:C,unoptimized:w,placeholder:M,loader:V,srcString:et,onLoadRef:es,onLoadingCompleteRef:el,setBlurComplete:J,setShowAltText:Y},T);return a.default.createElement(a.default.Fragment,null,a.default.createElement(p,Object.assign({},er,{ref:t})),j?a.default.createElement(o.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:s,blurHeight:l,blurDataURL:r,objectFit:n}=e,a=s||t,o=l||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&l?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:s,quality:l}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},6616:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return u},default:function(){return f}});var s=i(5893),l=i(1189),r=i.n(l),n=i(9008),a=i.n(n);i(5675);var o=i(7837);i(6569);var c=i(1664),d=i.n(c),u=!0;function f(e){let{posts:t}=e,i={title:"",slug:"/"},l=t.map((e,t)=>{let{title:i,slug:l,date:r,preview:n}=e;return(0,s.jsxs)("div",{className:t?"border-b-2":"border-y-2",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center mb-1",children:[(0,s.jsx)(d(),{className:"text-2xl",href:l,children:i}),(0,s.jsx)("div",{className:"opacity-50",children:r})]}),(0,s.jsx)("div",{children:n})]},l)});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"aagam's blog"})}),(0,s.jsxs)("main",{className:r().className,children:[(0,s.jsx)(o.Z,{currentPost:i,posts:[i,...t]}),(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-3 mt-4",children:[(0,s.jsx)("div",{className:"my-10",children:(0,s.jsx)("div",{className:"text-8xl w-3/4 font-junicode",children:"hi, from Aagam"})}),(0,s.jsx)("div",{className:"mb-8 text-xl italic"}),(0,s.jsxs)("div",{className:"font-bold text-xl opacity-75 flex flex-col gap-4",children:[(0,s.jsxs)("a",{href:"https://www.linkedin.com/in/aagam-dalal/",className:"flex flex-row gap-2 items-center",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"currentColor",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{d:"M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"})}),"LinkedIn"]}),(0,s.jsxs)("a",{className:"flex flex-row gap-2 items-center",href:"https://github.com/aadalal",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"currentColor",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})}),"GitHub"]})]}),(0,s.jsx)("div",{className:"flex flex-col mt-10",children:l})]})]})]})}},1189:function(e){e.exports={style:{fontFamily:"'__Inter_e7970e', '__Inter_Fallback_e7970e'",fontStyle:"normal"},className:"__className_e7970e"}},5675:function(e,t,i){i(3740)}},function(e){e.O(0,[996,236,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);