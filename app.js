var elToggle = document.getElementsByClassName('price-toggle')[0];
var elPrice = document.getElementsByClassName('price');
elToggle.addEventListener('click',function(){
    var btn = elToggle.getElementsByClassName('default')[0];
    if(btn.classList.contains('monthly')){
        btn.classList.remove('monthly');
        elPrice[0].lastElementChild.innerText = '199.99';
        elPrice[1].lastElementChild.innerText = '249.99';
        elPrice[2].lastElementChild.innerText = '399.99';
    }
    else{
        btn.classList.add('monthly');
        elPrice[0].lastElementChild.innerText = '19.99';
        elPrice[1].lastElementChild.innerText = '24.99';
        elPrice[2].lastElementChild.innerText = '39.99';
    }
})