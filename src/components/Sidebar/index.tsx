import React, { useEffect, useState } from "react";
import EnvelopeIcon from "assets/icons/envelope.svg";
import Memo from "./Memo";
import { useWeb3ProviderContext } from "hooks/useProviderContext";
import { BuyMeACoffee } from "types/ethers-contracts/BuyMeACoffeeContract";
import * as Styled from "./styled";
import { GOERLI_CHAIN_ID } from "utils";

const Sidebar = () => {
  // prettier-ignore
  const [memos, setMemos] = useState<BuyMeACoffee.MemoStructOutput[] | undefined>(undefined);

  const { contract } = useWeb3ProviderContext();

  useEffect(() => {
    if (window.ethereum?.networkVersion === GOERLI_CHAIN_ID.toString()) {
      // Fetch existing memos
      contract?.getMemos?.().then(setMemos);

      const onNewMemo = (memo: BuyMeACoffee.MemoStructOutput) => {
        setMemos((prevState) => [memo, ...(prevState || [])]);
      };

      // Listen for new memo events.
      contract?.on("NewMemo", onNewMemo);

      return () => {
        contract?.off("NewMemo", onNewMemo);
      };
    }
  }, [contract]);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <EnvelopeIcon />
        Memos
      </Styled.Header>
      <Styled.MemosWrapper>
        {memos?.map((memo, index) => (
          <Memo key={index} {...memo} />
        ))}
      </Styled.MemosWrapper>
    </Styled.Wrapper>
  );
};

export default Sidebar;
