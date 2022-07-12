import { useMutation, useQueryClient } from 'react-query';
import { useToast } from "@chakra-ui/react";
import { setToken } from '../utilities/storage';
import login from "../services/login";

const useLogin = () => {
    const toast = useToast();
	const queryClient = useQueryClient();

	const onSuccess = token => {
		setToken(token);
		queryClient.invalidateQueries("refresh");
		toast({
			title: 'Login Successfull',
			description: "We've logged you in.",
			status: 'success',
			duration: 9000,
			isClosable: true,
		  })
	}

	const onError = () => {
		toast({
			title: 'Login Failed',
			description: "We couldn't log you into your account.",
			status: 'error',
			duration: 9000,
			isClosable: true,
		  })
	}

	const { mutate, isLoading, isError, error } = useMutation(login, { onSuccess, onError });

    return { mutate, isLoading, isError, error }
}

export default useLogin;