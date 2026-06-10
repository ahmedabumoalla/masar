export default function DashboardPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / الأثر</div><h1>أرقام تشغيل تعكس نمو المنصة</h1><p className="lead">مؤشرات تعرض أثر مسار في البيانات والطلبات والشركاء والخدمات الزراعية</p></div></section>
      <section className="section"><div className="container">
        <div className="grid4">
          <div className="statCard"><strong>25,000+</strong><span>عملية تحليل بيانات</span></div>
          <div className="statCard"><strong>650+</strong><span>مزرعة مستفيدة</span></div>
          <div className="statCard"><strong>6,320+</strong><span>عميل يستخدم المنصة</span></div>
          <div className="statCard"><strong>65+</strong><span>شريك في السوق الزراعي</span></div>
        </div>
        <br />
        <div className="dashboardGrid">
          <div className="chart"><div className="bar" style={{height:"46%"}}><span>يناير</span></div><div className="bar" style={{height:"56%"}}><span>فبراير</span></div><div className="bar" style={{height:"62%"}}><span>مارس</span></div><div className="bar" style={{height:"78%"}}><span>أبريل</span></div><div className="bar" style={{height:"86%"}}><span>مايو</span></div><div className="bar" style={{height:"94%"}}><span>يونيو</span></div></div>
          <div className="darkBand"><h2>نتائج ميدانية</h2><p>تحسن متوسط كفاءة الري وخفض البلاغات المتكررة بعد ربط أجهزة الاستشعار بالجدولة والتنبيهات المبكرة وتوجيه الحالات للمختصين المناسبين</p></div>
        </div>
      </div></section>
    </main>
  )
}
