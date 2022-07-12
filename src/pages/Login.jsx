import React from 'react';
import {
	Flex,
	Center,
	Input,
	Button,
	Text,
	FormControl,
	FormErrorMessage,
	CircularProgress
}
	from "@chakra-ui/react"
import { Formik } from "formik";
import { loginSchema } from '../schema/login';
import { useNavigate } from "react-router-dom"
import useLogin from '../hooks/useLogin';

const Login = () => {
	const { mutate, isLoading, isError, error } = useLogin();
	const navigate = useNavigate();

	return (
		<Center h="85vh">
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={mutate}
				validationSchema={loginSchema}
			>
				{({ handleSubmit, handleChange, errors, touched, setFieldTouched }) => <Flex
					w='400px'
					flexDir="column"
					justifyContent="center"
					alignItems='center'
					h='450px'
					onSubmit={handleSubmit}
				>
					<Text fontSize='3xl' fontWeight="bold" color="brown" mb={5} >Welcome to WhizCart!</Text>
					<FormControl mb={5} isInvalid={touched.email && errors.email}>
						<Input
							placeholder='Email'
							type="email"
							onChange={handleChange("email")}
							onBlur={() => setFieldTouched("email")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl mb={5} isInvalid={touched.password && errors.password}>
						<Input
							placeholder='Password'
							type="password"
							onChange={handleChange("password")}
							onBlur={() => setFieldTouched("password")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.password}</FormErrorMessage>
					</FormControl>
					<FormControl mb={5} isInvalid={isError}>
						<Center>
							<FormErrorMessage>{error?.response?.data}</FormErrorMessage>
						</Center>
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
						>Login {isLoading && <CircularProgress ml="10px" size="20px" isIndeterminate color='white' />}</Button>
						<Button
							mb={5}
							size="md"
							variant="ghost"
							color="brown"
							borderColor="brown"
							onClick={() => navigate("/signup")}
							_hover={{ color: '#a52a2ad4' }}
							_active={{ color: '#a52a2aeb' }}
						>Signup</Button>
					</Flex>
				</Flex>}
			</Formik>
		</Center>
	)
}

export default Login;