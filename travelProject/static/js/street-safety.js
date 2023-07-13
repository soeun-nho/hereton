document.addEventListener('DOMContentLoaded', function() {
    let stars1 = document.querySelectorAll('input[name="rating_1"]');
    let showValue1 = document.querySelector('#rating-value_1');
  
    for (let i = 0; i < stars1.length; i++) {
      stars1[i].addEventListener('click', function() {
        let rating = this.value;
        let formattedRating = Number(rating).toFixed(1);
  
        showValue1.innerHTML = formattedRating;
        updateButtonState(); // 별점 입력 변경 시 버튼 상태 업데이트
      });
    }
  
    let stars2 = document.querySelectorAll('input[name="rating_2"]');
    let showValue2 = document.querySelector('#rating-value_2');
  
    for (let i = 0; i < stars2.length; i++) {
      stars2[i].addEventListener('click', function() {
        let rating = this.value;
        let formattedRating = Number(rating).toFixed(1);
  
        showValue2.innerHTML = formattedRating;
        updateButtonState(); // 별점 입력 변경 시 버튼 상태 업데이트
      });
    }
  
    let stars3 = document.querySelectorAll('input[name="rating_3"]');
    let showValue3 = document.querySelector('#rating-value_3');
  
    for (let i = 0; i < stars3.length; i++) {
      stars3[i].addEventListener('click', function() {
        let rating = this.value;
        let formattedRating = Number(rating).toFixed(1);
  
        showValue3.innerHTML = formattedRating;
        updateButtonState(); // 별점 입력 변경 시 버튼 상태 업데이트
      });
    }
  
    function updateButtonState() {
      let rating1 = parseFloat(showValue1.innerHTML);
      let rating2 = parseFloat(showValue2.innerHTML);
      let rating3 = parseFloat(showValue3.innerHTML);
      let imgBtn = document.getElementById('img_btn');
      let btnImage = document.getElementById('btn_image');
  
      if (rating1 > 0 && rating2 > 0 && rating3 > 0) {
        // 별점 3개 모두 값이 들어왔을 때 버튼 활성화
        btnImage.src = 'next_complete.svg';
        imgBtn.disabled = false;
      } else {
        // 하나라도 별점 값이 비어있을 때 버튼 비활성화
        btnImage.src = 'next_incomplete.svg';
        imgBtn.disabled = true;
      }
    }
  
    updateButtonState(); // 페이지 로드 시 버튼 상태 초기화
  });

  


// 버튼 클릭 시 다른 페이지로 이동하는 함수를 정의합니다.
function redirectToCommentPage() {
    window.location.href = "street-safety-comment.html";
}

const button = document.getElementById("img_btn");

// 버튼 클릭 이벤트에 redirectToCommentPage 함수를 연결합니다.
button.addEventListener("click", redirectToCommentPage);
