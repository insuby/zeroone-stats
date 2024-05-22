import { createContext, useContext } from 'react';

export type CryptoContextProps = {
  currency: string
  chainId: number
  usdRate: number
  coefficient: number,
} | null;

export const CryptoContext = createContext<CryptoContextProps>(null);

export const useCryptoContext = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('CryptoContext API Error');
  }

  return context;
};
