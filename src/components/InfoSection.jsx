import React from "react";

export default function InfoSection({
  title,
  description,
  imageUrl,
  imageAlt,
}) {
  return (
    <section className="section__container" aria-labelledby="section-title">
      <h5 className="section__title">{title}</h5>
      <p className="section__info">{description}</p>
      {imageUrl && <img src={imageUrl} alt={imageAlt || "Informative Image"} />}
    </section>
  );
}
