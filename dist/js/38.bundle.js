(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{968:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var r=t(0),l=t.n(r),n=(t(640),t(623)),o=t(781),s=t(641),m=t(669);function c(a){const[,t]=Object(r.useState)({}),[e,c]=Object(r.useState)({});return Object(r.useEffect)(()=>{var e=(a.location.state||"")["employeeData"];t(e),Object(m.a)(s.c+e.id).then(e=>{console.log("onboarding approval form Response:",e.data),c(e.data)}).catch(e=>{console.error("Error:",e)})},[]),l.a.createElement("div",{className:"page-wrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"},l.a.createElement(n.a,null)),l.a.createElement("div",{className:"col-xl-9 col-lg-8  col-md-12"},l.a.createElement("div",{className:"card shadow-sm ctm-border-radius"},l.a.createElement("div",{className:"card-header align-center"},l.a.createElement("h4",{className:"card-title mb-0"},"Approve / Reject Onboarding")),l.a.createElement("div",{className:"ctm-border-radius p-4"},l.a.createElement(o.a,{employeeData:e,parentComponentName:"onboardingApprovalFormPage"})))))))}}}]);