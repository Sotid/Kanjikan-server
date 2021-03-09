(this["webpackJsonpm3-client"]=this["webpackJsonpm3-client"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(33),c=n.n(r),i=n(7),o=n(2),u=n(4),l=n(6),h=n(5),j=(n(39),n(9)),d=n(3),b=n.n(d),p=n(8),O=n(11),x=n.n(O),v=new function e(){var t=this;Object(o.a)(this,e),this.getAllLessons=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.lessons.get("/api/lessons");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getOneLesson=function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.lessons.get("/api/lessons/".concat(n));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.getOneQuiz=function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.lessons.get("/api/lessons/".concat(n,"/quiz"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.lessons=x.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},g=(n(59),n(0)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadKanji=function(){var t=e.props.match.params.id;v.getOneLesson(t).then((function(t){e.setState({kanji:t,isReady:!0})}))},e.state={kanji:[],isReady:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadKanji()}},{key:"render",value:function(){var e=this.state,t=e.kanji;return e.isReady?Object(g.jsx)("div",{className:"card",children:t.kanji.map((function(e){return Object(g.jsx)("div",{className:"flip-container",ontouchstart:"this.classList.toggle('hover');",children:Object(g.jsxs)("div",{className:"flipper",children:[Object(g.jsxs)("div",{className:"front",children:[Object(g.jsxs)("h1",{children:[" ",e.kanji]}),Object(g.jsx)("p",{children:e.meanings})]}),Object(g.jsx)("div",{className:"back",children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("h2",{children:[" ",e.kanji]}),Object(g.jsxs)("li",{children:[" Difficulty level: ",e.grade]}),Object(g.jsxs)("li",{children:[" Strokes: ",e.stroke_count]}),Object(g.jsxs)("li",{children:[" Meanings: ",e.meanings]}),Object(g.jsxs)("li",{children:[" Kunyomi: ",e.kun_readings]}),Object(g.jsxs)("li",{children:[" Onyomi: ",e.on_readings]})]})})]})})}))}):Object(g.jsx)("img",{src:"https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif",alt:"loading spinner"})}}]),n}(a.Component),m=(n(61),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={lessons:[]},e.loadLessons=function(){v.getAllLessons().then((function(t){return e.setState({lessons:t})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadLessons()}},{key:"render",value:function(){var e=this.state.lessons;return console.log(this.state.lessons),Object(g.jsx)("div",{children:e.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(i.b,{to:"/lessons/".concat(e._id),children:Object(g.jsx)("h2",{children:e.name})})},e._id)}))})}}]),n}(s.a.Component)),w=n(16),k=n(19),y=new(function(){function e(){var t=this;Object(o.a)(this,e),this.signup=function(){var e=Object(p.a)(b.a.mark((function e(n,a,s){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/auth/signup",{username:n,email:a,password:s});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),this.login=function(){var e=Object(p.a)(b.a.mark((function e(n,a){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/auth/login",{username:n,password:a});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),this.logout=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.get("/auth/logout");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.auth=x.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),S=s.a.createContext(),C=S.Consumer,L=S.Provider,N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1,isLoading:!0,user:null},e.signup=function(t,n,a){y.signup(t,n,a).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.login=function(t,n){y.login(t,n).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){y.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,a=e.user,s=this.signup,r=this.login,c=this.logout;return n?Object(g.jsx)("p",{children:"Loading"}):Object(g.jsx)(L,{value:{isLoggedIn:t,isLoading:n,user:a,signup:s,login:r,logout:c},children:this.props.children})}}]),n}(s.a.Component),I=function(e){return function(t){return Object(g.jsx)(C,{children:function(n){var a=n.isLoggedIn,s=n.isLoading,r=n.user,c=n.signup,i=n.login,o=n.logout;return Object(g.jsx)(e,Object(k.a)({isLoggedIn:a,isLoading:s,user:r,signup:c,login:i,logout:o},t))}})}},_=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.email,r=n.password;e.props.signup(a,s,r)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(w.a)({},a,s))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Sign Up"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),Object(g.jsx)("input",{type:"submit",value:"Signup"})]}),Object(g.jsx)("p",{children:"Already have account?"}),Object(g.jsx)(i.b,{to:"/login",children:" Login"})]})}}]),n}(a.Component)),A=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;e.props.login(a,s)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(w.a)({},a,s))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"Username:"}),Object(g.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),Object(g.jsx)("label",{children:"Password:"}),Object(g.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),Object(g.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),n}(a.Component)),R=new function e(){var t=this;Object(o.a)(this,e),this.getOneUser=function(){var e=Object(p.a)(b.a.mark((function e(n,a,s,r,c,i){var o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.get("/api/private/".concat(i),{username:n,password:a,email:s,bookmarks:r,lessonsCompleted:c});case 3:return o=e.sent,e.abrupt("return",o.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,s,r,c){return e.apply(this,arguments)}}(),this.editProfile=function(){var e=Object(p.a)(b.a.mark((function e(n,a,s,r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n,a,s,r),e.next=4,t.private.post(Object(j.f)("/api/private/:userId/edit",{userId:r}),{username:n,email:a,password:s});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a,s){return e.apply(this,arguments)}}(),this.addToBookmarks=function(){var e=Object(p.a)(b.a.mark((function e(n,a){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.post("/api/private/".concat(n),{kanjiId:n});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),this.deleteFromBookmarks=function(){var e=Object(p.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.private.post("/api/private/".concat(n,"/delete"),{id:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.private=x.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},q=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",email:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.email,r=n.password,c=e.props.user._id;R.editProfile(a,s,r,c)},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState((function(){return Object(w.a)({},a,s)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"username:"}),Object(g.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(g.jsx)("label",{children:"email:"}),Object(g.jsx)("textarea",{name:"email",value:this.state.email,onChange:this.handleChange}),Object(g.jsx)("label",{children:"password:"}),Object(g.jsx)("textarea",{name:"password",value:this.state.password,onChange:this.handleChange}),Object(g.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(a.Component)),M=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showEdit:!1},e.toggleEdit=function(){e.setState({showEdit:!e.state.showEdit})},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log(this.props.user),Object(g.jsxs)("div",{className:"user-details",children:[Object(g.jsxs)("h2",{children:["Welcome",this.props.user&&this.props.user.username]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:this.toggleEdit,children:"Edit"}),this.state.showEdit?Object(g.jsx)(q,{}):null]}),Object(g.jsx)("div",{className:"bookmarks-container",children:this.props.user&&this.props.user.bookmarks.map((function(e){return Object(g.jsxs)("div",{className:"bookmark",children:[Object(g.jsx)(i.b,{to:"/kanji/".concat(e._id),children:Object(g.jsx)("h3",{children:e.kanji})}),Object(g.jsxs)("p",{children:[" ",e.meanings+" "," "]})]},e._id)}))})]})}}]),n}(a.Component)),z=new function e(){var t=this;Object(o.a)(this,e),this.getSearchResults=Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.dictionary.get("/api/dictionary");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.dictionary=x.a.create({baseURL:"https://kanjikan.herokuapp.com",withCredentials:!0})},U=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this)).handleSearchInput=function(e){var t=e.target.value;a.setState((function(){return{query:t}})),a.searchResults(t)},a.searchResults=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.getSearchResults();case 3:n=e.sent,s=n.find((function(e){return e.meanings.includes(t)})),a.setState({result:[s]}),console.log(a.state.result),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(e){e.preventDefault(),a.searchResults(),a.setState({result:{},query:""})},a.addKanjiUser=function(e,t){console.log(e),R.addToBookmarks({kanjiId:e},a.props.user._id)},a.state={query:"",result:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{placeholder:"search for kanjis",name:"search",type:"text",value:this.state.query,onChange:this.handleSearchInput}),Object(g.jsx)("button",{onSubmit:this.handleSubmit,children:" Search "})]}),Object(g.jsx)("div",{children:this.state.result.map((function(t,n){return t&&Object(g.jsxs)("div",{children:[t.kanji,t.meanings,t._id,Object(g.jsx)("button",{onClick:function(){return e.addKanjiUser(t._id,e.props.user._id)},children:"Add Kanji to User"})]},n)}))})]})})}}]),n}(a.Component)),B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={news:[],isReady:!1},e.loadNews=Object(p.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("http://newsapi.org/v2/top-headlines?country=jp&apiKey=cee726d1eb8c4517a7d4597d6c731727");case 3:(n=t.sent)&&(a=n.data,e.setState({news:a,isReady:!0})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadNews()}},{key:"render",value:function(){var e=this.state,t=e.news;e.isReady;return console.log(t),Object(g.jsx)("div",{children:this.state.isReady&&t.articles.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:e.urlToImage}),Object(g.jsx)("a",{href:e.url,target:"_blank",children:e.title})]})}))})}}]),n}(s.a.Component),D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={music:[],isReady:!1},e.loadMusic=Object(p.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=japan&api_key=d620d7726ae86f44b956c1a641beeb9f&format=json");case 3:(n=t.sent)&&(a=n.data,e.setState({music:a,isReady:!0}),console.log(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadMusic();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.music,n=e.isReady;return console.log(t),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Music"}),n&&t.topartists.artist.sort((function(e,t){return t.name.localeCompare(e.name)})).splice(0,16).map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:e.url,target:"_blank",children:e.name})})}))]})}}]),n}(s.a.Component);var F=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{alt:"Hiragana & katakana",src:"https://i.postimg.cc/m1BBPz65/syllabaries.gif"}),Object(g.jsx)("img",{alt:"Hiragana & katakana2",src:"https://i.postimg.cc/vDFBRDX9/syllabaries2.png"})]})};var Q=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Need to refresh your skills? ",Object(g.jsx)("br",{}),"Check out these amazing blogs:"]}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.tofugu.com/japanese-grammar/",children:"Tofugu"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://www.alljapaneseallthetime.com/blog/",children:"All Japanese All the Time"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://japaneselevelup.com/",children:"Japanese LevelUp"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://maggiesensei.com/",children:"Maggie Sensei"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://nihonshock.com/category/language/",children:"Nihon Shock"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"http://howtojaponese.com/",children:"How to Japanese"})})]})]})};var H=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"Here you can find some youtube channels for extra learning"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC0ox9NuTHYeRys63yZpBFuA",children:"japanesepod101"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCxuZNRnlprC70l1bnI0n-XQ",children:"Learn Japanese From Zero"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCclzYKA76aHug0TwHgOj_GA",children:"Tae Kim"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UCHtotUl7gp8WROMej7PgB1Q",children:"Grace Yuu Asakura"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC1uzmncbEJmOH8DK90qQbCQ",children:"Tomoko Tomoko"})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.youtube.com/channel/UC5Ure7omY1nU5bozq7qVAww",children:"Gimmeabreakman"})})]})]})},E=n(18),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={value:"",translated:""},a.translate=a.translate.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"translate",value:function(){var e=this;x.a.post("".concat("https://kanjikan.herokuapp.com","/api/resources")).then((function(t){e.setState({translated:t.data.data.translations[0].translatedText}),console.log(t.data.data.translations[0].translatedText)})).catch((function(e){console.log("error")}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},type:"text"}),Object(g.jsx)("button",{onClick:this.translate,children:"Submit"}),Object(g.jsx)("h1",{children:this.state.translated})]})}}]),n}(s.a.Component),K=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showNews:!1,showMusic:!1,showSyllabaries:!1,showBlogs:!1,showVideos:!1},e.toggleNews=function(){e.setState({showNews:!e.state.showNews})},e.toggleMusic=function(){e.setState({showMusic:!e.state.showMusic})},e.toggleSyllabaries=function(){e.setState({showSyllabaries:!e.state.showSyllabaries})},e.toggleBlogs=function(){e.setState({showBlogs:!e.state.showBlogs})},e.toggleVideos=function(){e.setState({showVideos:!e.state.showVideos})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"news-container",children:[Object(g.jsx)("p",{children:"News"}),Object(g.jsx)("button",{onClick:this.toggleNews,children:"Show More"}),this.state.showNews?Object(g.jsx)(B,{}):null]}),Object(g.jsxs)("div",{className:"music-container",children:[Object(g.jsx)("p",{children:"Music"}),Object(g.jsx)("button",{onClick:this.toggleMusic,children:"Show More"}),this.state.showMusic?Object(g.jsx)(D,{}):null]}),Object(g.jsxs)("div",{className:"syllabaries-container",children:[Object(g.jsx)("p",{children:"Syllabaries"}),Object(g.jsx)("button",{onClick:this.toggleSyllabaries,children:"Show More"}),this.state.showSyllabaries?Object(g.jsx)(F,{}):null]}),Object(g.jsxs)("div",{className:"videos-container",children:[Object(g.jsx)("p",{children:"Video Tutorials"}),Object(g.jsx)("button",{onClick:this.toggleVideos,children:"Show More"}),this.state.showVideos?Object(g.jsx)(H,{}):null]}),Object(g.jsxs)("div",{className:"blogs-container",children:[Object(g.jsx)("p",{children:"Recommended Blogs"}),Object(g.jsx)("button",{onClick:this.toggleBlogs,children:"Show More"}),this.state.showBlogs?Object(g.jsx)(Q,{}):null]}),Object(g.jsx)("div",{children:Object(g.jsx)(T,{})})]})}}]),n}(s.a.Component),V=[{id:0,question:"\u53f3",choices:["sun","moon","right","left"],answer:"right"},{id:1,question:"\u5186",choices:["sun","yen","king","noise"],answer:"yen"},{id:2,question:"\u82b1",choices:["flower","down","science","fire"],answer:"flower"},{id:3,question:"\u97f3",choices:["school","sound","spirit","left"],answer:"sound"},{id:4,question:"\u6c17",choices:["circle","down","spirit","rain"],answer:"spirit"}],J=(n(70),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={userAnswer:null,currentIndex:0,choices:[],quizEnd:!1,score:0,disabled:!0,show:!1},e.loadQuiz=function(){var t=e.state.currentIndex;e.setState((function(){return{question:V[t].question,choices:V[t].choices,answer:V[t].answer}}))},e.nextQuestionHandle=function(){var t=e.state,n=t.userAnswer,a=t.answer,s=t.score;e.setState({currentIndex:e.state.currentIndex+1}),n===a&&e.setState({score:s+1})},e.checkAnswer=function(t){e.setState({userAnswer:t})},e.finishHandle=function(){e.state.currentIndex===V.length-1&&e.setState({quizEnd:!0})},e.restartQuiz=function(){e.setState({show:!0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!==t.currentIndex&&this.setState((function(){return{disabled:!0,question:V[n].question,choices:V[n].choices,answer:V[n].answer}}))}},{key:"render",value:function(){var e=this;return this.state.quizEnd?Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Final score: ",this.state.score," out of ",V.length]}),Object(g.jsx)("p",{children:"Correct answers:"}),Object(g.jsx)("ul",{children:V.map((function(e){return Object(g.jsxs)("li",{className:"choices",children:[e.question," ",e.answer]})}))}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return e.restartQuiz},children:"Restart"}),this.state.show?Object(g.jsx)(P,{}):null]})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:this.state.question}),this.state.choices.map((function(t){return Object(g.jsx)("p",{className:"options\n                ".concat(e.userAnswer===t?"selected":null,"\n                "),onClick:function(){return e.checkAnswer(t)},children:t},t.id)})),this.state.currentIndex<V.length-1&&Object(g.jsx)("button",{onClick:this.nextQuestionHandle,children:"Next"}),this.state.currentIndex===V.length-1&&Object(g.jsx)("button",{className:"finish-btn",onClick:this.finishHandle,children:"Finish"})]})}}]),n}(s.a.Component)),P=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={visible:!1},a.startQuiz=a.startQuiz.bind(Object(E.a)(a)),a}return Object(u.a)(n,[{key:"startQuiz",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return Object(g.jsx)("div",{children:this.state.visible?Object(g.jsx)(J,{}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Start the quiz!"}),Object(g.jsx)("button",{onClick:this.startQuiz,children:"Start"})]})})}}]),n}(s.a.Component);var Y=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(P,{})})},G=I(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("nav",{children:[Object(g.jsx)("img",{className:"logo",src:"https://i.postimg.cc/fL88FzDF/logo.png"}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"nav-list",children:[Object(g.jsx)(i.b,{to:"/lessons",className:"nav-text",children:Object(g.jsx)("li",{children:"Home"})}),Object(g.jsx)(i.b,{to:"/dictionary",className:"nav-text",children:Object(g.jsx)("li",{children:"Dictionary"})}),Object(g.jsx)(i.b,{to:"/private",className:"nav-text",children:Object(g.jsx)("li",{children:"My profile"})}),Object(g.jsx)(i.b,{to:"/resources",className:"nav-text",children:Object(g.jsx)("li",{children:"Resources"})}),Object(g.jsx)(i.b,{to:"/quiz",className:"nav-text",children:Object(g.jsx)("li",{children:"Quiz"})})]})}),this.props.isLoggedIn?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("button",{className:"logout",onClick:this.props.logout,children:"Logout"})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(i.b,{to:"/login",children:[Object(g.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(g.jsx)("br",{}),Object(g.jsxs)(i.b,{to:"/signup",children:[Object(g.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})]})}}]),n}(a.Component));var X=I((function(e){var t=e.isLoggedIn,n=e.isLoading,a=e.component,s=e.exact,r=e.path;return n?"Loading":Object(g.jsx)(j.b,{exact:s,path:r,render:function(e){return t?Object(g.jsx)(j.a,{to:"/private"}):t?void 0:Object(g.jsx)(a,Object(k.a)({},e))}})}));var Z=I((function(e){var t=e.isLoggedIn,n=e.isLoading,a=e.component,s=e.exact,r=e.path;return n?"Loading":Object(g.jsx)(j.b,{exact:s,path:r,render:function(e){return t?t?Object(g.jsx)(a,Object(k.a)({},e)):void 0:Object(g.jsx)(j.a,{to:"/login"})}})})),W=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(G,{}),Object(g.jsxs)(j.d,{children:[Object(g.jsx)(Z,{exact:!0,path:"/lessons",component:m}),Object(g.jsx)(Z,{exact:!0,path:"/resources",component:K}),Object(g.jsx)(Z,{exact:!0,path:"/lessons/:id",component:f}),Object(g.jsx)(X,{exact:!0,path:"/signup",component:_}),Object(g.jsx)(X,{exact:!0,path:"/login",component:A}),Object(g.jsx)(Z,{exact:!0,path:"/private/",component:M}),Object(g.jsx)(Z,{exact:!0,path:"/dictionary",component:U}),Object(g.jsx)(Z,{exact:!0,path:"/quiz",component:Y})]})]})}}]),n}(a.Component);c.a.render(Object(g.jsx)(i.a,{children:Object(g.jsx)(N,{children:Object(g.jsx)(W,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f366491c.chunk.js.map