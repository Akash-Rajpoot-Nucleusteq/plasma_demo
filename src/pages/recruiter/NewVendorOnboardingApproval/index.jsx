import React, { Component } from 'react'
import Sidebar from '../sidebar'
import CommonTable from '../../../components/CommonTable'
import ButtonComponent from '../../../components/ButtonComponent'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export default function index() {

    const vendorData = [
        {
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
            stateOfIncorpration: "California"
        },
        {
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
            stateOfIncorpration: "New York"
        },
        {
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
            stateOfIncorpration: "Texas"
        },
        {
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
            stateOfIncorpration: "Illiofficeis"
        },
        {
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
            stateOfIncorpration: "Florida"
        },
        {
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
            stateOfIncorpration: "New Jersey"
        },
        {
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
            stateOfIncorpration: "California"
        },
        {
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
            stateOfIncorpration: "Pennsylvania"
        }
    ]
    const columnsForVendor = [
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <ButtonComponent
                    buttonText={
                        <Link to={{
                            pathname: 'new-vendor-onboarding-approval-form',
                            state: { employeeData: record }
                        }}
                            className={'text-white'}
                        >
                            {'Approve / Reject'}
                        </Link>
                    }
                    className={'btn btn-theme button-1 text-white ctm-border-radius color-white'}
                />
            ),
        },
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


    return (
        <div className="page-wrapper" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <Sidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8  col-md-12">
                        <CommonTable
                            data={vendorData}
                            columns={columnsForVendor}
                            tableTitle={'New Vendor Onboarding Approval'}
                            rowClickable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

