import { selector } from 'recoil';
import { dealerSingupState } from '../atoms/dealerSingupAtom';


export const dealerSingupStep1Data = selector({
    key: 'dealerSingupStep1Data',
    get: ({ get }) => {
        const singupform = get(dealerSingupState);
        return {
            email: singupform.email,
            phoneNo: singupform.phoneNo,
            password: singupform.password,
            confirmPassword: singupform.confirmPassword,
        };
    },
});


export const dealerSingupStep2Data = selector({
    key: 'dealerSingupStep2Data',
    get: ({ get }) => {
        const singupform = get(dealerSingupState);
        return {
            dealerName: singupform.dealerName,
            shopName: singupform.shopName,
            firstLine: singupform.addressLine1,
            secondLine: singupform.addressLine2,
            city: singupform.city,
            state: singupform.state,
            pincode: singupform.pincode,
        };
    },
});
