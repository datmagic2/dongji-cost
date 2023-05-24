export const LOGIN_ACCESS_TOKEN = "login-access-token";

export const getToken = () => localStorage.getItem(LOGIN_ACCESS_TOKEN);

export const setToken = (token: string) =>
  localStorage.setItem(LOGIN_ACCESS_TOKEN, JSON.stringify(token));

export const clearToken = () => {
  localStorage.removeItem(LOGIN_ACCESS_TOKEN);
};
