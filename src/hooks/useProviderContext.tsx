import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTRACT_ADDRESS, isClient } from "utils";
import { ethers } from "ethers";
import { BuyMeACoffeeContract__factory } from "types/ethers-contracts/factories/BuyMeACoffeeContract__factory";
import { BuyMeACoffeeContract } from "types/ethers-contracts/BuyMeACoffeeContract";

interface Web3ProviderContextProps {
  contract: BuyMeACoffeeContract | null;
  activeAccount: string;
}
export const Web3ProviderContext = createContext<Web3ProviderContextProps>({
  contract: null,
  activeAccount: "",
});

interface Web3ProviderProps {
  children: React.ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const [activeAccount, setActiveAccount] = useState<string>(
    () => (isClient() && window.ethereum.selectedAddress) || ""
  );
  const [contract, setContract] = useState<BuyMeACoffeeContract | null>(null);

  useEffect(() => {
    window.ethereum?.on("accountsChanged", (accounts) => {
      const typedAccounts = accounts as string[];
      setActiveAccount(typedAccounts?.[0]);
    });
  }, []);

  useEffect(() => {
    if (activeAccount) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as unknown as ethers.providers.ExternalProvider,
        "any"
      );
      const signer = provider.getSigner();

      const buyMeACoffeeContract = BuyMeACoffeeContract__factory.connect(
        CONTRACT_ADDRESS,
        signer
      );

      setContract(buyMeACoffeeContract);
    }
  }, [activeAccount]);

  const memoizedValue = useMemo(
    () => ({ activeAccount, contract }),
    [activeAccount, contract]
  );

  return (
    <Web3ProviderContext.Provider value={memoizedValue}>
      {children}
    </Web3ProviderContext.Provider>
  );
}

export function useWeb3ProviderContext() {
  const theme = useContext(Web3ProviderContext);
  if (!theme) {
    throw new Error(
      "useWeb3ProviderContext must be used within Web3ProviderContext"
    );
  }
  return theme;
}
