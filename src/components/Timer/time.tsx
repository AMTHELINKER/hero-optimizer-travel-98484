import { useEffect, useState } from "react";

function Countdown30Min() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes en ms

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setTimeLeft({ minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
      {timeLeft.minutes.toString().padStart(2, "0")}:
      {timeLeft.seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Countdown30Min;
