export const PARTNER_TYPES = {
  STORE_VENDOR: "store-vendor",
  DIET_COACH: "diet-coach",
  FITNESS: "fitness",
  RECIPE: "recipe",
};

export const FITNESS_ROLES = {
  TRAINER: "trainer",
  CENTER: "center",
  BOTH: "both",
};

export const API_ENDPOINTS = {
  SEND_OTP: "/api/auth/send-otp",
  VERIFY_OTP: "/api/auth/verify-otp",
  USER_PROFILE: "/api/user/profile",
  UPDATE_PROFILE: "/api/user/update",
};

export const DASHBOARD_ROUTES = {
  [PARTNER_TYPES.STORE_VENDOR]: "/dashboard/store",
  [PARTNER_TYPES.DIET_COACH]: "/dashboard/diet",
  [PARTNER_TYPES.FITNESS]: {
    [FITNESS_ROLES.TRAINER]: "/dashboard/trainer",
    [FITNESS_ROLES.CENTER]: "/dashboard/center",
    [FITNESS_ROLES.BOTH]: "/dashboard/trainer-center",
  },
  [PARTNER_TYPES.RECIPE]: "/dashboard/recipe",
};
