import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default function CategoryMenu() {
    const categories = [
        {
            id: 1,
            text: "Terminal Pizza",
            img: "food-1.png",
            rating: 4.9,
            reviews: 200,
            price: "60₺"
        },
        {
            id: 2,
            text: "Position Absolute Acı Pizza",
            img: "food-2.png",
            rating: 4.9,
            reviews: 200,
            price: "60₺"
        },
        {
            id: 3,
            text: "useEffect Tavuklu Burger",
            img: "food-3.png",
            rating: 4.9,
            reviews: 120,
            price: "60₺"
        },
    ];

    return (
        <div className="categoryMenu flex justify-center mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-1/2 p-4">
                {categories.map(cat => (
                    <Card key={cat.id} className="border-0 rounded-2xl py-4">
                        <CardImg
                            alt={cat.text}
                            src={`../../images/iteration-2-images/pictures/${cat.img}`}
                            top
                            className="w-full px-4 md:px-0 md:h-48 object-contain"
                        />
                        <CardBody className="flex flex-col gap-2">
                            <CardTitle tag="h5" className="font-bold text-lg">{cat.text}</CardTitle>
                            <div className="flex justify-between items-center text-sm text-gray-800">
                                <span>{cat.rating}</span>
                                <div className="flex gap-4 items-center">

                                    <span>({cat.reviews})</span>
                                    <span className="font-bold">{cat.price}</span>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div></div>

    )
}
