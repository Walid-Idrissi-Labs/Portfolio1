import {Resend} from "resend";
export const resend = new Resend(process.env.RESEND_FIRST_API_KEY)