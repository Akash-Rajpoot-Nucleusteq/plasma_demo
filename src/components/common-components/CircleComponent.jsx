import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CircleComponent({ title, totalLeave, leavesRemaining, leavesConsumed }) {

    const consumptionPercentage = (leavesConsumed / totalLeave) * 100;
    const ringRadius = 40;
    const circumference = 2 * Math.PI * ringRadius;
    const dashOffset = circumference - (consumptionPercentage / 100) * circumference;

    return (
        <div className="card ctm-border-radius shadow-sm mt-4 text-center card-body py-4">
            <div className="card-header">
                <h4 className="card-title mb-0 d-inline-block">{title}</h4>
                <Link to="leave" className="d-inline-block float-right text-primary"><i className="fa fa-suitcase"></i></Link>
            </div>

            <div className="ring-container card-body text-center">
                <svg height="100" width="100" className="ring-svg">
                    <circle
                        cx="50"
                        cy="50"
                        r={ringRadius}
                        fill="transparent"
                        stroke="#55c57a"
                        strokeWidth="8"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={ringRadius}
                        fill="transparent"
                        stroke="#f0f0f0"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                    />
                    <text x="50" y="50" textAnchor="middle" fill="#000" fontSize="16">
                        {leavesRemaining}
                    </text>
                </svg>
            </div>
            <p className="leaves-text">Consumed: {leavesConsumed} | Remaining: {leavesRemaining}</p>
            <p className="leaves-text">Total Leaves: {totalLeave}</p>
        </div>
    )
}
