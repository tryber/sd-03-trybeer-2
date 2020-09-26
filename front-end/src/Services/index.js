export const TOKEN_KEY = 'token';
export const CART = 'cart';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
export const logout = () => localStorage.removeItem(TOKEN_KEY);
export const removeCart = () => localStorage.removeItem(CART);
export const updateCart = (cart) => localStorage.setItem(CART, JSON.stringify(cart));
export const getCart = () => JSON.parse(localStorage.getItem(CART));
