import React, { useEffect, useState } from "react";
import { DataType, Discount } from "../type";
import "./couponBanner.less";

interface CouponBannerOneProps {
  data?: DataType;
}

const CouponBannerOne = (props: CouponBannerOneProps) => {
  const { data } = props;
  return (
    <div className="banner1">
      <div className="content">
        {/* 第一块图片 */}
        <div className="first">
          <img className="img-first-png" src="./img/01.png" />
        </div>
        {/* 第二块文案 */}
        <div className="second">
          <div className="second-text">
            <p className="favorite">{Discount.Enjoy}</p>
            <p className="favorite">{Discount.favorite}</p>
            <h1 className="discount">{Discount.discount}</h1>
          </div>
          <img src="./img/02.png" alt="" className="img02" />
        </div>
        {/* 第三块倒计时 */}
        <div className="countDown">
          <div className="hours">
            <span className="end">{"Ends in"}</span>
            <span className="h">{data?.hours}</span>h
            <span className="h">{data?.minutes}</span>m
            <span className="h">{data?.miao}</span>s
          </div>
          <div className="count-down-content">
            <img src="./img/03.png" alt="" className="down-content-img" />
            <h1 className="down-content-h1">{"30%"}</h1>
            <h2 className="down-content-h2">{"off"}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponBannerOne;
