(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(5),o=n.n(s),i=n(6),r=n(7),b=n(8),d=n(10),u=n(9),l=n(0),j=function(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:e}),n]})},h=n(4),O=n.n(h),p=function(t){var e=t.options,n=t.onLeaveFeedback,a=Object.keys(e);return Object(l.jsx)("ul",{className:O.a.btnList,children:a.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{className:O.a.button,type:"button",name:t,onClick:n,children:t})},t)}))})},v=function(t){var e=t.mesage;return Object(l.jsx)("h3",{children:e})},x=n(2),g=n.n(x),f=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,s=t.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Statistics"}),0===e&&0===n&&0===a?Object(l.jsx)(v,{mesage:"No feedback given"}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:g.a.good,children:["Good: ",e]}),Object(l.jsxs)("p",{className:g.a.neutral,children:["Neutral: ",n]}),Object(l.jsxs)("p",{className:g.a.bad,children:["Bad: ",a]}),Object(l.jsxs)("p",{children:["Total: ",c]}),Object(l.jsxs)("p",{children:["Positive Feedback: ",s,"%"]})]})]})},k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={good:0,neutral:0,bad:0},t.reviews\u0421ounter=function(e){var n=e.target.name;t.setState((function(t){return Object(i.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return t.total=t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return t.positiveFeedback=Math.round(t.state.good/t.total*100)},t.total=0,t.positiveFeedback=0,t}return Object(b.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(j,{title:"Please leave feedback",children:[Object(l.jsx)(p,{options:this.state,onLeaveFeedback:this.reviews\u0421ounter}),Object(l.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(a.Component);n(16);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={good:"Statistics_good__2pLAn",neutral:"Statistics_neutral__33VD9",bad:"Statistics_bad__3p4oj"}},4:function(t,e,n){t.exports={btnList:"FeedbackOptions_btnList__2KS8V",button:"FeedbackOptions_button__3o-dY"}}},[[17,1,2]]]);
//# sourceMappingURL=main.1faeb01e.chunk.js.map