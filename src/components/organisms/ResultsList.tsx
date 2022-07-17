import { motion } from 'framer-motion';

import { Text } from '@/components/atoms/Text';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { RepositoryResult } from '@/components/molecules/RepositoryResult';
import { placeholderVariants } from '@/components/molecules/UserProfilePlaceholder';
import { UserResult } from '@/components/molecules/UserResult';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

type ResultsListProps = {
  totalCount: string;
  apiData: (UserTypes | RepoTypes)[];
};

export const ResultsList = ({ totalCount, apiData }: ResultsListProps) => {
  if (+totalCount === 0) {
    return <ErrorMessage error='No results found' emoji='🤐' />;
  }
  return (
    <section className='align-center mx-6 my-7 flex flex-col justify-start xl:mx-24'>
      <Text type='h2' className='break-words py-4 text-3xl'>
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
              <UserResult
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
              <RepositoryResult
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
