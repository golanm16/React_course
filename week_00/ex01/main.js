function FilterSelectElement() {
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select>
                <option value="/">All Jackets</option>
                <option value="/">2016</option>
                <option value="/">jacket</option>
                <option value="/">Jackets</option>
                <option value="/">layers</option>
                <option value="/">Obermeyer</option>
                <option value="/">Roxy</option>
                <option value="/">womens</option>
            </select>
        </div>
    )
}

function SortSelectElement() {
    return (
        <div className="collection-sort">
            <label>Sort by:</label>
            <select>
                <option value="/">Featured</option>
                <option value="/">Best Selling</option>
                <option value="/">Alphabetically, A-Z</option>
                <option value="/">Alphabetically, Z-A</option>
                <option value="/">Price, low to high</option>
                <option value="/">Price, high to low</option>
                <option value="/">Date, new to old</option>
                <option value="/">Date, old to new</option>
            </select>
        </div>
    );
}

function SortElement() {
    return (
        <div className="sort">
            <FilterSelectElement />
            <SortSelectElement />
        </div>
    );
}

function HeaderElement() {
    return (
        <nav className="product-filter">
            <h1>Jackets</h1>
            <SortElement />
        </nav>
    );
}

function ProductImgElement() {
    return (
        <div className="product-image">
            <img
                src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
            />
        </div>
    )
}

function ProductInfoElement() {
    return (
        <div className="product-info">
            <h5>Winter Jacket</h5>
            <h6>$99.99</h6>
        </div>
    )
}

function ProductCardElement() {
    return (
        <div className="product-card">
            <ProductImgElement />
            <ProductInfoElement />
        </div>
    )
}

function ProductsElement() {
    return (
        <section className="products">
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
            <ProductCardElement />
        </section>
    )
}

function WrapperElement() {
    return (
        <div>
            <HeaderElement />
            <ProductsElement />
        </div>
    )
}

ReactDOM.render(<WrapperElement />, document.getElementById('app'));
