// 'use client'
// import React from 'react'
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import messages from '@/messages.json'

// const Home = () => {
//   return (
//     <>
//     <main className='flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12'>
//       <section className="text-center mb-8 md:mb-12">
//         <h1 className="text-3xl md:text-5xl font-bold">
//           Dive into the World of Anonymous Feedback
//         </h1>
//         <p className="mt-3 md:mt-4 text-base md:text-lg ">
//           True Feedback - Where your identity remains a secret.
//         </p>
//       </section>
      
//       <Carousel
//       plugins={[Autoplay({delay: 2000})]}
//       className="w-full max-w-xs">
//       <CarouselContent>
//        {
//         messages.map((message, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardHeader>
//                   {message.title}
//                 </CardHeader>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-lg font-bold">{message.content}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))
//        }
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>

//     </main>

// <footer className="text-center p-4 md:p-6">
// © 2023 True Feedback. All rights reserved.
// </footer>
// </>
//   )
// }

// export default Home

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-black text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
          Share Anonymously, Connect Globally
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
          Authentic Feedback, Unbiased Results
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 1500 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-black text-white">
        © 2024 Mystery Mail . All rights reserved.
      </footer>
    </div>
  );
}
