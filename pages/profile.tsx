import Story from '@/components/Section/Story';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { profileUpdate, profileUser } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import PrivateRoute from '@/components/PrivateRoute';
import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import { updateProfile } from '@/common/types/user';
import { fetchUsers } from '@/redux/features/userSlice';

const Profile: NextPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  useEffect(() => {
    if (token) {
      dispatch(profileUser());
    }
  }, [dispatch]);

  const handleUpdate = async (values: updateProfile) => {
    try {
      console.log('values', values);
      const resultAction = await dispatch(profileUpdate(values));
      if (profileUpdate.fulfilled.match(resultAction)) {
        dispatch(fetchUsers());
        if (resultAction.payload.error) {
          const { error } = resultAction.payload;
          if (error.message == 'Validation errors') {
            error.data.name ? toast.error(error.data.name[0]) : null;
            error.data.city ? toast.error(error.data.city[0]) : null;
          }
        }
      }
    } catch (err) {
      console.error('Failed to update profile: ', err);
    }
  };

  const initialValues = {
    name: user?.name,
    city: user?.city,
    email: user?.email,
    password: '',
  };

  return (
    <>
      <Head>
        <title>Agros</title>
        <meta name='description' content='Agros Mini Test Fullstack' />
      </Head>
      <PrivateRoute>
        <section className='mt-14'>
          <div className='w-full md:w-10/12 mx-auto bg-white rounded-xl  shadow-lg py-7 px-11'>
            <div className=' mb-8'>
              <h1 className='font-bold text-xl md:text-3xl'>Perbarui Profil</h1>
            </div>
            {/* Form Login */}
            <Formik initialValues={initialValues} onSubmit={handleUpdate}>
              <Form>
                <div className='w-full'>
                  <div className='flex flex-row justify-center gap-5'>
                    <div className='w-full lg:w-1/2'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-gray-700'
                      >
                        Nama Lengkap Kerabat
                      </label>
                      <Field
                        type='text'
                        name='name'
                        placeholder='Masukan nama'
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                      />
                    </div>
                    <div className='w-full lg:w-1/2'>
                      <label
                        htmlFor='city'
                        className='text-sm font-medium text-gray-700'
                      >
                        Asal Kota
                      </label>
                      <Field
                        type='text'
                        name='city'
                        placeholder='Masukan asal kota'
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                      />
                    </div>
                  </div>
                  <div className='flex flex-row justify-center gap-5'>
                    <div className='w-full lg:w-1/2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium text-gray-400'
                      >
                        Email
                      </label>
                      <Field
                        type='email'
                        name='email'
                        placeholder='Masukan email'
                        className='w-full text-gray-400 border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                        disabled
                      />
                    </div>
                    <div className='w-full lg:w-1/2'>
                      <label
                        htmlFor='password'
                        className='text-sm font-medium text-gray-700'
                      >
                        Password
                      </label>
                      <Field
                        type='password'
                        name='password'
                        placeholder='Masukan password'
                        className='w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-primary'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    {/* button full w-full */}
                    <button
                      type='submit'
                      className='bg-primary text-white hover:bg-opacity-70 hover:shadow-sm active:bg-opacity-100 rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4 w-full text-left font-bold text-lg'
                    >
                      Perbaharui Sekarang
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </section>
      </PrivateRoute>
      <Story />
      <div className='mb-[60px]'></div>
    </>
  );
};

export default Profile;
