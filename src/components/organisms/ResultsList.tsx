import { motion } from 'framer-motion';

import { Text } from '@/components/atoms/Text';
import { Repository } from '@/components/molecules/Repository';
import { placeholderVariants } from '@/components/molecules/ResultPlaceholder';
import { User } from '@/components/molecules/User';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

type ResultsListProps = {
  totalCount: string;
  apiData: (UserTypes | RepoTypes)[];
};

export const ResultsList = ({ totalCount, apiData }: ResultsListProps) => {
  if (+totalCount === 0) {
    return (
      <Text type='h2' className='mx-6 xl:mx-20 my-7'>
        No results found
      </Text>
    );
  }
  return (
    <section className='mx-6 xl:mx-20 my-7 flex flex-col justify-start align-center'>
      <Text type='h2' className='py-4 text-3xl'>
        {totalCount} results
      </Text>
      <motion.ul
        variants={placeholderVariants}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        {apiData.map((apiResponse) => {
          if ('avatar_url' in apiResponse) {
            return (
              <User
                key={apiResponse.id}
                login={apiResponse.login}
                fullName={apiResponse.name}
                avatar={apiResponse.avatar_url}
                bio={apiResponse.bio}
                location={apiResponse.location}
              />
            );
          } else if ('updated_at' in apiResponse) {
            return (
              <Repository
                key={apiResponse.id}
                fullName={apiResponse.full_name}
                description={apiResponse.description}
                stars={apiResponse.stargazers_count}
                language={apiResponse.language}
                license={apiResponse.license}
                updatedAt={apiResponse.updated_at}
              />
            );
          }
        })}
      </motion.ul>
    </section>
  );
};
