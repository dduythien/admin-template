import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-layout";

export default () => (
  <DefaultFooter
    copyright="2021 HTSofware"
    links={[
      {
        key: "Soft",
        title: "Soft",
        blankTarget: true,
        href: "",
      },
      {
        key: "github",
        title: <GithubOutlined />,
        href: "https://github.com/ychengcloud/react-antd-vite-admin",
        blankTarget: true,
      },
      {
        key: "Managemnet platform",
        title: "Managemnet platform",
        blankTarget: true,
        href: "",
      },
    ]}
  />
);
