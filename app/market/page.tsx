import ProductGrid from "@/components/ProductGrid"

export default function MarketPage() {
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / السوق الزراعي</div><h1>سوق زراعي منظم ومباشر</h1><p className="lead">منتجات الري والاستشعار والحماية والصيانة من موردين موثوقين مع تجربة طلب واضحة وسلة ودفع</p></div></section>
      <section className="section"><div className="container"><ProductGrid /></div></section>
    </main>
  )
}
