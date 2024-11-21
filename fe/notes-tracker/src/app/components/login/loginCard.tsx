"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginCard() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card
        className="min-w-[400px] border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 
        shadow-lg shadow-blue-500/30 text-center gap-4 rounded-xl transform transition-transform hover:scale-105 p-4"
      >
        <CardHeader className="flex justify-center text-center text-3xl font-bold text-gray-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Login
          </span>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-6 px-6">
          {/* Email Input */}
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-sm bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-lg"
          />

          {/* Password Input */}
          <div className="flex w-full max-w-sm items-center space-x-2 bg-gray-800 rounded-lg p-2">
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="flex-1 bg-transparent border-none text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <Button
              type="button"
              onClick={toggleVisibility}
              className="bg-transparent hover:bg-gray-700 p-2 rounded-lg"
              aria-label="Toggle password visibility"
            >
              {isVisible ? (
                <FaEye className="text-2xl text-blue-400" />
              ) : (
                <FaEyeSlash className="text-2xl text-blue-400" />
              )}
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col justify-center items-center">
          <Button
            color="primary"
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-2 rounded-md shadow-md shadow-blue-500/40 transform hover:scale-110 transition-transform"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    
  );
}
