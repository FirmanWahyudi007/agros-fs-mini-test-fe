import { user } from '@/common/types/user';

//create interface authState
export interface AuthState {
  user: user | null;
  status: 'idle' | 'loading' | 'failed';
  error: any;
  token: string | undefined;
  isLogin: boolean;
}
