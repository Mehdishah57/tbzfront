import * as yup from 'yup';

const schema = yup.object({
    name: yup
        .string("Name must be a string")
        .min(5, "Name must be at least 5 characters")
        .max(25, "Name can't be more than 25 characters")
        .required("You can't leave the name empty")
})

export { schema as nameSchema }