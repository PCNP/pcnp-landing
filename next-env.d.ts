/// <reference types="next" />
/// <reference types="next/types/global" />


// TODO remove after https://github.com/vercel/next.js/pull/21785/
declare namespace webpack {
  export type Compiler = any
  export type Plugin = any
}
declare module 'next/dist/compiled/webpack/webpack' {
  export const webpack: any
}