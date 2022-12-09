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
export const HolidaysDiv=styled.h2` 
  &.active{
    color:  #F7941E;
  }
`;

export const GiftParentNumber=styled.div`
  display:flex;
  padding: 0px 0px 40px 0px;
  gap:70px;
`;

export const SectionReady=styled.section`
  background-color: #F7941E;
`;

export const ReadyBlock=styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around
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
`;

export const BestIndexSection = styled.section`
  width: 75%;
  height: auto;
  margin: auto
`;
export const BestIndex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBest = styled.img.attrs((props) => ({
  src: props.src,
  }))`
  width: 35%;
`;

export const BestTextBlock=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin:auto;
  padding: 15px 80px;
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
  background-color: black;
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