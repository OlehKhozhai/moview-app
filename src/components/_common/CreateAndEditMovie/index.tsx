import React from 'react';
import { Form, Formik, FormikProps, FormikHelpers } from 'formik';

import Input from 'components/_common/FormFields/Input';
import Button from 'components/_common/Button';
import { createMovieValidationSchema } from 'helpers/validators';
import styles from './styles.module.scss';

type Values = {
  title: string;
  realiseDate: string;
  url: string;
  genre: string;
  overview: string;
  runtime: string;
};

const initialValues: Values = {
  title: '',
  realiseDate: '',
  url: '',
  genre: '',
  overview: '',
  runtime: '',
};

type CreateAndEditMovieModalProps = {
  action?: 'create' | 'edit';
};

const CreateAndEditMovieModal: React.FC<CreateAndEditMovieModalProps> = ({ action = 'create' }) => {
  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(true);

    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createMovieValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<Values>) => (
        <Form className={styles.root}>
          <h2 className={styles.title}>{action === 'create' ? 'Add movie' : 'Edit movie'}</h2>

          <Input name="title" label="Title" placeholder="Enter title" />
          <Input
            name="realiseDate"
            label="Realise date"
            type="date"
            placeholder="Enter realise date"
          />
          <Input name="url" label="Movie url" placeholder="Enter url" />
          <Input name="genre" label="Genre" />
          <Input name="overview" label="Overview" placeholder="Enter overview" />
          <Input name="runtime" label="Runtime" placeholder="Enter runtime" />

          <div className={styles.buttonsWrapper}>
            <Button title="Reset" variation="primaryOutline" className={styles.resetBtn} />
            <Button
              title={action === 'create' ? 'Submit' : 'Save'}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(CreateAndEditMovieModal);
