(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),c=a(10),l=a(9),s=a(0),u=a.n(s),m=a(7),o=a.n(m),i=(a(4),a(1)),p=a.n(i),v=a(8),d=a(2);function E(e){var t=e.movie;return u.a.createElement("div",{className:"card"},u.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+"poster"}),u.a.createElement("div",{className:"card--content"},u.a.createElement("h3",{className:"card-title"},t.title),u.a.createElement("p",null,u.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),u.a.createElement("p",null,u.a.createElement("small",null,"RATING: ",t.vote_average)),u.a.createElement("p",{className:"card--desc"},t.overview)))}function b(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),c=Object(d.a)(r,2),l=c[0],m=c[1],o=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=d5b8c2c9339e0702b7609cd68c65fccc&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,m(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{className:"form",onSubmit:o},u.a.createElement("label",{className:"label",htmlFor:"query"},"Movie Name"),u.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"Search Movies",value:a,onChange:function(e){return n(e.target.value)}}),u.a.createElement("button",{className:"button",type:"submit"},"Search")),u.a.createElement("div",{className:"card-list"},l.filter((function(e){return e.poster_path})).map((function(e){return u.a.createElement(E,{movie:e,key:e.id})}))))}var f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("h1",{className:"title"},"React Movie App"),u.a.createElement(b,null))}}]),a}(u.a.Component);o.a.render(u.a.createElement(f,null),document.getElementById("root"))},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.e26f7a72.chunk.js.map