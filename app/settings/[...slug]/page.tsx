import React from 'react'

const Profile = () => <h1>PROFILE PAGE</h1>
const Security = () => <h1>SECURITY PAGE</h1>
const Account = () => <h1>ACCOUNT PAGE</h1>
const NotFoundPage = () => <h1>NOT FOUND</h1>

const pages: Record<string, React.ReactNode> = {
  profile: <Profile />,
  security: <Security />,
  account: <Account />,
}

export default async function SettingPages({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params

  const firstSegment = slug?.[0]
  const content = pages[firstSegment] || <NotFoundPage />

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>{JSON.stringify(slug)}</p>
      {content}
    </div>
  )
}