export const wait = (period: number): Promise<any> =>
  new Promise(resolve => setTimeout(resolve, period));
