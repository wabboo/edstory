!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t,a){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,a||e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"66Z7":function(e,t,n){"use strict";n.r(t),n.d(t,"SystemMapModule",function(){return $});var r,c=n("ofXK"),u=n("XO0r"),f=n("tyNb"),l=n("Rfnq"),g=n("AKXX"),p=n("fXoL"),h=n("DFE9"),v=n("cI3Y"),b=n("Womt"),m=n("Safd"),d=n("BBZK"),y=n("+Ru3"),w=n("bYsh"),P=((r=function(e){o(n,e);var t=s(n);function n(e,r,i){var o;return a(this,n),(o=t.call(this,e)).gamepadService=r,o.keyMouseService=i,o.keyMouseService.attach(e.nativeElement),o.keyMouseService.state.subscribe(function(e){o.applyMouseStateToMapCamera(e)}),o.gamepadService.controller1.subscribe(function(e){}),o}return i(n,[{key:"starSystem",get:function(){return this.$starSystem},set:function(e){this.$starSystem=e}},{key:"getViewport",value:function(e,t){return this.viewport&&this.viewport.camera===e&&this.viewport.screen===t||(this.viewport=new d.c(e,t)),this.viewport.starSystem=this.starSystem,this.viewport}},{key:"applyMouseStateToMapCamera",value:function(e){var t=new b.y;this.viewport.camera.getWorldDirection(t),t.z=0;var n=t.clone().applyAxisAngle(new b.y(0,0,1),.5*Math.PI);if(e.leftMouse===m.b.Hold&&e.rightMouse===m.b.Hold)return this.viewport.cursor.cursorPosition.addScaledVector(t,.25*e.deltaY),this.viewport.cursor.cursorPosition.addScaledVector(n,.25*e.deltaX),!0;if(e.leftMouse===m.b.Hold)this.viewport.cursor.cameraRotation+=e.deltaX/100,this.viewport.cursor.cameraAngle+=e.deltaY/100,this.viewport.cursor.cameraAngle>Math.PI&&(this.viewport.cursor.cameraAngle=Math.PI),this.viewport.cursor.cameraAngle<-Math.PI&&(this.viewport.cursor.cameraAngle=-Math.PI);else if(e.rightMouse===m.b.Hold)return this.viewport.cursor.cursorPosition.z+=.25*e.deltaY,!0;e.deltaZ<0?(this.viewport.cursor.cameraZoom-=10,this.viewport.cursor.cameraZoom<5&&(this.viewport.cursor.cameraZoom=5)):e.deltaZ>0&&(this.viewport.cursor.cameraZoom+=10)}}]),n}(y.a)).\u0275fac=function(e){return new(e||r)(p.Lb(p.l),p.Lb(w.b),p.Lb(m.a))},r.\u0275cmp=p.Fb({type:r,selectors:[["space-viewport-system"]],inputs:{starSystem:"starSystem"},features:[p.xb],decls:0,vars:0,template:function(e,t){},styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}"]}),r),S=n("Av/I"),C=n("U+cv"),M=n("r0V/"),O=n("QzEy"),x=n("c6Dt"),k=n("MzTj"),A=n("fxJ5");function z(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Navigate"),p.Qb())}function _(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Flightplan"),p.Qb())}function R(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Inter astra"),p.Qb())}function I(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Explore"),p.Qb())}function Q(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Trade"),p.Qb())}function E(e,t){1&e&&(p.Rb(0,"span"),p.rc(1,"Powerplay"),p.Qb())}function j(e,t){if(1&e){var n=p.Sb();p.Rb(0,"asc-frame-menu",15),p.Yb("activePageChange",function(e){return p.lc(n),p.bc().tab=e})("activePageChange",function(e){return p.lc(n),p.bc().onTabChange(e)}),p.Mb(1,"asc-frame-page",16),p.Mb(2,"asc-frame-page",17),p.Mb(3,"asc-frame-page",18),p.Mb(4,"asc-frame-page",19),p.Mb(5,"asc-frame-page",20),p.Qb()}if(2&e){var a=p.bc();p.ec("activePage",a.tab),p.Ab(2),p.ec("seperator",!0),p.Ab(1),p.ec("seperator",!0)}}function L(e,t){if(1&e){var n=p.Sb();p.Rb(0,"asc-frame-menu",21),p.Yb("activePageChange",function(e){return p.lc(n),p.bc().tab=e})("activePageChange",function(e){return p.lc(n),p.bc().onTabChange(e)}),p.Mb(1,"asc-frame-page",16),p.Mb(2,"asc-frame-page",17),p.Mb(3,"asc-frame-page",22),p.Mb(4,"asc-frame-page",23),p.Qb()}if(2&e){var a=p.bc();p.ec("activePage",a.tab),p.Ab(2),p.ec("seperator",!0),p.Ab(1),p.ec("seperator",!0)}}function F(e,t){if(1&e){var n=p.Sb();p.Rb(0,"asc-frame-menu",21),p.Yb("activePageChange",function(e){return p.lc(n),p.bc().tab=e})("activePageChange",function(e){return p.lc(n),p.bc().onTabChange(e)}),p.Mb(1,"asc-frame-page",16),p.Mb(2,"asc-frame-page",17),p.Mb(3,"asc-frame-page",24),p.Mb(4,"asc-frame-page",25),p.Mb(5,"asc-frame-page",26),p.Qb()}if(2&e){var a=p.bc();p.ec("activePage",a.tab),p.Ab(2),p.ec("seperator",!0)}}function Y(e,t){if(1&e){var n=p.Sb();p.Rb(0,"asc-frame-menu",21),p.Yb("activePageChange",function(e){return p.lc(n),p.bc().tab=e})("activePageChange",function(e){return p.lc(n),p.bc().onTabChange(e)}),p.Mb(1,"asc-frame-page",16),p.Mb(2,"asc-frame-page",17),p.Mb(3,"asc-frame-page",27),p.Rb(4,"asc-frame-page",28),p.Rb(5,"asc-frame-column"),p.rc(6," Show market comparison information. "),p.Qb(),p.Qb(),p.Qb()}if(2&e){var a=p.bc();p.ec("activePage",a.tab),p.Ab(2),p.ec("seperator",!0)}}function T(e,t){if(1&e){var n=p.Sb();p.Rb(0,"asc-frame-menu",21),p.Yb("activePageChange",function(e){return p.lc(n),p.bc().tab=e})("activePageChange",function(e){return p.lc(n),p.bc().onTabChange(e)}),p.Mb(1,"asc-frame-page",16),p.Mb(2,"asc-frame-page",17),p.Qb()}if(2&e){var a=p.bc();p.ec("activePage",a.tab),p.Ab(2),p.ec("seperator",!0)}}var X,N,B,Z=function(){return[2,2,90,2]},V=[{path:"",component:(X=function(){function e(t,n){var r=this;a(this,e),this.spaceService=t,this.locationService=n,this.mode="navigate",this.tab="current",this.starSystem=new l.a,this.starMode=g.b,this.settings=g.a,this.spaceService.getStarSystem("okinura").subscribe(function(e){r.starSystem=e})}return i(e,[{key:"ngOnInit",value:function(){}},{key:"onModeSelect",value:function(e){switch(this.mode=e,this.mode){case"navigate":this.settings.starMode=g.b.Security;break;case"flightplan":this.settings.starMode=g.b.StarClass;break;case"explore":this.settings.starMode=g.b.VisitedStars;break;case"trade":this.settings.starMode=g.b.Economy;break;case"powerplay":this.settings.starMode=g.b.Allegiance}}},{key:"onTabChange",value:function(e){"current"===e&&(g.a.focusSystem=g.a.currentSystem),"selected"===e&&(g.a.focusSystem=g.a.selectedSystem)}},{key:"onStarSystemSelect",value:function(e){switch(this.tab){case"triangulate":case"rangefinder":case"ruler":break;default:this.tab="selected"}}},{key:"onStarModeChange",value:function(e){"rangefinder"===e?(g.a.rangeFinder.system=g.a.selectedSystem,g.a.rangeFinder.rangeFrom=10,g.a.rangeFinder.rangeTo=20):g.a.rangeFinder.system=void 0,"ruler"===e?(g.a.ruler.system=g.a.currentSystem,g.a.ruler.target=g.a.selectedSystem,g.a.ruler.measures=1):g.a.ruler.system=void 0,"string"!=typeof e&&(g.a.starMode=e)}},{key:"onBack",value:function(){history.back()}},{key:"onExit",value:function(){history.back()}}]),e}(),X.\u0275fac=function(e){return new(e||X)(p.Lb(h.a),p.Lb(v.a))},X.\u0275cmp=p.Fb({type:X,selectors:[["ng-component"]],decls:35,vars:19,consts:[[3,"starSystem","selectedChange"],[3,"rect"],[3,"open"],[1,"mode",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"choice"],[3,"press"],["icon","location"],["icon","route"],[1,"spacer"],["icon","codex"],["icon","commodity"],["icon","gal-power"],["margin","1","position","10","menuSize","3","pageSize","25",3,"activePage","activePageChange",4,"ngIf"],["margin","1","position","10","menuSize","4","pageSize","25",3,"activePage","activePageChange",4,"ngIf"],["margin","1","position","10","menuSize","3","pageSize","25",3,"activePage","activePageChange"],["id","selected","icon","/assets/icons/location-select"],["id","legend","icon","/assets/icons/galaxy-map/options",3,"seperator"],["id","search","icon","/assets/icons/search",3,"seperator"],["id","your-missions","icon","/assets/icons/mission"],["icon","/assets/icons/bookmark"],["margin","1","position","10","menuSize","4","pageSize","25",3,"activePage","activePageChange"],["id","management","icon","/assets/icons/galaxy-map/flightplan",3,"seperator"],["id","add","icon","/assets/icons/add"],["id","triangulate","icon","/assets/icons/triangulate"],["id","rangefinder","icon","/assets/icons/rangefinder"],["id","ruler","icon","/assets/icons/ruler"],["id","routes","icon","/assets/icons/compare"],["id","extraction","icon","/assets/icons/compare"]],template:function(e,t){1&e&&(p.Rb(0,"space-viewport-system",0),p.Yb("selectedChange",function(e){return t.onStarSystemSelect(e)}),p.Qb(),p.Rb(1,"asc-frame",1),p.Rb(2,"asc-frame-column",2),p.Rb(3,"div",3),p.rc(4," Stellar atlas | system map "),p.pc(5,z,2,0,"span",4),p.pc(6,_,2,0,"span",4),p.pc(7,R,2,0,"span",4),p.pc(8,I,2,0,"span",4),p.pc(9,Q,2,0,"span",4),p.pc(10,E,2,0,"span",4),p.Qb(),p.Qb(),p.Rb(11,"asc-frame-column",2),p.Rb(12,"asc-tile-row",5),p.Rb(13,"asc-tile",6),p.Yb("press",function(){return t.onModeSelect("navigate")}),p.Mb(14,"ed-icon",7),p.rc(15,"Navigate"),p.Qb(),p.Rb(16,"asc-tile",6),p.Yb("press",function(){return t.onModeSelect("flightplan")}),p.Mb(17,"ed-icon",8),p.rc(18,"Flightplan"),p.Qb(),p.Mb(19,"div",9),p.Rb(20,"asc-tile",6),p.Yb("press",function(){return t.onModeSelect("explore")}),p.Mb(21,"ed-icon",10),p.rc(22,"Explore"),p.Qb(),p.Rb(23,"asc-tile",6),p.Yb("press",function(){return t.onModeSelect("trade")}),p.Mb(24,"ed-icon",11),p.rc(25,"Trade"),p.Qb(),p.Rb(26,"asc-tile",6),p.Yb("press",function(){return t.onModeSelect("powerplay")}),p.Mb(27,"ed-icon",12),p.rc(28,"Powerplay"),p.Qb(),p.Qb(),p.Qb(),p.Mb(29,"asc-frame-column",2),p.Qb(),p.pc(30,j,6,3,"asc-frame-menu",13),p.pc(31,L,5,3,"asc-frame-menu",14),p.pc(32,F,6,2,"asc-frame-menu",14),p.pc(33,Y,7,2,"asc-frame-menu",14),p.pc(34,T,3,2,"asc-frame-menu",14)),2&e&&(p.ec("starSystem",t.starSystem),p.Ab(1),p.ec("rect",p.fc(18,Z)),p.Ab(1),p.ec("open",!0),p.Ab(1),p.ec("ngSwitch",t.mode),p.Ab(2),p.ec("ngSwitchCase","navigate"),p.Ab(1),p.ec("ngSwitchCase","flightplan"),p.Ab(1),p.ec("ngSwitchCase","interastra"),p.Ab(1),p.ec("ngSwitchCase","explore"),p.Ab(1),p.ec("ngSwitchCase","trade"),p.Ab(1),p.ec("ngSwitchCase","powerplay"),p.Ab(1),p.ec("open",!0),p.Ab(1),p.ec("choice",!0),p.Ab(17),p.ec("open",!0),p.Ab(1),p.ec("ngIf","navigate"===t.mode),p.Ab(1),p.ec("ngIf","flightplan"===t.mode),p.Ab(1),p.ec("ngIf","explore"===t.mode),p.Ab(1),p.ec("ngIf","trade"===t.mode),p.Ab(1),p.ec("ngIf","powerplay"===t.mode))},directives:[P,S.a,C.a,c.k,c.l,M.a,O.a,x.a,c.j,k.a,A.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;background:#000;z-index:1000}asc-frame-page[_ngcontent-%COMP%]{--asc-item-square:4vh}asc-tile-row[_ngcontent-%COMP%]{--asc-font-size:1.2vh}.mode[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;align-items:flex-start;justify-content:center;text-shadow:2px 2px rgba(0,0,0,.8);font-size:1.6vh;color:var(--asc-primary-color)}.mode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:3.5vh;line-height:3vh;color:#fff}"]}),X)}],D=((N=function e(){a(this,e)}).\u0275fac=function(e){return new(e||N)},N.\u0275mod=p.Jb({type:N}),N.\u0275inj=p.Ib({imports:[[f.d.forChild(V)],f.d]}),N),H=n("+H5L"),q=n("IY5+"),$=((B=function e(){a(this,e)}).\u0275fac=function(e){return new(e||B)},B.\u0275mod=p.Jb({type:B}),B.\u0275inj=p.Ib({imports:[[c.b,u.a,q.a,H.a,D]]}),B)},IXfT:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return f}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return g}),n.d(t,"g",function(){return p});var r=function e(){a(this,e)},i=function e(){a(this,e)},c=function(e){o(n,e);var t=s(n);function n(){return a(this,n),t.apply(this,arguments)}return n}(i),u=function(e){o(n,e);var t=s(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).resourceLocation="station/docked",e.hangar=!1,e}return n}(c),f=function(e){o(n,e);var t=s(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).resourceLocation="station/hangar",e.hangar=!0,e}return n}(c),l=function(e){o(n,e);var t=s(n);function n(){return a(this,n),t.apply(this,arguments)}return n}(i),g=function(e){o(n,e);var t=s(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).resourceLocation="station/approach",e}return n}(l),p=function(e){o(n,e);var t=s(n);function n(){var e;return a(this,n),(e=t.apply(this,arguments)).resourceLocation="supercruise",e}return n}(i)},MzTj:function(e,t,r){"use strict";r.d(t,"a",function(){return O});var c=r("fXoL"),u=r("7OYZ"),l=r("TwaX"),g=r("427B"),p=r("ofXK"),h=r("r0V/"),v=r("QzEy"),b=r("3oVe");function m(e,t){1&e&&c.Mb(0,"div",6)}function d(e,t){if(1&e){var n=c.Sb();c.Pb(0),c.Rb(1,"asc-tile",4),c.Yb("press",function(){c.lc(n);var e=t.$implicit;return c.bc(2).onPageSelect(e)}),c.rc(2),c.Qb(),c.pc(3,m,1,0,"div",5),c.Ob()}if(2&e){var a=t.$implicit,r=c.bc(2);c.Ab(1),c.ec("icon",a.icon)("disabled",a.disabled)("selected",void 0!==a.id&&a.id===r.activePage),c.Ab(1),c.tc(" ",a.name," "),c.Ab(1),c.ec("ngIf",a.seperator)}}function y(e,t){if(1&e&&(c.Pb(0),c.Rb(1,"asc-tile-row",2),c.pc(2,d,4,5,"ng-container",3),c.Qb(),c.Ob()),2&e){var n=c.bc();c.Ab(1),c.ec("choice",!0)("square",!0),c.Ab(1),c.ec("ngForOf",n.pageService.pages)}}function w(e,t){1&e&&c.Mb(0,"div",6)}function P(e,t){if(1&e){var n=c.Sb();c.Pb(0),c.Rb(1,"asc-tile",4),c.Yb("press",function(){c.lc(n);var e=t.$implicit;return c.bc(2).onPageSelect(e)}),c.rc(2),c.Qb(),c.pc(3,w,1,0,"div",5),c.Ob()}if(2&e){var a=t.$implicit,r=c.bc(2);c.Ab(1),c.ec("icon",a.icon)("disabled",a.disabled)("selected",void 0!==a.id&&a.id===r.activePage),c.Ab(1),c.tc(" ",a.name," "),c.Ab(1),c.ec("ngIf",a.seperator)}}function S(e,t){if(1&e&&(c.Pb(0),c.Rb(1,"asc-tile-column",2),c.pc(2,P,4,5,"ng-container",3),c.Qb(),c.Ob()),2&e){var n=c.bc();c.Ab(1),c.ec("choice",!0)("square",!0),c.Ab(1),c.ec("ngForOf",n.pageService.pages)}}function C(e,t){1&e&&(c.Rb(0,"div",7),c.cc(1),c.Qb())}var M=["*"],O=function(){var e=function(e){o(r,e);var t=s(r);function r(e,n,i,o){var s;return a(this,r),(s=t.call(this,e,n,i)).pageService=o,s.position=0,s.pageSize=20,s.activePageChange=new c.n,s.pageService.autoSelect=!1,s}return i(r,[{key:"activePage",get:function(){var e;return null===(e=this.pageService.activePage)||void 0===e?void 0:e.id},set:function(e){this.pageService.selectById(e),this.activePageChange.emit(e)}},{key:"ngOnInit",value:function(){if(n(f(r.prototype),"ngOnInit",this).call(this),!this.orientation){for(var e=this.getParent();e;){if(e instanceof r&&e.orientation)return;e=e.getParent()}this.orientation="west"}}},{key:"performCommand",value:function(e){return this.pageService.activePage&&e===l.a.Exit?(this.pageService.activePage=void 0,!0):(this.ui.setFocus(void 0),!0)}},{key:"onPageSelect",value:function(e){this.pageService.activePage=e,this.activePageChange.emit(e.id)}},{key:"hostCssClass",get:function(){for(var e=this.getParent();e;){if(e instanceof r)return;e=e.getParent()}return this.orientation}},{key:"flexDirection",get:function(){switch(this.orientation){case"north":return"column";case"east":return"row-reverse";case"south":return"column-reverse";case"west":return"row"}}},{key:"menuPosition",get:function(){if(this.position)switch(this.orientation){case"north":return this.position+"vw";case"east":return this.position+"vh";case"south":return this.position+"vw";case"west":return this.position+"vh"}}},{key:"menuPageSize",get:function(){if(this.pageSize)switch(this.orientation){case"north":return this.pageSize+"vh";case"east":return this.pageSize+"vw";case"south":return this.pageSize+"vh";case"west":return this.pageSize+"vw"}}},{key:"getCalcOrientation",value:function(){if(this.orientation)return this.orientation;for(var e=this.getParent();e;){if(e instanceof r&&e.orientation)return e.orientation;e=e.getParent()}}}]),r}(u.b);return e.\u0275fac=function(t){return new(t||e)(c.Lb(u.b,12),c.Lb(c.l),c.Lb(u.c),c.Lb(g.a,2))},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-frame-menu"]],hostVars:12,hostBindings:function(e,t){2&e&&(c.Cb(t.hostCssClass),c.oc("--asc-frame-menu-size",t.menuSize)("--asc-frame-menu-margin",t.margin)("--asc-frame-menu-direction",t.flexDirection)("--asc-frame-menu-position",t.menuPosition)("--asc-frame-menu-pagesize",t.menuPageSize))},inputs:{orientation:"orientation",menuSize:"menuSize",margin:"margin",position:"position",pageSize:"pageSize",activePage:"activePage"},outputs:{activePageChange:"activePageChange"},features:[c.zb([{provide:u.b,useExisting:Object(c.T)(function(){return e})},g.a]),c.xb],ngContentSelectors:M,decls:3,vars:3,consts:[[4,"ngIf"],["class","page",4,"ngIf"],[3,"choice","square"],[4,"ngFor","ngForOf"],[3,"icon","disabled","selected","press"],["class","tile-seperator",4,"ngIf"],[1,"tile-seperator"],[1,"page"]],template:function(e,t){1&e&&(c.dc(),c.pc(0,y,3,3,"ng-container",0),c.pc(1,S,3,3,"ng-container",0),c.pc(2,C,2,0,"div",1)),2&e&&(c.ec("ngIf","north"===t.getCalcOrientation()||"south"===t.getCalcOrientation()),c.Ab(1),c.ec("ngIf","west"===t.getCalcOrientation()||"east"===t.getCalcOrientation()),c.Ab(1),c.ec("ngIf",t.pageService.activePage))},directives:[p.j,h.a,p.i,v.a,b.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:var(--asc-frame-menu-direction,row);gap:var(--asc-spacing,.5vw);overflow:visible;font-size:var(--asc-font-size,1.5vh);pointer-events:none}.north[_nghost-%COMP%]{position:absolute;top:calc(var(--asc-frame-menu-margin, 0) * 1vh);left:var(--asc-frame-menu-position,50%);transform:translateX(var(--asc-frame-menu-position,-50%))}.north[_nghost-%COMP%]   asc-tile-row[_ngcontent-%COMP%]{justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto}.north[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{height:var(--asc-frame-menu-pagesize);max-height:var(--asc-frame-menu-pagesize)}.east[_nghost-%COMP%]{position:absolute;top:var(--asc-frame-menu-position,50%);right:calc(var(--asc-frame-menu-margin, 0) * 1vw);transform:translateY(var(--asc-frame-menu-position,-50%))}.east[_nghost-%COMP%]   asc-tile-column[_ngcontent-%COMP%]{flex:1 1 auto;justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto;--asc-item-square:4vw}.east[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{width:var(--asc-frame-menu-pagesize);max-width:var(--asc-frame-menu-pagesize)}.south[_nghost-%COMP%]{position:absolute;bottom:calc(var(--asc-frame-menu-margin, 0) * 1vh);left:var(--asc-frame-menu-position,50%);transform:translateX(var(--asc-frame-menu-position,-50%))}.south[_nghost-%COMP%]   asc-tile-row[_ngcontent-%COMP%]{height:calc(var(--asc-frame-menu-size, 4) * 1vh);justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto}.south[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{height:var(--asc-frame-menu-pagesize);max-height:var(--asc-frame-menu-pagesize)}.west[_nghost-%COMP%]{position:absolute;left:calc(var(--asc-frame-menu-margin, 0) * 1vw);top:var(--asc-frame-menu-position,50%);transform:translateY(var(--asc-frame-menu-position,-50%))}.west[_nghost-%COMP%]   asc-tile-column[_ngcontent-%COMP%]{flex:1 1 auto;justify-content:var(--asc-frame-menu-position,center);z-index:100;pointer-events:auto;--asc-item-square:4vw}.west[_nghost-%COMP%]   .page[_ngcontent-%COMP%]{width:var(--asc-frame-menu-pagesize);max-width:var(--asc-frame-menu-pagesize)}.page[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.tile-seperator[_ngcontent-%COMP%]{margin:2px;border-top:var(--asc-frame-border);opacity:.4}"]}),e}()},TwaX:function(t,n,r){"use strict";r.d(n,"a",function(){return c}),r.d(n,"b",function(){return s}),r.d(n,"c",function(){return u});var o=r("fXoL"),c=function(e){return e[e.North=0]="North",e[e.East=1]="East",e[e.West=2]="West",e[e.South=3]="South",e[e.NextPage=4]="NextPage",e[e.PreviousPage=5]="PreviousPage",e[e.Activate=6]="Activate",e[e.Exit=7]="Exit",e}({}),s=function(){var t=function(){function t(e,n,r){a(this,t),this.parent=e,this.element=n,this.ui=r}return i(t,[{key:"x",get:function(){var e,t,n;return null===(n=null===(t=null===(e=this.element)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.x}},{key:"y",get:function(){var e,t,n;return null===(n=null===(t=null===(e=this.element)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.y}},{key:"ngOnInit",value:function(){this.focus&&this.ui.setFocus(this)}},{key:"getParent",value:function(){return this.parent}},{key:"getChildren",value:function(){return this.children.toArray()}},{key:"isContainer",value:function(){return!0}},{key:"isFocussed",value:function(){return this.ui.isFocussed(this)}},{key:"performCommand",value:function(e){switch(e){case c.North:case c.East:case c.South:case c.West:var t=this.locateNextElement(this,e);t&&(this.ui.setFocus(t),t.element.nativeElement.scrollIntoView())}return!1}},{key:"locateNextElement",value:function(t,n){var a,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];i.push(this);var o,s=e(this.getChildren());try{for(s.s();!(o=s.n()).done;){var u=o.value;switch(n){case c.North:u.y<t.y&&(!a||u.y>a.y)&&(r=u);break;case c.East:u.x>t.x&&(!a||u.x<a.x)&&(r=u);break;case c.South:u.y>t.y&&(!a||u.y<a.y)&&(r=u);break;case c.West:u.x<t.x&&(!a||u.x>a.x)&&(r=u)}-1===i.indexOf(r)&&(a=r)}}catch(f){s.e(f)}finally{s.f()}return a&&a.isContainer()&&(a=a.locateNextElement(t,n,i)),!a&&this.getParent()&&(a=this.getParent().locateNextElement(t,n,i)),a}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Lb(t,8),o.Lb(o.l),o.Lb(u))},t.\u0275dir=o.Gb({type:t,contentQueries:function(e,n,a){var r;(1&e&&o.Eb(a,t,1),2&e)&&(o.hc(r=o.Zb())&&(n.children=r))},inputs:{focus:"focus"}}),t}(),u=function(){var e=function(){function e(){a(this,e)}return i(e,[{key:"sendCommand",value:function(e){this.focusElement&&this.focusElement.performCommand(e)}},{key:"setFocus",value:function(e){this.focusElement=e}},{key:"isFocussed",value:function(e){for(var t=this.focusElement;t;){if(e===t)return!0;t=t.getParent()}return!1}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},cI3Y:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("2Vo4"),o=n("l5mm"),c=n("IXfT"),s=n("fXoL"),u=n("DFE9"),f=function(){var e=function(){function e(t){var n=this;a(this,e),this.spaceService=t,this.system=new r.a(void 0),this.location=new r.a(void 0),this.clock=new r.a(void 0),this.spaceService.getStarSystem("okinura").subscribe(function(e){n.system.next(e)});var i=new c.f;i.marketName="Bennett Gateway",this.location.next(i),this.updateClock(),Object(o.a)(1e3).subscribe(function(){n.updateClock()})}return i(e,[{key:"updateClock",value:function(){var e=new Date,t=new c.a;e.setFullYear(e.getFullYear()+1286),t.date=e.toLocaleDateString("en-gb",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),t.time=e.toLocaleTimeString("en-gb",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"UTC"}),this.clock.next(t)}},{key:"pushOkunira",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Vb(u.a))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},fxJ5:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var c=r("fXoL"),u=r("7OYZ"),l=r("Av/I"),g=r("427B"),p=r("ofXK");function h(e,t){1&e&&(c.Pb(0),c.Rb(1,"div",1),c.cc(2),c.Qb(),c.Rb(3,"div",2),c.cc(4,1),c.Qb(),c.Rb(5,"div",3),c.cc(6,2),c.Qb(),c.Ob())}var v=[[["asc-frame-header"]],"*",[["asc-frame-footer"]]],b=["asc-frame-header","*","asc-frame-footer"],m=function(){var e=function(e){o(r,e);var t=s(r);function r(e,n,i,o){var c;return a(this,r),(c=t.call(this,e,n,i)).pageService=o,c.disabled=!1,c.seperator=!1,c}return i(r,[{key:"getHostCssClass",get:function(){var e=[];return this.isActive()||e.push("hidden"),this.getParent()instanceof l.a&&e.push("fill"),e.join(" ")}},{key:"ngOnInit",value:function(){n(f(r.prototype),"ngOnInit",this).call(this),this.pageService.registerPage(this)}},{key:"ngOnDestroy",value:function(){this.pageService.unregisterPage(this)}},{key:"isActive",value:function(){return this.pageService.activePage===this}}]),r}(u.b);return e.\u0275fac=function(t){return new(t||e)(c.Lb(u.b,12),c.Lb(c.l),c.Lb(u.c),c.Lb(g.a,1))},e.\u0275cmp=c.Fb({type:e,selectors:[["asc-frame-page"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Cb(t.getHostCssClass)},inputs:{id:"id",name:"name",icon:"icon",disabled:"disabled",seperator:"seperator"},features:[c.zb([{provide:u.b,useExisting:Object(c.T)(function(){return e})}]),c.xb],ngContentSelectors:b,decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"rows"],[1,"footer"]],template:function(e,t){1&e&&(c.dc(v),c.pc(0,h,7,0,"ng-container",0)),2&e&&c.ec("ngIf",t.isActive())},directives:[p.j],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:var(--asc-spacing,.5vh);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:auto}.hidden[_nghost-%COMP%]{display:none}.fill[_nghost-%COMP%]{flex:1 1 auto}.header[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]:empty{display:none}.rows[_ngcontent-%COMP%]{flex-direction:row;flex:1 1 auto;overflow:hidden;gap:var(--asc-spacing,.5vh)}.footer[_ngcontent-%COMP%], .rows[_ngcontent-%COMP%]{display:flex}.footer[_ngcontent-%COMP%]:empty{display:none}"]}),e}()}}])}();