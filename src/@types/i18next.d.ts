import Resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ns";
    resources: Resources;
  }
}
