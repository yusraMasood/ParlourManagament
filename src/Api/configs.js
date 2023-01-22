import {getLocale} from '../Translations';

export const urls = {
  v1: `https://dev74.onlinetestingserver.com:8040/api/`,
};
export const base_url = urls.v1;
export const endpoints = {
  auth: {
    login: 'login',
    signup: 'register',
    recoverPassword: 'verify-email',
    verifyCode: 'verify-code',
    resetPassword: 'reset-password',
    updateProfile: 'update',
    getProfile: 'me',
    changePassword: 'change-password',
    logout: 'logout',
  },
  general: {
    home: 'home',
    contactUs: 'feedback',
    privacy: 'privacy',
    productId: 'view-product',
    products: 'products',
    notifications: 'notifications',
    addCart: 'add-to-cart',
    reminder: 'get-all-reminder',
    statusReminder: 'reminder-status',
    cart: 'cart-items',
    productPayment: 'order-place',
    deleteCart: 'delete-cart-product',
    editCart: 'edit-cart',
    mealPlanDetails: 'view-details',
  },
  video: {
    videos: 'vidoes',
    subscribe: 'subscribe',
  },
  session: {
    sessions: 'sessions',
    sessionById: 'session-by-id',
    payment: 'book-session',
    purchasedSession: 'view-my-sessions',
  },
  order: {
    orders: 'orders',
    viewOrderDetails: 'view-order',
  },
  water: {
    addWaterIntake: 'water-intake',
    waterDrank: 'add-water-intake',
    waterStats: 'water-log',
    editWater: 'edit-water',
  },
  weight: {
    addWeight: 'add-weight',
    setGoal: 'weight-goal',
  },
  workout: {
    addWorkout: 'add-workout',
    statWeight: 'weight-stat',
    exercise: 'circuit-time',
    editWorkout: 'edit-workout',
    doneWorkout: 'workout-done/8',
  },
  food: {
    addFoodIntake: 'add-food',
    foodDetails: 'food-intake',
  },
  subscription: {
    log: 'subscription-log',
    myMeal: 'my-meals',
    mealPlan: 'get-normal-plans',
    mealPlanPurchase: 'to-purchase',
    customizedPlan: 'customize-plan',
    customizePurchase: 'customize-meal-checkout',
  },
};
export default configs = {
  endpoints: endpoints,
  base_url: base_url,
};
