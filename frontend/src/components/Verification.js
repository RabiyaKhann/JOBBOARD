import React, { useState } from 'react';

const Verification = () => {
  const [emailCode, setEmailCode] = useState('');
  const [mobileCode, setMobileCode] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailVerify = () => {
    if (emailCode === '') {
      setErrorMessage('Please enter an email verification code.');
      return;
    }

    // Simulating API call for email verification
    if (emailCode === '123456') {
      setEmailVerified(true);
      setErrorMessage('');
    } else {
      setEmailVerified(false);
      setErrorMessage('Invalid email verification code.');
    }
  };

  const handleMobileVerify = () => {
    if (mobileCode === '') {
      setErrorMessage('Please enter a mobile verification code.');
      return;
    }

    // Simulating API call for mobile verification
    if (mobileCode === '654321') {
      setMobileVerified(true);
      setErrorMessage('');
    } else {
      setMobileVerified(false);
      setErrorMessage('Invalid mobile verification code.');
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <input
        type="text"
        placeholder="Enter Email Code"
        value={emailCode}
        onChange={(e) => setEmailCode(e.target.value)}
      />
      <button onClick={handleEmailVerify}>Verify Email</button>
      {emailVerified ? <p>Email verified successfully!</p> : null}

      <h2>Mobile Verification</h2>
      <input
        type="text"
        placeholder="Enter Mobile Code"
        value={mobileCode}
        onChange={(e) => setMobileCode(e.target.value)}
      />
      <button onClick={handleMobileVerify}>Verify Mobile</button>
      {mobileVerified ? <p>Mobile verified successfully!</p> : null}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Verification;
