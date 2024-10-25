import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { singupStep1Data } from '../../selectors/shopkeeperSingupSelectors';
import { singupState } from '../../atoms/shopkeeperSingupAtom';

function Step1({ nextStep }) {
  const step1FormData = useRecoilValue(singupStep1Data);
  const [formData, setFormData] = useRecoilState(singupState);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        Email:
        <input type="email" name="email" value={step1FormData.email} onChange={handleChange} required className="border rounded-md w-full p-2 mt-1" />
      </label>

      <label className="block">
        Phone Number:
        <input type="tel" name="phoneNo" value={step1FormData.phoneNo} onChange={handleChange} required className="border rounded-md w-full p-2 mt-1" />
      </label>

      <label className="block">
        Password:
        <input type="password" name="password" value={step1FormData.password} onChange={handleChange} required className="border rounded-md w-full p-2 mt-1" />
      </label>

      <label className="block">
        Confirm Password:
        <input type="password" name="confirmPassword" value={step1FormData.confirmPassword} onChange={handleChange} required className="border rounded-md w-full p-2 mt-1" />
      </label>

      <button type="submit" className="w-full bg-[#075985] text-white py-2 rounded-md hover:bg-[#0e3f4f] transition duration-300">Next</button>
    </form>
  );
}

export default Step1;
