import React from "react";
import { createPortal } from "react-dom";
import Carousel from "../../components/Carousel/Carousel";
import Catalogue from "../../components/Catalogue/Catalogue";
import TextList from "../../components/TextList/TextList";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";

export const Main = (): React.JSX.Element => {
  return (
    <>
      {createPortal(<Modal />, document.body)}
      <Header />
      <Carousel />
      <TextList />
      <Catalogue />
    </>
  );
};
