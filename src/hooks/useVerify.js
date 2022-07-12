import { useMutation, useQueryClient } from "react-query";
import { useToast } from "@chakra-ui/react";
import { setToken } from "../utilities/storage"
import verify from "../services/verify";
import getError from "../utilities/error";

const useVerify = () => {
    const toast = useToast();
    const queryClient = useQueryClient();

    const onSuccess = (token) => {
        setToken(token);
        queryClient.invalidateQueries("refresh");
        toast({
            title: 'Successfully Verified',
            description: "Congratulations 🎉🎉🎉! You're now a verified user.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    const onError = error => {
        toast({
            title: 'Verification Failed',
            description: getError(error, "We couldn't verify your account."),
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }

    const { mutate, isLoading } = useMutation(verify, { onSuccess, onError });

    return { mutate , isLoading };
}

export default useVerify;