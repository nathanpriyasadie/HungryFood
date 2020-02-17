import React from 'react';

export interface CardItemResponse {
  shop_name: string;
  item_name: string;
  item_price: number;
  item_discount: number;
}

export interface CardItemProps extends CardItemResponse {}

export default function CardItem() {
  return (
    <>
      <></>
    </>
  );
}
