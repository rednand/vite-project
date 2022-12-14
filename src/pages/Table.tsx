import React, { createElement, useState } from "react";
import data from "../json_data.json";

// lib para usar icones como url
// https://icons8.com.br/icons/set/editar

const Table = () => {
  const [ShowColoum, setShowColumn] = useState<any[]>([]);
  const [newData, setNewData] = useState<any[]>([]);
  const [data2, setData2] = useState<any[]>([]);
  const [rowLine, setRowLine] = useState<number>(0);
  const [header, setHeader] = useState<string | null>();

  // function AddRowTable() {
  //   return ShowColoum.map((item) => {
  //     return createElement(
  //       "td",
  //       {
  //         contentEditable: true,
  //         suppressContentEditableWarning: true,
  //         onBlur: (e) => {
  //           newData.splice(rowLine, 1, e?.target?.textContent);
  //         },
  //       },
  //       "Preencher"
  //     );
  //   });
  // }
  // function AddTitleTable() {
  //   return ShowColoum.map((item) => {
  //     return createElement(
  //       "td",
  //       {
  //         contentEditable: true,
  //         suppressContentEditableWarning: true,
  //         onBlur: (e) => {
  //           setHeader(e?.target?.textContent);
  //         },
  //       },
  //       "Titulo"
  //     );
  //   });
  // }

  // function SaveTable() {
  //   for (let i = 0; i < newData.length; i++) {
  //     data.map((item) =>
  //       item.data.map((item: any) => (item[`${header}`] = newData[i++]))
  //     );
  //     setData2([...data, data.map((item) => item.data)]);
  //   }
  // }
  // function teste() {
  //   const tested: any = [];

  //   for (let i = 0; i < data.map((item) => item.entidade.colunas).length; i++) {
  //     data.map((item) =>
  //       item.entidade.colunas.map((item, index) => {
  //         console.log(
  //           "🚀 ~ file: Table.tsx:62 ~ item.entidade.colunas.map ~ index",
  //           item.infos[index++]
  //         );
  //         tested.push(item.infos[index++]);
  //       })
  //     );
  //   }
  //   return tested;
  // }
  // console.log(teste(), "etstet");

  function testes() {
    let testeee: any = [];

    for (let i = 0; i < data[0].entidade.colunas[0].infos.length; i++) {
      // user.push(item.colunas[i].infos);
      // num = i;
      data.map((it) =>
        it.entidade.colunas.map((its) =>
          its.infos.map((it, o) => {
            if (o === i) {
              testeee.push(it);
            }
          })
        )
      );
    }
    var novoArray = [];
    var corte = data[0].entidade.colunas.length;
    for (var i = 0; i < testeee.length; i = i + corte) {
      novoArray.push(testeee.slice(i, i + corte));
    }

    return novoArray;
  }

  testes();
  return (
    <>
      {data.map(({ entidade }, index) => {
        return createElement(
          "div",
          {
            style: { width: "80%", margin: "5% 15% 10%", position: "absolute" },
            className: "container",
          },
          createElement(entidade.tags.h2, null, entidade.nomeEntidade),
          createElement(
            entidade.tags.table,
            {
              style: { width: "80vw" },
              className: "table table-striped",
            },
            createElement(
              "thead",
              null,
              createElement(
                entidade.tags.tr,
                { key: index },
                createElement(entidade.tags.td, null, "Actions"),
                entidade.colunas
                  .map((item) => Object.keys(item)[0])
                  .map((item3) => createElement(entidade.tags.td, null, item3))
                // ShowColoum.length > 0 ? AddTitleTable() : null
              )
            ),
            createElement(
              "tbody",
              null,
              entidade.colunas.map(({ infos }, index) => {
                return createElement(
                  entidade.tags.tr,
                  { onClick: () => console.log(index) },
                  testes()
                );
              })
            ),
            createElement(
              "button",
              {
                onClick: () =>
                  setShowColumn([...ShowColoum, ShowColoum.length + 1]),
              },
              "Incluir"
            ),
            createElement(
              "button",
              null,
              // {// onClick: () => SaveTable(), },
              "Salvar"
            )
          )
        );
      })}
    </>
  );
};

export default Table;
