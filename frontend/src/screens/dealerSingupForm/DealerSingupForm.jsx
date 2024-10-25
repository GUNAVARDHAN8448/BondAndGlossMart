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
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#0e3f4f] to-[#075985]">
            <div className="bg-[#b2ebf2] rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="flex mb-4">
                    <button
                        className={`flex-1 text-lg font-bold py-3 rounded-l-lg transition duration-300 bg-[#b2ebf2] text-[#2D3748] hover:bg-[#075985] hover:text-white`}>
                        Sign In
                    </button>
                    <button
                        className={`flex-1 text-lg font-bold py-3 rounded-r-lg transition duration-300 bg-[#075985] text-white' : 'bg-transparent text-white hover:bg-[#0759] '}`}>
                        Sign Up
                    </button>
                </div>
                <div>
                    {step === 1 && <DealerStep1 nextStep={nextStep} />}
                    {step === 2 && <DealerStep2 prevStep={prevStep} handleSubmit={handleSubmit} />}
                </div>
            </div>
        </div>
    );
};

export default DealerSingupForm;
