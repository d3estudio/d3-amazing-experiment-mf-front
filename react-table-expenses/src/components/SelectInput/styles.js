import styled from 'styled-components';

export const SelectInputWrapper = styled.div`
`;

export const SelectInputOverlay = styled.button`
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

  border: none;
  background-color: transparent;
  cursor: default;

`;

export const InputModalWrapper = styled.div`
   position: relative;
`;

export const Container = styled.button`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;

  > h2 { 
   font-size: 11px;
   line-height: 12px;
   font-weight: 400;
    
   text-transform: uppercase;
   color: ${props => props.theme.colors.white};
    
 }
 
 > img {
   width: 8px;
   height: 8px;

   margin-left: 7px;
   transition: all .3s ease-in-out;
   transform: ${props => props.isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'};
 }
`;

export const SelectInputModal = styled.div`
   position: absolute;
   z-index: 5;
   top: 13px;
   left: -19px;

   width: 210px; 
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
  
   max-height: 210px;
   border-radius: 3px;
   
   background-color: ${props => props.theme.colors.white};
   box-shadow: 0px 14px 39px 0px rgb(0 0 0 / 20%);
`;

export const SelectInputModalScroll = styled.div`

   width: 100%;
   height: 100%;
   overflow-y: scroll;
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

export const InputContainer = styled.div`
   position: relative;

   input {
      font-size: 13px;
      width: 100%;
      height: 36px;

      text-align: left;

      padding: 0 13px 0 35px;
      background: ${props => props.theme.colors.white}
   }

   input::placeholder {
      text-transform: uppercase;
      opacity: 0.5;
   }

   > img {
     width: 16px;
     height: 20px;
     position: absolute;
     top: 10px;
     left: 10px;
     z-index: 6;
   }
`;

export const SelectInputModalList = styled.div`
   width: 100%;
   height: 100%;
   
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;

`;

export const SelectInputModalListItem = styled.button`
   width: 100%;
   height: 36px;

   padding: 0 10px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   background: ${props => props.theme.colors.white};


   > span {
    font-size: 12px;
    text-transform: uppercase;
    color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.black};
    font-weight: 400;  
    opacity: .6;
   }
`;

export const SelectInputModalButton = styled.button`
  width: 100%;
  padding: 10px 0;

  text-transform: uppercase;
  font-size: 11px;
  color: ${props => props.theme.colors.gray};
  background: #f4f4f4;
  opacity: .4;

  border-top: 1px solid rgba(0,0,0,0.05);

`