import styled from "styled-components";

interface Props {
  value: number;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 230px;
`;

export const TopLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
`;

export const ProgressBG = styled.div`
  min-width: 100%;
  height: 8px;
  margin-top: 2px;
  background-color: #E7E7EB;
  border-radius: 80px;
`;

export const Progress = styled.div<Props>`
  width: ${props => props.value ? `${props.value}%` : '0%'};
  height: 100%;
  background-color: #FFEC65;
  border-radius: 80px;
  transition: all .3s ease;
`;

export const BottomLabel = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  font-weight: 700;
`;
