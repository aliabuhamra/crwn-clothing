import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

export default function CollectionPreviw({ title, items }) {
  return (
    <>
      <div className="collection-preview">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItems }) => (
              <CollectionItem key={id} {...otherItems} />
            ))}
        </div>
      </div>
    </>
  );
}
