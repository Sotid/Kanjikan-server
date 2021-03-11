(this["webpackJsonpm3-client"]=this["webpackJsonpm3-client"]||[]).push([[0],{40:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(34),c=n.n(r),i=n(10),o=n(2),l=n(4),u=n(6),h=n(5),d=(n(40),n(7)),j=n(3),b=n.n(j),p=n(8),m=n(14),O=n.n(m),x=new function e(){var t=this;Object(o.a)(this,e),this.getAllLessons=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.lessons.get("/api/lessons");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getOneLesson=function(){var e=Object(p.a)(b.a.mark((function e(n){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.lessons.get("/api/lessons/".concat(n));case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.lessons=O.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},g=(n(60),n(0)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadKanji=function(){var t=e.props.match.params.id;x.getOneLesson(t).then((function(t){e.setState({kanji:t,isReady:!0})}))},e.state={kanji:[],isReady:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadKanji()}},{key:"render",value:function(){var e=this.state,t=e.kanji;return e.isReady?Object(g.jsx)("div",{className:"card",children:t.kanji.map((function(e){var t=e.kanji,n=e.meanings,s=e.grade,a=e.stroke_count,r=e.kun_readings,c=e.on_readings;return Object(g.jsx)("div",{className:"flip-container",ontouchstart:"this.classList.toggle('hover');",children:Object(g.jsxs)("div",{className:"flipper",children:[Object(g.jsxs)("div",{className:"front",children:[Object(g.jsxs)("h1",{children:[" ",t]}),Object(g.jsx)("p",{children:n})]}),Object(g.jsxs)("div",{className:"back",children:[Object(g.jsxs)("h2",{className:"small-title",children:[" ",t]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" Difficulty level: ",s]}),Object(g.jsxs)("li",{children:[" Strokes: ",a]}),Object(g.jsxs)("li",{children:[" Meanings: ",n]}),Object(g.jsxs)("li",{children:[" Kunyomi: ",r]}),Object(g.jsxs)("li",{children:[" Onyomi: ",c]})]})]})]})},e._id)}))}):Object(g.jsx)("img",{src:"https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif",alt:"loading spinner"})}}]),n}(s.Component),v=(n(62),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={lessons:[]},e.loadLessons=function(){x.getAllLessons().then((function(t){return e.setState({lessons:t})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadLessons()}},{key:"render",value:function(){var e=this.state.lessons;return Object(g.jsx)("div",{className:"lessons-container",children:e.map((function(e){return Object(g.jsx)("div",{className:"all-buttons",children:Object(g.jsx)(i.b,{className:"lessons-link",to:"/lessons/".concat(e._id),children:Object(g.jsxs)("h2",{className:"lessons-text",children:[" ",e.name]})})},e._id)}))})}}]),n}(a.a.Component)),w=n(16),k=n(18),y=new(function(){function e(){var t=this;Object(o.a)(this,e),this.signup=function(){var e=Object(p.a)(b.a.mark((function e(n,s,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/auth/signup",{username:n,email:s,password:a});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,s){return e.apply(this,arguments)}}(),this.login=function(){var e=Object(p.a)(b.a.mark((function e(n,s){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/auth/login",{username:n,password:s});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),this.logout=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.get("/auth/logout");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.auth=O.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})}return Object(l.a)(e,[{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}()),N=a.a.createContext(),S=N.Consumer,C=N.Provider,q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,s){y.signup(t,n,s).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){y.login(t,n).then((function(t){if(console.log(t,"user"),void 0===t)return null;e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){y.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,s=e.user,a=this.signup,r=this.login,c=this.logout;return n?Object(g.jsx)("p",{children:"Loading"}):Object(g.jsx)(C,{value:{isLoggedIn:t,isLoading:n,user:s,signup:a,login:r,logout:c},children:this.props.children})}}]),n}(a.a.Component),L=function(e){return function(t){return Object(g.jsx)(S,{children:function(n){var s=n.isLoggedIn,a=n.isLoading,r=n.user,c=n.signup,i=n.login,o=n.logout;return Object(g.jsx)(e,Object(k.a)({isLoggedIn:s,isLoading:a,user:r,signup:c,login:i,logout:o},t))}})}},_=(n(71),L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.email,r=n.password;e.props.signup(s,a,r)},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(w.a)({},s,a))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,s=e.password;return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"wrapper",children:Object(g.jsx)("div",{children:Object(g.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(g.jsxs)("div",{className:"signup",children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{className:"input-signup",type:"text",name:"username",value:t,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("input",{className:"input-signup",type:"email",name:"email",value:n,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{className:"input-signup",type:"password",name:"password",value:s,onChange:this.handleChange}),Object(g.jsx)("button",{className:"signup-button",type:"submit",value:"Login",children:"Sign up"})]})})})})})}}]),n}(s.Component))),I=(n(72),L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;e.props.login(s,a)},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(w.a)({},s,a))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(g.jsx)("div",{children:Object(g.jsx)("div",{class:"wrapper",children:Object(g.jsx)("div",{children:Object(g.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(g.jsxs)("div",{className:"login",children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{className:"input-login",type:"text",name:"username",value:t,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{className:"input-login",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(g.jsx)("button",{className:"login-button",type:"submit",value:"Login",children:"Login"}),Object(g.jsx)("p",{children:"You don't have an account?"}),Object(g.jsxs)(i.b,{className:"signup-link",to:"/signup",children:[" ","Sign Up"]})]})})})})})}}]),n}(s.Component))),M=n(24),R=new function e(){var t=this;Object(o.a)(this,e),this.getOneUser=function(){var e=Object(p.a)(b.a.mark((function e(n,s,a,r,c,i){var o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.get("/api/private/".concat(i),{username:n,password:s,email:a,bookmarks:r,lessonsCompleted:c});case 3:return o=e.sent,e.abrupt("return",o.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,s,a,r,c){return e.apply(this,arguments)}}(),this.editProfile=function(){var e=Object(p.a)(b.a.mark((function e(n,s,a,r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.post(Object(d.f)("/api/private/:userId/edit",{userId:r}),{username:n,email:s,password:a});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,s,a){return e.apply(this,arguments)}}(),this.addToBookmarks=function(){var e=Object(p.a)(b.a.mark((function e(n,s){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.kanjiId,e.prev=1,e.next=4,t.private.post("/api/private/add/".concat(a),{userId:s});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteFromBookmarks=function(){var e=Object(p.a)(b.a.mark((function e(n,s){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.post("/api/private/delete/".concat(n),{userId:s});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),this.private=O.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},A=(n(73),L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",email:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.email,r=n.password,c=e.props.user._id;R.editProfile(s,a,r,c),e.setState({username:"",password:"",email:""})},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(w.a)({},s,a))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"edit-container",children:Object(g.jsx)("div",{className:"edit-form",children:Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{className:"slide",type:"text",name:"username",placeholder:this.props.user.username,value:this.state.username,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("input",{className:"slide",name:"email",type:"email",placeholder:this.props.user.email,value:this.state.email,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{className:"slide",name:"password",type:"password",placeholder:"********",value:this.state.password,onChange:this.handleChange}),Object(g.jsx)("button",{type:"submit",value:"Submit",children:"Apply"})]})})})}}]),n}(s.Component))),z=(n(74),L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this)).toggleEdit=function(){s.setState({showEdit:!s.state.showEdit})},s.componentDidMount=function(){var e=Object(M.a)(s.props.user.bookmarks);s.setState({kanjis:e})},s.deleteKanji=function(e,t){R.deleteFromBookmarks(e,t);var n=Object(M.a)(s.state.kanjis).filter((function(t){return t._id!==e}));s.setState({kanjis:n}),s.props.user.bookmarks=n,y.me()},s.state={showEdit:!1,kanjis:[]},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"user-details",children:[Object(g.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.username,"!"]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Username: ",this.props.user.username]}),Object(g.jsxs)("p",{children:["Email: ",this.props.user.email]}),Object(g.jsx)("button",{className:"edit-btn",onClick:this.toggleEdit,children:"Edit"}),this.state.showEdit?Object(g.jsx)(A,{}):null]}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{children:"My bookmarks"}),Object(g.jsx)("div",{className:"card profile-columns",children:0===this.state.kanjis.length?this.props.user.bookmarks.map((function(t){var n=t.kanji,s=t.grade,a=t.stroke_count,r=t.meanings,c=t.kun_readings,i=t.on_readings;return Object(g.jsx)("div",{className:"flip-container",ontouchstart:"this.classList.toggle('hover');",children:Object(g.jsxs)("div",{className:"flipper",children:[Object(g.jsxs)("div",{className:"front",children:[Object(g.jsxs)("h1",{children:[" ",n]}),Object(g.jsx)("p",{children:r.map((function(e){return e+", "}))})]}),Object(g.jsxs)("div",{className:"back",children:[Object(g.jsxs)("h2",{children:[" ",n]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" Difficulty level: ",s]}),Object(g.jsxs)("li",{children:[" Strokes: ",a]}),Object(g.jsxs)("li",{children:[" ","Meanings:",r.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" ","Kunyomi: ",c.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" Onyomi: ",i.map((function(e){return e+", "}))]})]}),Object(g.jsx)("button",{className:"delete-bookmarks",onClick:function(){return e.deleteKanji(t._id,e.props.user._id)},children:"Delete"})]})]})})})):this.state.kanjis.map((function(t){var n=t.kanji,s=t.grade,a=t.stroke_count,r=t.meanings,c=t.kun_readings,i=t.on_readings;return Object(g.jsx)("div",{className:"flip-container",ontouchstart:"this.classList.toggle('hover');",children:Object(g.jsxs)("div",{className:"flipper",children:[Object(g.jsxs)("div",{className:"front",children:[Object(g.jsxs)("h1",{children:[" ",n]}),Object(g.jsx)("p",{children:r.map((function(e){return e+", "}))})]}),Object(g.jsxs)("div",{className:"back",children:[Object(g.jsxs)("h2",{children:[" ",n]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" Difficulty level: ",s]}),Object(g.jsxs)("li",{children:[" Strokes: ",a]}),Object(g.jsxs)("li",{children:[" ","Meanings:"," ",r.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" ","Kunyomi: ",c.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" Onyomi: ",i.map((function(e){return e+", "}))]})]}),Object(g.jsxs)("button",{className:"delete-bookmarks",onClick:function(){return e.deleteKanji(t._id,e.props.user._id)},children:[" ","Delete"]})]})]})})}))})]})}}]),n}(s.Component))),U=new function e(){var t=this;Object(o.a)(this,e),this.getSearchResults=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.dictionary.post("/api/dictionary");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.dictionary=O.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},D=(n(75),L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this)).handleSearchInput=function(e){var t=e.target.value;s.setState((function(){return{query:t}})),s.searchResults(t)},s.searchResults=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.getSearchResults();case 3:n=e.sent,a=n.find((function(e){return e.meanings.includes(t)})),s.setState({result:[a]}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),s.handleSubmit=function(e){e.preventDefault(),s.searchResults(),s.setState({result:{},query:""})},s.addKanjiUser=function(e,t){R.addToBookmarks({kanjiId:e},t),window.location.reload(),y.me(s.props.user._id)},s.state={query:"",result:[]},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"dictionary",children:[Object(g.jsx)("div",{className:"search",children:Object(g.jsx)("input",{className:"search-input",placeholder:"Search for kanji",name:"search",type:"text",value:this.state.query,onChange:this.handleSearchInput})}),Object(g.jsx)("div",{className:"card",children:this.state.result.map((function(t,n){return t&&Object(g.jsx)("div",{className:"flip-container",ontouchstart:"this.classList.toggle('hover');",children:Object(g.jsxs)("div",{className:"flipper",children:[Object(g.jsxs)("div",{className:"front",children:[Object(g.jsx)("h1",{children:t.kanji}),Object(g.jsx)("p",{children:t.meanings.map((function(e){return e+", "}))})]},n),Object(g.jsxs)("div",{className:"back",children:[Object(g.jsxs)("h2",{children:[" ",t.kanji]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" Difficulty level: ",t.grade]}),Object(g.jsxs)("li",{children:[" Strokes: ",t.stroke_count]}),Object(g.jsxs)("li",{children:[" ","Meanings:"," ",t.meanings.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" ","Kunyomi:"," ",t.kun_readings.map((function(e){return e+", "}))]}),Object(g.jsxs)("li",{children:[" ","Onyomi: ",t.on_readings.map((function(e){return e+", "}))]})]}),Object(g.jsx)("button",{className:"add-bookmarks",onClick:function(){return e.addKanjiUser(t._id,e.props.user._id)},children:"Add to my bookmarks"})]})]})})}))})]})})}}]),n}(s.Component))),F=(n(76),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={news:[],isReady:!1},e.loadNews=Object(p.a)(b.a.mark((function t(){var n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://newsapi.org/v2/top-headlines?country=jp&apiKey=cee726d1eb8c4517a7d4597d6c731727");case 3:(n=t.sent)&&(s=n.data,e.setState({news:s,isReady:!0})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadNews();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.news;e.isReady;return Object(g.jsx)("div",{children:this.state.isReady&&t.articles.map((function(e){return Object(g.jsxs)("div",{className:"news",children:[Object(g.jsx)("img",{src:e.urlToImage}),Object(g.jsx)("a",{href:e.url,target:"_blank",children:e.title})]})}))})}}]),n}(a.a.Component)),B=(n(77),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={music:[],isReady:!1},e.loadMusic=Object(p.a)(b.a.mark((function t(){var n,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=japan&api_key=d620d7726ae86f44b956c1a641beeb9f&format=json");case 3:(n=t.sent)&&(s=n.data,e.setState({music:s,isReady:!0})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadMusic()}},{key:"render",value:function(){var e=this.state,t=e.music,n=e.isReady;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"music-title",children:"Click to listen to japanese music"}),Object(g.jsx)("div",{className:"artists",children:n&&t.topartists.artist.sort((function(e,t){return t.name.localeCompare(e.name)})).splice(0,16).map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:e.url,target:"_blank",children:e.name})})}))})]})}}]),n}(a.a.Component));var E=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"basic",children:[Object(g.jsx)("img",{className:"hiragana",alt:"Hiragana",src:"https://i.pinimg.com/564x/63/a8/5b/63a85b6abb1845294dc5dba51b8071cd.jpg"}),Object(g.jsx)("img",{alt:"Katakana",src:"https://i.pinimg.com/564x/88/f9/8b/88f98bf630c6164602995f8ec3e03546.jpg"})]}),Object(g.jsx)("div",{className:"combined",children:Object(g.jsx)("img",{alt:"Hiragana & katakana2",src:"https://i.postimg.cc/vDFBRDX9/syllabaries2.png"})})]})};var K=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"videos",children:[Object(g.jsxs)("h3",{children:["Need to refresh your skills? ",Object(g.jsx)("br",{}),"Check out these amazing blogs:"]}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.tofugu.com/japanese-grammar/",children:"Tofugu"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://www.alljapaneseallthetime.com/blog/",children:"All Japanese All the Time"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://japaneselevelup.com/",children:"Japanese LevelUp"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://maggiesensei.com/",children:"Maggie Sensei"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://nihonshock.com/category/language/",children:"Nihon Shock"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://howtojaponese.com/",children:"How to Japanese"})})]})]})})};n(78);var H=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"videos",children:[Object(g.jsx)("h3",{children:"Here you can find some youtube channels for extra learning"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC0ox9NuTHYeRys63yZpBFuA",children:"japanesepod101"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCxuZNRnlprC70l1bnI0n-XQ",children:"Learn Japanese From Zero"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCclzYKA76aHug0TwHgOj_GA",children:"Tae Kim"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHtotUl7gp8WROMej7PgB1Q",children:"Grace Yuu Asakura"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC1uzmncbEJmOH8DK90qQbCQ",children:"Tomoko Tomoko"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC5Ure7omY1nU5bozq7qVAww",children:"Gimmeabreakman"})})]})]})})},Q=(n(79),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={showNews:!1,showMusic:!1,showSyllabaries:!1,showBlogs:!1,showVideos:!1},e.toggleNews=function(){e.setState({showNews:!e.state.showNews})},e.toggleMusic=function(){e.setState({showMusic:!e.state.showMusic})},e.toggleSyllabaries=function(){e.setState({showSyllabaries:!e.state.showSyllabaries})},e.toggleBlogs=function(){e.setState({showBlogs:!e.state.showBlogs})},e.toggleVideos=function(){e.setState({showVideos:!e.state.showVideos})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"resources",children:[Object(g.jsxs)("div",{className:"api",children:[Object(g.jsxs)("div",{className:"news-container",children:[Object(g.jsx)("p",{children:"News"}),Object(g.jsx)("button",{onClick:this.toggleNews,children:"Show More"}),this.state.showNews?Object(g.jsx)(F,{}):null]}),Object(g.jsxs)("div",{className:"music-container",children:[Object(g.jsx)("p",{children:"Music"}),Object(g.jsx)("button",{onClick:this.toggleMusic,children:"Show More"}),this.state.showMusic?Object(g.jsx)(B,{}):null]})]}),Object(g.jsxs)("div",{className:"syllabaries-container",children:[Object(g.jsx)("p",{children:"Syllabaries"}),Object(g.jsx)("button",{onClick:this.toggleSyllabaries,children:"Show More"}),this.state.showSyllabaries?Object(g.jsx)(E,{}):null]}),Object(g.jsxs)("div",{className:"other",children:[Object(g.jsxs)("div",{className:"videos-container",children:[Object(g.jsx)("p",{children:"Video Tutorials"}),Object(g.jsx)("button",{onClick:this.toggleVideos,children:"Show More"}),this.state.showVideos?Object(g.jsx)(H,{}):null]}),Object(g.jsxs)("div",{className:"blogs-container",children:[Object(g.jsx)("p",{children:"Recommended Blogs"}),Object(g.jsx)("button",{onClick:this.toggleBlogs,children:"Show More"}),this.state.showBlogs?Object(g.jsx)(K,{}):null]})]})]})})}}]),n}(a.a.Component)),T=n(20),V=[{id:0,question:"\u53f3",choices:["sun","moon","right","left"],answer:"right"},{id:1,question:"\u5186",choices:["sun","yen","king","noise"],answer:"yen"},{id:2,question:"\u82b1",choices:["flower","down","science","fire"],answer:"flower"},{id:3,question:"\u97f3",choices:["school","sound","spirit","left"],answer:"sound"},{id:4,question:"\u6c17",choices:["circle","down","spirit","rain"],answer:"spirit"},{id:5,question:"\u4f11",choices:["ball","gold","rest","nine"],answer:"rest"},{id:6,question:"\u7a7a",choices:["sun","sky","spirit","noise"],answer:"sky"},{id:7,question:"\u72ac",choices:["opinion","five","science","dog"],answer:"dog"},{id:8,question:"\u53e3",choices:["sun","sound","mouth","dog"],answer:"mouth"},{id:9,question:"\u6708",choices:["circle","month","year","rain"],answer:"month"},{id:10,question:"\u6821",choices:["school","gold","left","nine"],answer:"school"},{id:11,question:"\u5c71",choices:["sun","mountain","child","noise"],answer:"mountain"},{id:12,question:"\u7cf8",choices:["letter","ear","thread","dog"],answer:"thread"},{id:13,question:"\u8eca",choices:["hand","child","mouth","car"],answer:"car"},{id:14,question:"\u624b",choices:["hand","month","year","mouth"],answer:"hand"},{id:15,question:"\u5973",choices:["woman","man","left","right"],answer:"woman"},{id:16,question:"\u5c0f",choices:["up","small","child","noise"],answer:"small"},{id:17,question:"\u68ee",choices:["letter","forest","person","dog"],answer:"forest"},{id:18,question:"\u6c34",choices:["water","person","life","car"],answer:"water"},{id:19,question:"\u9752",choices:["hand","blue","red","mouth"],answer:"blue"},{id:20,question:"\u8d64",choices:["blue","red","left","right"],answer:"red"},{id:21,question:"\u5148",choices:["up","before","down","river"],answer:"before"},{id:22,question:"\u5ddd",choices:["dog","forest","person","river"],answer:"river"},{id:23,question:"\u8349",choices:["water","grass","forest","river"],answer:"grass"},{id:24,question:"\u6751",choices:["village","mouth","leg","bamboo"],answer:"village"},{id:25,question:"\u753a",choices:["village","town","left","right"],answer:"town"},{id:26,question:"\u5929",choices:["up","spirit","down","sky"],answer:"sky"},{id:27,question:"\u65e5",choices:["day","moon","insect","river"],answer:"day"},{id:28,question:"\u5e74",choices:["sun","month","year","river"],answer:"year"},{id:29,question:"\u7530",choices:["village","rice field","town","bamboo"],answer:"village"},{id:30,question:"\u767d",choices:["white","red","blue","black"],answer:"white"},{id:31,question:"\u6587",choices:["word","sentence","down","up"],answer:"sentence"},{id:32,question:"\u672c",choices:["tree","book","person","dog"],answer:"book"},{id:33,question:"\u540d",choices:["name","month","year","person"],answer:"year"},{id:34,question:"\u76ee",choices:["hand","eye","foot","mouth"],answer:"eye"},{id:35,question:"\u8c49",choices:["park","beans","far","black"],answer:"beans"},{id:36,question:"\u9ec4",choices:["white","yellow","red","green"],answer:"yellow"},{id:37,question:"\u4f55",choices:["tree","house","what","meeting"],answer:"what"},{id:38,question:"\u4f1a",choices:["meeting","month","year","park"],answer:"meeting"},{id:39,question:"\u529b",choices:["hand","power","tree","water"],answer:"power"}],J=(n(80),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={userAnswer:null,currentIndex:0,choices:[],quizEnd:!1,score:0,disabled:!0,id:0,quizLength:0},e.shuffleArray=function(){return V.sort((function(){return Math.random()-.5}))},e.loadQuiz=function(){var t=e.state.currentIndex;e.setState((function(){return e.shuffleArray(),{question:V[t].question,choices:V[t].choices,answer:V[t].answer}}))},e.nextQuestionHandle=function(){var t=e.state,n=t.userAnswer,s=t.answer,a=t.score;Math.floor(Math.random()*V.length);e.setState({currentIndex:e.state.currentIndex+1,quizLength:e.state.quizLength+1}),console.log(e.state.quizLength),n===s&&e.setState({score:a+1})},e.checkAnswer=function(t){e.setState({userAnswer:t})},e.finishHandle=function(){10===e.state.quizLength&&e.setState({quizEnd:!0})},e.restartQuiz=function(){window.location.Reload()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!==t.currentIndex&&this.setState((function(){return{disabled:!0,question:V[n].question,choices:V[n].choices,answer:V[n].answer}}))}},{key:"render",value:function(){var e=this;return this.state.quizEnd?Object(g.jsx)("div",{className:"box",children:Object(g.jsxs)("div",{className:"quiz-container",children:[Object(g.jsxs)("p",{children:["Final score: ",this.state.score," out of 10"]}),Object(g.jsx)("p",{children:"Correct answers:"}),Object(g.jsx)("ul",{children:V.slice(0,10).map((function(e){return Object(g.jsxs)("li",{className:"choices",children:[e.question," ",e.answer]})}))}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"next-btn",onClick:function(){return window.location.reload()},children:"Restart"})})]})}):Object(g.jsx)("div",{className:"box",children:Object(g.jsxs)("div",{className:"quiz-container",children:[Object(g.jsx)("h1",{children:this.state.question}),this.state.choices.map((function(t){return Object(g.jsx)("button",{className:"options\n                ".concat(e.userAnswer===t?"selected":null,"\n                "),onClick:function(){return e.checkAnswer(t)},children:t},t.id)})),this.state.currentIndex<10&&Object(g.jsx)("div",{className:"next-btn-container",children:Object(g.jsx)("button",{className:"next-btn",onClick:this.nextQuestionHandle,children:"Next"})}),10===this.state.quizLength&&Object(g.jsx)("div",{className:"next-btn-container",children:Object(g.jsx)("button",{className:"finish-btn",onClick:this.finishHandle,children:"Finish"})})]})})}}]),n}(a.a.Component)),P=(n(81),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={visible:!1},s.startQuiz=s.startQuiz.bind(Object(T.a)(s)),s}return Object(l.a)(n,[{key:"startQuiz",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"start-container",children:this.state.visible?Object(g.jsx)(J,{}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"start-title",children:"Start the quiz!"}),Object(g.jsx)("button",{className:"next-btn start-btn",onClick:this.startQuiz,children:"Start"})]})})}}]),n}(a.a.Component));var Y=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(P,{})})},X=L(function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("nav",{children:[Object(g.jsx)("img",{className:"logo",src:"https://i.postimg.cc/fL88FzDF/logo.png"}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"nav-list",children:[Object(g.jsx)(i.b,{to:"/lessons",className:"nav-text",children:Object(g.jsx)("li",{children:"Home"})}),Object(g.jsx)(i.b,{to:"/dictionary",className:"nav-text",children:Object(g.jsx)("li",{children:"Dictionary"})}),Object(g.jsx)(i.b,{to:"/private",className:"nav-text",children:Object(g.jsx)("li",{children:"My profile"})}),Object(g.jsx)(i.b,{to:"/resources",className:"nav-text",children:Object(g.jsx)("li",{children:"Resources"})}),Object(g.jsx)(i.b,{to:"/quiz",className:"nav-text",children:Object(g.jsx)("li",{children:"Quiz"})})]})}),this.props.isLoggedIn?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("button",{className:"logout",onClick:this.props.logout,children:Object(g.jsx)("img",{id:"logout-img",src:"https://i.postimg.cc/4dRnX8yd/logout.png"})})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"buttons-container",children:[Object(g.jsxs)(i.b,{to:"/login",children:[Object(g.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(g.jsx)("br",{}),Object(g.jsxs)(i.b,{to:"/signup",children:[Object(g.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})})]})}}]),n}(s.Component));var G=L((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,a=e.exact,r=e.path;return n?"Loading":Object(g.jsx)(d.b,{exact:a,path:r,render:function(e){return t?Object(g.jsx)(d.a,{to:"/private"}):t?void 0:Object(g.jsx)(s,Object(k.a)({},e))}})}));var Z=L((function(e){var t=e.isLoggedIn,n=e.isLoading,s=e.component,a=e.exact,r=e.path;return n?"Loading":Object(g.jsx)(d.b,{exact:a,path:r,render:function(e){return t?t?Object(g.jsx)(s,Object(k.a)({},e)):void 0:Object(g.jsx)(d.a,{to:"/login"})}})})),W=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(X,{}),Object(g.jsxs)(d.d,{children:[Object(g.jsx)(G,{exact:!0,path:"/signup",component:_}),Object(g.jsx)(G,{exact:!0,path:"/login",component:I}),Object(g.jsx)(Z,{exact:!0,path:"/lessons",component:v}),Object(g.jsx)(Z,{exact:!0,path:"/resources",component:Q}),Object(g.jsx)(Z,{exact:!0,path:"/lessons/:id",component:f}),Object(g.jsx)(Z,{exact:!0,path:"/private/",component:z}),Object(g.jsx)(Z,{exact:!0,path:"/dictionary",component:D}),Object(g.jsx)(Z,{exact:!0,path:"/quiz",component:Y})]})]})}}]),n}(s.Component);c.a.render(Object(g.jsx)(i.a,{children:Object(g.jsx)(q,{children:Object(g.jsx)(W,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.a5191d03.chunk.js.map