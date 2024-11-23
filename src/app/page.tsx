"use client";

import { useEffect, useState } from "react";

// singapore time 2025-08-29T08:00:00Z
const examDatetime = new Date("2025-08-29T08:00:00Z");
const now = new Date();

export default function HomePage() {
  const [daysLeft, setDaysLeft] = useState(
    Math.floor(
      (examDatetime.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    ),
  );
  const [currentDate, setCurrentDate] = useState(
    now.toLocaleDateString("en-SG"),
  );
  const [currentTime, setCurrentTime] = useState(
    now.toLocaleTimeString("en-SG"),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString("en-SG"));
      setCurrentTime(now.toLocaleTimeString("en-SG"));
      setDaysLeft(
        Math.floor(
          (examDatetime.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
        ),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex flex-col text-center">
        <div className="text-slate-400">
          <h1 className="mb-4 text-4xl font-bold">Countdown to Exam</h1>
          <p>
            <strong>Exam Date:</strong>{" "}
            {examDatetime.toLocaleDateString("en-SG")}
          </p>
          <p>
            <strong>Now:</strong> {currentDate} {currentTime}
          </p>
        </div>
        <div className="my-16 text-9xl text-slate-800">
          <p>
            <strong>
              {Math.floor(
                (examDatetime.getTime() - now.getTime()) /
                  (1000 * 60 * 60 * 24),
              )}
            </strong>
            {daysLeft === 1 ? " day" : " days"}
            {" left"}
          </p>
        </div>
        <div>
          {/* in months then days */}
          <p className="font-semibold text-slate-400">
            {Math.floor(
              (examDatetime.getTime() - now.getTime()) /
                (1000 * 60 * 60 * 24 * 30),
            )}{" "}
            {" months & "}
            {Math.floor(
              ((examDatetime.getTime() - now.getTime()) /
                (1000 * 60 * 60 * 24)) %
                30,
            )}
            {" days"}
          </p>
        </div>
      </div>
    </main>
  );
}
