import { useState } from "react";
import axios from "axios";
import {

    Form,
    FormGroup,
    Label,
} from "reactstrap";
import Success from "./Success";
import Footer from "../components/footer";
import { toast } from "react-toastify";
import Logo from "../components/Logo";

export default function PizzaOrder() {
    const [formData, setFormData] = useState({
        isim: "",
        boyut: "",
        hamur: "",
        malzemeler: [],
        not: "",
        adet: 1,
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const allToppings = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Sucuk",
        "Kabak",
        "Mantar",
        "Mısır",
        "Soğan",
        "Biber",
        "Tavuk Izgara",
        "Domates",
        "Jalepano",
        "Sarımsak",
        "Ananas"

    ];


    // Pizza sabit fiyatı
    const PIZZA_PRICE = 85.50;

    // Adet artır
    const increaseAdet = () => {
        setFormData((prev) => ({ ...prev, adet: prev.adet + 1 }));
    };

    // Adet azalt
    const decreaseAdet = () => {
        setFormData((prev) => ({
            ...prev,
            adet: prev.adet > 1 ? prev.adet - 1 : 1
        }));
    };
    // Malzeme fiyatları
    const TOPPING_PRICES = {
        "Sosis": 5,
        "Pepperoni": 5,
        "Kanada Jambonu": 5,
        "Sucuk": 5,
        "Kabak": 5,
        "Mantar": 5,
        "Mısır": 5,
        "Soğan": 5,
        "Biber": 5,
        "Tavuk Izgara": 5,
        "Domates": 5,
        "Jalepano": 5,
        "Sarımsak": 5,
        "Ananas": 5


    };

    // Malzeme toplam fiyatı
    const toppingsTotal = formData.malzemeler.reduce(
        (sum, topping) => sum + (TOPPING_PRICES[topping] || 0),
        0
    );

    // Toplam fiyat = pizza fiyatı * adet + malzeme toplamı
    const totalPrice = (PIZZA_PRICE * formData.adet + toppingsTotal).toFixed(2);



    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData({
            ...formData, [name]: value,
        })
    }
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        let newToppings = [...formData.malzemeler];
        if (checked) {
            newToppings.push(value);

        } else {
            newToppings = newToppings.filter((item) => item !== value)
        }
        setFormData({
            ...formData, malzemeler: newToppings,
        })
    }
    const validate = () => {
        let newErrors = {};
        if (formData.isim.trim().length < 3) {
            newErrors.isim = "İsim en az 3 karakter olmalı";
        }
        if (!formData.boyut) {
            newErrors.boyut = "Boyut seçilmelidir";
        }
        if (!formData.hamur) {
            newErrors.hamur = "Hamur seçilmelidir";
        }
        if (formData.malzemeler.length < 4 || formData.malzemeler.length > 10) {
            newErrors.malzemeler = "En az 4, en fazla 10 malzeme seçmelisiniz";

        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            toast.error("Formda hatalar var, lütfen düzeltin!");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await axios.post("https://reqres.in/api/pizza", formData, {
                headers: {
                    "x-api-key": "reqres-free-v1",
                    "Content-Type": "application/json"
                }
            });
            console.log("Sipariş Özeti:", response.data);
            setResponseData(response.data);

            toast.success("Siparişiniz başarıyla alındı! 🎉");

            setTimeout(() => {
                setOrderSuccess(true);
            }, 2000);

        } catch (err) {
            console.error("Sipariş gönderilirken hata:", err);
            toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };
    if (orderSuccess && responseData) {
        return <Success formData={formData} responseData={responseData} toppingsTotal={toppingsTotal}
            totalPrice={totalPrice} />;
    }

    return (
        <div className="flex flex-col font-barlow">
            <Logo />
            <section className="font-barlow md:!bej-bg">
                <div className="flex flex-col items-center md:!bej-bg">
                    <img
                        src="../../images/iteration-2-images/pictures/form-banner.png"
                        alt="" className="md:block hidden"
                    />
                    <div className="md:mt-10 md:w-1/3 ">
                        <div className="p-0 md:!bej-bg ">
                            <div className="flex items-center py-2 px-5 md:!px-0 bg-[#CE2829] md:!bg-white">
                                <p className="text-white md:!text-gray-600">
                                    Anasayfa -
                                </p>
                                <p className="text-xl md:text-sm text-white md:!text-[#CE2829]">Sipariş Oluştur</p>
                            </div>
                            <div className="px-5 md:!px-0 pt-4 md:!pt-0">
                                <p className="text-3xl md:text-2xl font-bold ">Position Absolute Acı Pizza</p>
                                <div className="py-4 flex justify-between items-center">
                                    <span className="text-2xl font-bold">85.50TL</span>
                                    <div className="text-gray-700 text-l">
                                        <span>4.9</span>
                                        <span className="ml-12">(200)</span>
                                    </div>
                                </div>
                                <p className="py-7 text-gray-700 text-xl md:lgtext-justify">
                                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizetta denir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="font-barlow flex justify-center my-12 ">
                <Form className=" flex flex-col gap-8 w-4/5  md:w-1/3 " onSubmit={handleSubmit}>

                    <div className="flex items-center gap-9">
                        <FormGroup tag="fieldset" className="flex-1">
                            <p className=" text-xl font-bold ">Boyut Seç <span className="text-red-500">*</span></p>
                            <div className="flex gap-6">
                                {["S", "M", "L"].map((size) => (
                                    <label
                                        key={size}
                                        className="flex items-center cursor-pointer select-none p-2 rounded-lg "
                                    >
                                        <input
                                            type="radio"
                                            name="boyut"
                                            value={size}
                                            className="absolute opacity-0 peer cursor-pointer"
                                            checked={formData.boyut === size}
                                            onChange={handleChange}
                                        />
                                        <span className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center peer-checked:bg-yellow-100">
                                            <span className="text-lg font-bold">{size}</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                            {errors.boyut && <p className="text-red-500 text-sm">{errors.boyut}</p>}
                        </FormGroup>

                        <FormGroup className="flex-1 flex flex-col">
                            <p htmlFor="dough" className="text-xl font-bold mb-4">
                                Hamur Seç<span className="text-red-500"> *</span>
                            </p>
                            <div className="relative">
                                <select
                                    id="dough"
                                    name="hamur"
                                    className="w-full bg-amber-50 border-0 shadow-none rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
                                    value={formData.hamur}
                                    onChange={handleChange}
                                >
                                    <option value="">- Seçiniz -</option>
                                    <option value="ince">İnce</option>
                                    <option value="orta">Orta</option>
                                    <option value="kalın">Kalın</option>

                                </select>
                            </div>
                            {errors.hamur && <p className="text-red-500 text-sm">{errors.hamur}</p>}

                        </FormGroup>
                    </div>
                    <FormGroup tag="fieldset">
                        <p className="text-xl font-bold mb-4">Ek Malzemeler</p>
                        <p className="text-gray-600 mb-2">
                            En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {allToppings.map((item, index) => (
                                <label
                                    key={index}
                                    htmlFor={`checkbox-${index}`}
                                    className="flex items-center gap-1 cursor-pointer text-lg select-none"
                                >
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={formData.malzemeler.includes(item)}
                                        onChange={handleCheckboxChange}
                                        id={`checkbox-${index}`}
                                        name="ingredients"
                                        className="w-7 h-7 p-1 border-0 shadow-none cursor-pointer accent-yellow-400 relative "
                                    />
                                    <span className="px-2">{item}</span>
                                </label>
                            ))}
                        </div>
                        {errors.malzemeler && (
                            <p className="text-red-500 text-sm">{errors.malzemeler}</p>
                        )}
                        <div className="flex flex-col gap-2 mt-5">

                            <FormGroup className="mb-4 relative z-10 ">
                                <Label for="isim" className="text-xl font-bold mb-2 ">İsim</Label>
                                <input
                                    id="isim"
                                    name="isim"
                                    type="text"
                                    placeholder="En az 3 karakter"
                                    value={formData.isim}
                                    onChange={handleChange}
                                    className="bej-bg rounded px-3 py-3 w-full border-0 shadow-none focus:outline-none"
                                    maxLength={50}
                                    aria-required="true"
                                    aria-label="İsim"
                                />
                                {errors.isim && <p className="text-red-500 text-sm mt-1">{errors.isim}</p>}
                            </FormGroup>

                            <FormGroup className="relative z-10">
                                <Label className="text-xl font-bold mb-2">Sipariş Notu</Label>
                                <input
                                    type="text"
                                    id="note"
                                    name="not"
                                    value={formData.not}
                                    onChange={handleChange}
                                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                                    className="order border-0 rounded px-3 py-3 w-full focus:outline-none"
                                />
                            </FormGroup>


                        </div>
                    </FormGroup>

                    <hr />


                    <FormGroup className="flex flex-col gap-4  ">
                        <div className=" border rounded bej-bg  ">
                            <div className=" flex flex-col p-5 gap-2 z-10 ">
                                <p className="text-xl font-bold">Sipariş Toplamı</p>
                                <div className="dark-gray-text font-semibold text-lg flex justify-between">
                                    <span>Seçimler</span>
                                    <span> {toppingsTotal}₺</span>
                                </div>
                                <div className="text-red-600 text-lg flex justify-between">
                                    <span className="font-semibold">Toplam</span>
                                    <span className="font-semibold">{totalPrice}₺</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row items-center justify-between gap-4">
                            <div className="flex items-center">
                                <button type="button" className="w-14 h-14 yellow-bg rounded font-bold flex items-center justify-center " onClick={decreaseAdet}>
                                    -
                                </button>
                                <span className="w-14 h-13 border font-bold flex items-center justify-center">
                                    {formData.adet}
                                </span>
                                <button type="button" className="w-15 h-14 yellow-bg rounded font-bold flex items-center justify-center " onClick={increaseAdet}>
                                    +
                                </button>
                            </div>
                            <div className="w-full md:w-1/2 ">
                                <button className="w-full bg-yellow-400 py-3 rounded font-bold text"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
                                </button>
                            </div>
                        </div>

                    </FormGroup>
                </Form>
            </main>

            <Footer />
        </div>
    );
}
