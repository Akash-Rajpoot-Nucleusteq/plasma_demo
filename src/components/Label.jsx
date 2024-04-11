import React from 'react'

export default function Label({ className, labelText }) {
    return (
        <label className={className}>{labelText}</label>
    )
}
