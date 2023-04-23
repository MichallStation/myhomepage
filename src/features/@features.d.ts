import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { NextRequest } from "next/server";

// export declare type StorageContextItem = {
//   raw?: string;
//   obj?: object;
// };

// export interface StorageContext {
//   cookies?: StorageContextItem;
//   authorization: StorageContextItem;
// }

export interface FeaturesStorage {
  lang?: string;
  cookie?: string;
}
