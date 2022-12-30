import React, { Suspense } from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import {Link} from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
    },
});


export const Home = (props:Props) => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
            </div>
            </div>
        </>
    )
}
