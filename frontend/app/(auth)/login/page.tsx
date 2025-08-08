"use client"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginForm } from "./action";
import { useActionState } from "react";

function Login() {

    const [data, action, isLoading]=useActionState(loginForm, undefined)
  


  return (<> 
    <form action={action}> 
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="px-0 text-sm">
                Forgot password?
              </Button>
            </div>
            <Button type="submit" className="w-full">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
            {data ? data : null}
          </div>
          
           <div className="mt-6 text-center text-sm">
            {"Don't have an account? "}
            <Button variant="link" className="px-0 text-sm">
              Sign up here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </form>
  </>);
}

export default Login;
