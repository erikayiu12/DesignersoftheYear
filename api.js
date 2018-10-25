<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>


<script>
$(document).ready(function() {


$.ajax({
  url: "https://datastudio-api.hkstp.org:443/MonthlyAverageHousingPricebyDistricts/v1.0.0",
  Accept: "application/json",
  headers:{Authorization: "Bearer 60ba9d9e364398f7ffbc0342d690aa49"},
  success: function (result){
        console.log("thankyou");
        var answer = JSON.stringify(result);
        var obj = JSON.parse(answer);
        console.log(obj);
        console.log(obj[16].net_price);
        document.querySelectorAll(".btn-danger")[0].addEventListener("click", myFunction);
         function myFunction() {
  document.getElementById("price").innerHTML = "The latest price is " + obj[16].net_price;
}

  }
    })  

});
 

</script>



<script>
$(document).ready(function() {


$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=business&country=hk&from=2018-10-01&sortBy=publishedAt&apiKey=3edaca1aee4c4ab3add7ed19b643d7de",
  Accept: "application/json",
  success: function (result){
        console.log("thankyou");
        var reply = JSON.stringify(result);
        var news = JSON.parse(reply);
        console.log(news);
        console.log(news.articles[0].description);
        document.querySelectorAll(".news-item")[0].innerHTML = news.articles[0].title;
        document.querySelectorAll(".news-item")[1].innerHTML = news.articles[1].title;
        document.querySelectorAll(".news-item")[2].innerHTML = news.articles[2].title;
        document.querySelectorAll(".news-item")[3].innerHTML = news.articles[3].title;
        document.querySelectorAll(".news-item")[4].innerHTML = news.articles[4].title;
        document.querySelectorAll(".news-item")[5].innerHTML = news.articles[5].title;
        document.querySelectorAll(".news-item")[6].innerHTML = news.articles[3].title;
        document.querySelectorAll(".news-item")[7].innerHTML = news.articles[4].title;
        document.querySelectorAll(".news-item")[8].innerHTML = news.articles[5].title;
  }
    })  
});
 

</script>


