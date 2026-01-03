import FilterIcon from "./FilterIcons";

export default function Filters({
  filter,
  setFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="filters">
      {/* TYPE FILTER */}
      <div className="filter-container">
        <div className="filter-badge" />
        <FilterIcon variant="type" />

        <div className="filter-options">
          <span className="label label--sm">Type</span>

          <div className="filter-buttons">
            <button
              className={`filter-button ${
                filter === "all" ? "is-active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={`filter-button ${
                filter === "subscriptions" ? "is-active" : ""
              }`}
              onClick={() => setFilter("subscriptions")}
            >
              Subscriptions
            </button>

            <button
              className={`filter-button ${
                filter === "one-offs" ? "is-active" : ""
              }`}
              onClick={() => setFilter("one-offs")}
            >
              One-offs
            </button>
          </div>
        </div>
      </div>

      {/* STATUS FILTER */}
      <div className="filter-container">
        <div className="filter-badge" />
        <FilterIcon variant="status" />

        <div className="filter-options">
          <span className="label label--sm">Status</span>

          <div className="filter-buttons">
            <button
              className={`filter-button ${
                statusFilter === "all" ? "is-active" : ""
              }`}
              onClick={() => setStatusFilter("all")}
            >
              All
            </button>

            <button
              className={`filter-button ${
                statusFilter === "active" ? "is-active" : ""
              }`}
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>

            <button
              className={`filter-button ${
                statusFilter === "inactive" ? "is-active" : ""
              }`}
              onClick={() => setStatusFilter("inactive")}
            >
              Inactive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}