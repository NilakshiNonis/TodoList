import React, { useState, useEffect } from "react";
import Table from "./components/Table";

interface Itable {
  id: number;
  title: string;
  isChecked?: boolean;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Itable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Itable[] = await response.json();

        const mappedData = data.map((todo) => ({
          id: todo.id,
          title: todo.title,
          isChecked:todo.completed
        }));

        setItems(mappedData.slice(0, 50));
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (error) return <div>Error: {error}</div>;

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, isChecked } : item))
    );
  };
  const completedItems = items.filter((items) => items.isChecked).length;
  const toBeCompletedItems = items.length - completedItems;

  return (
    <div>
      <h1>Todo List</h1>
      <Table items={items} onCheckBoxChange={handleCheckboxChange} loading={loading}/>
      <h3 style={{ border: "1px solid black", width: "20%", padding: "2px" }}>
        Completed Items count: {completedItems}
      </h3>
      <h3 style={{ border: "1px solid black", width: "20%", padding: "2px" }}>
        To do Items count: {toBeCompletedItems}
      </h3>
    </div>
  );
};

export default App;
