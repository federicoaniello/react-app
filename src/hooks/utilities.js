export const utilities = () => {
  const download = async (link) => {
    try {
      const res = await fetch(link);
      if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`);
      const toJson = await res.json();
      return toJson;
    } catch (err) {
      console.error(err);
    }
  };

  const colorUtility = (jsonData) => {
    const colors = jsonData.reduce((acc, item) => [...acc, ...item.color], []);
    return [...new Set(colors)];
  };

  /**
   * Transforms a string to capitalized form (initial letter in uppercase)
   * @param {string} string
   * @returns string
   */
  const toCapitalized = (string) => {
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
