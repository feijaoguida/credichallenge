import React from "react";

import "antd/dist/antd.css";

import { Layout } from "antd";
import "./styles.css";

const { Footer } = Layout;

const FooterAnt: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default FooterAnt;
