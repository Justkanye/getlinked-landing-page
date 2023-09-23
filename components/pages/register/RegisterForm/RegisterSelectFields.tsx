import { Field, FormikErrors, FormikTouched } from "formik";

import {
  Category,
  RegisterFormValues,
} from "@/lib/features/registration/types";
import { cn } from "@/lib/core/utils";

const className = "select select-bordered";
const optionClassName = "bg-[#231d36]";

const RegisterSelectFields = ({
  categories,
  errorClass,
  errors,
  fieldClass,
  touched,
}: Props) => {
  return (
    <>
      <div className='form-control'>
        <label htmlFor='category' className='label capitalize'>
          Category
        </label>
        <Field
          className={cn(fieldClass, className)}
          name='category'
          component='select'
        >
          <option className={optionClassName}>Select your category</option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
              className={optionClassName}
            >
              {category.name}
            </option>
          ))}
        </Field>
        <p
          className={cn(errorClass, {
            "opacity-100": errors.category && touched.category,
          })}
        >
          {errors.category || "error"}
        </p>
      </div>
      <div className='form-control'>
        <label htmlFor='group_size' className='label capitalize'>
          Group Size
        </label>
        <Field
          className={cn(fieldClass, className)}
          name='group_size'
          component='select'
        >
          <option className={optionClassName}>Select</option>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <option key={i + 1} value={i + 1} className={optionClassName}>
                {i + 1}
              </option>
            ))}
        </Field>
        <p
          className={cn(errorClass, {
            "opacity-100": errors.group_size && touched.group_size,
          })}
        >
          {errors.group_size || "error"}
        </p>
      </div>
    </>
  );
};

export default RegisterSelectFields;

type Props = {
  categories: Category[];
  errors: FormikErrors<RegisterFormValues>;
  touched: FormikTouched<RegisterFormValues>;
  errorClass: string;
  fieldClass: string;
};
