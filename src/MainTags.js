import styled from "styled-components";

export const MenuItem = styled.li`
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Button = styled.button`
  border: 1px solid #f7941e;
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #f7941e;
  padding: 13px 24px;
  background: none;
  &:hover {
    background: #f7941e;
    color: white;
  }
`;
export const Button2 = styled(Button)`
  background: #f7941e;
  color: white;
  &:hover {
    background: none;
    color: #f7941e;
  }
`;
export const LearnMoreBtn = styled(Button)`
  padding:21px 47px;
`;
export const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 50%;
`;

export const SectionGift = styled.section`
  background: #f1f1f2;
`;

export const TextBlock=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
gap:26px;
width:28%;
margin:auto;
`;

export const TextBlockP=styled.p`
font-size: 20px;
line-height: 1.5;
text-align: justify;
color: #000000;
`;
export const GiftParent=styled.div`
display:flex;
`;
export const HolidaysPatern= styled.div`
display:flex;
flex-direction: column;
align-items: center;
`;
export const HolidaysPaternP= styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding:50px;
`
export const GiftParentNumber=styled.div`
display:flex;
padding: 0px 0px 40px 0px
`;

export const SectionReady=styled.section`
background-color: #F7941E;
`;
export const ReadyBlock=styled.section`
display: flex;
align-items: center;
justify-content: space-around
`;
export const ReadyBlockDiv=styled.div`
`;
export const ReadyBtnDiv=styled.div`
display: flex;
gap: 15px
`;
export const ReadyBtn1=styled(Button)`
border: 1px solid #000000;
border-radius: 5px;
color: #FFFFFF;
background-color: #231F20;
;
`;
export const ReadyBtn2=styled(Button)`
border: 1px solid #000000;
border-radius: 5px;
color:black;
`;

export const BestText = styled.div`
display: flex;
`




export const FooterAll = styled.footer`
background: #FAFAFA;
`;
export const FooterParent = styled.ul`
display:flex;
justify-content: center;
gap:80px;
padding:50px;
`;

export const FooterParent1 = styled.div`
display:flex;
justify-content: center;
gap:26px;
padding: 50px 0;
`;
export const FooterParent2 = styled.p`
display:flex;
justify-content: center;
gap:26px;
padding: 25px 0;
`;

