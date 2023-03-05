import React, { useEffect, useState } from "react";
import { DataType, Discount } from "../type";
import "./couponBanner.less";
interface CouponBannerTwoProps {
  data?: DataType;
}
const CouponBannerTwo = (props: CouponBannerTwoProps) => {
  const { data } = props;
  const discountContent = (
    <>
      <p className="down-content-h1">{"30%"}</p>
      <p className="down-content-h2">{"off"}</p>
    </>
  );
  return (
    <div className="banner2">
      <div className="second-text">
        <p className="favorite">{Discount.Enjoy}</p>
        <p className="favorite">{Discount.favorite}</p>
        {discountContent}
      </div>
      <div className="hours">
        <span className="end">{"Ends in"}</span>
        <span className="h">{data?.hours}</span>h
        <span className="h">{data?.minutes}</span>m
        <span className="h">{data?.miao}</span>s
      </div>
      <div className="card-content">
        <div className="left">{discountContent}</div>
      </div>
    </div>
  );
};

export default CouponBannerTwo;
