(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(153),l=a(162),d=a(157),c=a(158),u=a(154),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},o.a.createElement(s.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=f;var A="2785444898"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(155);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return f});a(34);var r=a(160),i=a.n(r),n=a(161),o=a(167),s=a.n(o),l=a(168),d=a.n(l);d.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete d.a.googleFonts;var c=new s.a({title:"Wordpress Theme 2016",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Merriweather",styles:["400","400i","700","700i","900","900i"]}],headerFontFamily:["Merriweather","Georgia","serif"],bodyFontFamily:["Merriweather","Georgia","serif"],bodyColor:"hsla(0,0%,0%,0.9)",headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var a,r=e.adjustFontSizeTo,o=e.scale,s=e.rhythm;return(a={h1:{fontFamily:["Montserrat","sans-serif"].join(",")},blockquote:Object.assign({},o(.2),{color:i()(41),fontStyle:"italic",paddingLeft:s(.8125),marginLeft:s(-1),borderLeft:s(3/16)+" solid "+i()(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":Object.assign({},r(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:0}})[n.MOBILE_MEDIA_QUERY]={"ul,ol":{marginLeft:s(1)},blockquote:{marginLeft:s(-.75),marginRight:0,paddingLeft:s(9/16)}},a["h1,h2,h3,h4,h5,h6"]={marginTop:s(2)},a.h4={letterSpacing:"0.140625em",textTransform:"uppercase"},a.h6={fontStyle:"italic"},a.a={boxShadow:"0 1px 0 0 currentColor",color:"#007acc",textDecoration:"none"},a["a:hover,a:active"]={boxShadow:"none"},a["mark,ins"]={background:"#007acc",color:"white",padding:s(1/16)+" "+s(1/8),textDecoration:"none"},a}});var u=c.rhythm,f=c.scale},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},157:function(e,t,a){"use strict";a(34);var r=a(0),i=a.n(r),n=a(153),o=a(154);t.a=function(e){var t,a=e.location,r=e.title,s=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,s),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),o=a(4),s=a.n(o),l=a(169),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Borealis Digital Studio blog",description:"A collection of blogposts written by our employees",company:"Borealis Digital Studio"}}}}},162:function(e,t,a){"use strict";a(163);var r=a(165),i=a(0),n=a.n(i),o=a(153),s=a(166),l=a.n(s),d=a(154);var c="2948476111";t.a=function(e){var t=e.author,a=e.authorSocial;return n.a.createElement(o.b,{query:c,render:function(e){var r=e.site.siteMetadata,i=r.company,o=r.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:i,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("a",{href:""+a},t)," for the"," ",n.a.createElement("strong",null,i)," ",n.a.createElement("br",null),"Have a look at our "," ",n.a.createElement("a",{href:""+o.github},"Github")," ","profile."))},data:r})}},163:function(e,t,a){"use strict";a(164)("fixed",function(e){return function(){return e(this,"tt","","")}})},164:function(e,t,a){var r=a(11),i=a(18),n=a(19),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},165:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAABtTuWpVlGTeDJ0HAG/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMTABEjJP/aAAgBAQABBQJzpYGe3LyGZxGLsY+mY8Yzof/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AcKjj//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBIhMf/aAAgBAgEBPwGyQmN//8QAIBAAAQIFBQAAAAAAAAAAAAAAAQARAgMQEiExQWGBkf/aAAgBAQAGPwItqmMdwNLT4n2JbCwQU/Kl90//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IUVXGRfSl5yZEWkVrGwnd6EDTA+sdXqEbIVcO+k//9oADAMBAAIAAwAAABD76AH/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhMVH/2gAIAQMBAT8QhKbI9NMWH//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhUf/aAAgBAgEBPxBNtovyBrT/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV04hQo4lO/wAzyyjjEGw+cZbkILxecbfXBH7zaeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/c15d6/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/c15d6/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/43c20/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/da97e/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{company:"Borealis Digital Studio",social:{github:"https://github.com/borealisgroup/borealis-js"}}}}}},166:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(35)),s=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+o+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:S?1:0,transition:v?"opacity "+y+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},v&&R,s,f),x={title:t,alt:this.state.isVisible?"":a,style:L,className:A};if(p){var I=p;return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),j&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&R)}),I.base64&&d.default.createElement(m,(0,l.default)({src:I.base64},x)),I.tracedSVG&&d.default.createElement(m,(0,l.default)({src:I.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},I))}}))}if(h){var O=h,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete k.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},j&&d.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:j,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},v&&R)}),O.base64&&d.default.createElement(m,(0,l.default)({src:O.base64},x)),O.tracedSVG&&d.default.createElement(m,(0,l.default)({src:O.tracedSVG},x)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(m,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-cbd63dbf3c1875280894.js.map