(this["webpackJsonptest0331-ghpages"]=this["webpackJsonptest0331-ghpages"]||[]).push([[22],{1076:function(t,e,a){"use strict";a.r(e);var i=a(31),c=a.n(i),n=a(52),s=a(36),r=a(225),o=a(0),l=a(209),d=a(559),x=a(570),j=a(571),h=(a(136),a(614)),b=a(624),p=a(91),m=a(593),f=a.n(m),u=a(672),g=a.n(u),O=a(170),v=a(6),w=Object(l.a)((function(t){var e;return{root:{flexGrow:1,width:"100%",fontFamily:"NotoSansCJKtc"},backArrow:{position:"absolute",top:"0",left:"0",margin:"5px",color:"#fff",display:"block",width:"40px",height:"40px"},favoriteIcon:{width:"40px",height:"40px",position:"absolute",top:"0",margin:"5px",right:"20%",display:"block",color:"#ffffff"},shareIcon:{width:"40px",height:"40px",position:"absolute",top:"0",right:"0",margin:"5px",display:"block",color:"#ffffff"},bar:{height:"56px",backgroundColor:"transparent"},Img:{width:"100%",height:"179px"},title:{height:"36px",textIndent:"5%",fontSize:"22px",fontWeight:"bold",lineHeight:"1.64",letterSpacing:"0.46px",color:"#232323"},text:{height:"84px",margin:"16px 16px 24px",fontSize:"14px",lineHeight:"1.5",letterSpacing:"0.5px",color:"#232323"},background:{margin:"24px 16px",height:"1px",backgroundColor:"rgba(0, 0, 0, 0.12)"},textlist:(e={width:"74px",height:"27px"},Object(r.a)(e,"width","100%"),Object(r.a)(e,"textIndent","5%"),Object(r.a)(e,"fontSize","18px"),Object(r.a)(e,"fontWeight","bold"),e),trailList:{padding:" 5%"},arrow:{width:"24px",height:"24px",margin:"1px 32px 2px 0",objectFit:"contain"}}}));e.default=function(t){var e=w(),a=Object(o.useState)([]),i=Object(s.a)(a,2),r=i[0],l=i[1],m=Object(o.useState)([]),u=Object(s.a)(m,2),N=u[0],k=u[1],S=t.match.params.id;console.log(S);var y=function(){var t=Object(n.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/api/article/"+e+"&uuid=1").then((function(t){k(t.data),l(t.data.trails)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){y(S)}),[S]),console.log(N),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:e.root,children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)("img",{src:N.image,className:e.Img}),Object(v.jsx)(x.a,{item:!0,xs:12,children:Object(v.jsx)(p.Link,{to:"/home",className:e.backArrow,children:Object(v.jsx)(b.a,{})})}),Object(v.jsx)(x.a,{className:e.favoriteIcon,children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(x.a,{className:e.shareIcon,children:Object(v.jsx)(g.a,{})}),Object(v.jsx)("div",{className:e.title,children:N.title}),Object(v.jsx)(x.a,{item:!0,xs:12,children:Object(v.jsx)("div",{className:e.text,children:N.content})}),Object(v.jsx)(x.a,{item:!0,xs:12,children:Object(v.jsx)("div",{className:e.background})}),Object(v.jsxs)(x.a,{item:!0,xs:12,container:!0,children:[Object(v.jsx)("div",{className:e.textlist,children:"\u6b65\u9053\u63a8\u85a6"}),Object(v.jsx)("div",{className:e.trailList,children:Object(v.jsx)(j.a,{cellHeight:72,cols:1,children:r.map((function(t){return Object(v.jsx)(h.a,{data:t})}))})})]})]})})})}},593:function(t,e,a){"use strict";var i=a(58),c=a(59);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(a(0)),s=(0,i(a(60)).default)(n.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");e.default=s},614:function(t,e,a){"use strict";var i=a(36),c=a(0),n=a(209),s=a(570),r=a(330),o=a(340),l=a(339),d=a(583),x=a(170),j=a(6),h=Object(n.a)((function(t){return{root:{width:"100%"},gridCell:{marginBottom:14},title:{fontSize:16,fontWeight:500},location:{fontSize:14,color:"#979797"},distance:{fontSize:12,color:"#979797"},divider:{margin:t.spacing(2,0)},background:{height:"1px",backgroundColor:"rgba(0, 0, 0, 0.12)"},favorite:{color:"#FFF",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},mediaAvatar:{position:"relative",marginRight:16,float:"right","& img":{borderRadius:"4px",minWidth:"104px",width:"100%",height:"72px",objectFit:"cover",maxWidth:"300px"}}}}));e.a=function(t){var e=h(),a=t.data,n=Object(c.useState)(a.favorite),b=Object(i.a)(n,2),p=b[0],m=b[1];return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"flex-start",className:e.gridCell,item:!0,xs:12,children:[Object(j.jsx)(s.a,{item:!0,xs:4,children:Object(j.jsxs)("div",{className:e.mediaAvatar,children:[Object(j.jsx)("img",{src:a.coverImage,alt:a.title,className:e.thumb}),Object(j.jsx)(d.a,{checked:p,onChange:function(){!function(t){var e=localStorage.getItem("userid")?localStorage.getItem("userid"):1;m(!p),x.a.post("/api/favorite/?user_id="+e+"&trail_id="+t).then((function(t){console.log(t.status)}))}(a.id)},icon:Object(j.jsx)(o.a,{fontSize:"small"}),checkedIcon:Object(j.jsx)(l.a,{fontSize:"small",style:{color:"#FFF"}}),className:e.favorite,name:"favorite"})]})}),Object(j.jsxs)(s.a,{item:!0,xs:8,container:!0,direction:"column",alignItems:"flex-start",children:[Object(j.jsx)(s.a,{item:!0,xs:12,className:e.title,children:Object(j.jsx)("div",{style:{marginTop:2},children:a.title})}),Object(j.jsx)(s.a,{item:!0,xs:12,className:e.location,children:Object(j.jsxs)("div",{style:{marginTop:2},children:[a.location?a.location.county.name:"",a.location?a.location.name:""]})}),Object(j.jsx)(s.a,{item:!0,xs:12,className:e.distance,children:Object(j.jsxs)("div",{style:{marginTop:2},children:["\u5168\u7a0b\u7d04",a.distance,"\u516c\u91cc"]})})]}),Object(j.jsx)(s.a,{item:!0,xs:4}),Object(j.jsx)(s.a,{item:!0,xs:8,children:Object(j.jsx)(r.a,{})})]},a.id)})})}},624:function(t,e,a){"use strict";a(0);var i=a(92),c=a.n(i),n=a(6);e.a=function(t){return Object(n.jsx)(c.a,{style:{color:"#000"}})}},672:function(t,e,a){"use strict";var i=a(58),c=a(59);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(a(0)),s=(0,i(a(60)).default)(n.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");e.default=s}}]);
//# sourceMappingURL=22.b2af118a.chunk.js.map