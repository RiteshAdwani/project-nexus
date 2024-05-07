"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { getUserByEmail } from "@/lib/user";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values:z.infer<typeof LoginSchema>) => {
  // Validate fields
  const validatedFields = LoginSchema.safeParse(values);

  if(!validatedFields.success){
    return {error:"Invalid fields!"}
  }

  const {email,password} = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if(!existingUser || !existingUser.email || !existingUser.password){
    return {error: "User doesn't exist!"}
  }

  try{
    await signIn("credentials",{
      email,
      password,
      redirectTo:DEFAULT_LOGIN_REDIRECT
    })
  }catch(error){
    if(error instanceof AuthError){
      switch(error.type){
        case "CredentialsSignin":
          return {error:"Invalid Credentials!"}
        default:
          return {error:"Something went wrong!"}
      }
    }
    throw error;
  }
}