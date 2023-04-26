export declare type FeaturesStorageItem = {
  latest?: string;
  lang?: string;
  cookie?: string;
};

export interface FeaturesStorage {
  current?: FeaturesStorageItem;
  prev?: FeaturesStorageItem;
}
