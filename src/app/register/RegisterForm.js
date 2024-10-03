'use client'

import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Alert } from "flowbite-react";


export default function RegisterForm({ didSubmit }) {
   const [results, setResults] = useState(null);
   const [message, setMessage] = useState(null);

   const handleForm = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const JSONData = JSON.stringify(data);
      const endpoint = "/api/auth/register/";
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSONData
      }
      const response = await fetch(endpoint, options);
      const result = await response.json();
      setResults(result);
      if (didSubmit) {
         didSubmit(result);
      }
      if (result.message) {
         setMessage(result.message);
      }
      // register, created: 201
      if (response.status === 201) {
         window.location.href = "/login";
      }
   }

   return (
      <>
         {message && <Alert color={"warning"}>{message}</Alert>}
         <form className="flex max-w-md flex-col gap-4" onSubmit={handleForm}>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="username" value="Pick a username" />
               </div>
               <TextInput id="username" name="username" type="text" placeholder="Your username" required />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="email" value="Your email" />
               </div>
               <TextInput id="email" name="email" type="email" placeholder="Your email" required />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="password" value="Your password" />
               </div>
               <TextInput id="password" name="password" type="password" placeholder="*****" required />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="password2" value="Confirm your password" />
               </div>
               <TextInput id="password2" name="passwordConfirm" type="password" placeholder="*****" required />
            </div>
            <Button type="submit">Register</Button>
         </form>
      </>
   )
}