//querySelector class ismine gore arama yapar.
// CONST Değer olarak sabit olarak tanımlanan ve kod blog boyunca değişmeyen ve değiştirilemeyen değişkenler
//et ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilir.
//target=olayi tetikleyen oge
//target.claslist=css sinifini o clasa ekleme ve silme islemi ocon kullanilir
//target.claslist.contains()=bir sinifin var olup olmadigini kontrol eder
//target.claslist.toggle()=yeni class ismini eklemek icin
const container=document.querySelector('.container');
const count= document.getElementById('count');//secili koltuklarin sayisi
const amount= document.getElementById('amount');//secili koltuklarin ucreti
const select= document.getElementById('movie');//secili film
const seats=document.querySelectorAll('.seat:not(.reserved)');//rezerve edilmemis koltuklar

//getFromLocalStorage();
calculateTotal();


container.addEventListener('click',function(e){
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');//bu metod eleman icerisinde selected clasi var ise siler yok ise ekler 
        calculateTotal();
    }
})
select.addEventListener('change',function(e){
    calculateTotal();
});
function calculateTotal(){
    const selecteSeats=container.querySelectorAll('.seat.selected');
    const selectedSeatsArr=[];
    const seatsArr=[];
    selecteSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndex=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });
    let selectedSeatCount=container.querySelectorAll('.seat.selected').length;
    count.innerText=selectedSeatCount;
    amount.innerText=selectedSeatCount*select.value;

    saveToLocalStroage(selectedSeatIndex);
}

function saveToLocalStroage(indexs){
    localStorage.setItem('selecteSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedSeatIndex);
}

function getFromLocalStorage(){
    const selectedSeats=JSON.parse(localStorage.getItem('selecteSeats'));
    if(selectedSeats!=null && selectedSeats.length>0){
        seats.forEach(function(s , index){
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        })
    }





    const selectedMovieIndex=JSON.parse(localStorage.getItem('selectedMovieIndex'));

    if (selectedMovieIndex != null){
        select.selectedIndex=selectedMovieIndexs

    }
}