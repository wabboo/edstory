(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{lmR2:function(e,t,n){"use strict";n.r(t),n.d(t,"MenuModule",(function(){return x}));var c=n("ofXK"),r=n("IVc4"),o=n("tyNb"),s=n("fXoL");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,t){1&e&&s.Mb(0,"router-outlet")},directives:[o.e],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center;background:url(/edstory/assets/backgrounds/main2.jpg);background-size:cover}"]}),e})(),a=(()=>{class e{constructor(e,t){this.router=e,this.route=t}ngOnInit(){}onClick(e){this.router.navigate([e],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(o.b),s.Lb(o.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["ng-component"]],decls:14,vars:0,consts:[[1,"destination",3,"click"],[1,"image","ship"],[1,"textbox"],[1,"title"],[1,"description"],[1,"image","settings"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Yb("click",(function(){return t.onClick("/ship/center")})),s.Mb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.sc(4,"Ship"),s.Qb(),s.Rb(5,"div",4),s.sc(6," Enter a simulated ship of Elite: Dangerous. "),s.Qb(),s.Qb(),s.Qb(),s.Rb(7,"div",0),s.Yb("click",(function(){return t.onClick("/tinkering")})),s.Mb(8,"div",5),s.Rb(9,"div",2),s.Rb(10,"div",3),s.sc(11,"Settings"),s.Qb(),s.Rb(12,"div",4),s.sc(13," Turn on/off various alterations to the ship interface. "),s.Qb(),s.Qb(),s.Qb())},styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center}.destination[_ngcontent-%COMP%]{width:300px;height:400px;margin:8px;background:rgba(64,8,0,.55);box-shadow:0 16px 16px 4px #000}.destination[_ngcontent-%COMP%]:hover{background:rgba(175,16,0,.5);cursor:url(/edstory/assets/support/cursor_glow.png) 6 1,pointer}.disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.image[_ngcontent-%COMP%]{width:100%;height:250px;margin-bottom:8px}.ship[_ngcontent-%COMP%]{background:url(/edstory/assets/ship/krait-mk-ii/center.png),url(/edstory/assets/location/station/hangar/center.png);background-size:cover;background-position:-64px}.settings[_ngcontent-%COMP%]{background:url(/edstory/assets/backgrounds/cogs.jpg);background-size:cover;background-position:-32px}.textbox[_ngcontent-%COMP%]{margin:16px}.title[_ngcontent-%COMP%]{margin-bottom:8px;color:#ff6105}.description[_ngcontent-%COMP%]{font-size:small;color:#fff;text-transform:none}"]}),e})();var d=n("4A+J"),u=n("OcQ2"),l=n("OEjf"),g=n("EY6u"),b=n("eihG");function h(e,t){1&e&&s.Mb(0,"ed-icon",3)}function f(e,t){1&e&&s.Mb(0,"ed-icon",4)}const k=["*"];let p=(()=>{class e{constructor(){this.state="active",this.checkedChange=new s.n}get checked(){return this.checkedValue}set checked(e){this.checkedValue=e,this.checkedChange.emit(e)}ngOnInit(){}getCssClass(){let e=" checked";switch(this.checkedValue||(e=" unchecked"),this.state){case"active":return"container active"+e;case"selected":return"container selected"+e;case"disabled":return"container disabled"+e;case"blocked":return"container blocked"+e}}onClick(){"active"===this.state&&(this.checked=!this.checked)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["ed-check"]],inputs:{state:"state",checked:"checked"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:k,decls:4,vars:3,consts:[[3,"ngClass","click"],["icon","checked","size","3",4,"ngIf"],["icon","unchecked","size","3",4,"ngIf"],["icon","checked","size","3"],["icon","unchecked","size","3"]],template:function(e,t){1&e&&(s.ec(),s.Rb(0,"div",0),s.Yb("click",(function(){return t.onClick()})),s.qc(1,h,1,0,"ed-icon",1),s.qc(2,f,1,0,"ed-icon",2),s.dc(3),s.Qb()),2&e&&(s.fc("ngClass",t.getCssClass()),s.Ab(1),s.fc("ngIf",t.checked),s.Ab(1),s.fc("ngIf",!t.checked))},directives:[c.h,c.j,b.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-bottom:4px}.container[_ngcontent-%COMP%]{box-sizing:border-box;height:4vh;display:flex;flex-direction:row;align-items:center;padding-left:.5vw;font-size:1.7vh}ed-icon[_ngcontent-%COMP%]{margin-right:8px}.checked[_ngcontent-%COMP%]{color:#ff6105;stroke:#ff6105}.unchecked[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);stroke:rgba(187,44,0,.7)}.active[_ngcontent-%COMP%]{background:rgba(64,8,0,.55)}.container.active[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.selected[_ngcontent-%COMP%]{background:rgba(175,16,0,.5);color:#ff6105;border-right:8px solid #ff6105}.container.selected[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.disabled[_ngcontent-%COMP%]{background:rgba(48,48,48,.69);color:#fff;stroke:#fff;fill:#fff}.blocked[_ngcontent-%COMP%]{background:rgba(56,0,0,.38);color:#ac0000;stroke:#ac0000;fill:#ac0000}.container.blocked[_ngcontent-%COMP%]:hover{background:#ac0000;color:#000;stroke:#000;fill:#000}"]}),e})();var m=n("L4s4");const C=[{path:"",component:i,children:[{path:"",component:a},{path:"tinkering",component:(()=>{class e{constructor(e){this.commanderService=e,this.commanderService.features.subscribe(e=>{this.features=e})}ngOnInit(){}updateFeatures(){this.commanderService.features.next(this.features)}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(d.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["ng-component"]],decls:23,vars:5,consts:[[1,"columns"],["name","Alternatives","description","Suggested improvements for game"],[3,"checked","checkedChange"],["state","blocked",3,"checked","checkedChange"],["name","Game features","description","Update based additions"]],template:function(e,t){1&e&&(s.Rb(0,"ed-window"),s.Rb(1,"div",0),s.Rb(2,"ed-column"),s.Mb(3,"ed-title",1),s.Rb(4,"h4"),s.sc(5,"Big changes"),s.Qb(),s.Rb(6,"ed-check",2),s.Yb("checkedChange",(function(e){return t.features.corporations=e}))("checkedChange",(function(){return t.updateFeatures()})),s.sc(7,"Corporations"),s.Qb(),s.Rb(8,"ed-check",3),s.Yb("checkedChange",(function(e){return t.features.advisors=e}))("checkedChange",(function(){return t.updateFeatures()})),s.sc(9,"Advisors"),s.Qb(),s.Rb(10,"ed-check",3),s.Yb("checkedChange",(function(e){return t.features.passengerLines=e}))("checkedChange",(function(){return t.updateFeatures()})),s.sc(11,"Passenger lines"),s.Qb(),s.Mb(12,"ed-frame-spacer"),s.Rb(13,"h4"),s.sc(14,"Small changes"),s.Qb(),s.Rb(15,"ed-check",3),s.Yb("checkedChange",(function(e){return t.features.navigationPanelAlternative=e}))("checkedChange",(function(){return t.updateFeatures()})),s.sc(16,"Navigation panel alternative"),s.Qb(),s.Qb(),s.Rb(17,"ed-column"),s.Mb(18,"ed-title",4),s.Rb(19,"h4"),s.sc(20,"June 2020"),s.Qb(),s.Rb(21,"ed-check",2),s.Yb("checkedChange",(function(e){return t.features.fleetCarriers=e}))("checkedChange",(function(){return t.updateFeatures()})),s.sc(22,"Fleet carriers"),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.Ab(6),s.fc("checked",t.features.corporations),s.Ab(2),s.fc("checked",t.features.advisors),s.Ab(2),s.fc("checked",t.features.passengerLines),s.Ab(5),s.fc("checked",t.features.navigationPanelAlternative),s.Ab(6),s.fc("checked",t.features.fleetCarriers))},directives:[u.a,l.a,g.a,p,m.a],styles:["[_nghost-%COMP%]{height:100%}.columns[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-column[_ngcontent-%COMP%]{width:50%;margin:1vw;padding:1vw}"]}),e})()}]}];let v=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[o.d.forChild(C)],o.d]}),e})(),x=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[c.b,r.a,v]]}),e})()}}]);