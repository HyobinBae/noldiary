import React from "react";
import styled from "styled-components";
// import { GrImage, GrLocation, GrVideo } from "react-icons/gr";
// import { AiOutlinePlus } from "react-icons/ai";
// import { RxText } from "react-icons/rx";
import Editors from "./Editors";

const WriteMain = () => {
  // const [isClickedOption, setIsClickedOption] = useState(false);
  // const [optionStyle, setOptionStyle] = useState({
  //   backgroundColor: "#d8d8d8",
  // });
  // const [toggleStyle, setToggleStyle] = useState({
  //   display: "none",
  // });

  // const optionHandler = () => {
  //   setIsClickedOption(!isClickedOption);

  //   if (isClickedOption) {
  //     setOptionStyle({ backgroundColor: "#2192FF" });
  //     setToggleStyle({
  //       display: "flex",
  //     });
  //   } else {
  //     setOptionStyle({ backgroundColor: "#d8d8d8" });
  //     setToggleStyle({
  //       display: "none",
  //     });
  //   }
  // };

  return (
    <MainContainer>
      {/* <IconContainer>
        <OptionBox style={optionStyle} onClick={optionHandler}>
          <AiOutlinePlus color="white" />
        </OptionBox>
        <ContentsBox style={toggleStyle}>
          <IconBox>
            <RxText size="20" />
          </IconBox>
          <IconBox>
            <GrImage size="20" />
          </IconBox>
          <IconBox>
            <GrVideo size="20" />
          </IconBox>
          <IconBox>
            <GrLocation size="20" />
          </IconBox>
        </ContentsBox>
      </IconContainer> */}
      <Editors />
    </MainContainer>
  );
};

export default WriteMain;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 10px 5px;
`;

// const IconContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 40px;

//   position: sticky;
//   transform: translate(-45px, 130px);
// `;

// const OptionBox = styled.div`
//   width: 25px;
//   height: 25px;
//   margin: 5px 35px 5px 5px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ContentsBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;

//   height: 30px;
//   width: 200px;
//   margin: 5px 0px 5px 0px;

//   animation-duration: 2s;
//   animation-name: slideout;

//   @keyframes slideout {
//     from {
//       width: 0%;
//     }

//     to {
//       width: 50%;
//     }
//   }
// `;

// const IconBox = styled.div`
//   width: 45px;
//   height: 45px;
//   padding: 10px 10px;
//   margin-right: 10px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   border: 1px solid #d8d8d8;
// `;
