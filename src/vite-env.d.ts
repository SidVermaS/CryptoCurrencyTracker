/// <reference types="vite/client" />

// IntelliSense for user defined env variables that are prefixed with VITE_
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
