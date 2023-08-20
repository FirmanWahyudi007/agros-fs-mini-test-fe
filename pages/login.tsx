import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginType } from '@/common/types/auth';
import { loginUser, setIsLogin } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hook';
import Story from '@/components/Section/Story';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('email tidak valid').required('harus diisi'),
  password: Yup.string()
    .min(8, 'password minimal 8 karakter')
    .required('harus diisi'),
});

const Login: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogin = async (values: loginType) => {
    try {
      const resultAction = await dispatch(loginUser(values));
      if (loginUser.fulfilled.match(resultAction)) {
        if (resultAction.payload.error) {
          console.log('resultAction.payload', resultAction.payload);
        } else {
          router.push('/');
          dispatch(setIsLogin(true));
        }
      }
    } catch (err) {
      console.error('Failed to login: ', err);
      router.push('/login');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
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
            <h1 className='font-bold text-xl md:text-3xl'>Masuk Sekarang</h1>
            <p className='mt-6 font-normal text-sm md:text-base'>
              Masuk dan nikmati fitur kami
            </p>
          </div>
          {/* Form Login */}
          <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-row justify-center gap-2'>
                <div className='w-full lg:w-1/2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
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
                    htmlFor='password'
                    className='text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <input
                    id='password'
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
              </div>
              <div className='w-full lg:w-1/2'>
                {/* button full w-full */}
                <button
                  type='submit'
                  className='bg-primary text-white hover:bg-opacity-70 hover:shadow-sm active:bg-opacity-100 rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4 w-full text-left font-bold text-lg'
                >
                  Masuk Sekarang
                </button>
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

export default Login;
