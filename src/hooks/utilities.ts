import { IProduct } from "../model/IProduct";

export const utilities = () => {
  const download = async (link: string) => {
    try {
      const res = await fetch(link);
      if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`);
      const toJson = await res.json();
      return toJson;
    } catch (err) {
      console.error(err);
    }
  };

  const colorUtility = (jsonData: IProduct[]): string[] => {
    if (!jsonData) return [];
    const colors = jsonData.map((item) => item.color).flat();
    return [...new Set(colors)] as string[];
  };

  
  const toCapitalized = (string: string): string => {
    if (typeof string !== 'string') return '';
    return `${string[0].toUpperCase()}${string.substring(1)}`;
  };

  return {
    download,
    colorUtility,
    toCapitalized,
  };
};

export default utilities;
