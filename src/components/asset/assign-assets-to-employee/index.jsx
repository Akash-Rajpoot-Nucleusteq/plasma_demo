import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar'
import { Button, Col, Form, Row } from 'react-bootstrap'
import InputValidator from '../../../validations/InputValidator'
import AssignAssetForm from './assignAssetForm'

export default function index(props) {

    // const assetData = {
    //     assetType: 'Laptop',
    //     assetOs: 'Windows',
    //     assetId: 'L1234EEf',
    //     assetProvidedBy: 'NucleusTeq'
    // }
    // const { assetData } = props.location.state || {};
    const { assetData } = props.location.state || {};
 
    useEffect(() => { 
        console.log('from index assetdata is : ', assetData);
    }, [assetData])
    return (
        <div className='page-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-12 theiaStickySidebar'>
                        <Sidebar />
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

    )
}
