import React from "react";
import styled from "styled-components";

const CurationCategory = () => {
  return (
    <Container>
      {TOUR_CATEGORY.map((data) => {
        return (
          <TextWrapper>
            <Text>{data.title}</Text>
          </TextWrapper>
        );
      })}
    </Container>
  );
};

export default CurationCategory;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;
  margin: 0 15px 10px 15px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 100%;
  padding: 14px;
  margin-right: 10px;

  border: 1px solid #8f8f8f;
  border-radius: 50px;

  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #8f8f8f;
`;

const TOUR_CATEGORY = [
  { title: "#이색체험", code: 12, cat: "A02030400" },
  { title: "#전국미술관투어", code: 14, cat: "A02060500" },
  { title: "#지역별축제", code: 15, cat: "A02070100" },
  { title: "#더운여름수상레포츠", code: 28, cat: "A0303" },
  { title: "#고풍한옥숙소", code: 32, cat: "B02011600" },
  { title: "#공예/공방", code: 38, cat: "A04010700" },
  { title: "#카페투어", code: 39, cat: "A05020900" },
];
