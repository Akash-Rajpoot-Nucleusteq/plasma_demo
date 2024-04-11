import React, { useState } from 'react';
import Sidebar from '../sidebar';
import CommonTable from '../../../components/CommonTable';
import CommonModal from '../../../components/CommonModal';

const index = () => {

    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const vendorDataWithVendorId = [
        {
            vendorId: 'VN012',
            companyName: "ABC Corporation",
            taxId: "123-45-6789",
            einNumber: "EIN1234567",
            firstName: 'Ashish',
            middleName: 'Kumar',
            lastName: 'Sahu',
            phoneNumber: '19685254367',
            addressLine1: 'Om Nagar',
            addressLine2: '',
            city: 'Rochester City',
            state: 'New York',
            country: 'United States',
            stateOfIncorporation: "California"
        },
        {
            vendorId: 'VN013',
            companyName: "XYZ Enterprises",
            taxId: "987-65-4321",
            einNumber: "EIN9876543",
            firstName: 'Akash',
            middleName: '',
            lastName: 'Rajpoot',
            phoneNumber: '376984568765445',
            addressLine1: 'Shantoshi nagar',
            addressLine2: '',
            city: 'Caselles',
            state: 'Canillo',
            country: 'Andorra',
            stateOfIncorporation: "New York"
        },
        {
            vendorId: 'VN014',
            companyName: "Global Solutions Inc.",
            taxId: "456-78-9123",
            einNumber: "EIN4567891",
            firstName: 'Diksha',
            middleName: '',
            lastName: 'Mandal',
            phoneNumber: '549845687654',
            addressLine1: 'Shankar nagar',
            addressLine2: '',
            city: 'Salta Villa San Lorenzo',
            state: 'Salta',
            country: 'Argentina',
            stateOfIncorporation: "Texas"
        },
        {
            vendorId: 'VN015',
            companyName: "Acme Corporation",
            taxId: "321-54-9876",
            einNumber: "EIN3215498",
            firstName: 'Abhay',
            middleName: 'Kumar',
            lastName: 'Gupta',
            phoneNumber: '919845687654',
            addressLine1: 'Vip road',
            addressLine2: '',
            city: 'Raipur',
            state: 'Haryana',
            country: 'India',
            stateOfIncorporation: "Illiofficeis"
        },
        {
            vendorId: 'VN016',
            companyName: "Inofficevative Solutions Ltd.",
            taxId: "789-12-3456",
            einNumber: "EIN7891234",
            firstName: 'Vivek',
            middleName: '',
            lastName: 'Dubey',
            phoneNumber: '36545676876',
            addressLine1: 'Om Nagar',
            addressLine2: '',
            city: 'Budapest',
            state: 'Pest',
            country: 'Hungary',
            stateOfIncorporation: "Florida"
        },
        {
            vendorId: 'VN017',
            companyName: "Tech Inofficevations LLC",
            taxId: "567-89-0123",
            einNumber: "EIN5678901",
            firstName: 'Krishna',
            middleName: 'Kumar',
            lastName: 'Bharatiya',
            phoneNumber: '3545675544',
            addressLine1: 'Gyan Nagar',
            addressLine2: '',
            city: 'Sogn og Fjordane',
            state: 'Su urnes',
            country: 'Iceland',
            stateOfIncorporation: "New Jersey"
        },
        {
            vendorId: 'VN018',
            companyName: "Elite Services Corp.",
            taxId: "234-56-7890",
            einNumber: "EIN2345678",
            firstName: 'Hemant',
            middleName: 'Kumar',
            lastName: 'Bandi',
            phoneNumber: '986576786567',
            addressLine1: 'Om Nagar',
            addressLine2: '',
            city: 'Ethofficegraphy',
            state: 'Fars',
            country: 'Iran',
            stateOfIncorporation: "California"
        },
        {
            vendorId: 'VN019',
            companyName: "Dynamic Solutions Ltd.",
            taxId: "678-90-1234",
            einNumber: "EIN6789012",
            firstName: 'Himanshu',
            middleName: '',
            lastName: 'Dhoke',
            phoneNumber: '919845687654',
            addressLine1: 'Rajendra nagar',
            addressLine2: '',
            city: 'Bhilai',
            state: 'Chhattisgarh',
            country: 'India',
            stateOfIncorporation: "Pennsylvania"
        }
    ]
    const modalColumnsForVendor = [
        {
            title: 'Vendor ID',
            dataIndex: 'vendorId',
            key: 'vendorId',
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'tax ID',
            dataIndex: 'taxId',
            key: 'taxId',
        },
        {
            title: 'EIN Number',
            dataIndex: 'einNumber',
            key: 'taxId',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Address Line 1',
            dataIndex: 'addressLine1',
            key: 'addressLine1',
        },
        {
            title: 'Address Line 2',
            dataIndex: 'addressLine2',
            key: 'addressLine2',
        },
        {
            title: 'State Of Incorporation',
            dataIndex: 'stateOfIncorporation',
            key: 'stateOfIncorporation',
        },

    ]
    const columnsForVendorWithoutActionButton = [
        {
            title: 'Vendor ID',
            dataIndex: 'vendorId',
            key: 'vendorId',
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'tax ID',
            dataIndex: 'taxId',
            key: 'taxId',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
    ]

    function handleCloseModal() {
        setShowModal(false);
    }

    function setingModalData(data) {
        setModalData({
            ...modalData,
            ...data
        })
        setShowModal(true);
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <Sidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8  col-md-12">
                            <CommonTable
                                data={vendorDataWithVendorId}
                                columns={columnsForVendorWithoutActionButton}
                                tableTitle={'Vendor Onboarding History'}
                                rowClickable={true}
                                settingModalDataFunction={setingModalData}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showModal &&
                <CommonModal
                    data={modalData}
                    modalHeading={'Employee Details'}
                    fieldNames={modalColumnsForVendor}
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                />
            }
        </>
    );
};

export default index;
