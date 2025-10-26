import { Row, Col } from "reactstrap";

export default function Footer() {
    return (
        <div className="font-barlow dark-gray-bg text-white w-full flex flex-col items-center">

            <div className="py-10 px-5 md:px-4 md:w-1/2 md:mx-auto">
                <Row>
                    <Col md="4" className="flex flex-col gap-3 mt-4">
                        <img
                            src="../../images/iteration-2-images/footer/logo-footer.svg"
                            alt="Logo"
                            className="w-45 md:w-32 mb-2"
                        />
                        <div className="flex items-start gap-3">
                            <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="" className="w-6 h-6" />
                            <div >
                                <p>341 Londonderry Road,</p>
                                <p>Istanbul Türkiye</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="" className="w-6 h-6" />
                            <p>aciktim@teknolojikyemekler.com</p>
                        </div>
                        <div className="flex items-center gap-3 text-xl md:text-lg">
                            <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="" className="w-6 h-6" />
                            <p>+90 216 123 45 67</p>
                        </div>
                    </Col>

                    <Col md="4" className="flex flex-col gap-3 mt-4">
                        <h2 className="text-lg mb-3">Hot Menu</h2>
                        <ul className="flex flex-col gap-2 list-none p-0 m-0">
                            <li>Terminal Pizza</li>
                            <li>5 Kişilik Hackathlon Pizza</li>
                            <li>useEffect Tavuklu Pizza</li>
                            <li>Beyaz Console Frasty</li>
                            <li>Testler Geçti Mutlu Burger</li>
                            <li>Position Absolute Acı Burger</li>
                        </ul>
                    </Col>

                    <Col md="4" className="flex flex-col gap-3 mt-4">
                        <h2 className="text-lg mb-3">Instagram</h2>
                        <div className="grid grid-cols-3 gap-1">
                            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
                            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>

            <hr className="w-full" />


            <div className=" px-4 w-1/2 flex justify-between items-center">
                <p>© 2023 Teknolojik Yemekler.</p>
                <i className="fa-brands fa-twitter text-xl"></i>
            </div>
        </div>
    );
}
