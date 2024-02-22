
import React from 'react';

// export function InformationCenter({ title, information }) {
//     return (
//         <div className="col-xl-6 col-lg-12 d-flex">
//             <div className="card flex-fill today-list shadow-sm">
//                 <div className="card-header">
//                     <h4 className="card-title mb-0 d-inline-block">{title}</h4>
//                 </div>
//                 <div className="card-body recent-activ">
//                     <div className="recent-comment">
//                         {information.map((item, index, array) => (
//                             <div key={index}>
//                                 <div className="dash-card text-primary">
//                                     <div className="dash-card-container">
//                                         <div className="dash-card-icon text-pink">
//                                             <i className="lnr lnr-envelope"></i>
//                                         </div>
//                                         <div className="dash-card-content">
//                                             <h6 className="mb-0">{item.message}</h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {index !== array.length - 1 && <hr />}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export function ActionCenter({ title, actionCenterData }) {
//     return (
//         <div className="col-xl-6 col-lg-12 d-flex">
//             <div className="card flex-fill team-lead shadow-sm">
//                 <div className="card-header">
//                     <h4 className="card-title mb-0 d-inline-block">{title}</h4>
//                 </div>
//                 <div className="card-body recent-activ">
//                     <div className="recent-comment">
//                         {actionCenterData.map((item, index, array) => (
//                             <div key={index}>
//                                 <div className="media mb-3 dash-card text-primary">
//                                     <div className="dash-card-container">
//                                         <div className="col-8 pr-0 dash-card-content">
//                                             <h6 className="m-0">{item.message}</h6>
//                                         </div>
//                                         <div className="col-4 pl-0 dash-card-content">
//                                             <a href="#0">
//                                                 <h6 className="m-0"><strong>{item.status}</strong></h6>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {index !== array.length - 1 && <hr />}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function CommunicationCenter({ title, communicationCenterData }) {
//     return (
//         <div className="col-xl-6 col-lg-12 d-flex">
//             <div className="card recent-acti flex-fill shadow-sm">
//                 <div className="card-header">
//                     <h4 className="card-title mb-0 d-inline-block">{title}</h4>
//                 </div>
//                 <div className="card-body recent-activ admin-activ">
//                     <div className="recent-comment">
//                         {communicationCenterData.map((item, index, array) => (
//                             <div key={index}>
//                                 <div className="notice-board">
//                                     <div className="table-img">
//                                         <div className="e-avatar mr-3">
//                                             <img className="img-fluid" src={item.profilePhoto} alt="Maria Cotton" /></div>
//                                     </div>
//                                     <div className="notice-body">
//                                         <h6 className="mb-0">{item.message}</h6>
//                                     </div>
//                                 </div>
//                                 {index !== array.length - 1 && <hr />}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function TodayCard({ title, todayData }) {
    return (
        <div className="col-xl-6 col-lg-12 d-flex">
            <div className="card shadow-sm flex-fill">
                <div className="card-header align-items-center">
                    <h4 className="card-title mb-0 d-inline-block">{title}</h4>
                </div>
                <div className="card-body recent-activ">
                    <div className="recent-comment">
                        {todayData.map((item, index, array) => (
                            <div key={index}>
                                <a href='#0' className="dash-card text-dark">
                                    <div className="dash-card-container">
                                        <div className="dash-card-icon text-pink">
                                            {item.icon == 1 && <i className="fa fa-home" aria-hidden="true"></i>}
                                            {item.icon == 2 && <i className="fa fa-bed" aria-hidden="true"></i>}
                                            {item.icon == 3 && <i className="fa fa-child" aria-hidden="true"></i>}
                                            {item.icon == 4 && <i className="fa fa-suitcase"></i>}
                                            {item.icon == 5 && <i className="fa fa-home" aria-hidden="true"></i>}
                                        </div>
                                        <div className="dash-card-content">
                                            <h6 className="mb-0">{item.message}</h6>
                                        </div>
                                        {item.profile && <div className="dash-card-avatars">
                                            <div className="e-avatar"><img className="img-fluid" src={item.profile} alt="John Gibbs" /></div>
                                        </div>}
                                    </div>
                                </a>
                                {index !== array.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CardSection({ title, cardData, cardType }) {
    return (
        <div className="col-xl-6 col-lg-12 d-flex">
            <div className={`card shadow-sm flex-fill ${getCardClass(cardType)}`}>
                <div className="card-header align-items-center">
                    <h4 className="card-title mb-0 d-inline-block">{title}</h4>
                </div>
                <div className="card-body recent-activ">
                    <div className="recent-comment">
                        {cardData.map((item, index, array) => (
                            <div key={index}>
                                <div className="dash-card text-primary">
                                    <div className="dash-card-container">

                                        {cardType === 'Information' &&
                                            <div className="dash-card-icon text-pink">
                                                <i className="lnr lnr-envelope"></i>
                                            </div>}

                                        {item.profilePhoto && <div className="table-img">
                                            <div className="e-avatar mr-3">
                                                <img className="img-fluid" src={item.profilePhoto} alt="Maria Cotton" /></div>
                                        </div>}

                                        <div className={`dash-card-content ${item.status ? 'col-8 pr-0' : ''}`}>
                                            <h6 className="mb-0">{item.message}</h6>
                                        </div>

                                        {item.status && <div className="col-4 pl-0 dash-card-content">
                                            <a href="#0">
                                                <h6 className="m-0"><strong>{item.status}</strong></h6>
                                            </a>
                                        </div>}

                                    </div>
                                </div>
                                {index !== array.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

function getCardClass(cardType) {
    switch (cardType) {
        case 'Information':
            return 'today-list';
        case 'Action':
            return 'team-lead';
        case 'Communication':
            return 'recent-acti';
        case 'Today':
            return '';
        default:
            return '';
    }
}