export default function FilterIcon({ variant = "type" }) {
  if (variant === "status") {
    return (
      <svg
        className="filter-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
      >
        <rect
          x="0.5"
          y="1.21436"
          width="13.3571"
          height="15.7857"
          rx="3"
          stroke="currentColor"
          strokeWidth={1.25}
        />
        <path
          d="M3.5 9.81818L5.92857 12L10.5 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.25}
        />
      </svg>
    );
  }

  return (
    <svg
      className="filter-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
    >
      <path
        d="M5.22728 0.5V2.92857"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <path
        d="M8.77273 0.5V2.92857"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <rect
        x="0.5"
        y="1.71436"
        width="13"
        height="15.7857"
        rx="3"
        stroke="currentColor"
        strokeWidth={1.25}
      />
      <path
        d="M3.41978 7.5H8.77272"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <path
        d="M3.41978 11.5H6.82619"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
    </svg>
  );
}