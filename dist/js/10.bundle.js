(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{663:function(e,a,t){"use strict";a.a=t.p+"cd959cec2cf0e04813fe029f529328b8.png"},664:function(e,a,t){"use strict";a.a=t.p+"2eec2a9beaa94b1f1eb5c89e39dcebad.png"},785:function(e,a,t){var l=t(786),r=("string"==typeof l&&(l=[[e.i,l,""]]),{hmr:!0});r.transform=void 0,r.insertInto=void 0,t(92)(l,r);l.locals&&(e.exports=l.locals)},786:function(e,a,t){(a=t(91)(!1)).push([e.i,"\r\n.ring-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* .ring-svg {\r\n    transform: rotate(-90deg);\r\n} */\r\n.leaves-text {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    margin-bottom: 5px;\r\n}",""]),e.exports=a},975:function(e,a,t){"use strict";t.r(a);var i=t(0),o=t.n(i),m=t(15),n=(t(785),t(609)),s=e=>{var e=e["upcomingCount"],a=[{Date:"01 Jan 2024",HolidayName:"New Year"},{Date:"26 Jan 2024",HolidayName:"Republic Day"},{Date:"21 Feb 2024",HolidayName:"Maha Shivaratri"},{Date:"08 Mar 2024",HolidayName:"Holi"},{Date:"02 Apr 2024",HolidayName:"Good Friday"},{Date:"14 Apr 2024",HolidayName:"Ambedkar Jayanti"},{Date:"06 May 2024",HolidayName:"Buddha Purnima"},{Date:"05 Jun 2024",HolidayName:"Eid ul-Fitr"},{Date:"15 Aug 2024",HolidayName:"Independence Day"},{Date:"19 Aug 2024",HolidayName:"Raksha Bandhan"},{Date:"02 Oct 2024",HolidayName:"Gandhi Jayanti"},{Date:"08 Oct 2024",HolidayName:"Dussehra"},{Date:"27 Oct 2024",HolidayName:"Diwali"},{Date:"10 Nov 2024",HolidayName:"Eid ul-Milad"},{Date:"25 Dec 2024",HolidayName:"Christmas"}];const t=new Date;var l=a.filter(e=>new Date(e.Date)>=t).slice(0,e);return o.a.createElement(n.a,{className:"table-striped",style:{overflowX:"auto"},columns:[{title:"Date",dataIndex:"Date"},{title:"Holiday Name",dataIndex:"HolidayName"}],dataSource:e?l:a,rowKey:e=>e.id,pagination:!1})},d=t(608),v=t(606),u=e=>{var{title:e,ringRadius:a,circumference:t,dashOffset:l,remainingLeave:r,consumedLeave:n,additionalInfo:c,totalLeave:m}=e;return o.a.createElement("div",{className:"card ctm-border-radius shadow-sm mt-4"},o.a.createElement("div",{className:"card-body py-4"},o.a.createElement("h5",{className:"card-title"},e),o.a.createElement("div",{className:"ring-container"},o.a.createElement("svg",{height:"100",width:"100",className:"ring-svg"},o.a.createElement("circle",{cx:"50",cy:"50",r:a,fill:"transparent",stroke:"#55c57a",strokeWidth:"8"}),o.a.createElement("circle",{cx:"50",cy:"50",r:a,fill:"transparent",stroke:"#f0f0f0",strokeWidth:"8",strokeDasharray:t,strokeDashoffset:l,strokeLinecap:"round"}),o.a.createElement("text",{x:"50",y:"50",textAnchor:"middle",fill:"#000",fontSize:"16"},r))),o.a.createElement("p",{className:"leaves-text"},"Consumed: ",n," | Remaining: ",r),c&&o.a.createElement("p",{className:"leaves-text"},c),o.a.createElement("p",{className:"leaves-text"},"Total Leave: ",m)))},E=()=>{var e=2*Math.PI*40,a=e-0*e,t=2*Math.PI*40,l=t-2/19.5*100/100*t;const[r,n]=Object(i.useState)(!1);var c=()=>{n(!1)};return o.a.createElement("aside",{className:"sidebar sidebar-user"},o.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},o.a.createElement("div",{className:"card-body py-4"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 mr-auto text-left"},o.a.createElement("div",{className:"custom-search input-group"},o.a.createElement("div",{className:"custom-breadcrumb"},o.a.createElement("ol",{className:"breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2"},o.a.createElement("li",{className:"breadcrumb-item d-inline-block"},o.a.createElement(m.b,{to:"dashboard",className:"text-dark"},"Home")),o.a.createElement("li",{className:"breadcrumb-item d-inline-block active"},"Leave")),o.a.createElement("h4",{className:"text-dark"},"Leave"))))))),o.a.createElement(u,{title:"Sick Leave Details",ringRadius:40,circumference:e,dashOffset:a,remainingLeave:7,consumedLeave:0,totalLeave:7}),o.a.createElement(u,{title:"Paid Leave Details",ringRadius:40,circumference:t,dashOffset:l,remainingLeave:17.5,consumedLeave:2,additionalInfo:"Added After a Month: +".concat(1.5," days"),totalLeave:19.5}),o.a.createElement("div",{className:"card ctm-border-radius shadow-sm mt-4"},o.a.createElement("div",{className:"card-body py-4"},o.a.createElement("h5",{className:"card-title"},"Holiday List"),o.a.createElement(s,{upcomingCount:3}),o.a.createElement("br",null),o.a.createElement(d.a,{variant:"primary",onClick:()=>{n(!0)}},"Show Holiday List"),o.a.createElement(v.a,{show:r,onHide:c},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Holiday List")),o.a.createElement(v.a.Body,null,o.a.createElement(s,null)),o.a.createElement(v.a.Footer,null,o.a.createElement(d.a,{variant:"secondary",onClick:c},"Close"))))))};var p=()=>{var[e]=Object(i.useState)([{id:1,ApplyDate:"05 May 2023",Duration:"2",LeaveType:"Sick Leave",Status:"Approved",Reason:"Medical"},{id:2,ApplyDate:"10 Jun 2023",Duration:"2",LeaveType:"Paid Leave",Status:"Pending",Reason:"Vacation"},{id:3,ApplyDate:"20 Aug 2023",Duration:"3",LeaveType:"Paid Leave",Status:"Approved",Reason:"Family reasons"}]);return o.a.createElement(n.a,{className:"table-striped",style:{overflowX:"auto"},columns:[{title:"Apply Date",dataIndex:"ApplyDate"},{title:"Duration (Days)",dataIndex:"Duration"},{title:"Leave Type",dataIndex:"LeaveType"},{title:"Status",dataIndex:"Status",render:e=>o.a.createElement("span",{className:(e=>{switch(e){case"Approved":return"badge badge-success";case"Pending":return"badge badge-warning";case"Rejected":return"badge badge-danger";default:return"badge badge-secondary"}})(e)},e)},{title:"Reason",dataIndex:"Reason"}],dataSource:e,rowKey:e=>e.id,pagination:!1})},c=t(664),b=t(157),N=t(663),y=()=>{var[,,]=Object(i.useState)(null);const[e,a]=Object(i.useState)(!1);var t=()=>{a(!1)};const l=()=>{a(!0)};var r=[{id:1,image:c.a,Employee:"Krishna ",Leave:"Paid Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"},{id:2,image:b.a,Employee:"Ashish Kumar Sahu",Leave:"Sick Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"},{id:3,image:N.a,Employee:"Vivek Dubey",Leave:"Casual Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,{className:"table-striped",style:{overflowX:"auto"},columns:[{title:"Team Member",dataIndex:"Employee",render:(e,a)=>o.a.createElement(o.a.Fragment,null,o.a.createElement(m.b,{to:"employment",className:"avatar avatar-sm mr-2"},o.a.createElement("img",{alt:"",src:a.image})),o.a.createElement("h2",{className:"table-avatar"},o.a.createElement(m.b,{to:"employment"},e)))},{title:"Leave Type",dataIndex:"Leave"},{title:"From",dataIndex:"From"},{title:"To",dataIndex:"To"},{title:"Remaining Days",dataIndex:"Days"},{title:"Actions",dataIndex:"Actions",render:(e,a)=>o.a.createElement("div",null,o.a.createElement("a",{href:"#0",className:"btn btn-theme ctm-border-radius text-white btn-sm"},"Approve"),o.a.createElement("a",{href:"#0",className:"btn btn-danger ctm-border-radius text-white btn-sm",onClick:l}," Reject"))}],dataSource:r,rowKey:e=>e.id,pagination:!1}),o.a.createElement(v.a,{show:e,onHide:t,centered:!0},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement("h4",{className:"modal-title mb-4"},"Are You Sure Want to Reject?")),o.a.createElement(v.a.Body,null,o.a.createElement("button",{type:"button",className:"btn btn-danger ctm-border-radius text-center mb-2 mr-3","data-dismiss":"modal",onClick:t},"Cancel"),o.a.createElement("button",{type:"button",className:"btn btn-theme button-1 ctm-border-radius text-white text-center mb-2","data-dismiss":"modal"},"Reject"))))},g=t(720),h=()=>{var e=[{id:1,image:c.a,Employee:"Krishna ",Leave:"Paid Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"},{id:2,image:b.a,Employee:"Ashish Kumar Sahu",Leave:"Sick Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"},{id:3,image:N.a,Employee:"Vivek Dubey",Leave:"Casual Leave",From:"05 Dec 2019",To:"07 Dec 2019",Days:"3",Remaining:"9",Notes:"Parenting Leave",Status:"approved"}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(n.a,{className:"table-striped",style:{overflowX:"auto"},columns:[{title:"Team Member",dataIndex:"Employee",render:(e,a)=>o.a.createElement(o.a.Fragment,null,o.a.createElement(m.b,{to:"employment",className:"avatar avatar-sm mr-2"},o.a.createElement("img",{alt:"",src:a.image})),o.a.createElement("h2",{className:"table-avatar"},o.a.createElement(m.b,{to:"employment"},e)))},{title:"Leave Type",dataIndex:"Leave"},{title:"From",dataIndex:"From"},{title:"To",dataIndex:"To"},{title:"Remaining Days",dataIndex:"Days"},{title:"Status",dataIndex:"Status"}],dataSource:e,rowKey:e=>e.id,pagination:!1}))},f=t(39);a.default=()=>{var e=Object(f.c)();const[,a]=Object(i.useState)(!1),[t,l]=Object(i.useState)(""),[r,n]=Object(i.useState)("");var c,m,s;return o.a.createElement("div",{className:"page-wrapper"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"},o.a.createElement(E,null)),o.a.createElement("div",{className:"col-xl-9 col-lg-8  col-md-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"card-title mb-0"},"Apply Leaves")),o.a.createElement("div",{className:"card-body"},o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"From",o.a.createElement("span",{className:"text-danger"},"*")),o.a.createElement("input",{type:"date",className:"form-control datetimepicker",placeholder:"Select From Date",value:t,onChange:e=>{l(e.target.value)},min:(c=new Date,m=c.getFullYear(),s=c.getMonth()+1,c=c.getDate(),s=s<10?"0".concat(s):s,c=c<10?"0".concat(c):c,"".concat(m,"-").concat(s,"-").concat(c))}))),o.a.createElement("div",{className:"col-sm-6 leave-col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"To",o.a.createElement("span",{className:"text-danger"},"*")),o.a.createElement("input",{type:"date",className:"form-control datetimepicker",placeholder:"Select To Date",value:r,onChange:e=>{n(e.target.value)},min:t})))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Leave Type",o.a.createElement("span",{className:"text-danger"},"*")),o.a.createElement(g.a,{options:[{value:"Sick Leave",label:"Sick Leave"},{value:"Paid Leave",label:"Paid Leave"},{value:"Casual Leave",label:"Casual Leave"},{value:"Comp Off",label:"Comp Off"},{value:"Sabotical Leave",label:"Sabotical Leave"},{value:"Maternity Leave",label:"Maternity Leave"}]})))),t&&r&&t===r&&o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Half Day"),o.a.createElement(g.a,{options:[{value:"true",label:"Yes"},{value:"false",label:"No"}],onChange:e=>{a("true"===e.value)}}))),o.a.createElement("div",{className:"col-sm-6 leave-col"})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:"form-group mb-0"},o.a.createElement("label",null,"Reason"),o.a.createElement("textarea",{className:"form-control",rows:4,placeholder:"Enter Reason for Leave"})))),o.a.createElement("div",{className:"text-center"},o.a.createElement("a",{href:"#0",className:"btn btn-theme button-1 text-white ctm-border-radius mt-4"},"Apply"),o.a.createElement("a",{href:"#0",className:"btn btn-danger text-white ctm-border-radius mt-4"},"Cancel")))))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"card-title mb-0"},"Your Leave Status")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"employee-office-table"},o.a.createElement("div",{className:"table-responsive"},o.a.createElement(p,null)))))),("Manager"===e.role||"Recruiter Manager"===e.role||"Recruiter"===e.role||"Client Manager"===e.role)&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"card-title mb-0"},"Leaves To Approve")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"employee-office-table"},o.a.createElement("div",{className:"table-responsive"},o.a.createElement(y,null)))))),o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"card-title mb-0"},"Approved Leaves History")),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"employee-office-table"},o.a.createElement("div",{className:"table-responsive"},o.a.createElement(h,null))))))))))))}}}]);