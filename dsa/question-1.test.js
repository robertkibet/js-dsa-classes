const { displayLettersAsWord } = require('./question-1');

test('display letter as word', () => {
  const word = ['w', 'o', 'r', 'd'];
  const ask = ['a', 's', 'k'];

  expect(displayLettersAsWord(word)).toBe('word');
  expect(displayLettersAsWord(ask)).toBe('ask');
});
