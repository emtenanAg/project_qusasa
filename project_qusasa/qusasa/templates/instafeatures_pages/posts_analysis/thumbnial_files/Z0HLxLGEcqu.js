;/*FB_PKG_DELIM*/

__d("PolarisAppAttributionText.react",["fbt","IGDSExternalLinkPanoOutline24Icon","IGDSText.react","PolarisFastLink.react","PolarisLinkBuilder","PolarisLogger","PolarisViewpointReact.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useMemo;var k=b.useRef,l=b.unstable_useMemoCache,m=h._("__JHASH__mrLy4FGHzkL__JHASH__");function a(a){var b=l(15),e=a.appId,f=a.appName,g=a.mediaId;a=a.showIcon;var h=a===void 0?!1:a,i=k(!1);b[0]===Symbol["for"]("react.memo_cache_sentinel")?(a=[function(a){a.percentVisible>=1&&!i.current&&(d("PolarisLogger").logAction("thirdPartyAppAttributionImpression"),i.current=!0)}],b[0]=a):a=b[0];a=a;a=a;var n;b[1]!==e||b[2]!==g?(n=d("PolarisLinkBuilder").buildClipsAppPageLink(e,g),b[1]=e,b[2]=g,b[3]=n):n=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(){d("PolarisLogger").logAction("thirdPartyAppAttributionClick")},b[4]=g):g=b[4];var o;b[5]!==h||b[6]!==f?(o=function(a){return j.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np",ref:a,children:[h===!0&&j.jsx("div",{className:"xw3qccf",children:j.jsx(c("IGDSExternalLinkPanoOutline24Icon"),{alt:m,size:12})}),j.jsx(c("IGDSText.react").Body2,{breakWord:!0,zeroMargin:!0,children:j.jsx("div",{className:"x1lliihq x6ikm8r x10wlt62 xlyipyv xuxw1ft","data-testid":void 0,children:j.jsx("span",{children:f})})})]})},b[5]=h,b[6]=f,b[7]=o):o=b[7];var p;b[8]!==a||b[9]!==e||b[10]!==o?(p=j.jsx(d("PolarisViewpointReact.react").Viewpoint,{action:a,id:e,children:o}),b[8]=a,b[9]=e,b[10]=o,b[11]=p):p=b[11];b[12]!==n||b[13]!==p?(a=j.jsx(c("PolarisFastLink.react"),{href:n,onClick:g,children:p}),b[12]=n,b[13]=p,b[14]=a):a=b[14];return a}g["default"]=a}),98);
__d("PolarisAudioAttributionText.react",["IGDSMiddleDot.react","IGDSText.react","PolarisClipsConstants","PolarisClipsHelpers","PolarisFastLink.react","PolarisIGCorePressable","PolarisLinkBuilder","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(24),e=a.audioArtist,f=a.audioID,g=a.audioName,h=a.isMediaOwnerOriginalSound,k=a.isMutedAudio,l=a.isOverMedia,m=a.isOwnerPrivate,n=a.muteAudioReason,o=a.onDisabledClipsAudioAttributionClick;a=l===void 0?!1:l;if(!d("PolarisClipsHelpers").hasAudioAttributionText({audioArtist:e,audioName:g,isMediaOwnerOriginalSound:h}))return null;l=a?"textOnMedia":"primaryText";var p;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(p="x78zum5 xh8yej3",b[0]=p):p=b[0];var q;b[1]!==h||b[2]!==g||b[3]!==a||b[4]!==e?(q=h===!0?j.jsx("span",{className:"x6ikm8r x10wlt62 xlyipyv xuxw1ft",children:g}):j.jsxs("span",{className:"x6ikm8r x10wlt62 xlyipyv xuxw1ft",children:[e,j.jsx(c("IGDSMiddleDot.react"),{color:a?"textOnMedia":"primaryText"}),g]}),b[1]=h,b[2]=g,b[3]=a,b[4]=e,b[5]=q):q=b[5];b[6]!==q?(g=j.jsx("div",{className:p,"data-testid":void 0,children:q}),b[6]=q,b[7]=g):g=b[7];b[8]!==l||b[9]!==g?(a=j.jsx(c("IGDSText.react").Body2,{color:l,zeroMargin:!0,children:g}),b[8]=l,b[9]=g,b[10]=a):a=b[10];e=a;var r=h===!0&&m===!0;b[11]!==o||b[12]!==r||b[13]!==n?(p=function(){o&&o(r?d("PolarisClipsConstants").AUDIO_PAGE_DOES_NOT_EXIST_PRIVATE_USER:String(n))},b[11]=o,b[12]=r,b[13]=n,b[14]=p):p=b[14];q=p;if(f!=null&&c("gkx")("4914")){if(r||k){b[15]!==q||b[16]!==e?(l=j.jsx(c("PolarisIGCorePressable"),{onPress:q,children:e}),b[15]=q,b[16]=e,b[17]=l):l=b[17];return l}b[18]===Symbol["for"]("react.memo_cache_sentinel")?(g="xh8yej3",b[18]=g):g=b[18];b[19]!==f?(a=d("PolarisLinkBuilder").buildClipsAudioPageLink(f),b[19]=f,b[20]=a):a=b[20];b[21]!==a||b[22]!==e?(h=j.jsx(c("PolarisFastLink.react"),{className:g,href:a,children:e}),b[21]=a,b[22]=e,b[23]=h):h=b[23];return h}return e}g["default"]=a}),98);
__d("PolarisPostTimestamp.react",["cx","IGDSText.react","PolarisFastLink.react","PolarisIGCoreText","PolarisLinkBuilder","PolarisTimestamp.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).unstable_useMemoCache,k=i;function a(a){var b=j(11),e=a.code,f=a.isVideo,g=a.mediaLinkBuilder;a=a.postedAt;var h;b[0]!==g||b[1]!==e||b[2]!==f?(h=g!=null?g(e,f):d("PolarisLinkBuilder").buildMediaLink(e),b[0]=g,b[1]=e,b[2]=f,b[3]=h):h=b[3];b[4]===Symbol["for"]("react.memo_cache_sentinel")?(g={navigation_source:"polaris_timestamp"},b[4]=g):g=b[4];b[5]===Symbol["for"]("react.memo_cache_sentinel")?(e="_aaqe",b[5]=e):e=b[5];b[6]!==a?(f=k.jsx(c("IGDSText.react"),{color:"secondaryText",size:"footnote",children:k.jsx(c("PolarisTimestamp.react"),{className:e,isLong:!0,value:a})}),b[6]=a,b[7]=f):f=b[7];b[8]!==h||b[9]!==f?(e=k.jsx(c("PolarisIGCoreText"),{display:"block",zeroMargin:!0,children:k.jsx(c("PolarisFastLink.react"),{"data-testid":void 0,href:h,traceParams:g,children:f})}),b[8]=h,b[9]=f,b[10]=e):e=b[10];return e}g["default"]=a}),98);
__d("XPolarisPostMediaInsightsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/post/insights/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("PolarisPostViewInsights.react",["fbt","CometPlaceholder.react","CometRouteParams","IGDSButton.react","JSResourceForInteraction","PolarisNavigationUtils","QuickPerformanceLogger","XPolarisPostMediaInsightsControllerRouteBuilder","gkx","lazyLoadComponent","qpl","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useEffect;b.useMemo;var m=b.useState,n=b.unstable_useMemoCache,o=c("lazyLoadComponent")(c("JSResourceForInteraction")("IGWebBloksApp").__setRef("PolarisPostViewInsights.react"));function p(a){switch(a){case"com.instagram.insights.media_refresh.videos.ad_bottom_sheet.action":(i||(i=c("QuickPerformanceLogger"))).markerStart(c("qpl")._(39130588,"1610"),0);break;case"com.instagram.insights.media_refresh.videos.bottom_sheet.action":(i||(i=c("QuickPerformanceLogger"))).markerStart(c("qpl")._(39130588,"1610"),0);break;case"com.instagram.insights.media_refresh.clips.ad_bottom_sheet.action":(i||(i=c("QuickPerformanceLogger"))).markerStart(c("qpl")._(39137013,"1611"),0);break;case"com.instagram.insights.media_refresh.clips.bottom_sheet.action":(i||(i=c("QuickPerformanceLogger"))).markerStart(c("qpl")._(39137013,"1611"),0);break;default:(i||(i=c("QuickPerformanceLogger"))).markerStart(c("qpl")._(39124994,"1612"),0)}}function a(a){var b=n(18),e=a.bloksAppId;a=a.mediaId;var f=d("CometRouteParams").useRouteParams(),g=f.show_insights;f=m(Boolean(g));var i=f[0],j=f[1],q;b[0]!==g?(f=function(){j(Boolean(g))},q=[g],b[0]=g,b[1]=f,b[2]=q):(f=b[1],q=b[2]);l(f,q);b[3]!==a?(f={media_id:a},b[3]=a,b[4]=f):f=b[4];q=f;a=q;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(f=function(){return j(!1)},b[5]=f):f=b[5];q=f;b[6]!==e?(f=function(){c("gkx")("8720")?d("PolarisNavigationUtils").openURL(c("XPolarisPostMediaInsightsControllerRouteBuilder").buildURL({})):(j(!0),p(e))},b[6]=e,b[7]=f):f=b[7];f=f;var r;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(r=h._("__JHASH__ibs5xsuNLiq__JHASH__"),b[8]=r):r=b[8];b[9]!==f?(r=k.jsx(c("IGDSButton.react"),{display:"block",label:r,onClick:f,variant:"primary_link"}),b[9]=f,b[10]=r):r=b[10];b[11]!==i||b[12]!==e||b[13]!==a?(f=i?k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(o,{appId:e,bridgeOverrides_DEPRECATED:{onResumeStoryPlayback:q},loadingFallback:k.jsx("div",{}),params:a})}):null,b[11]=i,b[12]=e,b[13]=a,b[14]=f):f=b[14];b[15]!==r||b[16]!==f?(q=k.jsxs("section",{children:[r,f]}),b[15]=r,b[16]=f,b[17]=q):q=b[17];return q}g["default"]=a}),98);