import React, { useState , useEffect } from 'react'

import { withFormik, Form, Field, Formik } from 'formik'

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
  
    console.log(member)

    return (
      
      <Modal trigger={<Button style={{background:'#cb8b41', color:'#fff'}} >Signup</Button>}>
        <Modal.Header style={{textAlign:'center', background:'#99b3af', color:"#fff", fontFamily:"Quicksand"}}>New Member Registration</Modal.Header>
        <Modal.Content>
    
          <div style={{width: '100%', textAlign:'center'}}>
            <h1 className="signup-msg" style={{fontFamily:'Quicksand', color:'red'}}></h1>
          </div>
          
          <Form className="charlie-form" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'300px', marginTop:"20px"}}>

            {props.touched.name && props.errors.name && <p className='error'>{props.errors.name}</p>}
            <Field type="text" name="username" placeholder="User Name" />
          

            {props.touched.password && props.errors.password && <p className='error'>{props.errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />

            
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
        password: currentValuesFromOurForm.password || ''
        
      }
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('You Forgot name Foo!'),
      password: yup.string().required('You Forgot Password Foo!')
    }),
    handleSubmit: (values, {setStatus, props}) => {
      axios.post('https://generate-random-acts.herokuapp.com/api/auth/register', values)
      .then(( res ) => {
        
        setStatus(res.data)

        const token = res.data.token

        localStorage.setItem('token', token)

        console.log(res.data, 'res.data')

        console.log(props, 'formik-props')


        props.history.push('/acts')

        const signup_msg = document.querySelector('.signup-msg')
        
          signup_msg.textContent = `Ok, ${res.data.user.username}! Leeeet's Goooooooool`

          

      })
      .catch (( err ) => {
        console.log("Error: ", err)
      })
      
      
    }
  
  })(RegistrationForm)
  