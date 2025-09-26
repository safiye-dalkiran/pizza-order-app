
import Header from "../components/header"
import NavMain from "../components/NavMain"
import MainCard from "../components/MainCard"
import CategoryMenu from "../components/CategoryMenu"
import Footer from "../components/footer"
export default function Home() {
    return (
        <div>
            <Header />
            <MainCard />
            <div className="bej-bg w-full flex justify-center">
                <div className="w-4/6 md:w-1/2 flex flex-col items-center text-center">
                    <p className="red-text font-satisfy text-3xl md:text-4xl">en çok paketlenen menüler</p>
                    <p className="font-barlow text-5xl md:text-5xl px-4 font-bold tracking-wider">Acıktıran Kodlara Doyuran Lezzetler</p>
                </div>
            </div>
            <NavMain />
            <CategoryMenu />
            <Footer />
        </div>


    )
}