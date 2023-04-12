class ProductManager {
    constructor() {
        this.products = [];
        this.newId = 0;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('All parameters are required');
        } else{
            const duplicateCode = this.products.find((product) => product.code === code);
            if (duplicateCode) {
                console.log(`Code ${code} already exists`);
            } else{
                const product ={
                    id: this.generateId(),
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                }
                this.products.push(product)
            }
        }
    }
    generateId() {
        return ++this.newId;
    }
    getProducts(){
        return this.products;
    }
    findProductById(searchedId){
        let find = this.products.find((prodIterated) => prodIterated.id === searchedId);
        if (find){
            console.log(find)
        } else{
            console.log("Not found")
        }
    }
}

const getProducts = new ProductManager();
console.log(getProducts.products);

getProducts.addProduct("Gorra", "Polo RL", 5000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451446/cenicero/54_vpuz2h.png", "2812023GPRLBE", 3);
getProducts.addProduct("Chomba", "Nike Golf", 7000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451438/cenicero/94_ea9ghh.png", "02012022CNGBE", 5);
getProducts.addProduct("Chomba", "Chaps RL", 7000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451430/cenicero/131_extbeh.png", "04122022CCRLBE", 6);
getProducts.addProduct("Gorra", "Polo Rl", 5000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451448/cenicero/51_fmrbf9.png", "10012022GPRLBE", 3);
getProducts.addProduct("Campera", "Chaps RL", 12000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451447/cenicero/86_rubhzi.png", "15052022CCRLBE", 2);
getProducts.addProduct("Campera", "Chaps RL", 12000, "https://res.cloudinary.com/dsdicaf5h/image/upload/v1678451447/cenicero/86_rubhzi.png", "15052022CCRLBE", 2);

console.log(getProducts.products); 

getProducts.findProductById(6);