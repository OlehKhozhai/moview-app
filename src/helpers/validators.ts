import * as Yup from "yup"

export const createMovieValidationSchema = Yup.object({
  title: Yup.string().required().min(1).max(20),
  realiseDate: Yup.string().required(),
})
