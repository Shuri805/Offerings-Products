async function offerings(){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    const data = await response.json();

    // We have the ID's of what we're looking for
    // Run another promise all for products and companies
    // filter or find straight for the ID's themselves

    const firstOffering = [data[0].productId, data[0].companyId]
    console.log(firstOffering);

    products(data[0].productId);
    companies(data[0].companyId)


}

async function products(productId){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    const data = await response.json();
    const productInfo = data.find((product)=>{
        if(product.id === productId){
            return product;
        }
    })
    console.log(productInfo);
}

async function companies(companyId){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
    const data = await response.json();
    const companyName = data.find((company)=>{
        if(company.id === companyId){
            return company;
        }
    })
    console.log(companyName)
}
offerings();
