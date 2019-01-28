export class ConfigSite {
    SiteName: string;
    SiteUrl: string;
    WebApiUrl: string;
    Source: string;
    UseSSL: boolean;
}

export class LoginInfo {
    Email: string;
    Password: string;
}

export class SessionTokenModel {
    public UserId: number;
    public Token: string;
    public UserName: string;
}

export class RiskType {
    Id: number;
    Name: string;
}

export class CoverageType {
    Id: number;
    Name: string;
}

export class AuthModel {
    Email: string;
    Token1: string;
    Token2: string;
}

export class Insurance {
    Id: number;
    Name: string;
    Description: string;
    StartDate: string;
    TermInMonths: number;
    Price: number;
    RiskTypeId: number;
    RiskType: RiskType;
    Coverage: number;
    CoverageTypeId: number;
    CoverageType: CoverageType;
    Selected: boolean;
}

export class CustomerModel {
    Id: number;
    FirstName: string;
    LastName: string;
    Insurances: Insurance[];
}

export class BaseResponse {
    Acknowledgement: boolean;
    Message: string;
}

export class SignupModel {
    Name: string;
    Password: string;
}