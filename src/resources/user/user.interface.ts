interface User {
    name: string;
    email: string;
    password: string;
    role: string[];
    validPassword(): void;
}
export default User;
