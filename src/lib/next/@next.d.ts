import { CookieSerializeOptions } from "cookie";

export interface Cookie {
  name?: string;
  value?: any;
  options?: CookieSerializeOptions
}
