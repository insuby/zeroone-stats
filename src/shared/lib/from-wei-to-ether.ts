import { fromWei } from 'web3-utils';

export const fromWeiToEther = (data: number) => {
  if (!data) return 0;
  return +fromWei(data, 'ether');
};