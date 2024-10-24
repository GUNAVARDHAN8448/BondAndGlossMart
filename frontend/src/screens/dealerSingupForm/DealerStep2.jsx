import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dealerSingupStep2Data } from '../../selectors/dealerSingupSelectors';
import { dealerSingupState } from '../../atoms/dealerSingupAtom';

function DealerStep2({ prevStep, handleSubmit }) {


    const step2FormData = useRecoilValue(dealerSingupStep2Data);
    const [formData, setFormData] = useRecoilState(dealerSingupState);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>

            <label>Dealer Name:</label>
            <input type="text" name="dealerName" value={step2FormData.dealerName} onChange={handleChange} required />

            <label>Shop Name:</label>
            <input type="text" name="shopName" value={step2FormData.shopName} onChange={handleChange} required />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <label>Address Line 1:</label>
                    <input type="text" name="firstLine" value={formData.firstLine} onChange={handleChange} required />
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                    <label>Address Line 2:</label>
                    <input type="text" name="secondLine" value={formData.secondLine} onChange={handleChange} />
                </div>
            </div>

            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />

            <label>State:</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />

            <label>Pincode:</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DealerStep2;
