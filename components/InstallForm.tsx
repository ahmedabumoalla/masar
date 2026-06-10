"use client"

import { services } from "@/lib/data"
import { useState } from "react"

export default function InstallForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const required = ["name", "phone", "service", "location", "description", "date"]
    const missing = required.some((key) => !String(data.get(key) || "").trim())
    if (missing) {
      setError("اكمل بيانات الطلب حتى يتم فتح تذكرة الخدمة")
      setSubmitted(false)
      return
    }
    setError("")
    setSubmitted(true)
    event.currentTarget.reset()
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="formGrid">
        <div className="field"><label>اسم العميل</label><input name="name" className="input" placeholder="الاسم الكامل" /></div>
        <div className="field"><label>رقم الجوال</label><input name="phone" className="input" placeholder="05xxxxxxxx" /></div>
        <div className="field"><label>نوع الخدمة</label><select name="service" className="select"><option value="">اختر الخدمة</option>{services.map((service) => <option key={service}>{service}</option>)}</select></div>
        <div className="field"><label>المنطقة</label><select name="region" className="select"><option>عسير</option><option>الرياض</option><option>القصيم</option><option>مكة</option><option>المدينة</option><option>جازان</option></select></div>
        <div className="field full"><label>موقع المزرعة</label><input name="location" className="input" placeholder="رابط الموقع أو وصف الوصول للمزرعة" /></div>
        <div className="field"><label>الموعد المناسب</label><input name="date" className="input" type="datetime-local" /></div>
        <div className="field"><label>حجم المزرعة</label><input name="size" className="input" placeholder="مثال 20 هكتار" /></div>
        <div className="field full"><label>وصف المشكلة أو المطلوب</label><textarea name="description" className="textarea" placeholder="اشرح حالة نظام الري أو الخدمة المطلوبة" /></div>
        <div className="field full"><label>مرفقات وصور</label><input name="files" className="input" type="file" multiple /></div>
      </div>
      <button className="btn btnPrimary" style={{ marginTop: 18 }} type="submit">تأكيد طلب الخدمة</button>
      {error && <div className="successBox" style={{ background: "#fff4ed", borderColor: "#fed7aa", color: "#9a3412" }}>{error}</div>}
      {submitted && <div className="successBox">تم فتح طلب الخدمة وانتقل للحالة الأولى تم الاستلام وسيتم تعيين مختص بعد مراجعة البيانات</div>}
    </form>
  )
}
