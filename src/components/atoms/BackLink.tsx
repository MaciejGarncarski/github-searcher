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
        className='flex items-center gap-2  rounded-md bg-gray-700 px-4 py-2 text-white shadow-lg dark:bg-slate-600 lg:absolute lg:top-40 lg:left-44'
      >
        <BsArrowLeft />
        Back
      </motion.a>
    </Link>
  );
};
