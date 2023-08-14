import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { setFilterName, setSearchQuery } from "../../services/diary.slice";
import { useAppDispatch, useAppSelector } from "../../../../services/store";

const FilterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const filterName = useAppSelector((state) => state.diary.setFilterName);

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
            <IconWrapper>
              <FiChevronDown size="26" color="#8f8f8f" />
            </IconWrapper>
          </Wrapper>
        </>
      ) : (
        <>
          <FilterOpenWrapper>
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
            <IconWrapper>
              <FiChevronUp size="26" color="#8f8f8f" />
            </IconWrapper>
          </FilterOpenWrapper>
        </>
      )}
    </Container>
  );
};

export default FilterModal;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 128px;
  height: 100%;
  border-radius: 50px;

  cursor: pointer;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 128px;
  height: 100%;
  padding: 14px 0 0 20px;
  border-radius: 50px;

  background-color: white;
`;

const FilterOpenWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 128px;
  height: 116px;
  padding: 14px 0 0 20px;
  border-radius: 25px;

  overflow: hidden;
  transition: height 0.3s ease-in-out;
  background-color: white;

  box-shadow: 1px 1px 15px 1px #929292;
  z-index: 10;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin: 3px 5px 0 5px;
  color: #8f8f8f;
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 15px;
  background-color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

const FILTER = [
  { id: 1, name: "최신순", queryName: "latest" },
  { id: 2, name: "오래된순", queryName: "oldest" },
  { id: 3, name: "북마크", queryName: "bookmark" },
];
