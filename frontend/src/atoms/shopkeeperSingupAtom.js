import { atom } from 'recoil';

export const singupState = atom({
  key: 'formState',
  default: {
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    shopName: '',
    firstLine: '',
    secondLine: '',
    city: '',
    state: '',
    pincode: '',
  },
});
