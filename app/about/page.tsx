export const dynamic = 'force-dynamic'
/*
Date.now() كيعطيك timestamp (ما تحتاجش parseInt)
toLocaleTimeString() → كيخرج الوقت بحال: 10:30:45 PM
.replace(/:\d+ /, " ") → كتحيد الثواني (:45)
*/
function prettyDay2() {
  const date = new Date(Date.now());
  const localeSpecificTime = date.toLocaleTimeString();

  return localeSpecificTime.replace(/:\d+ /, " ");
}

const about = () => {
    const now = new Date().toLocaleTimeString();
return (
    <div  className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        about <br/>
        {now}<br/>
        {prettyDay2()}
    </div>

)
}

export default about