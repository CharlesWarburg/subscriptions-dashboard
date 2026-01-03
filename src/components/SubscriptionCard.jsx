import Icon from "./Icons";

export default function SubscriptionCard({ subscription }) {
  const isInactive = subscription.status === "inactive";
  const isOneOff = !subscription.isRecurring;

  return (
    <article
      className={`subscription-card ${
        isInactive ? "is-inactive" : ""
      } ${isOneOff ? "is-one-off" : ""}`}
    >
      <div className="card-badge">
        <span
          className={`status label--xs ${
            isInactive ? "status--inactive" : "status--active"
          }`}
        >
          {subscription.status.toUpperCase()}
        </span>
      </div>

      <header className="card-header">
        {subscription.icon && (
          <div className="icon-wrapper">
            <Icon name={subscription.icon} />
          </div>
        )}
        <span className="card-title">{subscription.name}</span>
      </header>

      <dl className="card-meta">
        <div className="meta-item meta-item--type">
          <dt className="label label--sm">Category</dt>
          <dd className="value value--md">{subscription.type}</dd>
        </div>

        <div className="meta-item meta-item--amount">
          <dt className="label label--sm">
            {subscription.isRecurring ? "Recurring" : "One-off"}
          </dt>
          <dd className="amount">
            <span className="currency currency--sm">{subscription.currency}</span>
            <span className="value value--lg">{subscription.amount}</span>
          </dd>
        </div>
      </dl>
    </article>
  );
}