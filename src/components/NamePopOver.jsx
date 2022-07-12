import React from "react";
import FocusLock from "react-focus-lock"
import { Box, Button, ButtonGroup, CircularProgress, Flex, FormControl, FormLabel, IconButton, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, useDisclosure } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons";
import { UserContext } from "../global/UserContext";
import useChangeName from "../hooks/useChangeName";

const TextInput = React.forwardRef((props, ref) => {
    return (
        <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} focusBorderColor="brown" />
        </FormControl>
    )
})

const Form = ({ firstFieldRef, onCancel, name, user, setUser }) => {
    const { mutate, isLoading } = useChangeName();

    const handleUpdate = () => {
        setUser({...user, name: firstFieldRef.current?.value});
        mutate({name: firstFieldRef.current?.value});
    }

    return (
        <Stack spacing={4}>
            <TextInput
                label='Name'
                id='first-name'
                ref={firstFieldRef}
                defaultValue={name}
            />
            <ButtonGroup display='flex' justifyContent='flex-end'>
                <Button variant='outline' onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="solid"
                    color="white"
                    bgColor="brown"
                    onClick={handleUpdate}
                    _hover={{ bgColor: '#a52a2ad4' }}
                    _active={{ bgColor: '#a52a2aeb' }} >
                    Save {isLoading && <CircularProgress ml="10px" size="20px" isIndeterminate color='white' />}
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

const NamePopOver = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)
    const [user, setUser] = React.useContext(UserContext)

    return (
        <Flex justifyContent="center" alignItems="center" mt={3}>
            <Box fontSize="20px" display='inline-block' mr={3}>
                {user.name}
            </Box>
            <Popover
                isOpen={isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={onOpen}
                onClose={onClose}
                placement='bottom'
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <IconButton size='sm' icon={<EditIcon />} />
                </PopoverTrigger>
                <PopoverContent p={5}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Form 
                            user={user} 
                            setUser={setUser} 
                            firstFieldRef={firstFieldRef} 
                            onCancel={onClose} 
                            name={user.name} 
                        />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </Flex>
    )
}

export default NamePopOver;