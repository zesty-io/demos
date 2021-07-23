import React from "react";
import Layout from "../../components/Layout/";

import { AutoLayout } from "@zesty-io/react-autolayout";
import { CustomTextarea } from "./CustomTextarea";
import { CustomColumn } from "./CustomColumn";

const IndexPage = ({ posts }) => (
  <Layout>
    <AutoLayout url={'https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON'} components={{
      "textarea": CustomTextarea,
      "column": CustomColumn
    }} />
  </Layout>
);

export default IndexPage;
