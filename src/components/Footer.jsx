import React from 'react';
import { Center, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center pos="absolute" bgColor="brown" bottom="0px" p={2} w="100%">
        <Text color="white" fontSize="sm" fontWeight='bold'>Copyright © 2022 | WhizCart</Text>
    </Center>
  )
}

export default Footer