import type { ReactNode } from "react"
import { siApplemusic, siArc, siNotion, siVercel } from "simple-icons"

import { Sparkles } from "./toolssparkles"

const BEIGE_GLOW = "#f4d8a4"
const VSCODE_ICON_PATH =
  "m17.586 2.727-3.393 1.637a.999.999 0 0 0-.575.903v13.48a.994.994 0 0 0 .575.902l3.393 1.637A.998.998 0 0 0 19 20.386V3.626a.998.998 0 0 0-1.414-.9zm-4.968 2.174L7.023 10l-2.439-1.85-1.58.796L6.02 12l-3.016 3.055 1.58.796 2.439-1.85 5.595 5.1V4.901z"

type BrandLockupProps = {
  name: string
  nameClassName: string
  icon: ReactNode
}

function BrandLockup({ name, nameClassName, icon }: BrandLockupProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2.5 text-white/85 transition-colors duration-300 hover:text-[#f4d8a4]">
        <span className="inline-flex h-5 w-5 items-center justify-center">{icon}</span>
        <span className={nameClassName}>{name}</span>
      </div>
    </div>
  )
}

function SimpleIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

export function ToolsSparkles() {
  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white">
      <div className="mx-auto mt-32 w-full max-w-4xl px-5 sm:px-8">
        <div className="text-center text-3xl text-white sm:text-4xl">
          <span className="text-[#f4d8a4]">My daily drivers</span>

          <br />

          <span>The tools I never close</span>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
          <Arc />
          <Vercel />
          <AppleMusic />
          <VSCode />
          <Notion />
        </div>
      </div>

      <div className="relative -mt-28 h-96 w-full overflow-hidden mask-[radial-gradient(65%_65%_at_50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#f4d8a4,transparent_70%)] before:opacity-35" />
        <div className="absolute left-1/2 top-[42%] z-10 aspect-[1/0.7] w-[260%] -translate-x-1/2 rotate-180 rounded-[100%] border-b border-white/20 bg-black/95" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
          color={BEIGE_GLOW}
        />
      </div>
    </div>
  )
}

const Arc = () => (
  <BrandLockup
    name="Arc"
    nameClassName="font-[var(--font-unbounded)] text-[0.95rem] tracking-[0.01em]"
    icon={<SimpleIcon path={siArc.path} />}
  />
)

const Vercel = () => (
  <BrandLockup
    name="Vercel"
    nameClassName="font-[var(--font-lato)] text-[1rem] font-semibold tracking-[0.04em]"
    icon={<SimpleIcon path={siVercel.path} />}
  />
)

const AppleMusic = () => (
  <BrandLockup
    name="Apple Music"
    nameClassName="font-[var(--font-lato)] text-[0.98rem] font-semibold"
    icon={<SimpleIcon path={siApplemusic.path} />}
  />
)

const VSCode = () => (
  <BrandLockup
    name="VS Code"
    nameClassName="font-[var(--font-ibm)] text-[0.94rem] tracking-[0.02em]"
    icon={<SimpleIcon path={VSCODE_ICON_PATH} />}
  />
)

const Notion = () => (
  <BrandLockup
    name="Notion"
    nameClassName="font-[var(--font-lato)] text-[1rem] font-black tracking-[0.01em]"
    icon={<SimpleIcon path={siNotion.path} />}
  />
)
