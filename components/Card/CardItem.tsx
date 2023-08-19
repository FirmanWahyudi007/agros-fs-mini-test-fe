import Image from 'next/image';

interface CardItemProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CardItem = ({ title, description, image, alt }: CardItemProps) => {
  return (
    <div className='card group'>
      <div className='card-cover'>
        <Image src={image} width={500} height={1200} alt={alt} />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 text-slate-700'>{title}</div>
        <p className='text-sm text-slate-600'>{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
