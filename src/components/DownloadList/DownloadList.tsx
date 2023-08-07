import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import utilities from "../../hooks/utilities";
import React from "react";

interface Product {
  color: string[];
  // Add other properties of the product here
}

type Props = {
  api: string;
  selectedColor: string;
  setColors: (colors: string[]) => void;
};

const DownloadList = ({ api, selectedColor, setColors }: Props): JSX.Element => {
  const [jsonData, setJsonData] = useState<Product[] | null>(null);
  const { download, colorUtility } = utilities();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: Product[] = await download(api);
        setJsonData(res);
        const gatheredColors: string[] = colorUtility(res);
        setColors(gatheredColors);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    return () => setJsonData(null);
  }, [api]);

  return (jsonData && <ProductList products={jsonData} selectedColor={selectedColor} />);
};

export default DownloadList;
