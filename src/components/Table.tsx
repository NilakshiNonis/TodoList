import React from "react";

interface Itable {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface TableProps {
  items: Itable[];
  onCheckBoxChange: (id: number, isChecked: boolean) => void;
}

const Table: React.FC<TableProps> = ({ items, onCheckBoxChange }) => {
  const handleCheckboxChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onCheckBoxChange(id, event.target.checked);
    };
  return (
    <div>
      <table style={{ border: "2px solid black", width: "50%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Items</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Status
            </th>
          </tr>
        </thead>
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
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={handleCheckboxChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
