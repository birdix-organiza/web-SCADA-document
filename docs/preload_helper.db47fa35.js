!function(){"use strict";var t="/web-SCADA-document".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"web-SCADA-document","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.dcfa9bd5.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.ea2041b8.async.js",65],["my-docs__usage__index.zh-CN.md.c8d2e197.async.js",110],["my-docs__install__index.zh-CN.md.e61d5e4c.async.js",115],["189.e8c51481.chunk.css",189],["189.8df2ff42.async.js",189],["my-docs__usage__draw-line.md.b6ae64ae.async.js",240],["my-docs__usage__make-components.zh-CN.md.1e0c3d5e.async.js",269],["my-docs__usage__bind-component-attributes.md.65ece92d.async.js",272],["my-docs__usage__ui-introduction.zh-CN.md.495fc88d.async.js",295],["my-docs__usage__draw-text.md.ef8053cf.async.js",301],["my-docs__usage__index.md.779e406a.async.js",326],["my-docs__usage__draw-line.zh-CN.md.29efbc42.async.js",373],["my-docs__usage__bind-component-attributes.zh-CN.md.44d70bb5.async.js",401],["my-docs__install__index.md.4ef14210.async.js",430],["my-docs__usage__draw-ellipse.zh-CN.md.6677266c.async.js",448],["my-docs__usage__transform.md.1ebcd3d0.async.js",491],["my-docs__usage__draw-text.zh-CN.md.a324ce94.async.js",511],["my-docs__usage__custorm-setup.md.efedd7e7.async.js",513],["nm__dumi__theme-default__layouts__DocLayout__index.ab556e3c.async.js",519],["my-docs__usage__draw-ellipse.md.979d4621.async.js",522],["my-docs__usage__draw-rectangle.md.ccd78956.async.js",541],["my-docs__usage__preview.zh-CN.md.c806a969.async.js",558],["my-docs__index.md.875bef81.async.js",615],["my-docs__usage__add-image.zh-CN.md.94110d63.async.js",726],["my-docs__usage__add-image.md.458a8171.async.js",732],["my-docs__usage__draw-rectangle.zh-CN.md.1ff9c573.async.js",739],["my-docs__index.zh-CN.md.488e62fa.async.js",743],["my-docs__usage__bind-attributes.md.a5f1143c.async.js",787],["my-docs__usage__bind-attributes.zh-CN.md.6708fae2.async.js",819],["my-docs__usage__make-components.md.5f673f42.async.js",831],["my-docs__usage__transform.zh-CN.md.cec6b06b.async.js",870],["my-docs__usage__ui-introduction.md.f5cb7f3d.async.js",886],["my-docs__usage__preview.md.e1dcdac3.async.js",918],["dumi__tmp-production__dumi__theme__ContextWrapper.194d778e.async.js",923],["my-docs__usage__custorm-setup.zh-CN.md.66dca058.async.js",985]],"r":{"/*":[2,3,6,7,21,36],"/":[25,6,7,21,36],"/install":[16,6,7,21,36],"/usage":[13,6,7,21,36],"/zh-CN/":[29,6,7,21,36],"/~demos/:id":[0,1,36],"/usage/bind-component-attributes":[10,6,7,21,36],"/usage/bind-attributes":[30,6,7,21,36],"/usage/make-components":[32,6,7,21,36],"/usage/ui-introduction":[34,6,7,21,36],"/usage/draw-rectangle":[23,6,7,21,36],"/zh-CN/install":[5,6,7,21,36],"/usage/custorm-setup":[20,6,7,21,36],"/usage/draw-ellipse":[22,6,7,21,36],"/zh-CN/usage":[4,6,7,21,36],"/usage/add-image":[27,6,7,21,36],"/usage/draw-line":[8,6,7,21,36],"/usage/draw-text":[12,6,7,21,36],"/usage/transform":[18,6,7,21,36],"/usage/preview":[35,6,7,21,36],"/zh-CN/usage/bind-component-attributes":[15,6,7,21,36],"/zh-CN/usage/bind-attributes":[31,6,7,21,36],"/zh-CN/usage/make-components":[9,6,7,21,36],"/zh-CN/usage/ui-introduction":[11,6,7,21,36],"/zh-CN/usage/draw-rectangle":[28,6,7,21,36],"/zh-CN/usage/custorm-setup":[37,6,7,21,36],"/zh-CN/usage/draw-ellipse":[17,6,7,21,36],"/zh-CN/usage/add-image":[26,6,7,21,36],"/zh-CN/usage/draw-line":[14,6,7,21,36],"/zh-CN/usage/draw-text":[19,6,7,21,36],"/zh-CN/usage/transform":[33,6,7,21,36],"/zh-CN/usage/preview":[24,6,7,21,36]}},{publicPath:"/web-SCADA-document/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();