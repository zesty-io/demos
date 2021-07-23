import React from "react";
import Layout from "../../components/Layout/";

import { AutoLayout } from "@zesty-io/react-autolayout";

// https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON

const IndexPage = ({ posts }) => (
  <Layout>
    <AutoLayout url={'https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON'} />
  </Layout>
);

export default IndexPage;
