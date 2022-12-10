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
  @media (max-width: 1024px) {
    display:flex;
    align-items:center;
    text-align: center;
    text-transform: uppercase;
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
  @media (max-width: 1024px) {
    padding: 25px 0;
  }
`;

export const SectionGift = styled.section`
  background: #f1f1f2;
  @media (max-width: 1024px) {
   background: #f1f1f2;
  }
`;

export const TextBlock=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:26px;
  width:28%;
  margin:auto;
  @media (max-width: 1024px) {
    padding: 15px 0;
    display:flex; 
    align-items:center;
  }
`;

export const TextBlockP=styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  color: #000000;
`;  

export const GiftParent=styled.div`
  display:flex;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center; 
    padding: 25px 0;
  }
`;

export const HolidaysPatern= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;

export const HolidaysPaternP= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:50px;
`;

export const HolidaysDiv=styled.h2` 
  &.active{
    color:  #F7941E;
  }
`;

export const GiftParentNumber=styled.div`
  display:flex;
  padding: 0px 0px 40px 0px;
  gap:70px;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;

export const SectionReady=styled.section`
  background-color: #F7941E;
`;

export const ReadyBlock=styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
`;

export const ReadyBlockDiv=styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
  line-height: 141%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReadyBtnDiv=styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:flex-end;
    justify-content: center; 
  }
`;

export const ReadyBtn1=styled(Button)`
  border: 1px solid #000000;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: #231F20;
`;

export const ReadyBtn2=styled(Button)`
  border: 1px solid #000000;
  border-radius: 5px;
  color:black;
`;

export const TextBlockBest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center; 
  }
`;

export const BestIndexSection = styled.section`
  width: 75%;
  height: auto;
  margin: auto;
`;
export const BestIndex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBest = styled.img.attrs((props) => ({
  src: props.src,
  }))`
  width: 35%;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
  }
`;

export const BestTextBlock=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin:auto;
  padding: 15px 80px;
  background: #231F20;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;

export const BestTextBlockH2=styled.h2`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  color: #FFFFFF;
`;

export const BestTextBlockP=styled.p`
  font-size: 48px;
  line-height: 1.5;
  text-align: justify;
  color: #FFFFFF;
`;

export const BestIndexImg=styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;

export const BestH2=styled.h2`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:26px;
  margin:auto;
`;

export const BestP=styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  color: #000000;
`;

export const BestLearnMoreBtn=styled.button`
  font-family: 'Gilroy';
  font-size: 18px;
  background: none;
  border: none;
  color: #FFFFFF;
`;

export const TextBestDiv=styled.div`
  display:flex;
  gap:25px;
  padding: 25px 0;
`;

export const TextBestP=styled.p`
  font-family: 'Gilroy';
  font-size: 18px;
`;

export const TextBestH=styled.h2`
  font-family: 'Gilroy';
  font-size: 24px;
`;

export const TextBestBtn=styled.button`
  font-family: 'Gilroy';
  font-size: 14px;
  color: #000000;
  border: none;
  background-color: white;
`;

export const FooterAll = styled.footer`
  background-color: #FAFAFA;
  @media (max-width: 768px) {
    background-color: #FAFAFA;
  }
`;
export const FooterParent = styled.ul`
  display:flex;
  justify-content: center;
  gap:80px;
  padding:50px;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;

export const FooterParent1 = styled.div`
  display:flex;
  justify-content: center;
  gap:26px;
  padding: 50px 0;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;

export const FooterParent2 = styled.p`
  display:flex;
  justify-content: center;
  gap:26px;
  padding: 25px 0;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
`;