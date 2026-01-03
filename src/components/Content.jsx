import SubscriptionCard from "./SubscriptionCard";

export default function Content({
  subscriptions,
  subscriptionCount,
}) {
  return (
    <section className="content-container">
      <div className="content">
        <span className="label label--md">
          {subscriptionCount} subscriptions
        </span>

        <div className="content-grid">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}