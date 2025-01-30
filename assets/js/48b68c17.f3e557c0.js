"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76994"],{56063:function(e,i,l){l.r(i),l.d(i,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>t,contentTitle:()=>d});var n=JSON.parse('{"id":"api/interfaces/SeriesOptionsCommon","title":"Interface: SeriesOptionsCommon","description":"Represents options common for all types of series","source":"@site/versioned_docs/version-5.0/api/interfaces/SeriesOptionsCommon.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/SeriesOptionsCommon","permalink":"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon","draft":false,"unlisted":false,"tags":[],"version":"5.0","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),s=l("85893"),r=l("50065");let a={pagination_next:null,pagination_prev:null},d="Interface: SeriesOptionsCommon",c={},t=[{value:"Properties",id:"properties",level:2},{value:"lastValueVisible",id:"lastvaluevisible",level:3},{value:"Default Value",id:"default-value",level:4},{value:"title",id:"title",level:3},{value:"Default Value",id:"default-value-1",level:4},{value:"priceScaleId?",id:"pricescaleid",level:3},{value:"Default Value",id:"default-value-2",level:4},{value:"visible",id:"visible",level:3},{value:"Default Value",id:"default-value-3",level:4},{value:"priceLineVisible",id:"pricelinevisible",level:3},{value:"Default Value",id:"default-value-4",level:4},{value:"priceLineSource",id:"pricelinesource",level:3},{value:"Default Value",id:"default-value-5",level:4},{value:"priceLineWidth",id:"pricelinewidth",level:3},{value:"Default Value",id:"default-value-6",level:4},{value:"priceLineColor",id:"pricelinecolor",level:3},{value:"Default Value",id:"default-value-7",level:4},{value:"priceLineStyle",id:"pricelinestyle",level:3},{value:"Default Value",id:"default-value-8",level:4},{value:"priceFormat",id:"priceformat",level:3},{value:"Default Value",id:"default-value-9",level:4},{value:"baseLineVisible",id:"baselinevisible",level:3},{value:"Default Value",id:"default-value-10",level:4},{value:"baseLineColor",id:"baselinecolor",level:3},{value:"Default Value",id:"default-value-11",level:4},{value:"baseLineWidth",id:"baselinewidth",level:3},{value:"Default Value",id:"default-value-12",level:4},{value:"baseLineStyle",id:"baselinestyle",level:3},{value:"Default Value",id:"default-value-13",level:4},{value:"autoscaleInfoProvider?",id:"autoscaleinfoprovider",level:3},{value:"Default Value",id:"default-value-14",level:4},{value:"Examples",id:"examples",level:4}];function o(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"interface-seriesoptionscommon",children:"Interface: SeriesOptionsCommon"})}),"\n",(0,s.jsx)(i.p,{children:"Represents options common for all types of series"}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"lastvaluevisible",children:"lastValueVisible"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"lastValueVisible"}),": ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Visibility of the label with the latest visible price on the price scale."}),"\n",(0,s.jsx)(i.h4,{id:"default-value",children:"Default Value"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"true"}),", ",(0,s.jsx)(i.code,{children:"false"})," for yield curve charts"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"title",children:"title"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"title"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"You can name series when adding it to a chart. This name will be displayed on the label next to the last value label."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"''"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricescaleid",children:"priceScaleId?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"priceScaleId"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Target price scale to bind new series to."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-2",children:"Default Value"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"'right'"})," if right scale is visible and ",(0,s.jsx)(i.code,{children:"'left'"})," otherwise"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"visible",children:"visible"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"visible"}),": ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Visibility of the series.\nIf the series is hidden, everything including price lines, baseline, price labels and markers, will also be hidden.\nPlease note that hiding a series is not equivalent to deleting it, since hiding does not affect the timeline at all, unlike deleting where the timeline can be changed (some points can be deleted)."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-3",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"true"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricelinevisible",children:"priceLineVisible"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceLineVisible"}),": ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Show the price line. Price line is a horizontal line indicating the last price of the series."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-4",children:"Default Value"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"true"}),", ",(0,s.jsx)(i.code,{children:"false"})," for yield curve charts"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricelinesource",children:"priceLineSource"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceLineSource"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/enumerations/PriceLineSource",children:(0,s.jsx)(i.code,{children:"PriceLineSource"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The source to use for the value of the price line."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-5",children:"Default Value"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"{@link PriceLineSource.LastBar}\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricelinewidth",children:"priceLineWidth"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceLineWidth"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/LineWidth",children:(0,s.jsx)(i.code,{children:"LineWidth"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Width of the price line."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-6",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"1"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricelinecolor",children:"priceLineColor"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceLineColor"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Color of the price line.\nBy default, its color is set by the last bar color (or by line color on Line and Area charts)."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-7",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"''"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pricelinestyle",children:"priceLineStyle"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceLineStyle"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/enumerations/LineStyle",children:(0,s.jsx)(i.code,{children:"LineStyle"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Price line style."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-8",children:"Default Value"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"{@link LineStyle.Dashed}\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"priceformat",children:"priceFormat"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"priceFormat"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/PriceFormat",children:(0,s.jsx)(i.code,{children:"PriceFormat"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Price format."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-9",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"{ type: 'price', precision: 2, minMove: 0.01 }"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"baselinevisible",children:"baseLineVisible"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"baseLineVisible"}),": ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Visibility of base line. Suitable for percentage and ",(0,s.jsx)(i.code,{children:"IndexedTo100"})," scales."]}),"\n",(0,s.jsx)(i.h4,{id:"default-value-10",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"true"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"baselinecolor",children:"baseLineColor"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"baseLineColor"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Color of the base line in ",(0,s.jsx)(i.code,{children:"IndexedTo100"})," mode."]}),"\n",(0,s.jsx)(i.h4,{id:"default-value-11",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"'#B2B5BE'"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"baselinewidth",children:"baseLineWidth"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"baseLineWidth"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/LineWidth",children:(0,s.jsx)(i.code,{children:"LineWidth"})})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Base line width. Suitable for percentage and ",(0,s.jsx)(i.code,{children:"IndexedTo10"})," scales."]}),"\n",(0,s.jsx)(i.h4,{id:"default-value-12",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"1"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"baselinestyle",children:"baseLineStyle"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"baseLineStyle"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/enumerations/LineStyle",children:(0,s.jsx)(i.code,{children:"LineStyle"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Base line style. Suitable for percentage and indexedTo100 scales."}),"\n",(0,s.jsx)(i.h4,{id:"default-value-13",children:"Default Value"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"{@link LineStyle.Solid}\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"autoscaleinfoprovider",children:"autoscaleInfoProvider?"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"optional"})," ",(0,s.jsx)(i.strong,{children:"autoscaleInfoProvider"}),": ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/AutoscaleInfoProvider",children:(0,s.jsx)(i.code,{children:"AutoscaleInfoProvider"})})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Override the default ",(0,s.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/AutoscaleInfo",children:"AutoscaleInfo"})," provider.\nBy default, the chart scales data automatically based on visible data range.\nHowever, for some reasons one could require overriding this behavior."]}),"\n",(0,s.jsx)(i.h4,{id:"default-value-14",children:"Default Value"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"undefined"})}),"\n",(0,s.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const firstSeries = chart.addSeries(LineSeries, {\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n    }),\n});\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const firstSeries = chart.addSeries(LineSeries, {\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n        margins: {\n            above: 10,\n            below: 10,\n        },\n    }),\n});\n"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"const firstSeries = chart.addSeries(LineSeries, {\n    autoscaleInfoProvider: original => {\n        const res = original();\n        if (res !== null) {\n            res.priceRange.minValue -= 10;\n            res.priceRange.maxValue += 10;\n        }\n        return res;\n    },\n});\n"})})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,i,l){l.d(i,{Z:function(){return d},a:function(){return a}});var n=l(67294);let s={},r=n.createContext(s);function a(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);