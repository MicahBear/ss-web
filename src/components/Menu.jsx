import './Menu.css'
const Menu = () =>{
    return(
        <section id="menu" className="menu--container">
            <h3 className="menu--title">Seasonal Menu</h3>
            <p>exact offerings vary seasonally follow us on <a href="http://">instagram</a> for current and pop up offerings!</p>
            <ul className="menu--list">
                <li className="menu--list-item">
                    <span className="list--item-title">ube cinny bun</span>
                    <p>sourdough cinnamon rolls with the option of brulee'd</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">calamansi muffins</span>
                    <p>cake made with calamansi topped with a calamansi glaze</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">beignets</span>
                    <p>calamansi beignets! our OG beignets topped with our fresh squeezed calamansi drizzle</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">apple roses</span>
                    <p>apple Roses made with organic Pink Lady apples rolled in a puff pastry with cinnamon and sugar. Like a mini apple pie but lighter</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">ube-macapun suman</span>
                    <p>ube halaya and coconut sport rice cakes wrapped in banana leaves.</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">puto bumbong</span>
                    <p>cylindrical rice cakes made of a blend of white and black sweet rice, topped with butter, coconut and muscavado sugar</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">champorado suman</span>
                    <p>chocolate rice cakes made with Argao cacao wrapped in banana leaves.</p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">mango suman</span>
                    <p></p>
                    </li>
                <li className="menu--list-item">
                    <span className="list--item-title">espasol</span>
                    <p></p>
                    </li>
            </ul>
        </section>
    )
}

export default Menu