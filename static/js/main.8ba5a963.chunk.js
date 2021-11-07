(this["webpackJsonptest-applab"]=this["webpackJsonptest-applab"]||[]).push([[0],{34:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);t(22);var a=t(0),i=t.n(a),o=t(8),r=t.n(o),d=t(6),c=t(21),s=t(4),b=t(12),l=Object(b.b)({name:"todoItem",initialState:{tasks:[],tasksDone:[]},reducers:{loadState:function(e,n){return n.payload},addTask:function(e,n){var t=n.payload;e.tasks.unshift({id:Date.now(),name:t.name,description:t.description,date:Date.now()})},remove:function(e,n){var t=n.payload,a=e[t.done?"tasksDone":"tasks"],i=a.findIndex((function(e){return e.id===t.id}));-1!==i&&a.splice(i,1)},update:function(e,n){var t=n.payload,a=e[t.done?"tasksDone":"tasks"],i=a.findIndex((function(e){return e.id===t.id}));if(-1!==i){var o=a[i];o.name=t.name,o.description=t.description,o.date=Date.now()}},toggleDone:function(e,n){var t=n.payload,a=t.done?"tasksDone":"tasks",i=t.done?"tasks":"tasksDone",o=e[a],r=e[i],d=o.findIndex((function(e){return e.id===t.id}));if(-1!==d){var c=o[d];o.splice(d,1),r.splice(1,0,c)}},reorder:function(e,n){var t=n.payload,a=t.startList,i=t.endList,o=e[a],r=e[i],d=o.splice(t.startIndex,1),c=Object(s.a)(d,1)[0];r.splice(t.endIndex,0,c)}}}),p=l.actions,u=p.loadState,f=p.addTask,g=p.remove,h=p.update,x=p.toggleDone,j=p.reorder,m=l.reducer,O=t(3),y=t(2);var v=function(){return Object(y.jsx)(I,{children:Object(y.jsx)(k,{href:"https://github.com/beagle-elgaeb","aria-label":"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 GitHub",target:"_blank",children:"\xa9 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u041d\u0438\u043a\u043e\u043d\u043e\u0432\u0430"})})},I=O.a.footer.withConfig({displayName:"Footer__Container",componentId:"sc-f0jrsb-0"})(["width:100%;height:70px;display:flex;justify-content:center;align-items:center;margin:0;"]),k=O.a.a.withConfig({displayName:"Footer__Copyright",componentId:"sc-f0jrsb-1"})(["font-size:14px;line-height:16px;font-weight:300;font-style:italic;text-decoration:none;color:#73037d;margin:0;"]);var w=function(){return Object(y.jsx)(z,{children:Object(y.jsx)(E,{src:"data:image/png;base64,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",alt:"Logo"})})},z=O.a.header.withConfig({displayName:"Header__Container",componentId:"sc-zfbrzf-0"})(["width:100%;height:70px;margin:0;"]),E=O.a.img.withConfig({displayName:"Header__Logo",componentId:"sc-zfbrzf-1"})(["height:100%;display:block;margin:0 auto;"]),C=t(7),S=t(10),R=t.p+"static/media/checkMark.5b2219d1.svg",N=["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"];function T(e){function n(e){return N[e.getMonth()]}var t=new Date,a=t.getDate().toString(),i=n(t),o=t.getFullYear(),r="".concat(a," ").concat(i," ").concat(o),d=new Date(e),c=d.getDate().toString(),s=n(d),b=d.getHours().toString().padStart(2,"0"),l=d.getMinutes().toString().padStart(2,"0"),p=d.getFullYear(),u=d.getFullYear().toString();return r==="".concat(c," ").concat(s," ").concat(p)?"".concat(b,":").concat(l):o-p<=1?"".concat(c," ").concat(s," ").concat(b,":").concat(l):"".concat(c," ").concat(s," ").concat(u,"\u0433. ").concat(b,":").concat(l)}function W(e,n,t,a){var i=!0,o=!0,r=!0,d=!0;return void 0===t.find((function(n){return n.name===e}))&&void 0===a.find((function(n){return n.name===e}))||(r=!1),(0===e.length||e.length>20||!0!==r)&&(o=!1),(0===n.length||n.length>70)&&(d=!1),!0===o&&!0===d||(i=!1),{isValid:i,nameIsValid:o,descriptionIsValid:d}}var Y=function(e){var n=e.task,t=e.done,i=e.isDragging,o=Object(a.useState)(n.name),r=Object(s.a)(o,2),c=r[0],b=r[1],l=Object(a.useState)(n.description),p=Object(s.a)(l,2),u=p[0],f=p[1],j=Object(a.useState)(!1),m=Object(s.a)(j,2),O=m[0],v=m[1];function I(){v(!0)}var k=Object(a.useState)(!1),w=Object(s.a)(k,2),z=w[0],E=w[1],C=Object(d.d)((function(e){return e.toDo})),S=C.tasks,R=C.tasksDone,N=Object(d.c)(),Y=W(c,u,S,R);return Object(y.jsxs)(G,{done:t,isDragging:i,children:[z?Object(y.jsxs)("form",{noValidate:!0,children:[Object(y.jsx)("label",{children:Object(y.jsx)(L,{"aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"name",value:c,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 - \u043e\u0442 1 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435",onChange:function(e){b(e.currentTarget.value)},onBlur:I,autoComplete:"off",maxLength:20,required:!0,valid:!O||Y.nameIsValid})}),Object(y.jsx)(L,{"aria-label":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",type:"text",name:"description",value:u,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 - \u043e\u0442 1 \u0434\u043e 70 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",onChange:function(e){f(e.currentTarget.value)},onBlur:I,autoComplete:"off",maxLength:70,required:!0,valid:!O||Y.descriptionIsValid})]}):Object(y.jsxs)("div",{children:[Object(y.jsxs)("label",{children:[Object(y.jsx)(P,{type:"checkbox",onChange:function(){N(x({id:n.id,done:t}))},checked:t}),Object(y.jsx)(D,{done:t,children:n.name})]}),Object(y.jsx)(q,{children:n.description})]}),Object(y.jsxs)(V,{children:[z?Object(y.jsxs)("div",{children:[Object(y.jsx)(Q,{onClick:function(){N(h({id:n.id,done:t,name:c,description:u})),E(!1)},disabled:!!O&&!Y.isValid,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(y.jsx)(U,{onClick:function(){E(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]}):Object(y.jsxs)("div",{children:[Object(y.jsx)(U,{onClick:function(){E(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(y.jsx)(U,{onClick:function(){N(g({id:n.id,done:t}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}),Object(y.jsx)(J,{done:t,children:T(n.date)})]})]})},G=O.a.div.withConfig({displayName:"Card__Container",componentId:"sc-6yerfb-0"})(["width:100%;height:120px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;background:",";border:1px solid ",";border-radius:5px;outline:none;box-shadow:",";margin:10px 0 0 0;padding:10px;:hover{box-shadow:",";}"],(function(e){return e.done?"#f9f5f9":"#fdfafb"}),(function(e){return e.done?"#3b0d8250":"#a7023c50"}),(function(e){var n=e.done;return e.isDragging?"4px 4px 5px 0 ".concat(n?"#3b0d8250":"#a7023c50"):"none"}),(function(e){var n=e.done;return e.isDragging?"none":"0 0 3px 2px ".concat(n?"#3b0d8250":"#a7023c50")})),P=O.a.input.withConfig({displayName:"Card__Checkbox",componentId:"sc-6yerfb-1"})(["position:absolute;z-index:-1;opacity:0;margin:0 10px 0 0;:checked +::before{background-image:url(",");background-position:center;background-size:80%;background-repeat:no-repeat;border:1px solid #3b0d8260;}"],R),L=O.a.input.withConfig({displayName:"Card__Input",componentId:"sc-6yerfb-2"})(["width:100%;height:24px;background:#ffffff;box-sizing:border-box;border:none;border-bottom:1px solid ",";border-left:1px solid ",";border-radius:5px;outline:none;font-size:16px;line-height:18px;font-weight:300;color:#a0ba02;margin:0 0 5px 0;padding:0 10px 0 10px;::placeholder{font-size:12px;color:#a0ba0260;text-transform:lowercase;}:hover{border:1px solid #a0ba0250;}:focus{border:1px solid #a0ba02;box-shadow:0 0 3px 2px #a0ba0230;}"],(function(e){return e.valid?"#a0ba0250":"#D3366E50"}),(function(e){return e.valid?"#a0ba0250":"#D3366E50"})),D=O.a.div.withConfig({displayName:"Card__Title",componentId:"sc-6yerfb-3"})(["font-size:22px;line-height:24px;position:relative;font-weight:500;color:",";text-decoration:",';cursor:pointer;margin:0 10px 5px 0;padding:0 0 0 30px;::before{width:24px;height:24px;box-sizing:border-box;position:absolute;top:0;left:0;border:1px solid #a7023c50;border-radius:5px;content:"";}:hover{::before{border:1px solid #a7023c;}}'],(function(e){return e.done?"#3b0d82":"#a7023c"}),(function(e){return e.done?"line-through":"none"})),q=O.a.p.withConfig({displayName:"Card__Description",componentId:"sc-6yerfb-4"})(["font-size:14px;line-height:16px;font-weight:400;hyphens:auto;word-break:break-all;color:#000000;margin:0;"]),V=O.a.div.withConfig({displayName:"Card__ButtonsAndDate",componentId:"sc-6yerfb-5"})(["display:flex;justify-content:space-between;align-items:flex-end;"]),U=O.a.button.withConfig({displayName:"Card__Button",componentId:"sc-6yerfb-6"})(["display:inline-block;background:transparent;border:none;outline:none;font-size:12px;line-height:14px;font-weight:300;font-style:italic;color:#a0ba02;margin:0 20px 0 0;padding:0;"]),Q=Object(O.a)(U).withConfig({displayName:"Card__ButtonSave",componentId:"sc-6yerfb-7"})(["color:",";"],(function(e){return e.disabled?"#a0ba0230":"#a0ba02"})),J=O.a.p.withConfig({displayName:"Card__Time",componentId:"sc-6yerfb-8"})(["font-size:12px;line-height:14px;font-weight:300;text-align:end;color:",";margin:0;"],(function(e){return e.done?"#3b0d82":"#a7023c"}));var F=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),c=r[0],b=r[1],l=Object(a.useState)(!1),p=Object(s.a)(l,2),u=p[0],g=p[1];function h(){g(!0)}var x=Object(d.d)((function(e){return e.toDo})),m=x.tasks,O=x.tasksDone,v=Object(d.c)(),I=W(t,c,m,O);return Object(y.jsxs)(K,{children:[Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(f({name:t,description:c})),i(""),b(""),g(!1)},noValidate:!0,children:[Object(y.jsx)(H,{"aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"name",value:t,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 - \u043e\u0442 1 \u0434\u043e 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435",onChange:function(e){i(e.currentTarget.value)},onBlur:h,autoComplete:"off",maxLength:20,required:!0,valid:!u||I.nameIsValid}),Object(y.jsx)(H,{"aria-label":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",type:"text",name:"description",value:c,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 - \u043e\u0442 1 \u0434\u043e 70 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",onChange:function(e){b(e.currentTarget.value)},onBlur:h,autoComplete:"off",maxLength:70,required:!0,valid:!u||I.descriptionIsValid}),Object(y.jsx)(Z,{type:"submit",disabled:!!u&&!I.isValid,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(y.jsxs)(S.a,{onDragEnd:function(e){e.destination&&(e.destination.droppableId===e.source.droppableId&&e.destination.index===e.source.index||v(j({startIndex:e.source.index,endIndex:e.destination.index,startList:e.source.droppableId,endList:e.destination.droppableId})))},children:[Object(y.jsx)(S.c,{droppableId:"tasks",children:function(e){return Object(y.jsxs)("div",Object(C.a)(Object(C.a)({ref:e.innerRef},e.droppableProps),{},{children:[m.map((function(e,n){return Object(y.jsx)(S.b,{draggableId:e.id.toString(),index:n,children:function(n,t){return Object(y.jsx)("div",Object(C.a)(Object(C.a)(Object(C.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(y.jsx)(Y,{task:e,done:!1,isDragging:t.isDragging},e.id)}))}},e.id)})),e.placeholder]}))}}),Object(y.jsx)(S.c,{droppableId:"tasksDone",children:function(e){return Object(y.jsxs)("div",Object(C.a)(Object(C.a)({ref:e.innerRef},e.droppableProps),{},{children:[O.map((function(e,n){return Object(y.jsx)(S.b,{draggableId:e.id.toString(),index:n,children:function(n,t){return Object(y.jsx)("div",Object(C.a)(Object(C.a)(Object(C.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(y.jsx)(Y,{task:e,done:!0,isDragging:t.isDragging},e.id)}))}},e.id)})),e.placeholder]}))}})]})]})},K=O.a.div.withConfig({displayName:"Main__Container",componentId:"sc-m2qm37-0"})(["width:100%;margin:0;"]),H=O.a.input.withConfig({displayName:"Main__Input",componentId:"sc-m2qm37-1"})(["width:100%;height:30px;background:transparent;box-sizing:border-box;border:none;border-bottom:1px solid ",";border-left:1px solid ",";border-radius:5px;outline:none;font-size:16px;line-height:18px;font-weight:300;color:#a0ba02;margin:10px 0 0 0;padding:0 10px 0 10px;::placeholder{font-size:13px;color:#a0ba0280;text-transform:lowercase;}:hover{border:1px solid #a0ba0250;}:focus{border:1px solid #a0ba02;box-shadow:0 0 3px 2px #a0ba0230;}"],(function(e){return e.valid?"#a0ba0250":"#D3366E50"}),(function(e){return e.valid?"#a0ba0250":"#D3366E50"})),Z=O.a.button.withConfig({displayName:"Main__Button",componentId:"sc-m2qm37-2"})(["width:50%;height:30px;display:block;background:#a0ba0210;box-sizing:border-box;border:",";border-radius:5px;outline:none;font-size:18px;line-height:20px;font-weight:300;color:",";margin:10px 0 0 auto;padding:0;:hover{box-shadow:0 0 3px 2px #a0ba0250;}"],(function(e){return e.disabled?"none":"1px solid #a0ba0270"}),(function(e){return e.disabled?"#7d8b2430":"#7d8b24"}));var X=function(){var e=Object(d.d)((function(e){return e.toDo})),n=Object(d.c)(),t="todoListState";return Object(a.useEffect)((function(){var e=localStorage.getItem(t);if(e)try{n(u(JSON.parse(e)))}catch(a){}}),[]),Object(a.useEffect)((function(){localStorage.setItem(t,JSON.stringify(e))}),[e]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(w,{}),Object(y.jsx)(F,{}),Object(y.jsx)(v,{})]})},B=(t(34),t(20)),M=t.n(B),A=Object(b.a)({reducer:{toDo:m},middleware:function(e){return e().concat(M.a)}}),_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(c.a,{basename:"/test-applab",children:Object(y.jsx)(d.a,{store:A,children:Object(y.jsx)(X,{})})})}),document.getElementById("root")),_()}},[[36,1,2]]]);
//# sourceMappingURL=main.8ba5a963.chunk.js.map