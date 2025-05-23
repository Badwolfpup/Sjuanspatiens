import CreateNewDeck from './CreateDeck';

const shuffleNewDeck = () => {
  const deck = CreateNewDeck();
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export default shuffleNewDeck;
