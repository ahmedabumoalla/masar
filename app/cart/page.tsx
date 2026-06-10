import CartClient from "@/components/CartClient"

export default function CartPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / السلة</div><h1>سلة المنتجات</h1><p className="lead">راجع المنتجات والكميات ثم انتقل للدفع</p></div></section>
      <section className="section"><div className="container"><CartClient /></div></section>
    </main>
  )
}
