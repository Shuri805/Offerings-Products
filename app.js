async function offerings(){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    const data = await response.json();

    // We have the ID's of what we're looking for
    // Run another promise all for products and companies
    // filter or find straight for the ID's themselves

    const firstOffering = [data[0].productId, data[0].companyId]
    console.log(firstOffering);


}

async function products(productId){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    const data = await response.json();
    const product = data.find(productID)
}

offerings();
products();