import styled from "@emotion/styled";

export const Wrapper = styled.aside`
  background: ${({ theme }) => theme.colors.black100};
  overflow: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.black100};
`;

export const MemosWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
