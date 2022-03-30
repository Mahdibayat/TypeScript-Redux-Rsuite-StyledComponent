import { ActionType } from "./../../scripts/interfaces";
import { GET_ALL_TOKENS, CALL_ALL_TOKENS } from "./actionTypes";

export interface Token {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string | null;
}

export const callAllTokens = (): ActionType => ({
  type: CALL_ALL_TOKENS,
  payload: null,
});

export const getAllTokens = (tokens: any): ActionType => ({
  type: GET_ALL_TOKENS,
  payload: tokens,
});
