(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{964:function(e,a,t){"use strict";t.r(a);var N=t(0),y=t.n(N),f=t(952),w=t(747),h=t(858),C=t(861),l=t(723),S=t.n(l),x=t(606),D=t(181);a.default=()=>{const[e,a]=Object(N.useState)(new Date),[t,l]=Object(N.useState)(null),[n,r]=Object(N.useState)(!1),[,c]=Object(N.useState)(null),[o,m]=Object(N.useState)(!1),[s,i]=Object(N.useState)(""),[,d]=Object(N.useState)("");var[u,,]=Object(N.useState)(!0);const[E,v]=Object(N.useState)(null);var[,,]=Object(N.useState)([]);const[b,p]=Object(N.useState)([{title:"Event Name 4",start:Date.now()+148e6,className:"bg-purple"},{title:"Test Event 1",start:Date.now(),end:Date.now(),className:"bg-success"},{title:"Test Event 2",start:Date.now()+168e6,className:"bg-info"},{title:"Test Event 3",start:Date.now()+338e6,className:"bg-primary"}]);var g=()=>{m(!1),r(!1),l(!1)};return y.a.createElement("div",{className:"page-wrapper"},y.a.createElement("div",{className:"content container-fluid"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"},y.a.createElement(D.a,null)),y.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9"},y.a.createElement("div",{className:"card mb-0"},y.a.createElement("div",{className:"card-body"},y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12"},y.a.createElement(f.a,{plugins:[w.b,h.a,C.a],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:u,initialEvents:b,select:e=>{m(!0),c(e)},eventClick:e=>{return e=e,r(!0),i(e.event.title),void v(e.event)}})))))))),y.a.createElement("div",{className:"modal custom-modal fade",id:"event-modal"},y.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},y.a.createElement("div",{className:"modal-content"},y.a.createElement("div",{className:"modal-header"},y.a.createElement("h5",{className:"modal-title"},"Event"),y.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},y.a.createElement("span",{"aria-hidden":"true"},"×"))),y.a.createElement("div",{className:"modal-body"}),y.a.createElement("div",{className:"modal-footer text-center"},y.a.createElement("button",{type:"button",className:"btn btn-success submit-btn save-event"},"Create event"),y.a.createElement("button",{type:"button",className:"btn btn-danger submit-btn delete-event","data-dismiss":"modal"},"Delete"))))),y.a.createElement("div",{className:"modal custom-modal fade",id:"add-category"},y.a.createElement("div",{className:"modal-dialog"},y.a.createElement("div",{className:"modal-content"},y.a.createElement("div",{className:"modal-header"},y.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"×"),y.a.createElement("h4",{className:"modal-title"},"Add a category")),y.a.createElement("div",{className:"modal-body p-20"},y.a.createElement("form",null,y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-6"},y.a.createElement("label",{className:"col-form-label"},"Category Name"),y.a.createElement("input",{className:"form-control",placeholder:"Enter name",type:"text",name:"category-name"})),y.a.createElement("div",{className:"col-md-6"},y.a.createElement("label",{className:"col-form-label"},"Choose Category Color"),y.a.createElement("select",{className:"form-control","data-placeholder":"Choose a color...",name:"category-color"},y.a.createElement("option",{value:"success"},"Success"),y.a.createElement("option",{value:"danger"},"Danger"),y.a.createElement("option",{value:"info"},"Info"),y.a.createElement("option",{value:"pink"},"Pink"),y.a.createElement("option",{value:"primary"},"Primary"),y.a.createElement("option",{value:"warning"},"Warning"),y.a.createElement("option",{value:"orange"},"Orange"),y.a.createElement("option",{value:"brown"},"Brown"),y.a.createElement("option",{value:"teal"},"Teal")))))),y.a.createElement("div",{className:"modal-footer"},y.a.createElement("button",{type:"button",className:"btn btn-white","data-dismiss":"modal"},"Close"),y.a.createElement("button",{type:"button",className:"btn btn-danger save-category","data-dismiss":"modal"},"Save"))))),y.a.createElement(x.a,{show:"addcategory"===t,onHide:g,centered:!0},y.a.createElement(x.a.Header,{closeButton:!0},y.a.createElement("h4",{className:"modal-title"},"Add Category")),y.a.createElement(x.a.Body,null,y.a.createElement("form",null,y.a.createElement("div",{className:"form-group"},y.a.createElement("label",null,"Category Name"),y.a.createElement("input",{className:"form-control form-white",placeholder:"Enter name",type:"text",name:"category-name"})),y.a.createElement("div",{className:"form-group mb-0"},y.a.createElement("label",null,"Choose Category Color"),y.a.createElement("select",{className:"form-control select form-white","data-placeholder":"Choose a color...",name:"category-color"},y.a.createElement("option",{value:"success"},"Success"),y.a.createElement("option",{value:"danger"},"Danger"),y.a.createElement("option",{value:"info"},"Info"),y.a.createElement("option",{value:"primary"},"Primary"),y.a.createElement("option",{value:"warning"},"Warning"),y.a.createElement("option",{value:"inverse"},"Inverse"))),y.a.createElement("div",{className:"submit-section text-center"},y.a.createElement("button",{type:"button",className:"btn btn-theme ctm-border-radius text-white save-category submit-btn mt-3 button-1"},"Save"))))),y.a.createElement(x.a,{centered:!0,show:n,onHide:g},y.a.createElement(x.a.Header,{toggle:()=>(void 0).onupdateModalClose()},"Event"),y.a.createElement(x.a.Body,null,y.a.createElement("form",{className:"event-form"},y.a.createElement("label",null,"Change event name"),y.a.createElement("div",{className:"input-group"},y.a.createElement("input",{className:"form-control",type:"text",value:s,onChange:e=>i(e.target.value)}),y.a.createElement("span",{className:"input-group-append"},y.a.createElement("button",{type:"button",className:"btn btn-success btn-md",onClick:()=>{var a=[...b];for(let e=0;e<a.length;e++)a[e].id===parseInt(E.id)&&(a[e].title=s);p(a),r(!1)}},"Save"))))),y.a.createElement(x.a.Footer,null,y.a.createElement("button",{type:"button",className:"btn btn-danger submit-btn delete-event","data-dismiss":"modal",onClick:()=>{E.remove(),r(!1)}},"Delete"))),y.a.createElement(x.a,{centered:!0,show:o,onHide:g},y.a.createElement(x.a.Header,{toggle:()=>(void 0).oncreateeventModalClose()},"Event"),y.a.createElement(x.a.Body,null,y.a.createElement("form",null,y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"col-md-12"},y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{className:"control-label"},"Event Name"),y.a.createElement("input",{className:"form-control",type:"text",name:"title",value:s,onChange:e=>i(e.target.value)}))),y.a.createElement("div",{className:"col-md-12"},y.a.createElement("div",{className:"form-group"},y.a.createElement("label",{className:"control-label"},"Category"),y.a.createElement("select",{className:"select form-control",name:"category",onChange:e=>d(e.target.value)},y.a.createElement("option",{value:"bg-danger"},"Danger"),y.a.createElement("option",{value:"bg-success"},"Success"),y.a.createElement("option",{value:"bg-purple"},"Purple"),y.a.createElement("option",{value:"bg-primary"},"Primary"),y.a.createElement("option",{value:"bg-pink"},"Pink"),y.a.createElement("option",{value:"bg-info"},"Info"),y.a.createElement("option",{value:"bg-inverse"},"Inverse"),y.a.createElement("option",{value:"bg-orange"},"Orange"),y.a.createElement("option",{value:"bg-brown"},"Brown"),y.a.createElement("option",{value:"bg-teal"},"Teal"),y.a.createElement("option",{value:"bg-warning"},"Warning"))))))),y.a.createElement(x.a.Footer,null,y.a.createElement("button",{type:"button",className:"btn btn-success submit-btn delete-event","data-dismiss":"modal",onClick:()=>{var{eventTitle:e,categoryColor:a,addneweventobj:t}=(void 0).state,l=t.view.calendar;l.unselect(),e&&l.addEvent({id:10,title:e,className:a,start:t.startStr,end:t.endStr,allDay:t.allDay}),m(!1)}},"Create event"))),y.a.createElement(x.a,{show:"createnew"===t,onHide:g,centered:!0},y.a.createElement(x.a.Header,{closeButton:!0},y.a.createElement(x.a.Title,null,"Add Event")),y.a.createElement(x.a.Body,null,y.a.createElement("form",null,y.a.createElement("div",{className:"form-group"},y.a.createElement("label",null,"Event Name ",y.a.createElement("span",{className:"text-danger"},"*")),y.a.createElement("input",{className:"form-control",type:"text"})),y.a.createElement("div",{className:"form-group"},y.a.createElement("label",null,"Event Date ",y.a.createElement("span",{className:"text-danger"},"*")),y.a.createElement(S.a,{selected:e,onChange:e=>{a(e)},className:"form-control datetimepicker"})),y.a.createElement("div",{className:"submit-section"},y.a.createElement("button",{className:"btn btn-theme ctm-border-radius text-white submit-btn button-1"},"Submit"))))))}}}]);