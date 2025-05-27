import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
const API_URL = import.meta.env.VITE_BACK_END_URL;

export default function LearnPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ category: "all" });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API_URL}/skills`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setItems(data);
    };
    const fetchCategories = async () => {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API_URL}/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
    fetchCategories();
  }, []);

  const handleComplete = async (id) => {
    const token = localStorage.getItem("authToken");
    await fetch(`${API_URL}/skills`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, status: "completed" }),
    });
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "completed" } : item
      )
    );
  };

  const filteredItems =
    filter.category === "all"
      ? items
      : items.filter((item) => item.category === filter.category);

  return (
    <>
      <Header />
      <div className="filters">
        <label>
          Category:
          <select
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        {filteredItems
          .filter((item) => item.status !== "completed")
          .map((item) => (
            <Card key={item.id} item={item} onComplete={handleComplete} />
          ))}
        <h2>Completed</h2>
        {filteredItems
          .filter((item) => item.status === "completed")
          .map((item) => (
            <Card key={item.id} item={item} onComplete={handleComplete} />
          ))}
      </div>
    </>
  );
}
