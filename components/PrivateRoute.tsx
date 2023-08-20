/** @format */

import { useRouter } from 'next/router';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }

  return children;
};

export default PrivateRoute;
