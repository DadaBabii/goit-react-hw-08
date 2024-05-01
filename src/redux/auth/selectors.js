export const selectIsSignedIn = (state) => state.auth.isSignedin;
export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
