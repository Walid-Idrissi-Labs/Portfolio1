"use client";
import ProfileCard from "./profilecard-bit";



export default function ProfileCardSection() {
    return (

            <ProfileCard
            name="Walid Idrissi"
            title="Software Engineering Student"
            handle="walid"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/walid_memoji_full.jpg"
            iconUrl= "/devIcon.png"
            enableTilt={true}
            enableMobileTilt
            onContactClick={() => window.open('https://www.x.com', '_blank', 'noopener,noreferrer')}
            // showIcon
            // showBehindGlow
            behindGlowEnabled = {true}
            showUserInfo = {true}
            // behindGlowColor="rgba(60, 60, 60, 0.0)"
            // customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />

    )
}