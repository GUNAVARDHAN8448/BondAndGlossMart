// src/components/DealerSingupForm/DealerSingupForm.js
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dealerSingupState } from '../../atoms/dealerSingupAtom';
import DealerStep1 from './DealerStep1';
import DealerStep2 from './DealerStep2';




function DealerSingupForm() {
    const [step, setStep] = useState(1);
    const formData = useRecoilValue(dealerSingupState);

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
            const response = await fetch("http://localhost:3000/api/v1/dealer/singup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Network error:', error);

        }
    };

    return (
        <div>
            <div>
                {step === 1 && <DealerStep1 nextStep={nextStep} />}
                {step === 2 && <DealerStep2 prevStep={prevStep} handleSubmit={handleSubmit} />}
            </div>
        </div>
    );
};

export default DealerSingupForm
