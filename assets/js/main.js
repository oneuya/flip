$(function(){

  var swiper = new Swiper(".main-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var swiper = new Swiper(".coupon-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var swiper = new Swiper(".promo-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".m-coupon-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });



  var swiper = new Swiper(".sc-magazin .swiper", {
    // 디폴트모바일
    slidesPerView:1.1,
    centeredSlides:true,
    loop:true,
    spaceBetween:10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      // 768이상
      768:{
        slidesPerView:3,
      }
    }

  });


  $('.sc-fix-area .fix-item').click(function(e){
    e.preventDefault();
    if ('.sc-fix-area .fix-item') {
      $(this).addClass('on').siblings().removeClass('on')
      
    } else {
      $(this).removeClass('on').siblings()
      
    }

});

  



  function list(sortNum,frame){
    
    fetch('./assets/data/data.json')
    .then(res=>res.json())
    .then(json=>{
      data=json.items;
      sortData=data.filter(function(parm){
        return parm.sort.indexOf(sortNum) >= 0;
      })
      let html=``;
      sortData.forEach(element => {
        onlyEl = `<span class="last-box a">ONLY</span>`;
        superhostEl = `<span class="last-box b">슈퍼호스트</span>`;
        energyEl = `<div class="energy">
                        <span>
                            <img src="./assets/img/energy.svg" alt="">
                            신규프립 에너지x2
                        </span>
                    </div>`;         
  
        if(element.only){
          only = onlyEl;
        }else{
          only = '';
        }
        if(element.superhost){
          superhost = superhostEl;
        }else{
          superhost = '';
        }

        if (element.energy) {
         hide=`display:none`;
         energy = energyEl;
        } else {
          hide=``;
          energy=``;
        }
        
        $starEl = `<li class="star-item"><img src="data:image/svg+xml,%3Csvg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M12.293 8.6189L15.7442 6.00968C16.2325 5.63914 15.9799 4.9135 15.3402 4.88263L10.8957 4.6356C10.6263 4.62016 10.3906 4.46577 10.2896 4.23418L8.65658 0.405277C8.42088 -0.135092 7.59595 -0.135092 7.36026 0.405277L5.72724 4.21874C5.62623 4.45033 5.39053 4.60472 5.12117 4.62016L0.659819 4.86719C0.0200779 4.89806 -0.232451 5.6237 0.255772 5.99424L3.707 8.58802C3.90903 8.74241 4.01004 9.00487 3.9427 9.23646L2.81473 13.2043C2.66322 13.7601 3.31979 14.2079 3.85852 13.8991L7.61279 11.6913C7.84848 11.5523 8.13468 11.5523 8.35354 11.6913L12.1246 13.8991C12.6634 14.2079 13.3199 13.7601 13.1684 13.2043L12.0405 9.2519C11.99 9.02031 12.0741 8.77329 12.293 8.6189Z' fill='%237A29FA'/%3E %3C/svg%3E" alt=""></li>`;
        let star = ``;
        for (let index = 0; index < element.review.star; index++) {
          star+= $starEl;
        }

    
  
        html+=`<li class="prd-item">
                <a href="" class="prd-link"></a>
                <div class="img-box">
                    <img src="${element.thumb}" alt="">
                    <button class="btn-fav" aria-label="찜하기"></button>
                </div>
                <div class="text-box">
                    <em>${element.loc}</em>
                    <strong>${element.title}</strong>


                    <div class="review" style="${hide}">
                    <ul class="star-list" style="${hide}">
                      ${star} <p style="margin:0 3px">후기</p> ${element.review.view}
                    </ul></div>

                    ${energy}

                    <i class="bar"></i>
                    <div class="cost">
                        <em>${element.price.ori}</em>
                        <div class="sale">
                          <p class="per">${element.price.sale}</p>
                          <p>${element.price.curr}원</p>
                        </div>
                    </div>
                    <div class="last-box">
                    ${only}${superhost}
                    </div>
                </div>
            </li>`
            
      });
  
      $(frame).html(html);
    })
  }  

// sort 값 // 영역
  list(1,"#list1")
  list(2,"#list2")
  list(3,"#list3")
  list(4,"#list4")
  list(5,"#list5")


})




