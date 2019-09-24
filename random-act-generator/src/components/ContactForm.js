import React, { useState , useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'


const ContactForm = (props) => {

    const [contact, setContact] = useState([{}])
  
/*    useEffect( () => {
      if(props.status){
        setContact([...member, props.status]) //<-- .status is the axios response object
      }
    }, [props.status])
*/  
    // console.log(props.status)
  
    return (
      <Form>
        <h2 style={{textAlign:'center'}}>Add Contact</h2>
        <br />{props.touched.name && props.errors.name && 
        <p className='error'>{props.errors.name}</p>}
        <Field type="text" name="contactName" placeholder="Contact Name" />
        
        {props.touched.phoneNumber && props.errors.phoneNumber && <p className='error'>{props.errors.phoneNumber}</p>}
        <Field type="text" name="phoneNumber" placeholder="Phone Number" />

        <button type="submit">Submit</button>
  
      </Form>
    )
  }
  
  export default withFormik({ 
    //Values come from Formik automatically --- magic?
    mapPropsToValues: (currentValuesFromOurForm) => {
      //this makes these inputs 'controlled', sets the values automatically for us
      return { 
        //these keys line up with the 'name' attribute in our Fields
        contactName: currentValuesFromOurForm.contactName || '',
        phoneNumber: currentValuesFromOurForm.phoneNumber || '',
      }
    },
    validationSchema: yup.object().shape({
        contactName: yup.string().required('You Forgot name Foo!'),
        phoneNumber: yup.string().required('You Forgot phoneNumber Foo!')
    }),
    handleSubmit: (values, {setStatus}) => {
      axios.post('https://reqres.in/api/users', values)
      .then(( res ) => {
        
        setStatus(res.data)
        // console.log(res)
      })
      .catch (( err ) => {
        console.log("Error: ", err)
      })
      
      console.log(values)
    }
  
  })(ContactForm)


  