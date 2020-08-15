export const TEST_EXCHANGES = [
  { name: 'AU', symbols: [] },
  { name: 'JSE', symbols: [] },
  { name: 'US', symbols: [] },
];

export default () => ({
  collection: jest.fn(() => ({
    get: () => ({
      docs: TEST_EXCHANGES.map((item) => {
        return {
          data: () => item,
        };
      }),
    }),
  })),
});
