// src/components/SignUpForm/SignUpForm.js
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { singupState } from '../../atoms/shopkeeperSingupAtom';
import Step1 from './Step1';
import Step2 from './Step2';



function SignupForm() {
  const [step, setStep] = useState(1);
  const formData = useRecoilValue(singupState);

  function nextStep() {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setStep(step + 1);
  };

  function prevStep() {
    setStep(step - 1);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/shopkeeper/singup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Network error:', error);

    }
  };

  return (
    <div>
      <div>
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 prevStep={prevStep} handleSubmit={handleSubmit} />}
      </div>
    </div>
  );
};

export default SignupForm
