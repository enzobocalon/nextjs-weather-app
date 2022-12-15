import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 1.125rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 16px;
  border: 1px solid #E7E7EB;
  width: 100%;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 48px;
  color: #E7E7EB;
  width: 100%;
`;

export const SearchResultContainer = styled.div`
  width: 100%;
`;

export const SearchResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid transparent;
  padding: 24px;
  cursor: pointer;

  transition: all .3s ease;

  svg {
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease;
  }

  &:hover {
    border: 1px solid #616475;

    svg{
      opacity: 1;
      pointer-events: all;
    transition: all .3s ease;
    }
  }
`;
