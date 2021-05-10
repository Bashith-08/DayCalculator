function fn1()
          {
            var date,month,year,day_code;
            var varible;
            date=Number(document.formcalc.text1.value);
            month=Number(document.formcalc.text2.value);
            year=Number(document.formcalc.text3.value);

        var month_code;
        var year_code;
    if(month==1)
    {
     month_code=0;
    }else if(month==2)
    {
     month_code=3;
    }else if(month==3)
    {
     month_code=3;
    }else if(month==4)
    {
     month_code=6;
    }else if(month==5)
    {
     month_code=1;
    }else if(month==6)
    {
     month_code=4;
    }else if(month==7)
    {
     month_code=6;
    }else if(month==8)
    {
     month_code=2;
    }else if(month==9)
    {
     month_code=5;
    }else if(month==10)
    {
     month_code=0;
    }
    else if(month==11)
    {
     month_code=3;
    }else
    {
     month_code=5;
    }
    if(year>=1600&&year<=1699)
    {
     year_code=6;
    }else if(year>=1700&&year<=1799)
    {
     year_code=4;
    }else if(year>=1800&&year<=1899)
    {
     year_code=2;
    }else if(year>=1900&&year<=1999)
    {
     year_code=0;
    }else if(year>=2000&&year<=2099)
    {
     year_code=6;
    }
     var last_two_digit=year%100;
     var divisible_by_four=parseInt(last_two_digit/4);
     var sum=last_two_digit+divisible_by_four+date+month_code+year_code;
     var day_code=sum%7;
     if(year<=2099&&year>=1600)
     {

     if(year/4!=0)
    {
    day_code=day_code+0;
    }
    if(year/4==0)
    {
    day_code=day_code-1;
    }
   
    if(day_code==0)
      {
       
       varible="SUNDAY";
      }
    else if(day_code==1)
      {
      varible= "monday";
      }
    else if(day_code==2)
      {
      varible= "TUESDAY";
      }
    else if(day_code==3)
      {
       varible= "WEDNESDAY";
      }
    else if(day_code==4)
      {
        varible= "THURSDAY";
      }
    else if(day_code==5)
      {
        varible= "FRIDAY";
      }
    else if(day_code==6)
      {
        varible="SATURDAY";
      }
  }
  else
  {
    varible= "please enter the details corectly";
  }
  document.getElementById("counting1").innerHTML= "DAY  :"+varible;
  }