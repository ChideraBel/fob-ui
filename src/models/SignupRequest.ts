export interface SignupRequest {
    email: string,
    password: string,
    fullName?: string,
    address?: string,
    dob?: string,
    employment?: string,
    industry?: string,
    nationality?: string,
    phoneNumber?: string
}