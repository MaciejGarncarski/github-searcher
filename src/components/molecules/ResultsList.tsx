import { motion } from 'framer-motion';

import { Heading } from '@/components/atoms/Heading';
import { containerVariants } from '@/components/atoms/ResultContainer';
import { Repository } from '@/components/molecules/Repository';
import { User } from '@/components/molecules/User';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

type ResultsListProps = {
  totalCount: string;
  data: (UserTypes | RepoTypes)[];
};

export const ResultsList = ({ totalCount, data }: ResultsListProps) => {
  if (+totalCount === 0) {
    return (
      <Heading type='h2' className='mt-20 ml-20'>
        No results found
      </Heading>
    );
  }
  return (
    <section className='mx-6 xl:mx-20 my-7 flex flex-col justify-start align-center'>
      <Heading type='h2' className='py-4 text-3xl'>
        {totalCount} results
      </Heading>
      <motion.ul
        variants={containerVariants}
        initial='initial'
        animate='animate'
      >
        {data.map((elem) => {
          if ('avatar_url' in elem) {
            return (
              <User
                key={elem.id}
                login={elem.login}
                fullName={elem.name}
                avatar={elem.avatar_url}
                bio={elem.bio}
                location={elem.location}
              />
            );
          } else if ('updated_at' in elem) {
            return (
              <Repository
                key={elem.id}
                fullName={elem.full_name}
                description={elem.description}
                stars={elem.stargazers_count}
                language={elem.language}
                license={elem.license}
                updatedAt={elem.updated_at}
              />
            );
          }
        })}
      </motion.ul>
    </section>
  );
};
