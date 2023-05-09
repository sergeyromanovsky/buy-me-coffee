import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.black300};
`;

export const Message = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
  word-break: break-all;
`;

export const From = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.grey};
  word-break: break-all;
`;
