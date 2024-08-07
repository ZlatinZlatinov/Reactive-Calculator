import { useState, useEffect } from "react"

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date())
        }, 60000);

    }, []);

    return (
        <p className="clock">
            <span>
                {`${currentTime.getHours()}:`
                    + `${currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()}`}
            </span>
        </p>
    );
}