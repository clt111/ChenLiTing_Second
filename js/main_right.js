let y ;
let adevertisement = document.querySelector('.advertisement');
let adevertisement_offer = document.querySelector('.advertisement-offer');
let adevertisement_code = document.querySelector('.advertisement-code');
setInterval(function(){
    y = document.documentElement.scrollTop || document.body.scrollTop;
    if(y > 996 ){
        adevertisement.style.position = 'fixed';
        adevertisement.style.top = '0';
        adevertisement.style.left = '50%';
        adevertisement.style.transform = 'translate(230px,0)';
        adevertisement_offer.style.position = 'fixed';
        adevertisement.style.margin = '50px 0 0 0';
        adevertisement_offer.style.top = '250px';
        adevertisement_offer.style.left = '50%';
        adevertisement_offer.style.transform = 'translate(230px,0)';
        adevertisement_code.style.position = 'fixed';
        adevertisement_code.style.top = '350px';
        adevertisement_code.style.left = '50%';
        adevertisement_code.style.transform = 'translate(230px,0)';
    }
    if(y < 996+500){
       adevertisement.style.position = 'relative';
       adevertisement.style.top = '0';
       adevertisement.style.left = '0';
       adevertisement.style.transform = 'translate(0,0)';
       adevertisement_offer.style.position = 'relative';
       adevertisement.style.margin = '15px 0 0 0';
       adevertisement_offer.style.top = '0';
       adevertisement_offer.style.left = '0';
       adevertisement_offer.style.transform = 'translate(0,0)';
       adevertisement_code.style.position = 'relative';
       adevertisement_code.style.top = '0';
       adevertisement_code.style.left = '0';
       adevertisement_code.style.transform = 'translate(0,0)';     

    }
}, 30);