import React from 'react';
import { Center, Flex, Input, FormControl, FormErrorMessage, Button, CircularProgress } from "@chakra-ui/react";
import { Formik } from "formik";
import { codeSchema } from '../schema/code';
import useVerify from '../hooks/useVerify';
import useSendCode from '../hooks/useSendCode';

const Verify = () => {
    const { mutate, isLoading } = useVerify();
    const { sendCode, isSending } = useSendCode();

    return (
        <Center h="85vh">
            <Formik
                initialValues={{ code: '' }}
                onSubmit={mutate}
                validationSchema={codeSchema}
            >
                {({ handleSubmit, handleChange, errors, touched, setFieldTouched }) => <Flex 
                    w='400px'
                    h="150px"
                    flexDir="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <FormControl isInvalid={touched.code && errors.code}>
                        <Input
                            placeholder='Code'
                            type="text"
                            onChange={handleChange("code")}
                            onBlur={() => setFieldTouched("code")}
                            focusBorderColor="brown"
                            size='lg'
                        />
                        <FormErrorMessage>{errors.code}</FormErrorMessage>
                    </FormControl>
                    <Flex flexDir="row">
						<Button
							mb={5}
							size="md"
							variant="solid"
							color="white"
							bgColor="brown"
							disabled={isLoading}
							_hover={{ bgColor: '#a52a2ad4' }}
							_active={{ bgColor: '#a52a2aeb' }}
							onClick={handleSubmit}
						>Verify {isLoading && <CircularProgress ml="10px" size="20px" isIndeterminate color='white' />}</Button>
						<Button
							mb={5}
							size="md"
							variant="ghost"
							color="brown"
							borderColor="brown"
							onClick={sendCode}
							_hover={{ color: '#a52a2ad4' }}
							_active={{ color: '#a52a2aeb' }}
						>Request OTP {isSending && <CircularProgress ml="10px" size="20px" isIndeterminate color='brown' />}</Button>
					</Flex>
                </Flex>}
            </Formik>
        </Center>
    )
}

export default Verify