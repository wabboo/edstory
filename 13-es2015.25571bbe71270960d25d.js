(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{lmR2:function(e,t,n){"use strict";n.r(t),n.d(t,"MenuModule",(function(){return x}));var c=n("ofXK"),o=n("IVc4"),r=n("tyNb"),i=n("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,t){1&e&&i.Mb(0,"router-outlet")},directives:[r.e],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center;background:url(/edstory/assets/backgrounds/main2.jpg);background-size:cover}"]}),e})(),a=(()=>{class e{constructor(e,t){this.router=e,this.route=t}ngOnInit(){}onClick(e){this.router.navigate([e],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(r.b),i.Lb(r.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:14,vars:0,consts:[[1,"destination",3,"click"],[1,"image","ship"],[1,"textbox"],[1,"title"],[1,"description"],[1,"image","settings"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Yb("click",(function(){return t.onClick("/ship/center")})),i.Mb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.sc(4,"Ship"),i.Qb(),i.Rb(5,"div",4),i.sc(6," Enter a simulated ship of Elite: Dangerous. "),i.Qb(),i.Qb(),i.Qb(),i.Rb(7,"div",0),i.Yb("click",(function(){return t.onClick("/tinkering")})),i.Mb(8,"div",5),i.Rb(9,"div",2),i.Rb(10,"div",3),i.sc(11,"Settings"),i.Qb(),i.Rb(12,"div",4),i.sc(13," Turn on/off various alterations to the ship interface. "),i.Qb(),i.Qb(),i.Qb())},styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center}.destination[_ngcontent-%COMP%]{width:300px;height:400px;margin:8px;background:rgba(64,8,0,.55);box-shadow:0 16px 16px 4px #000}.destination[_ngcontent-%COMP%]:hover{background:rgba(175,16,0,.5);cursor:url(/edstory/assets/support/cursor_glow.png) 6 1,pointer}.disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.image[_ngcontent-%COMP%]{width:100%;height:250px;margin-bottom:8px}.ship[_ngcontent-%COMP%]{background:url(/edstory/assets/ship/krait-mk-ii/center.png),url(/edstory/assets/location/station/hangar/center.png);background-size:cover;background-position:-64px}.settings[_ngcontent-%COMP%]{background:url(/edstory/assets/backgrounds/cogs.jpg);background-size:cover;background-position:-32px}.textbox[_ngcontent-%COMP%]{margin:16px}.title[_ngcontent-%COMP%]{margin-bottom:8px;color:#ff6105}.description[_ngcontent-%COMP%]{font-size:small;color:#fff;text-transform:none}"]}),e})();var d=n("4A+J"),u=n("OcQ2"),l=n("OEjf"),g=n("EY6u"),b=n("eihG");function h(e,t){1&e&&i.Mb(0,"ed-icon",3)}function f(e,t){1&e&&i.Mb(0,"ed-icon",4)}const p=["*"];let k=(()=>{class e{constructor(){this.state="active",this.checkedChange=new i.n}get checked(){return this.checkedValue}set checked(e){this.checkedValue=e,this.checkedChange.emit(e)}ngOnInit(){}getCssClass(){let e=" checked";switch(this.checkedValue||(e=" unchecked"),this.state){case"active":return"container active"+e;case"selected":return"container selected"+e;case"disabled":return"container disabled"+e;case"blocked":return"container blocked"+e}}onClick(){"active"===this.state&&(this.checked=!this.checked)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["ed-check"]],inputs:{state:"state",checked:"checked"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:p,decls:4,vars:3,consts:[[3,"ngClass","click"],["icon","checked","size","3",4,"ngIf"],["icon","unchecked","size","3",4,"ngIf"],["icon","checked","size","3"],["icon","unchecked","size","3"]],template:function(e,t){1&e&&(i.ec(),i.Rb(0,"div",0),i.Yb("click",(function(){return t.onClick()})),i.qc(1,h,1,0,"ed-icon",1),i.qc(2,f,1,0,"ed-icon",2),i.dc(3),i.Qb()),2&e&&(i.fc("ngClass",t.getCssClass()),i.Ab(1),i.fc("ngIf",t.checked),i.Ab(1),i.fc("ngIf",!t.checked))},directives:[c.h,c.j,b.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-bottom:4px}.container[_ngcontent-%COMP%]{box-sizing:border-box;height:4vh;display:flex;flex-direction:row;align-items:center;padding-left:.5vw;font-size:1.7vh}ed-icon[_ngcontent-%COMP%]{margin-right:8px}.checked[_ngcontent-%COMP%]{color:#ff6105;stroke:#ff6105}.unchecked[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);stroke:rgba(187,44,0,.7)}.active[_ngcontent-%COMP%]{background:rgba(64,8,0,.55)}.container.active[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.selected[_ngcontent-%COMP%]{background:rgba(175,16,0,.5);color:#ff6105;border-right:8px solid #ff6105}.container.selected[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.disabled[_ngcontent-%COMP%]{background:rgba(48,48,48,.69);color:#fff;stroke:#fff;fill:#fff}.blocked[_ngcontent-%COMP%]{background:rgba(56,0,0,.38);color:#ac0000;stroke:#ac0000;fill:#ac0000}.container.blocked[_ngcontent-%COMP%]:hover{background:#ac0000;color:#000;stroke:#000;fill:#000}"]}),e})();var m=n("L4s4");const C=[{path:"",component:s,children:[{path:"",component:a},{path:"tinkering",component:(()=>{class e{constructor(e){this.commanderService=e,this.commanderService.features.subscribe(e=>{this.features=e})}ngOnInit(){}updateFeatures(){this.commanderService.features.next(this.features)}}return e.\u0275fac=function(t){return new(t||e)(i.Lb(d.a))},e.\u0275cmp=i.Fb({type:e,selectors:[["ng-component"]],decls:21,vars:4,consts:[[1,"columns"],["name","Alternatives","description","Suggested improvements for game"],[3,"checked","checkedChange"],["name","Game features","description","Update based additions"]],template:function(e,t){1&e&&(i.Rb(0,"ed-window"),i.Rb(1,"div",0),i.Rb(2,"ed-column"),i.Mb(3,"ed-title",1),i.Rb(4,"h4"),i.sc(5,"Big changes"),i.Qb(),i.Rb(6,"ed-check",2),i.Yb("checkedChange",(function(e){return t.features.corporations=e}))("checkedChange",(function(){return t.updateFeatures()})),i.sc(7,"Corporations"),i.Qb(),i.Rb(8,"ed-check",2),i.Yb("checkedChange",(function(e){return t.features.passengerLines=e}))("checkedChange",(function(){return t.updateFeatures()})),i.sc(9,"Passenger lines"),i.Qb(),i.Mb(10,"ed-frame-spacer"),i.Rb(11,"h4"),i.sc(12,"Small changes"),i.Qb(),i.Rb(13,"ed-check",2),i.Yb("checkedChange",(function(e){return t.features.navigationPanelAlternative=e}))("checkedChange",(function(){return t.updateFeatures()})),i.sc(14,"Navigation panel alternative"),i.Qb(),i.Qb(),i.Rb(15,"ed-column"),i.Mb(16,"ed-title",3),i.Rb(17,"h4"),i.sc(18,"June 2020"),i.Qb(),i.Rb(19,"ed-check",2),i.Yb("checkedChange",(function(e){return t.features.fleetCarriers=e}))("checkedChange",(function(){return t.updateFeatures()})),i.sc(20,"Fleet carriers"),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.Ab(6),i.fc("checked",t.features.corporations),i.Ab(2),i.fc("checked",t.features.passengerLines),i.Ab(5),i.fc("checked",t.features.navigationPanelAlternative),i.Ab(6),i.fc("checked",t.features.fleetCarriers))},directives:[u.a,l.a,g.a,k,m.a],styles:["[_nghost-%COMP%]{height:100%}.columns[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-column[_ngcontent-%COMP%]{width:50%;margin:1vw;padding:1vw}"]}),e})()}]}];let v=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[r.d.forChild(C)],r.d]}),e})(),x=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[c.b,o.a,v]]}),e})()}}]);