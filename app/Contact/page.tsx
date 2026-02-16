import { SignupFormDemo} from "@/app/components/page/contact"

export const metadata = {
    title : "Contact"
}

export default function ContactPage() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-neutral-900 outline outline-gray-300">
            {/* <Contact /> */}
            <SignupFormDemo />
        </div>
    )
}
