export class RegistrationResponse {
    UserName: string;
    ApiKey: string;
    UserId: number;
}

export class RegistrationRequest {
    Username: string;
    Password: string;
    ConfirmPassword: string;
    Application: string;
}