import React, { useContext } from "react";
import { 
    Button, 
    Text, 
    Drawer, 
    DrawerBody, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerFooter 
} from "@chakra-ui/react";
import { 
    HeartOutlined, 
    LogoutOutlined, 
    ShoppingCartOutlined, 
    UserOutlined, 
    ArrowLeftOutlined 
} from "@ant-design/icons";
import { UserContext } from "../global/UserContext";
import useLogout from "../hooks/useLogout";


const UserDrawer = ({ isOpen, onOpen, onClose }) => {
    const [, setUser] = useContext(UserContext);
    const { logout } = useLogout();

    const handleLogout = async() => {
        setUser({});
        logout();
        onClose();
    }

    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                    <ShoppingCartOutlined style={{ color: 'brown', fontSize: 35 }} />
                    <Button onClick={onClose} variant="outline" pos="absolute" right="20px" w={10} h={10}>
                        <ArrowLeftOutlined style={{ color: 'brown', fontSize: 18 }} />
                    </Button>
                </DrawerHeader>
                <DrawerBody>
                    <Button
                        variant="solid"
                        color="white"
                        bgColor="brown"
                        _hover={{ bgColor: '#a52a2ad4' }}
                        _active={{ bgColor: '#a52a2aeb' }}
                        width="100%"
                    >
                        <UserOutlined style={{ color: 'white', fontSize: 18 }} />
                        <Text ml={1} >Account</Text>
                    </Button>
                    <Button
                        variant="solid"
                        color="white"
                        bgColor="brown"
                        _hover={{ bgColor: '#a52a2ad4' }}
                        _active={{ bgColor: '#a52a2aeb' }}
                        width="100%"
                        mt={3}
                    >
                        <HeartOutlined style={{ color: 'white', fontSize: 18 }} />
                        <Text ml={1} >Favourties</Text>
                    </Button>
                </DrawerBody>
                <DrawerFooter>
                    <Button
                        variant="solid"
                        color="white"
                        bgColor="brown"
                        _hover={{ bgColor: '#a52a2ad4' }}
                        _active={{ bgColor: '#a52a2aeb' }}
                        width="100%"
                        mt={3}
                        onClick={handleLogout}
                    >
                        <LogoutOutlined style={{ color: 'white', fontSize: 18 }} />
                        <Text ml={1} >Logout</Text>
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default UserDrawer;