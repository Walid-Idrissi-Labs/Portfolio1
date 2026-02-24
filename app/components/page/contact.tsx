"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { CheckCircle2Icon, HomeIcon } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label";
import { Bot } from "lucide-react";
import { Textarea } from "../ui/textarea"
import { Spotlight } from "../ui/spotlightbg";
import { SendButton } from "../ui/stateful-button";
import FadeContent from "./fadeanimation";


export function SignupForm() {
  const router = useRouter();


  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showFollowup, setShowFollowup] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const hideTimerRef = React.useRef<number | null>(null);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowFollowup(false);
  
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  
    const data = await res.json();
    setShowSuccess(res.ok);
    setShowError(!res.ok);
  };

  const submitAction = async (): Promise<boolean> => {
    setShowFollowup(false);
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setShowSuccess(res.ok);

    return res.ok;
  };

  React.useEffect(() => {
    if (!showSuccess) return;
    setShowFollowup(false);
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => {
      setShowSuccess(false);
      setShowFollowup(true);
    }, 6000);
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [showSuccess]);



  return (
    <>
      {/* Full-page background with gradient blinds */}
      <div className="fixed inset-0 z-0">
            <div className="relative flex w-screen h-screen overflow-hidden rounded-md bg-black/96 antialiased md:items-center md:justify-center">
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
                  "bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                )}
              />
        
              <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
              />

            </div>
      </div>


                {/* SUCCESS ALERT */}
      {/* <div
        className={cn(
          "fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-green-500 px-5 py-2 text-sm font-medium text-white shadow-lg transition-all duration-700",
          showSuccess ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none",
        )}
      >
        Message sent successfully! I will get back to you as soon as possible.
      </div> */}
       <div
        className={cn(
          "fixed left-1/2 top-4 z-50 -translate-x-1/2  transition-all duration-700 text-md md:text-lg lg:text-xl",
            showSuccess ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none",
        )}
      >
            <Alert className="max-w-md">

              <CheckCircle2Icon color="green" size="32" />
              <AlertTitle className="col-span-2 text-center">
                Message Sent Successfully !
              </AlertTitle>

                  <AlertDescription className="col-span-2 text-center">
                    I will get back to you as soon as possible.
                  </AlertDescription>

            </Alert>
      </div>

      <div
        className={cn(
          "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-700 text-md md:text-lg lg:text-xl",
          showFollowup ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none",
        )}
      >
        <Alert className="max-w-md">
          <div>
            <HomeIcon size={16}  className="mx-auto"/>
          <div className="col-span-2 flex w-full items-center justify-center">
            <Button
              className="bg-neutral-900 text-neutral-100 hover:bg-neutral-800"
              onClick={() => router.push("/")}
            >
              Back to Main Page
            </Button>
          </div>

          </div>
        </Alert>
      </div>


      <div className="relative z-10 pointer-events-auto px-7 py-5">
        <FadeContent blur={true} duration={2800} ease="ease-out" initialOpacity={0} delay={100}>
          <div className="shadow-input mx-auto w-full max-w-md rounded-xl p-4 md:rounded-2xl md:p-8 bg-black outline outline-neutral-500">
          <h2 className="text-xl xl:text-2xl font-bold text-neutral-200  text-center md:text-left">
            Contact Me
          </h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-600 ">
            Send me a message and I'll get back to you as soon as possible.
          </p>

          <form className="mt-8" onSubmit={handleSubmit}>
            
              <LabelInputContainer className="mb-6">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" type="text" onChange={handleChange} />
              </LabelInputContainer>

            <LabelInputContainer className="mb-7">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" placeholder="your.email@example.com" type="email" onChange={handleChange} />
            </LabelInputContainer>


            <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={4}
                    onChange={handleChange}
                    />

            </Field>

            <div className="my-7 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />


            <div className="flex m-0.1 mt-3 w-full items-center justify-center">
              <SendButton onAction={submitAction} type="button">Send message</SendButton>
            </div>


          </form>
        </div>
        </FadeContent>
      </div>
    </>
  );
}



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

