(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Ut3C:function(t,n,e){"use strict";e.r(n),e.d(n,"OutfittingModule",(function(){return nt}));var o=e("ofXK"),c=e("IVc4"),i=e("tyNb"),s=e("fXoL");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"configure"],[1,"specs"]],template:function(t,n){1&t&&(s.Sb(0,"div",0),s.Nb(1,"router-outlet"),s.Rb(),s.Sb(2,"div",1),s.Sb(3,"h2"),s.uc(4,"Ship specs"),s.Rb(),s.Rb())},directives:[i.d],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden;background-image:url(/edstory/assets/ship/sidewinder-mk-i/bay-start.png);background-size:cover}.configure[_ngcontent-%COMP%]{top:4%;left:4%;width:92%;height:76%;padding:0}.configure[_ngcontent-%COMP%], .specs[_ngcontent-%COMP%]{position:absolute;display:flex;margin:0}.specs[_ngcontent-%COMP%]{top:81%;left:0;width:100%;height:19%;background-color:rgba(0,0,0,.75)}"]}),t})();var a=e("qO2F");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-bread-crumb"]],decls:2,vars:0,consts:[[1,"segment"]],template:function(t,n){1&t&&(s.Sb(0,"div",0),s.uc(1,"Outfitting"),s.Rb())},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;height:4vh;margin-bottom:2vh}.segment[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(64,8,0,.55);padding:1vh;margin-right:8px}.segment[_ngcontent-%COMP%]:hover{background:#f07b05;color:rgba(54,14,0,.95)}"]}),t})();const u=["menu"];function d(t,n){1&t&&s.Ob(0)}const b=["*"];let g=(()=>{class t{constructor(){}ngOnInit(){}onBack(){history.back()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-navigation"]],contentQueries:function(t,n,e){var o;1&t&&s.Eb(e,u,!0),2&t&&s.kc(o=s.ac())&&(n.menuTemplate=o.first)},inputs:{title:"title",instruction:"instruction"},ngContentSelectors:b,decls:13,vars:3,consts:[[1,"left"],[1,"header"],[1,"menu"],[4,"ngTemplateOutlet"],[3,"press"],[1,"right"]],template:function(t,n){1&t&&(s.gc(),s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"h1"),s.uc(3),s.Rb(),s.Sb(4,"h4"),s.uc(5),s.Rb(),s.Rb(),s.Sb(6,"div",2),s.sc(7,d,1,0,"ng-container",3),s.Rb(),s.Sb(8,"ed-button",4),s.Zb("press",(function(){return n.onBack()})),s.uc(9,"Back"),s.Rb(),s.Rb(),s.Sb(10,"div",5),s.Nb(11,"outfitting-bread-crumb"),s.fc(12),s.Rb()),2&t&&(s.Bb(3),s.vc(n.title),s.Bb(2),s.vc(n.instruction),s.Bb(2),s.hc("ngTemplateOutlet",n.menuTemplate))},directives:[o.m,a.a,r],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;height:calc(100% - 2vh);margin-bottom:2vh}.left[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;flex-direction:column;width:420px;background:rgba(0,0,0,.9);box-shadow:0 0 16px 16px rgba(0,0,0,.9)}.header[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;padding:2vh 2vh 0 1.5vh}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1vh;font-size:3vh}.header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:2vh}.menu[_ngcontent-%COMP%]{height:100%;margin-top:3vh;margin-bottom:1vh;overflow:hidden}.menu[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.right[_ngcontent-%COMP%]{width:100%;margin-left:32px}"]}),t})();var f=e("l7vO");function p(t,n){if(1&t){const t=s.Tb();s.Sb(0,"ed-button-group"),s.Sb(1,"ed-button",2),s.Zb("press",(function(){return s.nc(t),s.cc().onNavigate("hardpoints")})),s.Sb(2,"div",3),s.uc(3,"Hardpoints"),s.Rb(),s.Sb(4,"div",4),s.uc(5,"Ship's weapons"),s.Rb(),s.Rb(),s.Sb(6,"ed-button",2),s.Zb("press",(function(){return s.nc(t),s.cc().onNavigate("utility-mounts")})),s.Sb(7,"div",3),s.uc(8,"Utility mounts"),s.Rb(),s.Sb(9,"div",4),s.uc(10,"Ship's external equipment"),s.Rb(),s.Rb(),s.Sb(11,"ed-button",2),s.Zb("press",(function(){return s.nc(t),s.cc().onNavigate("core-internals")})),s.Sb(12,"div",3),s.uc(13,"Core internal"),s.Rb(),s.Sb(14,"div",4),s.uc(15,"Ship's main internal modules"),s.Rb(),s.Rb(),s.Sb(16,"ed-button",2),s.Zb("press",(function(){return s.nc(t),s.cc().onNavigate("optional-internals")})),s.Sb(17,"div",3),s.uc(18,"Optional internal"),s.Rb(),s.Sb(19,"div",4),s.uc(20,"Ship's optional internal modules"),s.Rb(),s.Rb(),s.Sb(21,"ed-button",5),s.Sb(22,"div",3),s.uc(23,"Livery"),s.Rb(),s.Sb(24,"div",4),s.uc(25,"Ship's appearance, paintjobs, decals, bobbleheads and ship kits"),s.Rb(),s.Rb(),s.Sb(26,"ed-button",2),s.Zb("press",(function(){return s.nc(t),s.cc().onNavigate("stored-modules")})),s.Sb(27,"div",3),s.uc(28,"Stored modules"),s.Rb(),s.Sb(29,"div",4),s.uc(30,"Modules stored in shared storage"),s.Rb(),s.Rb(),s.Rb()}}let h=(()=>{class t{constructor(t,n){this.router=t,this.route=n}ngOnInit(){}onNavigate(t){this.router.navigate([t],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(i.b),s.Mb(i.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[["title","Outfitting","instruction","Select group"],["menu",""],[3,"press"],[1,"button-primary"],[1,"button-secondary"],["state","disabled"]],template:function(t,n){1&t&&(s.Sb(0,"outfitting-navigation",0),s.sc(1,p,31,0,"ng-template",null,1,s.tc),s.Rb())},directives:[g,f.a,a.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-button-group[_ngcontent-%COMP%] > ed-button[_ngcontent-%COMP%]{height:8.5vh}ed-button-group[_ngcontent-%COMP%] > ed-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#ff6105;font-size:2.5vh;margin-left:8px}ed-button-group[_ngcontent-%COMP%] > ed-button[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:rgba(187,44,0,.5);font-size:1.5vh;margin-left:8px}.button-primary[_ngcontent-%COMP%]{font-size:2.5vh;margin-left:8px}.button-secondary[_ngcontent-%COMP%]{margin-left:8px;font-size:1.5vh;font-weight:700;text-transform:none;opacity:.4}"]}),t})();var m=e("TP6R"),v=e("DE09");function x(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(2);s.rc("background-color",t.value>=1?t.color:"unset")}}function S(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(2);s.rc("background-color",t.value>=2?t.color:"unset")}}function C(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(2);s.rc("background-color",t.value>=3?t.color:"unset")}}function O(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(2);s.rc("background-color",t.value>=4?t.color:"unset")}}function y(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(3);s.rc("background-color",t.value>=5?t.color:"unset")}}function M(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(3);s.rc("background-color",t.value>=6?t.color:"unset")}}function P(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(3);s.rc("background-color",t.value>=7?t.color:"unset")}}function R(t,n){if(1&t&&s.Nb(0,"div",4),2&t){const t=s.cc(3);s.rc("background-color",t.value>=8?t.color:"unset")}}function _(t,n){if(1&t&&(s.Sb(0,"div",1),s.sc(1,y,1,2,"div",2),s.sc(2,M,1,2,"div",2),s.sc(3,P,1,2,"div",2),s.sc(4,R,1,2,"div",2),s.Rb()),2&t){const t=s.cc(2);s.Bb(1),s.hc("ngIf",t.max>=5),s.Bb(1),s.hc("ngIf",t.max>=6),s.Bb(1),s.hc("ngIf",t.max>=7),s.Bb(1),s.hc("ngIf",t.max>=8)}}function w(t,n){if(1&t&&(s.Qb(0),s.Sb(1,"div",1),s.sc(2,x,1,2,"div",2),s.sc(3,S,1,2,"div",2),s.sc(4,C,1,2,"div",2),s.sc(5,O,1,2,"div",2),s.Rb(),s.sc(6,_,5,4,"div",3),s.Pb()),2&t){const t=s.cc();s.Bb(2),s.hc("ngIf",t.max>=0),s.Bb(1),s.hc("ngIf",t.max>=2),s.Bb(1),s.hc("ngIf",t.max>=3),s.Bb(1),s.hc("ngIf",t.max>=4),s.Bb(1),s.hc("ngIf",t.max>=5)}}function B(t,n){if(1&t&&(s.Qb(0),s.Sb(1,"div",1),s.Nb(2,"div",4),s.Nb(3,"div",4),s.Nb(4,"div",4),s.Rb(),s.Sb(5,"div",1),s.Nb(6,"div",4),s.Nb(7,"div",4),s.Nb(8,"div",4),s.Rb(),s.Pb()),2&t){const t=s.cc();s.Bb(2),s.rc("background-color",t.value>=1?t.color:"unset"),s.Bb(1),s.rc("background-color",t.value>=2?t.color:"unset"),s.Bb(1),s.rc("background-color",t.value>=3?t.color:"unset"),s.Bb(2),s.rc("background-color",t.value>=4?t.color:"unset"),s.Bb(1),s.rc("background-color",t.value>=5?t.color:"unset"),s.Bb(1),s.rc("background-color",t.value>=6?t.color:"unset")}}let I=(()=>{class t{constructor(){this.color="white"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-slot-class"]],inputs:{value:"value",max:"max"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"dotrow"],["class","dot",3,"background-color",4,"ngIf"],["class","dotrow",4,"ngIf"],[1,"dot"]],template:function(t,n){1&t&&(s.sc(0,w,7,5,"ng-container",0),s.sc(1,B,9,12,"ng-container",0)),2&t&&(s.hc("ngIf",n.max>=0&&6!==n.max),s.Bb(1),s.hc("ngIf",6===n.max))},directives:[o.j],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.dotrow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.dot[_ngcontent-%COMP%]{width:.5vh;height:.5vh;border-radius:50%;border:1px solid #fff;margin:1px}"]}),t})();function N(t,n){if(1&t&&(s.Qb(0),s.Sb(1,"div"),s.uc(2),s.Rb(),s.Sb(3,"div",5),s.uc(4),s.Rb(),s.Pb()),2&t){const t=s.cc();s.Bb(2),s.xc("",t.slot.module.getClassification()," ",t.slot.module.getName(),""),s.Bb(2),s.vc(t.getSlotName())}}function k(t,n){if(1&t&&(s.Sb(0,"div",5),s.uc(1),s.Rb()),2&t){const t=s.cc();s.Bb(1),s.wc("Empty ",t.getSlotName(),"")}}let z=(()=>{class t{constructor(){}ngOnInit(){}getSlotName(){return this.slot.constructor.slotName}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-slot"]],inputs:{slot:"slot"},decls:8,vars:5,consts:[[1,"size"],[3,"value","max"],[1,"fitting"],[4,"ngIf","ngIfElse"],["emptyTemplate",""],[1,"slotname"]],template:function(t,n){if(1&t&&(s.Sb(0,"div",0),s.Sb(1,"span"),s.uc(2),s.Rb(),s.Nb(3,"outfitting-slot-class",1),s.Rb(),s.Sb(4,"div",2),s.sc(5,N,5,3,"ng-container",3),s.sc(6,k,2,1,"ng-template",null,4,s.tc),s.Rb()),2&t){const t=s.lc(7);s.Bb(2),s.vc(n.slot.maxClass),s.Bb(1),s.hc("value",n.slot.getModuleSize())("max",n.slot.maxClass),s.Bb(2),s.hc("ngIf",n.slot.module)("ngIfElse",t)}},directives:[I,o.j],styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:row;height:8.5vh}.size[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.size[_ngcontent-%COMP%]{flex:0 0 20%;flex-direction:column;align-items:center;justify-content:center;font-size:3.5vh;color:#fff;background-color:rgba(64,8,0,.55)}.size[_ngcontent-%COMP%]   outfitting-slot-class[_ngcontent-%COMP%]{margin:4px}.fitting[_ngcontent-%COMP%]{padding:1vh}.slotname[_ngcontent-%COMP%]{opacity:.5}"]}),t})();var T=e("65hZ");const j=["*"];let G=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-statistic"]],inputs:{name:"name"},ngContentSelectors:j,decls:4,vars:1,consts:[[1,"statname"],[1,"statcontent"]],template:function(t,n){1&t&&(s.gc(),s.Sb(0,"div",0),s.uc(1),s.Rb(),s.Sb(2,"div",1),s.fc(3),s.Rb()),2&t&&(s.Bb(1),s.vc(n.name))},styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;border-bottom:1px solid rgba(187,44,0,.5);padding:4px}.statname[_ngcontent-%COMP%]{flex:0 0 75%;opacity:.5}.statcontent[_ngcontent-%COMP%], .statname[_ngcontent-%COMP%]{display:flex}"]}),t})();function Z(t,n){if(1&t&&(s.Qb(0),s.Sb(1,"div",4),s.Sb(2,"div",5),s.Sb(3,"span"),s.uc(4),s.Rb(),s.Nb(5,"outfitting-slot-class",1),s.Rb(),s.Sb(6,"div",6),s.uc(7),s.Rb(),s.Rb(),s.Nb(8,"ed-frame-spacer"),s.Sb(9,"div"),s.Sb(10,"outfitting-statistic",7),s.uc(11),s.Rb(),s.Sb(12,"outfitting-statistic",8),s.uc(13),s.Rb(),s.Sb(14,"outfitting-statistic",9),s.uc(15),s.Rb(),s.Sb(16,"outfitting-statistic",10),s.uc(17),s.Rb(),s.Rb(),s.Pb()),2&t){const t=s.cc();s.Bb(4),s.vc(t.slot.module.getClassification()),s.Bb(1),s.hc("value",t.slot.getModuleSize())("max",t.slot.getModuleSize()),s.Bb(2),s.vc(t.slot.module.getName()),s.Bb(4),s.vc(t.slot.module.stats().size),s.Bb(2),s.vc(t.slot.module.stats().grade),s.Bb(2),s.wc("",t.slot.module.stats().mass," T"),s.Bb(2),s.vc(t.slot.module.stats().integrity)}}function Q(t,n){1&t&&(s.Qb(0),s.Sb(1,"ed-button"),s.uc(2,"Sell"),s.Rb(),s.Sb(3,"ed-button"),s.uc(4,"Transfer options"),s.Rb(),s.Pb())}const E=["*"];let J=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["outfitting-slot-details"]],inputs:{slot:"slot"},ngContentSelectors:E,decls:12,vars:5,consts:[[1,"header"],[3,"value","max"],[1,"details"],[4,"ngIf"],[1,"module-header"],[1,"module-header-class"],[1,"module-header-name"],["name","Class"],["name","Rating"],["name","Mass"],["name","Integrity"]],template:function(t,n){1&t&&(s.gc(),s.Sb(0,"div",0),s.Sb(1,"h1"),s.uc(2),s.Rb(),s.Nb(3,"outfitting-slot-class",1),s.Rb(),s.Sb(4,"div",2),s.sc(5,Z,18,8,"ng-container",3),s.fc(6),s.Rb(),s.Sb(7,"ed-button"),s.uc(8,"Browse shop"),s.Rb(),s.sc(9,Q,5,0,"ng-container",3),s.Sb(10,"ed-button"),s.uc(11,"Back"),s.Rb()),2&t&&(s.Bb(2),s.wc("CLASS ",n.slot.maxClass,""),s.Bb(1),s.hc("value",n.slot.getModuleSize())("max",n.slot.maxClass),s.Bb(2),s.hc("ngIf",n.slot.module),s.Bb(4),s.hc("ngIf",n.slot.module))},directives:[I,o.j,a.a,T.a,G],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;width:420px;border-left:2px solid rgba(187,44,0,.5);background:rgba(0,0,0,.8);box-shadow:0 0 16px 16px rgba(0,0,0,.9)}.header[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:2vh;box-shadow:inset 0 -4px 4px 2px rgba(0,0,0,.9);align-items:center}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;font-size:3vh}.header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:2vh}.details[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;padding:1vh;background:rgba(0,0,0,.8)}.module-header[_ngcontent-%COMP%]{display:flex;flex-direction:row}.module-header-class[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:3vh}.module-header-class[_ngcontent-%COMP%]   outfitting-slot-class[_ngcontent-%COMP%]{margin-top:.5vh}.module-header-name[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:2vh;padding-left:1vh;padding-top:.5vh}"]}),t})();function $(t,n){1&t&&s.Nb(0,"outfitting-slot",4),2&t&&s.hc("slot",n.$implicit)}function K(t,n){if(1&t){const t=s.Tb();s.Sb(0,"ed-list",3),s.Zb("selectedChange",(function(n){return s.nc(t),s.cc().selected=n})),s.sc(1,$,1,1,"ng-template"),s.Rb()}if(2&t){const t=s.cc();s.hc("data",t.ship.hardpoints)("selected",t.selected)}}function L(t,n){if(1&t&&s.Nb(0,"outfitting-slot-details",4),2&t){const t=s.cc();s.hc("slot",t.selected)}}function U(t,n){1&t&&s.Nb(0,"outfitting-slot",4),2&t&&s.hc("slot",n.$implicit)}function q(t,n){if(1&t){const t=s.Tb();s.Sb(0,"ed-list",3),s.Zb("selectedChange",(function(n){return s.nc(t),s.cc().selected=n})),s.sc(1,U,1,1,"ng-template"),s.Rb()}if(2&t){const t=s.cc();s.hc("data",t.ship.utility)("selected",t.selected)}}function H(t,n){if(1&t&&s.Nb(0,"outfitting-slot-details",4),2&t){const t=s.cc();s.hc("slot",t.selected)}}function X(t,n){1&t&&s.Nb(0,"outfitting-slot",4),2&t&&s.hc("slot",n.$implicit)}function A(t,n){if(1&t){const t=s.Tb();s.Sb(0,"ed-list",3),s.Zb("selectedChange",(function(n){return s.nc(t),s.cc().selected=n})),s.sc(1,X,1,1,"ng-template"),s.Rb()}if(2&t){const t=s.cc();s.hc("data",t.ship.getCoreCompartments())("selected",t.selected)}}function D(t,n){if(1&t&&s.Nb(0,"outfitting-slot-details",4),2&t){const t=s.cc();s.hc("slot",t.selected)}}function F(t,n){1&t&&s.Nb(0,"outfitting-slot",4),2&t&&s.hc("slot",n.$implicit)}function V(t,n){if(1&t){const t=s.Tb();s.Sb(0,"ed-list",3),s.Zb("selectedChange",(function(n){return s.nc(t),s.cc().selected=n})),s.sc(1,F,1,1,"ng-template"),s.Rb()}if(2&t){const t=s.cc();s.hc("data",t.ship.optionalCompartments)("selected",t.selected)}}function W(t,n){if(1&t&&s.Nb(0,"outfitting-slot-details",4),2&t){const t=s.cc();s.hc("slot",t.selected)}}const Y=[{path:"",component:l,children:[{path:"",component:h},{path:"hardpoints",component:(()=>{class t{constructor(t){this.shipService=t,this.shipService.ship.subscribe(t=>{this.ship=t})}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(m.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["title","Hardpoints","instruction","select slot"],["menu",""],[3,"slot",4,"ngIf"],["blockPadding","0px",3,"data","selected","selectedChange"],[3,"slot"]],template:function(t,n){1&t&&(s.Sb(0,"outfitting-navigation",0),s.sc(1,K,2,2,"ng-template",null,1,s.tc),s.sc(3,L,1,1,"outfitting-slot-details",2),s.Rb()),2&t&&(s.Bb(3),s.hc("ngIf",n.selected))},directives:[g,o.j,v.a,z,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}ed-list[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}"]}),t})()},{path:"utility-mounts",component:(()=>{class t{constructor(t){this.shipService=t,this.shipService.ship.subscribe(t=>{this.ship=t})}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(m.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["title","Utility mounts","instruction","select slot"],["menu",""],[3,"slot",4,"ngIf"],["blockPadding","0px",3,"data","selected","selectedChange"],[3,"slot"]],template:function(t,n){1&t&&(s.Sb(0,"outfitting-navigation",0),s.sc(1,q,2,2,"ng-template",null,1,s.tc),s.sc(3,H,1,1,"outfitting-slot-details",2),s.Rb()),2&t&&(s.Bb(3),s.hc("ngIf",n.selected))},directives:[g,o.j,v.a,z,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}"]}),t})()},{path:"core-internals",component:(()=>{class t{constructor(t){this.shipService=t,this.shipService.ship.subscribe(t=>{this.ship=t})}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(m.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["title","Core internal","instruction","select slot"],["menu",""],[3,"slot",4,"ngIf"],["blockPadding","0px",3,"data","selected","selectedChange"],[3,"slot"]],template:function(t,n){1&t&&(s.Sb(0,"outfitting-navigation",0),s.sc(1,A,2,2,"ng-template",null,1,s.tc),s.sc(3,D,1,1,"outfitting-slot-details",2),s.Rb()),2&t&&(s.Bb(3),s.hc("ngIf",n.selected))},directives:[g,o.j,v.a,z,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}"]}),t})()},{path:"optional-internals",component:(()=>{class t{constructor(t){this.shipService=t,this.shipService.ship.subscribe(t=>{this.ship=t})}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(s.Mb(m.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["title","Optional internal","instruction","select slot"],["menu",""],[3,"slot",4,"ngIf"],["blockPadding","0px",3,"data","selected","selectedChange"],[3,"slot"]],template:function(t,n){1&t&&(s.Sb(0,"outfitting-navigation",0),s.sc(1,V,2,2,"ng-template",null,1,s.tc),s.sc(3,W,1,1,"outfitting-slot-details",2),s.Rb()),2&t&&(s.Bb(3),s.hc("ngIf",n.selected))},directives:[g,o.j,v.a,z,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}"]}),t})()},{path:"stored-modules",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],decls:1,vars:0,consts:[["title","Stored modules"]],template:function(t,n){1&t&&s.Nb(0,"outfitting-navigation",0)},directives:[g],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}"]}),t})()}]}];let tt=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(n){return new(n||t)},imports:[[i.c.forChild(Y)],i.c]}),t})(),nt=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(n){return new(n||t)},imports:[[o.b,c.a,tt]]}),t})()}}]);