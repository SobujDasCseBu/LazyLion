import React from 'react';
import {useSpring, animated} from "react-spring"

const Number = ({n,children}) => {
    const {number}=useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1,tension:20,friction:10}

    })
  return <animated.h1>{number.to((n)=>`${n.toFixed(0)}${children}`)}</animated.h1>
}

export default Number
