"use client"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpForm } from "./actions";
import { useActionState } from "react";

function SignUp() {
   
    const [data, action, isLoading]=useActionState(signUpForm, undefined)


  return (<> 
   
   <form action={action}>
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Sign up to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                name="username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                name="password"
                required
              />
            </div>


            <Button type="submit" className="w-full">
               {isLoading ? "Loading..." : "Create Account"}
            </Button>
            {data? data : null}

          </div>
          
          
         
          
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Button variant="link" className="px-0 text-sm">
              Sign in here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </form>
  </>);
}

export default SignUp;
