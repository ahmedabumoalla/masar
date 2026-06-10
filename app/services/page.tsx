import Link from "next/link"

export default function ServicesPage(){
  return <main><section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / الخدمات</div><h1>الخدمات الميدانية</h1><p className="lead">طلبات الفحص والتركيب والصيانة والاستشارات الميدانية</p></div></section><section className="section"><div className="container grid3"><div className="card"><h3>تركيب جهاز مسار</h3><p>تجهيز الجهاز وربطه بالمنصة وتشغيل القراءات الأولى</p><br/><Link className="btn btnPrimary" href="/services/install">طلب الخدمة</Link></div><div className="card"><h3>فحص نظام الري</h3><p>زيارة للتحقق من الضغط والتوزيع والتسريب والانسداد</p><br/><Link className="btn btnGhost" href="/services/install">طلب فحص</Link></div><div className="card"><h3>صيانة دورية</h3><p>متابعة الصمامات والمضخات والمستشعرات وتحديث الجدولة</p><br/><Link className="btn btnGhost" href="/services/install">طلب صيانة</Link></div></div></section></main>
}
