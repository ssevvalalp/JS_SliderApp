var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-azad-motors-2017-170-bin-km-de-418d-gran-coupe-elk-bgj-plusnbt-1146510095/detay'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-honda-otomatik-sanruflu-full-kazasiz-hic-lpg-takilmamis-bakimli-1183880302/detay'
    },
    
    {
        name: 'Mazda 1.6',
        image: 'img/mazda.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-mazda-arslan-oto-1183152729/detay'
    },
    
    {
        name: 'Skoda Scala',
        image: 'img/skoda.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-skoda-2021-model-skoda-scala-1.0-tsi-comfort-dsg-59-bn-km-de-boyasiz-1183819096/detay'
    },
    
    {
        name: 'Volvo 2.0 D',
        image: 'img/volvo.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-volvo-volvo-s60-2.0-d4-dizel-otomatik-sunroof-hayalet-y.servis-bakimli-1135085527/detay'
    }  
    
];
var index = 0;
var slideCount = models.length;

// showSlide(index);
// document.querySelector('.fa-arrow-left').addEventListener('click', function() {
//     index--;
//     if (index < 0) {
//         index = slideCount - 1;
//     }
//     showSlide(index);
//     console.log(index);
// });

// document.querySelector('.fa-arrow-right').addEventListener('click', function() {
//     index++;
//     if (index >= slideCount) {
//         index = 0;
//     }
//     showSlide(index);
//     console.log(index);
// });


// function showSlide(index){
    
// document.querySelector('.card-title').textContent = models[index].name;
// document.querySelector('.card-imp-top').setAttribute('src', models[index].image);
// document.querySelector('.card-link').setAttribute('href', models[index].link);

//OR

showSlide(index);
document.querySelector('.fa-arrow-left').addEventListener('click', function() {
    index--;
   
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function() {
    index++;
   
    showSlide(index);
    console.log(index);
});


function showSlide(i){  // i dışarıdan gönderilen değer

    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }
    
document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-imp-top').setAttribute('src', models[index].image);
document.querySelector('.card-link').setAttribute('href', models[index].link);

}


