import ProductList from "../ProductList/ProductList";
import useDownload from "../../hooks/useDownload";
import { useEffect, useState } from "react";

export default function DownloadList({ api, selectedColor, onColorsGathered }) {
  const { download, colorUtility } = useDownload();
  const [jsonData, setJsonData] = useState(null);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await download(api);
      setJsonData(json);
      const gatheredColors = colorUtility(json);
      setColors(gatheredColors);
      onColorsGathered(gatheredColors);
    };

    fetchData();
  }, [api, onColorsGathered]);

  return (
    <>
      {jsonData && (
        <ProductList products={jsonData} selectedColor={selectedColor} />
      )}
    </>
  );
}
