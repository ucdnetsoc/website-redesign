interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
