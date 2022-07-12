import React from 'react';
import {
	Center,
	FormControl,
	FormErrorMessage,
	Input,
	Button,
	Textarea,
	Select,
	Radio,
	RadioGroup,
	Stack
} from "@chakra-ui/react";
import { Formik } from "formik";
import { sellSchema } from '../schema/sell';

const Sell = () => {
	const setLocation = (setFieldValue, setFieldError) => {
		navigator.geolocation.getCurrentPosition(pos => {
			setFieldValue("longitude", pos.coords.longitude);
			setFieldValue("latitude", pos.coords.latitude);
			setFieldError("latitude",null);
		})
	}

	return (
		<Center overflowY="auto">
			<Formik
				initialValues={{
					city: '',
					title: '',
					price: '',
					image: {},
					country: '',
					latitude: '',
					longitude: '',
					description: ''
				}}
				validationSchema={sellSchema}
			>
				{({ handleSubmit, handleChange, errors, touched, setFieldTouched, setFieldValue, setFieldError }) => <Center
					flexDir="column"
					w="90%"
					mt={5}
				>
					<FormControl mb={3} isInvalid={touched.title && errors.title}>
						<Input
							placeholder='Title'
							type="text"
							variant="filled"
							onChange={handleChange("title")}
							onBlur={() => setFieldTouched("title")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.title}</FormErrorMessage>
					</FormControl>
					<FormControl mb={3} isInvalid={touched.price && errors.price}>
						<Input
							placeholder='Price'
							type="number"
							variant="filled"
							onChange={handleChange("price")}
							onBlur={() => setFieldTouched("price")}
							focusBorderColor="brown"
							size='lg'
						/>
						<FormErrorMessage>{errors.price}</FormErrorMessage>
					</FormControl>
					<FormControl mb={3} isInvalid={touched.country && errors.country}>
						<Select
							placeholder='Country'
							variant="filled"
							size="lg"
							focusBorderColor="brown"
							onChange={e => setFieldValue("country", e.currentTarget.value)}
							onBlur={() => setFieldTouched("country")}
						></Select>
						<FormErrorMessage>{errors.country}</FormErrorMessage>
					</FormControl>
					<FormControl mb={3} isInvalid={touched.city && errors.city}>
						<Select
							placeholder='City'
							variant="filled"
							size="lg"
							focusBorderColor="brown"
							onChange={e => setFieldValue("city", e.currentTarget.value)}
							onBlur={() => setFieldTouched("city")}
						></Select>
						<FormErrorMessage>{errors.city}</FormErrorMessage>
					</FormControl>
					<FormControl mb={3} isInvalid={touched.longitude && errors.longitude}>
						<RadioGroup onChange={()=>setLocation(setFieldValue, setFieldError)}>
							<Stack direction='row'>
								<Radio value='1'>Show my location on map</Radio>
								<Radio value='2'>Show my city's location on map</Radio>
							</Stack>
						</RadioGroup>
						<FormErrorMessage>{errors.longitude}</FormErrorMessage>
					</FormControl>
					<FormControl mb={3} isInvalid={touched.description && errors.description}>
						<Textarea
							rows={8}
							size="lg"
							resize="none"
							variant="filled"
							placeholder='Description'
							focusBorderColor="brown"
							onChange={handleChange("description")}
							onBlur={() => setFieldTouched("description")}
						/>
						<FormErrorMessage>{errors.description}</FormErrorMessage>
					</FormControl>
					<Button
						size="md"
						variant="solid"
						color="white"
						bgColor="brown"
						_hover={{ bgColor: '#a52a2ad4' }}
						_active={{ bgColor: '#a52a2aeb' }}
						onClick={handleSubmit}
					>Submit</Button>
				</Center>}
			</Formik>
		</Center>
	)
}

export default Sell