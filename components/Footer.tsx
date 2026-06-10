import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <h3>مسار</h3>
            <p>منصة زراعية ذكية تجمع إدارة الري وتحليل البيانات والسوق الزراعي والاستشارات في تجربة واحدة تخدم المزارع بوضوح وسرعة</p>
          </div>
          <div>
            <h3>روابط سريعة</h3>
            <p><Link href="/market">المتجر</Link></p>
            <p><Link href="/consultations">الاستشارات</Link></p>
            <p><Link href="/services/install">طلب تركيب الأجهزة</Link></p>
          </div>
          <div>
            <h3>تواصل</h3>
            <p>support@masar-ai.sa</p>
            <p>9200 000 68</p>
            <div className="social"><a>X</a><a>in</a><a>ig</a></div>
          </div>
        </div>
        <div className="copy">جميع الحقوق محفوظة © مسار</div>
      </div>
    </footer>
  )
}
