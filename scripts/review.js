CountReview();

function CountReview(){
    let count = parseInt(localStorage.getItem("reviews"));
    if(!count){
        count = 1;
    } else {
        count += 1;
    }
    localStorage.setItem("reviews", count);
    const reviewCount = document.querySelector("#reviewCount");
    reviewCount.innerHTML = `We have received ${count} reviews.`;
}

