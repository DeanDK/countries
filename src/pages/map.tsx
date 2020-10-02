import React from "react";
import NextHead from "next/head";
import { NextPage, NextPageContext } from "next";

import { isAuth } from "../utils/isAuth";
import MapPage from "./../modules/Map/Map";

const Map: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Map</title>
      </NextHead>
      <MapPage />
    </>
  );
};

export default Map;

export const getServerSideProps = async (ctx: NextPageContext) => isAuth(ctx);
