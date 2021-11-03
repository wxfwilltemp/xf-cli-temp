/*
 * @Author: will
 * @Date: 2021-07-29 15:56:47
 * @LastEditTime: 2021-11-01 15:18:22
 * @LastEditors: will
 * @Description:
 */
declare module '*.png' {
  const content: any;
  export default content;
}
declare module '*.less';
declare module '*.svg';
declare module 'antd-mobile/*';
declare module 'react-pdf/*';
declare module 'react-read-pdf';
declare module 'pdfh5';
declare module 'react-router-config';
declare module 'xf-tools';

// google analytics interface
// type GAFieldsObject = {
//   eventCategory: string;
//   eventAction: string;
//   eventLabel?: string;
//   eventValue?: number;
//   nonInteraction?: boolean;
// };

// type Window = {
//   ga: (
//     command: 'send',
//     hitType: 'event' | 'pageview',
//     fieldsObject: GAFieldsObject | string,
//   ) => void;
//   reloadAuthorized: () => void;
//   wangEditor: any;
// };

declare let ga: () => void;

// declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

// declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

// declare const API_URL: string;
// declare module 'xlsx';
// declare module 'wangeditor';
// declare const window: Window & { wangEditor: any };
declare interface Window {
  wangEditor: any;
  Print: any;
  http: any;
}
// declare interface React {
//   request?: any;
// }

// declare const utils: any;
// declare const hooks: any;
