import Link from "next/link";

const BrandLink = () => {
  return (
    <Link
      href='/'
      className='font-bold font-clash-display text-2xl md:text-4xl transition-colors duration-500 ease-in-out hover:text-primary group'
    >
      get
      <span className='text-primary group-hover:text-white'>Linked</span>
    </Link>
  );
};

export default BrandLink;
