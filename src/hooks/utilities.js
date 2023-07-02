export const utilities = () => {
    const download = async (link) => {
      const res = await fetch(link);
      if (!res.ok) return;
      const toJson = await res.json();
      return toJson;
    };
  
    const colorUtility = (jsonData) => {
      let colors = [];
      jsonData.forEach(({ color }) => {
        colors.push(...color);
      });
      colors = [...new Set(colors)];
      return colors;
    };
  
    /**
     * Trasforma una stringa in Capitalized ( lettera maiuscola iniziale )
     * @param {string} string
     * @returns string
     */
    const toCapitalized = (string) => {
      if (string === null || string === undefined || string === "") return "";
      return `${string[0].toUpperCase()}${string.substring(1)}`;
    };
  
    return {
      download,
      colorUtility,
      toCapitalized,
    };
  };
  
  export default utilities;
  