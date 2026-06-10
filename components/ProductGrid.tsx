"use client"

import Link from "next/link"
import { categories, products } from "@/lib/data"
import { useMemo, useState } from "react"
import AddToCartButton from "./AddToCartButton"

export default function ProductGrid() {
  const [category, setCategory] = useState("الكل")
  const [query, setQuery] = useState("")
  const shown = useMemo(() => products.filter((p) => {
    const okCategory = category === "الكل" || p.category === category
    const okSearch = `${p.name} ${p.company} ${p.summary}`.toLowerCase().includes(query.toLowerCase())
    return okCategory && okSearch
  }), [category, query])
  return (
    <>
      <div className="marketTools">
        <input className="search" placeholder="ابحث عن منتج أو شركة أو خدمة" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="filters">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`filter ${category === item ? "active" : ""}`}>{item}</button>)}
        </div>
      </div>
      <div className="productGrid">
        {shown.map((product) => (
          <article className="productCard" key={product.slug}>
            <Link className="productImage" href={`/market/${product.slug}`}><img src={product.image} alt={product.name} /></Link>
            <div className="productBody">
              <span className="tag">{product.tag}</span>
              <h3><Link href={`/market/${product.slug}`}>{product.name}</Link></h3>
              <p>{product.summary}</p>
              <div className="meta"><span>{product.category}</span><span>{product.company}</span><span>⭐ {product.rating}</span></div>
              <div className="priceRow"><strong className="price">{product.price.toLocaleString("ar-SA")} ريال</strong><AddToCartButton product={product} /></div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
