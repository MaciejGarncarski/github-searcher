import { render } from '@testing-library/react';

import { UserResult } from '@/components/molecules/UserResult';

describe('<UserResult />', () => {
  test('should display a user', () => {
    render(
      <UserResult
        login='mocked'
        fullName='mocked user'
        avatar='https://avatars.githubusercontent.com/u/60816511?v=4'
        location=''
      />
    );
  });
});

export {};
