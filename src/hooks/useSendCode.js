import { useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";
import sendCode from "../services/sendCode";
import getError from "../utilities/error";

const useSendCode = () => {
    const toast = useToast();

    const onSuccess = () => {
		toast({
			title: 'Successfully sent code',
			description: "We've sent you a 6-digit code.",
			status: 'success',
			duration: 9000,
			isClosable: true,
		  })
	}

	const onError = (error) => {
		toast({
			title: "Failed to send code",
			description: getError(error, "We're having trouble sending you the code"),
			status: 'error',
			duration: 9000,
			isClosable: true,
		  })
	}

    const { mutate, isLoading } = useMutation(sendCode, { onSuccess, onError });

    return { sendCode: mutate, isSending: isLoading }
}

export default useSendCode;