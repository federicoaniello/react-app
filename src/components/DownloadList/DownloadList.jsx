import ProductList from "../ProductList/ProductList";
import useDownload from "../../hooks/useDownload";
import { useEffect, useState } from "react";

export default function DownloadList({ api, selectedColor, setColors }) {
  const { download, colorUtility } = useDownload();
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await download(api);
      setJsonData(json);
      const gatheredColors = colorUtility(json);
      setColors(gatheredColors);
    };

    fetchData();
  }, [api,selectedColor]);

  return (
    <>
      {jsonData && (
        <ProductList products={jsonData} selectedColor={selectedColor} />
      )}
    </>
  );
}
