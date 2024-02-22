import React from "react";

const LeaveDetailsInCircle = ({ title, ringRadius, circumference, dashOffset, remainingLeave, consumedLeave, additionalInfo, totalLeave }) => {
    return (
        <div className="card ctm-border-radius shadow-sm mt-4">
            <div className="card-body py-4">
                <h5 className="card-title">{title}</h5>

                <div className="ring-container">
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
                            {remainingLeave}
                        </text>
                    </svg>
                </div>
                <p className="leaves-text">
                    Consumed: {consumedLeave} | Remaining: {remainingLeave}
                </p>
                {additionalInfo && <p className="leaves-text">{additionalInfo}</p>}
                <p className="leaves-text">Total Leave: {totalLeave}</p>
            </div>
        </div>
    );
};

export default LeaveDetailsInCircle;
