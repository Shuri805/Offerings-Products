/*
async function offerings(productId){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/offerings')
    const data = await response.json();

    // We have the ID's of what we're looking for
    // Run another promise all for products and companies
    // filter or find straight for the ID's themselves

    const firstOffering = data.filter((offering)=>{
        if(offering.productId === productId){
            return offering;
        }
    })

    console.log(firstOffering)

}

async function products(){
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/products')
    const data = await response.json();
    const productId = data[0].id
    console.log(productId)

    offerings(productId);
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
products();
*/
const body = document.querySelector('body')

const API = 'https://acme-users-api-rev.herokuapp.com/api/'

const loadData = async()=> {
    const URLS = ['products', 'companies', 'offerings'].map(function(name){
        return `${API}${name}`;
    });

    const responses = await Promise.all(URLS.map(function(url){
        return fetch(url);
    }));

    const [products, companies, offerings] = await Promise.all(responses.map(function(response){
        return response.json();
    }))
    //the same thing as const products = await response[0].json()
    //const companies = awai resonse[1].json
    let html = '';
    const processed = products.map(function(product){
        html += `<div>
            <h2>${product.name}</h2>
            </div>`
        return offerings.filter((offering)=>{

            if(offering.productId === product.id){
                html += `
                <h3>${offering.price}</h3>
            `
            return offering;
            }
        })
    });

    body.innerHTML = html
    console.log(processed)
}

loadData();