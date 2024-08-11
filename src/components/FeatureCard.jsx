import React from "react";

export default function FeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
}) {
  return (
    <section className="feature__card" aria-labelledby="feature-title">
      <div className="feature__icon" />
      <h5 className="feature__title">{title}</h5>
      <div className="feature__info">{description}</div>
      {imageUrl && (
        <img className="feature__image" src={imageUrl} alt={imageAlt} />
      )}
    </section>
  );
}
