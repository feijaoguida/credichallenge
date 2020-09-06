import React, { useState } from "react";
import "./Home.css";

import "antd/dist/antd.css";

import { Layout, Table } from "antd";

import HeaderAnt from "../../components/Header";
import FooterAnt from "../../components/Footer";

import * as users from "../../users.json";
//import * as companies from "../../companies.json";

/*
interface companiesInterface {
  id: string;
  cnpj: string;
  fantasyName: string;
  name: string;
  selected: boolean;
}

let idCompany = companies.data.filter(t=>t.selected ===true)

const userFilter = users.data.map((user) => {
  if (user.companyId === idCompany.id) {
    return {
      ...user,
    };
  }
  return user;
});
*/

const { Content } = Layout;

const columns = [
  {
    title: "NOME",
    dataIndex: "name",
  },
  {
    title: "CPF",
    dataIndex: "cpf",
  },
  {
    title: "SALÁRIO DISPONÍVEL",
    dataIndex: "salary",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
  },

  {
    title: "Empresa",
    dataIndex: "companyId",
  },
];

function Home() {
  const [selectedRowId, setSelectedRowId] = useState<any[]>([]);

  const onSelectChange = (selectedRowId: React.SetStateAction<any[]>) => {
    setSelectedRowId(selectedRowId);
  };

  const rowSelection = {
    selectedRowId,
    onChange: onSelectChange,
  };

  return (
    <Layout className="layout">
      <HeaderAnt />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <h1 className="title">Solicitação de Emprestimo</h1>
          <div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={users.data}
            />
          </div>
        </div>
      </Content>
      <FooterAnt />
    </Layout>
  );
}

export default Home;
