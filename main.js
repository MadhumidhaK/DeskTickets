// const response = await fetch(searchUrl, {method:'GET'});
// const results = await response.json();

// fetch('https://accounts.zoho.in/apiauthtoken/nb/create?SCOPE=ZohoSupport/supportapi,ZohoSearch/SearchAPI&EMAIL_ID=kmadhumidha56@gmail.com&PASSWORD=Mcomp@123')
// .then(res => res.json()).then(res => console.log(res)).catch(err => {
//         console.log(err);
//     })

// var url = ' https://desk.zoho.com/api/v1/tickets'
// var url = 'https://accounts.zoho.in/apiauthtoken/nb/create?SCOPE=ZohoSupport/supportapi/SearchAPI&EMAIL_ID=kmadhumidha56@gmail.com&PASSWORD=Mcomp@123'
//     fetch(url)
// .then(res => res.json()).then(res => console.log(res)).catch(err => {
//         console.log(err);
//     })

var url = 'https://desk.zoho.com/api/v1/tickets'
    fetch(url,
        {
            method: 'GET',
            headers: {
                orgId:60004579338,
                Authorization: "Zoho-oauthtoken 1000.140UISTDXFHI22K50U232TAPXCW29V.5d531f5810c751581ebe3ae31ca84e6303e162ad33"
            }
        }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));



        //Auth_Token: 381f4b06312c92b837b470b1881591c5    0703416ff5dad76cb78d0c512fc0f21d

        //Client ID: 1000.140UISTDXFHI22K50U232TAPXCW29V
        //client secret: 5d531f5810c751581ebe3ae31ca84e6303e162ad33