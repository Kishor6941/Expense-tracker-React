import { useEffect, useState } from "react";
import "./digitalWatch.scss";

const DigitalWatch = () => {
  const [getDate, setDateToDisplay] = useState({
    hrs: "",
    mins: "",
    sec: "",
    ampm: "",
  });

  let displayTime = () => {
    let hrs, mins, sec: string;
    let date = new Date();
    let ampm = date.getHours() >= 12 ? "PM" : "AM";
    hrs = (date.getHours() % 12).toString();
    hrs = Number(hrs) < 10 ? `0${hrs}` : hrs;
    mins = date.getMinutes().toString();
    mins = Number(mins) < 10 ? `0${mins}` : mins;
    sec = date.getSeconds().toString();
    sec = Number(sec) < 10 ? `0${sec}` : sec;

    setDateToDisplay({
      hrs,
      mins,
      sec,
      ampm,
    });
  };

  setInterval(() => {
    displayTime();
  }, 1000);

  return (
    <>
      <div className="digital-watch-container col-4 m-auto">
        <div>
          <h1>Digital Watch</h1>
          <div className="digital-watch-wrapper">
            <h3 className="hrs">{getDate.hrs} :</h3>
            <h3 className="min">{getDate?.mins} :</h3>
            <h3 className="sec">{getDate?.sec}</h3>
            <h3 className="am-pm">{getDate?.ampm}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalWatch;
