// media config
export const MD_TABLET_AND_MOBILE_WIDTH = 960;

// server config
export const ENV: 'dev'|'prod' = 'dev';
export const HOST = ENV === 'dev' ? 'api/' : 'http://localhost:8080/api/';
