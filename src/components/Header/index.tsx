import React from "react";

import "antd/dist/antd.css";

import { Layout, Menu } from "antd";
import "./styles.css";

const { Header } = Layout;

const HeaderAnt: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu className="menu" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Contratos</Menu.Item>
        <Menu.Item key="2">Solicitações</Menu.Item>
        <Menu.Item key="3">Imprimir Folha</Menu.Item>
        <Menu.Item key="4">Imprimir</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderAnt;
