System.register(["angular2/core","angular2/router"],function(t,e){"use strict";var n,o,r,i=(e&&e.id,this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}),a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};return{setters:[function(t){n=t},function(t){o=t}],execute:function(){r=function(){function t(t){this._router=t}return t.prototype.logout=function(){window.localStorage.removeItem("auth_key"),this._router.navigate(["Login"])},t=i([n.Component({templateUrl:"dist/component/page-admin/page-admin.html",directives:[o.ROUTER_DIRECTIVES]}),a("design:paramtypes",[o.Router])],t)}(),t("AdminPageComponent",r)}}});