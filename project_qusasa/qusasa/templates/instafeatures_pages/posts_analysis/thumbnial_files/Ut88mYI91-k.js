;/*FB_PKG_DELIM*/

__d("PolarisProfileActionButtonsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6996717410365736",metadata:{},name:"PolarisProfileActionButtonsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfileStoryHighlightsTrayContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7245762105480436",metadata:{},name:"PolarisProfileStoryHighlightsTrayContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfilePageContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"24887775107536389",metadata:{},name:"PolarisProfilePageContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisProfilePageHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7100042980031353",metadata:{},name:"PolarisProfilePageHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildPolarisProfileRoute.entrypoint",["JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","PolarisProfileActionButtonsQuery$Parameters","PolarisProfilePageContentQuery$Parameters","PolarisProfilePageHeaderQuery$Parameters","PolarisProfileStoryHighlightsTrayContentQuery$Parameters","PolarisSeoCrawlingPoolRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return{getPreloadProps:function(e){var f=e.routeProps,g=f.enable_highlights_query,h=f.enable_relay_profile_header,i=f.enable_seo_crawling_pool;f=f.id;var j={userQuery:{parameters:c("PolarisProfilePageContentQuery$Parameters"),variables:{id:f,render_surface:"PROFILE"}}};h&&(j=babelHelpers["extends"]({},j,{profileActionButtonsQuery:{parameters:c("PolarisProfileActionButtonsQuery$Parameters"),variables:{id:f}},profilePageHeaderQuery:{parameters:c("PolarisProfilePageHeaderQuery$Parameters"),variables:{id:f}}}));g&&(j=babelHelpers["extends"]({},j,{highlightsQuery:{parameters:c("PolarisProfileStoryHighlightsTrayContentQuery$Parameters"),variables:{user_id:f}}}));i&&(j=babelHelpers["extends"]({},j,{seoCrawlingPoolQuery:{options:{},parameters:c("PolarisSeoCrawlingPoolRootQuery$Parameters"),variables:{caller:"ig_profile"}}}));return{entryPoints:{contentEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:{getPreloadProps:b,root:a},entryPointParams:e})},queries:j}},root:c("JSResourceForInteraction")("PolarisProfileRoot.react").__setRef("buildPolarisProfileRoute.entrypoint")}}g["default"]=a}),98);