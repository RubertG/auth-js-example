import { SignInGithub } from "@/components/sign-in-github"

export default function LoginPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-10 lg:px-0">
      <section className="flex flex-col items-center justify-center border border-zinc-900 bg-zinc-950 p-4 rounded-lg w-fit mx-auto min-w-80">
        <h1 className="text-2xl font-bold text-center mb-4">
          Login
        </h1>
        <SignInGithub />
      </section>
    </main>
  )
}
