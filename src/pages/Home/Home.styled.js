import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 42px;
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
    :hover{
    scale:1.05;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
`;

export const FilmTitle = styled.h2`
  margin-top: 10px;
  text-transform: uppercase;
`;

export const Box = styled.p`
  position: absolute;
  z-index: 15;
  top: 2%;
  right: 4%;
  display: flex;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(165, 14, 14, 0.6);
  color: whitesmoke;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
