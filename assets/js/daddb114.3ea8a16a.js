"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65265"],{50076:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"a11y/readability","title":"Readability","description":"Improving the readability of the chart for visually impaired users.","source":"@site/tutorials/a11y/readability.mdx","sourceDirName":"a11y","slug":"/a11y/readability","permalink":"/lightweight-charts/tutorials/a11y/readability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Readability","pagination_title":"Readability","title":"Readability","description":"Improving the readability of the chart for visually impaired users.","keywords":["a11y","accessibility","screenreaders","keyboard","assistive"],"pagination_prev":"a11y/screenreader","pagination_next":"a11y/conclusion"},"sidebar":"tutorialsSidebar","previous":{"title":"Screen Readers","permalink":"/lightweight-charts/tutorials/a11y/screenreader"},"next":{"title":"Conclusion","permalink":"/lightweight-charts/tutorials/a11y/conclusion"}}'),s=n("85893"),a=n("50065");let r={sidebar_position:3,sidebar_label:"Readability",pagination_title:"Readability",title:"Readability",description:"Improving the readability of the chart for visually impaired users.",keywords:["a11y","accessibility","screenreaders","keyboard","assistive"],pagination_prev:"a11y/screenreader",pagination_next:"a11y/conclusion"},o=void 0,c={},l=[{value:"High contrast and scalable font size",id:"high-contrast-and-scalable-font-size",level:2},{value:"High contrast mode",id:"high-contrast-mode",level:3},{value:"Scalable font size",id:"scalable-font-size",level:3}];function h(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"high-contrast-and-scalable-font-size",children:"High contrast and scalable font size"}),"\n",(0,s.jsx)(t.p,{children:"Ensuring accessibility in web development means accommodating various user\npreferences and physical abilities. High contrast mode and scalable font size\nare two such distinct features that have been included in our chart, catering to\ndiverse user needs."}),"\n",(0,s.jsx)(t.h3,{id:"high-contrast-mode",children:"High contrast mode"}),"\n",(0,s.jsx)(t.p,{children:"Certain users with specific visual impairments may struggle to distinguish\nbetween colors or interpret text and image details in low contrast. For these\nusers, a high-contrast mode can be immensely helpful."}),"\n",(0,s.jsxs)(t.p,{children:["In our chart application, we leverage the built-in browser feature\n",(0,s.jsx)(t.code,{children:"window.matchMedia()"})," to ascertain if the user has indicated a preference for\nhigher contrast in their system settings."]}),"\n",(0,s.jsx)(t.p,{children:"Here's how we determine if the user prefers a high-contrast mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Check if user prefers high contrast mode\nfunction checkHighContrast() {\n    // Use window.matchMedia to check 'prefers-contrast' media feature\n    const highContrast = window.matchMedia('(prefers-contrast: high)').matches;\n    return highContrast; // Returns true if high contrast is enabled, false otherwise\n}\n\n// Subscribe to changes\nconst highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');\nhighContrastMediaQuery.addListener(() => {\n    setHighContrast(highContrastMediaQuery.matches);\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"setHighContrast"})," function could be implemented as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const seriesBaseContrastSettings = {\n    color: 'rgb(41, 98, 255)',\n    lineWidth: 2,\n};\nconst chartBaseContrastSettings = {\n    layout: {\n        textColor: '#191919',\n    },\n    grid: {\n        vertLines: {\n            color: '#D6DCDE',\n        },\n        horzLines: {\n            color: '#D6DCDE',\n        },\n    },\n};\nconst seriesHighContrastSettings = {\n    color: 'rgb(0, 0, 0)',\n    lineWidth: 4,\n};\nconst chartHighContrastSettings = {\n    layout: {\n        textColor: '#000000',\n    },\n    grid: {\n        vertLines: {\n            color: '#777777',\n        },\n        horzLines: {\n            color: '#777777',\n        },\n    },\n};\n\nfunction setHighContrast(enabled) {\n    mainSeries.applyOptions(\n        enabled ? seriesHighContrastSettings : seriesBaseContrastSettings\n    );\n    chart.applyOptions(\n        enabled ? chartHighContrastSettings : chartBaseContrastSettings\n    );\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Our ",(0,s.jsx)(t.code,{children:"setHighContrast(highContrast)"})," function updates the chart's colors based on\nthe user's preference. If the user prefers high contrast, a higher contrast\ncolor scheme is applied. If not, the colors switch back to the default, low-contrast scheme."]}),"\n",(0,s.jsx)(t.h3,{id:"scalable-font-size",children:"Scalable font size"}),"\n",(0,s.jsx)(t.p,{children:"Another key aspect of web accessibility is the option to scale font sizes.\nUsers with visual impairments may benefit from larger text sizes, improving\nreadability."}),"\n",(0,s.jsx)(t.p,{children:"We provide an option for these users to adjust the text size through a checkbox,\nwhich changes text size in the chart:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<input type="checkbox" id="large-font-checkbox" tabindex="0" />\n<label for="large-font-checkbox">Toggle Larger Font</label>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Then, we create an event listener in JavaScript for this checkbox input, which increases\nthe text size:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"function setFontSize(large) {\n    chart.applyOptions({\n        layout: {\n            fontSize: large ? 16 : 12,\n        },\n    });\n}\n\ndocument\n    .querySelector('#large-font-checkbox')\n    .addEventListener('change', event => {\n        setFontSize(event.target.checked);\n    });\n"})}),"\n",(0,s.jsx)(t.p,{children:"In this example, when the 'Increase Font Size' input is checked, the font size\nin the chart increases to 16px."}),"\n",(0,s.jsx)(t.p,{children:"Including these additional accessibility features adheres to the principles of\ncreating an inclusive web, where design embraces all user types, abilities, and\npreferences. Note that you should conduct rigorous accessibility testing before deployment."})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var i=n(67294);let s={},a=i.createContext(s);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);