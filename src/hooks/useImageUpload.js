import { useQuery, useMutation } from 'react-query';
import { useToast } from "@chakra-ui/react";
import cloudinaryUpload from "../services/cloudinaryUpload";
import imageUpload from '../services/imageUpload';
import getError from '../utilities/error';
import { useContext } from 'react';
import { UserContext } from '../global/UserContext';

const useImageUpload = () => {
    const [user, setUser] = useContext(UserContext);
    const toast = useToast();

    const onSuccess = (data) => {
        setUser({...user, image: { ...data }});
        toast({
			title: 'Upload Successfull',
			description: "We've uploaded your image for you.",
			status: 'success',
			duration: 9000,
			isClosable: true,
		  })
    }

    const onError = (error) => {
        toast({
			title: 'Upload Failed',
			description: getError(error,"We couldn't upload your image for you."),
			status: 'error',
			duration: 9000,
			isClosable: true,
		  })
    }

    const {mutate, data, isLoading: isUploadingToCloud} = useMutation(cloudinaryUpload, 
    { retry: false, onError });

    const {isLoading: isSavingImage} = useQuery(["uploadImage", {url: data?.secure_url, id: data?.public_id}]
        ,imageUpload
        ,{refetchOnWindowFocus: false, retry: false, onError, onSuccess, enabled: !!data });

    return {mutate, isUploadingToCloud, isSavingImage}
}

export default useImageUpload;