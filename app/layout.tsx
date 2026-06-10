import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "مسار | منصة زراعية ذكية",
  description: "منصة ذكية لإدارة الري واكتشاف المشاكل وربط المزارعين بالخبراء والسوق الزراعي"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
