export const ENV: 'dev'|'prod' = 'dev';
export const HOST = ENV === 'dev' ? 'api/' : 'http://localhost:8080/api/';
