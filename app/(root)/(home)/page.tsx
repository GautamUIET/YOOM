"use client";
import React, { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };

    updateTimeAndDate();
    const timer = setInterval(updateTimeAndDate, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[230px] w=full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30pm</h2>
          <div className='relative top-4 flex flex-col gap-2'>
            <h1 className='text-2xl font-extrabold lg:text-4xl'>
              {time || "Loading..."} 
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {date || "Loading..."} 
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
