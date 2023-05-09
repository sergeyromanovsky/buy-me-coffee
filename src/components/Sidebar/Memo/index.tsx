import React from "react";
import { formatTimestamp } from "utils";
import * as Styled from "./styled";
import { BigNumber } from "ethers";

interface Props {
  message: string;
  name: string;
  timestamp: BigNumber;
}

const Memo = ({ message, name, timestamp }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Message>“{message}“</Styled.Message>
      <Styled.From>
        From: {name} at {formatTimestamp(timestamp.toNumber() * 1000)}
      </Styled.From>
    </Styled.Wrapper>
  );
};

export default Memo;
