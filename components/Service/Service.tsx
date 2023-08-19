import CardItem from '@/components/Card/CardItem';
import { serviceItems } from '@/common/constant/service';

const Service = () => {
  return (
    <div className='max-w-full'>
      <h3 className='font-bold text-xl md:text-2xl'>Layanan AGROS Indonesia</h3>
      <div className='sm:flex sm:flex-wrap sm:gap-6 mt-6'>
        {serviceItems.map((item, index) => (
          <CardItem key={index} {...item} alt='logo' />
        ))}
      </div>
    </div>
  );
};

export default Service;
