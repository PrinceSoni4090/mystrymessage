// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useDebounceCallback } from "usehooks-ts";  
// import { useToast } from "@/components/ui/use-toast";
// import { useRouter } from "next/navigation";
// import { signUpSchema } from "@/schemas/signUpSchema";
// import axios, { AxiosError } from "axios";
// import { ApiResponse } from "@/types/ApiResponse";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";

// const Page = () => {
//   const [username, setUsername] = useState("");
//   const [usernameMessage, setUsernameMessage] = useState("");
//   const [isCheckingUsername, setIsCheckingUsername] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const debounced = useDebounceCallback(setUsername, 300);
//   const { toast } = useToast();
//   const router = useRouter();

//   //zod implementation
//   const form = useForm<z.infer<typeof signUpSchema>>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//     },
//   });

//   useEffect(() => {
//     const checkUsernameUnique = async () => {
//       if (username) {
//         setIsCheckingUsername(true);
//         setUsername("");
//         try {
//           const response = await axios.get<ApiResponse>(
//             `/api/check-username-unique?username=${username}`)
//             console.log(response.data.message)
//            let message = response.data.message
//           setUsernameMessage(message);
//         } catch (error) {
//           const axiosError = error as AxiosError<ApiResponse>;
//           setUsernameMessage(
//             axiosError.response?.data.message ?? "Error checking username"
//           );
//         } finally {
//           setIsCheckingUsername(false);
//         }
//       }
//     };
//     checkUsernameUnique();
//   }, [username]);

//   const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post<ApiResponse>("/api/sign-up", data);
      
//       toast({
//         title: "Success",
//         description: response.data.message,
//       });
//       router.replace(`/verify/${username}`);
      
//       setIsSubmitting(false);
//     } catch (error) {
//       console.error("Error in signup of user", error);
//       const axiosError = error as AxiosError<ApiResponse>;
//       let errorMessage = axiosError.response?.data.message;
//       toast({
//         title: "Signup failed",
//         description: errorMessage,
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//     }
//   };
//   if (typeof window === 'undefined'){
//     return null
// }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-800">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
//             Welcome to True Feedback
//           </h1>
//           <p className="mb-4">Sign up to continue your secret conversations</p>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               name="username"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input placeholder="username" {...field}
//                     onChange={(e) => {
//                       field.onChange(e)
//                       debounced(e.target.value)
//                     }}
//                     />
//                   </FormControl>
//                     {isCheckingUsername && <Loader2 className="animate-spin"/>}
//                     <p className = {`text-sm ${usernameMessage === "Username is unique" ? 'text-green-500' : 'text-red-500' } `} >
//                         test {usernameMessage}
//                     </p>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="email"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="email" {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="password"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="password" {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" disabled = {isSubmitting}>
//               {
//                 isSubmitting ? (
//                   <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin"/> 
//                   Please wait
//                   </>
//                 ) : ("Signup")
//             }
//             </Button>
//           </form>
//         </Form>
//         <div className="text-center mt-4">
//           <p>
//             Already a member?{' '}
//             <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useDebounceCallback } from "usehooks-ts";  
// import { useToast } from "@/components/ui/use-toast";
// import { useRouter } from "next/navigation";
// import { signUpSchema } from "@/schemas/signUpSchema";
// import axios, { AxiosError } from "axios";
// import { ApiResponse } from "@/types/ApiResponse";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import { signIn } from "next-auth/react";  
// import GoogleButton from 'react-google-button'

// const Page = () => {
//   const [username, setUsername] = useState("");
//   const [usernameMessage, setUsernameMessage] = useState("");
//   const [isCheckingUsername, setIsCheckingUsername] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const debounced = useDebounceCallback(setUsername, 300);
//   const { toast } = useToast();
//   const router = useRouter();

//   const form = useForm<z.infer<typeof signUpSchema>>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//     },
//   });

