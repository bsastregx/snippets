//COMPARE PLANS ====================================================

comparePlans = document.querySelector(".compare-plans");
comparePlans.addEventListener('click', function(){
    document.querySelector('#features-tables-top').scrollIntoView({
        behavior: 'smooth'
    });
})

//ANIMATE STICKY PLANS HEADER ====================================================

const pdct = document.querySelector('.plans-header-container-bottom-reference');
const pdc = document.querySelector('.plans-header-container');

const observer = new window.IntersectionObserver(([entry]) => {
if (entry.isIntersecting) {
    pdc.classList.remove('sticky');
    return
}
if (entry.boundingClientRect.top <= 0) {
    pdc.classList.add('sticky');
}
}, {
root: null,
threshold: 0,
})
observer.observe(pdct)

//UP ARROW (GO UP TO STICKY PLANS HEADER) ====================================================

const goUp = document.querySelector(".go-top"); 
goUp.addEventListener('click', function(){
    document.querySelector('#features-tables-top').scrollIntoView({
        behavior: 'smooth'
    });
})

// TOGGLE PLAN FEATURES (MOBILE) ====================================================

const togglePlanFeatures = document.querySelectorAll('.toggle-plan-features');
togglePlanFeatures.forEach(tpf => {
    tpf.addEventListener('click', function(){
        const card = tpf.parentElement;
        const tableContainer = card.querySelector('.plan-card__table-container');
        tableContainer.classList.toggle('collapsed');
        tpf.classList.toggle('collapsed');
    })
});

// HIDE PLAN FEATURES (MOBILE) ====================================================

const hidePlanFeatures = document.querySelectorAll('.hide-plan-features');
hidePlanFeatures.forEach(hpf => {
    hpf.addEventListener('click', function(){
        const tableContainer = hpf.parentElement;
        tableContainer.classList.add('collapsed');
        const togglePlanFeatures = tableContainer.parentElement.querySelector('.toggle-plan-features');
        togglePlanFeatures.classList.add('collapsed');
    })
});

// MORE INFO ====================================================
const moreInfoTds = document.querySelectorAll('.more-info__td');
moreInfoTds.forEach(moreInfoTd => {
    moreInfoTd.addEventListener('click', function(){
        moreInfoTd.classList.toggle('more-info__td--hidden');
    })
});

// EXTRA COST ====================================================
const extraCostBtn = document.querySelector('.extra-cost__btn');
const planDinamicPrice = document.querySelector('.plan--dinamic-price');
const planDinamicPricePrice = planDinamicPrice.querySelector('.plan__price__value');
const planDinamicPricePriceSticky = planDinamicPrice.querySelector('.plan__price--sticky');
extraCostBtn.addEventListener('click', function(){
    if(extraCostBtn.classList.contains('extra-cost__btn--add')) {
        planDinamicPricePrice.innerHTML = "$4.650";
        planDinamicPricePriceSticky.innerHTML = "$4.650";
    } else {
        planDinamicPricePrice.innerHTML = "$4.400";
        planDinamicPricePriceSticky.innerHTML = "$4.400";
    }
    planDinamicPrice.classList.add('plan--toggleBackgroundColor');
    setTimeout(() => {
        planDinamicPrice.classList.remove('plan--toggleBackgroundColor');
    }, 250)
    planDinamicPrice.classList.toggle('plan--show-extra-cost');
    extraCostBtn.classList.toggle('extra-cost__btn--add');
});

// SHOW OTHER PLANS (MOBILE) ====================================================
const currentPlans = document.querySelectorAll('.current-plan');
currentPlans.forEach(currentPlan => {
    const nextOtherPlan = currentPlan.nextElementSibling;
    const nextNextOtherPlan = nextOtherPlan.nextElementSibling;
    currentPlan.addEventListener('click', function(){
        nextOtherPlan.classList.toggle('show');
        nextNextOtherPlan.classList.toggle('show');
    })
})
