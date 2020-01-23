import styled from 'styled-components';
let modalState = 'none'

const MinHeader = styled.div`
display: flex;  
align-items: center;
justify-content: space-around;
flex-direction: row;
@media (max-width: 580px) {
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: ${modalState};
}
`;

console.log('MinHeader.display:', MinHeader.displayName)
export default MinHeader;