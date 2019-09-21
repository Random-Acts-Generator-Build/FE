import React, { useState , useEffect } from 'react'

import { withFormik, Form, Field } from 'formik'

import * as yup from 'yup'

import axios from 'axios'

import { Button, Header, Image, Modal } from 'semantic-ui-react'


const LoginForm = (props) => {

    const [member, setMember] = useState([{}])
  
    useEffect( () => {
      if(props.status){
        setMember([...member, props.status]) //<-- .status is the axios response object
      }
    }, [props.status])
  
    // console.log(props.status)
  
    // console.log(users)
  
    return (

      <Modal trigger={<Button style={{background:'blue', color:'#fff'}}>Login</Button>}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>

          <Form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'200px'}}>

            {props.touched.name && props.errors.name && <p className='error'>{props.errors.name}</p>}
            <Field type="text" name="username" placeholder="User Name" />

            {props.touched.password && props.errors.password && <p className='error'>{props.errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />


            <button type="submit">Login</button>

          </Form>

        </Modal.Content>
      </Modal>
      
    )
  }
  
  export default withFormik({ 
    //Values come from Formik automatically --- magic?
    mapPropsToValues: (currentValuesFromOurForm) => {
      //this makes these inputs 'controlled', sets the values automatically for us
      return { 
        //these keys line up with the 'name' attribute in our Fields
        username: currentValuesFromOurForm.username || '',
        password: currentValuesFromOurForm.password || '',
      }
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('You Forgot name Foo!'),      
      password: yup.string().required('You Forgot Password Foo!'),
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
  
  })(LoginForm)