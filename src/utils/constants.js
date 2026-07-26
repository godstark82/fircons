export const ROUTES = {
    ADMIN: '/admin',
    LOGIN: '/login',
    USER: '/user',
};

export const getLayoutConfig = (pathname) => {
    // Hide site chrome on admin, login, and user panel routes
    const noLayoutRoutes = [ROUTES.ADMIN, ROUTES.LOGIN, ROUTES.USER];
    return !noLayoutRoutes.some(route => pathname?.startsWith(route));
}; 