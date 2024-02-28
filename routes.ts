/**
 * An array of routes that are acceccible to the public
 * These route do not require authentication
 */
export const publicRoutes = [
  "/"
];


/**
 * An array of routes that are user for authentication
 * These route will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error"
]

/**
 * The prefix for api authentication routes
 * Routes are start with this prefix used for api authentication purpoeses
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redict path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
