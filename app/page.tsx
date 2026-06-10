import Link from "next/link"
import { BarChart3, Droplets, Leaf, ShieldCheck, ShoppingCart, Users, Wrench, Zap } from "lucide-react"
import ProductGrid from "@/components/ProductGrid"
import { specialists } from "@/lib/data"

const services = [
  { icon: Droplets, title: "إدارة وجدولة الري الذكي", text: "تنظيم أوقات الري حسب احتياج المحصول وحالة التربة والظروف المحيطة لتقليل الهدر ورفع كفاءة المياه" },
  { icon: ShieldCheck, title: "اكتشاف مشاكل أنظمة الري", text: "تنبيهات واضحة عند وجود تسريب أو انسداد أو ضعف ضغط أو انخفاض كفاءة التوزيع داخل المزرعة" },
  { icon: BarChart3, title: "تحليل بيانات المزرعة", text: "لوحة بيانات تعرض المؤشرات المهمة بطريقة سهلة مع توصيات تساعد على تحسين الإنتاج وتقليل التكاليف" },
  { icon: Leaf, title: "اكتشاف الآفات ومعالجتها", text: "رفع صور النبات وتحليل الحالة وعرض توصيات أولية أو تحويلها إلى مختص زراعي عند الحاجة" },
  { icon: Users, title: "الربط مع الأخصائيين", text: "اختيار مختص حسب نوع المشكلة وإرسال التفاصيل والصور وتحديد موعد للاستشارة أو الزيارة" },
  { icon: ShoppingCart, title: "السوق الزراعي", text: "منتجات وخدمات للري والزراعة من شركات موثوقة مع فلترة حسب النوع والمنطقة والسعر" },
  { icon: Wrench, title: "طلب الخدمات الميدانية", text: "طلب صيانة أو تركيب أو فحص أو زيارة ميدانية بخطوات واضحة وحالة متابعة بعد الإرسال" },
  { icon: Zap, title: "تنبيهات فورية", text: "إشعارات مبكرة تساعد المزارع على معالجة الأعطال قبل أن تتحول إلى خسائر في المياه أو المحصول" }
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="kicker">منصة زراعية ذكية مرتبطة بجهاز ميداني</span>
            <h1>لكل قطرة ماء مسار</h1>
            <p className="lead">منصة ذكية تساعد المزارع على إدارة الري واكتشاف المشاكل وحماية المحاصيل والوصول للحلول المناسبة من مكان واحد</p>
            <div className="actions">
              <Link className="btn btnPrimary" href="/market">تصفح السوق</Link>
              <Link className="btn btnGhost" href="/services/install">اطلب تركيب الجهاز</Link>
            </div>
            <div className="heroStats">
              <div className="statCard"><strong>25,000+</strong><span>عملية تحليل بيانات</span></div>
              <div className="statCard"><strong>650+</strong><span>مزرعة مستفيدة</span></div>
              <div className="statCard"><strong>6,320+</strong><span>عميل نشط</span></div>
              <div className="statCard"><strong>65+</strong><span>شريك محلي وعالمي</span></div>
            </div>
          </div>
          <div className="heroVisual">
            <div className="screen"><img src="/illustrations/hero-farm.svg" alt="مزرعة ذكية متصلة بمنصة مسار" /></div>
            <div className="floatingPanel"><b>92%</b><span>دقة في رصد مؤشرات الري والتنبيه المبكر بناء على البيانات الميدانية</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="darkBand">
            <h2>فكرة المنصة </h2>
            <p>تساعد مسار المزارع على جدولة نظام الري بناء على بيانات المزرعة واحتياج النبات واكتشاف الأعطال أو الهدر وتحليل مؤشرات التربة والرطوبة واكتشاف الآفات الزراعية وربط الحالات بالمختصين وتوفير سوق زراعي متكامل يربط المزارعين بالموردين والشركات المتخصصة</p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="sectionHead">
            <div><span className="kicker">خدماتنا</span><h2>كل ما يحتاجه المزارع في منظومة واحدة</h2></div>
            <p>صممنا التجربة لتكون واضحة للمستخدم غير التقني وتقدم قرارات عملية قابلة للتنفيذ داخل المزرعة</p>
          </div>
          <div className="grid4">
            {services.map(({ icon: Icon, title, text }) => <div className="card" key={title}><span className="icon"><Icon /></span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div><span className="kicker">السوق الزراعي</span><h2>منتجات موثوقة جاهزة للطلب</h2></div>
            <Link className="btn btnGhost" href="/market">عرض كل المنتجات</Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div><span className="kicker">الأخصائيون</span><h2>خبراء زراعيون حسب نوع المشكلة</h2></div>
            <Link className="btn btnPrimary" href="/consultations">طلب استشارة</Link>
          </div>
          <div className="grid4">
            {specialists.map((s) => <div className="card" key={s.name}><span className="tag">⭐ {s.rating}</span><h3>{s.name}</h3><p>{s.field}</p><br /><div className="meta"><span>{s.experience}</span><span>{s.mode}</span><span>{s.price}</span></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container dashboardGrid">
          <div className="darkBand"><h2>شركاؤنا</h2><p>تعمل مسار مع أكثر من 65 شركة محلية وعالمية في مجالات الزراعة والري والتقنيات الزراعية مما يعزز ثقة المزارعين في جودة الحلول والمنتجات المتاحة داخل المنصة</p><br /><Link className="btn btnPrimary" href="/dashboard">شاهد الأثر</Link></div>
          <div className="grid3" style={{ gridTemplateColumns: "1fr" }}>
            <div className="statCard"><strong>42</strong><span>منتجات وخدمات عبر المنصة</span></div>
            <div className="statCard"><strong>34%</strong><span>متوسط خفض الهدر في عينات الري المتابعة</span></div>
            <div className="statCard"><strong>89</strong><span>طلب استشارة وخدمة ميدانية</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}
