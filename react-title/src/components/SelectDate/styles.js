import styled from 'styled-components';

export const Wrapper = styled.div`
   position: relative;
`;

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
  
  > h2 { 
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;

    text-transform: uppercase;
    letter-spacing: 0.1px;

    color: ${props => props.theme.colors.secondary};
 }
 
 > img {
    width: 7px;
    height: 7px;

    margin-left: 7px;
    transition: all .3s ease-in-out;
    transform: ${props => props.isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'};
 }
`;


export const SelectDateModalContainer = styled.div`
   position: absolute;
   z-index: 5;
   top: 0;
   left: -5px;

   width: 225px;
  
   max-height: 230px;
   border-radius: 3px;
   
   background-color: ${props => props.theme.colors.white};
   box-shadow: 0px 14px 39px 0px rgb(0 0 0 / 20%);
   overflow-y: scroll;

   input {
      font-size: 13px;
      width: 100%;
      height: 36px;

      text-align: center;

      padding: 0 11px;
      background: ${props => props.theme.colors.white}
   }

   input::placeholder {
      text-transform: uppercase;
   }

   &::-webkit-scrollbar {
      width: 5px;
   }
   
   &::-webkit-scrollbar-track {
     background: #D3D3D3;
     border-radius: 0 3px 3px 0;

   }
   
   &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 0 3px 3px 0;
   
   }
`;

export const SelectDateModalList = styled.div`
   width: 100%;
   height: 100%;
   
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
`;

export const SelectDateModalListItem = styled.button`
   width: 100%;
   height: 36px;
background-color: none;
   padding: 0 10px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   > span {
    font-size: 12px;
    color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.black};
    font-weight: 400;  
    opacity: .6;
   }
`;