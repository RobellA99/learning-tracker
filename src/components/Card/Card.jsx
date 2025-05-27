import { useState } from "react";
import "./Card.scss";

export default function Card({ item, onComplete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card${item.status === "completed" ? " card--completed" : ""}`}
    >
      <div className="card__header" onClick={() => setExpanded((e) => !e)}>
        <span>{item.name}</span>
        <button className="card__arrow">{expanded ? "▲" : "▼"}</button>
      </div>
      {expanded && (
        <div className="card__details">
          <p>Status: {item.status}</p>
          <p>Category: {item.category}</p>
          <p>Goals: {item.goals?.join(", ")}</p>
          <p>Resources: {item.resources?.join(", ")}</p>
          {item.status !== "completed" && (
            <button
              className="card__complete"
              onClick={() => onComplete(item.id)}
            >
              Mark as Complete
            </button>
          )}
        </div>
      )}
    </div>
  );
}
