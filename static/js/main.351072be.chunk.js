(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(9),r=n.n(c),s=n(3),i=n(4),u=n(6),d=n(5),b=n(0),l=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:e}),n]})},j=n(2),h=n.n(j),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.options,e=t.good,n=t.neutral,a=t.bad;return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",className:"".concat(h.a.button," ").concat(h.a.good),onClick:e,children:"Good"}),Object(b.jsx)("button",{type:"button",className:"".concat(h.a.button," ").concat(h.a.neutral),onClick:n,children:"Neutral"}),Object(b.jsx)("button",{type:"button",className:"".concat(h.a.button," ").concat(h.a.bad),onClick:a,children:"Bad"})]})}}]),n}(a.Component),O=function(t){var e=t.mesage;return Object(b.jsx)("h3",{children:e})},v=n(7),g=n.n(v),f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,a=t.bad,o=t.total,c=t.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Statistics"}),0===this.props.good&0===this.props.neutral&0===this.props.bad?Object(b.jsx)(O,{mesage:"No feedback given"}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:g.a.good,children:["Good: ",e]}),Object(b.jsxs)("p",{className:g.a.neutral,children:["Neutral: ",n]}),Object(b.jsxs)("p",{className:g.a.bad,children:["Bad: ",a]}),Object(b.jsxs)("p",{children:["Total: ",o]}),Object(b.jsxs)("p",{children:["Positive Feedback: ",c,"%"]})]})]})}}]),n}(a.Component),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={good:0,neutral:0,bad:0},t.reviews\u0421ounterGood=function(){t.setState((function(t){return{good:t.good+=1}}))},t.reviews\u0421ounterNeutral=function(){t.setState((function(t){return{neutral:t.neutral+=1}}))},t.reviews\u0421ounterBad=function(){t.setState((function(t){return{bad:t.bad+=1}}))},t.countTotalFeedback=function(){return t.total=t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return t.positiveFeedback=Math.round(t.state.good/t.total*100)},t.total=0,t.positiveFeedback=0,t}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(l,{title:"Please leave feedback",children:[Object(b.jsx)(p,{options:{good:this.reviews\u0421ounterGood,neutral:this.reviews\u0421ounterNeutral,bad:this.reviews\u0421ounterBad}}),Object(b.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(a.Component);n(15);r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={button:"FeedbackOptions_button__3o-dY",good:"FeedbackOptions_good__1Miqa",neutral:"FeedbackOptions_neutral__1dGXr",bad:"FeedbackOptions_bad__1h_4G"}},7:function(t,e,n){t.exports={good:"Statistics_good__2pLAn",neutral:"Statistics_neutral__33VD9",bad:"Statistics_bad__3p4oj"}}},[[16,1,2]]]);
//# sourceMappingURL=main.351072be.chunk.js.map