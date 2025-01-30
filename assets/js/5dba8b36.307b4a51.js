"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94439"],{83093:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"plugins/pixel-perfect-rendering/widths/candlestick","title":"Candlestick Width Calculations","description":"Describes the calculation for candlestick body widths","source":"@site/versioned_docs/version-4.1/plugins/pixel-perfect-rendering/widths/candlestick.md","sourceDirName":"plugins/pixel-perfect-rendering/widths","slug":"/plugins/pixel-perfect-rendering/widths/candlestick","permalink":"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/candlestick","draft":false,"unlisted":false,"tags":[],"version":"4.1","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"sidebar_label":"Candlesticks","pagination_title":"Candlestick Widths","title":"Candlestick Width Calculations","description":"Describes the calculation for candlestick body widths","keywords":["plugins","extensions","rendering","canvas","bitmap","media","pixels","candlestick","width"]},"sidebar":"docsSidebar","previous":{"title":"Pixel Perfect Rendering","permalink":"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/"},"next":{"title":"Columns","permalink":"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/columns"}}'),a=n("85893"),r=n("50065");let s={sidebar_position:0,sidebar_label:"Candlesticks",pagination_title:"Candlestick Widths",title:"Candlestick Width Calculations",description:"Describes the calculation for candlestick body widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","candlestick","width"]},c=void 0,o={},l=[];function d(e){let i={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsxs)(i.p,{children:["It is recommend that you first read the ",(0,a.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/",children:"Pixel Perfect Rendering"})," page."]})}),"\n",(0,a.jsx)(i.p,{children:"The following functions can be used to get the calculated width that the library would use for a candlestick at a specific bar spacing and device pixel ratio."}),"\n",(0,a.jsx)(i.p,{children:"Below a bar spacing of 4, the library will attempt to use as large a width as possible without the possibility of overlapping, whilst above 4 then the width will start to trend towards an 80% width of the available space."}),"\n",(0,a.jsx)(i.admonition,{type:"warning",children:(0,a.jsxs)(i.p,{children:["It is expected that candles can overlap slightly at smaller bar spacings (more pronounced on lower resolution devices). This produces a more readable chart. If you need to ensure that bars can never overlap then rather use the widths for ",(0,a.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/columns",children:"Columns"})," or the ",(0,a.jsx)(i.a,{href:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/full-bar-width",children:"full bar width"})," calculation."]})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-typescript",children:"function optimalCandlestickWidth(\n    barSpacing: number,\n    pixelRatio: number\n): number {\n    const barSpacingSpecialCaseFrom = 2.5;\n    const barSpacingSpecialCaseTo = 4;\n    const barSpacingSpecialCaseCoeff = 3;\n    if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {\n        return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);\n    }\n    // coeff should be 1 on small barspacing and go to 0.8 while bar spacing grows\n    const barSpacingReducingCoeff = 0.2;\n    const coeff =\n        1 -\n        (barSpacingReducingCoeff *\n            Math.atan(\n                Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo\n            )) /\n            (Math.PI * 0.5);\n    const res = Math.floor(barSpacing * coeff * pixelRatio);\n    const scaledBarSpacing = Math.floor(barSpacing * pixelRatio);\n    const optimal = Math.min(res, scaledBarSpacing);\n    return Math.max(Math.floor(pixelRatio), optimal);\n}\n\n/**\n * Calculates the candlestick width that the library would use for the current\n * bar spacing.\n * @param barSpacing - bar spacing in media coordinates\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns The width (in bitmap coordinates) that the chart would use to draw a candle body\n */\nexport function candlestickWidth(\n    barSpacing: number,\n    horizontalPixelRatio: number\n): number {\n    let width = optimalCandlestickWidth(barSpacing, horizontalPixelRatio);\n    if (width >= 2) {\n        const wickWidth = Math.floor(horizontalPixelRatio);\n        if (wickWidth % 2 !== width % 2) {\n            width--;\n        }\n    }\n    return width;\n}\n"})})]})}function p(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return s}});var t=n(67294);let a={},r=t.createContext(a);function s(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);