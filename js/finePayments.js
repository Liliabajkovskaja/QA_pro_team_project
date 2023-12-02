"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
 let executePayment = ()  =>{
    delete DB.finesData;
    alert("Оплата успішно виконана!");
  }
  
buttonSubmit.addEventListener('click',payFine);
let payFine = () => {
    const passportRegex = /^[А-ЩЬЮЯҐЄIІЇЁ]{2}\d{6}$/;
    if (!passportRegex.test(passport.value)) {
      alert("Не вірний паспортний номер");
      return;
    }
    const creditCardRegex = /^\d{16}$/;
    if (!creditCardRegex.test(creditCardNumber.value)) {
      alert("Не вірна кредитна картка");
      return;
    }
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv.value)) {
      alert("Не вірний CVV");
      return;
    }
    if (fineNumber.value !== DB.fineNumber || parseFloat(amount.value) !== DB.amount) {
      alert("Номер або сума не співпадають");
      return;
    }
    executePayment();
  }
  