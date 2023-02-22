import styled from 'styled-components';

export const Wraper = styled.div`
display:flex;
gap:28px;
 margin: 30px  0 0 0;
`;

export const Img = styled.img`
  border-radius: 5px;
  height:604.5px;
`;

export const FilmTitle = styled.h2`
  margin-top: 10px;
  text-transform: uppercase;
  color:whitesmoke;
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
export const FilmItem = styled.li`
color:whitesmoke;
display: block;
border-radius:4px;
border:2px solid tomato;
text-align:center;
max-width:170px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
:first-child{
  margin-bottom:20px;
}
:hover{
  background-color:tomato;
}
`
