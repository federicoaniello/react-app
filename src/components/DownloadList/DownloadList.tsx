import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import utilities from "../../hooks/utilities";
import { IProduct } from "../../model/IProduct";


type Props = {
  api: string;
  selectedColor: string;
  setColors: (colors: string[]) => void;
};

const { download, colorUtility } = utilities();

const DownloadList = ({ api, selectedColor, setColors }: Props): JSX.Element => {
  const [jsonData, setJsonData] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: IProduct[] = await download(api);
        if(res){
          setJsonData(res);
          const gatheredColors: string[] = colorUtility(res);
          setColors(gatheredColors);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    return () => setJsonData(null);
  }, [api, setColors]);

  return (jsonData && <ProductList products={jsonData} selectedColor={selectedColor} />)!;
};

export default DownloadList;
