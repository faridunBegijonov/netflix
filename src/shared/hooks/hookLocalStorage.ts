export const useGetStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
