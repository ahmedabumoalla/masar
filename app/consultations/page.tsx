import ConsultationForm from "@/components/ConsultationForm"
import { specialists } from "@/lib/data"

export default function ConsultationsPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / الاستشارات</div><h1>استشارة زراعية حقيقية</h1><p className="lead">اختر المختص وارفع صور الحالة وحدد الموعد المناسب ليتم إنشاء طلب واضح قابل للمتابعة</p></div></section>
      <section className="section"><div className="container">
        <div className="sectionHead"><div><span className="kicker">المختصون المتاحون</span><h2>اختر الخبير المناسب لحالة مزرعتك</h2></div><p>البطاقات تعرض التخصص وسنوات الخبرة ونوع الخدمة حتى يصل الطلب للشخص الأنسب</p></div>
        <div className="grid4">{specialists.map((s) => <div className="card" key={s.name}><span className="tag">⭐ {s.rating}</span><h3>{s.name}</h3><p>{s.field}</p><br /><div className="meta"><span>{s.experience}</span><span>{s.mode}</span><span>{s.price}</span></div></div>)}</div>
      </div></section>
      <section className="section"><div className="container twoCol">
        <div><span className="kicker">طلب الاستشارة</span><h2>أرسل المشكلة والموعد والصور</h2><p className="lead">لن تظهر رسالة الاستلام إلا بعد تعبئة البيانات المطلوبة وإرسال النموذج</p><div className="timeline"><div className="step"><span className="stepNum">1</span><p>تحديد المختص ونوع الحالة</p></div><div className="step"><span className="stepNum">2</span><p>رفع صور النبات أو نظام الري</p></div><div className="step"><span className="stepNum">3</span><p>اختيار موعد التواصل ومتابعة الرد</p></div></div></div>
        <ConsultationForm />
      </div></section>
    </main>
  )
}
