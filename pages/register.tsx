import Story from '@/components/Section/Story';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { registerType } from '@/common/types/auth';
import { registerUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hook';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('harus diisi'),
  city: Yup.string().required('harus diisi'),
  email: Yup.string().email('email is not valid').required('harus diisi'),
  password: Yup.string()
    .min(8, 'password minimal 8 karakter')
    .required('harus diisi'),
  password_confirmation: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('harus diisi')
          .oneOf([Yup.ref('password')], 'password tidak sama')
      : field
  ),
  role: Yup.string().required('harus diisi'),
});

const Register: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleRegister = async (values: registerType) => {
    try {
      const resultAction = await dispatch(registerUser(values));
      if (registerUser.fulfilled.match(resultAction)) {
        if (resultAction.payload.error) {
          const { error } = resultAction.payload;
          if (error.message == 'Validation errors') {
            error.data.name ? toast.error(error.data.name[0]) : null;
            error.data.city ? toast.error(error.data.city[0]) : null;
            error.data.email ? toast.error(error.data.email[0]) : null;
          }
        } else {
          router.push('/login');
        }
      }
    } catch (err) {
      console.error('Failed to register: ', err);
      router.push('/register');
    }
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: handleRegister,
  });
  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>
      <section className='mt-14'>
        <div className='w-full md:w-10/12 mx-auto'>
          <div className='max-w-full mb-8'>
            <h1 className='font-bold text-xl md:text-3xl'>Daftar Sekarang</h1>
            <p className='mt-6 font-normal text-sm md:text-base'>
              Mari bergabung bersama Kerabat AGROS Indonesia lainnya.
            </p>
          </div>
          {/* Form Login */}
          <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-row justify-center gap-2'>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium text-gray-700'
                  >
                    Nama Lengkap Kerabat
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                    placeholder='Masukan nama'
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='city'
                    className='text-sm font-medium text-gray-700'
                  >
                    Asal Kota
                  </label>
                  <input
                    id='city'
                    name='city'
                    type='text'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                    placeholder='Masukan asal kota'
                    onChange={formik.handleChange}
                  />
                  {formik.errors.city && formik.touched.city ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.city}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-row justify-center gap-2'>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                    placeholder='Masukan email'
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='role'
                    className='text-sm font-medium text-gray-700'
                  >
                    Role
                  </label>
                  <select
                    id='role'
                    name='role'
                    onChange={formik.handleChange}
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                  >
                    <option>Pilih Role</option>
                    <option value='super admin'>Super Admin</option>
                    <option value='customer'>Customer</option>
                  </select>
                  {formik.errors.role && formik.touched.role ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.role}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-row justify-start gap-2'>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='password'
                    className='text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                    placeholder='Masukan password'
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='password_confirmation'
                    className='text-sm font-medium text-gray-700'
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    id='password_confirmation'
                    name='password_confirmation'
                    type='password'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                    placeholder='Masukan konfirmasi password'
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password_confirmation &&
                  formik.touched.password_confirmation ? (
                    <div className='text-red-500 font-normal text-xs'>
                      {formik.errors.password_confirmation}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                {/* button full w-full */}
                <button
                  type='submit'
                  className='bg-primary text-white hover:bg-opacity-70 hover:shadow-sm active:bg-opacity-100 rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4 w-full text-left font-bold text-lg'
                >
                  Gabung Sekarang
                </button>
                <p className='mt-6 font-normal text-sm lg:text-base'>
                  Sudah memiliki Akun?{' '}
                  <Link href='/login' className='text-primary'>
                    Masuk sekarang
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Story />
      <div className='mb-[60px]'></div>
    </>
  );
};

export default Register;
