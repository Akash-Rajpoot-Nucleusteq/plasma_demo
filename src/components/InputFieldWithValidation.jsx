
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputFieldWithValidation({
    type,
    name,
    placeholder,
    onBlur,
    onChange,
    error,
    required
}) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='form-group'>
            {type === 'password' ? (
                <div className="input-group">
                    <input
                        className='form-control'
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        name={name}
                        onBlur={onBlur}
                        onChange={onChange}
                        required={required}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
            ) : (
                <input
                    className='form-control'
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                />
            )}
            {error && (
                <span className='text-danger small'>
                    {error}
                </span>
            )}
        </div>
    );
};
