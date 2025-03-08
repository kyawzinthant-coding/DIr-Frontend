'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

const ContactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits, Format: 09XXXXXXXXX'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [openToast, setOpenToast] = useState(false);

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    console.log('Form Submitted:', values);
    setOpenToast(true);
    form.reset();
  }

  return (
    <div className="min-h-screen mt-16 flex justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl flex flex-col md:flex-row">
        {/* Left - Contact Form */}
        <div className="w-full md:w-2/3 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact our team
          </h2>
          <p className="text-gray-600 mb-6">
            We’re here to help! Reach out and our team will get back to you as
            soon as possible.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* First & Last Name */}
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+959XXXXXXXXX"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        {/* Right - Contact Details */}
        <div className="w-full md:w-1/3 bg-blue-900 text-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Contact us anytime, and we will respond within 24 hours.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-gray-400">📧 Email</p>
              <a
                href="mailto:digitalinformationresources@gmail.com"
                className="text-white hover:underline"
              >
                digitalinformationresources@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-400">📞 Phone</p>
              <p className="text-white">+95 9 9772 21703</p>
            </div>
            <div>
              <p className="text-gray-400">📍 Address</p>
              <p className="text-white">123 Business Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>

      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={openToast}
          onOpenChange={setOpenToast}
          className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded-md shadow-lg w-80"
        >
          <Toast.Title className="font-semibold">✅ Message Sent!</Toast.Title>
          <Toast.Description className="mt-1 text-sm">
            Your message has been successfully sent. We will get back to you
            soon.
          </Toast.Description>
          <Toast.Action altText="Close" asChild>
            <button className="absolute top-2 right-2 text-white cursor-pointer">
              ✖
            </button>
          </Toast.Action>
        </Toast.Root>

        <Toast.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2 w-96 max-w-full p-4 outline-none" />
      </Toast.Provider>
    </div>
  );
};

export default ContactUs;
