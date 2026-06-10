import CheckoutForm from "@/components/CheckoutForm"

export default function CheckoutPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / الدفع</div><h1>صفحة الدفع</h1><p className="lead">أدخل بيانات المزرعة والتواصل لإتمام طلب المنتجات وربطها بالخدمة المناسبة</p></div></section>
      <section className="section"><div className="container"><CheckoutForm /></div></section>
    </main>
  )
}
