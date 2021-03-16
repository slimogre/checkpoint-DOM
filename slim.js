let pluss = document.getElementsByClassName('qt-plus');
for (let plus of pluss) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    total();
    ttotal();
});
 
}
let minuss = document.getElementsByClassName('qt-minus');
for (let minus of minuss) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }
    total();
    ttotal();
  });
}
function total() {
    let qant = document.getElementsByClassName('qt');
    let pone = document.getElementsByClassName('fpp');
    let som = document.querySelectorAll(".fp") ;
    for (let i = 0; i < pone.length; i++) {
      som[i].innerHTML = Number(pone[i].innerHTML * qant[i].innerHTML);
    }
    // document.getElementById('fp').innerText = som;
  }
  function ttotal() {
    let ptt = document.getElementsByClassName('fp');
    let somm = 0;
    for (let i = 0; i < ptt.length; i++) {
      somm += Number(ptt[i].innerHTML);
    }
    document.getElementById('prixt').innerText = somm;
  }

  let delB = document.querySelectorAll('.remove');
for (let i = 0; i < delB.length; i++) {
  delB[i].addEventListener('click', function () {
    delB[i].parentElement.parentElement.remove();
    ttotal();
  });
}
let likeB = document.querySelectorAll('.har');
for (let i = 0; i < likeB.length; i++) {
  likeB[i].addEventListener('click', function () {
    if (likeB[i].src == "file:///C:/Users/DELL/Desktop/chdom/likeb.png") {
        likeB[i].src = "file:///C:/Users/DELL/Desktop/chdom/liker.png";
    } else {
        likeB[i].src = "file:///C:/Users/DELL/Desktop/chdom/likeb.png";
    }
  });
}