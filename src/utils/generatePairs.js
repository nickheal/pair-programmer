import shuffle from './shuffle';

export default function generatePairs(items) {
  if (!items.length) return [];

  return shuffle(items).reduce((pairs, item, index, array) => {
    const lastItem = index === array.length - 1;
    const lastInAccIncomplete = pairs[pairs.length - 1].length < 2;

    if (lastItem || lastInAccIncomplete) {
      pairs[pairs.length - 1] = [...pairs[pairs.length - 1], item];
    } else {
      pairs = [...pairs, [item]]
    }
    
    return pairs;
  }, [[]]);
}
