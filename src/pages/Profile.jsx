import React, { useContext } from 'react';
import { Flex, Avatar, useDisclosure, Button, Box, Input, CircularProgress } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
import { UserContext } from "../global/UserContext";
import UserDrawer from '../components/UserDrawer';
import NamePopOver from '../components/NamePopOver';
import useImageUpload from '../hooks/useImageUpload';

const Profile = () => {
  const [user] = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isSavingImage, isUploadingToCloud } = useImageUpload();

  const handleChange = e => {
    if(!e.currentTarget?.files[0]) return console.log("NO Image selected");
    const formData = new FormData();
    formData.append("file", e.currentTarget?.files[0]);
    formData.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
    mutate(formData);
  }

  return (
    <Flex pos="relative" flexDir="column" alignItems="center" h="85vh" overflow="hidden">
      <UserDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Button variant="outline" pos="absolute" top="10px" left="10px" onClick={onOpen}>
        <HamburgerIcon fontSize="20px" />
      </Button>
      <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" h="40vh" maxH="300px">
        <Avatar
          src={user.image?.url}
          name={user.name}
          size="2xl"
          cursor="pointer"
          outline="2px solid"
          outlineColor="white"
          outlineOffset={2}
          transition="all 0.2s ease-in-out"
          pos='relative'
          overflow="hidden"
          _hover={{ outlineColor: 'brown' }}
        >
          {(isSavingImage || isUploadingToCloud) && <CircularProgress ml={2} color="brown" size="40px" isIndeterminate />}
          <Input disabled={isSavingImage || isUploadingToCloud} onChange={handleChange} type="file" pos="absolute" w="100%" h="100%" opacity={0} cursor="pointer" />
        </Avatar>
        <Box display="inline">
          <NamePopOver />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Profile;