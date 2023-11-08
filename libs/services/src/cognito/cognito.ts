import {
  authenticateUser,
  confirmPassword,
  confirmRegistration,
  forgotPassword,
  getUser,
  resendConfirmationCode,
  signUp,
  UserGroup,
} from './lib';

export const cognito = {
  signUp,
  confirmRegistration,
  resendConfirmationCode,
  forgotPassword,
  confirmPassword,
  authenticateUser,
  getUser,
  UserGroup,
};
