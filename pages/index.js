
const twitterUrl = 'https://twitter.com/adarshzpatel'

export default function Home() {
  return (
    <div className='w-screen min-h-screen grid place-items-center'>
      <div className="text-center">
        <h1 className="font-bold mb-4 text-4xl text-slate-700">Nextjs + Tailwindcss starter template </h1>
        <p className="text-2xl text-slate-500">Created by <a className="italic text-blue-600 underline underline-offset-2" href={twitterUrl}> @adarshzpatel </a></p>
      </div>
    </div>
  )
}
