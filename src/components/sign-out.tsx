import { auth, signOut } from "@/auth"
import Link from "next/link"

interface Props {
  className?: string
}

export const SignOut = async ({
  className,
}: Props) => {
  const session = await auth()

  if (session?.user) {
    return (
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button
          className={className}
          type="submit"
        >
          Cerrar sesión
        </button>
      </form>
    )
  }

  return (
    <Link
      className={className}
      href="/login"
    >
      Iniciar sesión
    </Link>
  )
}
