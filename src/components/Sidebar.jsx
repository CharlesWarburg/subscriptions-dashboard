import Filters from "./Filters";

export default function Sidebar({
  filter,
  setFilter,
  statusFilter,
  setStatusFilter,
  monthlyTotal,
}) {
  return (
    <aside className="sidebar">
      <header className="header">
        <div className="account-info">
          <div className="profile-image">
            <img
              src="https://avatars.githubusercontent.com/u/251178885?v=4"
              alt="Charlie Warburg Profile Image"
            />
          </div>
          <span>Charlie</span>
        </div>

        <div className="intro-text">
          <h3>Subscriptions</h3>
          <p>An overview of your recurring costs</p>
        </div>
      </header>

      <div className="totals">
        <div className="total">
          <span className="label label--md">Monthly total</span>
          <div className="amount">
            <span className="currency currency--lg">£</span>
            <output className="value value--xl">
              {monthlyTotal}
            </output>
          </div>
        </div>
      </div>

        <Filters
          filter={filter}
          setFilter={setFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
    </aside>
  );
}