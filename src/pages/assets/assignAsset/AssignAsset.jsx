import React, { useEffect, useState } from "react";
import SideBar from "../../../components/layout/SideBar";
import AssignAssetForm from "./AssignAssetForm.jsx";
import { getCurrentUserDetails } from "../../../utility/authentication/auth.js";
import { HEADER_ASSET } from "../../../assets/common/constants";
import Header from "../../../components/layout/Header.jsx";
import { useLocation } from 'react-router';

// export default function AssignAsset(props) {
//   // const { assetData } = {};
//   const assetData = {
//     assetType: "Laptop",
//     assetOs: "Windows",
//     assetId: "L1234EEf",
//     assetProvidedBy: "NucleusTeq",
//   };
//   return (
//     <>
//       <Header />
//       <div className='page-wrapper'>
//         <div className='container-fluid'>
//           <div className='row'>
//             <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
//               <SideBar
//                 userRole={getCurrentUserDetails().role}
//                 headerName={HEADER_ASSET}
//                 currentPageName={"Assign Asset"}
//               />
//             </div>
//             <div className='col-xl-9 col-lg-8  col-md-12'>
//               <div className='card ctm-border-radius shadow-sm'>
//                 <div className='card-header'>
//                   <h4 className='card-title doc d-inline-block mb-0'>
//                     Assign Asset To Employee
//                   </h4>
//                 </div>
//                 <div className='card-body doc-boby'>
//                   <div className='card shadow-none'>
//                     <AssignAssetForm assetData={assetData} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




export default function AssignAsset(props) {

  const location = useLocation();
  const [assetData, setAssetData] = useState({});

  useEffect(() => {
    const { assetData } = location.state ? location.state : '';
    setAssetData(assetData);
  })
  return (
    <>
      <Header />
      <div className='page-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
              <SideBar
                userRole={getCurrentUserDetails().role}
                headerName={HEADER_ASSET}
                currentPageName={"Assign Asset"}
              />
            </div>
            <div className='col-xl-9 col-lg-8  col-md-12'>
              <div className='card ctm-border-radius shadow-sm'>
                <div className='card-header'>
                  <h4 className='card-title doc d-inline-block mb-0'>
                    Assign Asset To Employee
                  </h4>
                </div>
                <div className='card-body doc-boby'>
                  <div className='card shadow-none'>
                    <AssignAssetForm assetData={assetData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
