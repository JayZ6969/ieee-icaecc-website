'use client'

import React from 'react'
import CardCarousel from './CardCarousel'

const classes = {
  container: 'flex flex-col items-center justify-center gap-4 bg-[#D9D9D9] p-8',
  headerContainer: 'flex flex-col items-center justify-center',
  carouselContainer: 'flex flex-col items-center justify-center w-full gap-8',
  carouselSlide: 'flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-xl min-h-48',
  slideTitle: 'text-2xl font-bold',
  slideDate: 'text-lg',
  header: 'text-4xl font-bold',
  subHeader: 'text-2xl font-medium',
}

const dates = [
  {
    title: 'Application Deadline',
    date: '15th August 2025',
  },
  {
    title: 'Application Deadline',
    date: '15th August 2025',
  },
  {
    title: 'Application Deadline',
    date: '15th August 2025',
  },
  {
    title: 'Application Deadline',
    date: '15th August 2025',
  },
];

export default function ImportantDates() {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h3 className={classes.subHeader}>Mark Your Calendar</h3>
        <h1 className={classes.header}>Important Dates</h1>
      </div>
      <div className={classes.CarouselContainer}>
        <CardCarousel>
          {dates.map((date, index) => (
            <div key={index}>
              <div className={classes.carouselSlide}>
                <h3 className={classes.slideTitle}>{date.title}</h3>
                <p className={classes.slideDate}>{date.date}</p>
              </div>
            </div>
          ))}
        </CardCarousel>
      </div>
    </div>
  )
}
