// 🧩 2) Page (فين كنرمي error)
export const dynamic = "force-dynamic";
import UnlukyNemberError from "@/lib/UnlukyNemberError";

export default function Random() {
  const randomNumber = Math.floor(Math.random() * 10);
// hada 5Ass it7ayd f l build D
  if (randomNumber > 6) {
    throw new UnlukyNemberError('Unlucky Number');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {randomNumber}
    </div>
  );
}