import { MessageCircle } from "lucide-react";

export default function Page() {
  return (<div className="flex justify-center px-4 py-10">
  <div className="w-full max-w-3xl">
    <div className="grid place-items-center bg-brand-emerald text-brand-khaki font-semibold">
              Estamos trabajando en esta seccion para brindarte el mejor servicio
            </div>
    <div className="grid place-items-center bg-brand-emerald text-brand-khaki font-semibold">
              Si buscas ayuda puedes comunicarte al consultorio: 656 827 2062
            </div>

<a
  href="https://wa.me/5216568272062?text=Hola%20necesito%20ayuda%20psicológica"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-white font-medium shadow-md hover:opacity-90 transition"
>
  <MessageCircle className="h-5 w-5" />
  Contactar por WhatsApp
</a>


  </div>
</div>
)
}