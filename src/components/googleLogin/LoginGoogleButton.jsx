import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginGoogleButton = ({ checkLoginAndCreateForm }) => {
    const onSuccess = (res) => {
        localStorage.setItem(
            'userImage',
            JSON.stringify(res.profileObj.imageUrl),
        );
        document.querySelector('.__imgBx > img').src = res.profileObj.imageUrl;
        // document.querySelector(
        //     '.__user > h3',
        // ).innerText = `Welcome, ${res.profileObj.givenName}`;
        checkLoginAndCreateForm();
    };

    const onFailure = (res) => {
        console.log('Login failed res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId=" 282391974322-87evpe1qamta10q0uuskfqesibdvrtb0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    );
};

export default LoginGoogleButton;
