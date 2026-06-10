import Link from "next/link"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"
import { products } from "@/lib/data"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()
  return (
    <main>
      <section className="pageHero"><div className="container"><div className="breadcrumbs">مسار / المتجر / {product.name}</div><h1>{product.name}</h1><p className="lead">{product.summary}</p></div></section>
      <section className="section"><div className="container twoCol">
        <div className="productCard"><div className="productImage" style={{ height: 430 }}><img src={product.image} alt={product.name} /></div></div>
        <div className="form">
          <span className="tag">{product.tag}</span><h2>{product.price.toLocaleString("ar-SA")} ريال</h2>
          <div className="meta"><span>{product.category}</span><span>{product.company}</span><span>{product.region}</span><span>⭐ {product.rating}</span><span>صورة مفتوحة المصدر</span></div>
          <br /><h3>مزايا المنتج</h3>
          <div className="timeline">{product.details.map((item, index) => <div className="step" key={item}><span className="stepNum">{index + 1}</span><p>{item}</p></div>)}</div>
          <br /><div className="actions"><AddToCartButton product={product} label="أضف المنتج للسلة" /><Link className="btn btnGhost" href="/services/install">طلب تركيب مع المنتج</Link></div>
        </div>
      </div></section>
    </main>
  )
}
