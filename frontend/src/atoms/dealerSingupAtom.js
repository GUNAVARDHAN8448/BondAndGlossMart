import { atom } from 'recoil';

export const dealerSingupState = atom({
  key: 'dealerFormState',
  default: {
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
    dealerName: '',
    shopName: '',
    firstLine: '',
    secondLine: '',
    city: '',
    state: '',
    pincode: '',
  },
});
