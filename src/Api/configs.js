export const urls = {
  v1: `https://geoff-backend-production-c1d4.up.railway.app/user/api`, //dev
};
export const base_url = urls.v1;
export const endpoints = {
  auth: {
    login: '/login',
    logout: '/v1/user/logout',
    register: '/user-register',
  },
  salonListings: {
    nearest: '/home',
  },
  account: {
    profile: '/account',
    update: '/v1/user/update-profile',
    changePassword: '/v1/user/change-password',
  },
  passwordRecovery: {
    verifyEmail: '/v1/user/send/email',
    verifyCode: '/v1/user/verify-code',
    updatePassword: '/v1/user/set-password',
  },
  category: {
    home: '/v1/user/home-data',
    categories: '/v1/user/photographer-categories',
    categoryById: '/v1/user/category-photographer/',
    photographersByCategory: '/v1/user/photographers',
    popularPhotographers: '/v1/user/popular-photographers',
    serviceProviders: '/v1/user/service-providers',
    serviceProviderById: '/v1/user/service-providers/',
  },
  photographer: {
    becomePhotographer: '/v1/user/photographer-signup',
    orders: '/v1/user/my-orders',
    orderDetail: '/v1/user/my-orders/',
    paymentlogs: '/v1/user/payments',
    myRequests: '/v1/user/my-requests',
    updateOrderStatus: '/v1/user/accept-reject-my-orders',
  },
  wishlist: {
    remove: '/v1/user/remove-from-favorite/',
    add: '/v1/user/add-to-favorite/',
    get: '/v1/user/favorite-photographers',
  },
  miscellaneous: {
    contactUs: '/v1/user/contact-us',
    contents: '/v1/user/contents',
  },
  pets: {
    get: '/v1/pets',
    purchase: id => `/v1/pets/${id}/purchase`,
  },
  adoption: {
    sendOffer: '/v1/adopts',
    getOffers: '/v1/adopts',
    getOfferById: id => `/v1/adopts/${id}`,
    acceptOffer: (id, status) => `/v1/adopts/${id}/${status}`,
  },
  book: {
    bookSalon: '/book-service',
    postReview: '/v1/user/rating/',
    nearest: '/home',
    services: '/service-type',
    salonDetail: '/salon/',
    booking: '/appointments',
  },
  orders: {
    getOrders: '/v1/orders',
    createOrder: `/v1/orders/`,
    orderDetail: id => `/v1/orders/${id}`,
    cancelOrder: id => `/v1/orders/${id}`,
    review: '/v2/reviews',
  },
  notifications: {
    get: '/v1/user/notifications',
  },
  products: {
    get: '/v1/products',
    productDetail: id => `/v1/products/${id}`,
  },
  report: {
    report: '/v1/reports',
  },
  cart: {
    get: '/v1/cart',
    add: '/v1/cart',
    remove: id => `/v1/cart/${id}`,
  },
  shop: {
    get: '/v1/vendors',
    shopDetails: id => `/v1/vendors/${id}`,
    review: id => `/v1/products/${id}/reviews`,
  },
};
export default {
  endpoints: endpoints,
  base_url: base_url,
};
