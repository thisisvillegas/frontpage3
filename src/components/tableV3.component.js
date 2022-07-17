import React, { useState } from "react";
import list from "../data/userInfo.json";
import axios from "axios";

const TableColumn = (columnNumber) => {
  let returnArray = [];
  for (let i = 0; i < list.tableData.length; i++) {
    if (list.tableData[i].column === columnNumber.data) {
      returnArray.push(
        <li>
          <a href={list.tableData[i].url}>{list.tableData[i].name}</a>
        </li>
      );
    }
  }
  return returnArray;
};

const Table = () => {
  const [tableData, setTableData] = useState(list.tableData);

  return (
    <div>
      <table align="center">
        <tr>
          <td>
            <ul>
              <TableColumn data={1} />
            </ul>
          </td>
          <td>
            <ul>
              <TableColumn data={2} />
            </ul>
          </td>
          <td>
            <ul>
              <TableColumn data={3} />
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Table;
