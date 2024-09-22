import { UserInfo } from "@/components/user-info"

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 lg:px-0">
      <h1 className="text-4xl font-bold text-center">
        <a 
        className="hover:text-blue-500 transition-colors" 
        href="https://nextjs.org/docs" 
        target="_blank"
        >
          Auth.js
        </a>
      </h1>
      <p className="text-center text-zinc-200 mt-3">
        Ejemplo de autenticación con la libreria <a 
        className="hover:text-blue-500 transition-colors" 
        href="https://nextjs.org/docs" 
        target="_blank"
        >
          Auth.js
        </a>. 
      </p>
      <p className="text-center text-zinc-200 mt-1 mb-5">
        <strong>Providers utilizados:</strong> Github
      </p>

      <UserInfo />
    </main>
  )
}
