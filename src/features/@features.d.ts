export declare type FeaturesStorageItem = {
  latest?: string;
  lang?: string;
}

export interface FeaturesStorage {
  current?: FeaturesStorageItem,
  prev?: FeaturesStorageItem,
}
