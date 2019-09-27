import React, { useState , useEffect } from 'react'

import { withFormik, Form, Field } from 'formik'

import * as yup from 'yup'

import axios from 'axios'

import { Button, Header, Image, Modal } from 'semantic-ui-react'


const RegistrationForm = (props) => {

    const [member, setMember] = useState([{}])

    //Holds State for Login Button.
    const [spinOn, setSpinOn] = useState(false)
  
    useEffect( () => {
      if(props.status){
        setMember([...member, props.status]) //<-- .status is the axios response object
      }
    }, [props.status])
  
    // console.log(props.status)
  
    // console.log(users)
  
    return (
      
      <Modal trigger={<Button style={{background:'#cb8b41', color:'#fff'}} >Signup</Button>}>
        <Modal.Header style={{textAlign:'center', background:'#99b3af', color:"#fff", fontFamily:"Quicksand"}}>New Member Registration</Modal.Header>
        <Modal.Content>
    
          <Form className="charlie-form" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'300px', marginTop:"20px"}}>

            {props.touched.name && props.errors.name && <p className='error'>{props.errors.name}</p>}
            <Field type="text" name="username" placeholder="User Name" />
            
            {props.touched.email && props.errors.email && <p className='error'>{props.errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />

            {props.touched.password && props.errors.password && <p className='error'>{props.errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />

            
            {props.touched.tos && props.errors.tos && <p className='error'>{props.errors.tos}</p>}
            <label>
              <Field type="checkbox" name="tos" />
                <span>Terms of Service</span>
            </label>

            <button onClick={ () => setSpinOn(!spinOn)} className={spinOn ? 'animated bounceInLeft' : ''} type="submit" style={{background:'#cb8b41', color:'#fff'}}>Submit</button>
      
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
        email: currentValuesFromOurForm.email || '',
        password: currentValuesFromOurForm.password || '',
        tos: currentValuesFromOurForm.tos || false
      }
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('You Forgot name Foo!'),
      email: yup.string().email('Please Use An Email Address').required('You Forgot email Foo!'),
      password: yup.string().required('You Forgot Password Foo!'),
      tos: yup.boolean().oneOf([true], 'Terms of Service Must Be Checked')
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
  
  })(RegistrationForm)
  