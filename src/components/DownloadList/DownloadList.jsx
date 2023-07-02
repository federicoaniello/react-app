import ProductList from "../ProductList/ProductList";
import utilities from "../../hooks/utilities";
import { useEffect, useState } from "react";

export default function DownloadList({ api, selectedColor, setColors }) {
  const { download, colorUtility } = utilities();
  const [jsonData, setJsonData] = useState(null);

useEffect(() => {
  download(api).then(res => {

    setJsonData(res);
    const gatheredColors = colorUtility(res);
    setColors(gatheredColors);
  })

  return () => {
    setJsonData(null);
  }
}, [api])

  

  return (
    <>
      {jsonData && (
        <ProductList products={jsonData} selectedColor={selectedColor} />
      )}
    </>
  );
}
