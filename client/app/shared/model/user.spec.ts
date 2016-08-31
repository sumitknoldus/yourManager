import {User} from "./user";

describe('User', () => {
  it('has username', () => {
    let user:User = {
    firstName: 'Akshay',
    lastName: '',
    middleName: '',
    email: '',
    phone: 11,
    empId: '',
    gender: '',
    password: ''
  };
    expect(user.firstName).toEqual('Akshay')
  });
});