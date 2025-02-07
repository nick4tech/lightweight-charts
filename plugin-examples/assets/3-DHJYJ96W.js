var m=Object.defineProperty;var f=(r,t,o)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var e=(r,t,o)=>f(r,typeof t!="symbol"?t+"":t,o);import{f as _,L as w,K as b}from"./lightweight-charts.production-Cqo-HW7Q.js";import{g as S}from"./sample-data-x_8-FZm1.js";import{f as C}from"./full-width-DhW7rAVF.js";const x={..._,lowColor:"rgb(50, 50, 255)",highColor:"rgb(255, 50, 50)",lowValue:0,highValue:100,opacity:.8};function h(r){const t=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(!t)throw new Error("Invalid RGB string");return[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]}class I{constructor(t,o){e(this,"color1");e(this,"color2");this.color1=h(t),this.color2=h(o)}createInterpolator(t,o){const s=o-t,i=[this.color2[0]-this.color1[0],this.color2[1]-this.color1[1],this.color2[2]-this.color1[2]];return l=>{const a=(l-t)/s;return`rgb(${[Math.round(this.color1[0]+i[0]*a),Math.round(this.color1[1]+i[1]*a),Math.round(this.color1[2]+i[2]*a)].join(",")})`}}}class R{constructor(){e(this,"_data",null);e(this,"_options",null)}draw(t){t.useBitmapCoordinateSpace(o=>this._drawImpl(o))}update(t,o){this._data=t,this._options=o}_drawImpl(t){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const o=this._options,s=new I(o.lowColor,o.highColor).createInterpolator(o.lowValue,o.highValue),i=this._data.bars.map(a=>({color:s(a.originalData.value),x:a.x})),l=this._data.barSpacing/2;for(let a=this._data.visibleRange.from;a<this._data.visibleRange.to;a++){const n=i[a],c=C(n.x,l,t.horizontalPixelRatio),p=0,g=t.bitmapSize.height;t.context.fillStyle=n.color||"rgba(0, 0, 0, 0)",t.context.fillRect(c.position,p,c.length,g)}}}class V{constructor(){e(this,"_renderer");this._renderer=new R}priceValueBuilder(t){return[NaN]}isWhitespace(t){return t.value===void 0}renderer(){return this._renderer}update(t,o){this._renderer.update(t,o)}defaultOptions(){return x}}const d=window.chart=w("chart",{autoSize:!0}),u=S(),v=new V,B=d.addCustomSeries(v,{lowValue:0,highValue:1e3});B.setData(u);const D=d.addSeries(b,{color:"black"});D.setData(u);
