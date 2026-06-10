"use client"

import Link from "next/link"
import { products } from "@/lib/data"
import { useEffect, useMemo, useState } from "react"

type CartItem = { slug: string; name: string; price: number; image: string; company: string; qty: number }
const validSlugs = new Set(products.map((product) => product.slug))

export default function CartClient() {
  const [items, setItems] = useState<CartItem[]>([])
  const normalize = (raw: CartItem[]) => raw.filter((item) => validSlugs.has(item.slug))
  const load = () => {
    const next = normalize(JSON.parse(localStorage.getItem("masar-cart") || "[]"))
    setItems(next)
    localStorage.setItem("masar-cart", JSON.stringify(next))
  }
  useEffect(() => load(), [])
  const save = (nextItems: CartItem[]) => {
    const next = normalize(nextItems)
    setItems(next)
    localStorage.setItem("masar-cart", JSON.stringify(next))
    window.dispatchEvent(new Event("masar-cart-updated"))
  }
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.qty, 0), [items])
  if (!items.length) return <div className="card"><h3>السلة فارغة</h3><p>ابدأ من المتجر واختر المنتجات المناسبة لمزرعتك</p><br /><Link className="btn btnPrimary" href="/market">الذهاب للمتجر</Link></div>
  return (
    <div className="twoCol">
      <div className="cartTable">
        {items.map((item) => (
          <div className="cartRow" key={item.slug}>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <img src={item.image} alt={item.name} style={{ width: 82, height: 82, borderRadius: 18, objectFit: "cover" }} />
              <div><strong>{item.name}</strong><div className="meta"><span>{item.company}</span><span>{item.price.toLocaleString("ar-SA")} ريال</span></div></div>
            </div>
            <div className="qty"><button onClick={() => save(items.map((p) => p.slug === item.slug ? { ...p, qty: Math.max(1, p.qty - 1) } : p))}>-</button><strong>{item.qty}</strong><button onClick={() => save(items.map((p) => p.slug === item.slug ? { ...p, qty: p.qty + 1 } : p))}>+</button></div>
            <button className="miniBtn" onClick={() => save(items.filter((p) => p.slug !== item.slug))}>حذف</button>
          </div>
        ))}
      </div>
      <aside className="form">
        <h3>ملخص الطلب</h3>
        <p>إجمالي المنتجات</p>
        <h2>{total.toLocaleString("ar-SA")} ريال</h2>
        <p>يشمل تجهيز الطلب وربطه بحساب المزرعة بعد إتمام الدفع</p>
        <Link className="btn btnPrimary" href="/checkout" style={{ width: "100%", marginTop: 14 }}>إتمام الدفع</Link>
      </aside>
    </div>
  )
}
