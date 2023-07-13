"use strict";(self.webpackChunkclient_blog=self.webpackChunkclient_blog||[]).push([[770],{"./src/stories/Map.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Map_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),leaflet_src=__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),MapContainer=__webpack_require__("./node_modules/react-leaflet/lib/MapContainer.js"),TileLayer=__webpack_require__("./node_modules/react-leaflet/lib/TileLayer.js"),Marker=__webpack_require__("./node_modules/react-leaflet/lib/Marker.js"),Popup=__webpack_require__("./node_modules/react-leaflet/lib/Popup.js"),coordinates=[{gps:[55.1845503,30.2019619],popUp:"Vitebsk office"},{gps:[52.2488601,21.0276828],popUp:"Warsaw office"},{gps:[53.9076612,27.5484056],popUp:"Minsk office"}],injectStylesIntoStyleTag=(__webpack_require__("./node_modules/leaflet/dist/leaflet.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Map/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Map_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var __jsx=react.createElement,icon=new leaflet_src.Icon({iconUrl:"/assets/icons/icon_location.svg",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],popupAnchor:[-3,-76]}),Map=function Map(){return __jsx(MapContainer.h,{className:Map_styles_module.map,center:[53.8843138,27.3131922],zoom:7},__jsx(TileLayer.I,{url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}),coordinates.map((function(_ref){var gps=_ref.gps,popUp=_ref.popUp;return __jsx(Marker.J,{position:gps,icon,key:popUp},__jsx(Popup.G,null,__jsx("p",null,popUp)))})))};Map.displayName="Map",Map.__docgenInfo={description:"",methods:[],displayName:"Map"};const components_Map=Map;try{Map.displayName="Map",Map.__docgenInfo={description:"",displayName:"Map",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Map/index.tsx#Map"]={docgenInfo:Map.__docgenInfo,name:"Map",path:"src/components/Map/index.tsx#Map"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Map_stories={title:"Map Component",component:components_Map};var Default={name:"Map"};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Map'\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/Map/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".styles_map__a5f1f{width:100%;height:355px}","",{version:3,sources:["webpack://./src/components/Map/styles.module.scss","webpack://./src/styles/variables.scss"],names:[],mappings:"AACA,mBACE,UCWU,CDVV,YAAA",sourcesContent:['@import "variables.scss"; @import "mixins.scss";\n.map {\n  width: $width-xxl;\n  height: 355px;\n}\n',"$black-color: #000000;\n$primary-color: #232536;\n$yellow-color: #fbd050;\n$dark-yellow-color: #eec14a;\n$purple-color: #5a34a9;\n$dark-gray-color: #4c4c4c;\n$blue-gray-color: #2e3040;\n$medium-gray-color: #6e6f77;\n$gray-color: #f4f4f4;\n$lavender-color: #f4f0f8;\n$beige-color: #fcf7eb;\n$white-color: #ffffff;\n\n$width-xxl: 100%;\n$width-xl: 95%;\n$width-ll: 90%;\n$width-ml: 70%;\n$width-l: 55%;\n$width-ss: 50%;\n$width-mm: 45%;\n$width-m: 40%;\n$width-s: 35%;\n$width-xs: 30%;\n$width-xss: 20%;\n$width-xxs: 15%;\n\n$height-s: 56px;\n$height-ss: 76px;\n$height-m: 144px;\n$height-xxl: 100%;\n\n$margin-xxxs: 2%;\n$margin-xs: 6%;\n$margin-s: 10%;\n\n$padding-xxs: 4%;\n$padding-xs: 6%;\n$padding-s: 10%;\n$padding-m: 20%;\n\n$font-size-s: 12px;\n$font-size-ss: 14px;\n$font-size-m: 18px;\n\n$mobile: 495px;\n$tablet: 768px;\n$laptop: 1024px;\n$bigScreen: 1920px;\n\n:export {\n  $black-color: $black-color;\n  $primary-color: $primary-color;\n  $dark-yellow-color: $dark-yellow-color;\n  $yellow-color: $yellow-color;\n  $purple-color: $purple-color;\n  $dark-gray-color: $dark-gray-color;\n  $blue-gray-color: $blue-gray-color;\n  $medium-gray-color: $medium-gray-color;\n  $gray-color: $gray-color;\n  $lavender-color: $lavender-color;\n  $beige-color: $beige-color;\n  $white-color: $white-color;\n\n  $width-xxl: $width-xxl;\n  $width-xl: $width-xl;\n  $width-ll: $width-ll;\n  $width-ml: $width-ml;\n  $width-l: $width-l;\n  $width-ss: $width-ss;\n  $width-mm: $width-mm;\n  $width-m: $width-m;\n  $width-s: $width-s;\n  $width-xs: $width-xs;\n  $width-xss: $width-xss;\n  $width-xxs: $width-xxs;\n\n  $height-s: $height-s;\n  $height-ss: $height-ss;\n  $height-m: $height-m;\n  $height-xxl: $height-xxl;\n\n  $margin-xxxs: $margin-xxxs;\n  $margin-xs: $margin-xs;\n  $margin-s: $margin-s;\n\n  $padding-xxs: $padding-xxs;\n  $padding-xs: $padding-xs;\n  $padding-s: $padding-s;\n  $padding-m: $padding-m;\n\n  $font-size-s: $font-size-s;\n  $font-size-ss: $font-size-ss;\n  $font-size-m: $font-size-m;\n\n  $mobile: $mobile;\n  $tablet: $tablet;\n  $laptop: $laptop;\n  $bigScreen: $bigScreen;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={map:"styles_map__a5f1f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);