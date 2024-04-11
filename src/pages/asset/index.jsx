
import React, { useState } from 'react';
import Sidebar from './sidebar';
import CommonTable from '../../components/CommonTable';



const AssetPage = () => {

  const [data] = useState([
    {
      id: 1,
      assetType: 'Laptop',
      providedBy: 'Nucleus Teq',
      os: 'Windows 10',
      allocationDate: '2023-12-28',
      assetId: '1JC3214RT56',
      clientPartner: '-',
    },
    {
      id: 2,
      assetType: 'Laptop',
      providedBy: 'Client',
      os: 'Mac book ',
      allocationDate: '2023-12-28',
      assetId: 'A23FG4567YU',
      clientPartner: 'AAAI',
    },
  ]);

  const columns = [
    {
      title: 'Asset Type',
      dataIndex: 'assetType',
      key: 'assetType',

    },
    {
      title: 'Provided By',
      dataIndex: 'providedBy',
      key: 'providedBy',
    },
    {
      title: 'OS',
      dataIndex: 'os',
      key: 'os',
    },
    {
      title: 'Allocation Date',
      dataIndex: 'allocationDate',
      key: 'allocationDate',
    },
    {
      title: 'Assest Id',
      dataIndex: 'assetId',
      key: 'assetId',
    },
    {
      title: 'Client Partner',
      dataIndex: 'clientPartner',
      key: 'clientPartner',
    },
  ];

  return (

    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12">
            <CommonTable
              tableTitle={'Asset Table'}
              data={data}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssetPage;