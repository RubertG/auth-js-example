import { signIn } from "@/auth"

export const SignInGithub = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", {
          redirectTo: "/",
        })
      }}
    >
      <button
        className="bg-zinc-800 hover:bg-zinc-900 transition-colors text-zinc-200 py-2 px-4 rounded-lg"
        type="submit"
      >
        Ingresar con GitHub
      </button>
    </form>
  )
}
