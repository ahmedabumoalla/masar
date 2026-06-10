"use client"

import { specialists } from "@/lib/data"
import { useState } from "react"

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const required = ["name", "phone", "farm", "specialist", "problem", "date"]
    const missing = required.some((key) => !String(data.get(key) || "").trim())
    if (missing) {
      setError("اكمل البيانات المطلوبة حتى يتم إنشاء طلب الاستشارة")
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
        <div className="field"><label>الاسم</label><input name="name" className="input" placeholder="اسم صاحب المزرعة" /></div>
        <div className="field"><label>رقم الجوال</label><input name="phone" className="input" placeholder="05xxxxxxxx" /></div>
        <div className="field"><label>اسم المزرعة أو الموقع</label><input name="farm" className="input" placeholder="مثال مزرعة وادي الخير" /></div>
        <div className="field"><label>المختص</label><select name="specialist" className="select"><option value="">اختر المختص</option>{specialists.map((s) => <option key={s.name}>{s.name} | {s.field}</option>)}</select></div>
        <div className="field"><label>نوع الحالة</label><select name="type" className="select"><option>مشكلة ري</option><option>آفة زراعية</option><option>تربة ومغذيات</option><option>محاصيل وبيوت محمية</option></select></div>
        <div className="field"><label>الموعد المناسب</label><input name="date" className="input" type="datetime-local" /></div>
        <div className="field full"><label>وصف المشكلة</label><textarea name="problem" className="textarea" placeholder="اكتب ما يحدث في المزرعة وما الذي ترغب بمراجعته مع المختص" /></div>
        <div className="field full"><label>صور الحالة</label><input name="files" className="input" type="file" multiple /></div>
      </div>
      <button className="btn btnPrimary" style={{ marginTop: 18 }} type="submit">إرسال طلب الاستشارة</button>
      {error && <div className="successBox" style={{ background: "#fff4ed", borderColor: "#fed7aa", color: "#9a3412" }}>{error}</div>}
      {submitted && <div className="successBox">تم إنشاء طلب الاستشارة بنجاح وسيظهر للمختص مع الصور والموعد المختار</div>}
    </form>
  )
}
