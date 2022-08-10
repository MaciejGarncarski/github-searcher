
## Overview 🎉
Github Searcher is NextJS app, which uses Github's REST API to show users and repositories. I hope this app is useful for someone :)

## Live 📍
https://github-searcher-maciek.vercel.app/

## Installation & running 💾

### Install node dependencies
```
pnpm install
```

### Start dev server
```
pnpm dev
```

### Env example
```bash
# env.local
NEXT_PUBLIC_API_KEY=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
# how to create personal access token: 
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

```

## List of functionalities 📃
- Search users
- Search repositories
- Search history
- Set results per page
- Set accent color
- Set app theme
- Pagination

## Tech used 🔧
- Next + Typescript
- Tailwind
- React-Query
- Eslint + Prettier + Husky + Conventional Commits
- Jest + React Testing Library
- Github API

## Screenshots 📺
### Mobile

#### Light theme
![Website preview](https://raw.githubusercontent.com/MaciejGarncarski/github-api/main/.github/readme-screenshots/mobile-light.png?raw=true?raw=true "Mobile light")

#### Dark theme
![Website preview](https://raw.githubusercontent.com/MaciejGarncarski/github-api/main/.github/readme-screenshots/mobile-dark.png?raw=true?raw=true "Mobile Dark")

### Desktop

#### Dark theme
![Website preview](https://raw.githubusercontent.com/MaciejGarncarski/github-api/main/.github/readme-screenshots/desktop-dark.png?raw=true?raw=true "Desktop Dark")

#### User profile
![Website preview](https://raw.githubusercontent.com/MaciejGarncarski/github-api/main/.github/readme-screenshots/desktop-user-profile.png?raw=true?raw=true "Desktop user profile")