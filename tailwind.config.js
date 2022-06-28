module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        user: 'auto 1fr',
      },
      gridTemplateRows: {
        user: 'auto repeat(3, 1fr)',
      },
      minHeight: {
        user: '8rem',
      },
    },
  },
  plugins: [],
};
