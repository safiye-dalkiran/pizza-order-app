import React from "react";

const NavMain = () => {
    const categories = [
        { id: 1, text: "Ramen", img: "1.svg", textSize: "text-sm" },
        { id: 2, text: "Pizza", img: "2.svg", textSize: "text-sm" },
        { id: 3, text: "Burger", img: "3.svg", textSize: "text-sm" },
        { id: 4, text: "French fries", img: "4.svg", textSize: "text-sm" },
        { id: 5, text: "Fast Food", img: "5.svg", textSize: "text-sm" },
        { id: 6, text: "Soft drinks", img: "6.svg", textSize: "text-sm" },
    ];

    return (
        <div className="bej-bg py-2">
            <div className="grid grid-cols-2 gap-3 md:gap-2 px-4 justify-items-center md:flex md:flex-row md:justify-center">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="border-0 shadow-none bg-white rounded-4xl flex items-center justify-start md:justify-center px-2 py-1 w-1/2 md:w-1/13 hover:dark-gary-bg "
                    >
                        <a
                            href="#"
                            className="flex items-center gap-2 text-black py-2 px-2 text-decoration-none hover:dark-gary-bg"
                        >
                            <img
                                src={`../../images/iteration-2-images/icons/${cat.img}`}
                                alt={cat.text}
                                className="w-8 h-8"
                            />
                            <span className={`${cat.textSize} font-medium`}>
                                {cat.text}
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavMain;
