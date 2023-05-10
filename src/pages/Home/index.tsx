import React, { useState } from "react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import { useWeb3ProviderContext } from "hooks/useProviderContext";
import { GOERLI_CHAIN_ID, GOERLI_RPC_URL } from "utils";
import Loader from "components/Loader";
import Button from "components/Button";
import Input from "components/FormControls/Input";
import TextArea from "components/FormControls/TextArea";
import * as Styled from "./styled";
import { toast } from "react-toastify";

export interface FormValues {
  name: string;
  message: string;
}
const Home = () => {
  const { contract } = useWeb3ProviderContext();

  const [currentAccount, setCurrentAccount] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      name: "Anonymous",
    },
  });

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast("You need to install MetaMask at first", {
          type: "warning",
          theme: "dark",
          position: "top-center",
        });
      }

      if (ethereum.networkVersion !== GOERLI_CHAIN_ID.toString()) {
        const chainID = ethers.utils.hexValue(GOERLI_CHAIN_ID);
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainID }],
          });
        } catch (err: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (err.code === 4902) {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainName: "Alchemy Goerli",
                  chainId: chainID,
                  nativeCurrency: {
                    name: "GOR",
                    decimals: 18,
                    symbol: "GOR",
                  },
                  rpcUrls: [GOERLI_RPC_URL],
                },
              ],
            });
          }
        }
      }

      const accounts = await ethereum.request<string[]>({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit(async ({ message, name }) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        setIsLoading(true);
        const coffeeTxn = await contract?.buyCoffee(name, message, {
          value: ethers.utils.parseEther("0.001"),
        });

        await coffeeTxn?.wait();
      }
    } catch (error: any) {
      if (error.code === "INSUFFICIENT_FUNDS") {
        toast(
          <>
            You don&apos;t have enough ETH on your account, please total up your
            account here
            <Styled.Link href="https://goerlifaucet.com" target="_blank">
              https://goerlifaucet.com
            </Styled.Link>
          </>,
          { theme: "dark", position: "top-center", type: "error" }
        );

        return;
      }
      console.log(error);
    } finally {
      setIsLoading(false);
      setValue("name", "");
      setValue("message", "");
    }
  });

  return (
    <Styled.Wrapper>
      <Styled.H1>Buy Sergio a Coffee!</Styled.H1>
      {currentAccount ? (
        <Styled.Form>
          <Input
            {...register("name", { required: "Required" })}
            error={errors.name}
            label="Name"
          />
          <TextArea
            {...register("message", { required: "Required" })}
            error={errors.message}
            label="Message"
          />
          <Button disabled={isLoading} onClick={onSubmit} type="submit">
            {isLoading ? <Loader /> : "Buy 1 Coffee for 0.001ETH"}
          </Button>
        </Styled.Form>
      ) : (
        <Button onClick={connectWallet}>Connect your wallet</Button>
      )}
    </Styled.Wrapper>
  );
};

export default Home;
