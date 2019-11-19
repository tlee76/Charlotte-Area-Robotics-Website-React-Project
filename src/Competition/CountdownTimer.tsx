import React from "react";
import Countdown from 'react-countdown-now';
import TimerDisplay from "./TimerDisplay";

interface CountdownFormat {
    total: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean,
} 

const renderer = (props: CountdownFormat) => {
  if (props.completed) {
    return <TimerDisplay display="It's Competition Time!" />;
  } else {
    const weeks = Math.floor(props.days / 7);
    props.days = props.days % 7;
    const timeToDisplay = `${weeks} weeks ${props.days} days ${props.hours} hours ${props.minutes} minutes ${props.seconds} seconds`
    return <TimerDisplay display={timeToDisplay} />;
  }
};
var countdown_date = new Date("2020-03-14T00:00:00");

export default function CountdownTimer(){
    return(
        <Countdown
            date={countdown_date}
            renderer={renderer}
        />
    );
}