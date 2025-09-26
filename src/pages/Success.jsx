// Success.jsx
import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import Footer from "../components/footer";
import Logo from "../components/Logo";

export default function Success({
   formData = null,
   responseData = null,
   toppingsTotal, totalPrice
}) {
   const data = responseData || formData || {};
   const isim = data.isim || "Müşteri";
   const boyut = data.boyut || "—";
   const hamur = data.hamur || "—";
   const malzemeler = Array.isArray(data.malzemeler) ? data.malzemeler : [];
   const adet = data.adet ?? 1;

   return (
      <div className="flex flex-col items-center  ">
         <div className="w-full red-bg h-screen">
            <Logo />

            <Card className="w-full border-0 shadow-none red-bg mb-28">
               <CardBody className="red-bg items-center flex flex-col gap-6 text-white">
                  <div className="md:hidden mt-30">
                     <p className="text-7xl font-barlow text-center  ">
                        TEBRİKLER!
                     </p>
                     <p className="text-7xl font-barlow text-center  "> SİPARİŞİNİZ</p>
                     <p className="text-7xl font-barlow text-center  "> ALINDI!!</p>
                  </div>

                  <div className="hidden md:block">
                     <div className="text-center gap-1">
                        <p className="text-4xl yellow-text font-satisfy">lezzetin yolda</p>
                        <p className="text-6xl font-barlow">SİPARİŞİN ALINDI</p>
                     </div>
                     <hr className=" border-2 border-white " />
                     <div className="p-4 font-barlow ">
                        <p className="text-2xl font-medium mb-4">Position Absolute Acı Pizza</p>
                        <ul className="text-s space-y-2">
                           <li>İsim: <strong>{isim}</strong> </li>
                           <li>Boyut: <strong>{boyut}</strong></li>
                           <li>Hamur: <strong>{hamur}</strong> </li>
                           <li>
                              Ek Malzemeler: <strong>{" "}
                                 {malzemeler.length ? malzemeler.join(", ") : "Seçilmedi"}</strong>
                           </li>
                           <li>Adet: <strong>{adet}</strong> </li>
                           {data.not && <li>Not: <strong>{data.not}</strong> </li>}
                        </ul>
                     </div>
                  </div>


                  <div className="hidden md:flex justify-center w-1/5 p-5 gap-3 border rounded-lg font-barlow">
                     <div className="flex flex-col w-full"> <legend className="text-sm">Sipariş Toplamı</legend>
                        <div className="text-lg flex justify-between w-full">
                           <span>Seçimler</span>
                           <span className="font-semibold">{toppingsTotal}TL</span>
                        </div>
                        <div className="text-lg flex justify-between w-full">
                           <span>Toplam</span>
                           <span className="font-semibold">{totalPrice} TL</span>
                        </div></div>

                  </div>

               </CardBody>
            </Card>
         </div>
         <Footer />
      </div>
   );
}
