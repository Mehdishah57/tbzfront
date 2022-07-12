import { useMutation, useQueryClient } from "react-query";
import { useToast } from "@chakra-ui/react";
import { setToken } from "../utilities/storage";
import signup from "../services/signup";
import getError from "../utilities/error";

const useSignup = () => {
    const toast = useToast();
    const queryClient = useQueryClient();

	const onSuccess = data => {
		setToken(data);
        queryClient.invalidateQueries("refresh");
		toast({
			title: 'Account created.',
			description: "We've created your account for you.",
			status: 'success',
			duration: 9000,
			isClosable: true,
		  })
	}

	const onError = (error) => {
		toast({
			title: 'Account created.',
			description: getError(error,"We couldn't creat an account for you."),
			status: 'error',
			duration: 9000,
			isClosable: true,
		  })
	}

	const {mutate, isLoading} = useMutation(signup, { onSuccess, onError })

    return {mutate, isLoading}
}

export default useSignup;