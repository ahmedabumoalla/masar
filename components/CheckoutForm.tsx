"use client"

import { useEffect, useMemo, useState } from "react"

type CartItem = { slug: string; name: string; price: number; image: string; company: string; qty: number }

export default function CheckoutForm() {
  const [items, setItems] = useState<CartItem[]>([])
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  useEffect(() => setItems(JSON.parse(localStorage.getItem("masar-cart") || "[]")), [])
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.qty, 0), [items])
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!items.length) {
      setError("السلة فارغة أضف منتجات قبل الدفع")
      return
    }
    const data = new FormData(event.currentTarget)
    const required = ["name", "phone", "email", "farm", "address", "payment"]
    const missing = required.some((key) => !String(data.get(key) || "").trim())
    if (missing) {
      setError("اكمل بيانات الدفع والتوصيل")
      return
    }
    setError("")
    setDone(true)
    localStorage.removeItem("masar-cart")
    window.dispatchEvent(new Event("masar-cart-updated"))
  }
  return (
    <div className="twoCol">
      <form className="form" onSubmit={submit}>
        <div className="formGrid">
          <div className="field"><label>الاسم</label><input name="name" className="input" /></div>
          <div className="field"><label>رقم الجوال</label><input name="phone" className="input" /></div>
          <div className="field"><label>البريد الإلكتروني</label><input name="email" className="input" type="email" /></div>
          <div className="field"><label>اسم المزرعة</label><input name="farm" className="input" /></div>
          <div className="field full"><label>عنوان التوصيل أو موقع المزرعة</label><input name="address" className="input" /></div>
          <div className="field"><label>طريقة الدفع</label><select name="payment" className="select"><option value="">اختر طريقة الدفع</option><option>مدى</option><option>Visa</option><option>Mastercard</option><option>تحويل بنكي</option></select></div>
          <div className="field"><label>وقت التواصل المناسب</label><input className="input" type="time" /></div>
        </div>
        <button className="btn btnPrimary" style={{ marginTop: 18 }} type="submit">تأكيد الدفع التجريبي</button>
        {error && <div className="successBox" style={{ background: "#fff4ed", borderColor: "#fed7aa", color: "#9a3412" }}>{error}</div>}
        {done && <div className="successBox">تم إنشاء أمر الشراء وربطه بحساب المزرعة وسيتم التواصل لتأكيد التركيب أو التوصيل</div>}
      </form>
      <aside className="form">
        <h3>ملخص الدفع</h3>
        {items.map((item) => <p key={item.slug}>{item.name} × {item.qty}</p>)}
        <h2>{total.toLocaleString("ar-SA")} ريال</h2>
        <p>واجهة دفع جاهزة للربط لاحقاً مع بوابة دفع حقيقية مثل Tap أو HyperPay أو Moyasar</p>
      </aside>
    </div>
  )
}
