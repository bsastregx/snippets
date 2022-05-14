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