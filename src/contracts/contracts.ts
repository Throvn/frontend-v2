import { Chains } from '@/src/config/web3'
import ERC_20_abi from '@/src/contracts/abis/ERC20.json'

export const contracts = {
  WxDAI: {
    address: {
      [Chains.gnosis]: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    },
    abi: ERC_20_abi,
  },
  USDC: {
    address: {
      [Chains.gnosis]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
    },
    abi: ERC_20_abi,
  },
  AaveProtocolDataProvider: {
    address: {
      [Chains.gnosis]: '0x24dCbd376Db23e4771375092344f5CbEA3541FC0',
    },
  },
} as const

export type ContractsKeys = keyof typeof contracts
