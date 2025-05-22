import type React from 'react';
import styled from 'styled-components';

interface CardProps {
  source: string;
}

const ImageContainer = styled.div`
  width: 100px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;

const Card: React.FC<CardProps> = ({ source }) => {
  return (
    <ImageContainer>
      <Image src={`../assets/cards/${source}`} alt="Placeholder" />
    </ImageContainer>
  );
};

export default Card;
