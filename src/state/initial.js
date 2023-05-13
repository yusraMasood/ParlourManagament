const general = {
  state: {
    globalLoadingEnabled: false,
    inlineLoadingEnabled: false,
  },
  name: 'general',
};
const auth = {
  state: {
    token: null,
  },
  name: 'auth',
};
const account = {
  state: {
    profile: {},
    credentials: {
      email: null,
      password: null,
      rememberMe: false
    },
    location: {
      coordinate: {
        latitiude: 0,
        longitude: 0,
      },
      address: '',
      city: '',
      country: '',
    },
  },
  name: 'account',
};
const category = {
  state: {
    categories: []
  },
  name: 'category',
}
const miscellaneous = {
  state: {
    aboutUs: null,
  },
  name: 'miscellaneous',
};
const bookPhotographer = {
  state: {},
  name: 'bookPhotographer',
};
const cart = {
  state: {
    cart: [],
  },
  name: 'cart',
};
const wishlist = {
  state: {
    wishlist: [],
  },
  name: 'wishlist',
};

const order = {
  state: {},
  name: 'order',
};
const notification = {
  state: {},
  name: 'notification',
};
const initial = {
  general: general,
  auth,
  account,
  miscellaneous,
  category,
  bookPhotographer,
  order,
  cart,
  wishlist,
  notification,
};
export default initial;
