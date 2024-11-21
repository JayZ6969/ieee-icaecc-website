import * as React from 'react';
const classes ={
    AboutContainer:'w-full flex flex-col items-center justify-center p-4 lg:p-16 sm:gap-4 pt-12',
    AboutContent:'flex flex-col items-center justify-center gap-3 mt-8',
    header:'text-4xl font-extrabold -ml-2',
    para:'text-black text-lg text-justify p-2 max-w-[1100px]'

}
export default function About ()  { 
    return (
        <div className={classes.AboutContainer}>
            <h1 className={classes.header}>About ICAECC</h1>
            <div className={classes.AboutContent}>
            <p className={classes.para}>ICAECC, an international conference on engineering, technology, and education is the IEEE Education Society’s premier conference series in the Asia-Pacific region. </p>
            <p className={classes.para}>The conference is a biennial event that brings together educators, researchers, and practitioners from around the world to discuss and share ideas on the latest trends and developments in engineering, technology, and education. The conference features keynote speeches, paper presentations, workshops, and panel discussions on a wide range of topics related to engineering, technology, and education.</p>
            <p className={classes.para}> ICAECC provides a platform for researchers, educators, and practitioners to exchange ideas, collaborate, and network with each other. The conference aims to promote excellence in engineering, technology, and education and to foster innovation and creativity in these fields. ICAECC is organized by the IEEE Education Society and is supported by IEEE and other professional organizations.</p>    
            </div>
        </div>
    )
}