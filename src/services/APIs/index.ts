export const API = process.env.API ?? 'https://luxuriant-drawer-production.up.railway.app';
console.log('API', API);
export * from './authentication';
export * from './e-wallet';
export * from './upload';
export * from './lecture';
//
//export const API = "https://luxuriant-drawer-production.up.railway.app"; // development API
//export const API = "http://196.221.166.103:8080";
//export const API = "http://192.168.1.2:4000";
