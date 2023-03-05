import React, { useEffect, useState, useRef } from "react";
import "./index.less";
import CouponBannerOne from "./compoments/CouponBannerOne";
import CouponBannerTwo from "./compoments/CouponBannerTwo";
import { DataType } from "./type";
const Demo = () => {
  const [bannerOne, setBannerOne] = useState<boolean>(true);
  const [bannerTwo, setBannerTwo] = useState<boolean>(false);
  const [data, setData] = useState<DataType>();
  const widthState = useRef<number>();

  useEffect(() => {
    responsive();
  }, [window.onresize]);

  useEffect(() => {
    getCountDown();
  }, []);

  const getCountDown = () => {
    var timer: any;
    // 当天最大时间戳
    var endtime = new Date(
      new Date(new Date().toLocaleDateString()).getTime() +
        24 * 60 * 60 * 1000 -
        1
    );
    timer = setInterval(function () {
      //  var timestamp = time1;
      //当前时间戳
      var starttime = Date.parse(new Date());
      timestampToTime(endtime - starttime);
    }, 1000);
    function timestampToTime(res) {
      var hours = parseInt((res % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = parseInt((res % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = (res % (1000 * 60)) / 1000;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      var miao = Number(seconds).toFixed(0);
      if (miao < 10) {
        miao = "0" + miao;
      }
      if (hours <= 0 && minutes <= 0 && miao <= 0) {
        clearTimeout(timer);
      }
      setData({ hours: hours, minutes: minutes, miao: miao });
    }
  };

  const responsive = () => {
    //  === window.innerWidth;
    window.onresize = function () {
      widthState.current = window.innerWidth;
      if (widthState.current >= 768) {
        setBannerOne(true);
        setBannerTwo(false);
      } else {
        setBannerOne(false);
        setBannerTwo(true);
      }
    };
  };

  return (
    <div className="page">
      {bannerOne && <CouponBannerOne data={data} />}
      {bannerTwo && <CouponBannerTwo data={data} />}
    </div>
  );
};

export default Demo;
