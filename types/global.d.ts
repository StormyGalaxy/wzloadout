interface Window {
  dataLayer: any[];
  gtag?: (...args: any[]) => void;
}

export type sclSettings = {
  [key: string]: string | number | boolean;
};
