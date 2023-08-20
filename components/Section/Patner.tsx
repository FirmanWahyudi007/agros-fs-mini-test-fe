import { fetchUsers } from '@/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';

const Patner = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (token) {
      if (user?.users.length === 0) {
        dispatch(fetchUsers());
      }
    }
  }, [dispatch]);

  return (
    <section className='mt-14'>
      <div className='w-full md:w-10/12 mx-auto'>
        <div className='max-w-full mb-11'>
          <h2 className='font-bold text-xl md:text-3xl'>Mitra AGROS</h2>
          <p className='mt-6 font-normal text-sm md:text-base'>
            Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
            keamanan kepada para pelanggan setia AGROS Indonesia.Untuk melihat
            daftar pelanggan kami, silakan melakukan pendaftaran.
          </p>
        </div>
        {!token ? (
          <div className='flex justify-center mb-20'>
            <button className='bg-primary text-white hover:bg-opacity-70 hover:shadow-sm active:bg-opacity-100 rounded-lg border border-white px-4 py-2 mt-3 mb-2 md:mt-4'>
              Daftar Sekarang
            </button>
          </div>
        ) : (
          <div className='flex flex-wrap gap-4 mb-20'>
            {user?.users.length > 0 &&
              user?.users.map((user, index) => (
                <div
                  className='bg-white rounded-lg shadow-md p-6 w-[300px] h-[120px] relative'
                  key={index}
                >
                  <button className='absolute -top-2 -right-2 p-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 active:bg-red-400 hover:text-white focus:outline-none'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='5'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                  <h2 className='font-semibold text-base lg:text-lg'>
                    {user.name}
                  </h2>
                  <p className='font-normal text-xs lg:text-sm mt-4 text-white bg-[#63BA73] inline-block rounded-lg px-3 py-1'>
                    {user.city}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Patner;
