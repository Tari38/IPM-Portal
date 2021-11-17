// import React from "react";
// import { Button, Input, Label, Form } from "react-bootstrap";
// // import { useNavigate, useLocation } from "react-router-dom";


// export default function LoginPage() {
  // let navigate = useNavigate();
  // let location = useLocation();
  // var AuthContext = React.createContext(null);
  
  // function useAuth() {
  //   return React.useContext(AuthContext);
  // }
  // let auth = useAuth();

  // let from = location.state?.from?.pathname || "/";
 
    
// function handleSubmit(event) {
//     event.preventDefault();
//     var formData = new FormData(event.currentTarget);
//     var username = formData.get("username");
    // auth.signin(username, function () {
        // navigate(from, { replace: true });
    // });
  // }

//   return (
//     <div>
//       <p>You must log in to access your statements.</p>

//       <Form onSubmit={handleSubmit}>
//         <Label>
//           Username: <Input name="username" type="text" />
//         </Label>{" "}
//         <Button type="submit">Login</Button>
//       </Form>
//     </div>
//   );
// }

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserDashboard from './private/UserDashboard';


const LoginPage = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string()
          .min(2, 'Must be longer than 2 characters')
          .max(20, 'Nice try, nobody has a last name that long')
          .required('Required'),
      })}
      onSubmit={UserDashboard}
    >
      <Form>
        <Field name="firstName" placeholder="Jane" />
        <ErrorMessage name="firstName" component="p" />

        <Field name="lastName" placeholder="Doe" />
        <ErrorMessage name="lastName" component="p" />

        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <ErrorMessage name="email" component="p" />

        
        <button type="submit" to="./Auth/private/UserDashboard">Submit</button>
        
      </Form>
    </Formik>
  </div>
);

export default LoginPage;