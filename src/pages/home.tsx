import React from "react";
import { NextPage } from "next";

import { withAuth } from "../components/hoc/withAuth";

const Home: NextPage = ({}) => {
  return <div>Home</div>;
};

export default withAuth(Home);
