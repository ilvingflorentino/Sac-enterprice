"use client";
import React, { useState } from "react";
import {
  Space,
  Table,
  Tag,
  AutoComplete,
  Button,
  Layout,
  Menu,
  Select,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GoldTwoTone,
} from "@ant-design/icons";
import type { TableProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import "./index.css";

interface DataType {
  Nl: string;
  Fa: string | number;
  Uu: string;
  Tipos: string;
  Active: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Numeros de Licencias",
    dataIndex: "Nl",
    key: "Nl",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Fechas de Activacion",
    dataIndex: "Fa",
    key: "Fa",
  },
  {
    title: "Ultimo Uso",
    dataIndex: "Uu",
    key: "Uu",
  },
  {
    title: "Tipos",
    key: "Tipos",
    dataIndex: "Tipos",
    render: (_, { Tipos }) => (
      <>
        {Tipos.split(",").map((Tipo: string) => {
          let color = Tipos.length > 5 ? "geekblue" : "green";
          if (Tipos === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={Tipos}>
              {Tipos.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Activadas",
    key: "Active",
    render: (_, record) => (
      <Space size="middle">
        <a>{record.Active}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    Nl: "XP34-9261-12JU-8731",
    Fa: "03-Abril-2024",
    Uu: "15",
    Tipos: "Premiun",
    Active: "Si",
  },
  {
    Nl: "TQ69-8961-65PS-7619",
    Fa: "14-Junio-2024",
    Uu: "6",
    Tipos: "Basic",
    Active: "Si",
  },
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(true);
  const [options, setOptions] = useState<DefaultOptionType[]>([]);

  const handleSearch = (value: string) => {
    setOptions(() => {
      if (!value || value.includes("@")) {
        return [];
      }
      return ["gmail.com", "163.com", "qq.com"].map<DefaultOptionType>(
        (domain) => ({
          label: `${value}@${domain}`,
          value: `${value}@${domain}`,
        })
      );
    });
  };

  return (
    <div>
      <link rel="icon" href={"Favicon.ico"} />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="custom-sider"
        >
          <div className="demo-logo-vertical" />
          <Menu
            className="menu"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <GoldTwoTone />,
                label: "Administracion de Licencias",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "16px", width: 70, height: 70 }}
            />
          </Header>

          <div className="search-container">
            <h1>Administracion de Licencias</h1>
            <h4>Nombre Empresa o Persona</h4>
            <div className="search-bar">
              <AutoComplete
                style={{ width: 300 }}
                onSearch={handleSearch}
                placeholder="Escriba Nombre, Rnc, Cedula o Licencia"
                options={options}
              />
              <Button type="primary">Buscar</Button>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
              <Select style={{ width: 120 }} />
            </div>
            <div className="date">
              <h2>Cliente</h2>
              <h2>Socio</h2>
              <h2>Intermediario</h2>
            </div>
          </div>

          <Table columns={columns} dataSource={data} style={{ width: 1100 }} />
          <div className="link">
            <Link href={"/generarlicencias"}>
              <Button type="primary" className="Generarlicencia">
                Generar Nuevas Licencias
              </Button>
            </Link>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
