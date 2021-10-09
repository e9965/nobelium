var s1 = '2022-04-23';
s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();
var days = s1.getTime() - s2.getTime();
days =parseInt( days / (1000 * 60 * 60 * 24));
var number_of_years = parseInt(days/365);
days%=365;
var number_of_months = parseInt(days/30);
days%=30;
var number_of_days = parseInt(days);
var timeHTML="距離DSE還剩下：";
if(number_of_years)
    timeHTML+=number_of_years+"年";
if(number_of_months)
    timeHTML+=number_of_months+"月";
if(number_of_days)
    timeHTML+=number_of_days+"天。";
document.getElementById('times').innerText = timeHTML;
