function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4A+J":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i,r=n("2Vo4"),s=function t(){_classCallCheck(this,t),this.corporations=!0,this.altNavigationPanel=!1,this.passengerLines=!1,this.advisors=!1,this.mechanic=!1,this.restructuredShipPanels=!1,this.fleetCarriers=!0,this.odyssey=!1},a=function t(){_classCallCheck(this,t)},o=n("fXoL"),c=((i=function t(){_classCallCheck(this,t),this.features=new r.a(new s),this.commander=new r.a(void 0);var e=new a;e.name="TestSubject",e.balance=1e7,this.commander.next(e)}).\u0275fac=function(t){return new(t||i)},i.\u0275prov=o.Ib({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},DzGr:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("IVc4"),r=n("ofXK"),s=n("fXoL"),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[r.b,i.a]]}),t}()},"FCE/":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("ys0j"),s=n("PqYM"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.state=new i.n,this.keyMouseState=new r.a,this.tick=0}return _createClass(t,[{key:"attach",value:function(t){var e=this;this.domElement&&(this.domElement.removeEventListener("mousemove",(function(t){e.mouseHandler(t,"move")})),this.domElement.removeEventListener("mousedown",(function(t){e.mouseHandler(t,"down")})),this.domElement.removeEventListener("mouseup",(function(t){e.mouseHandler(t,"up")})),this.domElement.removeEventListener("wheel",(function(t){e.wheelHandler(t)}))),this.domElement=t,this.domElement.addEventListener("mousemove",(function(t){e.mouseHandler(t,"move")})),this.domElement.addEventListener("mousedown",(function(t){e.mouseHandler(t,"down")})),this.domElement.addEventListener("mouseup",(function(t){e.mouseHandler(t,"up")})),this.domElement.addEventListener("wheel",(function(t){e.wheelHandler(t)})),this.processState()}},{key:"mouseHandler",value:function(t,e){this.keyMouseState.applyMouse(t,e,this.tick),t.stopPropagation()}},{key:"wheelHandler",value:function(t){this.keyMouseState.applyWheel(t,this.tick)}},{key:"processState",value:function(){var t=this;this.tick+=1,this.keyMouseState.userInput&&(this.state.emit(this.keyMouseState),this.keyMouseState.userInput=!1,this.keyMouseState.applyTick()),Object(s.a)(16.67).subscribe((function(){return t.processState()}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},HP1K:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("VO3d"),r=n("ZmmG"),s=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).systems=[],t}return _createClass(n,[{key:"load",value:function(t){var e,n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){var i=e.value,s=new r.a;s.name=i.name,s.coords.set(i.coords.x,i.coords.y,i.coords.z),this.attach(s),this.systems.push(s)}}catch(a){n.e(a)}finally{n.f()}}},{key:"applyLod",value:function(t,e){}},{key:"run",value:function(t){_get(_getPrototypeOf(n.prototype),"run",this).call(this,t);var e,i=_createForOfIteratorHelper(this.systems);try{for(i.s();!(e=i.n()).done;){e.value.run(t)}}catch(r){i.e(r)}finally{i.f()}}},{key:"updateContext",value:function(t,e){}}]),n}(i.a)},Jrv8:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i,r=n("Womt"),s=n("krhP"),a=n("ys0j"),o=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;_classCallCheck(this,n),(t=e.call(this)).cameraZoom=100,t.cameraAngle=1,t.cameraRotation=1,t.cameraPosition=new r.p,t.actualZoom=100,t.actualAngle=1,t.actualRotation=1;var i=new r.b(1,10),s=new r.i({color:"white"});s.side=r.f;var a=new r.h(i,s);return t.add(a),t}return _createClass(n,[{key:"updateCamera",value:function(t){this.actualZoom=this.actualZoom+(this.cameraZoom-this.actualZoom)/10,this.actualRotation=this.actualRotation+(this.cameraRotation-this.actualRotation)/10,this.actualAngle=this.actualAngle+(this.cameraAngle-this.actualAngle)/10,this.position.lerp(this.cameraPosition,.1);var e=new r.p,n=new r.p(0,0,1);e.set(Math.sin(this.actualRotation),Math.cos(this.actualRotation),Math.sin(this.actualAngle)),t.position.copy(this.position),t.position.addScaledVector(e,this.actualZoom),t.position.addScaledVector(n,10),t.lookAt(this.position),t.up.copy(n)}}]),n}(r.j),c=n("fXoL"),u=((i=function(){function t(e){_classCallCheck(this,t),this.element=e,this.loader=new r.e,this.renderer=new r.q,this.scene=new r.l,this.camera=new r.k(60,window.innerWidth/window.innerHeight,1e-4,1e6),this.grid=new r.g(1e3,100,new r.c("blue"),new r.c("teal")),this.cursor=new o,e.nativeElement.oncontextmenu=function(t){t.preventDefault()}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.element.nativeElement.appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setAnimationLoop((function(){t.renderFrame()})),this.scene.background=this.loader.load(["assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg"])}},{key:"ngOnDestroy",value:function(){this.scene.dispose(),this.renderer.dispose()}},{key:"onResize",value:function(t){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}},{key:"resetViewport",value:function(t){this.grid.rotation.set(.5*Math.PI,0,0),this.grid.renderOrder=1,this.scene.children=[],this.scene.children.push(this.cursor),this.scene.children.push(this.grid),t.linkToScene(this.scene)}},{key:"applyGamepadStateToMapCamera",value:function(t){var e=new r.p;this.camera.getWorldDirection(e),e.z=0;var n=e.clone().applyAxisAngle(new r.p(0,0,1),.5*Math.PI);t.buttonX===s.a.Hold?this.cursor.cameraPosition.z+=t.leftStickAxisY*(this.cursor.cameraZoom/100):(this.cursor.cameraPosition.addScaledVector(e,t.leftStickAxisY*(this.cursor.cameraZoom/100)),this.cursor.cameraPosition.addScaledVector(n,this.cursor.cameraZoom/100*-t.leftStickAxisX)),this.cursor.cameraRotation+=t.rightStickAxisX/20,this.cursor.cameraAngle-=t.rightStickAxisY/20,this.cursor.cameraAngle>.5*Math.PI&&(this.cursor.cameraAngle=.5*Math.PI),this.cursor.cameraAngle<.5*-Math.PI&&(this.cursor.cameraAngle=.5*-Math.PI),t.rightTrigger>0?(this.cursor.cameraZoom-=5,this.cursor.cameraZoom<5&&(this.cursor.cameraZoom=5)):t.leftTrigger>0&&(this.cursor.cameraZoom+=5)}},{key:"applyMouseStateToMapCamera",value:function(t){var e=new r.p;this.camera.getWorldDirection(e),e.z=0;var n=e.clone().applyAxisAngle(new r.p(0,0,1),.5*Math.PI);t.leftMouse===a.b.Hold&&t.rightMouse===a.b.Hold?(this.cursor.cameraPosition.addScaledVector(e,t.deltaY),this.cursor.cameraPosition.addScaledVector(n,t.deltaX)):t.leftMouse===a.b.Hold?(this.cursor.cameraRotation+=t.deltaX/100,this.cursor.cameraAngle+=t.deltaY/100,this.cursor.cameraAngle>Math.PI&&(this.cursor.cameraAngle=Math.PI),this.cursor.cameraAngle<-Math.PI&&(this.cursor.cameraAngle=-Math.PI)):t.rightMouse===a.b.Hold&&(this.cursor.cameraPosition.z+=t.deltaY),t.deltaZ<0?(this.cursor.cameraZoom-=10,this.cursor.cameraZoom<5&&(this.cursor.cameraZoom=5)):t.deltaZ>0&&(this.cursor.cameraZoom+=10)}},{key:"renderFrame",value:function(){this.tick=Date.now(),this.run(this.tick),this.cursor.updateCamera(this.camera),this.grid.position.setZ(this.cursor.position.z),this.renderer.render(this.scene,this.camera)}}]),t}()).\u0275fac=function(t){return new(t||i)(c.Mb(c.l))},i.\u0275dir=c.Hb({type:i,hostBindings:function(t,e){1&t&&c.ac("resize",(function(t){return e.onResize(t)}),!1,c.nc)}}),i)},U6jI:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("PqYM"),s=n("krhP"),a=function(){var t=function(){function t(){var e=this;_classCallCheck(this,t),this.controller1=new i.n,this.gamepadState=new s.b,this.tick=0,window.addEventListener("gamepadconnected",(function(t){e.gamepad=t.gamepad,e.processState()})),window.addEventListener("gamepaddisconnected",(function(t){e.gamepad=void 0}))}return _createClass(t,[{key:"processState",value:function(){var t=this;this.gamepad&&(this.gamepad=navigator.getGamepads()[this.gamepad.index],this.tick+=1,this.gamepadState.apply(this.gamepad,this.tick),this.gamepadState.userInput&&this.controller1.next(this.gamepadState),Object(r.a)(16.67).subscribe((function(){return t.processState()})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},UNDe:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),r=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["ed-frame-filler"]],decls:0,vars:0,template:function(t,e){},styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto}"]}),t}()},ZmmG:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("Womt"),r=n("VO3d"),s=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).eccentricity=0,t.orbitalInclination=0,t.orbitalPeriod=1,t.$artificials=[],t}return _createClass(n,[{key:"addStation",value:function(t){this.attach(t),this.$artificials.push(t)}},{key:"addInstallation",value:function(t){this.attach(t),this.$artificials.push(t)}},{key:"load",value:function(t){_get(_getPrototypeOf(n.prototype),"load",this).call(this,t),this.radius=n.KmToLs(t.radius),this.orbitalPeriod=t.orbitalPeriod?t.orbitalPeriod:0,this.semiMajorAxis=n.AuToLs(t.semiMajorAxis?t.semiMajorAxis:0),this.orbitalInclination=t.orbitalInclination?t.orbitalInclination:0}},{key:"run",value:function(t){_get(_getPrototypeOf(n.prototype),"run",this).call(this,t);var e,i=_createForOfIteratorHelper(this.artificials);try{for(i.s();!(e=i.n()).done;){e.value.run(t)}}catch(r){i.e(r)}finally{i.f()}}},{key:"applyLod",value:function(t,e){}},{key:"addMarkerToContext",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n){var r=new i.d(1,2,10),s=new i.i({color:new i.c(e)});s.opacity=.5,s.transparent=!0;var a=new i.h(r,s);a.position.z=1+this.radius,a.rotation.x=-.5*Math.PI,t.add(a)}else{var o=new i.d(2.5,5,10),c=new i.i({color:new i.c(e)});c.opacity=.5,c.transparent=!0;var u=new i.h(o,c);u.position.z=2.5+this.radius,u.rotation.x=-.5*Math.PI,t.add(u)}}},{key:"updateContext",value:function(t,e){var n=24*this.orbitalPeriod*60*60*1e3,i=2*Math.PI*(e%n/n||0),r=Math.tan(.0174532925*this.orbitalInclination)*this.semiMajorAxis;t.position.x=Math.sin(i)*this.semiMajorAxis,t.position.y=Math.cos(i)*this.semiMajorAxis*(1-this.eccentricity),t.position.z=Math.sin(i)*r}},{key:"artificials",get:function(){return this.$artificials}}]),n}(r.a),a=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).$planets=[],t}return _createClass(n,[{key:"addPlanet",value:function(t){this.attach(t),this.$planets.push(t)}},{key:"load",value:function(t){if(_get(_getPrototypeOf(n.prototype),"load",this).call(this,t),t.planets){var e,i=_createForOfIteratorHelper(t.planets);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=new n;s.load(r),this.addPlanet(s)}}catch(a){i.e(a)}finally{i.f()}}}},{key:"run",value:function(t){_get(_getPrototypeOf(n.prototype),"run",this).call(this,t);var e,i=_createForOfIteratorHelper(this.planets);try{for(i.s();!(e=i.n()).done;){e.value.run(t)}}catch(r){i.e(r)}finally{i.f()}}},{key:"applyLod",value:function(t,e){if(_get(_getPrototypeOf(n.prototype),"applyLod",this).call(this,t,e),this.getParent()instanceof n){this.addMarkerToContext(t,"gray",!0);var r=new i.m(this.radius,25,25),s=new i.i({color:"gray"}),a=new i.h(r,s);t.add(a)}else{this.addMarkerToContext(t,"green");var o=new i.m(this.radius,25,25),c=new i.i({color:"green"}),u=new i.h(o,c);t.add(u)}}},{key:"planets",get:function(){return this.$planets}}]),n}(s),o=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).$planets=[],t}return _createClass(n,[{key:"addPlanet",value:function(t){this.attach(t),this.$planets.push(t)}},{key:"load",value:function(t){if(_get(_getPrototypeOf(n.prototype),"load",this).call(this,t),t.planets){var e,i=_createForOfIteratorHelper(t.planets);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=new a;s.load(r),this.addPlanet(s)}}catch(o){i.e(o)}finally{i.f()}}}},{key:"run",value:function(t){_get(_getPrototypeOf(n.prototype),"run",this).call(this,t);var e,i=_createForOfIteratorHelper(this.planets);try{for(i.s();!(e=i.n()).done;){e.value.run(t)}}catch(r){i.e(r)}finally{i.f()}}},{key:"applyLod",value:function(t,e){_get(_getPrototypeOf(n.prototype),"applyLod",this).call(this,t,e),this.addMarkerToContext(t,"yellow");var r=new i.m(this.radius,25,25),s=new i.i({color:"yellow"}),a=new i.h(r,s);t.name=this.name,t.add(a)}},{key:"planets",get:function(){return this.$planets}}]),n}(s),c=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).coords=new i.p,t.$stars=[],t.$contacts=[],t}return _createClass(n,[{key:"addStar",value:function(t){this.attach(t),this.$stars.push(t)}},{key:"load",value:function(t){_get(_getPrototypeOf(n.prototype),"load",this).call(this,t);var e,i=_createForOfIteratorHelper(t.stars);try{for(i.s();!(e=i.n()).done;){var r=e.value,s=new o;s.load(r),this.addStar(s)}}catch(a){i.e(a)}finally{i.f()}}},{key:"run",value:function(t){_get(_getPrototypeOf(n.prototype),"run",this).call(this,t);var e,i=_createForOfIteratorHelper(this.$stars);try{for(i.s();!(e=i.n()).done;){e.value.run(t)}}catch(a){i.e(a)}finally{i.f()}var r,s=_createForOfIteratorHelper(this.$contacts);try{for(s.s();!(r=s.n()).done;){r.value.run(t)}}catch(a){s.e(a)}finally{s.f()}}},{key:"applyLod",value:function(t,e){var n=new i.m(.5,10,10),r=new i.i({color:"yellow"}),s=new i.h(n,r);t.name=this.name;var a=document.createElement("canvas");a.width=256,a.height=64;var o=a.getContext("2d");o.fillStyle="#FFFFFF",o.font='bold 48px "jura", sans-serif',o.textAlign="center",o.textBaseline="top",o.fillText(this.name.toUpperCase(),128,8,256);var c=new i.a(a);c.needsUpdate=!0;var u=new i.o({map:c}),l=new i.n(u);l.scale.x=5,l.position.setZ(1.1),t.add(s),t.add(l)}},{key:"updateContext",value:function(t,e){t.position.copy(this.coords),t.position.multiplyScalar(5)}},{key:"stars",get:function(){return this.$stars}},{key:"contacts",get:function(){return this.$contacts}}]),n}(r.a)},krhP:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(t){return t[t.Inactive=0]="Inactive",t[t.Click=2]="Click",t[t.Hold=3]="Hold",t}({}),r=function(){function t(){_classCallCheck(this,t),this.buttonTick=[],this.buttonA=i.Inactive,this.buttonB=i.Inactive,this.buttonX=i.Inactive,this.buttonY=i.Inactive,this.leftBumper=i.Inactive,this.rightBumper=i.Inactive,this.leftStick=i.Inactive,this.rightStick=i.Inactive,this.dPadUp=i.Inactive,this.dPadRight=i.Inactive,this.dPadDown=i.Inactive,this.dPadLeft=i.Inactive}return _createClass(t,[{key:"apply",value:function(t,e){if(this.userInput=!1,this.buttonTick.length!==t.buttons.length){this.buttonTick=[];var n,i=_createForOfIteratorHelper(t.buttons);try{for(i.s();!(n=i.n()).done;){n.value;this.buttonTick.push(void 0)}}catch(r){i.e(r)}finally{i.f()}}this.buttonA=this.processButton(0,t,e),this.buttonB=this.processButton(1,t,e),this.buttonX=this.processButton(2,t,e),this.buttonY=this.processButton(3,t,e),this.leftBumper=this.processButton(4,t,e),this.rightBumper=this.processButton(5,t,e),this.leftStick=this.processButton(10,t,e),this.rightStick=this.processButton(11,t,e),this.dPadUp=this.processButton(12,t,e),this.dPadDown=this.processButton(13,t,e),this.dPadLeft=this.processButton(14,t,e),this.dPadRight=this.processButton(15,t,e),this.leftTrigger=this.processButtonValue(6,t),this.rightTrigger=this.processButtonValue(7,t),this.leftStickAxisX=this.processAxis(0,t,!1),this.leftStickAxisY=this.processAxis(1,t,!0),this.rightStickAxisX=this.processAxis(2,t,!1),this.rightStickAxisY=this.processAxis(3,t,!0)}},{key:"processButton",value:function(t,e,n){if(t>=e.buttons.length)return i.Inactive;if(void 0===this.buttonTick[t])e.buttons[t].pressed&&(this.buttonTick[t]=n);else if(e.buttons[t].pressed){if(n-this.buttonTick[t]>15)return this.userInput=!0,i.Hold}else{if(n-this.buttonTick[t]<=15)return this.userInput=!0,this.buttonTick[t]=void 0,i.Click;this.buttonTick[t]=void 0}return i.Inactive}},{key:"processButtonValue",value:function(t,e){return t>=e.buttons.length?0:e.buttons[t].value>.1?(this.userInput=!0,e.buttons[t].value):0}},{key:"processAxis",value:function(t,e,n){return t>=e.axes.length?0:Math.abs(e.axes[t])>.1?(this.userInput=!0,n?-e.axes[t]:e.axes[t]):0}},{key:"holdState",get:function(){return this.buttonA===i.Hold||this.buttonB===i.Hold||this.buttonX===i.Hold||this.buttonY===i.Hold||this.leftStick===i.Hold||this.rightStick===i.Hold||this.leftBumper===i.Hold||this.rightBumper===i.Hold||this.dPadUp===i.Hold||this.dPadRight===i.Hold||this.dPadDown===i.Hold||this.dPadLeft===i.Hold}}]),t}()},vHk7:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("lJxs"),r=n("ZmmG"),s=n("HP1K"),a=n("fXoL"),o=n("tk/3"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpClient=e}return _createClass(t,[{key:"getStarSector",value:function(t){return this.httpClient.get("assets/data/edsm/"+t+".json").pipe(Object(i.a)((function(t){var e=new s.a;return e.load(t),e})))}},{key:"getStarSystem",value:function(t){return this.httpClient.get("assets/data/systems/"+t+".json").pipe(Object(i.a)((function(t){var e=new r.a;return e.load(t),e})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Wb(o.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},ys0j:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i=function(t){return t[t.Inactive=0]="Inactive",t[t.Hold=1]="Hold",t[t.Click=2]="Click",t}({}),r=function(){function t(){_classCallCheck(this,t),this.leftMouse=i.Inactive,this.middleMouse=i.Inactive,this.rightMouse=i.Inactive}return _createClass(t,[{key:"applyMouse",value:function(t,e,n){switch(this.deltaX=t.clientX-this.x,this.deltaY=t.clientY-this.y,this.x=t.clientX,this.y=t.clientY,e){case"down":0===t.button&&this.leftMouse===i.Inactive&&(this.leftMouse=i.Hold,this.userInput=!0),1===t.button&&this.middleMouse===i.Inactive&&(this.middleMouse=i.Hold,this.userInput=!0),2===t.button&&this.rightMouse===i.Inactive&&(this.rightMouse=i.Hold,this.userInput=!0);break;case"up":0===t.button&&this.leftMouse===i.Hold&&(this.leftMouse=i.Click,this.userInput=!0),1===t.button&&this.middleMouse===i.Hold&&(this.middleMouse=i.Click,this.userInput=!0),2===t.button&&this.rightMouse===i.Hold&&(this.rightMouse=i.Click,this.userInput=!0)}(this.deltaX||this.deltaY)&&(this.userInput=!0)}},{key:"applyTick",value:function(){this.deltaZ=0,this.leftMouse===i.Click&&(this.leftMouse=i.Inactive,this.userInput=!0),this.rightMouse===i.Click&&(this.rightMouse=i.Inactive,this.userInput=!0),this.middleMouse===i.Click&&(this.middleMouse=i.Inactive,this.userInput=!0)}},{key:"applyWheel",value:function(t,e){this.deltaZ=t.deltaY,this.deltaZ&&(this.userInput=!0)}}]),t}()}}]);