//   useEffect(() => {
//     const checkUsernameUnique = async () => {
//       if (username) {
//         setIsCheckingUsername(true);
//         try {
//           const response = await axios.get<ApiResponse>(
//             `/api/check-username-unique?username=${username}`
//           );
//           console.log(response.data.message);
//           setUsernameMessage(response.data.message);
//         } catch (error) {
//           const axiosError = error as AxiosError<ApiResponse>;
//           setUsernameMessage(
//             axiosError.response?.data.message ?? "Error checking username"
//           );
//         } finally {
//           setIsCheckingUsername(false);
//         }
//       }
//     };
//     checkUsernameUnique();
//   }, [username]);

//   const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post<ApiResponse>("/api/sign-up", data);
      
//       toast({
//         title: "Success",
//         description: response.data.message,
//       });

//       const { username } = data;
//       if (username) {
//         router.replace(`/verify/${username}`);
//       } else {
//         console.error("Username is missing, cannot redirect to verify page");
//       }

//       setIsSubmitting(false);
//     } catch (error) {
//       console.error("Error in signup of user", error);
//       const axiosError = error as AxiosError<ApiResponse>;
//       let errorMessage = axiosError.response?.data.message;
//       toast({
//         title: "Signup failed",
//         description: errorMessage,
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-black">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
//             Welcome to Mystery Mail
//           </h1>
//           <p className="mb-4">Sign up to continue your secret conversations</p>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               name="username"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="username"
//                       {...field}
//                       onChange={(e) => {
//                         field.onChange(e);
//                         debounced(e.target.value); // This will set the username correctly
//                       }}
//                     />
//                   </FormControl>
//                   {isCheckingUsername && <Loader2 className="animate-spin" />}
//                   <p className={`text-sm ${usernameMessage === "Username is unique" ? 'text-green-500' : 'text-red-500'}`}>
//                     {usernameMessage}
//                   </p>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="email"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="password"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 "Signup"
//               )}
//             </Button>
//           </form>
//         </Form>

        
        

//         <div className="text-center mt-4">
//           <p>
//             Already a member?{' '}
//             <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const debounced = useDebounceCallback(setUsername, 300);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async (newUsername : string) => {
      if (newUsername) {
        setIsCheckingUsername(true);
        try {
          const response = await axios.get<ApiResponse>(
            `/api/check-username-unique?username=${newUsername}`
          );
          console.log(response.data.message);
          setUsernameMessage(response.data.message);
        } catch (error) {
          setUsernameMessage("Error checking username");
          console.error(error);
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };

    // Only call the function when username changes
    checkUsernameUnique(username);
  }, [username]); // Dependency array includes only username

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        setIsSubmitting(true);
        try {
          const response = await axios.post<ApiResponse>("/api/sign-up", data);
          
          toast({
            title: "Success",
            description: response.data.message,
          });
    
          const { username } = data;
          if (username) {
            router.replace(`/verify/${username}`);
          } else {
            console.error("Username is missing, cannot redirect to verify page");
          }
    
          setIsSubmitting(false);
        } catch (error) {
          console.error("Error in signup of user", error);
          const axiosError = error as AxiosError<ApiResponse>;
          let errorMessage = axiosError.response?.data.message;
          toast({
            title: "Signup failed",
            description: errorMessage,
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      };
    
      return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Welcome to Mystery Mail
              </h1>
              <p className="mb-4">Sign up to continue your secret conversations</p>
              <p className="font-semibold mb-2">Demo Credentials in <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
                  Sign In
                </Link> page</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="username"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            debounced(e.target.value); // This will set the username correctly
                          }}
                        />
                      </FormControl>
                      {isCheckingUsername && <Loader2 className="animate-spin" />}
                      <p className={`text-sm ${usernameMessage === "Username is unique" ? 'text-green-500' : 'text-red-500'}`}>
                        {usernameMessage}
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
              </form>
            </Form>
    
            
            
    
            <div className="text-center mt-2">
              
              <p>
                Already a member?{' '}
                <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Page;
