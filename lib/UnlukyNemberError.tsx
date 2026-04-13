/* 🧩 1) Custom Error (إنشاء error خاص بك)
    🧩 2) Page (فين كنرمي error)
    🧩 3) Error UI (فين كيبان error)*/
// 🧩 1) Custom Error (إنشاء error خاص بك)
export default class UnlukyNemberError extends Error {
    constructor(message = 'Unlucky Number') {
        super(message);          // كنمررو message للـ Error الأصلي
        this.name = 'UnluckyNumberError'; // اسم error ديالك
    }
}
    /*
    كنصايبو Custom Error
كنستعملو throw فـ page
Next.js كيشد error
كيعرض error.tsx
user يضغط reset()
الصفحة كتعاود تخدم
*/