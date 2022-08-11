import React, { useEffect, useState } from 'react'
import { Container, Card, Spinner, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {emailVerifyAdminUser} from "../../helpers/axiosHelper"
// show the spinner first
// grab the c and e from the query string parameters
//create an axios function to call the server

// create api endpoint to receive this code
// check if the combination of the email and code exit in the user table, if so activate the suser and send mail notification

const EmailVerification = () =>{
    const [queryParams] = useSearchParams()
    const [isPending, setIsPending] = useState(true);
    const [response, setResponse] = useState({})
    

    useEffect(()=>{
       const obj ={
        emailValidationCode:  queryParams.get("c"),
        email: queryParams.get("e"),
       };

       // call axios to call the server
       (async () =>{
        const result = await emailVerifyAdminUser(obj);
        setResponse(result)
        setIsPending(false)
       })()
      

    }, [queryParams])
  return (
    <>
    <Header/>
    <Container>
    <div>
        
        {isPending && <Card className="mt-4  p-3 m-auto" style={{width: "30rem"}}>
            <Spinner variant='primary' animation="border" className=' m-auto p-4 mt-3 mb-3' ></Spinner>
          <h5>Email verification processing has begin. Please wait . . .</h5>  </Card>}

          {
            response.message && <Alert variant={ response.status === 'success' ? 'success' : 'danger'}  className="mt-4  p-3 m-auto">

                {response.message}
            </Alert>
          }
        </div></Container>
    <Footer/>
    </>
  )
}

export default EmailVerification