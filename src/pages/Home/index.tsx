import React, { useState } from "react";
import "./Home.css";

import "antd/dist/antd.css";

import { Layout, Table } from "antd";

import HeaderAnt from "../../components/Header";
import FooterAnt from "../../components/Footer";

import * as users from "../../users.json";
import * as companies from "../../companies.json";

interface usersRepository {
  id: number;
  cpf: string;
  email: string;
  name: string;
  salary: number;
  companyId: number;
  value: number;
}

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

  function selectRow(record: { id: string }) {
    const selectedRowIdSelect: any = [...selectedRowId];

    if (selectedRowIdSelect.indexOf(record.id) >= 0) {
      selectedRowIdSelect.splice(selectedRowIdSelect.indexOf(record.id), 1);
    } else {
      selectedRowIdSelect.push(record.id);
    }
    setSelectedRowId(selectedRowIdSelect);
    console.log(selectedRowId);
    console.log(selectedRowIdSelect);
    console.log(record.id);
    console.log(record);
  }
  const onSelectedRowIdChange = (
    selectedRowIdSelect: React.SetStateAction<any[]>
  ) => {
    setSelectedRowId(selectedRowIdSelect);
  };

  //const { selectedRowId } = this.state;
  const selectedRowIdSelect: any = selectedRowId;
  const rowSelection = {
    selectedRowIdSelect,
    onChange: onSelectedRowIdChange,
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
              onRow={(record) => ({
                onClick: () => {
                  selectRow(record);
                },
              })}
            />
          </div>
        </div>
      </Content>
      <FooterAnt />
    </Layout>
  );
}

export default Home;
