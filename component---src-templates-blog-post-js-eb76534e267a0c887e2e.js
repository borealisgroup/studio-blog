(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,i){"use strict";i.r(e);i(34);var u=i(0),L=i.n(u),a=i(153),M=i(168),r=(i(169),i(155));var o="4080731255",n=function(t){var e=t.author,i=t.authorSocial,u=t.authorAvatar;return L.a.createElement(a.b,{query:o,render:function(t){var a=t.site.siteMetadata,M=a.company,o=a.social;return L.a.createElement("div",{style:{display:"flex",marginBottom:Object(r.a)(2.5)}},L.a.createElement("img",{src:u,alt:"avatar",style:{marginRight:Object(r.a)(.5),marginBottom:0,width:50,height:50,borderRadius:"50%"}}),L.a.createElement("p",null,"Written by ",L.a.createElement("a",{href:""+i},e)," for the"," ",L.a.createElement("strong",null,M)," ",L.a.createElement("br",null),"Have a look at our "," ",L.a.createElement("a",{href:""+o.github},"Github")," ","profile."))},data:M})},j=i(157),s=i(159);i.d(e,"pageQuery",function(){return S});e.default=function(t){var e=t.data,i=t.pageContext,u=t.location,M=e.markdownRemark,o=e.site,S=i.previous,l=i.next,g=M,c=o.siteMetadata.title;return L.a.createElement(j.a,{location:u,title:c},L.a.createElement(s.a,{title:g.frontmatter.title,description:g.frontmatter.description||g.excerpt}),L.a.createElement("h1",null,g.frontmatter.title),L.a.createElement("p",{style:Object.assign({},Object(r.b)(-.2),{display:"block",marginBottom:Object(r.a)(1),marginTop:Object(r.a)(-1)})},g.frontmatter.date," - ",g.frontmatter.author),L.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.html}}),L.a.createElement("hr",{style:{marginBottom:Object(r.a)(1)}}),L.a.createElement(n,{author:g.frontmatter.author,authorSocial:g.frontmatter.authorSocial,authorAvatar:g.frontmatter.authorAvatar}),L.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},L.a.createElement("li",null,S&&L.a.createElement(a.a,{to:S.fields.slug,rel:"prev"},"← ",S.frontmatter.title)),L.a.createElement("li",null,l&&L.a.createElement(a.a,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))};var S="2095657362"},153:function(t,e,i){"use strict";i.d(e,"b",function(){return j});var u=i(0),L=i.n(u),a=i(4),M=i.n(a),r=i(33),o=i.n(r);i.d(e,"a",function(){return o.a});i(154);var n=L.a.createContext({}),j=function(t){return L.a.createElement(n.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):L.a.createElement("div",null,"Loading (StaticQuery)")})};j.propTypes={data:M.a.object,query:M.a.string.isRequired,render:M.a.func,children:M.a.func}},154:function(t,e,i){var u;t.exports=(u=i(156))&&u.default||u},155:function(t,e,i){"use strict";i.d(e,"a",function(){return S}),i.d(e,"b",function(){return l});i(34);var u=i(161),L=i.n(u),a=i(162),M=i(163),r=i.n(M),o=i(164),n=i.n(o),j=i(165);n.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete n.a.googleFonts;var s=new r.a({title:"Borealis Blog Theme",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,googleFonts:[{name:"Roboto",styles:["400","400i","700","700i","900","900i"]},{name:"Arial",styles:["400","400i","700","700i","900","900i"]}],headerFontFamily:["Roboto","Arial"],bodyFontFamily:["Roboto","Arial"],bodyColor:"hsla(0,0%,0%,0.9)",headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var i,u=t.adjustFontSizeTo,M=t.scale,r=t.rhythm;return(i={h1:{fontFamily:["Roboto","Arial"].join(",")},blockquote:Object.assign({},M(.2),{color:L()(41),fontStyle:"italic",paddingLeft:r(.8125),marginLeft:r(-1),borderLeft:r(3/16)+" solid "+L()(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":Object.assign({},u(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:0}})[a.MOBILE_MEDIA_QUERY]={"ul,ol":{marginLeft:r(1)},blockquote:{marginLeft:r(-.75),marginRight:0,paddingLeft:r(9/16)}},i["h1,h2,h3,h4,h5,h6"]={marginTop:r(2),color:j.a.colors.darkblue[5]},i.h4={letterSpacing:"0.140625em",textTransform:"uppercase"},i.h6={fontStyle:"italic"},i.a={boxShadow:"0 1px 0 0 currentColor",color:j.a.colors.lightblue[5],textDecoration:"none"},i["a:hover,a:active"]={boxShadow:"none"},i["mark,ins"]={background:j.a.colors.lightblue[5],color:"white",padding:r(1/16)+" "+r(1/8),textDecoration:"none"},i}});var S=s.rhythm,l=s.scale},156:function(t,e,i){"use strict";i.r(e);i(34);var u=i(0),L=i.n(u),a=i(4),M=i.n(a),r=i(55),o=i(2),n=function(t){var e=t.location,i=o.default.getResourcesForPathnameSync(e.pathname);return i?L.a.createElement(r.a,Object.assign({location:e,pageResources:i},i.json)):null};n.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},e.default=n},157:function(t,e,i){"use strict";i(34);var u=i(0),L=i.n(u),a=i(153),M=i(158),r=i.n(M),o=i(155),n=function(){return L.a.createElement(a.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",display:"block"},to:"/"},L.a.createElement("img",{src:r.a,alt:"Borealis digital studio blog logo",style:{maxWidth:"200px",margin:"auto",display:"block"}}))};e.a=function(t){var e,i=t.location,u=t.children;return e="/studio-blog/"===i.pathname?L.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},L.a.createElement(n,null)):L.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},L.a.createElement(n,null)),L.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(28),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},L.a.createElement("header",null,e),L.a.createElement("main",null,u))}},158:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuMSA3Ni44Ij48cGF0aCBkPSJNNi44IDQwLjdjNS4xIDAgNy43IDMuOCA3LjcgOC44IDAgNS43LTIuNyA5LjQtNy43IDkuNEgwVjQwLjdoNi44em0tNC4yIDIuNXYxMy4xaDQuMmMzLjQgMCA1LTIuNCA1LTYuOCAwLTMuOC0xLjYtNi4zLTUtNi4zSDIuNnptMTcuMi42aC0yLjV2LTMuMWgyLjV2My4xem0wIDE1aC0yLjV2LTEzaDIuNXYxM3ptNS43IDFjLjMgMS4xIDEuMiAxLjcgMi44IDEuNyAyLjIgMCAzLTEuMSAzLTMuN3YtLjVjLS45IDEtMi4xIDEuNS0zLjQgMS41LTMuNCAwLTUuMy0yLjctNS4zLTYuNyAwLTMuNiAyLTYuNSA1LjUtNi41IDEuMiAwIDIuNC41IDMuMiAxLjR2LTEuMmgyLjR2MTJjMCAzLjktMS45IDYtNS40IDYtMy4xIDAtNS0xLjYtNS4zLTRoMi41em0yLjctMy4zYzIuMSAwIDMuMi0xLjQgMy4yLTQuM3MtMS00LjQtMy4xLTQuNFMyNSA0OS41IDI1IDUyYy4xIDMgMS4xIDQuNSAzLjIgNC41em0xMS42LTEyLjdoLTIuNXYtMy4xaDIuNXYzLjF6bTAgMTVoLTIuNXYtMTNoMi41djEzem03LTEzaDIuOFY0OGgtMi44djcuNGMwIDEgLjYgMS4yIDEuNCAxLjJoLjh2Mi4xYy0uNS4xLS45LjEtMS40LjEtMS43IDAtMy40LS42LTMuNC0zLjVWNDhoLTIuMXYtMi4zaDIuMXYtNWgyLjV2NS4xaC4xem0xMC4yLS4yYzEuMSAwIDIuMi40IDMgMS4ydi0xLjFoMi41djEwLjFjMCAuNy40LjkgMSAuOWguNHYyYy0uMy4xLS43LjEtMSAuMS0xLjEuMS0yLjEtLjUtMi41LTEuNS0uOCAxLTIuMSAxLjYtMy41IDEuNi0zLjUgMC01LjYtMi44LTUuNi02LjkuMS0zLjUgMi4zLTYuNCA1LjctNi40em0uMiAxMS4yYzIgMCAzLTEuNCAzLTQuNHMtLjktNC40LTIuOS00LjQtMy40IDEuOC0zLjQgNC4yYzAgMi45IDEuMSA0LjYgMy4zIDQuNnptMTEuNi0xLjRjMCAxIC40IDEuMiAxLjIgMS4yaC40djIuMWMtLjMuMS0uNi4xLS45LjEtMS42IDAtMy4xLS42LTMuMS0zLjVWNDAuN2gyLjVsLS4xIDE0Ljd6IiBmaWxsPSIjMDA1ZDlhIi8+PHBhdGggZD0iTTgyLjYgNDUuOGMtLjEtMS41LTEtMy0zLjgtMy0yLjIgMC0zLjYuOS0zLjYgMi41IDAgMS45IDEuNiAyLjEgNiAzLjIgMi41LjcgNC40IDIuMSA0LjQgNS4yUzgyLjggNTkgNzguNyA1OWMtNC45IDAtNi43LTMuMy02LjktNS45aDIuOGMuMiAxLjcgMS4zIDMuNCA0LjEgMy40IDIuNSAwIDQuMi0xLjEgNC4yLTIuOSAwLTIuMi0xLjYtMi40LTYuMS0zLjYtMi40LS42LTQuMi0yLjItNC4yLTQuOSAwLTIuOSAyLjYtNSA2LjMtNSA0LjkgMCA2LjMgMy4xIDYuNSA1LjVsLTIuOC4yem05LjIgMGgyLjhWNDhoLTIuOHY3LjRjMCAxIC42IDEuMiAxLjQgMS4yaC44djIuMWMtLjUuMS0uOS4xLTEuNC4xLTEuNyAwLTMuNC0uNi0zLjQtMy41VjQ4aC0yLjF2LTIuM2gyLjF2LTVoMi41bC4xIDUuMXptNS4zIDBoMi41djhjMCAyIDEuMiAzIDIuNSAzIDEuOCAwIDIuOS0xLjIgMi45LTQuMXYtNi45aDIuNXYxM0gxMDV2LTEuMWMtLjkuOS0yLjEgMS40LTMuNCAxLjMtMi45IDAtNC41LTItNC41LTV2LTguMnptMjEuOCAxLjF2LTYuM2gyLjV2MTguMWgtMi41di0xLjJjLS44LjktMiAxLjQtMy4yIDEuNC0zLjUgMC01LjUtMi43LTUuNS02LjkgMC0zLjcgMi4xLTYuNSA1LjUtNi41IDEuMi4xIDIuMy42IDMuMiAxLjR6bS4xIDUuNGMwLTMtMS4xLTQuNC0zLjEtNC40cy0zLjIgMS43LTMuMiA0LjJjMCAyLjkgMSA0LjUgMy4yIDQuNXMzLjEtMS40IDMuMS00LjN6bTguNC04LjVoLTIuNXYtMy4xaDIuNXYzLjF6bTAgMTVoLTIuNXYtMTNoMi41djEzem0xNC40LTYuNmMwIDQuMi0yLjIgNi44LTUuOCA2LjhzLTUuOC0yLjUtNS44LTYuOCAyLjQtNi42IDUuOC02LjZjMy42IDAgNS44IDIuOCA1LjggNi42em0tMi42IDBjMC0yLjctMS4xLTQuMy0zLjItNC4zcy0zLjIgMS41LTMuMiA0LjMgMS4xIDQuNSAzLjMgNC41IDMuMS0xLjUgMy4xLTQuNXoiIGZpbGw9IiMwMDJkNWEiLz48cGF0aCBkPSJNOTQuNCAxMi44YzEwLjQtMTIgMjEuOC0xMC42IDI0LjgtOS45LS41LS45LTEuMS0xLjctMS43LTIuNi0zLjktLjctMTQuNC0xLjEtMjQuMSAxMC0xMC4xIDExLjYtMjEgMTAuNi0yNC41IDkuOS4xLjguMyAxLjYuNCAyLjMgMyAuNyAxNC42IDIuNSAyNS4xLTkuN3oiIGZpbGw9IiMwMDVkOWEiLz48cGF0aCBkPSJNOTYuMiAxNy41YzEwLjktMTIuNiAyMi45LTEwLjQgMjUuMi05LjdsLS45LTIuNGMtMi40LS42LTE0LjMtMi43LTI1LjIgOS44cy0yMi45IDEwLjMtMjUuMiA5LjdsLjkgMi40YzIuNS42IDE0LjQgMi43IDI1LjItOS44eiIgZmlsbD0iIzAwNWQ5YSIvPjxwYXRoIGQ9Ik05OCAyMi4yYzEwLjEtMTEuNiAyMS4xLTEwLjYgMjQuNS05LjktLjEtLjgtLjMtMS42LS40LTIuMy0yLjgtLjYtMTQuNC0yLjQtMjUgOS45LTEwLjQgMTItMjEuOCAxMC42LTI0LjggOS45LjUuOSAxLjEgMS43IDEuNyAyLjYgMy45LjUgMTQuMyAxIDI0LTEwLjJ6IiBmaWxsPSIjMDA1ZDlhIi8+PHBhdGggZD0iTTkzLjEgOC44Yy41LS42IDEuMS0xLjIgMS43LTEuN0M4Ni4xLS43IDc3LjQtLjIgNzMuOS4zYy0uNi44LTEuMiAxLjctMS43IDIuNiAyLjctLjYgMTEuNy0xLjggMjAuOSA1Ljl6bTEyLjkgOC4zYy0uOC40LTEuNiAxLTIuMiAxLjYgOC40IDUuNiAxNi4xIDQuNCAxOC4zIDMuOS4yLS44LjMtMS41LjQtMi4zLTUuNyAxLTExLjYtLjItMTYuNS0zLjJ6IiBmaWxsPSIjMDAyZDVhIi8+PHBhdGggZD0iTTg5LjcgMTIuMmMuNi0uNSAxLjItMS4xIDEuOC0xLjhDODIuMiAzIDczLjIgNC43IDcxLjEgNS4yYy0uMy44LS43IDEuNi0uOSAyLjQgMS45LS40IDEwLjUtMiAxOS41IDQuNnptMTIuMSA4LjFjLS42LjUtMS4yIDEuMS0xLjggMS44IDkuMyA3LjQgMTguMyA1LjcgMjAuNCA1LjIuMy0uOC43LTEuNi45LTIuNC0xLjguNC0xMC40IDItMTkuNS00LjZ6IiBmaWxsPSIjMDAyZDVhIi8+PHBhdGggZD0iTTg1LjYgMTUuNGMuOC0uNSAxLjUtMSAyLjItMS42LTUuMy0zLjctMTEuOS01LjEtMTguMy0zLjktLjIuOC0uMyAxLjUtLjQgMi4zIDUuNi0uOSAxMS41LjIgMTYuNSAzLjJ6TTk4LjUgMjMuOGMtLjUuNi0xLjEgMS4yLTEuNyAxLjcgOC43IDcuNyAxNy4zIDcuMyAyMC44IDYuNy42LS44IDEuMi0xLjcgMS43LTIuNi0yLjcuNy0xMS42IDEuOS0yMC44LTUuOHoiIGZpbGw9IiMwMDJkNWEiLz48Zz48cGF0aCBkPSJNNzAuOSA2OC42YzEuOSAwIDIuNiAxLjEgMi42IDIuMyAwIC42LS4zIDEuMi0uOCAxLjYuNi40LjkgMSAxIDEuNyAwIDEuMy0xIDIuNC0yLjQgMi41aC00di04LjFoMy42eiIgZmlsbD0iIzAwMmQ1YSIvPjxwYXRoIGQ9Ik02OS4xIDcwLjF2MS44SDcxYy40IDAgLjgtLjMuOS0uN1Y3MWMwLS41LS4zLS45LTEtLjloLTEuOHpNNjkuMSA3My4zdjJINzFjLjYgMCAxLS40IDEtMSAwLS41LS40LS45LS45LS45SDcxbC0xLjktLjF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTgxLjkgNzIuNmMwIDIuNS0xLjIgNC4zLTMuNSA0LjNzLTMuNS0xLjctMy41LTQuMiAxLjMtNC4xIDMuNS00LjFjMi4zLS4xIDMuNSAxLjggMy41IDR6IiBmaWxsPSIjMDAyZDVhIi8+PHBhdGggZD0iTTc2LjUgNzIuNmMwIDEuOC42IDIuNyAxLjggMi43IDEuMiAwIDEuOC0xIDEuOC0yLjcgMC0xLjUtLjYtMi42LTEuOC0yLjYtMS4yIDAtMS44LjktMS44IDIuNnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODcgNjguNmMxLjQtLjEgMi42IDEgMi43IDIuNHYuMmMwIDEtLjUgMS44LTEuNCAyLjNsMS45IDMuMmgtMmwtMS43LTIuOUg4NXYyLjloLTEuN3YtOC4xSDg3eiIgZmlsbD0iIzAwMmQ1YSIvPjxwYXRoIGQ9Ik04NSA3MC4ydjIuMWgyYy42IDAgMS0uNCAxLTFzLS40LTEtLjktMUg4N2wtMi0uMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsPSIjMDAyZDVhIiBkPSJNOTcuMyA3MC4yaC00LjF2MS43aDMuNHYxLjVoLTMuNHYxLjhoNC4xdjEuNmgtNS44di04LjJoNS44ek0xMDMuNCA3NC45aC0yLjlsLS43IDEuOEg5OGwzLjEtOC4xaDEuNWwzLjEgOC4xSDEwNHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAxIDczLjRoMS44bC0uOS0yLjR6Ii8+PHBhdGggZmlsbD0iIzAwMmQ1YSIgZD0iTTEwOC41IDc1LjFoMy43djEuNmgtNS40di04LjFoMS43ek0xMTMuNiA2OC42aDEuN3Y4LjFoLTEuN3pNMTIxLjQgNzFjLS4xLS42LS43LTEuMS0xLjMtMS0uNyAwLTEuMy4zLTEuMy45IDAgLjcgMSAuOCAyLjQgMS4xczIgMS4xIDIgMi4zYzAgMS41LTEuMyAyLjYtMy4yIDIuNi0xLjYuMS0zLTEtMy4yLTIuN2gxLjhjLjEuNy43IDEuMiAxLjUgMS4yLjkgMCAxLjUtLjQgMS41LTEuMSAwLS44LS44LS44LTIuNS0xLjItMS4xLS4yLTItMS4xLTItMi4yIDAtMS40IDEuMi0yLjQgMy0yLjQgMS41LS4yIDIuOC45IDMgMi40bC0xLjcuMXoiLz48L2c+PGc+PHBhdGggZD0iTTE0My43IDQwLjRjLjEgMCAuMSAwIDAgMGg4YzEuMSAwIDIuMi4zIDMuMS44IDEgLjYgMS42IDEuNCAxLjkgMi41LjEuNS4yIDEgLjIgMS42cy0uMSAxLjEtLjMgMS42Yy0uMy45LS45IDEuNi0xLjggMi4xIDAgMC0uMSAwLS4xLjEuMSAwIC4xIDAgLjEuMSAxLjEuNCAxLjggMS4yIDIuMiAyLjIuMi41LjMgMSAuNCAxLjUuMSAxLjEtLjEgMi4xLS42IDMtLjMuNS0uNi45LTEuMSAxLjMtLjguNi0xLjYgMS0yLjYgMS4yLS41LjEtMS4xLjEtMS42LjFoLTcuOFY0MC40em0yLjcgMTIuOHYyLjdjMCAuMSAwIC4xLjEuMWg1LjZjLjQgMCAuOC0uMSAxLjEtLjMuNy0uMyAxLjItLjggMS41LTEuNi4yLS41LjItMSAuMS0xLjUtLjItMS0uNy0xLjctMS42LTIuMS0uNi0uMi0xLjEtLjMtMS43LS4zaC00LjhjLS4xIDAtLjEgMC0uMS4xLS4yIDEuMS0uMiAyLS4yIDIuOXptMi43LTUuMWgyLjRjLjUgMCAuOS0uMSAxLjQtLjMuNi0uMyAxLS43IDEuMi0xLjMuMi0uNS4yLTEgLjEtMS41LS4xLS44LS42LTEuMy0xLjMtMS43LS41LS4zLTEuMS0uNC0xLjctLjRoLTQuOGMtLjEgMC0uMSAwLS4xLjF2NC45YzAgLjEgMCAuMS4xLjEuOSAwIDEuOCAwIDIuNy4xem0zOS4yIDljMCAuMSAwIC4xIDAgMC0uNS42LTEuMiAxLTEuOSAxLjItLjcuMi0xLjMuMi0yIC4yLTEtLjEtMS44LS40LTIuNi0xLS41LS40LTEtLjktMS4zLTEuNS0uNC0uOC0uNy0xLjYtLjgtMi41LS4xLS43LS4xLTEuMy0uMS0yIDAtLjkuMi0xLjguNS0yLjcuMy0uOC44LTEuNiAxLjQtMi4yLjctLjYgMS41LTEgMi40LTEuMi4zLS4xLjctLjEgMS0uMSAxLjEgMCAyIC4yIDIuOS45LjIuMS4zLjMuNS40bC4xLjF2LTEuMWgyLjR2MTIuM2MwIDEtLjEgMi0uNSAyLjktLjMuNy0uNyAxLjMtMS4yIDEuOHMtMS4yLjgtMS45IDEtMS40LjItMi4xLjJjLS44IDAtMS42LS4yLTIuNC0uNS0uOS0uNC0xLjYtMS0yLTEuOC0uMy0uNS0uNS0xLjItLjYtMS44aDIuM2MuMSAwIC4xIDAgLjEuMS4yLjkuOCAxLjQgMS43IDEuNi43LjIgMS40LjEgMi4xIDAgLjctLjIgMS4yLS42IDEuNS0xLjMuMi0uNC4zLS44LjMtMS4yLjItLjcuMi0xLjIuMi0xLjggMCAuMSAwIC4xIDAgMHptLjEtNS4zYzAtLjQgMC0uOS0uMS0xLjMtLjEtLjUtLjItMS4xLS41LTEuNS0uMy0uNy0uOS0xLjEtMS42LTEuMy0uNi0uMi0xLjEtLjItMS43IDAtLjQuMS0uOC4yLTEuMS41LS41LjQtLjguOS0xIDEuNC0uMi43LS4zIDEuNC0uNCAyLjEgMCAuNiAwIDEuMi4xIDEuOC4xLjUuMiAxLjEuNSAxLjUuMy41LjYuOSAxLjEgMS4xLjcuNCAxLjUuNCAyLjMuMi41LS4xIDEtLjQgMS40LS44LjMtLjQuNS0uOC42LTEuMi4zLS45LjQtMS42LjQtMi41em0tMjIuMy4xYzAtMS4xLjItMiAuNS0zIC40LS45LjktMS44IDEuNy0yLjQuNy0uNiAxLjUtLjkgMi4zLTEuMS42LS4xIDEuMi0uMiAxLjgtLjEuNy4xIDEuNC4yIDIgLjYuNi4zIDEuMS43IDEuNiAxLjIuNy44IDEuMiAxLjggMS40IDIuOS4yLjguMiAxLjYuMiAyLjMgMCAxLjEtLjIgMi4xLS42IDMuMS0uNSAxLjItMS4zIDIuMi0yLjUgMi44LS42LjMtMS4yLjUtMS45LjYtLjQgMC0uOC4xLTEuMiAwLTEuMi0uMS0yLjMtLjQtMy4yLTEuMi0uNi0uNS0xLjEtMS4yLTEuNC0xLjktLjMtLjctLjUtMS41LS42LTIuMi0uMS0uNS0uMi0xLS4xLTEuNnptOS4xLjFjMC0uNCAwLS44LS4xLTEuMS0uMS0uNS0uMi0xLS40LTEuNS0uMy0uNi0uNy0xLjEtMS4zLTEuNS0uOC0uNC0xLjctLjUtMi41LS4yLS45LjItMS40LjgtMS44IDEuNi0uMy43LS41IDEuNC0uNSAyLjIgMCAuNSAwIDEuMS4xIDEuNi4xLjYuMiAxLjEuNCAxLjYuMy44LjkgMS4zIDEuNyAxLjYuNy4yIDEuNC4yIDIuMSAwIC42LS4yIDEuMi0uNSAxLjUtMS4xLjMtLjQuNS0uOS42LTEuMy4xLS41LjItMS4yLjItMS45em0tMTAuOCA0LjR2MS45YzAgLjEgMCAuMS0uMS4xLS43LjItMS41LjMtMi4yLjEtLjctLjItMS4yLS43LTEuNi0xLjMtLjItLjUtLjMtMS0uMy0xLjVWNDAuNWMwLS4xIDAtLjEuMS0uMWgyLjNjLjEgMCAuMSAwIC4xLjF2MTUuMmMuMS40LjMuNi43LjdoMXoiIGZpbGw9IiMwMDVkOWEiLz48L2c+PC9zdmc+"},159:function(t,e,i){"use strict";var u=i(160),L=i(0),a=i.n(L),M=i(4),r=i.n(M),o=i(166),n=i.n(o);function j(t){var e=t.description,i=t.lang,L=t.meta,M=t.keywords,r=t.title,o=u.data.site,j=e||o.siteMetadata.description;return a.a.createElement(n.a,{htmlAttributes:{lang:i},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:j},{property:"og:title",content:r},{property:"og:description",content:j},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:j}].concat(M.length>0?{name:"keywords",content:M.join(", ")}:[]).concat(L)})}j.defaultProps={lang:"en",meta:[],keywords:[],description:""},j.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=j},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Borealis Digital Studio blog",description:"A collection of blogposts written by our employees",company:"Borealis Digital Studio"}}}}},168:function(t){t.exports={data:{site:{siteMetadata:{company:"Borealis Digital Studio",social:{github:"https://github.com/borealisgroup"}}}}}},169:function(t,e,i){"use strict";var u=i(8);e.__esModule=!0,e.default=void 0;var L,a=u(i(7)),M=u(i(35)),r=u(i(75)),o=u(i(76)),n=u(i(0)),j=u(i(4)),s=function(t){var e=(0,o.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},S=Object.create({}),l=function(t){var e=s(t),i=e.fluid?e.fluid.src:e.fixed.src;return S[i]||!1},g=new WeakMap;var c=function(t,e){var i=(void 0===L&&"undefined"!=typeof window&&window.IntersectionObserver&&(L=new window.IntersectionObserver(function(t){t.forEach(function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(L.unobserve(t.target),g.delete(t.target),e())}})},{rootMargin:"200px"})),L);return i&&(i.observe(t),g.set(t,e)),function(){i.unobserve(t),g.delete(t)}},I=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',i=t.sizes?'sizes="'+t.sizes+'" ':"",u=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+i+"/>":"",L=t.srcSet?'srcset="'+t.srcSet+'" ':"",a=t.title?'title="'+t.title+'" ':"",M=t.alt?'alt="'+t.alt+'" ':'alt="" ';return"<picture>"+u+"<img "+(t.width?'width="'+t.width+'" ':"")+(t.height?'height="'+t.height+'" ':"")+i+L+e+M+a+(t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},d=n.default.forwardRef(function(t,e){var i=t.sizes,u=t.srcSet,L=t.src,a=t.style,M=t.onLoad,j=t.onError,s=(0,r.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return n.default.createElement("img",(0,o.default)({sizes:i,srcSet:u,src:L},s,{onLoad:M,onError:j,ref:e,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});d.propTypes={style:j.default.object,onError:j.default.func,onLoad:j.default.func};var y=function(t){function e(e){var i;i=t.call(this,e)||this;var u=!0,L=!1,a=e.fadeIn,r=l(e);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(u=!1,L=!0),"undefined"==typeof window&&(u=!1),e.critical&&(u=!0,L=!1);var o=!(e.critical&&!e.fadeIn);return i.state={isVisible:u,imgLoaded:!1,imgCached:!1,IOSupported:L,fadeIn:a,hasNoScript:o,seenBefore:r},i.imageRef=n.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,M.default)((0,M.default)(i))),i.handleRef=i.handleRef.bind((0,M.default)((0,M.default)(i))),i}(0,a.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:l(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(t){var e=this;this.state.IOSupported&&t&&(this.cleanUpListeners=c(t,function(){var t=l(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var t,e,i;t=this.props,e=s(t),i=e.fluid?e.fluid.src:e.fixed.src,S[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var t=s(this.props),e=t.title,i=t.alt,u=t.className,L=t.style,a=void 0===L?{}:L,M=t.imgStyle,r=void 0===M?{}:M,j=t.placeholderStyle,S=void 0===j?{}:j,l=t.placeholderClassName,g=t.fluid,c=t.fixed,y=t.backgroundColor,N=t.durationFadeIn,E=t.Tag,x=t.itemProp,A=this.state.imgLoaded||!1===this.state.fadeIn,f=!0===this.state.fadeIn&&!this.state.imgCached,D=(0,o.default)({opacity:A?1:0,transition:f?"opacity "+N+"ms":"none"},r),m="boolean"==typeof y?"lightgray":y,T={transitionDelay:N+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},f&&T,r,S),p={title:e,alt:this.state.isVisible?"":i,style:C,className:l};if(g){var h=g;return n.default.createElement(E,{className:(u||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(h.srcSet)},n.default.createElement(E,{style:{width:"100%",paddingBottom:100/h.aspectRatio+"%"}}),m&&n.default.createElement(E,{title:e,style:(0,o.default)({backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},f&&T)}),h.base64&&n.default.createElement(d,(0,o.default)({src:h.base64},p)),h.tracedSVG&&n.default.createElement(d,(0,o.default)({src:h.tracedSVG},p)),this.state.isVisible&&n.default.createElement("picture",null,h.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:h.srcSetWebp,sizes:h.sizes}),n.default.createElement(d,{alt:i,title:e,sizes:h.sizes,src:h.src,crossOrigin:this.props.crossOrigin,srcSet:h.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:i,title:e},h))}}))}if(c){var b=c,O=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:b.width,height:b.height},a);return"inherit"===a.display&&delete O.display,n.default.createElement(E,{className:(u||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(b.srcSet)},m&&n.default.createElement(E,{title:e,style:(0,o.default)({backgroundColor:m,width:b.width,opacity:this.state.imgLoaded?0:1,height:b.height},f&&T)}),b.base64&&n.default.createElement(d,(0,o.default)({src:b.base64},p)),b.tracedSVG&&n.default.createElement(d,(0,o.default)({src:b.tracedSVG},p)),this.state.isVisible&&n.default.createElement("picture",null,b.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:b.srcSetWebp,sizes:b.sizes}),n.default.createElement(d,{alt:i,title:e,width:b.width,height:b.height,sizes:b.sizes,src:b.src,crossOrigin:this.props.crossOrigin,srcSet:b.srcSet,style:D,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:i,title:e},b))}}))}return null},e}(n.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var N=j.default.shape({width:j.default.number.isRequired,height:j.default.number.isRequired,src:j.default.string.isRequired,srcSet:j.default.string.isRequired,base64:j.default.string,tracedSVG:j.default.string,srcWebp:j.default.string,srcSetWebp:j.default.string}),E=j.default.shape({aspectRatio:j.default.number.isRequired,src:j.default.string.isRequired,srcSet:j.default.string.isRequired,sizes:j.default.string.isRequired,base64:j.default.string,tracedSVG:j.default.string,srcWebp:j.default.string,srcSetWebp:j.default.string});y.propTypes={resolutions:N,sizes:E,fixed:N,fluid:E,fadeIn:j.default.bool,durationFadeIn:j.default.number,title:j.default.string,alt:j.default.string,className:j.default.oneOfType([j.default.string,j.default.object]),critical:j.default.bool,crossOrigin:j.default.oneOfType([j.default.string,j.default.bool]),style:j.default.object,imgStyle:j.default.object,placeholderStyle:j.default.object,placeholderClassName:j.default.string,backgroundColor:j.default.oneOfType([j.default.string,j.default.bool]),onLoad:j.default.func,onError:j.default.func,onStartLoad:j.default.func,Tag:j.default.string,itemProp:j.default.string};var x=y;e.default=x}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-eb76534e267a0c887e2e.js.map