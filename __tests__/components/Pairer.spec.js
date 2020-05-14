import Pairer from 'src/components/Pairer';
import { fireEvent, render } from '@testing-library/svelte';

describe('Pairer', () => {
  it('pairs each item once', async () => {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';

    const { getByTestId, queryAllByTestId } = render(Pairer, {
      items: [a, b, c, d]
    });

    const generatePairsButton = getByTestId('generate-pairs-button');

    await fireEvent.click(generatePairsButton);

    const pairs = queryAllByTestId('pair');
    const foundItems = pairs.reduce((acc, pair) => {
      const { textContent } = pair;
      let found = [];
      if (textContent.includes(a)) found = [...found, a];
      if (textContent.includes(b)) found = [...found, b];
      if (textContent.includes(c)) found = [...found, c];
      if (textContent.includes(d)) found = [...found, d];
      return [...acc, ...found];
    }, []);

    expect(foundItems.filter((item) => item === a).length).toBe(1);
    expect(foundItems.filter((item) => item === b).length).toBe(1);
    expect(foundItems.filter((item) => item === c).length).toBe(1);
    expect(foundItems.filter((item) => item === d).length).toBe(1);
  });
});
