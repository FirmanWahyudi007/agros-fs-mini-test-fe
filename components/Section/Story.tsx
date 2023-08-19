import Image from 'next/image';
const Story = () => {
  return (
    <section className='mt-14'>
      <div className='w-full md:w-10/12 mx-auto'>
        <div className='max-w-full mb-6'>
          <h2 className='font-bold text-xl md:text-3xl'>
            Cerita Kerabat AGROS
          </h2>
        </div>
        <div className='flex flex-wrap items-center'>
          <div className='w-full lg:w-1/3'>
            <Image
              src='/layanan/Logo.png'
              width={384}
              height={369}
              alt='logo'
            />
          </div>
          <div className='w-full lg:w-8/12 max-w-xl'>
            <p className='mt-6 font-normal text-sm md:text-base'>
              Terinspirasi dari arah mata angin yang membawa pada satu
              destinasi, Agros akan terus bergerak menciptakan pemerataan
              ekonomi sehingga bisa menjadi penghubung para stakeholders dalam
              aktivitas muatan berat, mulai dari shipper, transporter, driver,
              mitra pemeliharan, seller dan buyer intermoda yang menjangkau
              seluruh penjuru Nusantara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
