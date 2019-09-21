import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import { Button } from 'semantic-ui-react'
import * as yup from 'yup'
import axios from 'axios'

const CreateAct = ({errors, touched, status}) => {
    const [acts, setActs] = useState([]);
    useEffect(() => {
        if (status) {
            setActs([ ...acts, status ])
          }
        }, [status])

    return (
        <Form>
             {touched.name && errors.name && <p className="error">{errors.name}</p>}
             <Field className="act-name" type="text" name="name" placeholder="Name" />
             {touched.description && errors.description && <p className="error">{errors.description}</p>}
             <Field className="act-description" component="textarea" name="description" placeholder="Description" />
             <Button className="act-submit" type="submit">Submit</Button>
        </Form>
    )
}

export default withFormik ({
    mapPropsToValues: (values) => {
        return {name: values.name || '',
        description: values.description || '',
      }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required!'),
        description: yup.string().required('Description is required!'),
      }),
      
})(CreateAct);