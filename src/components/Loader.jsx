import React from 'react';
import { Center, CircularProgress } from "@chakra-ui/react";

const Loader = ({height, width, bgColor, color, size}) => {
  return (
    <Center h={height || "80vh"} w={width || '100%'} bgColor={bgColor}>
        <CircularProgress color={color || "brown"} size={size || "42px"} isIndeterminate />
    </Center>
  )
}

export default Loader