import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setCategory, setPageNo } from "../../services/curation.slice";

const SelectedButtonStyle = {
  button: { border: "2px solid #2192FF" },
  text: { color: "#2192FF", fontWeight: "600" },
};

const CurationCategory = () => {
  const dispatch = useAppDispatch();
  const selectedCat = useAppSelector((state) => state.curation.category);

  const categoryHandler = (data) => {
    dispatch(setCategory(data.cat));
    dispatch(setPageNo(1));
  };

  return (
    <Container>
      {TOUR_CATEGORY.map((data) => {
        return (
          <>
            {selectedCat !== data.cat ? (
              <TextWrapper
                onClick={() => {
                  categoryHandler(data);
                }}
              >
                <Text>{data.title}</Text>
              </TextWrapper>
            ) : (
              <TextWrapper
                onClick={() => {
                  categoryHandler(data);
                }}
                style={SelectedButtonStyle.button}
              >
                <Text style={SelectedButtonStyle.text}>{data.title}</Text>
              </TextWrapper>
            )}
          </>
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
  margin-bottom: 20px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 40px;
  padding: 14px;
  margin-right: 10px;

  white-space: nowrap;
  border: 1px solid #8f8f8f;
  border-radius: 50px;

  cursor: pointer;

  &:hover {
    border: 1px solid #50aaff;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #8f8f8f;

  &:hover {
    color: #50aaff;
  }
`;

const TOUR_CATEGORY = [
  { title: "#이색체험", contenttypeid: 12, cat: "A02030400" },
  { title: "#전국미술관투어", contenttypeid: 14, cat: "A02060500" },
  { title: "#지역별축제", contenttypeid: 15, cat: "A02070100" },
  { title: "#더운여름수상레포츠", contenttypeid: 28, cat: "A03030300" },
  { title: "#고풍한옥숙소", contenttypeid: 32, cat: "B02011600" },
  { title: "#공예/공방", contenttypeid: 38, cat: "A04010700" },
  { title: "#카페투어", contenttypeid: 39, cat: "A05020900" },
];
