import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

export const BackLink = () => {
  return (
    <Link href='/' passHref>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className='lg:absolute lg:top-40 lg:left-44 bg-gray-700 text-white shadow-lg flex gap-2 items-center px-4 py-2 rounded'
      >
        <BsArrowLeft />
        Back
      </motion.a>
    </Link>
  );
};
