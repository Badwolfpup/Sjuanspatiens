const CreateNewDeck = () => {
  const suits = ['H', 'R', 'K', 'S'];
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A',
  ];
  const deck = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push(`${suit}${value}.png`);
    }
  }
  return deck;
};

export default CreateNewDeck;
