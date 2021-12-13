$(document).ready(function(){
  
  
 //start animate class activation
 $(".side-bar .sidebar-head .icon i").click(function(){
 
   $(this).parent().parent().parent(".side-bar").toggleClass("animate");
   
     if( $(".side-bar").is(".animate ") ){
        
        $(".sidebar-item span:first-child").removeClass("col-xs-2");
        
        $(".side-bar").css("overflow-y","scroll");
        
    }else{
     
        $(".sidebar-item span:first-child").addClass("col-xs-2");
        
        $(".side-bar").css({
         "overflow-y":"scroll",
         "overflow-x": "hidden",
         });
     
    }
    
    
    $("nav").toggleClass("animate");
    
    $(".main-content").toggleClass("animate");
     
    $(".footer").toggleClass("animate");
    
    $(".dark-mood").toggleClass("animate");
    
    
  
  });
//end animate class activation
 
 
 
//start first chart
//the chart
 var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          //style
          type: 'line',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{ 
                data: [20,24,20,25,21,20,18,30],
                label: "Total",
                borderColor: "#D3244F",
                borderWidth:2,
                backgroundColor: "rgba(241, 65, 108, 0.1)",
                fill: true,
                pointRadius: 2,
                pointHoverRadius:8,
                pointBackgroundColor: "#D3244F",
                pointBorderColor: "#D3244F",
                pointHoverBackgroundColor: "#D3244F",
                pointHoverBorderColor: "#D3244F",
              }
            ]
          },
          //options
          options: {
            
            scales: {
             xAxes: [{ 
                stacked: true,
                display:false
               }],
               yAxes: [{
                stacked:true,
                display:false,
               }],
             },//scales
             
             legend:{display:false},
             
             maintainAspectRatio: false,
             
             
           },//options
           
        });
   
//end first chart 
 
 
 
 //start 2nd chart
//the chart
 var ctx2 = document.getElementById('myChart-two').getContext('2d');
      var myChart2 = new Chart(ctx2, {
          //style
          type: 'line',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{ 
                data: [15,15,20,15,25,20,25,26,27],
                label: "",
                borderColor: "#009ef7",
                borderWidth:2,
                backgroundColor: "rgba(0, 158, 247, 0.1)",
                fill: true,
                pointRadius: 2,
                pointHoverRadius:8,
                pointBackgroundColor: "rgba(0, 158, 247, 1)",
                pointBorderColor: "rgba(0, 158, 247, 1)",
                pointHoverBackgroundColor: "rgba(0, 158, 247, 1)",
                pointHoverBorderColor: "rgba(0, 158, 247, 1)",
              }
            ]
          },
          //options
          options: {
            
            scales: {
             xAxes: [{ 
                stacked: true,
                display:false
               }],
               yAxes: [{
                stacked:true,
                display:false,
               }],
             },//scales
             
             legend:{display:false},
             
             maintainAspectRatio: false,
                
           },//options
           
        });      
//end 2nd chart



//start 3nd chart
//the chart
 var ctx3 = document.getElementById('myChart-three').getContext('2d');
      var myChart3 = new Chart(ctx3, {
          //style
          type: 'pie',
          data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "#ffb8b8",
                borderWidth:1,
                backgroundColor: "#F1416C",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              },{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "rgba(255,184,184,1)",
                borderWidth:1,
                backgroundColor: "rgba(255, 184, 184, 1)",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              },{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "rgba(255,184,184,1)",
                borderWidth:1,
                backgroundColor: "#7158e2",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              },{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "rgba(255,184,184,1)",
                borderWidth:1,
                backgroundColor: "#60a3bc",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              },{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "rgba(255,184,184,1)",
                borderWidth:1,
                backgroundColor: "#e55039",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              },{ 
                data: [15,20,15,25,20,25,26],
                label:"",
                borderColor: "rgba(255,184,184,1)",
                borderWidth:1,
                backgroundColor: "#f6b93b",
                barThickness:40,
                borderSkipped:'top',
                borderRadiusTop:50
              }
            ]
          },
          //options
          options: {
            
            scales: {
             xAxes: [{ 
                stacked: true,
                display:false
               }],
               yAxes: [{
                stacked:true,
                display:false,
                height:20
               }],
               
             },//scales
             
             legend:{display:false},
             
             responsive: true,
             
             maintainAspectRatio: false,
                
           },//options
           
        });      
//end 3nd chart



//start to do list
$(".to-do-list-body .left-part .icon").click(function(){
 
  $(this).toggleClass("check");
 
  if( $(this).hasClass("active") ){
  
    $(this).toggleClass("active");
  
  }//if
 
 });
//end to do list


//Start scroll function
$(window).scroll(function(){
    
  if(  $(window).scrollTop() >= $(".cards-section").offset().top ){
        
        $(".scroll-to-top").fadeIn(300);
        
        }else{
        
        $(".scroll-to-top").fadeOut(300);
        
        }
    
});

$(".scroll-to-top").click(function(){
    
    $("html,body").animate({
        
        scrollTop:"0",
        
        },700);
    
    });
//end scroll function

//start dark mood
$(".dark-mood i").click(function(){
 
 $(".fa-cloud-moon").toggleClass("dark");
 
 $(".fa-sun").toggleClass("dark");
 
 });
 
 
$(".dark-mood .fa-sun").click(function(){
 
 $(this).css("z-index","200");
 
 $(this).prev(".fa-cloud-moon").css("z-index","400");
 
 });

 
 $(".dark-mood i").click(function(){
  
  $("body,.main-content,.custome-chart,.cards-section,.activities,.timeline,.custome-chart-two,.custome-chart-three,.to-do-list   ").toggleClass("dark");
  
 });
//end dark mood 
 
 
//start wow
wow = new WOW({
 boxClass:     'wow',      // default
 animateClass: 'animated', // default
 offset:       0,          // default
 mobile:       true,       // default
 live:         true        // default
 });
wow.init();
//end wow


//start loader
$(window).on("load",function(){
 
  $(".lds-ripple").fadeOut(5000);
 
});
//end loader

});//document ready


