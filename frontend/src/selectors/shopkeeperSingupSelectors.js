import { selector } from 'recoil';
import { singupState } from '../atoms/shopkeeperSingupAtom';


export const singupStep1Data = selector({
  key: 'singupStep1Data',
  get: ({ get }) => {
    const singupform = get(singupState);
    return {
      email: singupform.email,
      phoneNo: singupform.phoneNo,
      password: singupform.password,
      confirmPassword: singupform.confirmPassword,
    };
  },
});


export const singupStep2Data = selector({
  key: 'singupStep2Data',
  get: ({ get }) => {
    const singupform = get(singupState);
    return {
      firstName: singupform.firstName,
      lastName: singupform.lastName,
      shopName: singupform.shopName,
      firstLine: singupform.addressLine1,
      secondLine: singupform.addressLine2,
      city: singupform.city,
      state: singupform.state,
      pincode: singupform.pincode,
    };
  },
});
