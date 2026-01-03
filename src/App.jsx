import { useState } from "react";
import "/src/styles/index.css";
import subscriptions from "./data/Subscriptions";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSubscriptions = subscriptions.filter((sub) => {
    // Type filter
    if (filter === "subscriptions" && !sub.isRecurring) return false;
    if (filter === "one-offs" && sub.isRecurring) return false;

    // Status filter
    if (statusFilter === "active" && sub.status !== "active") return false;
    if (statusFilter === "inactive" && sub.status !== "inactive") return false;

    return true;
  });

  const subscriptionCount = filteredSubscriptions.length;

  const monthlyTotal = filteredSubscriptions
    .filter((sub) => sub.status === "active" && sub.isRecurring)
    .reduce((total, sub) => total + sub.amount, 0)
    .toFixed(2);

  return (
    <main className="page">
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        monthlyTotal={monthlyTotal}
      />

      <Content
        subscriptions={filteredSubscriptions}
        subscriptionCount={subscriptionCount}
      />
    </main>
  );
}