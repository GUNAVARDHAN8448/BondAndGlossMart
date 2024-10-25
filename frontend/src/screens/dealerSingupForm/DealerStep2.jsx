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
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
                Dealer Name:
                <input
                    type="text"
                    name="dealerName"
                    value={step2FormData.dealerName}
                    onChange={handleChange}
                    required
                    className="border rounded-md w-full p-2 mt-1"
                />
            </label>

            <label className="block">
                Shop Name:
                <input
                    type="text"
                    name="shopName"
                    value={step2FormData.shopName}
                    onChange={handleChange}
                    required
                    className="border rounded-md w-full p-2 mt-1"
                />
            </label>

            <div className="flex space-x-4">
                <div className="flex-1">
                    <label className="block">
                        Address Line 1:
                        <input
                            type="text"
                            name="firstLine"
                            value={formData.firstLine}
                            onChange={handleChange}
                            required
                            className="border rounded-md w-full p-2 mt-1"
                        />
                    </label>
                </div>
                <div className="flex-1">
                    <label className="block">
                        Address Line 2:
                        <input
                            type="text"
                            name="secondLine"
                            value={formData.secondLine}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 mt-1"
                        />
                    </label>
                </div>
            </div>

            <label className="block">
                City:
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="border rounded-md w-full p-2 mt-1"
                />
            </label>

            <label className="block">
                State:
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="border rounded-md w-full p-2 mt-1"
                />
            </label>

            <label className="block">
                Pincode:
                <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="border rounded-md w-full p-2 mt-1"
                />
            </label>

            <div className="flex justify-between">
                <button type="button" className="w-1/4 p-{2} bg-[#075985] text-white py-2 rounded-md hover:bg-[#0e3f4f] transition duration-300" onClick={prevStep}>Previous</button>
                <button type="submit" className="w-1/4 p-{2} bg-[#075985] text-white py-2 rounded-md hover:bg-[#0e3f4f] transition duration-300">Submit</button>
            </div>
        </form>
    );
};

export default DealerStep2;
