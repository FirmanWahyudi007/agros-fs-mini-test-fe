//create interface authState
export interface AuthState {
  user: any;
  status: 'idle' | 'loading' | 'failed';
  error: any;
  token: string | undefined;
  isLogin: boolean;
}
