import React, { useEffect, useRef, useState } from "react";
import DownloadList from "../DownloadList/DownloadList";
import useDownload from "../../hooks/useDownload";
import { links_data } from "../Carousel/data";
import styles from "./Catalogue.module.scss";

const Catalogue = () => {
  const select_color = useRef(null);
  const [api, setApi] = useState("");
  const [colors, setColors] = useState([]);
  const { toCapitalized } = useDownload();

  const onChange = (event) => {
    select_color.current.value = event.target.value;
  };

  const onColorsReceived = (cl) => {
    setColors(cl);
    select_color.current.value = "";
  };

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
          <select
            ref={select_color}
            value=""
            onChange={onChange}
          >
            <option value="">Filter by color</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {toCapitalized(color)}
              </option>
            ))}
          </select>
        </div>
        <DownloadList
          api={api}
          selectedColor={select_color.current ? select_color.current.value : ""}
          onColorsGathered={onColorsReceived}
        />
      </div>
    </div>
  );
};

export default Catalogue;
