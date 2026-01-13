export const ROUTES = {
    ADMIN: '/admin',
    LOGIN: '/login',
    // Add other routes as needed
};

export const getLayoutConfig = (pathname) => {
    // List of routes that should not show the layout
    const noLayoutRoutes = [ROUTES.ADMIN, ROUTES.LOGIN];

    // Check if current path starts with any of the no-layout routes
    return !noLayoutRoutes.some(route => pathname?.startsWith(route));
}; 