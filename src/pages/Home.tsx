import type React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import shuffleNewDeck from '../utils/ShuffleDeck';

//const margin = 10;
const deck = shuffleNewDeck();

const GameBoard = styled.div`
  corner-radius: 10px;
  background-color: #f0f0f0;
  width: 100px;
  height: 40px;
  display: flex;
`;

const UpperContainer = styled.div`
  background-color: #f0f0f0;

  height: 150px;
  display: flex;
  align-items: center;
`;

const LowerContainer = styled.div`
  background-color: #f0f0f0;
  height: 150px;
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Adjust the gap between cards */
`;

const Home: React.FC = () => {
  return (
    <div>
      <GameBoard>
        <UpperContainer>
          <h1>Upper Container</h1>
        </UpperContainer>
        <LowerContainer>
          {Array.from({ length: 7 }).map((_, index) => (
            <CardContainer key={index}>
              {deck.splice(0, 7 - index).map((card, cardIndex) => (
                <Card key={cardIndex} source={`../assets/cards/${card}`} />
              ))}
            </CardContainer>
          ))}
        </LowerContainer>
      </GameBoard>
    </div>
  );
};

export default Home;
