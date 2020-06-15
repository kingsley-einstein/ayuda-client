export interface AuthModel {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export interface AuthState {
  data: AuthModel;
  error?: any;
}

export const initialAuthState: AuthState = {
  data: null,
  error: null
};
