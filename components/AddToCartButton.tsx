"use client"

import { Product } from "@/lib/data"
import { useState } from "react"

export default function AddToCartButton({ product, label = "أضف للسلة" }: { product: Product; label?: string }) {
  const [done, setDone] = useState(false)
  const add = () => {
    const cart = JSON.parse(localStorage.getItem("masar-cart") || "[]")
    const index = cart.findIndex((item: { slug: string }) => item.slug === product.slug)
    if (index >= 0) cart[index].qty += 1
    else cart.push({ slug: product.slug, name: product.name, price: product.price, image: product.image, company: product.company, qty: 1 })
    localStorage.setItem("masar-cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("masar-cart-updated"))
    setDone(true)
    setTimeout(() => setDone(false), 1600)
  }
  return <button className="miniBtn" onClick={add}>{done ? "تمت الإضافة" : label}</button>
}
