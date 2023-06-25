import { useEffect, useState } from "react";
import DownloadList from "../DownloadList/DownloadList";
import { links_data } from "../Carousel/data";
import styles from "./Catalogue.module.scss";
import Select from "../UI/Select/Select";

const Catalogue = () => {
  const [api, setApi] = useState("");
  const [colors, setColors] = useState([]);
  const [selectedColor,setSelectedColor] = useState("");

  const onSelectedColor = (event) => {
    setSelectedColor(event.target.value)  
  }

  const handleListChange = (link) => {
    const {api} = link;
    setApi(api);
    setSelectedColor(prev => "");  
  }

  useEffect(() => {
    const API = links_data.find((tab) => tab.isDefault === true).api;
    setApi(API);
  }, []);

  return (
    <div className="container-md">
      <h3 className={styles["title--purchase"] + " text-center"}>Purchase Online</h3>
      <div className="container-md">
        <div className={styles.tabs + " mb-5"}>
          <div className={styles["tabs--container"]}>
            {links_data.map((link) => (
              <a
                key={link.name}
                className={api === link.api ? `${styles["router-link-active"]}` : null}
                onClick={() => {handleListChange(link)}}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Select colors={colors} selectedColor={selectedColor} onChange={(e) => onSelectedColor(e)} />
          
        </div>
        <DownloadList
          api={api}
          selectedColor={selectedColor}
          setColors={setColors}
        />
      </div>
    </div>
  );
};

export default Catalogue;
