export type Product = {
  slug: string
  name: string
  category: string
  company: string
  region: string
  price: number
  rating: number
  image: string
  source: string
  tag: string
  summary: string
  details: string[]
}

export const products: Product[] = [
  {
    slug: "drip-irrigation-emitter",
    name: "نقاط ري احترافي للمزارع الدقيقة",
    category: "أنظمة الري",
    company: "واحات الري",
    region: "عسير",
    price: 38,
    rating: 4.8,
    image: "/products/drip-kit.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "الأكثر طلباً",
    summary: "نقاط ري عملي لتوزيع المياه قرب الجذور وتقليل الهدر في البيوت المحمية والبساتين",
    details: ["تدفق ثابت ومنتظم", "مناسب للمحاصيل الحساسة", "تركيب سريع على خطوط التنقيط", "يدعم خطط الري الذكي داخل مسار"]
  },
  {
    slug: "drip-tubes-field-kit",
    name: "حزمة خطوط تنقيط للمزارع المفتوحة",
    category: "أنظمة الري",
    company: "GreenField Irrigation",
    region: "القصيم",
    price: 760,
    rating: 4.7,
    image: "/products/smart-irrigation-controller.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "توفير مياه",
    summary: "حزمة خطوط تنقيط مناسبة للمساحات الزراعية الصغيرة والمتوسطة مع توزيع واضح ومنظم للمياه",
    details: ["خطوط تنقيط ميدانية", "تغطية صفوف زراعية متعددة", "مناسبة للخضروات والمحاصيل الموسمية", "قابلة للربط مع وحدات التحكم"]
  },
  {
    slug: "vineyard-drip-system",
    name: "نظام تنقيط للأشجار والكروم",
    category: "أنظمة الري",
    company: "AquaRoots",
    region: "المدينة",
    price: 1180,
    rating: 4.9,
    image: "/products/drip-kit.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "حل بساتين",
    summary: "نظام تنقيط مخصص للأشجار يرفع كفاءة وصول المياه ويجعل المتابعة أسهل للمزارع",
    details: ["مناسب للأشجار المثمرة", "تنظيم المياه حول الجذور", "يقلل الري العشوائي", "يدعم قراءات الرطوبة والتوصيات"]
  },
  {
    slug: "center-pivot-irrigation-package",
    name: "حل ري محوري للمزارع الواسعة",
    category: "أنظمة الري",
    company: "AquaTech",
    region: "الرياض",
    price: 24500,
    rating: 4.8,
    image: "/products/field-gateway.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "مزارع واسعة",
    summary: "حل ري محوري للمساحات الكبيرة مع متابعة تشغيلية عبر لوحة مسار وتنبيهات عند انخفاض الأداء",
    details: ["مناسب للمساحات الواسعة", "توزيع مياه منتظم", "قابل للربط مع تقارير الأداء", "متابعة التشغيل من لوحة البيانات"]
  },
  {
    slug: "sprinkler-field-head",
    name: "مرش ميداني عالي التغطية",
    category: "قطع الغيار",
    company: "نخيل الزراعية",
    region: "جدة",
    price: 290,
    rating: 4.6,
    image: "/products/flow-meter.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "تغطية عالية",
    summary: "مرش مناسب للمساحات المفتوحة ويساعد على توزيع المياه بشكل واضح عند الحاجة للري بالرش",
    details: ["تغطية ميدانية واسعة", "مناسب للمحاصيل المكشوفة", "تحمل جيد للاستخدام المتكرر", "يرتبط بخطط الصيانة داخل مسار"]
  },
  {
    slug: "irrigation-flow-pump",
    name: "مضخة ري ميدانية عالية الكفاءة",
    category: "قطع الغيار",
    company: "مضخات الجزيرة",
    region: "الدمام",
    price: 2350,
    rating: 4.8,
    image: "/products/pump.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "أداء عالي",
    summary: "مضخة ري عملية لتحسين كفاءة الضخ وتقليل التوقفات في خطوط الري الرئيسية",
    details: ["مناسبة للاستخدام الميداني", "تدعم شبكات الري الرئيسية", "متابعة أعطال عبر طلبات الصيانة", "ضمان ودعم من المورد"]
  },
  {
    slug: "irrigation-pump-station",
    name: "محطة ضخ وتجميع مياه للري",
    category: "قطع الغيار",
    company: "Smart Farm Network",
    region: "تبوك",
    price: 12800,
    rating: 4.9,
    image: "/products/valve.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "تشغيل مستقر",
    summary: "محطة ضخ وتجميع تساعد المزارع على إدارة مصدر المياه وربطه ببيانات التشغيل والصيانة",
    details: ["مناسبة للمزارع المتوسطة", "تجميع وضخ منظم", "قابلة للمراقبة عبر لوحة مسار", "تدعم جدولة الزيارات الفنية"]
  },
  {
    slug: "fertilizer-bulk-bag",
    name: "مغذيات زراعية حبيبية بكميات تجارية",
    category: "الأسمدة والمغذيات",
    company: "AgriPlus",
    region: "حائل",
    price: 185,
    rating: 4.5,
    image: "/products/fertilizer.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "لزيادة الإنتاج",
    summary: "مغذيات زراعية مناسبة للطلب التجاري وتظهر داخل السوق مع توصيات الاستخدام حسب المحصول",
    details: ["مناسب للمحاصيل الموسمية", "كميات تجارية للمزارع", "يدعم توصيات المختص", "متاح مع طلب متابعة غذائية"]
  },
  {
    slug: "plant-protection-sprayer",
    name: "مرشة حماية للمحاصيل وفحص الآفات",
    category: "المبيدات والحماية",
    company: "Crop Shield",
    region: "جازان",
    price: 240,
    rating: 4.7,
    image: "/products/pest-kit.svg",
    source: "تصميم توضيحي محلي داخل المنصة",
    tag: "حماية المحصول",
    summary: "مرشة عملية ضمن منتجات الحماية ويمكن ربط استخدامها بطلب استشارة عند ظهور أعراض على النبات",
    details: ["مناسبة للاستخدام الحقلي", "تدعم إجراءات المكافحة", "ربط مباشر بطلب فحص آفة", "توصيات استخدام حسب الحالة"]
  }
]

export const specialists = [
  { name: "د أحمد الشهراني", field: "أنظمة الري وإدارة المياه", rating: "4.9", experience: "12 سنة", mode: "استشارة عن بعد وزيارة ميدانية", price: "180 ريال" },
  { name: "م نورة القحطاني", field: "أمراض النبات والآفات", rating: "4.8", experience: "9 سنوات", mode: "تحليل صور ومتابعة حالة", price: "150 ريال" },
  { name: "د ماجد الحربي", field: "التربة والمغذيات", rating: "4.9", experience: "14 سنة", mode: "تقرير توصيات زراعية", price: "220 ريال" },
  { name: "م سارة الغامدي", field: "البيوت المحمية والمحاصيل", rating: "4.7", experience: "8 سنوات", mode: "استشارة وجدولة متابعة", price: "160 ريال" }
]

export const services = [
  "فحص نظام الري",
  "تركيب جهاز مسار",
  "صيانة صمامات ومضخات",
  "استشارة زراعية",
  "فحص آفة أو مرض نباتي",
  "زيارة ميدانية كاملة"
]

export const categories = ["الكل", "أنظمة الري", "أجهزة الاستشعار", "الأسمدة والمغذيات", "المبيدات والحماية", "قطع الغيار"]
