export const isClient = () => typeof window !== "undefined";

export const formatTimestamp = (ts: number) =>
  new Date(ts).toLocaleDateString();

export const GOERLI_CHAIN_ID = 5;
export const GOERLI_RPC_URL =
  "https://eth-goerli.g.alchemy.com/v2/2Hw2qLzKgY0KEOOIkGrxY1euIxlNvNwz";
export const CONTRACT_ADDRESS = "0x9B38afae61A7b39B003D76BE64D62A4E24D29f7B";
