import React from 'react';
import { Flex, Center, Input, Button, Text, FormControl, FormErrorMessage, CircularProgress } from "@chakra-ui/react"
import { Formik } from "formik";
import { signupSchema } from '../schema/signup';
import { useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";


const Signup = () => {
	const {mutate, isLoading} = useSignup()
	const navigate = useNavigate();

	return (
		<Center h="85vh">
			<Formik
				initialValues={{ name: '', email: '', password: '', confirmPassword: '', countryCode: '', phoneNumber: '' }}
				onSubmit={mutate}
				validationSchema={signupSchema}
			>
				{({ handleSubmit, handleChange, errors, touched, setFieldTouched }) => <Flex
					w='400px'
					flexDir="column"
					justifyContent="center"
					alignItems='center'
					h='450px'
					onSubmit={handleSubmit}
				>
					<Text fontSize='3xl' fontWeight="bold" color="brown" mb={5} >Join WhizCart!</Text>
					<FormControl mb={5} isInvalid={touched.name && errors.name}>
						<Input
							placeholder='Full Name'
							type="text"
							onChange={handleChange("name")}
							onBlur={() => setFieldTouched("name")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.name}</FormErrorMessage>
					</FormControl>
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
					<FormControl mb={5} isInvalid={touched.confirmPassword && errors.confirmPassword}>
						<Input
							placeholder='Confirm Password'
							type="password"
							onChange={handleChange("confirmPassword")}
							onBlur={() => setFieldTouched("confirmPassword")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
					</FormControl>
					<Flex>
						<FormControl w="20%" mr="10px" mb={5} isInvalid={touched.countryCode && errors.countryCode}>
							<Input
								placeholder='+44'
								type="text"
								onChange={handleChange("countryCode")}
								onBlur={() => setFieldTouched("countryCode")}
								focusBorderColor="brown"
								size='lg'
							/>
						</FormControl>
						<FormControl mb={5} isInvalid={touched.phoneNumber && errors.phoneNumber}>
							<Input
								placeholder='Phone Number'
								type="number"
								onChange={handleChange("phoneNumber")}
								onBlur={() => setFieldTouched("phoneNumber")}
								focusBorderColor="brown"
								size='lg'
							/>
							<FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
						</FormControl>
					</Flex>
					<Flex flexDir="row">
						<Button
							mb={5}
							size="md"
							variant="solid"
							color="white"
							bgColor="brown"
							_hover={{ bgColor: '#a52a2ad4' }}
							_active={{ bgColor: '#a52a2aeb' }}
							onClick={handleSubmit}
						>SignUp {isLoading && <CircularProgress ml="10px" size="20px" isIndeterminate color='white' />}</Button>
						<Button
							mb={5}
							size="md"
							variant="ghost"
							color="brown"
							borderColor="brown"
							onClick={() => navigate("/login")}
							_hover={{ color: '#a52a2ad4' }}
							_active={{ color: '#a52a2aeb' }}
						>Login</Button>
					</Flex>
				</Flex>}
			</Formik>
		</Center>
	)
}

export default Signup