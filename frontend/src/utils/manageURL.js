// import { SERVER } from "../../../backend/app/configs";

export const SERVER_URL = "http://localhost:80/api";

export const AUTH_SIGNUP_URL = `${SERVER_URL}/auth/signup`;
export const AUTH_LOGIN_URL = `${SERVER_URL}/auth/login`;
export const PROFILE_URL = `${SERVER_URL}/auth/profile`;
export const AUTH_LOGIN_WITH_TOKEN_URL = `${SERVER_URL}/auth/loginwithtoken`;

export const GET_USER_URL = `${SERVER_URL}/auth/getinfo`;

export const PAYMENT_HISTORY = `${SERVER_URL}/stripe/history`;
export const PAY_HANDLE = `${SERVER_URL}/stripe/subscript`;