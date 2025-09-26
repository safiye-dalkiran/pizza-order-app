import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Button } from "reactstrap"
export default function MainCard() {
    return (
        <div className="mainCard bg-amber-100 py-10 w-full">
            <div className="flex flex-col md:flex-row px-4 w-5/6 md:w-1/2 justify-center gap-1 mx-auto">
                <div className="flex-1 ">
                    <Card className="relative">
                        <CardImg
                            alt="Hero Background"
                            src="../../images/iteration-2-images/cta/kart-1.png"
                            className=" w-full object-cover"
                        />
                        <CardImgOverlay className="flex flex-col items-start px-4 py-4">
                            <CardTitle className="font-quattrocento text-5xl md:text-7xl font-bold text-white mb-2">
                                Özel
                            </CardTitle>
                            <CardTitle className="font-quattrocento text-5xl md:text-7xl font-bold text-white mb-2">
                                Lezzetus
                            </CardTitle>
                            <CardText className="text-xl text-white mb-4">
                                Position: Absolute Acı Burger
                            </CardText>
                            <button className="bg-white text-xs text-red-600 px-2 py-1 rounded-4">
                                Sipariş Ver
                            </button>
                        </CardImgOverlay>
                    </Card>
                </div>


                <div className="flex-1 flex flex-col gap-3 ">
                    <Card className="relative min-h-[180px] md:min-h-auto">
                        <CardImg
                            alt="Hero Background"
                            src="../../images/iteration-2-images/cta/kart-2.png"
                            className=" w-full h-full object-cover"
                        />
                        <CardImgOverlay className="flex flex-col items-start px-4 py-4">
                            <CardTitle className="font-barlow text-2xl md:text-3xl font-bold text-white mb-1">
                                Hackathlon
                            </CardTitle>
                            <CardTitle className="font-barlow text-2xl md:text-3xl font-bold text-white mb-4">
                                Burger Menu
                            </CardTitle>

                            <button className="bg-white text-xs text-red-600 px-2 py-1 rounded-4">
                                Sipariş Ver
                            </button>
                        </CardImgOverlay>
                    </Card>

                    <Card className="relative min-h-[180px] md:min-h-auto">
                        <CardImg
                            alt="Hero Background"
                            src="../../images/iteration-2-images/cta/kart-3.png"
                            className="w-full h-full object-cover"
                        />
                        <CardImgOverlay className="flex flex-col items-start px-4 py-4">
                            <CardTitle className="font-barlow text-2xl md:text-3xl font-bold mb-1">
                                <span className="text-red-600">Çoooook </span> hızlı
                            </CardTitle>
                            <CardTitle className="font-barlow text-2xl md:text-3xl font-bold mb-4">
                                hızlı npm gibi kurye
                            </CardTitle>
                            <button className="bg-white text-xs text-red-600  px-2 py-1 rounded-5">
                                Sipariş Ver
                            </button>
                        </CardImgOverlay>
                    </Card>
                </div>
            </div>
        </div>
    )
}