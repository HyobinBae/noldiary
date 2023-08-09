export const BASE_URL = "http://192.168.50.50:3000";
export const API = {
  kakaoAuth: "https://kauth.kakao.com/oauth/token",
  naverAuth: "https://nid.naver.com/oauth2.0/token",
  signInKakao: `${BASE_URL}/auth/login/kakao`,
  signInNaver: `${BASE_URL}/auth/login/naver`,
  diary: `${BASE_URL}/diary`,
  curations: `${BASE_URL}/curations`,
  likemap: `${BASE_URL}/likemap`,
  write: `${BASE_URL}/write`,
};
