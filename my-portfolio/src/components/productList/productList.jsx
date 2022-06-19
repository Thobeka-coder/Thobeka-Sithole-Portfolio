import "./productList.css"
import Product from "../product/product"
import { products } from "../../data"

const productList = () => {
    return (
        <div className="pl">
            <div className="pl-words">
                <h1 className="pl-title"> Inspiring Innovator</h1>
                <p className="pl-description">
                    Before I decided to feed my tech / coding passion;
                    I have worked as an Optician in both private and
                    public sectors for 6 years. Furthermore,
                    I have also devised new ways to perform tasks during my years of experience.

                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default productList
