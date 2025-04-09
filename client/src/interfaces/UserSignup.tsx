export interface UserSignup {
    username: string;
    email: string;
    password: string;
    usertype: 'admin' | 'seller' | 'buyer';
}
