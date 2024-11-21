'use client'

import * as React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const classes = {
    container: ' flex flex-col items-center p-10 gap-8 xl:gap-12 justify-between bg-orange-400 text-white',
    header: 'xl:text-4xl text-2xl font-bold text-center',
    button: 'flex flex-row items-center justify-around bg-white font-medium text-black p-2 rounded-xl',
}

export default function RegisterNow() {
  return (
    <div className={classes.container}>
        <h1 className={classes.header}>Registration closes on 30th November 2025</h1>
        <button className={classes.button}>
            <a href="#" className={classes.button}>
                Register Now !
                <KeyboardArrowRightIcon />
            </a>
        </button>
    </div>
  )
}
