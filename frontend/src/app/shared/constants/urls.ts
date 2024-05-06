const BASE_URL = 'http://localhost:5000';

export const FILMS_URL = BASE_URL + '/api/films';
export const FILMS_TAGS_URL = FILMS_URL+ '/tags';
export const FILMS_BY_SEARCH_URL = FILMS_URL+ '/search/';
export const FILMS_BY_TAG_URL = FILMS_URL+ '/tag/';
export const FILMS_BY_ID_URL = FILMS_URL+ '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';