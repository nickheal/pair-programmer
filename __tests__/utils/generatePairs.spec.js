import generatePairs from 'src/utils/generatePairs';

describe('generatePairs', () => {
  it('pairs each item once', async () => {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';

    const result = generatePairs([a, b, c, d]).flat();

    expect(result.filter((item) => item === a).length).toBe(1);
    expect(result.filter((item) => item === b).length).toBe(1);
    expect(result.filter((item) => item === c).length).toBe(1);
    expect(result.filter((item) => item === d).length).toBe(1);
  });

  it('returns an empty array if that is provided', async () => {
    const result = generatePairs([]);

    expect(result).toEqual([]);
  });
});
