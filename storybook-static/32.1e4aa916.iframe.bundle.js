(self.webpackChunkclient_blog=self.webpackChunkclient_blog||[]).push([[32],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/next/dist/client/add-base-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addBasePath",{enumerable:!0,get:function(){return addBasePath}});const _addpathprefix=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"),_normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function addBasePath(path,required){return process.env.__NEXT_MANUAL_CLIENT_BASE_PATH&&!required?path:(0,_normalizetrailingslash.normalizePathTrailingSlash)((0,_addpathprefix.addPathPrefix)(path,basePath))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/add-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addLocale",{enumerable:!0,get:function(){return addLocale}});const _normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),addLocale=function(path){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return process.env.__NEXT_I18N_SUPPORT?(0,_normalizetrailingslash.normalizePathTrailingSlash)(__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/add-locale.js").b(path,...args)):path};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{PrefetchKind:function(){return PrefetchKind},ACTION_REFRESH:function(){return ACTION_REFRESH},ACTION_NAVIGATE:function(){return ACTION_NAVIGATE},ACTION_RESTORE:function(){return ACTION_RESTORE},ACTION_SERVER_PATCH:function(){return ACTION_SERVER_PATCH},ACTION_PREFETCH:function(){return ACTION_PREFETCH},ACTION_FAST_REFRESH:function(){return ACTION_FAST_REFRESH},ACTION_SERVER_ACTION:function(){return ACTION_SERVER_ACTION}});const ACTION_REFRESH="refresh",ACTION_NAVIGATE="navigate",ACTION_RESTORE="restore",ACTION_SERVER_PATCH="server-patch",ACTION_PREFETCH="prefetch",ACTION_FAST_REFRESH="fast-refresh",ACTION_SERVER_ACTION="server-action";var PrefetchKind;!function(PrefetchKind){PrefetchKind.AUTO="auto",PrefetchKind.FULL="full",PrefetchKind.TEMPORARY="temporary"}(PrefetchKind||(PrefetchKind={})),("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/detect-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"detectDomainLocale",{enumerable:!0,get:function(){return detectDomainLocale}});const detectDomainLocale=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(process.env.__NEXT_I18N_SUPPORT)return __webpack_require__("./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js").D(...args)};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}});const basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("./node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("./node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto="http"+(domain.http?"":"s")+"://",finalLocale=target===domain.defaultLocale?"":"/"+target;return""+proto+domain.domain+basePath+finalLocale+path}return!1}return!1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/has-base-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"hasBasePath",{enumerable:!0,get:function(){return hasBasePath}});const _pathhasprefix=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"),basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function hasBasePath(path){return(0,_pathhasprefix.pathHasPrefix)(path,basePath)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/react/index.js")),_resolvehref=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/resolve-href.js"),_islocalurl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formaturl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_addlocale=__webpack_require__("./node_modules/next/dist/client/add-locale.js"),_routercontext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_approutercontext=__webpack_require__("./node_modules/next/dist/shared/lib/app-router-context.js"),_useintersection=__webpack_require__("./node_modules/next/dist/client/use-intersection.js"),_getdomainlocale=__webpack_require__("./node_modules/next/dist/client/get-domain-locale.js"),_addbasepath=__webpack_require__("./node_modules/next/dist/client/add-base-path.js"),_routerreducertypes=__webpack_require__("./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js"),prefetched=new Set;function prefetch(router,href,as,options,appOptions,isAppRouter){if("undefined"==typeof window)return;if(!isAppRouter&&!(0,_islocalurl.isLocalURL)(href))return;if(!options.bypassPrefetchedCheck){const prefetchedKey=href+"%"+as+"%"+(void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0);if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}const prefetchPromise=isAppRouter?router.prefetch(href,appOptions):router.prefetch(href,as,options);Promise.resolve(prefetchPromise).catch((err=>{0}))}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:(0,_formaturl.formatUrl)(urlObjOrString)}const _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp=null,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1,...restProps}=props;children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=_react.default.createElement("a",null,children));const prefetchEnabled=!1!==prefetchProp,appPrefetchKind=null===prefetchProp?_routerreducertypes.PrefetchKind.AUTO:_routerreducertypes.PrefetchKind.FULL,pagesRouter=_react.default.useContext(_routercontext.RouterContext),appRouter=_react.default.useContext(_approutercontext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter;const{href,as}=_react.default.useMemo((()=>{if(!pagesRouter){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=(0,_resolvehref.resolveHref)(pagesRouter,hrefProp,!0);return{href:resolvedHref,as:asProp?(0,_resolvehref.resolveHref)(pagesRouter,asProp):resolvedAs||resolvedHref}}),[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;legacyBehavior&&(child=_react.default.Children.only(children));const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=(0,_useintersection.useIntersection)({rootMargin:"200px"}),setRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))}),[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale},{kind:appPrefetchKind},isAppRouter)}),[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router,isAppRouter,appPrefetchKind]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!isAppRouter&&!(0,_islocalurl.isLocalURL)(href)))return;e.preventDefault();const navigate=()=>{"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))},onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))}};if((0,_utils.isAbsoluteUrl)(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&(0,_getdomainlocale.getDomainLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||(0,_addbasepath.addBasePath)((0,_addlocale.addLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",{...restProps,...childProps},children)}));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}});const normalizeLocalePath=(pathname,locales)=>process.env.__NEXT_I18N_SUPPORT?__webpack_require__("./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").h(pathname,locales):{pathname,detectedLocale:void 0};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/escape-regexp.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});const reHasRegExp=/[|\\{}()[\]^$+*?.-]/,reReplaceRegExp=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(str){return reHasRegExp.test(str)?str.replace(reReplaceRegExp,"\\$&"):str}},"./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js":(__unused_webpack_module,exports)=>{"use strict";function detectDomainLocale(domainItems,hostname,detectedLocale){if(domainItems){detectedLocale&&(detectedLocale=detectedLocale.toLowerCase());for(const item of domainItems){var _item_domain,_item_locales;if(hostname===(null==(_item_domain=item.domain)?void 0:_item_domain.split(":")[0].toLowerCase())||detectedLocale===item.defaultLocale.toLowerCase()||(null==(_item_locales=item.locales)?void 0:_item_locales.some((locale=>locale.toLowerCase()===detectedLocale))))return item}}}Object.defineProperty(exports,"D",{enumerable:!0,get:function(){return detectDomainLocale}})},"./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js":(__unused_webpack_module,exports)=>{"use strict";function normalizeLocalePath(pathname,locales){let detectedLocale;const pathnameParts=pathname.split("/");return(locales||[]).some((locale=>!(!pathnameParts[1]||pathnameParts[1].toLowerCase()!==locale.toLowerCase())&&(detectedLocale=locale,pathnameParts.splice(1,1),pathname=pathnameParts.join("/")||"/",!0))),{pathname,detectedLocale}}Object.defineProperty(exports,"h",{enumerable:!0,get:function(){return normalizeLocalePath}})},"./node_modules/next/dist/shared/lib/router/utils/add-locale.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"b",{enumerable:!0,get:function(){return addLocale}});const _addpathprefix=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"),_pathhasprefix=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js");function addLocale(path,locale,defaultLocale,ignorePrefix){if(!locale||locale===defaultLocale)return path;const lower=path.toLowerCase();if(!ignorePrefix){if((0,_pathhasprefix.pathHasPrefix)(lower,"/api"))return path;if((0,_pathhasprefix.pathHasPrefix)(lower,"/"+locale.toLowerCase()))return path}return(0,_addpathprefix.addPathPrefix)(path,"/"+locale)}},"./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addPathPrefix",{enumerable:!0,get:function(){return addPathPrefix}});const _parsepath=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/parse-path.js");function addPathPrefix(path,prefix){if(!path.startsWith("/")||!prefix)return path;const{pathname,query,hash}=(0,_parsepath.parsePath)(path);return""+prefix+pathname+query+hash}},"./node_modules/next/dist/shared/lib/router/utils/format-url.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return urlObjectKeys},formatWithValidation:function(){return formatWithValidation}});const _querystring=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs")._(__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/querystring.js")),slashedProtocols=/https?|ftp|gopher|file/;function formatUrl(urlObj){let{auth,hostname}=urlObj,protocol=urlObj.protocol||"",pathname=urlObj.pathname||"",hash=urlObj.hash||"",query=urlObj.query||"",host=!1;auth=auth?encodeURIComponent(auth).replace(/%3A/i,":")+"@":"",urlObj.host?host=auth+urlObj.host:hostname&&(host=auth+(~hostname.indexOf(":")?"["+hostname+"]":hostname),urlObj.port&&(host+=":"+urlObj.port)),query&&"object"==typeof query&&(query=String(_querystring.urlQueryToSearchParams(query)));let search=urlObj.search||query&&"?"+query||"";return protocol&&!protocol.endsWith(":")&&(protocol+=":"),urlObj.slashes||(!protocol||slashedProtocols.test(protocol))&&!1!==host?(host="//"+(host||""),pathname&&"/"!==pathname[0]&&(pathname="/"+pathname)):host||(host=""),hash&&"#"!==hash[0]&&(hash="#"+hash),search&&"?"!==search[0]&&(search="?"+search),pathname=pathname.replace(/[?#]/g,encodeURIComponent),search=search.replace("#","%23"),""+protocol+host+pathname+search+hash}const urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(url){return formatUrl(url)}},"./node_modules/next/dist/shared/lib/router/utils/interpolate-as.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});const _routematcher=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/route-matcher.js"),_routeregex=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/route-regex.js");function interpolateAs(route,asPathname,query){let interpolatedRoute="";const dynamicRegex=(0,_routeregex.getRouteRegex)(route),dynamicGroups=dynamicRegex.groups,dynamicMatches=(asPathname!==route?(0,_routematcher.getRouteMatcher)(dynamicRegex)(asPathname):"")||query;interpolatedRoute=route;const params=Object.keys(dynamicGroups);return params.every((param=>{let value=dynamicMatches[param]||"";const{repeat,optional}=dynamicGroups[param];let replaced="["+(repeat?"...":"")+param+"]";return optional&&(replaced=(value?"":"/")+"["+replaced+"]"),repeat&&!Array.isArray(value)&&(value=[value]),(optional||param in dynamicMatches)&&(interpolatedRoute=interpolatedRoute.replace(replaced,repeat?value.map((segment=>encodeURIComponent(segment))).join("/"):encodeURIComponent(value))||"/")}))||(interpolatedRoute=""),{params,result:interpolatedRoute}}},"./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});const TEST_ROUTE=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(route){return TEST_ROUTE.test(route)}},"./node_modules/next/dist/shared/lib/router/utils/is-local-url.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});const _utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_hasbasepath=__webpack_require__("./node_modules/next/dist/client/has-base-path.js");function isLocalURL(url){if(!(0,_utils.isAbsoluteUrl)(url))return!0;try{const locationOrigin=(0,_utils.getLocationOrigin)(),resolved=new URL(url,locationOrigin);return resolved.origin===locationOrigin&&(0,_hasbasepath.hasBasePath)(resolved.pathname)}catch(_){return!1}}},"./node_modules/next/dist/shared/lib/router/utils/omit.js":(__unused_webpack_module,exports)=>{"use strict";function omit(object,keys){const omitted={};return Object.keys(object).forEach((key=>{keys.includes(key)||(omitted[key]=object[key])})),omitted}Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"omit",{enumerable:!0,get:function(){return omit}})},"./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"pathHasPrefix",{enumerable:!0,get:function(){return pathHasPrefix}});const _parsepath=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/parse-path.js");function pathHasPrefix(path,prefix){if("string"!=typeof path)return!1;const{pathname}=(0,_parsepath.parsePath)(path);return pathname===prefix||pathname.startsWith(prefix+"/")}},"./node_modules/next/dist/shared/lib/router/utils/querystring.js":(__unused_webpack_module,exports)=>{"use strict";function searchParamsToUrlQuery(searchParams){const query={};return searchParams.forEach(((value,key)=>{void 0===query[key]?query[key]=value:Array.isArray(query[key])?query[key].push(value):query[key]=[query[key],value]})),query}function stringifyUrlQueryParam(param){return"string"==typeof param||"number"==typeof param&&!isNaN(param)||"boolean"==typeof param?String(param):""}function urlQueryToSearchParams(urlQuery){const result=new URLSearchParams;return Object.entries(urlQuery).forEach((param=>{let[key,value]=param;Array.isArray(value)?value.forEach((item=>result.append(key,stringifyUrlQueryParam(item)))):result.set(key,stringifyUrlQueryParam(value))})),result}function assign(target){for(var _len=arguments.length,searchParamsList=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)searchParamsList[_key-1]=arguments[_key];return searchParamsList.forEach((searchParams=>{Array.from(searchParams.keys()).forEach((key=>target.delete(key))),searchParams.forEach(((value,key)=>target.append(key,value)))})),target}Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},"./node_modules/next/dist/shared/lib/router/utils/resolve-href.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var console=__webpack_require__("./node_modules/console-browserify/index.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});const _querystring=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/querystring.js"),_formaturl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_omit=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/omit.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),_islocalurl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_isdynamic=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"),_interpolateas=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/interpolate-as.js");function resolveHref(router,href,resolveAs){let base,urlAsString="string"==typeof href?href:(0,_formaturl.formatWithValidation)(href);const urlProtoMatch=urlAsString.match(/^[a-zA-Z]{1,}:\/\//),urlAsStringNoProto=urlProtoMatch?urlAsString.slice(urlProtoMatch[0].length):urlAsString;if((urlAsStringNoProto.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+urlAsString+"' passed to next/router in page: '"+router.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");const normalizedUrl=(0,_utils.normalizeRepeatedSlashes)(urlAsStringNoProto);urlAsString=(urlProtoMatch?urlProtoMatch[0]:"")+normalizedUrl}if(!(0,_islocalurl.isLocalURL)(urlAsString))return resolveAs?[urlAsString]:urlAsString;try{base=new URL(urlAsString.startsWith("#")?router.asPath:router.pathname,"http://n")}catch(_){base=new URL("/","http://n")}try{const finalUrl=new URL(urlAsString,base);finalUrl.pathname=(0,_normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);let interpolatedAs="";if((0,_isdynamic.isDynamicRoute)(finalUrl.pathname)&&finalUrl.searchParams&&resolveAs){const query=(0,_querystring.searchParamsToUrlQuery)(finalUrl.searchParams),{result,params}=(0,_interpolateas.interpolateAs)(finalUrl.pathname,finalUrl.pathname,query);result&&(interpolatedAs=(0,_formaturl.formatWithValidation)({pathname:result,hash:finalUrl.hash,query:(0,_omit.omit)(query,params)}))}const resolvedHref=finalUrl.origin===base.origin?finalUrl.href.slice(finalUrl.origin.length):finalUrl.href;return resolveAs?[resolvedHref,interpolatedAs||resolvedHref]:resolvedHref}catch(_){return resolveAs?[urlAsString]:urlAsString}}},"./node_modules/next/dist/shared/lib/router/utils/route-matcher.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});const _utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js");function getRouteMatcher(param){let{re,groups}=param;return pathname=>{const routeMatch=re.exec(pathname);if(!routeMatch)return!1;const decode=param=>{try{return decodeURIComponent(param)}catch(_){throw new _utils.DecodeError("failed to decode param")}},params={};return Object.keys(groups).forEach((slugName=>{const g=groups[slugName],m=routeMatch[g.pos];void 0!==m&&(params[slugName]=~m.indexOf("/")?m.split("/").map((entry=>decode(entry))):g.repeat?[decode(m)]:decode(m))})),params}}},"./node_modules/next/dist/shared/lib/router/utils/route-regex.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});const _escaperegexp=__webpack_require__("./node_modules/next/dist/shared/lib/escape-regexp.js"),_removetrailingslash=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"),NEXT_QUERY_PARAM_PREFIX="nxtP";function parseParameter(param){const optional=param.startsWith("[")&&param.endsWith("]");optional&&(param=param.slice(1,-1));const repeat=param.startsWith("...");return repeat&&(param=param.slice(3)),{key:param,repeat,optional}}function getParametrizedRoute(route){const segments=(0,_removetrailingslash.removeTrailingSlash)(route).slice(1).split("/"),groups={};let groupIndex=1;return{parameterizedRoute:segments.map((segment=>{if(segment.startsWith("[")&&segment.endsWith("]")){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));return groups[key]={pos:groupIndex++,repeat,optional},repeat?optional?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return"/"+(0,_escaperegexp.escapeStringRegexp)(segment)})).join(""),groups}}function getRouteRegex(normalizedRoute){const{parameterizedRoute,groups}=getParametrizedRoute(normalizedRoute);return{re:new RegExp("^"+parameterizedRoute+"(?:/)?$"),groups}}function getNamedParametrizedRoute(route,prefixRouteKeys){const segments=(0,_removetrailingslash.removeTrailingSlash)(route).slice(1).split("/"),getSafeRouteKey=function buildGetSafeRouteKey(){let routeKeyCharCode=97,routeKeyCharLength=1;return()=>{let routeKey="";for(let i=0;i<routeKeyCharLength;i++)routeKey+=String.fromCharCode(routeKeyCharCode),routeKeyCharCode++,routeKeyCharCode>122&&(routeKeyCharLength++,routeKeyCharCode=97);return routeKey}}(),routeKeys={};return{namedParameterizedRoute:segments.map((segment=>{if(segment.startsWith("[")&&segment.endsWith("]")){const{key,optional,repeat}=parseParameter(segment.slice(1,-1));let cleanedKey=key.replace(/\W/g,"");prefixRouteKeys&&(cleanedKey=""+NEXT_QUERY_PARAM_PREFIX+cleanedKey);let invalidKey=!1;return(0===cleanedKey.length||cleanedKey.length>30)&&(invalidKey=!0),isNaN(parseInt(cleanedKey.slice(0,1)))||(invalidKey=!0),invalidKey&&(cleanedKey=getSafeRouteKey()),routeKeys[cleanedKey]=prefixRouteKeys?""+NEXT_QUERY_PARAM_PREFIX+key:""+key,repeat?optional?"(?:/(?<"+cleanedKey+">.+?))?":"/(?<"+cleanedKey+">.+?)":"/(?<"+cleanedKey+">[^/]+?)"}return"/"+(0,_escaperegexp.escapeStringRegexp)(segment)})).join(""),routeKeys}}function getNamedRouteRegex(normalizedRoute,prefixRouteKey){const result=getNamedParametrizedRoute(normalizedRoute,prefixRouteKey);return{...getRouteRegex(normalizedRoute),namedRegex:"^"+result.namedParameterizedRoute+"(?:/)?$",routeKeys:result.routeKeys}}function getNamedMiddlewareRegex(normalizedRoute,options){const{parameterizedRoute}=getParametrizedRoute(normalizedRoute),{catchAll=!0}=options;if("/"===parameterizedRoute){return{namedRegex:"^/"+(catchAll?".*":"")+"$"}}const{namedParameterizedRoute}=getNamedParametrizedRoute(normalizedRoute,!1);return{namedRegex:"^"+namedParameterizedRoute+(catchAll?"(?:(/.*)?)":"")+"$"}}},"./node_modules/next/dist/shared/lib/utils.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{WEB_VITALS:function(){return WEB_VITALS},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return SP},ST:function(){return ST},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError}});const WEB_VITALS=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(fn){let result,used=!1;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return used||(used=!0,result=fn(...args)),result}}const ABSOLUTE_URL_REGEX=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=url=>ABSOLUTE_URL_REGEX.test(url);function getLocationOrigin(){const{protocol,hostname,port}=window.location;return protocol+"//"+hostname+(port?":"+port:"")}function getURL(){const{href}=window.location,origin=getLocationOrigin();return href.substring(origin.length)}function getDisplayName(Component){return"string"==typeof Component?Component:Component.displayName||Component.name||"Unknown"}function isResSent(res){return res.finished||res.headersSent}function normalizeRepeatedSlashes(url){const urlParts=url.split("?");return urlParts[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(urlParts[1]?"?"+urlParts.slice(1).join("?"):"")}async function loadGetInitialProps(App,ctx){const res=ctx.res||ctx.ctx&&ctx.ctx.res;if(!App.getInitialProps)return ctx.ctx&&ctx.Component?{pageProps:await loadGetInitialProps(ctx.Component,ctx.ctx)}:{};const props=await App.getInitialProps(ctx);if(res&&isResSent(res))return props;if(!props){const message='"'+getDisplayName(App)+'.getInitialProps()" should resolve to an object. But found "'+props+'" instead.';throw new Error(message)}return props}const SP="undefined"!=typeof performance,ST=SP&&["mark","measure","getEntriesByName"].every((method=>"function"==typeof performance[method]));class DecodeError extends Error{}class NormalizeError extends Error{}class PageNotFoundError extends Error{constructor(page){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+page}}class MissingStaticPage extends Error{constructor(page,message){super(),this.message="Failed to load static file for page: "+page+" "+message}}class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}},"./node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/link.js")}}]);