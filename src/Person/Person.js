import React from 'react';
import classes from './person.module.css';

//import './Person.css';
//import styled from 'styled-components'

//import Radium from 'radium';

// const StyelDiv = styled.div`

//     width: 60%;
//     margin: 20px auto;
//     border: 1px solid  #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 15px;
//     text-align: center;

// @media(min-width:500px)
//      {
//          width: 400px
//      }

// `;

 const person = (props) => {
//     const media = {
//         '@media(min-width:300px)':
//         {
//             width: '400px'
//         }
//     }

    return (
        <div className={classes.Person}>

            <p onClick={props.click}>I am Person  Name is {props.name} and age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </div >

    )
}
export default person;