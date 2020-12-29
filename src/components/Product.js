import React from "react";
import Label from "./ui/Label";

const Product = ({ data }) => {
  console.log(data[0]);
  return (
    <div style={{ padding: "10px" }}>
      <Label label="Product Details" />
      {data.map((p) => {
        const variant = p.variants[0];
        return (
          <div key={p.id}>
            <img
              width={variant.featured_image.width}
              height={variant.featured_image.height}
              src={variant.featured_image.src}
              alt={variant.title}
            />
            <Label label="Title" value={p.title} />
            <Label label="Price" value={variant.price} />
            <Label label="SKU" value={variant.sku} />
            <Label label="Variant Title" value={variant.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
