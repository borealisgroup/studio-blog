(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return u});var n=a(7),o=a.n(n),r=a(0),i=a.n(r),c=a(157),l=a(158),s=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=s;var u="1097489062"},153:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(33),l=a.n(c);a.d(e,"a",function(){return l.a});a(154);var s=o.a.createContext({}),u=function(t){return o.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(t,e,a){var n;t.exports=(n=a(156))&&n.default||n},155:function(t,e,a){"use strict";a.d(e,"a",function(){return d}),a.d(e,"b",function(){return m});a(34);var n=a(160),o=a.n(n),r=a(161),i=a(162),c=a.n(i),l=a(163),s=a.n(l);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var u=new c.a({title:"Borealis Blog Theme",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,googleFonts:[{name:"Roboto",styles:["400","400i","700","700i","900","900i"]},{name:"Arial",styles:["400","400i","700","700i","900","900i"]}],headerFontFamily:["Roboto","Arial"],bodyFontFamily:["Arial","Roboto"],bodyColor:"hsla(0,0%,0%,0.9)",headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var a,n=t.adjustFontSizeTo,i=t.scale,c=t.rhythm;return(a={h1:{fontFamily:["Roboto","Arial"].join(",")},blockquote:Object.assign({},i(.2),{color:o()(41),fontStyle:"italic",paddingLeft:c(.8125),marginLeft:c(-1),borderLeft:c(3/16)+" solid "+o()(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":Object.assign({},n(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:0}})[r.MOBILE_MEDIA_QUERY]={"ul,ol":{marginLeft:c(1)},blockquote:{marginLeft:c(-.75),marginRight:0,paddingLeft:c(9/16)}},a["h1,h2,h3,h4,h5,h6"]={marginTop:c(2)},a.h4={letterSpacing:"0.140625em",textTransform:"uppercase"},a.h6={fontStyle:"italic"},a.a={boxShadow:"0 1px 0 0 currentColor",color:"#007acc",textDecoration:"none"},a["a:hover,a:active"]={boxShadow:"none"},a["mark,ins"]={background:"#007acc",color:"white",padding:c(1/16)+" "+c(1/8),textDecoration:"none"},a}});var d=u.rhythm,m=u.scale},156:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(55),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?o.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},157:function(t,e,a){"use strict";a(34);var n=a(0),o=a.n(n),r=a(153),i=a(155);e.a=function(t){var e,a=t.location,n=t.title,c=t.children;return e="/studio-blog/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(i.b)(1.5),{marginBottom:Object(i.a)(1.5),marginTop:0})},o.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(28),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,c))}},158:function(t,e,a){"use strict";var n=a(159),o=a(0),r=a.n(o),i=a(4),c=a.n(i),l=a(164),s=a.n(l);function u(t){var e=t.description,a=t.lang,o=t.meta,i=t.keywords,c=t.title,l=n.data.site,u=e||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Borealis Digital Studio blog",description:"A collection of blogposts written by our employees",company:"Borealis Digital Studio"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d5547763101b554ee0b2.js.map