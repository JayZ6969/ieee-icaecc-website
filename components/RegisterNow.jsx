'use client'

import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const classes = {
    container: 'h-[12rem] flex flex-col items-center p-10 justify-between bg-orange-400 text-white',
    header: 'text-4xl font-bold',
    button: 'flex flex-row items-center justify-around bg-white font-medium text-black p-2 rounded-xl',
}

export default function RegisterNow() {
  return (
    <div className={classes.container}>
        <h1 className={classes.header}>Registration closes on 30th November 2025</h1>
        <button className={classes.button}>
            <a href="https://www.reva.edu.in" className={classes.button}>
                Register Now !
                <KeyboardArrowRightIcon />
            </a>
        </button>
    </div>
  )
}
