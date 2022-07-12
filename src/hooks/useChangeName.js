import { useMutation } from 'react-query';
import { useToast } from "@chakra-ui/react";
import changeName from '../services/changeName';
import getError from "../utilities/error";

const useChangeName = () => {
    const toast = useToast();

    const onSuccess = () => {
        toast({
			title: 'Successfully updated name',
			description: "We've successfully updated your name.",
			status: 'success',
			duration: 9000,
			isClosable: true,
		})
    }

    const onError = (error) => {
        toast({
			title: 'Failed to update name',
			description: getError(error,"We've couldn't change your name."),
			status: 'error',
			duration: 9000,
			isClosable: true,
		})
    }

    const { mutate, isLoading } = useMutation(changeName, { onSuccess, onError })

    return { mutate, isLoading }
}

export default useChangeName;