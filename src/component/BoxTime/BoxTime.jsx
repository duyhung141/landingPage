import React, {useState, useEffect} from 'react';

function BoxTime({initialMinutes = 0, initialSeconds = 0}) {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div className="">
            {minutes === 0 && seconds === 0
                ? <div className="ml-1 bg-gray-800 text-yellow-300 rounded p-1">Time's up!</div>
                :
                <>
                    <div className="ml-1 flex items-center gap-1 font-bold">
                        <div className="bg-gray-800 text-yellow-300 rounded p-1">00</div>
                        <div className="text-black">:</div>
                        <div
                            className="bg-gray-800 text-yellow-300 rounded p-1">{minutes < 10 ? `0${minutes}` : minutes}</div>
                        <div className="text-black">:</div>
                        <div
                            className="bg-gray-800 text-yellow-300 rounded p-1">{seconds < 10 ? `0${seconds}` : seconds}</div>
                    </div>
                    {/*<span>00:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>*/}
                </>
            }
        </div>
    );
}

export default BoxTime