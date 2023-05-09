import styled from "@emotion/styled";

export const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 100vh;
  overflow: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
