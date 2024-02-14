import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: calc(100vh - 13rem);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  align-items: center;
`;
