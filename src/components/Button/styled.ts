import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 15px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding: 8px 24px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  margin-top: 20px;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
