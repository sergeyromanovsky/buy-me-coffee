/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BuyMeACoffeeContract,
  BuyMeACoffeeContractInterface,
} from "../BuyMeACoffeeContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct BuyMeACoffee.Memo",
        name: "",
        type: "tuple",
      },
    ],
    name: "NewMemo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "buyCoffee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMemos",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct BuyMeACoffee.Memo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610c66806100616000396000f3fe6080604052600436106100345760003560e01c8063204206e1146100395780633aaa74b214610055578063865c51721461006c575b600080fd5b610053600480360381019061004e91906105aa565b610097565b005b34801561006157600080fd5b5061006a6101fc565b005b34801561007857600080fd5b5061008161026d565b60405161008e9190610827565b60405180910390f35b600034116100da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d1906108a6565b60405180910390fd5b600060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001428152602001848152602001838152509050600081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190816101a79190610ad2565b5060608201518160030190816101bd9190610ad2565b5050507f97931099b0ed6e92622a14838781b7c1d5024a96f70d0d7fcfb36da23c8af40e816040516101ef9190610c0e565b60405180910390a1505050565b6000479050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610269573d6000803e3d6000fd5b5050565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561044757838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282018054610324906108f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610350906108f5565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b505050505081526020016003820180546103b6906108f5565b80601f01602080910402602001604051908101604052809291908181526020018280546103e2906108f5565b801561042f5780601f106104045761010080835404028352916020019161042f565b820191906000526020600020905b81548152906001019060200180831161041257829003601f168201915b50505050508152505081526020019060010190610291565b50505050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104b78261046e565b810181811067ffffffffffffffff821117156104d6576104d561047f565b5b80604052505050565b60006104e9610450565b90506104f582826104ae565b919050565b600067ffffffffffffffff8211156105155761051461047f565b5b61051e8261046e565b9050602081019050919050565b82818337600083830152505050565b600061054d610548846104fa565b6104df565b90508281526020810184848401111561056957610568610469565b5b61057484828561052b565b509392505050565b600082601f83011261059157610590610464565b5b81356105a184826020860161053a565b91505092915050565b600080604083850312156105c1576105c061045a565b5b600083013567ffffffffffffffff8111156105df576105de61045f565b5b6105eb8582860161057c565b925050602083013567ffffffffffffffff81111561060c5761060b61045f565b5b6106188582860161057c565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106798261064e565b9050919050565b6106898161066e565b82525050565b6000819050919050565b6106a28161068f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106e25780820151818401526020810190506106c7565b60008484015250505050565b60006106f9826106a8565b61070381856106b3565b93506107138185602086016106c4565b61071c8161046e565b840191505092915050565b600060808301600083015161073f6000860182610680565b5060208301516107526020860182610699565b506040830151848203604086015261076a82826106ee565b9150506060830151848203606086015261078482826106ee565b9150508091505092915050565b600061079d8383610727565b905092915050565b6000602082019050919050565b60006107bd82610622565b6107c7818561062d565b9350836020820285016107d98561063e565b8060005b8581101561081557848403895281516107f68582610791565b9450610801836107a5565b925060208a019950506001810190506107dd565b50829750879550505050505092915050565b6000602082019050818103600083015261084181846107b2565b905092915050565b600082825260208201905092915050565b7f63616e277420627579206120636f666665652077697468203020657468000000600082015250565b6000610890601d83610849565b915061089b8261085a565b602082019050919050565b600060208201905081810360008301526108bf81610883565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061090d57607f821691505b6020821081036109205761091f6108c6565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026109887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261094b565b610992868361094b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006109cf6109ca6109c58461068f565b6109aa565b61068f565b9050919050565b6000819050919050565b6109e9836109b4565b6109fd6109f5826109d6565b848454610958565b825550505050565b600090565b610a12610a05565b610a1d8184846109e0565b505050565b5b81811015610a4157610a36600082610a0a565b600181019050610a23565b5050565b601f821115610a8657610a5781610926565b610a608461093b565b81016020851015610a6f578190505b610a83610a7b8561093b565b830182610a22565b50505b505050565b600082821c905092915050565b6000610aa960001984600802610a8b565b1980831691505092915050565b6000610ac28383610a98565b9150826002028217905092915050565b610adb826106a8565b67ffffffffffffffff811115610af457610af361047f565b5b610afe82546108f5565b610b09828285610a45565b600060209050601f831160018114610b3c5760008415610b2a578287015190505b610b348582610ab6565b865550610b9c565b601f198416610b4a86610926565b60005b82811015610b7257848901518255600182019150602085019450602081019050610b4d565b86831015610b8f5784890151610b8b601f891682610a98565b8355505b6001600288020188555050505b505050505050565b6000608083016000830151610bbc6000860182610680565b506020830151610bcf6020860182610699565b5060408301518482036040860152610be782826106ee565b91505060608301518482036060860152610c0182826106ee565b9150508091505092915050565b60006020820190508181036000830152610c288184610ba4565b90509291505056fea26469706673582212205d59c7cc3215a88377b2b8df843d61727919055f93e0a9ba0e953a5734988cb364736f6c63430008110033";

type BuyMeACoffeeContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuyMeACoffeeContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuyMeACoffeeContract__factory extends ContractFactory {
  constructor(...args: BuyMeACoffeeContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BuyMeACoffeeContract> {
    return super.deploy(overrides || {}) as Promise<BuyMeACoffeeContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BuyMeACoffeeContract {
    return super.attach(address) as BuyMeACoffeeContract;
  }
  override connect(signer: Signer): BuyMeACoffeeContract__factory {
    return super.connect(signer) as BuyMeACoffeeContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuyMeACoffeeContractInterface {
    return new utils.Interface(_abi) as BuyMeACoffeeContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuyMeACoffeeContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BuyMeACoffeeContract;
  }
}