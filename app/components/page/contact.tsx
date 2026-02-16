"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field"
import { Input } from "../ui/input"
import { Label } from "../ui/label";
import { Bot } from "lucide-react";
import { Textarea } from "../ui/textarea"




// export function Contact() {
//   return (
// <div className="h-[40vw] w-[30vw] outline outline-red-500 flex items-center justify-center ">
//     <FieldSet className="w-full max-w-xs">
//       <FieldGroup>


//         <Field>
//           <FieldLabel htmlFor="name">Name</FieldLabel>
//           <Input id="name" type="text" placeholder="Your Name" />
//         </Field>


//       <Field>
//         <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
//         <Input id="fieldgroup-email" placeholder="name@example.com" required />
//       </Field>


//         <Field>
//       <FieldLabel htmlFor="input-required">
//         Required Field <span className="text-destructive">*</span>
//       </FieldLabel>
//       <Input
//         id="input-required"
//         placeholder="This field is required"
//         required
//       />
//       <FieldDescription>This field must be filled out.</FieldDescription>
//     </Field>



//       <Field>
//         <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
//         <Input
//           id="fieldgroup-email"
//           type="email"
//           placeholder="name@example.com"
//         />
//         <FieldDescription>
//           We&apos;ll send updates to this address.
//         </FieldDescription>
//       </Field>
//       <Field orientation="vertical">
//         <Button type="submit">Send e-mail</Button>
//       </Field>

        


//       </FieldGroup>
//     </FieldSet>
// </div>
//   )
// }




export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Form submitted");
    alert("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-xl  p-4 md:rounded-2xl md:p-8 bg-black       outline outline-neutral-500">
      <h2 className="text-xl xl:text-2xl font-bold text-neutral-200 ">
        Contact Me
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 ">
        Sign up for early access and be the first to experience our platform.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        {/* <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"> */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" type="text" />
          </LabelInputContainer>
          {/* <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
            <BottomGradient />
          </LabelInputContainer> */}
        {/* </div> */}
        <LabelInputContainer className="mb-7">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>




        <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
                id="message"
                placeholder="Enter your message here..."
                rows={4}
            />

        </Field>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          className="group/btn my-3 relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>


        <div className="flex flex-col space-y-4">

        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

