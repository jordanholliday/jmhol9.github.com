webpackJsonp([1,4],{137:function(t,e,n){"use strict";var r=n(0),o=n(284);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e,n){this.elementRef=t,this.renderer=e,this.http=n,this.showReader=!1,this.showFullText=!0,this.idx=0,this.wpm=350,this._play=!1,this.initHostClass()}return Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(t){t!==this.text&&(this._text=t,null==this.text&&(this.splitText=[]),this.splitText=this.getSplitText(this.text))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"play",{get:function(){return this._play},set:function(t){t=null!=t&&t!==!1,t!==this.play&&(this._play=t,this.togglePlaying())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"intervalMs",{get:function(){return Math.floor(6e4/this.wpm)},enumerable:!0,configurable:!0}),t.prototype.onClick=function(t){this.onInteraction(t)},t.prototype.ngOnInit=function(){var t=this;this.http.get("text.txt").subscribe(function(e){return t.extractText(e)})},t.prototype.extractText=function(t){this.text=t.text()},t.prototype.initHostClass=function(){this.renderer.setElementClass(this.elementRef.nativeElement,"reader",!0)},t.prototype.onInteraction=function(t){t.preventDefault(),this.text&&(this.play=!this.play)},t.prototype.resetReader=function(){this.idx=0,this.play=!1},t.prototype.togglePlaying=function(){this.play?this.startPlaying():this.stopPlaying()},t.prototype.setPlayTimeout=function(){var t=this;this.playTimeout=setTimeout(function(){t.idx=t.idx+1,t.currentWord=t.splitText[t.idx],null==t.currentWord&&t.resetReader(),t.setPlayTimeout()},this.getIntervalFromWord(this.currentWord))},t.prototype.startPlaying=function(){var t=this.showFullText?-10:-1;this.incrementIdx(t),this.showFullText=!1,this.currentWord=this.text[this.idx],this.setPlayTimeout()},t.prototype.stopPlaying=function(){null!=this.playTimeout&&clearTimeout(this.playTimeout)},t.prototype.incrementIdx=function(t){this.idx=this.idx+t,this.idx<0&&(this.idx=0)},t.prototype.getSplitText=function(t){return t.split(/[\s-—–]+/)},t.prototype.getIntervalFromWord=function(t){var e=this.intervalMs;return~t.indexOf(".")||~t.indexOf("?")||~t.indexOf("!")?2*e:~t.indexOf(";")?2*e:~t.indexOf(",")?1.6*e:t.length>=8?1.5*e:e},i([n.i(r.W)("keydown.space",["$event"]),s("design:type",Function),s("design:paramtypes",[Object]),s("design:returntype",void 0)],t.prototype,"onClick",null),t=i([n.i(r.V)({selector:"app-reader",template:'\n    <app-controls-modal *ngIf="!showReader && !showFullText"></app-controls-modal>\n    <app-reader-display\n      *ngIf="showReader && text"\n      [word]="currentWord"\n      (mousedown)="play = !play"\n      (touchstart)="play = !play">\n    </app-reader-display>\n    <app-full-text *ngIf="showFullText && !showReader && !play"></app-full-text>\n    <app-reader-controls *ngIf="showReader || showFullText"></app-reader-controls>\n  '}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.C&&r.C)&&e||Object,"function"==typeof(a="undefined"!=typeof r.D&&r.D)&&a||Object,"function"==typeof(p="undefined"!=typeof o.b&&o.b)&&p||Object])],t);var e,a,p}()},344:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=344},345:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(432),o=n(0),i=n(458),s=n(453);i.a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(s.a)},452:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.title="app works!"}return t=o([n.i(r.V)({selector:"app-root",template:n(611),styles:[n(610)]}),i("design:paramtypes",[])],t)}()},453:function(t,e,n){"use strict";var r=n(192),o=n(0),i=n(423),s=n(284),a=n(452),p=n(137),l=n(454),c=n(455),f=n(456),u=n(457);n.d(e,"a",function(){return y});var d=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(){}return t=d([n.i(o.b)({declarations:[a.a,l.a,c.a,f.a,p.a,u.a],imports:[r.a,i.a,s.a],providers:[],bootstrap:[a.a]}),h("design:paramtypes",[])],t)}()},454:function(t,e,n){"use strict";var r=n(0),o=n(137);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e,n){this.parent=t,this.elementRef=e,this.renderer=n,this.initHostClass()}return t.prototype.initHostClass=function(){this.renderer.setElementClass(this.elementRef.nativeElement,"reader__controls-modal",!0)},t=i([n.i(r.V)({selector:"app-controls-modal",template:'\n    <input class="input text-center" type="number" [(ngModel)]="parent.idx">\n    <input class="input text-center" type="number" [(ngModel)]="parent.wpm">\n    <button class="button" (click)="parent.showReader = true">Go Go Go</button>\n  '}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object,"function"==typeof(a="undefined"!=typeof r.C&&r.C)&&a||Object,"function"==typeof(p="undefined"!=typeof r.D&&r.D)&&p||Object])],t);var e,a,p}()},455:function(t,e,n){"use strict";var r=n(0),o=n(137);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e,n){this.elementRef=t,this.parent=e,this.renderer=n,this.renderer.setElementClass(this.elementRef.nativeElement,"reader__full-text",!0)}return Object.defineProperty(t.prototype,"splitText",{get:function(){if(null!=this.parent.text)return null!=this.prevSplitText&&this.prevSplitIdx===this.parent.idx?this.prevSplitText:(this.updateSplitText(),this.prevSplitText)},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewChecked=function(){this.scrollToFocusEl()},t.prototype.ngAfterViewInit=function(){var t=this;setTimeout(function(){t.scrollToFocusEl()})},t.prototype.updateSplitText=function(){var t=this.parent.getSplitText(this.parent.text);return this.prevSplitIdx=this.parent.idx,0===this.parent.idx?void(this.prevSplitText=["",t[this.parent.idx],t.slice(this.parent.idx+1).join(" ")]):void(this.prevSplitText=[t.slice(0,this.parent.idx).join(" "),t[this.parent.idx],t.slice(this.parent.idx+1).join(" ")])},t.prototype.scrollToFocusEl=function(){this.focusEl&&this.renderer.invokeElementMethod(this.focusEl.nativeElement,"scrollIntoView")},i([n.i(r.U)("focusEl"),s("design:type","function"==typeof(e="undefined"!=typeof r.C&&r.C)&&e||Object)],t.prototype,"focusEl",void 0),t=i([n.i(r.V)({selector:"app-full-text",template:'\n    <div *ngIf="splitText">\n      <span>{{ splitText[0] }}</span>\n      <span #focusEl class="reader__full-text__focus">{{ splitText[1] }}</span>\n      <span>{{ splitText[2] }}</span>\n    </div>\n  '}),s("design:paramtypes",["function"==typeof(a="undefined"!=typeof r.C&&r.C)&&a||Object,"function"==typeof(p="undefined"!=typeof o.a&&o.a)&&p||Object,"function"==typeof(l="undefined"!=typeof r.D&&r.D)&&l||Object])],t);var e,a,p,l}()},456:function(t,e,n){"use strict";var r=n(0),o=n(137);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e,n){this.elementRef=t,this.renderer=e,this.parent=n,this.showInput=!1,this.renderer.setElementClass(this.elementRef.nativeElement,"reader__reader-controls",!0)}return Object.defineProperty(t.prototype,"percentComplete",{get:function(){return Math.floor(this.parent.idx/this.parent.splitText.length*1e3)/10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textLength",{get:function(){return null==this.parent.text?"0":this.parent.splitText.length.toLocaleString()},enumerable:!0,configurable:!0}),t.prototype.onMouseEnter=function(){this.showInput=!0},t.prototype.onMouseLeave=function(){this.showInput=!1},i([n.i(r.W)("mouseenter"),s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],t.prototype,"onMouseEnter",null),i([n.i(r.W)("mouseleave"),s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],t.prototype,"onMouseLeave",null),t=i([n.i(r.V)({selector:"app-reader-controls",template:'\n    <span *ngIf="parent.text != null" class="reader__reader-controls__stats"> {{ percentComplete }}% / {{ textLength }} words / {{ parent.wpm }} wpm</span>\n    <span *ngIf="parent.text != null && showInput">\n      <input type="number" [(ngModel)]="parent.idx">\n    </span>\n    <span *ngIf="parent.text != null" class="reader__reader-controls__buttons">\n      <svg\n        id="ff-button"\n        class="reversed"\n        (click)="parent.incrementIdx(-50)"\n        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M78.5,54.1l-22,18.3  c-2.7,2.3-5,1.2-5-2.3V54.8L30.4,72.5c-2.7,2.3-5,1.2-5-2.3V29.9c0-3.5,2.2-4.6,5-2.3l21.2,17.7V29.9c0-3.5,2.2-4.6,5-2.3l22,18.3  C81.2,48.1,81.2,51.9,78.5,54.1z"/></svg>\n      <svg\n        id="ff-button"\n        (click)="parent.incrementIdx(50)"\n        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M78.5,54.1l-22,18.3  c-2.7,2.3-5,1.2-5-2.3V54.8L30.4,72.5c-2.7,2.3-5,1.2-5-2.3V29.9c0-3.5,2.2-4.6,5-2.3l21.2,17.7V29.9c0-3.5,2.2-4.6,5-2.3l22,18.3  C81.2,48.1,81.2,51.9,78.5,54.1z"/></svg>\n      <svg\n        id="play-button"\n        *ngIf="!parent.play"\n        (click)="parent.play = true; parent.showReader = true; parent.showFullText = false;"\n        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve"><g><path d="M24,2C11.8,2,2,11.8,2,24s9.8,22,22,22s22-9.8,22-22S36.2,2,24,2z M33.1,25.7l-12,8c-0.9,0.6-2.2,0.4-2.8-0.6   C18.1,32.8,18,32.4,18,32V16c0-1.1,0.9-2,2-2c0.4,0,0.8,0.1,1.1,0.3l12,8c0.9,0.6,1.2,1.9,0.5,2.8C33.5,25.3,33.3,25.5,33.1,25.7z"/></g></svg>\n        <svg\n          id="pause-button"\n          *ngIf="parent.play"\n          (click)="parent.play = false; parent.showReader = false; parent.showFullText = true;"\n          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve"><g><path d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M22,30.5c0,1.1-0.9,2-2,2s-2-0.9-2-2v-13   c0-1.1,0.9-2,2-2s2,0.9,2,2V30.5z M30,30.5c0,1.1-0.9,2-2,2s-2-0.9-2-2v-13c0-1.1,0.9-2,2-2s2,0.9,2,2V30.5z"/></g></svg>\n    </span>\n  '}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.C&&r.C)&&e||Object,"function"==typeof(a="undefined"!=typeof r.D&&r.D)&&a||Object,"function"==typeof(p="undefined"!=typeof o.a&&o.a)&&p||Object])],t);var e,a,p}()},457:function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.renderer=t,this.elementRef=e}return Object.defineProperty(t.prototype,"word",{get:function(){return this._word},set:function(t){this._word=t,this.showWord()},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){this.initHostClass()},t.prototype.initHostClass=function(){this.renderer.setElementClass(this.elementRef.nativeElement,"reader__display",!0)},t.prototype.showWord=function(){var t=this.splitWord();this.renderer.setElementAttribute(this.focusEl.nativeElement,"data-chars-before-focus",t[0]),this.renderer.setElementProperty(this.focusEl.nativeElement,"innerText",t[1]),this.renderer.setElementAttribute(this.focusEl.nativeElement,"data-chars-after-focus",t[2])},t.prototype.splitWord=function(){if(null==this.word)return[];if(1===this.word.length)return["",this.word,""];if(2===this.word.length)return["",this.word[0],this.word[1]];var t=Math.floor(.34*this.word.length);return[this.word.slice(0,t),this.word[t],this.word.slice(t+1)]},o([n.i(r.U)("focusEl"),i("design:type","function"==typeof(e="undefined"!=typeof r.C&&r.C)&&e||Object)],t.prototype,"focusEl",void 0),o([n.i(r.w)(),i("design:type",Object)],t.prototype,"word",null),t=o([n.i(r.V)({selector:"app-reader-display",template:'\n    <span class="reader__display__word-focus" #focusEl>\n    </span>\n  '}),i("design:paramtypes",["function"==typeof(s="undefined"!=typeof r.D&&r.D)&&s||Object,"function"==typeof(a="undefined"!=typeof r.C&&r.C)&&a||Object])],t);var e,s,a}()},458:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},610:function(t,e){t.exports=""},611:function(t,e){t.exports="<app-reader></app-reader>\n"},623:function(t,e,n){t.exports=n(345)}},[623]);