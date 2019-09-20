import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

function CreateAct () {
    return (
        <Form>
             <Field type="text" name="name" placeholder="Name" />
             <Field component="textarea" name="description" placeholder="Description" />
             <button type="submit">Submit</button>
        </Form>
    )
}

export default withFormik ({})(CreateAct);