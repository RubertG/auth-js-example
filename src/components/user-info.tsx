import { auth } from "@/auth"
import Image from "next/image"

export const UserInfo = async () => {
  const session = await auth()

  return (
    <section>
      <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      {
        session?.user && (
          <article className="flex items-center justify-center gap-2 mt-4">
            <Image
              alt={session?.user?.name || ""}
              className="rounded-full"
              height={60}
              src={session?.user?.image || "./favicon.ico"}
              width={60}
            />
            <div>
              <h2 className="text-lg font-bold">{session?.user?.name}</h2>
              <p className="text-zinc-200 text-sm">{session?.user?.email}</p>
            </div>
          </article>
        )
      }
    </section>
  )
}