(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BV8L:function(e,t,n){"use strict";n.r(t),n.d(t,"CommodityModule",function(){return f});var c=n("ofXK"),i=n("cI8z"),s=n("t0Ln"),a=n("tyNb"),o=n("fXoL"),r=n("aap8"),l=n("dcEH"),u=n("ShLT");function d(e,t){if(1&e&&o.Mb(0,"ed-station-section",5),2&e){const e=t.$implicit;o.ec("name",e?e.description:"Directory")}}const p=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["app-commodity"]],decls:7,vars:0,consts:[["navstart",""],["id","market","name","Market","description","Market state"],["id","buy","name","Buy","description","Buy commodities"],["id","sell","name","Sell","description","Sell commodities"],["id","compare","name","Compare","description","Compare markets"],[3,"name"]],template:function(e,t){1&e&&(o.Rb(0,"asc-navigation"),o.qc(1,d,1,1,"ng-template",null,0,o.rc),o.Mb(3,"asc-navigation-page",1),o.Mb(4,"asc-navigation-page",2),o.Mb(5,"asc-navigation-page",3),o.Mb(6,"asc-navigation-page",4),o.Qb())},directives:[r.a,l.a,u.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden;background-image:url(/assets/ship/sidewinder-mk-i/bay-start.png);background-size:cover}asc-tile-row[_ngcontent-%COMP%]{--asc-font-size:1.2vh}.spacer[_ngcontent-%COMP%]{display:flex;margin:var(-asc-spacing);padding:var(-asc-spacing);border-right:var(--asc-frame-border)}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({imports:[[a.d.forChild(p)],a.d]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({imports:[[c.b,i.a,s.a,g]]}),e})()},"G+1s":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var c=n("fXoL"),i=n("e8Ap");let s=(()=>{class e{constructor(){this.size=4}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["ed-icon"]],hostVars:4,hostBindings:function(e,t){2&e&&c.pc("width",t.size,"vh")("height",t.size,"vh")},inputs:{size:"size",icon:"icon"},decls:1,vars:5,consts:[[1,"icon",3,"inlineSVG"]],template:function(e,t){1&e&&c.Mb(0,"div",0),2&e&&(c.pc("width",t.size,"vh")("height",t.size,"vh"),c.ec("inlineSVG","assets/icons/"+t.icon+".svg"))},directives:[i.a],styles:[".icon[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex-direction:column}.icon[_ngcontent-%COMP%]{align-items:center;justify-content:center;justify-items:center;stroke-width:.3}"]}),e})()},IXfT:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return l}),n.d(t,"g",function(){return u});class c{}class i{}class s extends i{}class a extends s{constructor(){super(...arguments),this.resourceLocation="station/docked",this.hangar=!1}}class o extends s{constructor(){super(...arguments),this.resourceLocation="station/hangar",this.hangar=!0}}class r extends i{}class l extends r{constructor(){super(...arguments),this.resourceLocation="station/approach"}}class u extends i{constructor(){super(...arguments),this.resourceLocation="supercruise"}}},aap8:function(e,t,n){"use strict";n.d(t,"a",function(){return k});var c=n("fXoL"),i=n("quSY"),s=n("P7Tc"),a=n("NdHK"),o=n("dcEH"),r=n("tyNb"),l=n("iBBg"),u=n("qAme"),d=n("ofXK"),p=n("HZIp"),g=n("ZfcE"),f=n("e6+D");const h=["navstart"],b=["navend"];function m(e,t){1&e&&c.Nb(0)}const v=function(e){return{$implicit:e}};function y(e,t){if(1&e&&(c.Rb(0,"div",5),c.qc(1,m,1,0,"ng-container",6),c.Qb()),2&e){const e=c.bc();c.Ab(1),c.ec("ngTemplateOutlet",e.navStart)("ngTemplateOutletContext",c.gc(2,v,e.selected))}}function x(e,t){if(1&e&&c.Mb(0,"asc-icon",10),2&e){const e=c.bc().$implicit;c.ec("icon",e.icon)}}function C(e,t){1&e&&c.Mb(0,"div",11)}function O(e,t){if(1&e){const e=c.Sb();c.Pb(0),c.Rb(1,"asc-tile",7),c.Yb("press",function(){c.mc(e);const n=t.$implicit;return c.bc().onSelectPage(n)}),c.qc(2,x,1,1,"asc-icon",8),c.sc(3),c.Qb(),c.qc(4,C,1,0,"div",9),c.Ob()}if(2&e){const e=t.$implicit,n=c.bc();c.Ab(1),c.ec("selected",e===n.selected)("canFocus",!1),c.Ab(1),c.ec("ngIf",e.icon),c.Ab(1),c.uc(" ",e.name," "),c.Ab(1),c.ec("ngIf",e.spacer)}}function w(e,t){1&e&&c.Nb(0)}function M(e,t){if(1&e&&(c.Rb(0,"div",5),c.qc(1,w,1,0,"ng-container",6),c.Qb()),2&e){const e=c.bc();c.Ab(1),c.ec("ngTemplateOutlet",e.navEnd)("ngTemplateOutletContext",c.gc(2,v,e.selected))}}const P=function(e,t){return[2,e,90,t]};let k=(()=>{class e extends s.b{constructor(e,t,n,c,s,o){super(e,t,n),this.router=c,this.route=s,this.gamepadService=o,this.spacing=2,this.subscription=new i.a,this.subscription.add(this.gamepadService.controller1.subscribe(e=>{e.leftBumper===a.a.Click&&this.previousPage(),e.rightBumper===a.a.Click&&this.nextPage()}))}ngOnInit(){super.ngOnInit()}ngAfterViewInit(){this.nextPage()}onSelectPage(e){this.selected=e,this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0})}previousPage(){if(!this.selected&&this.pages.length>0)return void(this.selected=this.pages.get(0));const e=this.pages.toArray();for(let t=e.length-1;t>=0;t--)if(e[t]===this.selected){t>0&&(this.selected=e[t-1],this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0}));break}}nextPage(){if(!this.selected&&this.pages.length>0)return void(this.selected=this.pages.get(0));const e=this.pages.toArray();for(let t=0;t<=e.length-1;t++)if(e[t]===this.selected){t<=this.pages.length-2&&(this.selected=e[t+1],this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0}));break}}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(s.b,12),c.Lb(c.l),c.Lb(s.c),c.Lb(r.b),c.Lb(r.a),c.Lb(a.b))},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-navigation"]],contentQueries:function(e,t,n){if(1&e&&(c.Eb(n,h,1),c.Eb(n,b,1),c.Eb(n,o.a,0)),2&e){let e;c.ic(e=c.Zb())&&(t.navStart=e.first),c.ic(e=c.Zb())&&(t.navEnd=e.first),c.ic(e=c.Zb())&&(t.pages=e)}},inputs:{spacing:"spacing"},features:[c.zb([{provide:s.b,useExisting:Object(c.T)(()=>e)}]),c.xb],decls:9,vars:11,consts:[[3,"rect"],[3,"open"],["class","nav-template",4,"ngIf"],[3,"choice"],[4,"ngFor","ngForOf"],[1,"nav-template"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"selected","canFocus","press"],[3,"icon",4,"ngIf"],["class","spacer",4,"ngIf"],[3,"icon"],[1,"spacer"]],template:function(e,t){1&e&&(c.Rb(0,"asc-frame",0),c.Rb(1,"asc-frame-column",1),c.qc(2,y,2,4,"div",2),c.Qb(),c.Rb(3,"asc-frame-column",1),c.Rb(4,"asc-tile-row",3),c.qc(5,O,5,5,"ng-container",4),c.Qb(),c.Qb(),c.Rb(6,"asc-frame-column",1),c.qc(7,M,2,4,"div",2),c.Qb(),c.Qb(),c.Mb(8,"router-outlet")),2&e&&(c.ec("rect",c.hc(8,P,t.spacing,t.spacing)),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("ngIf",t.navStart),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("choice",!0),c.Ab(1),c.ec("ngForOf",t.pages),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("ngIf",t.navEnd))},directives:[l.a,u.a,d.j,p.a,d.i,r.e,d.m,g.a,f.a],styles:["asc-tile[_ngcontent-%COMP%]{--asc-font-size:1.2vh}.nav-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 auto;align-items:center}.spacer[_ngcontent-%COMP%]{display:flex;margin:var(-asc-spacing);padding:var(-asc-spacing);border-right:var(--asc-frame-border)}"]}),e})()},cI3Y:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var c=n("2Vo4"),i=n("l5mm"),s=n("IXfT"),a=n("fXoL"),o=n("hn8X");let r=(()=>{class e{constructor(e){this.spaceService=e,this.system=new c.a(void 0),this.location=new c.a(void 0),this.clock=new c.a(void 0),this.spaceService.getStarSystem("okinura").subscribe(e=>{this.system.next(e)});const t=new s.f;t.marketName="Bennett Gateway",this.location.next(t),this.updateClock(),Object(i.a)(1e3).subscribe(()=>{this.updateClock()})}updateClock(){const e=new Date,t=new s.a;e.setFullYear(e.getFullYear()+1286),t.date=e.toLocaleDateString("en-gb",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),t.time=e.toLocaleTimeString("en-gb",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"UTC"}),this.clock.next(t)}pushOkunira(){}}return e.\u0275fac=function(t){return new(t||e)(a.Vb(o.a))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dcEH:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var c=n("fXoL");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-navigation-page"]],inputs:{id:"id",icon:"icon",name:"name",description:"description",spacer:"spacer"},decls:0,vars:0,template:function(e,t){},styles:[""]}),e})()},"e6+D":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var c=n("fXoL"),i=n("ofXK"),s=n("e8Ap");const a=["*"];let o=(()=>{class e{constructor(){this.size="normal"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-icon"]],inputs:{icon:"icon",size:"size"},ngContentSelectors:a,decls:3,vars:3,consts:[[3,"ngClass","inlineSVG"],[3,"ngClass"]],template:function(e,t){1&e&&(c.dc(),c.Mb(0,"div",0),c.Rb(1,"div",1),c.cc(2),c.Qb()),2&e&&(c.ec("ngClass","icon-"+t.size)("inlineSVG",t.icon+".svg"),c.Ab(1),c.ec("ngClass","content-"+t.size))},directives:[i.h,s.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}.icon-normal[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:var(--asc-item-height);height:var(--asc-item-height)}.content-normal[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:var(--asc-spacing);margin-top:calc(var(--asc-item-height) * .25)}.content-normal[_ngcontent-%COMP%]:empty{display:none}.icon-text[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:calc(var(--asc-font-size) * 1.3);height:calc(var(--asc-font-size) * 1.3);margin-right:calc(var(--asc-spacing) * .5)}.content-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:var(--asc-spacing);margin-top:calc(var(--asc-font-size) * 1.4 * .25)}.content-text[_ngcontent-%COMP%]:empty{display:none}.icon-double[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:calc(var(--asc-item-height) * 2);height:calc(var(--asc-item-height) * 2);margin-right:calc(var(--asc-spacing) * .5)}.content-double[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:calc(var(--asc-item-height) * .75)}.content-double[_ngcontent-%COMP%]:empty{display:none}"]}),e})()}}]);