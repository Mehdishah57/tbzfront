import React, { useContext } from 'react';
import { Flex, Center, Text, Avatar, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { UserContext } from "../global/UserContext";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Flex w='100%' p="10px" justifyContent="space-between" alignItems="center" borderBottom='1px solid brown'>
      <Text 
        onClick={()=>navigate("/home")} 
        cursor="pointer" 
        fontSize="2xl" 
        fontWeight="bold" 
        color="brown">
          WhizCart
        </Text>
      <Flex>
        {user._id ?
          <Center >
            <Button
              mr={5}
              size="md"
              variant="outline"
              color="white"
							borderColor="white"
              bgColor="brown"
              borderRadius={30}
              outline="2px solid brown"
              outlineOffset={1}
              _hover={{opacity: 0.8}}
              _active={{ bgColor: '#a52a2aeb' }}
              onClick={()=>navigate("/sell")}
            >
              Sell<AddIcon
                ml={2} 
                color="white" 
                fontSize={12}
              />
            </Button>
            <Avatar
            name={user.name}
            src={user.image?.url}
            cursor="pointer"
            transition="all 0.2s ease-in-out"
            _hover={{ opacity: 0.7 }}
            onClick={()=>navigate("/profile")}
          />
          </Center> : <Flex>
            <Button
							size="md"
							variant="ghost"
							color="brown"
							borderColor="brown"
							onClick={() => navigate("/login")}
							_hover={{ color: '#a52a2ad4' }}
							_active={{ color: '#a52a2aeb' }}
						>Login</Button>
            <Button
							size="md"
							variant="ghost"
							color="brown"
							borderColor="brown"
							onClick={() => navigate("/signup")}
							_hover={{ color: '#a52a2ad4' }}
							_active={{ color: '#a52a2aeb' }}
						>Signup</Button>
          </Flex>
        }
      </Flex>
    </Flex>
  )
}

export default React.memo(Navbar);