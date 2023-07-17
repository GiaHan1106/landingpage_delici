window.addEventListener("scroll", function () {
    var header = document.querySelector(".s-header");
    if (window.pageYOffset > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
$(function () {
    $(".s-header .s_bot .s_menu").click(function () {
        $(".s-bar").addClass("active");
    });
    $(".s-bar .s_menu .fa-circle-xmark").click(function () {
        $(".s-bar").removeClass("active");
    });
    $(".s-bar").click(function (e) {
        if (e.target == e.currentTarget) {
            $(".s-bar").removeClass("active");
        }
    });
    $(".s-bar .s_menu ul li .b_showmenu ").click(function () {
        $(".s-bar .s_menu ul li ul").slideToggle();
    });
    $(".s-selection .s_bot .s_menu ul li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $changeTab = $(this).attr("data-tab");
        $(".s-selection .s_bot .s-listFood").find($changeTab).fadeIn();
        $(".s-selection .s_bot .s-listFood").find($changeTab).siblings().fadeOut();
    });
});

function renderFoodTab(selectorId, min, max) {
    let listMorning = document.querySelector(`${selectorId} .row`);
    for (let i = min; i <= max; i++) {
        listMorning.innerHTML += `<div class="col-lg-6">
    <div class="b_detailFood ${i % 2 == 0 ? "border-0" : ""}">
        <div class="b-leftFood"><img src="img/listfood/listfood${i}.png" alt="" /></div>
        <div class="b-rightFood">
            <div class="b_namefood">
                <h2>Greek Salad</h2>
                <div class="b_parallel"></div>
                <p class="b_price">$25.50</p>
            </div>
            <p class="b_ingredient">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
        </div>
    </div>
</div>`;
    }
}
renderFoodTab("#s_morning", 1, 6);
renderFoodTab("#s_weekdaylunch", 7, 12);
renderFoodTab("#s_dinner", 1, 6);
renderFoodTab("#s_wines", 7, 12);
