(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AZc8:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var i=n("fXoL"),s=function(e){return e[e.North=0]="North",e[e.East=1]="East",e[e.West=2]="West",e[e.South=3]="South",e[e.NextPage=4]="NextPage",e[e.PreviousPage=5]="PreviousPage",e[e.Activate=6]="Activate",e[e.Exit=7]="Exit",e}({});let a=(()=>{class e{constructor(e,t,n){this.parent=e,this.element=t,this.ui=n}get x(){var e,t,n;return null===(n=null===(t=null===(e=this.element)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.x}get y(){var e,t,n;return null===(n=null===(t=null===(e=this.element)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.y}ngOnInit(){this.focus&&this.ui.setFocus(this)}getParent(){return this.parent}getChildren(){return this.children.toArray()}isContainer(){return!0}isFocussed(){return this.ui.isFocussed(this)}performCommand(e){switch(e){case s.North:case s.East:case s.South:case s.West:const t=this.locateNextElement(this,e);t&&(this.ui.setFocus(t),t.element.nativeElement.scrollIntoView())}return!1}locateNextElement(e,t,n=[]){let i,a;n.push(this);for(const o of this.getChildren()){switch(t){case s.North:o.y<e.y&&(!i||o.y>i.y)&&(a=o);break;case s.East:o.x>e.x&&(!i||o.x<i.x)&&(a=o);break;case s.South:o.y>e.y&&(!i||o.y<i.y)&&(a=o);break;case s.West:o.x<e.x&&(!i||o.x>i.x)&&(a=o)}-1===n.indexOf(a)&&(i=a)}return i&&i.isContainer()&&(i=i.locateNextElement(e,t,n)),!i&&this.getParent()&&(i=this.getParent().locateNextElement(e,t,n)),i}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(e,8),i.Lb(i.l),i.Lb(o))},e.\u0275dir=i.Gb({type:e,contentQueries:function(t,n,s){if(1&t&&i.Eb(s,e,1),2&t){let e;i.ic(e=i.Zb())&&(n.children=e)}},inputs:{focus:"focus"}}),e})(),o=(()=>{class e{constructor(){}sendCommand(e){this.focusElement&&this.focusElement.performCommand(e)}setFocus(e){this.focusElement=e}isFocussed(e){let t=this.focusElement;for(;t;){if(e===t)return!0;t=t.getParent()}return!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Lh2f:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var i=n("fXoL"),s=n("P7Tc"),a=n("rVAJ"),o=n("iBBg"),c=n("0B5Y"),r=n("ofXK");function u(e,t){if(1&e&&(i.Pb(0),i.Rb(1,"div",1),i.cc(2),i.Qb(),i.Rb(3,"div",2),i.cc(4,1),i.Qb(),i.Rb(5,"div",3),i.cc(6,2),i.Qb(),i.Ob()),2&e){const e=i.bc();i.Ab(3),i.ec("ngClass",e.isMenuPage()?"rows":"columns")}}const l=[[["asc-frame-header"]],"*",[["asc-frame-footer"]]],g=["asc-frame-header","*","asc-frame-footer"];let f=(()=>{class e extends s.b{constructor(e,t,n,i){super(e,t,n),this.pageService=i,this.disabled=!1,this.seperator=!1}get getHostCssClass(){const e=[];return this.isActive()||e.push("hidden"),this.getParent()instanceof o.a&&e.push("fill"),e.join(" ")}ngOnInit(){super.ngOnInit(),this.pageService.registerPage(this)}ngOnDestroy(){this.pageService.unregisterPage(this)}isMenuPage(){return this.getParent()instanceof a.a}isActive(){return this.pageService.activePage===this}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(s.b,12),i.Lb(i.l),i.Lb(s.c),i.Lb(c.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["asc-frame-page"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Cb(t.getHostCssClass)},inputs:{id:"id",name:"name",icon:"icon",disabled:"disabled",seperator:"seperator"},features:[i.zb([{provide:s.b,useExisting:Object(i.T)(()=>e)}]),i.xb],ngContentSelectors:g,decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[3,"ngClass"],[1,"footer"]],template:function(e,t){1&e&&(i.dc(l),i.qc(0,u,7,1,"ng-container",0)),2&e&&i.ec("ngIf",t.isActive())},directives:[r.j,r.h],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:var(--asc-spacing,.5vh);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:auto}.hidden[_nghost-%COMP%]{display:none}.fill[_nghost-%COMP%]{flex:1 1 auto}.header[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]:empty{display:none}.rows[_ngcontent-%COMP%]{flex-direction:row;flex:1 1 auto}.columns[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%]{display:flex;overflow:hidden;gap:var(--asc-spacing,.5vh)}.columns[_ngcontent-%COMP%]{flex-direction:column;flex:1 1 auto}.footer[_ngcontent-%COMP%]{display:flex}.footer[_ngcontent-%COMP%]:empty{display:none}"]}),e})()},pE86:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("fXoL"),s=n("P7Tc");const a=["*"];let o=(()=>{class e extends s.b{constructor(e,t,n){super(e,t,n)}ngOnInit(){super.ngOnInit()}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(s.b,12),i.Lb(i.l),i.Lb(s.c))},e.\u0275cmp=i.Fb({type:e,selectors:[["asc-frame-header"]],hostVars:4,hostBindings:function(e,t){2&e&&i.pc("flex-grow",t.size)("flex-shrink",t.size)},inputs:{size:"size"},features:[i.zb([{provide:s.b,useExisting:Object(i.T)(()=>e)}]),i.xb],ngContentSelectors:a,decls:1,vars:0,template:function(e,t){1&e&&(i.dc(),i.cc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;width:100%;overflow:hidden;gap:var(--asc-spacing,.5vh);align-items:center}"]}),e})()},rVAJ:function(e,t,n){"use strict";n.d(t,"a",function(){return P});var i=n("fXoL"),s=n("P7Tc"),a=n("AZc8"),o=n("0B5Y"),c=n("ofXK"),r=n("HZIp"),u=n("ZfcE"),l=n("5iF8");function g(e,t){1&e&&i.Mb(0,"div",6)}function f(e,t){if(1&e){const e=i.Sb();i.Pb(0),i.Rb(1,"asc-tile",4),i.Yb("press",function(){i.mc(e);const n=t.$implicit;return i.bc(2).onPageSelect(n)}),i.sc(2),i.Qb(),i.qc(3,g,1,0,"div",5),i.Ob()}if(2&e){const e=t.$implicit,n=i.bc(2);i.Ab(1),i.ec("icon",e.icon)("disabled",e.disabled)("selected",void 0!==e.id&&e.id===n.activePage),i.Ab(1),i.uc(" ",e.name," "),i.Ab(1),i.ec("ngIf",e.seperator)}}function h(e,t){if(1&e&&(i.Pb(0),i.Rb(1,"asc-tile-row",2),i.qc(2,f,4,5,"ng-container",3),i.Qb(),i.Ob()),2&e){const e=i.bc();i.Ab(1),i.ec("choice",!0)("square",!0),i.Ab(1),i.ec("ngForOf",e.pageService.pages)}}function p(e,t){1&e&&i.Mb(0,"div",6)}function m(e,t){if(1&e){const e=i.Sb();i.Pb(0),i.Rb(1,"asc-tile",4),i.Yb("press",function(){i.mc(e);const n=t.$implicit;return i.bc(2).onPageSelect(n)}),i.sc(2),i.Qb(),i.qc(3,p,1,0,"div",5),i.Ob()}if(2&e){const e=t.$implicit,n=i.bc(2);i.Ab(1),i.ec("icon",e.icon)("disabled",e.disabled)("selected",void 0!==e.id&&e.id===n.activePage),i.Ab(1),i.uc(" ",e.name," "),i.Ab(1),i.ec("ngIf",e.seperator)}}function v(e,t){if(1&e&&(i.Pb(0),i.Rb(1,"asc-tile-column",2),i.qc(2,m,4,5,"ng-container",3),i.Qb(),i.Ob()),2&e){const e=i.bc();i.Ab(1),i.ec("choice",!0)("square",!0),i.Ab(1),i.ec("ngForOf",e.pageService.pages)}}function d(e,t){1&e&&(i.Rb(0,"div",7),i.cc(1),i.Qb())}const b=["*"];let P=(()=>{class e extends s.b{constructor(e,t,n,s){super(e,t,n),this.pageService=s,this.position=0,this.pageSize=20,this.focus=!0,this.activePageChange=new i.n,this.pageService.autoSelect=!1}get activePage(){var e;return null===(e=this.pageService.activePage)||void 0===e?void 0:e.id}set activePage(e){this.pageService.selectById(e),this.activePageChange.emit(e)}ngOnInit(){if(super.ngOnInit(),!this.orientation){let t=this.getParent();for(;t;){if(t instanceof e&&t.orientation)return;t=t.getParent()}this.orientation="west"}}performCommand(e){return this.pageService.activePage&&e===a.a.Exit?(this.pageService.activePage=void 0,!0):(this.ui.setFocus(void 0),!0)}onPageSelect(e){this.pageService.activePage=e,this.activePageChange.emit(e.id)}get hostCssClass(){let t=this.getParent();for(;t;){if(t instanceof e)return;t=t.getParent()}return this.orientation}get flexDirection(){switch(this.orientation){case"north":return"column";case"east":return"row-reverse";case"south":return"column-reverse";case"west":return"row"}}get menuPosition(){if(this.position)switch(this.orientation){case"north":return this.position+"vw";case"east":return this.position+"vh";case"south":return this.position+"vw";case"west":return this.position+"vh"}}get menuPageSize(){if(this.pageSize)switch(this.orientation){case"north":return this.pageSize+"vh";case"east":return this.pageSize+"vw";case"south":return this.pageSize+"vh";case"west":return this.pageSize+"vw"}}getCalcOrientation(){if(this.orientation)return this.orientation;let t=this.getParent();for(;t;){if(t instanceof e&&t.orientation)return t.orientation;t=t.getParent()}}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(s.b,12),i.Lb(i.l),i.Lb(s.c),i.Lb(o.a,2))},e.\u0275cmp=i.Fb({type:e,selectors:[["asc-frame-menu"]],hostVars:12,hostBindings:function(e,t){2&e&&(i.Cb(t.hostCssClass),i.pc("--asc-frame-menu-size",t.menuSize)("--asc-frame-menu-margin",t.margin)("--asc-frame-menu-direction",t.flexDirection)("--asc-frame-menu-position",t.menuPosition)("--asc-frame-menu-pagesize",t.menuPageSize))},inputs:{orientation:"orientation",menuSize:"menuSize",margin:"margin",position:"position",pageSize:"pageSize",activePage:"activePage"},outputs:{activePageChange:"activePageChange"},features:[i.zb([{provide:s.b,useExisting:Object(i.T)(()=>e)},o.a]),i.xb],ngContentSelectors:b,decls:3,vars:3,consts:[[4,"ngIf"],["class","page",4,"ngIf"],[3,"choice","square"],[4,"ngFor","ngForOf"],[3,"icon","disabled","selected","press"],["class","tile-seperator",4,"ngIf"],[1,"tile-seperator"],[1,"page"]],template:function(e,t){1&e&&(i.dc(),i.qc(0,h,3,3,"ng-container",0),i.qc(1,v,3,3,"ng-container",0),i.qc(2,d,2,0,"div",1)),2&e&&(i.ec("ngIf","north"===t.getCalcOrientation()||"south"===t.getCalcOrientation()),i.Ab(1),i.ec("ngIf","west"===t.getCalcOrientation()||"east"===t.getCalcOrientation()),i.Ab(1),i.ec("ngIf",t.pageService.activePage))},directives:[c.j,r.a,c.i,u.a,l.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:var(--asc-frame-menu-direction,row);gap:var(--asc-spacing,.5vw);overflow:visible;font-size:var(--asc-font-size,1.5vh);pointer-events:none}.north[_nghost-%COMP%]{position:absolute;top:calc(var(--asc-frame-menu-margin, 0) * 1vh);left:var(--asc-frame-menu-position,50%);transform:translateX(var(--asc-frame-menu-position,-50%))}.north[_nghost-%COMP%]   asc-tile-row[_ngcontent-%COMP%]{justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto}.north[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{height:var(--asc-frame-menu-pagesize);max-height:var(--asc-frame-menu-pagesize)}.east[_nghost-%COMP%]{position:absolute;top:var(--asc-frame-menu-position,50%);right:calc(var(--asc-frame-menu-margin, 0) * 1vw);transform:translateY(var(--asc-frame-menu-position,-50%))}.east[_nghost-%COMP%]   asc-tile-column[_ngcontent-%COMP%]{flex:1 1 auto;justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto;--asc-item-square:4vw}.east[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{width:var(--asc-frame-menu-pagesize);max-width:var(--asc-frame-menu-pagesize)}.south[_nghost-%COMP%]{position:absolute;bottom:calc(var(--asc-frame-menu-margin, 0) * 1vh);left:var(--asc-frame-menu-position,50%);transform:translateX(var(--asc-frame-menu-position,-50%))}.south[_nghost-%COMP%]   asc-tile-row[_ngcontent-%COMP%]{height:calc(var(--asc-frame-menu-size, 4) * 1vh);justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto}.south[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{height:var(--asc-frame-menu-pagesize);max-height:var(--asc-frame-menu-pagesize)}.west[_nghost-%COMP%]{position:absolute;left:calc(var(--asc-frame-menu-margin, 0) * 1vw);top:var(--asc-frame-menu-position,50%);transform:translateY(var(--asc-frame-menu-position,-50%))}.west[_nghost-%COMP%]   asc-tile-column[_ngcontent-%COMP%]{flex:1 1 auto;justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto;--asc-item-square:4vw}.west[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{width:var(--asc-frame-menu-pagesize);max-width:var(--asc-frame-menu-pagesize)}.page[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.tile-seperator[_ngcontent-%COMP%]{margin:2px;border-top:var(--asc-frame-border);opacity:.4}"]}),e})()},s9gK:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var i=n("fXoL"),s=n("P7Tc"),a=n("5iF8"),o=n("HZIp"),c=n("ofXK");function r(e,t){1&e&&i.Nb(0)}function u(e,t){1&e&&i.Nb(0)}function l(e,t){if(1&e&&(i.Pb(0),i.qc(1,r,1,0,"ng-container",4),i.qc(2,u,1,0,"ng-container",4),i.Ob()),2&e){i.bc();const e=i.jc(4),t=i.jc(6);i.Ab(1),i.ec("ngTemplateOutlet",e),i.Ab(1),i.ec("ngTemplateOutlet",t)}}function g(e,t){1&e&&i.Nb(0)}function f(e,t){1&e&&i.Nb(0)}function h(e,t){if(1&e&&(i.qc(0,g,1,0,"ng-container",4),i.qc(1,f,1,0,"ng-container",4)),2&e){i.bc();const e=i.jc(6),t=i.jc(4);i.ec("ngTemplateOutlet",e),i.Ab(1),i.ec("ngTemplateOutlet",t)}}function p(e,t){if(1&e&&(i.Rb(0,"div",5),i.cc(1),i.Qb()),2&e){const e=i.bc();i.pc("flex-basis",e.ratio,"%")}}function m(e,t){if(1&e&&(i.Rb(0,"div",6),i.cc(1,1),i.Qb()),2&e){const e=i.bc();i.pc("flex-basis",100-e.ratio,"%")}}const v=[[["asc-tile-row"]],[["asc-tile-column"]]],d=["asc-tile-row","asc-tile-column"];let b=(()=>{class e extends s.b{constructor(e,t,n){super(e,t,n),this.ratio=50}ngOnInit(){super.ngOnInit()}get flex(){return this.isColumnFirst()?"column":"row"}isColumnFirst(){for(const e of this.getChildren()){if(e instanceof a.a)return!0;if(e instanceof o.a)return!1}return!0}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(s.b,12),i.Lb(i.l),i.Lb(s.c))},e.\u0275cmp=i.Fb({type:e,selectors:[["asc-tile-grid"]],hostVars:2,hostBindings:function(e,t){2&e&&i.pc("flex-direction",t.flex)},inputs:{ratio:"ratio"},features:[i.zb([{provide:s.b,useExisting:Object(i.T)(()=>e)}]),i.xb],ngContentSelectors:d,decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["columnRowTemplate",""],["rowsTemplate",""],["columnsTemplate",""],[4,"ngTemplateOutlet"],[1,"row-container"],[1,"column-container"]],template:function(e,t){if(1&e&&(i.dc(v),i.qc(0,l,3,2,"ng-container",0),i.qc(1,h,2,2,"ng-template",null,1,i.rc),i.qc(3,p,2,2,"ng-template",null,2,i.rc),i.qc(5,m,2,2,"ng-template",null,3,i.rc)),2&e){const e=i.jc(2);i.ec("ngIf",!t.isColumnFirst())("ngIfElse",e)}},directives:[c.j,c.m],styles:["[_nghost-%COMP%]{flex-direction:row;flex:1 1 auto}.row-container[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;gap:calc(var(--asc-spacing, .5vh) * var(--asc-scaling))}.row-container[_ngcontent-%COMP%]{flex-direction:column;flex:1 1}.row-container[_ngcontent-%COMP%]:empty{display:none}.column-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1;gap:calc(var(--asc-spacing, .5vh) * var(--asc-scaling))}.column-container[_ngcontent-%COMP%]:empty{display:none}"]}),e})()}}]);