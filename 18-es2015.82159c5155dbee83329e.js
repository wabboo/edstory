(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{IXfT:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return l}),n.d(t,"g",function(){return u});class c{}class i{}class s extends i{}class a extends s{constructor(){super(...arguments),this.resourceLocation="station/docked",this.hangar=!1}}class o extends s{constructor(){super(...arguments),this.resourceLocation="station/hangar",this.hangar=!0}}class r extends i{}class l extends r{constructor(){super(...arguments),this.resourceLocation="station/approach"}}class u extends i{constructor(){super(...arguments),this.resourceLocation="supercruise"}}},O7TT:function(e,t,n){"use strict";n.r(t),n.d(t,"DirectoryModule",function(){return v});var c=n("ofXK"),i=n("tyNb"),s=n("quSY"),a=n("fXoL"),o=n("TP6R"),r=n("aap8"),l=n("dcEH"),u=n("ShLT");function g(e,t){if(1&e&&a.Mb(0,"ed-station-section",6),2&e){const e=t.$implicit;a.ec("name",e?e.name:"Directory")}}function d(e,t){if(1&e&&(a.Rb(0,"div",7),a.Rb(1,"div",8),a.sc(2),a.Qb(),a.Rb(3,"div",9),a.sc(4),a.Rb(5,"div",10),a.sc(6),a.Qb(),a.Qb(),a.Qb()),2&e){const e=a.bc();a.Ab(2),a.tc(e.ship.definition.model),a.Ab(2),a.tc(e.ship.name),a.Ab(2),a.uc("| ",e.ship.code,"")}}const p=[{path:"",component:(()=>{class e{constructor(e){this.shipService=e,this.subscription=new s.a,this.subscription.add(this.shipService.ship.subscribe(e=>{this.ship=e}))}ngOnInit(){}ngOnDestroy(){var e;null===(e=this.subscription)||void 0===e||e.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-directory"]],decls:9,vars:0,consts:[["navstart",""],["navend",""],["id","authorities","name","Authorities"],["id","factions","name","Factions"],["id","services","name","Services"],["id","people","name","People"],[3,"name"],[1,"ship-data"],[1,"ship-model"],[1,"ship-name"],[1,"ship-code"]],template:function(e,t){1&e&&(a.Rb(0,"asc-navigation"),a.qc(1,g,1,1,"ng-template",null,0,a.rc),a.qc(3,d,7,3,"ng-template",null,1,a.rc),a.Mb(5,"asc-navigation-page",2),a.Mb(6,"asc-navigation-page",3),a.Mb(7,"asc-navigation-page",4),a.Mb(8,"asc-navigation-page",5),a.Qb())},directives:[r.a,l.a,u.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden;background-image:url(/assets/backgrounds/main2.jpg);background-size:cover}asc-tile-row[_ngcontent-%COMP%]{--asc-font-size:1.2vh}.spacer[_ngcontent-%COMP%]{display:flex;margin:var(-asc-spacing);padding:var(-asc-spacing);border-right:var(--asc-frame-border)}.ship-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;color:#fff;text-shadow:2px 2px rgba(0,0,0,.8);padding-top:1vh;padding-bottom:1vh;width:100%}.ship-data[_ngcontent-%COMP%]   .ship-model[_ngcontent-%COMP%]{font-size:2vh;font-weight:700;color:var(--asc-primary-color)}.ship-data[_ngcontent-%COMP%]   .ship-name[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:1.7vh}.ship-data[_ngcontent-%COMP%]   .ship-code[_ngcontent-%COMP%]{margin-left:var(--asc-spacing);filter:brightness(60%)}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[i.d.forChild(p)],i.d]}),e})();var h=n("cI8z"),b=n("t0Ln");let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[c.b,h.a,b.a,f]]}),e})()},aap8:function(e,t,n){"use strict";n.d(t,"a",function(){return A});var c=n("fXoL"),i=n("quSY"),s=n("P7Tc"),a=n("NdHK"),o=n("dcEH"),r=n("tyNb"),l=n("iBBg"),u=n("qAme"),g=n("ofXK"),d=n("HZIp"),p=n("ZfcE"),f=n("e6+D");const h=["navstart"],b=["navend"];function v(e,t){1&e&&c.Nb(0)}const m=function(e){return{$implicit:e}};function x(e,t){if(1&e&&(c.Rb(0,"div",5),c.qc(1,v,1,0,"ng-container",6),c.Qb()),2&e){const e=c.bc();c.Ab(1),c.ec("ngTemplateOutlet",e.navStart)("ngTemplateOutletContext",c.gc(2,m,e.selected))}}function y(e,t){if(1&e&&c.Mb(0,"asc-icon",10),2&e){const e=c.bc().$implicit;c.ec("icon",e.icon)}}function O(e,t){1&e&&c.Mb(0,"div",11)}function C(e,t){if(1&e){const e=c.Sb();c.Pb(0),c.Rb(1,"asc-tile",7),c.Yb("press",function(){c.mc(e);const n=t.$implicit;return c.bc().onSelectPage(n)}),c.qc(2,y,1,1,"asc-icon",8),c.sc(3),c.Qb(),c.qc(4,O,1,0,"div",9),c.Ob()}if(2&e){const e=t.$implicit,n=c.bc();c.Ab(1),c.ec("selected",e===n.selected)("canFocus",!1),c.Ab(1),c.ec("ngIf",e.icon),c.Ab(1),c.uc(" ",e.name," "),c.Ab(1),c.ec("ngIf",e.spacer)}}function w(e,t){1&e&&c.Nb(0)}function P(e,t){if(1&e&&(c.Rb(0,"div",5),c.qc(1,w,1,0,"ng-container",6),c.Qb()),2&e){const e=c.bc();c.Ab(1),c.ec("ngTemplateOutlet",e.navEnd)("ngTemplateOutletContext",c.gc(2,m,e.selected))}}const M=function(e){return[2,e,8]};let A=(()=>{class e extends s.b{constructor(e,t,n,c,s,o){super(e,t,n),this.router=c,this.route=s,this.gamepadService=o,this.spacing=2,this.subscription=new i.a,this.subscription.add(this.gamepadService.controller1.subscribe(e=>{e.leftBumper===a.a.Click&&this.previousPage(),e.rightBumper===a.a.Click&&this.nextPage()}))}ngOnInit(){super.ngOnInit()}ngAfterViewInit(){this.nextPage()}onSelectPage(e){this.selected=e,this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0})}previousPage(){if(!this.selected&&this.pages.length>0)return void(this.selected=this.pages.get(0));const e=this.pages.toArray();for(let t=e.length-1;t>=0;t--)if(e[t]===this.selected){t>0&&(this.selected=e[t-1],this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0}));break}}nextPage(){if(!this.selected&&this.pages.length>0)return void(this.selected=this.pages.get(0));const e=this.pages.toArray();for(let t=0;t<=e.length-1;t++)if(e[t]===this.selected){t<=this.pages.length-2&&(this.selected=e[t+1],this.router.navigate([this.selected.id],{relativeTo:this.route,replaceUrl:!0}));break}}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(s.b,12),c.Lb(c.l),c.Lb(s.c),c.Lb(r.b),c.Lb(r.a),c.Lb(a.b))},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-navigation"]],contentQueries:function(e,t,n){if(1&e&&(c.Eb(n,h,1),c.Eb(n,b,1),c.Eb(n,o.a,0)),2&e){let e;c.ic(e=c.Zb())&&(t.navStart=e.first),c.ic(e=c.Zb())&&(t.navEnd=e.first),c.ic(e=c.Zb())&&(t.pages=e)}},inputs:{spacing:"spacing"},features:[c.zb([{provide:s.b,useExisting:Object(c.T)(()=>e)}]),c.xb],decls:9,vars:10,consts:[[3,"rect"],[3,"open"],["class","nav-template",4,"ngIf"],[3,"choice"],[4,"ngFor","ngForOf"],[1,"nav-template"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"selected","canFocus","press"],[3,"icon",4,"ngIf"],["class","spacer",4,"ngIf"],[3,"icon"],[1,"spacer"]],template:function(e,t){1&e&&(c.Rb(0,"asc-frame",0),c.Rb(1,"asc-frame-column",1),c.qc(2,x,2,4,"div",2),c.Qb(),c.Rb(3,"asc-frame-column",1),c.Rb(4,"asc-tile-row",3),c.qc(5,C,5,5,"ng-container",4),c.Qb(),c.Qb(),c.Rb(6,"asc-frame-column",1),c.qc(7,P,2,4,"div",2),c.Qb(),c.Qb(),c.Mb(8,"router-outlet")),2&e&&(c.ec("rect",c.gc(8,M,t.spacing)),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("ngIf",t.navStart),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("choice",!0),c.Ab(1),c.ec("ngForOf",t.pages),c.Ab(1),c.ec("open",!0),c.Ab(1),c.ec("ngIf",t.navEnd))},directives:[l.a,u.a,g.j,d.a,g.i,r.e,g.m,p.a,f.a],styles:["asc-tile[_ngcontent-%COMP%]{--asc-font-size:1.2vh}.nav-template[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 auto;align-items:center}.spacer[_ngcontent-%COMP%]{display:flex;margin:var(-asc-spacing);padding:var(-asc-spacing);border-right:var(--asc-frame-border)}"]}),e})()},cI3Y:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var c=n("2Vo4"),i=n("l5mm"),s=n("IXfT"),a=n("fXoL"),o=n("hn8X");let r=(()=>{class e{constructor(e){this.spaceService=e,this.system=new c.a(void 0),this.location=new c.a(void 0),this.clock=new c.a(void 0),this.spaceService.getStarSystem("okinura").subscribe(e=>{this.system.next(e)});const t=new s.f;t.marketName="Bennett Gateway",this.location.next(t),this.updateClock(),Object(i.a)(1e3).subscribe(()=>{this.updateClock()})}updateClock(){const e=new Date,t=new s.a;e.setFullYear(e.getFullYear()+1286),t.date=e.toLocaleDateString("en-gb",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),t.time=e.toLocaleTimeString("en-gb",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"UTC"}),this.clock.next(t)}pushOkunira(){}}return e.\u0275fac=function(t){return new(t||e)(a.Vb(o.a))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},dcEH:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var c=n("fXoL");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-navigation-page"]],inputs:{id:"id",icon:"icon",name:"name",description:"description",spacer:"spacer"},decls:0,vars:0,template:function(e,t){},styles:[""]}),e})()},"e6+D":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var c=n("fXoL"),i=n("ofXK"),s=n("e8Ap");const a=["*"];let o=(()=>{class e{constructor(){this.size="normal"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-icon"]],inputs:{icon:"icon",size:"size"},ngContentSelectors:a,decls:3,vars:3,consts:[[3,"ngClass","inlineSVG"],[3,"ngClass"]],template:function(e,t){1&e&&(c.dc(),c.Mb(0,"div",0),c.Rb(1,"div",1),c.cc(2),c.Qb()),2&e&&(c.ec("ngClass","icon-"+t.size)("inlineSVG",t.icon+".svg"),c.Ab(1),c.ec("ngClass","content-"+t.size))},directives:[i.h,s.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}.icon-normal[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:calc(var(--asc-item-height) * var(--asc-scaling));height:calc(var(--asc-item-height) * var(--asc-scaling))}.content-normal[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:calc(var(--asc-spacing) * var(--asc-scaling));margin-top:calc(var(--asc-item-height) * .25 * var(--asc-scaling))}.content-normal[_ngcontent-%COMP%]:empty{display:none}.icon-text[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:calc(var(--asc-font-size) * 1.3 * var(--asc-scaling));height:calc(var(--asc-font-size) * 1.3 * var(--asc-scaling));margin-right:calc(var(--asc-spacing) * .5 * var(--asc-scaling))}.content-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:calc(var(--asc-spacing) * var(--asc-scaling));margin-top:calc(var(--asc-font-size) * 1.4 * .25 * var(--asc-scaling))}.content-text[_ngcontent-%COMP%]:empty{display:none}.icon-double[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;width:calc(var(--asc-item-height) * 2 * var(--asc-scaling));height:calc(var(--asc-item-height) * 2 * var(--asc-scaling));margin-right:calc(var(--asc-spacing) * .5 * var(--asc-scaling))}.content-double[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:calc(var(--asc-item-height) * .75 * var(--asc-scaling))}.content-double[_ngcontent-%COMP%]:empty{display:none}"]}),e})()}}]);