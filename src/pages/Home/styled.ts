import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 24px;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 64px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: clamp(250px, 40%, 600px);
`;

export const Link = styled.a`
  display: block;
  color: #6873f5;
`;
