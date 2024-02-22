(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{623:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var a=t(0),r=t.n(a),n=t(622);class o extends a.Component{constructor(e){super(e),this.state={storedData:JSON.parse(localStorage.getItem("data"))||{}}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card ctm-border-radius shadow-sm"},r.a.createElement("div",{className:"card-body py-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mr-auto text-left"},r.a.createElement("div",{className:"custom-search input-group"},r.a.createElement("div",{className:"custom-breadcrumb"},r.a.createElement("ol",{className:"breadcrumb no-bg-color d-inline-block p-0 m-0 mb-2"},r.a.createElement("li",{className:"breadcrumb-item d-inline-block"},r.a.createElement(n.Link,{to:"employee-dashboard",className:"text-dark"},"Home")),r.a.createElement("li",{className:"breadcrumb-item d-inline-block active"},"Recruiter")),r.a.createElement("h4",{className:"text-dark"},"Recruiter"))))))),r.a.createElement("div",{className:"quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card"},r.a.createElement("div",{className:"card-body"},"Recruiter"===this.state.storedData.role&&r.a.createElement("div",{className:"flex-column list-group",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},r.a.createElement(n.NavLink,{to:"/recruiter/recent-onboarding",className:"list-group-item text-center button-6",activeClassName:"active"},"Recent Onboarding"),r.a.createElement(n.NavLink,{to:"/recruiter/new-onboarding",className:"list-group-item text-center button-6"},"New Employee Onboarding"),r.a.createElement(n.NavLink,{to:"/recruiter/new-vendor-onboarding",className:"list-group-item text-center button-6"},"New Vendor Onboarding")),"Recruiter Manager"===this.state.storedData.role&&r.a.createElement("div",{className:"flex-column list-group",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},r.a.createElement(n.NavLink,{to:"/recruiter-manager/recent-onboarding",className:"list-group-item text-center button-6",activeClassName:"active"},"Recent Onboarding"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/new-onboarding",className:"list-group-item text-center button-6"},"New Employee Onboarding"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/onboarding-approval",className:"list-group-item text-center button-6 ".concat("/recruiter-manager/onboarding-approval-form"===location.pathname?"active":"")},"Onboarding Approval"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/approval-history",className:"list-group-item text-center button-6"},"Approval History"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/new-vendor-onboarding",className:"list-group-item text-center button-6"},"New Vendor Onboarding"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/new-vendor-onboarding-approval",className:"list-group-item text-center button-6 ".concat("/recruiter-manager/new-vendor-onboarding-approval-form"===location.pathname?"active":"")},"Vendor Onboarding Approval"),r.a.createElement(n.NavLink,{to:"/recruiter-manager/vendor-onboarding-history",className:"list-group-item text-center button-6"},"Vendor Onboarding History")))))}}},699:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var x=t(0),L=t.n(x),S=t(13),V=t(70),A=t(37),M=t(667),j=t(74),a=t(698),k=t.n(a),T=(t(640),t(120)),D=t(668),F=t(182);function r(e){let{employeeData:a,parentComponentName:t}=e;const r=Object(F.useHistory)(),[n,o]=Object(x.useState)({companyName:"",taxId:"",einNumber:"",firstName:"",middleName:"",lastName:"",phoneNumber:"",addressLine1:"",addressLine2:"",city:"",state:"",country:"",stateOfIncorpration:""}),[l,c]=Object(x.useState)({errorCompanyName:"",errorTaxId:"",errorEinNumber:"",errorFirstName:"",errorLastName:"",errorPhoneNumber:"",errorAddressLine1:"",errorCity:"",errorState:"",errorCountry:"",errorStateOfIncorpration:"",errorW9Copy:"",errorGoodStandingCertificate:"",errorCertificateOfInsurance:"",errorVoidCheque:""});var[e,,]=Object(x.useState)(M.b);const[m,i]=Object(x.useState)([]),[s,d]=Object(x.useState)({showAttachmentModal:!1,document:null}),[u,p]=Object(x.useState)({showAttachmentModal:!1,document:null}),[b,N]=Object(x.useState)({showAttachmentModal:!1,document:null}),[h,E]=Object(x.useState)({showAttachmentModal:!1,document:null});function g(){c({...l,errorW9Copy:""}),d(e=>({...e,showAttachmentModal:!0}))}function y(){c({...l,errorGoodStandingCertificate:""}),p(e=>({...e,showAttachmentModal:!0}))}function f(){c({...l,errorCertificateOfInsurance:""}),N(e=>({...e,showAttachmentModal:!0}))}function v(){c({...l,errorVoidCheque:""}),E(e=>({...e,showAttachmentModal:!0}))}Object(x.useEffect)(()=>{var e;a&&(console.log(a),e=a.country?Object(M.c)(a.country):[],i(e),o({...n,companyName:a.companyName||"",taxId:a.taxId||"",einNumber:a.einNumber||"",firstName:a.firstName||"",middleName:a.middleName||"",lastName:a.lastName||"",phoneNumber:a.phoneNumber||"",addressLine1:a.addressLine1||"",addressLine2:a.addressLine2||"",city:a.city||"",state:a.state||"",country:a.country||"",stateOfIncorpration:a.stateOfIncorpration||""}))},[a]);const C=e=>{return"error"+(e.charAt(0).toUpperCase()+e.slice(1))};function I(e,t){fetch(e).then(e=>e.blob()).then(e=>{var e=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(e=>console.error("Error downloading document:",e))}const O=e=>{const{id:a,value:t}=e.target,r=C(a);o(e=>({...e,[a]:t})),c(e=>({...e,[r]:""}))};function w(){return!(j.a.isObjectEmpty(s)&&j.a.isObjectEmpty(u)&&j.a.isObjectEmpty(b)&&j.a.isObjectEmpty(h))}return L.a.createElement(L.a.Fragment,null,L.a.createElement(S.a,{onSubmit:async function(e){e.preventDefault(),await new Promise(e=>{c({...l,errorCompanyName:j.a.isEmpty(n.companyName),errorTaxId:j.a.isEmpty(n.taxId),errorEinNumber:j.a.isEmpty(n.einNumber),errorFirstName:j.a.isEmpty(n.firstName),errorLastName:j.a.isEmpty(n.lastName),errorPhoneNumber:j.a.isEmpty(n.phoneNumber.toString()),errorAddressLine1:j.a.isEmpty(n.addressLine1),errorState:j.a.isEmpty(n.state),errorCountry:j.a.isEmpty(n.country),errorCity:j.a.isEmpty(n.city),errorStateOfIncorpration:j.a.isEmpty(n.stateOfIncorpration),errorW9Copy:j.a.isObjectEmpty(s)?"Select Attachment":"",errorGoodStandingCertificate:j.a.isObjectEmpty(u)?"Select Attachment":"",errorCertificateOfInsurance:j.a.isObjectEmpty(b)?"Select Attachment":"",errorVoidCheque:j.a.isObjectEmpty(h)?"Select Attachment":""}),e()}),e=function(e){const{middleName:a,addressLine2:t,...r}=e;return r}(n),j.a.isFormErrorEmpty(l)&&w()?(console.log("Succed vendor from approval"),console.log("Form Data:",n),console.log("error data: ",l)):(console.error("Failed data error: ",l),console.log("form data: ",n),console.log("newOnboardingMandatoryFieldData data: ",e),console.log("InputValidator.isFormErrorEmpty(formError): ",j.a.isFormErrorEmpty(l)),console.log("is mandatory field empty: ",!j.a.isObjectEmpty(e)),console.log("is document field empty: ",w()))}},L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"companyName",labelText:"Company Name",isCompulsary:!0,placeholder:"Enter Company Name",value:n.companyName,handleInputChange:O,errorMessage:l.errorCompanyName}),L.a.createElement(T.e,{mdValue:6,controlId:"taxId",labelText:"Tax ID",isCompulsary:!0,placeholder:"Enter Tax Id",value:n.taxId,handleInputChange:O,errorMessage:l.errorTaxId})),L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"einNumber",labelText:"EIN Number",isCompulsary:!0,placeholder:"Enter EIN Number",value:n.einNumber,handleInputChange:O,errorMessage:l.errorEinNumber})),L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"firstName",labelText:"First Name",isCompulsary:!0,placeholder:"Enter First Name",value:n.firstName,handleInputChange:O,errorMessage:l.errorFirstName}),L.a.createElement(T.e,{mdValue:6,controlId:"middleName",labelText:"Middle Name",placeholder:"Enter Middle Name",value:n.middleName,handleInputChange:O})),L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"lastName",labelText:"Last Name",isCompulsary:!0,placeholder:"Enter Last Name",value:n.lastName,handleInputChange:O,errorMessage:l.errorLastName}),L.a.createElement(A.a,{md:6},L.a.createElement(S.a.Group,{controlId:"phoneNumber"},L.a.createElement(S.a.Label,null,"Phone Number",L.a.createElement("span",{className:"text-danger"},"*")),L.a.createElement(k.a,{country:"in",value:n.phoneNumber||"",onChange:e=>O({target:{id:"phoneNumber",value:e}}),inputProps:{required:!0},className:"form-control",inputClass:"border-0",buttonClass:"border-0 bg-transparent"}),l.errorPhoneNumber&&L.a.createElement("span",{className:"text-danger small"},l.errorPhoneNumber)))),L.a.createElement(V.a,null,L.a.createElement(T.d,{mdValue:6,controlId:"country",labelText:"Country",isCompulsary:!0,showDefaultOption:!0,value:n.country,optionList:e,handleInputChange:e=>{const{id:a,value:t}=e.target,r=C(a);o(e=>({...e,[a]:t})),c(e=>({...e,[r]:""})),i(Object(M.c)(t))},errorMessage:l.errorCountry}),L.a.createElement(T.d,{mdValue:6,controlId:"state",labelText:"State",isCompulsary:!0,showDefaultOption:!0,value:n.state,optionList:m,handleInputChange:O,errorMessage:l.errorState})),L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"city",labelText:"City",isCompulsary:!0,placeholder:"Enter City",value:n.city,handleInputChange:O,errorMessage:l.errorCity}),L.a.createElement(T.e,{mdValue:6,controlId:"addressLine1",labelText:"Address Line 1",isCompulsary:!0,placeholder:"Enter Address Line 1",value:n.addressLine1,handleInputChange:O,errorMessage:l.errorAddressLine1})),L.a.createElement(V.a,null,L.a.createElement(T.e,{mdValue:6,controlId:"addressLine2",labelText:"Address Line 2",placeholder:"Enter Address Line 2",value:n.addressLine2,handleInputChange:O}),L.a.createElement(T.e,{mdValue:6,controlId:"stateOfIncorpration",labelText:"State Of Incorpration",isCompulsary:!0,placeholder:"State Of Incorpration",value:n.stateOfIncorpration,handleInputChange:O,errorMessage:l.errorStateOfIncorpration})),L.a.createElement(V.a,null,L.a.createElement(T.b,{mdValue:6,controlId:"w9Copy",labelText:"W9 Copy (pdf only)",isCompulsary:!0,documentState:s,handleUpload:g,handleView:g,handleRemove:function(){d(e=>({...e,showAttachmentModal:!1,document:null}))},fileName:"W9Copy",downloadDocument:I,errorMessage:l.errorW9Copy}),L.a.createElement(T.b,{mdValue:6,controlId:"goodStandingCertificate",labelText:"Good Standing Certificate (pdf only)",isCompulsary:!0,documentState:u,handleUpload:y,handleView:y,handleRemove:function(){p(e=>({...e,showAttachmentModal:!1,document:null}))},fileName:"GoodStandingCertificate",downloadDocument:I,errorMessage:l.errorGoodStandingCertificate}),L.a.createElement(T.b,{mdValue:6,controlId:"certificateOfInsurance",labelText:"Certificate Of Insurance (pdf only)",isCompulsary:!0,documentState:b,handleUpload:f,handleView:f,handleRemove:function(){N(e=>({...e,showAttachmentModal:!1,document:null}))},fileName:"CertificateOfInsurance",downloadDocument:I,errorMessage:l.errorCertificateOfInsurance}),L.a.createElement(T.b,{mdValue:6,controlId:"voidCheck",labelText:"Void Check (pdf only)",isCompulsary:!0,documentState:h,handleUpload:v,handleView:v,handleRemove:function(){E(e=>({...e,showAttachmentModal:!1,document:null}))},fileName:"VoidCheck",downloadDocument:I,errorMessage:l.errorVoidCheque})),"newOnboarding"===t&&L.a.createElement("div",{className:"d-flex justify-content-between align-items-center mt-2 mb-2 mr-2 float-right"},L.a.createElement(T.g,{buttonText:"Onboard"})),"onboardingApprovalFormPage"===t&&L.a.createElement("div",null,L.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},L.a.createElement("div",{className:"d-flex"},L.a.createElement(T.g,{buttonText:"Approve"}),L.a.createElement(T.f,{buttonText:"Reject"})),L.a.createElement("div",{className:"mt-2 mb-2 mr-2"},L.a.createElement(T.a,{buttonText:"Back",onClick:function(){r.push("/recruiter-manager/new-vendor-onboarding-approval")}})))),L.a.createElement(D.b,{data:s,setData:d,heading:"Upload W9 Copy"}),L.a.createElement(D.b,{data:u,setData:p,heading:"Upload Good Standing Certificate"}),L.a.createElement(D.b,{data:b,setData:N,heading:"Upload Certificate Of Insurance"}),L.a.createElement(D.b,{data:h,setData:E,heading:"Upload Void Cheque"})))}},971:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return r});var n=t(0),o=t.n(n),l=(t(640),t(623)),c=t(699),m=t(182);function r(e){const a=Object(m.useLocation)(),[t,r]=Object(n.useState)({});return Object(n.useEffect)(()=>{var e=(a.state||"")["employeeData"];r(e)}),o.a.createElement("div",{className:"page-wrapper"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-3 col-lg-4 col-md-12 theiaStickySidebar"},o.a.createElement(l.a,null)),o.a.createElement("div",{className:"col-xl-9 col-lg-8  col-md-12"},o.a.createElement("div",{className:"card shadow-sm ctm-border-radius"},o.a.createElement("div",{className:"card-header align-center"},o.a.createElement("h4",{className:"card-title mb-0"},"Approve Vendor Onboarding")),o.a.createElement("div",{className:"ctm-border-radius p-4"},o.a.createElement(c.a,{employeeData:t,parentComponentName:"onboardingApprovalFormPage"})))))))}}}]);