import shuffle from 'src/utils/shuffle';

describe('shuffle', () => {
  it('returns an empty array if nothing is provided', async () => {
    const result = shuffle([]);

    expect(result).toEqual([]);
  });
});
