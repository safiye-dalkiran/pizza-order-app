
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap"
import image from '/images/iteration-1-images/home-banner.png'
import NavMenu from "./NavMenu"
import { useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
export default function Header() {
    const navigate = useNavigate()
    const goToPizzaOrder = () => {
        navigate("/order")
    }
    return (
        <div>
            <div>
                <Logo />
                <Card className="border-0 shadow-none">
                    <CardImg
                        alt="Card image cap"
                        src={image}
                        className="h-screen w-full object-cover"
                    />
                    <CardImgOverlay className="flex flex-col items-center relative px-5">
                        <CardText className="yellow-text font-satisfy text-4xl hidden sm:block">
                            fırsatı kaçırma
                        </CardText>
                        <CardText className="font-barlow text-8xl text-white text-center">
                            KOD ACIKTIRIR
                        </CardText>
                        <CardText className="font-barlow text-8xl  text-white text-center">
                            PIZZA, DOYURUR
                        </CardText>
                        <button onClick={goToPizzaOrder} style={{ borderRadius: "2rem" }} className="yellow-bg px-18 py-3 font-medium text-black" >
                            ACIKTIM
                        </button>

                    </CardImgOverlay>
                </Card>
            </div>
            <NavMenu />
        </div>



    )
}