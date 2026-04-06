import React from 'react'

export default async function SettingPages({
  params, // had params kayji mn URL
}: {
  params: Promise<{ slug: string[] }> // params howa Promise
}) {

  // khasna ntsnaw params bach n5rjo slug
  const { slug } = await params

  // exemple:
  // /settings/profile/security
  // slug = ["profile", "security"]

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      {/* kan affichi slug */}
      <p>{JSON.stringify(slug)}</p>

      {/* test bach nchof page khdama */}
      <h1>TEST</h1>

    </div>
  )
}