import CardItem from '@/components/Card/CardItem';
import { layananItems } from '@/common/constant/layanan';

const Introduction = () => {
  return (
    <section className='mt-14'>
      <div className='w-full md:w-10/12 mx-auto'>
        <div className='max-w-full mb-6'>
          <h1 className='font-bold text-xl md:text-3xl'>
            Mengenal AGROS Indonesia Lebih Dekat
          </h1>
          <p className='mt-6 font-normal text-sm md:text-base'>
            Agros adalah sistem terpadu satu pintu—one stop service yang
            berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan
            mitra terlatih, efisiensi dan transparansi sistem transportasi,
            kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi.
          </p>
        </div>
        <div className='max-w-full'>
          <h3 className='font-bold text-xl md:text-2xl'>
            Layanan AGROS Indonesia
          </h3>
          <div className='sm:flex sm:flex-wrap sm:gap-6 mt-6'>
            {layananItems.map((item, index) => (
              <CardItem key={index} {...item} alt='logo' />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
