var step = 0;
var next = false;
var code = Math.floor(Math.random() * 10000); // Генерируем число от 0 до 99

function changeText() {
    if (step === 0){
        if(document.getElementById("inputBlock").value != ""){
            document.getElementById("forgotButton").innerHTML = "Подтвердить";
            document.getElementById("inputBlock").placeholder = "Код подтверждения";
            alert("Ваш код подтверждения: " + code + "\nНикому не сообщайте этот код!"); // Выводим сообщение с числом
            document.getElementById("inputBlock").value = "";
            step++;
            next = false
        }
        else{
            if(next === true){
                alert("Данные некорректны")
            }
            next = true;
        }
    }
   if (step === 1){
        if(document.getElementById("inputBlock").value == code){
            step++; 
            next = false;  
        }
        else{
            if(next === true){
                alert("Ваш код подтверждения не верен"); 
            }
            next = true;
        }
   }
   if (step === 2){
        document.getElementById("inputBlock").value = "";
        document.getElementById("inputBlock").placeholder = "Новый пароль";
        document.getElementById("inputBlock").type = "password";
        step++;  
   }
   if(step === 3){
        if(document.getElementById("inputBlock").value != ""){
            window.location.replace("enter.html");    
        }
        else{
            if(next === true){
                alert("Пароль некорректен")
            }
            next = true;
        }
   }
}

function submitForm1() {
    var textbox1 = document.getElementById('textbox1').value;
    var textbox2 = document.getElementById('textbox2').value;
    var textbox3 = document.getElementById('textbox3').value;
    var textbox4 = document.getElementById('textbox4').value;


    sessionStorage.setItem('textbox1', textbox1);
    sessionStorage.setItem('textbox2', textbox2);
    sessionStorage.setItem('textbox3', textbox3);
    sessionStorage.setItem('textbox4', textbox4);

    window.location.replace("registration3.html");    
}
//function submitForm2() {
    
    //var textbox5 = document.getElementById('textbox5').value;
    //var textbox6 = document.getElementById('textbox6').value;
  
    // Получение данных из URL
    //var textbox1 = urlParams.get('textbox1');
    //var textbox2 = urlParams.get('textbox2');
    //var textbox3 = urlParams.get('textbox3');
    //var textbox4 = urlParams.get('textbox4');
  
    // Отправка данных на сервер
    //var xhr = new XMLHttpRequest();
    //xhr.open("POST", "submit.php", true);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.send("textbox1=" + textbox1 + "&textbox2=" + textbox2 + "&textbox3=" + textbox3 + "&textbox4" + textbox4 + "&textbox5" + textbox5 + "&textbox6" + textbox6);
//}

  
       


