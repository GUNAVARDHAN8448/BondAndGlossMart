import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { dealerSingupState } from '../../atoms/dealerSingupAtom';
import { dealerSingupStep1Data } from '../../selectors/dealerSingupSelectors';


function DealerStep1({ nextStep }) {


    const step1FormData = useRecoilValue(dealerSingupStep1Data);
    const [formData, setFormData] = useRecoilState(dealerSingupState);


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        nextStep();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={step1FormData.email} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input type="tel" name="phoneNo" value={step1FormData.phoneNo} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={step1FormData.password} onChange={handleChange} required />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={step1FormData.confirmPassword} onChange={handleChange} required />

                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default DealerStep1