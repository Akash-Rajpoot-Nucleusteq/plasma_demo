(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{646:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var a=t(0),n=t.n(a);function l(e){let{data:a,columns:t,tableTitle:l,showSN:m}=e;a.forEach(e=>{e.hasOwnProperty("total")&&(e.total=Object.values(e).filter(e=>"number"==typeof e).reduce((e,a)=>e+a,0))});const c={position:"sticky",right:0,backgroundColor:"#fff",zIndex:0};return n.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",{className:"card-title mb-0"},l)),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-hover table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,m&&n.a.createElement("th",null,"S. N."),t.map((e,a)=>n.a.createElement("th",{key:e.key,style:"Total"===e.title?c:{}},e.title)))),n.a.createElement("tbody",null,a.map((a,e)=>n.a.createElement("tr",{key:a.id},m&&n.a.createElement("td",null,e+1),t.map(e=>n.a.createElement("td",{key:e.key,style:"Total"===e.title?c:{}},"fullName"===e.dataIndex?"".concat(a.firstName," ").concat(a.lastName):a[e.dataIndex]||"-")))))),0===a.length&&n.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},"No Data"))))}},957:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return l});var o=t(0),r=t.n(o),s=t(181),i=t(646),d=t(13),u=t(70),p=t(37),y=t(608);function l(){const[a,t]=Object(o.useState)(""),[l,m]=Object(o.useState)("");var e=[{employeeId:"N0001",firstName:"Akash",lastName:"Rajput",account:"Amex",payRate:"4",employmentStatus:"Active"},{employeeId:"N0002",firstName:"Amit",lastName:"Sharma",account:"NuoData",payRate:"5",employmentStatus:"Active"},{employeeId:"N0003",firstName:"Neha",lastName:"Singh",account:"PetSmart",payRate:"6",employmentStatus:"Active"},{employeeId:"N0004",firstName:"Rahul",lastName:"Verma",account:"PetSmart",payRate:"7",employmentStatus:"Active"},{employeeId:"N0005",firstName:"Priya",lastName:"Gupta",account:"NuoData",payRate:"8",employmentStatus:"Notice Period"},{employeeId:"N0006",firstName:"Vikas",lastName:"Kumar",account:"Amex",payRate:"9",employmentStatus:"Active"},{employeeId:"N0007",firstName:"Sonia",lastName:"Mishra",account:"PetSmart",payRate:"10",employmentStatus:"Active"},{employeeId:"N0008",firstName:"Rohit",lastName:"Choudhary",account:"NuoData",payRate:"11",employmentStatus:"Active"},{employeeId:"N0009",firstName:"Shreya",lastName:"Yadav",account:"Amex",payRate:"12",employmentStatus:"Active",role:"Vendor"},{employeeId:"N0010",firstName:"Vivek",lastName:"Thakur",account:"PetSmart",payRate:"13",employmentStatus:"Sabbatical",role:"Vendor"}],c=[...new Set(e.map(e=>e.account))],n=[...new Set(e.map(e=>e.employmentStatus))],e=e.filter(e=>!(a&&e.account!==a||l&&e.employmentStatus!==l));return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"},r.a.createElement(s.a,null)),r.a.createElement("div",{className:"col-xl-9 col-lg-8  col-md-12"},r.a.createElement("div",{className:"card shadow-sm ctm-border-radius"},r.a.createElement("div",{className:"card-body align-center"},r.a.createElement("div",{className:"tab-content",id:"v-pills-tabContent"},r.a.createElement("div",{className:"tab-pane fade show active",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab"}),r.a.createElement("div",{className:"employee-office-table"},r.a.createElement("div",{className:"col-xl-9 col-lg-8  col-md-12 mb-3"},r.a.createElement(d.a,null,r.a.createElement(u.a,{className:"align-items-center"},r.a.createElement(p.a,{md:"2"},r.a.createElement(y.a,{className:"form-control text-white",type:"button"},"Vendor")),r.a.createElement(p.a,{md:"4"},r.a.createElement(d.a.Control,{as:"select",onChange:e=>{e=e.target.value;console.log("Account value is: ",e),t(e)}},r.a.createElement("option",{value:""},"Select Account"),c.map((e,a)=>r.a.createElement("option",{key:a,value:e},e)))),r.a.createElement(p.a,{md:"4"},r.a.createElement(d.a.Control,{as:"select",onChange:e=>{e=e.target.value;console.log("Status value is: ",e),m(e)}},r.a.createElement("option",{value:""},"Select Status"),n.map((e,a)=>r.a.createElement("option",{key:a,value:e},e))))))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement(i.a,{columns:[{title:"Employee Id",dataIndex:"employeeId",key:"employeeId"},{title:"Employee Name",dataIndex:"fullName",key:"fullName"},{title:"Account",dataIndex:"account",key:"account"},{title:"Pay Rate (USD / H)",dataIndex:"payRate",key:"payRate"},{title:"Employment Status",dataIndex:"employmentStatus",key:"employmentStatus"}],data:e,tableTitle:"Billing Table"}))))))))))}}}]);