function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{lmR2:function(e,n,t){"use strict";t.r(n),t.d(n,"MenuModule",(function(){return w}));var c,o,i=t("ofXK"),r=t("IVc4"),s=t("tyNb"),a=t("fXoL"),u=((o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=a.Fb({type:o,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,n){1&e&&a.Mb(0,"router-outlet")},directives:[s.e],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center;background:url(/edstory/assets/backgrounds/main2.jpg);background-size:cover}"]}),o),d=((c=function(){function e(n,t){_classCallCheck(this,e),this.router=n,this.route=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onClick",value:function(e){this.router.navigate([e],{relativeTo:this.route})}}]),e}()).\u0275fac=function(e){return new(e||c)(a.Lb(s.b),a.Lb(s.a))},c.\u0275cmp=a.Fb({type:c,selectors:[["ng-component"]],decls:14,vars:0,consts:[[1,"destination",3,"click"],[1,"image","ship"],[1,"textbox"],[1,"title"],[1,"description"],[1,"image","settings"]],template:function(e,n){1&e&&(a.Rb(0,"div",0),a.Yb("click",(function(){return n.onClick("/ship/center")})),a.Mb(1,"div",1),a.Rb(2,"div",2),a.Rb(3,"div",3),a.sc(4,"Ship"),a.Qb(),a.Rb(5,"div",4),a.sc(6," Enter a simulated ship of Elite: Dangerous. "),a.Qb(),a.Qb(),a.Qb(),a.Rb(7,"div",0),a.Yb("click",(function(){return n.onClick("/tinkering")})),a.Mb(8,"div",5),a.Rb(9,"div",2),a.Rb(10,"div",3),a.sc(11,"Settings"),a.Qb(),a.Rb(12,"div",4),a.sc(13," Turn on/off various alterations to the ship interface. "),a.Qb(),a.Qb(),a.Qb())},styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row;justify-content:center;align-items:center}.destination[_ngcontent-%COMP%]{width:300px;height:400px;margin:8px;background:rgba(64,8,0,.55);box-shadow:0 16px 16px 4px #000}.destination[_ngcontent-%COMP%]:hover{background:rgba(175,16,0,.5);cursor:url(/edstory/assets/support/cursor_glow.png) 6 1,pointer}.disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.image[_ngcontent-%COMP%]{width:100%;height:250px;margin-bottom:8px}.ship[_ngcontent-%COMP%]{background:url(/edstory/assets/ship/krait-mk-ii/center.png),url(/edstory/assets/location/station/hangar/center.png);background-size:cover;background-position:-64px}.settings[_ngcontent-%COMP%]{background:url(/edstory/assets/backgrounds/cogs.jpg);background-size:cover;background-position:-32px}.textbox[_ngcontent-%COMP%]{margin:16px}.title[_ngcontent-%COMP%]{margin-bottom:8px;color:#ff6105}.description[_ngcontent-%COMP%]{font-size:small;color:#fff;text-transform:none}"]}),c),l=t("4A+J"),f=t("OcQ2"),h=t("OEjf"),g=t("EY6u"),b=t("eihG");function k(e,n){1&e&&a.Mb(0,"ed-icon",3)}function p(e,n){1&e&&a.Mb(0,"ed-icon",4)}var C,v,m,_,y=["*"],x=((C=function(){function e(){_classCallCheck(this,e),this.state="active",this.checkedChange=new a.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getCssClass",value:function(){var e=" checked";switch(this.checkedValue||(e=" unchecked"),this.state){case"active":return"container active"+e;case"selected":return"container selected"+e;case"disabled":return"container disabled"+e;case"blocked":return"container blocked"+e}}},{key:"onClick",value:function(){"active"===this.state&&(this.checked=!this.checked)}},{key:"checked",get:function(){return this.checkedValue},set:function(e){this.checkedValue=e,this.checkedChange.emit(e)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=a.Fb({type:C,selectors:[["ed-check"]],inputs:{state:"state",checked:"checked"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:y,decls:4,vars:3,consts:[[3,"ngClass","click"],["icon","checked","size","3",4,"ngIf"],["icon","unchecked","size","3",4,"ngIf"],["icon","checked","size","3"],["icon","unchecked","size","3"]],template:function(e,n){1&e&&(a.ec(),a.Rb(0,"div",0),a.Yb("click",(function(){return n.onClick()})),a.qc(1,k,1,0,"ed-icon",1),a.qc(2,p,1,0,"ed-icon",2),a.dc(3),a.Qb()),2&e&&(a.fc("ngClass",n.getCssClass()),a.Ab(1),a.fc("ngIf",n.checked),a.Ab(1),a.fc("ngIf",!n.checked))},directives:[i.h,i.j,b.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-bottom:4px}.container[_ngcontent-%COMP%]{box-sizing:border-box;height:4vh;display:flex;flex-direction:row;align-items:center;padding-left:.5vw;font-size:1.7vh}ed-icon[_ngcontent-%COMP%]{margin-right:8px}.checked[_ngcontent-%COMP%]{color:#ff6105;stroke:#ff6105}.unchecked[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);stroke:rgba(187,44,0,.7)}.active[_ngcontent-%COMP%]{background:rgba(64,8,0,.55)}.container.active[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.selected[_ngcontent-%COMP%]{background:rgba(175,16,0,.5);color:#ff6105;border-right:8px solid #ff6105}.container.selected[_ngcontent-%COMP%]:hover{background:#f07b05;color:#000}.disabled[_ngcontent-%COMP%]{background:rgba(48,48,48,.69);color:#fff;stroke:#fff;fill:#fff}.blocked[_ngcontent-%COMP%]{background:rgba(56,0,0,.38);color:#ac0000;stroke:#ac0000;fill:#ac0000}.container.blocked[_ngcontent-%COMP%]:hover{background:#ac0000;color:#000;stroke:#000;fill:#000}"]}),C),M=t("L4s4"),O=[{path:"",component:u,children:[{path:"",component:d},{path:"tinkering",component:(v=function(){function e(n){var t=this;_classCallCheck(this,e),this.commanderService=n,this.commanderService.features.subscribe((function(e){t.features=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"updateFeatures",value:function(){this.commanderService.features.next(this.features)}}]),e}(),v.\u0275fac=function(e){return new(e||v)(a.Lb(l.a))},v.\u0275cmp=a.Fb({type:v,selectors:[["ng-component"]],decls:21,vars:4,consts:[[1,"columns"],["name","Alternatives","description","Suggested improvements for game"],[3,"checked","checkedChange"],["name","Game features","description","Update based additions"]],template:function(e,n){1&e&&(a.Rb(0,"ed-window"),a.Rb(1,"div",0),a.Rb(2,"ed-column"),a.Mb(3,"ed-title",1),a.Rb(4,"h4"),a.sc(5,"Big changes"),a.Qb(),a.Rb(6,"ed-check",2),a.Yb("checkedChange",(function(e){return n.features.corporations=e}))("checkedChange",(function(){return n.updateFeatures()})),a.sc(7,"Corporations"),a.Qb(),a.Rb(8,"ed-check",2),a.Yb("checkedChange",(function(e){return n.features.passengerLines=e}))("checkedChange",(function(){return n.updateFeatures()})),a.sc(9,"Passenger lines"),a.Qb(),a.Mb(10,"ed-frame-spacer"),a.Rb(11,"h4"),a.sc(12,"Small changes"),a.Qb(),a.Rb(13,"ed-check",2),a.Yb("checkedChange",(function(e){return n.features.navigationPanelAlternative=e}))("checkedChange",(function(){return n.updateFeatures()})),a.sc(14,"Navigation panel alternative"),a.Qb(),a.Qb(),a.Rb(15,"ed-column"),a.Mb(16,"ed-title",3),a.Rb(17,"h4"),a.sc(18,"June 2020"),a.Qb(),a.Rb(19,"ed-check",2),a.Yb("checkedChange",(function(e){return n.features.fleetCarriers=e}))("checkedChange",(function(){return n.updateFeatures()})),a.sc(20,"Fleet carriers"),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.Ab(6),a.fc("checked",n.features.corporations),a.Ab(2),a.fc("checked",n.features.passengerLines),a.Ab(5),a.fc("checked",n.features.navigationPanelAlternative),a.Ab(6),a.fc("checked",n.features.fleetCarriers))},directives:[f.a,h.a,g.a,x,M.a],styles:["[_nghost-%COMP%]{height:100%}.columns[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-column[_ngcontent-%COMP%]{width:50%;margin:1vw;padding:1vw}"]}),v)}]}],P=((_=function e(){_classCallCheck(this,e)}).\u0275mod=a.Jb({type:_}),_.\u0275inj=a.Ib({factory:function(e){return new(e||_)},imports:[[s.d.forChild(O)],s.d]}),_),w=((m=function e(){_classCallCheck(this,e)}).\u0275mod=a.Jb({type:m}),m.\u0275inj=a.Ib({factory:function(e){return new(e||m)},imports:[[i.b,r.a,P]]}),m)}}]);