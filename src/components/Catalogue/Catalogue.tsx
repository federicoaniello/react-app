import { useEffect, useState, ChangeEvent } from "react";
import DownloadList from "../DownloadList/DownloadList";
import { links_data } from "../Carousel/data";
import styles from "./Catalogue.module.scss";
import Select from "../UI/Select/Select";
import { ILinksData } from "../../model/ILinksData";
import React from "react";


const Catalogue = () => {
  const [api, setApi] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleListChange = (api: string) => {
    setApi(api);
    setSelectedColor("");
  };

  useEffect(() => {
    const API = links_data.find((tab) => tab.isDefault === true)?.api;
    if (API) {
      setApi(API);
    }
  }, []);

  return (
    <div className="container-md">
      <h3 className={styles["title--purchase"] + " text-center"}>Purchase Online</h3>
      <div className="container-md">
        <div className={`${styles.tabs} mb-5`}>
          <div className={styles["tabs--container"]}>
            {links_data.map((link: ILinksData) => (
              <a
                key={link.name}
                className={api === link.api ? `${styles["router-link-active"]}` : ""}
                onClick={() => handleListChange(link.api)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Select colors={colors} selectedColor={selectedColor} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedColor(e.target.value)} />
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
