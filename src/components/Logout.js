import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '377138841456-1n5tnk1f6d8taetaglppc2jpncd6q0v2.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;