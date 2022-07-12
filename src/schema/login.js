import * as yup from "yup";

const schema = yup.object({
    email: yup
        .string("Email must be a string")
        .email("Email must be valid")
        .required("You can't leave the email empty"),
    password: yup
        .string("Password must be a string")
        .required("You can't leave the password empty")
})

export { schema as loginSchema }