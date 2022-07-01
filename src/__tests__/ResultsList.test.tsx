import { render } from '@testing-library/react';

import { ResultsList } from '@/components/molecules/ResultsList';

describe('<ResultsList />', () => {
  test('should display a ResultsList', () => {
    const data = [
      {
        id: 1,
        login: 'John',
        full_name: 'Johnatan',
        avatar_url: 'https://avatars.githubusercontent.com/u/60816511?v=4',
        bio: 'im bio',
        location: 'Poland',
      },
      {
        id: 2,
        fullName: 'Johno/johno',
        description: 'trol',
        stars: 3,
        language: 'Polish',
        license: {
          name: 'MIT',
        },
        updatedAt: '20/20/2022',
      },
    ];

    render(<ResultsList totalCount='2' data={data} />);
  });
});

export {};
