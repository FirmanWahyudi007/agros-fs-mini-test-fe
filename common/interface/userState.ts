import { user } from '@/common/types/user';

export interface userState {
  loading: boolean;
  error: any;
  users: user[];
}
