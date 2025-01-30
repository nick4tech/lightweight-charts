import{createChart as t}from"lightweight-charts";!function(){let e=`
                    :host {
                        display: block;
                    }
                    :host[hidden] {
                        display: none;
                    }
                    .chart-container {
                        height: 100%;
                        width: 100%;
                    }
                `;class i extends HTMLElement{static get observedAttributes(){return["type","autosize"]}static getChartSeriesConstructorName(t){return`add${t.charAt(0).toUpperCase()+t.slice(1)}Series`}constructor(){super(),this.chart=void 0,this.series=void 0,this.__data=[],this._resizeEventHandler=()=>this._resizeHandler()}connectedCallback(){this.attachShadow({mode:"open"}),this._upgradeProperty("type"),this._upgradeProperty("autosize"),this._tryLoadInitialProperty("data");let i=document.createElement("div");i.setAttribute("class","chart-container");let s=document.createElement("style");s.textContent=e,this.shadowRoot.append(s,i),this.chart=t(i),this.setTypeAndData(),["options","series-options","pricescale-options","timescale-options"].forEach(t=>{this._tryLoadInitialProperty(t)}),this.autosize&&window.addEventListener("resize",this._resizeEventHandler)}_tryLoadInitialProperty(t){if(this.hasAttribute(t)){let e;let i=this.getAttribute(t);try{e=JSON.parse(i)}catch(e){console.error(`Unable to read attribute ${t}'s value during initialisation.`);return}this[t.split("-").map((t,e)=>e<1?t:`${t.charAt(0).toUpperCase()}${t.slice(1)}`).join("")]=e,this.removeAttribute(t)}}setTypeAndData(){this.series&&this.chart&&this.chart.removeSeries(this.series),this.series=this.chart[i.getChartSeriesConstructorName(this.type)](),this.series.setData(this.data)}_upgradeProperty(t){if(this.hasOwnProperty(t)){let e=this[t];delete this[t],this[t]=e}}disconnectedCallback(){this.chart&&(this.chart.remove(),this.chart=null),window.removeEventListener("resize",this._resizeEventHandler)}set type(t){this.setAttribute("type",t||"line")}get type(){return this.getAttribute("type")||"line"}set autosize(t){t?this.setAttribute("autosize",""):this.removeAttribute("autosize")}get autosize(){return this.hasAttribute("autosize")}set data(t){let e=t;"object"==typeof e&&Array.isArray(e)||(e=[],console.warn("Lightweight Charts: Data should be an array")),this.__data=e,this.series&&this.series.setData(this.__data)}get data(){return this.__data}set options(t){this.chart&&this.chart.applyOptions(t)}get options(){return this.chart?this.chart.options():null}set seriesOptions(t){this.series&&this.series.applyOptions(t)}get seriesOptions(){return this.series?this.series.options():null}set priceScaleOptions(t){this.chart&&this.chart.priceScale().applyOptions(t)}get priceScaleOptions(){return this.series?this.chart.priceScale().options():null}set timeScaleOptions(t){this.chart&&this.chart.timeScale().applyOptions(t)}get timeScaleOptions(){return this.series?this.chart.timeScale().options():null}attributeChangedCallback(t,e,i){if(this.chart)switch(t){case"type":this.data=[],this.setTypeAndData();break;case"autosize":null!==i?(window.addEventListener("resize",()=>this._resizeEventHandler),this._resizeEventHandler()):window.removeEventListener("resize",this._resizeEventHandler)}}_resizeHandler(){let t=this.shadowRoot.querySelector("div.chart-container");if(!this.chart||!t)return;let e=t.getBoundingClientRect();this.chart.resize(e.width,e.height)}}window.customElements.define("lightweight-chart",i)}();