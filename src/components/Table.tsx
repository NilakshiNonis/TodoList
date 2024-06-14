import React, { useState } from "react";
import Checkbox from "./Checkbox";

interface Itable {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface TableProps {
  items: Itable[];
  onCheckBoxChange: (id: number, isChecked: boolean) => void;
  loading?: boolean;
}

const Table: React.FC<TableProps> = ({ items, onCheckBoxChange, loading }) => {
  return (
    <div>
      <table style={{ border: "2px solid black", width: "50%" }}>
        <thead>
          <tr style={{width:"75%"}}>
            <th style={{ border: "1px solid black", padding: "8px" }}>Items</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Status
            </th>
          </tr>
        </thead>
        
        {loading ? (
        <tr>
        <td colSpan={2} style={{ textAlign: "center", padding: "8px" }}>
          Loading...
        </td>
      </tr>
      ) : (
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <span style={{ marginLeft: "10px" }}>
                  {item.isChecked ? (
                    <del style={{ color: "red" }}>{item.title}</del>
                  ) : (
                    item.title
                  )}
                </span>
              </td>
              <td
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "8px",
                }}
              >
                <Checkbox
                  id={item.id}
                  isChecked={item.isChecked}
                  onCheckBoxChange={onCheckBoxChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
            )}
      </table>
    </div>
  );
};

export default Table;
