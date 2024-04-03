const spanElement = document.querySelector('span._m-user-star_1oy1l_1414,.undefined');
        if (spanElement) {
            spanElement.style.visibility = "hidden";
        }
        
const spanElement2 = document.querySelector('span.m-user-star');
if (spanElement2) {
    spanElement2.remove();
}

const element1 = document.querySelector(".rating-header, .text-center");
if (element1) {
    element1.remove();
}

const element2 = document.querySelector(".rating-ranks");
if (element2) {
    element2.remove();
}

const spanElement3 = document.querySelector('span.rating');
if (spanElement3) {
    spanElement3.remove();
}

const sectElement = document.querySelector("section.rating-graphs.rating-data-section");
if (sectElement) {
    sectElement.remove();
}

const sectElement2 = document.querySelector("section.rating-data-section.distribution");
if (sectElement2) {
    sectElement2.remove();
}
const divElement2 = document.getElementById("live-ratings-graph-wrapper");
if(divElement2){
divElement2.style.display = "none !important";
}


