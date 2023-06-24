import React, { useEffect, useRef, useState } from "react";
import DownloadList from "../DownloadList/DownloadList";
import useDownload from "../../hooks/useDownload";
import { links_data } from "../Carousel/data";
import styles from "./Catalogue.module.scss";
import Select from "../UI/Select/Select";

const Catalogue = () => {
  const [api, setApi] = useState("");
  const [colors, setColors] = useState([]);
  const selectedColorRef = useRef(null);
  const [selectedColor,setSelectedColor] = useState("");
  const onColorsReceived = (cl) => {
    setColors(cl);
    selectedColorRef.current.value = "";
  };

  const onSelectedColor = () => {
    setSelectedColor(selectedColorRef.current.value)  
  }

  useEffect(() => {
    const default_api = links_data.find((tab) => tab.isDefault === true).api;
    setApi(default_api);
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
                className={api === link.api ? styles["router-link-active"] : ""}
                onClick={() => setApi(link.api)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Select colors={colors} onChange={onSelectedColor} ref={selectedColorRef} />
          
        </div>
        <DownloadList
          api={api}
          selectedColor={selectedColor}
          onColorsGathered={onColorsReceived}
        />
      </div>
    </div>
  );
};

export default Catalogue;
