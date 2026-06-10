"use client"

import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem("masar-cart") || "[]")
      setCount(cart.reduce((sum: number, item: { qty: number }) => sum + item.qty, 0))
    }
    update()
    window.addEventListener("storage", update)
    window.addEventListener("masar-cart-updated", update)
    return () => {
      window.removeEventListener("storage", update)
      window.removeEventListener("masar-cart-updated", update)
    }
  }, [])
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="logoBox"><img src="/logo-masar.png" alt="مسار" /></span>
        </Link>
        <nav className="navLinks">
          <Link href="/">الرئيسية</Link>
          <Link href="/market">المتجر</Link>
          <Link href="/consultations">الاستشارات</Link>
          <Link href="/services/install">طلب تركيب</Link>
          <Link href="/dashboard">الأثر</Link>
        </nav>
        <div className="actions">
          <Link className="btn btnGhost" href="/consultations">احجز مختص</Link>
          <Link href="/cart" className="cartBtn" aria-label="السلة">
            <ShoppingBag size={21} />
            <span className="cartBadge">{count}</span>
          </Link>
          <button className="cartBtn mobileOnly" aria-label="القائمة"><Menu size={21} /></button>
        </div>
      </div>
    </header>
  )
}
