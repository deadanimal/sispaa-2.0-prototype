(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8e6m":function(e,t,i){"use strict";i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return v})),i.d(t,"c",(function(){return m}));var s=i("mrSG"),n=i("CcnG"),r=i("rpEJ"),o=i("Ip0R");function d(e,t){if(1&e){var i=n.Ub();n.Tb(0,"li",7),n.bc("click",(function(e){n.wc(i);var s=t.index;return n.fc(2).selectSlide(s)})),n.Sb()}2&e&&n.Fb("active",!0===t.$implicit.active)}function a(e,t){if(1&e&&(n.Tb(0,"ol",5),n.Dc(1,d,1,2,"li",6),n.Sb()),2&e){var i=n.fc();n.Bb(1),n.lc("ngForOf",i.indicatorsSlides())}}function l(e,t){1&e&&(n.Tb(0,"span",11),n.Fc(1,"Previous"),n.Sb())}function c(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",8),n.bc("click",(function(e){return n.wc(i),n.fc().previousSlide()})),n.Pb(1,"span",9),n.Dc(2,l,2,0,"span",10),n.Sb()}if(2&e){var s=n.fc();n.Fb("disabled",0===s.activeSlide&&s.noWrap),n.Bb(2),n.lc("ngIf",s.isBs4)}}function h(e,t){if(1&e){var i=n.Ub();n.Tb(0,"a",12),n.bc("click",(function(e){return n.wc(i),n.fc().nextSlide()})),n.Pb(1,"span",13),n.Tb(2,"span",11),n.Fc(3,"Next"),n.Sb(),n.Sb()}if(2&e){var s=n.fc();n.Fb("disabled",s.isLast(s.activeSlide)&&s.noWrap)}}var u=function(e){return{display:e}},b=["*"],f=function(){function e(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Kb({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),p=function(){var e={UNKNOWN:0,NEXT:1,PREV:2};return e[e.UNKNOWN]="UNKNOWN",e[e.NEXT]="NEXT",e[e.PREV]="PREV",e}(),g=function(){function e(e,t){this.ngZone=t,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.activeSlideChange=new n.n(!1),this.slideRangeChange=new n.n,this.startFromIndex=0,this._slides=new r.a,this._currentVisibleSlidesIndex=0,this.destroyed=!1,this.getActive=function(e){return e.active},this.makeSlidesConsistent=function(e){e.forEach((function(e,t){return e.item.order=t}))},Object.assign(this,e)}return Object.defineProperty(e.prototype,"activeSlide",{get:function(){return this._currentActiveSlide},set:function(e){this.multilist||this._slides.length&&e!==this._currentActiveSlide&&this._select(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"interval",{get:function(){return this._interval},set:function(e){this._interval=e,this.restartTimer()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"slides",{get:function(){return this._slides.toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBs4",{get:function(){return!Object(r.e)()},enumerable:!0,configurable:!0}),e.prototype.ngAfterViewInit=function(){var e=this;setTimeout((function(){e.singleSlideOffset&&(e.indicatorsByChunk=!1),e.multilist&&(e._chunkedSlides=function(e,t){for(var i=[],s=Math.ceil(e.length/t),n=0;n<s;){var r=e.splice(0,n===s-1&&t<e.length?e.length:t);i.push(r),n++}return i}(e.mapSlidesAndIndexes(),e.itemsPerSlide),e.selectInitialSlides())}),0)},e.prototype.ngOnDestroy=function(){this.destroyed=!0},e.prototype.addSlide=function(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),this.multilist||1!==this._slides.length||(this._currentActiveSlide=void 0,this.activeSlide=0,this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()},e.prototype.removeSlide=function(e){var t=this,i=this._slides.indexOf(e);if(this._currentActiveSlide===i){var s=void 0;this._slides.length>1&&(s=this.isLast(i)?this.noWrap?i-1:0:i),this._slides.remove(i),setTimeout((function(){t._select(s)}),0)}else{this._slides.remove(i);var n=this.getCurrentSlideIndex();setTimeout((function(){t._currentActiveSlide=n,t.activeSlideChange.emit(t._currentActiveSlide)}),0)}},e.prototype.nextSlideFromInterval=function(e){void 0===e&&(e=!1),this.move(p.NEXT,e)},e.prototype.nextSlide=function(e){void 0===e&&(e=!1),this.isPlaying&&this.restartTimer(),this.move(p.NEXT,e)},e.prototype.previousSlide=function(e){void 0===e&&(e=!1),this.isPlaying&&this.restartTimer(),this.move(p.PREV,e)},e.prototype.getFirstVisibleIndex=function(){return this.slides.findIndex(this.getActive)},e.prototype.getLastVisibleIndex=function(){return function(e,t){for(var i=e.length;i--;)if(t(e[i],i,e))return i;return-1}(this.slides,this.getActive)},e.prototype.move=function(e,t){void 0===t&&(t=!1);var i=this.getFirstVisibleIndex(),s=this.getLastVisibleIndex();this.noWrap&&(e===p.NEXT&&this.isLast(s)||e===p.PREV&&0===i)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,t))},e.prototype.keydownPress=function(e){if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return this.nextSlide(),void e.preventDefault();37!==e.keyCode&&"LeftArrow"!==e.key?39!==e.keyCode&&"RightArrow"!==e.key||this.nextSlide():this.previousSlide()},e.prototype.onMouseLeave=function(){this.pauseOnFocus||this.play()},e.prototype.onMouseUp=function(){this.pauseOnFocus||this.play()},e.prototype.pauseFocusIn=function(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())},e.prototype.pauseFocusOut=function(){this.play()},e.prototype.selectSlide=function(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e},e.prototype.play=function(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())},e.prototype.pause=function(){this.noPause||(this.isPlaying=!1,this.resetTimer())},e.prototype.getCurrentSlideIndex=function(){return this._slides.findIndex(this.getActive)},e.prototype.isLast=function(e){return e+1>=this._slides.length},e.prototype.isFirst=function(e){return 0===e},e.prototype.indicatorsSlides=function(){var e=this;return this.slides.filter((function(t,i){return!e.indicatorsByChunk||i%e.itemsPerSlide==0}))},e.prototype.selectInitialSlides=function(){var e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){var t=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=Object(s.h)(this._slidesWithIndexes,t).slice(t.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach((function(e){return e.item.active=!0})),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())},e.prototype.findNextSlideIndex=function(e,t){var i=0;if(t||!this.isLast(this.activeSlide)||e===p.PREV||!this.noWrap){switch(e){case p.NEXT:i=this.isLast(this._currentActiveSlide)?!t&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case p.PREV:i=this._currentActiveSlide>0?this._currentActiveSlide-1:!t&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return i}},e.prototype.mapSlidesAndIndexes=function(){return this.slides.slice().map((function(e,t){return{index:t,item:e}}))},e.prototype.selectSlideRange=function(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),this.singleSlideOffset){var t=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,i=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(t,i),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach((function(e){return e.item.active=!0}))}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}},e.prototype.selectRangeByNestedIndex=function(e){var t=this._chunkedSlides.map((function(e,t){return{index:t,list:e}})).find((function(t){return void 0!==t.list.find((function(t){return t.index===e}))}));this._currentVisibleSlidesIndex=t.index,this._chunkedSlides[t.index].forEach((function(e){e.item.active=!0}))},e.prototype.isIndexOnTheEdges=function(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length},e.prototype.isIndexInRange=function(e){return this.singleSlideOffset?this._slidesWithIndexes.map((function(e){return e.index})).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()},e.prototype.hideSlides=function(){this.slides.forEach((function(e){return e.active=!1}))},e.prototype.isVisibleSlideListLast=function(){return this._currentVisibleSlidesIndex===this._chunkedSlides.length-1},e.prototype.isVisibleSlideListFirst=function(){return 0===this._currentVisibleSlidesIndex},e.prototype.moveSliderByOneItem=function(e){var t,i,n,r;if(this.noWrap){t=this.getFirstVisibleIndex(),i=this.getLastVisibleIndex(),n=e===p.NEXT?t:i,r=e!==p.NEXT?t-1:this.isLast(i)?0:i+1,this._slides.get(n).active=!1,this._slides.get(r).active=!0;var o=this.mapSlidesAndIndexes().filter((function(e){return e.item.active}));this.makeSlidesConsistent(o),this.slideRangeChange.emit(this.getVisibleIndexes())}else{var d=void 0;t=this._slidesWithIndexes[0].index,i=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===p.NEXT?(this._slidesWithIndexes.shift(),d=this.isLast(i)?0:i+1,this._slidesWithIndexes.push({index:d,item:this._slides.get(d)})):(this._slidesWithIndexes.pop(),d=this.isFirst(t)?this._slides.length-1:t-1,this._slidesWithIndexes=Object(s.h)([{index:d,item:this._slides.get(d)}],this._slidesWithIndexes)),this.hideSlides(),this._slidesWithIndexes.forEach((function(e){return e.item.active=!0})),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map((function(e){return e.index})))}},e.prototype.moveMultilist=function(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this._currentVisibleSlidesIndex=this.noWrap?e===p.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===p.NEXT?this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._chunkedSlides.length-1:this._currentVisibleSlidesIndex-1,this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((function(e){return e.item.active=!0})),this.slideRangeChange.emit(this.getVisibleIndexes()))},e.prototype.getVisibleIndexes=function(){return this.singleSlideOffset?this._slidesWithIndexes.map((function(e){return e.index})):this._chunkedSlides[this._currentVisibleSlidesIndex].map((function(e){return e.index}))},e.prototype._select=function(e){if(isNaN(e))this.pause();else{if(!this.multilist){var t=this._slides.get(this._currentActiveSlide);t&&(t.active=!1)}var i=this._slides.get(e);i&&(this._currentActiveSlide=e,i.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}},e.prototype.restartTimer=function(){var e=this;this.resetTimer();var t=+this.interval;!isNaN(t)&&t>0&&(this.currentInterval=this.ngZone.runOutsideAngular((function(){return setInterval((function(){var t=+e.interval;e.ngZone.run((function(){e.isPlaying&&!isNaN(e.interval)&&t>0&&e.slides.length?e.nextSlideFromInterval():e.pause()}))}),t)})))},Object.defineProperty(e.prototype,"multilist",{get:function(){return this.itemsPerSlide>1},enumerable:!0,configurable:!0}),e.prototype.resetTimer=function(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)},e.\u0275fac=function(t){return new(t||e)(n.Ob(f),n.Ob(n.z))},e.\u0275cmp=n.Ib({type:e,selectors:[["carousel"]],inputs:{indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",startFromIndex:"startFromIndex",activeSlide:"activeSlide",interval:"interval",noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators",pauseOnFocus:"pauseOnFocus"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:b,decls:6,vars:6,consts:[["tabindex","0",1,"carousel","slide",3,"mouseenter","mouseleave","mouseup","keydown","focusin","focusout"],["class","carousel-indicators",4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["tabindex","0","role","button",1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],["class","sr-only",4,"ngIf"],[1,"sr-only"],["tabindex","0","role","button",1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(e,t){1&e&&(n.kc(),n.Tb(0,"div",0),n.bc("mouseenter",(function(e){return t.pause()}))("mouseleave",(function(e){return t.onMouseLeave()}))("mouseup",(function(e){return t.onMouseUp()}))("keydown",(function(e){return t.keydownPress(e)}))("focusin",(function(e){return t.pauseFocusIn()}))("focusout",(function(e){return t.pauseFocusOut()})),n.Dc(1,a,2,1,"ol",1),n.Tb(2,"div",2),n.jc(3),n.Sb(),n.Dc(4,c,3,3,"a",3),n.Dc(5,h,4,2,"a",4),n.Sb()),2&e&&(n.Bb(1),n.lc("ngIf",t.showIndicators&&t.slides.length>1),n.Bb(1),n.lc("ngStyle",n.oc(4,u,t.multilist?"flex":"block")),n.Bb(2),n.lc("ngIf",t.slides.length>1),n.Bb(1),n.lc("ngIf",t.slides.length>1))},directives:[o.l,o.m,o.k],encapsulation:2}),e}(),m=function(){function e(e){this.itemWidth="100%",this.order=0,this.addClass=!0,this.carousel=e}return e.prototype.ngOnInit=function(){this.carousel.addSlide(this),this.itemWidth=100/this.carousel.itemsPerSlide+"%"},e.prototype.ngOnDestroy=function(){this.carousel.removeSlide(this)},e.\u0275fac=function(t){return new(t||e)(n.Ob(g))},e.\u0275cmp=n.Ib({type:e,selectors:[["slide"]],hostVars:11,hostBindings:function(e,t){2&e&&(n.Cb("aria-hidden",!t.active),n.Cc("width",t.itemWidth)("order",t.order),n.Fb("item",t.addClass)("carousel-item",t.addClass)("active",t.active))},inputs:{active:"active"},ngContentSelectors:b,decls:2,vars:2,consts:[[1,"item"]],template:function(e,t){1&e&&(n.kc(),n.Tb(0,"div",0),n.jc(1),n.Sb()),2&e&&n.Fb("active",t.active)},encapsulation:2}),e}(),v=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[]}},e.\u0275mod=n.Mb({type:e}),e.\u0275inj=n.Lb({factory:function(t){return new(t||e)},providers:[f],imports:[[o.c]]}),e}()},dgmN:function(e,t,i){"use strict";i.r(t);var s=i("Ip0R"),n=i("Jc0W"),r=i("ARl4"),o=i("gIcY"),d=i("PSRr"),a=i("/CeA"),l=i("ZYCi"),c=i("SZB9"),h=i("iOEq"),u=i("wd/R"),b=i("CcnG"),f=i("8e6m"),p=i("8WIG"),g=["liveChatWidget"],m=[{path:"",children:[{path:"home",component:function(){function e(e,t){this.router=e,this.modalService=t,this.isLiveChatWidgetLoaded=!1}return e.prototype.onChatLoaded=function(e){this.liveChatApi=e,this.isLiveChatWidgetLoaded=!0},e.prototype.onChatWindowMinimized=function(){console.log("minimized")},e.prototype.onChatWindowOpened=function(){console.log("opened")},e.prototype.openChatWindow=function(){this.isLiveChatWidgetLoaded&&this.liveChatWidget.openChatWindow()},e.prototype.hideChatWindow=function(){this.isLiveChatWidgetLoaded&&this.liveChatWidget.minimizeChatWindow()},e.prototype.ngOnInit=function(){var e=document.getElementById("widget-calendar");new c.a(e,{plugins:[h.a],defaultView:"dayGridMonth",selectable:!0,contentHeight:"auto",buttonIcons:{prev:" ni ni-bold-left",next:" ni ni-bold-right"},header:{right:"next",center:"title, ",left:"prev"},defaultDate:"2018-12-01",editable:!0,events:[{title:"Call with Dave",start:"2018-11-18",end:"2018-11-18",className:"bg-red"},{title:"Lunch meeting",start:"2018-11-21",end:"2018-11-22",className:"bg-orange"},{title:"All day conference",start:"2018-11-29",end:"2018-11-29",className:"bg-green"},{title:"Meeting with Mary",start:"2018-12-01",end:"2018-12-01",className:"bg-blue"},{title:"Winter Hackaton",start:"2018-12-03",end:"2018-12-03",className:"bg-red"},{title:"Digital event",start:"2018-12-07",end:"2018-12-09",className:"bg-warning"},{title:"Marketing event",start:"2018-12-10",end:"2018-12-10",className:"bg-purple"},{title:"Dinner with Family",start:"2018-12-19",end:"2018-12-19",className:"bg-red"},{title:"Black Friday",start:"2018-12-23",end:"2018-12-23",className:"bg-blue"},{title:"Cyber Week",start:"2018-12-02",end:"2018-12-02",className:"bg-yellow"}]}).render();var t=u().format("YYYY"),i=u().format("dddd, MMM D");document.getElementsByClassName("widget-calendar-year")[0].innerHTML=t,document.getElementsByClassName("widget-calendar-day")[0].innerHTML=i},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(t){return new(t||e)(b.Ob(l.d),b.Ob(n.f))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-home"]],viewQuery:function(e,t){var i;1&e&&b.Kc(g,!0),2&e&&b.tc(i=b.cc())&&(t.liveChatWidget=i.first)},decls:104,vars:0,consts:[[1,"home-content"],[1,"row"],[1,"col","align-self-center"],[1,"image-slide","al"],["src","assets/img/slide/1.jpg","alt","first slide",2,"display","block","width","100%","height","400px","object-fit","cover"],["src","assets/img/slide/2.jpg","alt","second slide",2,"display","block","width","100%","height","400px","object-fit","cover"],["src","assets/img/slide/3.jpg","alt","third slide",2,"display","block","width","100%","height","400px","object-fit","cover"],[1,"row","p-4","text-light"],[1,"col-4","d-flex","align-items-stretch"],[1,"card"],[1,"card-header"],[1,"card-body"],["alt","Image placeholder","src","assets/img/theme/img-1-1000x600.jpg",1,"card-img-top"],[1,"card-title","mb-3"],[1,"card-text","mb-4"],["href","javascript:void(0)",1,"btn","btn-primary"],[1,"card","widget-calendar"],[1,"h5","text-muted","mb-1","widget-calendar-year"],[1,"h3","mb-0","widget-calendar-day"],["data-toggle","widget-calendar","id","widget-calendar"],[1,"list-group","list-group-flush"],["href","javascript:void(0)",1,"list-group-item","list-group-item-action","flex-column","align-items-start","py-4","px-4"],[1,"d-flex","w-100","justify-content-between"],[1,"d-flex","w-100","align-items-center"],["alt","Image placeholder","src","assets/img/theme/team-1.jpg",1,"avatar","avatar-xs","mr-2"],[1,"mb-1"],[1,"mt-3","mb-1"],[1,"text-sm","mb-0"],["alt","Image placeholder","src","assets/img/theme/team-2.jpg",1,"avatar","avatar-xs","mr-2"],[1,"text-info"],[1,"row","justify-content-center","mt-0"],[1,"col-5"],[1,"card","bg-gradient-danger"],[1,"text-center"],[1,"h6","text-white"],["src","assets/img/slide/qr.png",2,"width","163px"],[1,"col-7","text-white"],[1,"text-left","mt-0"],["type","button",1,"btn","btn-icon","btn-success","py-1","px-2"],[1,"fab","fa-whatsapp","text-white"],[1,"h5","text-white"],["licenseId","11082047",3,"visitor","params","onChatLoaded","onChatWindowOpened","onChatWindowMinimized"],["liveChatWidget",""]],template:function(e,t){1&e&&(b.Tb(0,"div",0),b.Tb(1,"div",1),b.Tb(2,"div",2),b.Tb(3,"div",3),b.Tb(4,"carousel"),b.Tb(5,"slide"),b.Pb(6,"img",4),b.Sb(),b.Tb(7,"slide"),b.Pb(8,"img",5),b.Sb(),b.Tb(9,"slide"),b.Pb(10,"img",6),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(11,"div",1),b.Pb(12,"p"),b.Sb(),b.Tb(13,"div",7),b.Tb(14,"div",8),b.Tb(15,"div",9),b.Tb(16,"div",10),b.Tb(17,"h2"),b.Fc(18,"Berita"),b.Sb(),b.Sb(),b.Tb(19,"div",11),b.Pb(20,"img",12),b.Tb(21,"h3",13),b.Fc(22,"Card title"),b.Sb(),b.Tb(23,"p",14),b.Fc(24," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, "),b.Sb(),b.Tb(25,"a",15),b.Fc(26," Go somewhere "),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(27,"div",8),b.Tb(28,"div",16),b.Tb(29,"div",10),b.Pb(30,"div",17),b.Pb(31,"div",18),b.Sb(),b.Tb(32,"div",11),b.Pb(33,"div",19),b.Sb(),b.Sb(),b.Sb(),b.Tb(34,"div",8),b.Tb(35,"div",9),b.Tb(36,"div",10),b.Tb(37,"h2"),b.Fc(38,"Pengumuman"),b.Sb(),b.Sb(),b.Tb(39,"div",11),b.Tb(40,"div",20),b.Tb(41,"a",21),b.Tb(42,"div",22),b.Tb(43,"div"),b.Tb(44,"div",23),b.Pb(45,"img",24),b.Tb(46,"h5",25),b.Fc(47,"Tim"),b.Sb(),b.Sb(),b.Sb(),b.Tb(48,"small"),b.Fc(49," 2 hrs ago "),b.Sb(),b.Sb(),b.Tb(50,"h4",26),b.Fc(51,"New order for Argon Dashboard"),b.Sb(),b.Tb(52,"p",27),b.Fc(53," Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. "),b.Sb(),b.Sb(),b.Tb(54,"a",21),b.Tb(55,"div",22),b.Tb(56,"div"),b.Tb(57,"div",23),b.Pb(58,"img",28),b.Tb(59,"h5",25),b.Fc(60,"Mike"),b.Sb(),b.Sb(),b.Sb(),b.Tb(61,"small"),b.Fc(62," 1 day ago "),b.Sb(),b.Sb(),b.Tb(63,"h4",26),b.Tb(64,"span",29),b.Fc(65," \u25cf "),b.Sb(),b.Fc(66," Your theme has been updated "),b.Sb(),b.Tb(67,"p",27),b.Fc(68," Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. "),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(69,"div",30),b.Tb(70,"div",31),b.Tb(71,"div",32),b.Tb(72,"div",11),b.Tb(73,"div",1),b.Tb(74,"div",31),b.Tb(75,"div",33),b.Tb(76,"div",34),b.Fc(77,"Imbas kod QR ini untuk ke laman rasmi SISPAA"),b.Sb(),b.Pb(78,"img",35),b.Pb(79,"br"),b.Sb(),b.Sb(),b.Tb(80,"div",36),b.Tb(81,"h3"),b.Fc(82,"Hubungi kami"),b.Sb(),b.Tb(83,"p"),b.Fc(84," Pejabat Perdana Menteri Malaysia,"),b.Pb(85,"br"),b.Fc(86," Blok Utama, Bangunan Perdana Putra,"),b.Pb(87,"br"),b.Fc(88," Pusat Pentadbiran Kerajaan Persekutuan,"),b.Pb(89,"br"),b.Fc(90," 62502 Putrajaya"),b.Pb(91,"br"),b.Fc(92," Tel : 03-8888 8000"),b.Pb(93,"br"),b.Fc(94," Fax: 03-8888 3444"),b.Pb(95,"br"),b.Sb(),b.Tb(96,"div",37),b.Tb(97,"button",38),b.Pb(98,"i",39),b.Tb(99,"span",40),b.Fc(100,"atau WhatsApp aduan anda "),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(101,"footer"),b.Tb(102,"livechat-widget",41,42),b.bc("onChatLoaded",(function(e){return t.onChatLoaded(e)}))("onChatWindowOpened",(function(e){return t.onChatWindowOpened()}))("onChatWindowMinimized",(function(e){return t.onChatWindowMinimized()})),b.Sb(),b.Sb())},directives:[f.a,f.c,p.a],styles:[".home-content[_ngcontent-%COMP%]{background:linear-gradient(45deg,#b3d4ff 50%,#9ac7fc 0);background-repeat:no-repeat;background-size:cover;height:auto;max-width:100%}.img-slide[_ngcontent-%COMP%], .img-try[_ngcontent-%COMP%]{display:block;-webkit-box-align:center;align-items:center;margin-left:auto;margin-right:auto}.img-slide[_ngcontent-%COMP%]{max-height:500px;-o-object-fit:cover;object-fit:cover}.container-fluid[_ngcontent-%COMP%]{margin-left:15;margin-right:15}"]}),e}()}]}];i.d(t,"PagesModule",(function(){return v}));var v=function(){function e(){}return e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({factory:function(t){return new(t||e)},imports:[[s.c,n.a.forRoot(),r.c.forRoot(),n.d.forRoot(),n.h.forRoot(),n.j.forRoot(),n.l.forRoot(),n.n.forRoot(),o.h,o.r,a.b,d.e,l.g.forChild(m),f.b.forRoot(),p.b]]}),e}()}}]);