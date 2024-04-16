import React from 'react'
import Header from '../../../components/layout/Header';
import SideBar from '../../../components/layout/SideBar';
import { getCurrentUserDetails } from '../../../utility/authentication/auth';
import { HEADER_ASSET } from '../../../assets/common/constants';
import CommonTable from '../../../components/uiElements/CommonTable';
import ButtonComponent from '../../../components/uiElements/ButtonComponent';
import { useNavigate } from 'react-router-dom'

export default function AssignAssetTable() {

    const navigate = useNavigate();

    const dataSource = [
        {
            assetId: 'AS-001',
            assetType: 'Laptop',
            assetOs: 'Windows 10',
            assetProvidedBy: 'IT Department',
            provider: 'Dell',
            workLocation: 'Raipur',
            workType: 'Regular',
        },
        {
            assetId: 'AS-002',
            assetType: 'Monitor',
            assetOs: 'N/A',
            assetProvidedBy: 'IT Department',
            provider: 'HP',
            workLocation: 'Indore',
            workType: 'Remote',
        },
        {
            assetId: 'AS-003',
            assetType: 'Mobile Phone',
            assetOs: 'iOS 14',
            assetProvidedBy: 'IT Department',
            provider: 'Apple',
            workLocation: 'Bangalore',
            workType: 'Regular',
        },
        {
            assetId: 'AS-004',
            assetType: 'Desktop',
            assetOs: 'Windows 10',
            assetProvidedBy: 'IT Department',
            provider: 'Lenovo',
            workLocation: 'Indore',
            workType: 'Remote',
        },
        {
            assetId: 'AS-005',
            assetType: 'Tablet',
            assetOs: 'Android 11',
            assetProvidedBy: 'IT Department',
            provider: 'Samsung',
            workLocation: 'Bangalore',
            workType: 'Regular',
        },
    ];


    const columns = [
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <ButtonComponent
                    buttonText={"Assign"}
                    className={"btn btn-theme button-1 text-white ctm-border-radius"}
                    onClickHandler={() => handleAssignAsset(record)}
                />
            ),
        },
        {
            title: "Asset Id",
            dataIndex: "assetId",
            key: "assetId",
        },
        {
            title: "Asset Type",
            dataIndex: "assetType",
            key: "assetType",
        },
        {
            title: "Asset OS",
            dataIndex: "assetOs",
            key: "assetOs",
        },
        {
            title: "Asset Provided By",
            dataIndex: "assetProvidedBy",
            key: "assetProvidedBy",
        },
        {
            title: "Provider",
            dataIndex: "provider",
            key: "provider",
        },
        {
            title: "Work Location",
            dataIndex: "workLocation",
            key: "workLocation",
        },
        {
            title: "Work Type",
            dataIndex: "workType",
            key: "workType",
        },
    ];

    const handleAssignAsset = (record) => {
        navigate("/assign-asset", { state: { assetData: record } });
    };
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
                                currentPageName={"Asset Inventory"}
                            />
                        </div>
                        <div className='col-xl-9 col-lg-8 col-md-12'>
                            <CommonTable
                                tableTitle={"Assign Asset"}
                                columns={columns}
                                data={dataSource}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
