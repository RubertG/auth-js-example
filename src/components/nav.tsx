import Link from "next/link"
import { SignOut } from "./sign-out"

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 lg:px-20">
      <Link
        href="/"
        className="text-xl font-bold text-center mb-4"
      >
        Ejemplo Auth.js
      </Link>
      <ul className="flex items-center gap-1">
        <li>
          <Link
            href="/"
            className="hover:text-white transition-colors py-2 px-3 hover:bg-zinc-900 rounded-lg"
          >
            Home
          </Link>
        </li>
        <SignOut className="hover:text-white transition-colors py-2 px-3 hover:bg-zinc-900 rounded-lg" />
      </ul>
    </nav>
  )
}
