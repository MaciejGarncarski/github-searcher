import { render } from '@testing-library/react';

import { User } from '@/components/molecules/User';

describe('<User />', () => {
  test('should display a user', () => {
    render(
      <User
        login='mocked'
        fullName='mocked user'
        avatar='https://avatars.githubusercontent.com/u/60816511?v=4'
        location=''
      />
    );
  });
});

export {};
