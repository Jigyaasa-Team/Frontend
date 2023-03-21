import React, { useState } from 'react';
import LoginGoogleButton from '../googleLogin/LoginGoogleButton';
import './GoogleAccountLogin.css';

const GoogleAccountLogin = () => {
    return (
        <>
            <input
                className="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
            />
            <label htmlFor="modal-btn">Create Form</label>

            <div className="modal">
                <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                    onClick={() => {
                        document.getElementById('modal-btn').checked = false;
                    }}
                    className="cross"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '40px',
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        padding: '5px 15px',
                        borderRadius: '10px',
                    }}
                >
                    <p
                        style={{
                            fontSize: '15px',
                        }}
                    >
                        ✖
                    </p>
                </div>
                <div className="modal-wrap">
                    <p>Click below to login from your google account.</p>
                    <br />
                    <br />
                    <span className="googleLoginButton">
                        <LoginGoogleButton />
                    </span>
                </div>
            </div>
        </>
    );
};

export default GoogleAccountLogin;
