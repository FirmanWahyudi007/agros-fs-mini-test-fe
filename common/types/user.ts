enum role {
  superAdmin = 'super admin',
  customer = 'customer',
}

export type user = {
  name: string;
  email: string;
  city: string;
  role: role;
};
