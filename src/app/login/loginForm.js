'use client'

import { useState } from "react";
import { Button, Checkbox, Label, TextInput, Alert } from "flowbite-react";


export default function LoginForm({ didSubmit }) {
   const [results, setResults] = useState(null);
   const [message, setMessage] = useState(null);

   const handleForm = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const JSONData = JSON.stringify(data);
      const endpoint = "/api/auth/login/";
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSONData
      }

      const response = await fetch(endpoint, options);
      console.log(response);
      if (response.status === 200) {
         window.location.href = "/";
      }
      const result = await response.json();
      setResults(result);
      if (didSubmit) {
         didSubmit(result);
      }
      if (result.message) {
         setMessage(result.message);
      }
   }

   return (
      <>
         {message && <Alert color={"warning"}>{message}</Alert>}
         <form className="flex max-w-md flex-col gap-4" onSubmit={handleForm}>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="username" value="Your username" />
               </div>
               <TextInput id="username" name="username" type="text" placeholder="Your username" required />
            </div>
            <div>
               <div className="mb-2 block">
                  <Label className="text-white" htmlFor="password" value="Your password" />
               </div>
               <TextInput id="password" name="password" type="password" placeholder="*****" required />
            </div>
            <Button type="submit">Login</Button>
         </form>
      </>
   )
}