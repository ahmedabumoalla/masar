import InstallForm from "@/components/InstallForm"

export default function InstallPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / طلب تركيب الأجهزة</div><h1>طلب تركيب أو خدمة ميدانية</h1><p className="lead">واجهة خطوات واضحة لا تفتح الطلب إلا بعد إدخال بيانات المزرعة والخدمة والموقع والموعد</p></div></section>
      <section className="section"><div className="container twoCol">
        <div>
          <span className="kicker">متابعة الطلب</span><h2>رحلة الخدمة بعد الإرسال</h2>
          <div className="timeline">
            <div className="step"><span className="stepNum">1</span><p>تم الاستلام بعد إرسال النموذج فقط</p></div>
            <div className="step"><span className="stepNum">2</span><p>قيد المراجعة من فريق العمليات</p></div>
            <div className="step"><span className="stepNum">3</span><p>تم تعيين مختص أو فني ميداني</p></div>
            <div className="step"><span className="stepNum">4</span><p>جار التنفيذ في الموقع المحدد</p></div>
            <div className="step"><span className="stepNum">5</span><p>مكتمل مع تقرير مختصر للعميل</p></div>
          </div>
        </div>
        <InstallForm />
      </div></section>
    </main>
  )
}
