import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setFilterName, setSearchQuery } from "../../services/diary.slice";

const FilterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filterName = useAppSelector((state) => state.diary.setFilterName);

  console.log(filterName);
  const modalClickHandler = () => {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  };

  const filterHandler = (filterName, queryName) => {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);

    dispatch(setFilterName(filterName));
    dispatch(setSearchQuery(queryName));
  };

  return (
    <Container onClick={modalClickHandler}>
      {!isModalOpen ? (
        <>
          <Wrapper>
            <TextWrapper>
              <Text>{filterName}</Text>
            </TextWrapper>
          </Wrapper>
          <FiChevronDown size="26" color="#8f8f8f" />
        </>
      ) : (
        <>
          <Wrapper>
            <TextWrapper>
              {FILTER.map((filter) => (
                <Text
                  key={filter.id}
                  onClick={() => {
                    filterHandler(filter.name, filter.queryName);
                  }}
                >
                  {filter.name}
                </Text>
              ))}
            </TextWrapper>
          </Wrapper>
          <FiChevronUp size="26" color="#8f8f8f" />
        </>
      )}
    </Container>
  );
};

export default FilterModal;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 120px;
  height: 100%;

  margin-left: 40px;
  border-radius: 5px;

  cursor: pointer;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding-top: 17px;
  background-color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-left: 5px;
  color: #8f8f8f;
  background-color: white;
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 15px;
  background-color: white;
`;

const FILTER = [
  { id: 1, name: "최신순", queryName: "latest" },
  { id: 2, name: "오래된순", queryName: "oldest" },
  { id: 3, name: "북마크", queryName: "bookmark" },
];
