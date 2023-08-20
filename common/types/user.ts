enum role {
  superAdmin = 'super admin',
  customer = 'customer',
}

export type user = {
  id: number;
  name: string;
  email: string;
  city: string;
  role: role;
};
