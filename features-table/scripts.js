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

// EXTRA COST V2 ====================================================
// const extraCostTags = document.querySelectorAll('.tag-extra-cost[data-extra]');
// extraCostTags.forEach(extraCostTag => {
    

//     //CREATE ELEMENTS
//     //div .extra-cost
//     const divExtraCost = document.createElement('div');
//     divExtraCost.classList.add('extra-cost');

//     //div .extra-cost__value-cp
//     const divExtraCostValueCp = document.createElement('div');
//     divExtraCostValueCp.classList.add('extra-cost__value-cp');

//     //span .extra-cost__value
//     const spanExtraCostValue = document.createElement('span');
//     spanExtraCostValue.classList.add('extra-cost__value');
//     spanExtraCostValue.innerHTML = extraCostTag.dataset.extra;

//     //span .extra-cost__currency-perodicity
//     const spanExtraCurrencyPeriodicity = document.createElement('span');
//     spanExtraCurrencyPeriodicity.classList.add('extra-cost__currency-perodicity');
//     spanExtraCurrencyPeriodicity.innerHTML = 'USD/mo';

//     //button .extra-cost__btn
//     const btnExtraCost = document.createElement('button');
//     btnExtraCost.classList.add('extra-cost__btn','extra-cost__btn--add');

//     //span .extra-cost__btn__add
//     const spanExtraCostBtnAdd = document.createElement('span');
//     spanExtraCostBtnAdd.classList.add('extra-cost__btn__add');
//     spanExtraCostBtnAdd.innerHTML = 'Add';

//     //span .extra-cost__btn__remove
//     const spanExtraCostBtnRemove = document.createElement('span');
//     spanExtraCostBtnRemove.classList.add('extra-cost__btn__remove');
//     spanExtraCostBtnRemove.innerHTML = 'Remove';

//     //div .extra-cost__triangle
//     const divExtraCostTriangle = document.createElement('div');
//     divExtraCostTriangle.classList.add('extra-cost__triangle');

//     //ADD FUNCTIONALITY
//     btnExtraCost.addEventListener('click', function(){
//         if(this.classList.contains('extra-cost__btn--add')) {
            
//         } else {
//             console.log('restar');
//         }
//         this.classList.toggle('extra-cost__btn--add');
//     })

//     //appends
//     divExtraCostValueCp.appendChild(spanExtraCostValue);
//     divExtraCostValueCp.appendChild(spanExtraCurrencyPeriodicity);
//     btnExtraCost.appendChild(spanExtraCostBtnAdd);
//     btnExtraCost.appendChild(spanExtraCostBtnRemove);
//     divExtraCost.appendChild(divExtraCostValueCp);
//     divExtraCost.appendChild(btnExtraCost);
//     divExtraCost.appendChild(divExtraCostTriangle);
//     extraCostTag.appendChild(divExtraCost);
// });

// GENERATE OTHER PLANS (MOBILE) ====================================================
/*The following code copies for each plan, the others plans features*/
planCards = document.querySelectorAll('.plan-card');
planTableContainers = document.querySelectorAll('.plan-card__table-container');
planTableContainers.forEach( (tableContainer, itemIndex) => {
    let otherTablesA;
    let otherTablesB;
    let tableATitle;
    let tableBTitle;

    if(itemIndex === 0) {
        otherTablesA = planTableContainers[1].querySelectorAll('.plan-card__table');
        tableATitle = planCards[1].querySelector('.plan-card__title').innerHTML;
        otherTablesB = planTableContainers[2].querySelectorAll('.plan-card__table');
        tableBTitle = planCards[2].querySelector('.plan-card__title').innerHTML;
    } else if (itemIndex === 1) {
        otherTablesA = planTableContainers[0].querySelectorAll('.plan-card__table');
        tableATitle = planCards[0].querySelector('.plan-card__title').innerHTML;
        otherTablesB = planTableContainers[2].querySelectorAll('.plan-card__table');
        tableBTitle = planCards[2].querySelector('.plan-card__title').innerHTML;
    } else if (itemIndex === 2) {
        otherTablesA = planTableContainers[0].querySelectorAll('.plan-card__table');
        tableATitle = planCards[0].querySelector('.plan-card__title').innerHTML;
        otherTablesB = planTableContainers[1].querySelectorAll('.plan-card__table');
        tableBTitle = planCards[1].querySelector('.plan-card__title').innerHTML;
    }

    const currentTables = tableContainer.querySelectorAll('.plan-card__table');
    currentTables.forEach( (ct, ctIndex) => {
        const currentTableTrs = ct.querySelectorAll('tbody tr');
        let counter = 1;
        currentTableTrs.forEach( (ctTr, ctTrIndex) => {
            
            if(itemIndex === 0) {
                iA = ctTrIndex + 1;
                iB = ctTrIndex + 1;
            } else if (itemIndex === 1) {
                iA = counter;
                iB = ctTrIndex + 1;
            } else if (itemIndex === 2) {
                iA = counter;
                iB = counter;
            }
            
            const tableATdClone = otherTablesA[ctIndex].querySelector(`tbody tr:nth-child(${iA}) td:nth-child(2)`).cloneNode(true);
            const tableBTdClone = otherTablesB[ctIndex].querySelector(`tbody tr:nth-child(${iB}) td:nth-child(2)`).cloneNode(true);        

            counter += 3;

            //TABLE TDA1
            const divA1 = document.createElement("div");
            divA1.classList.add('td-container');
            divA1.innerHTML = tableATitle;
            const tdA1 = document.createElement("td");
            tdA1.appendChild(divA1);

            //TABLE TRA
            const trA = document.createElement("tr");
            trA.classList.add('other-plan');
            trA.appendChild(tdA1);
            trA.appendChild(tableATdClone);

            // =================================

            //TABLE TDB1
            const divB1 = document.createElement("div");
            divB1.classList.add('td-container');
            divB1.innerHTML = tableBTitle;
            const tdB1 = document.createElement("td");
            tdB1.appendChild(divB1);

            //TABLE TRA
            const trB = document.createElement("tr");
            trB.classList.add('other-plan');
            trB.appendChild(tdB1);
            trB.appendChild(tableBTdClone);

            ctTr.insertAdjacentElement("afterend", trB);
            ctTr.insertAdjacentElement("afterend", trA);
        });
    });
});

// ADD TOGGLE FUNCTIONALITY FOR 'CURRENT PLANS'
/*The current plans, are all the initial visible tr's (MOBILE)*/
const currentPlans = document.querySelectorAll('.container-plans-mobile tbody tr:not(.other-plan)');
const tips = document.querySelectorAll('.tip');
currentPlans.forEach( (currentPlan, i) => {
    currentPlan.classList.add('current-plan');

    const nextOtherPlan = currentPlan.nextElementSibling;
    const nextNextOtherPlan = nextOtherPlan.nextElementSibling;
    currentPlan.addEventListener('click', function(){

        //hide previous visible '.other-plan'
        const visibleOtherPlans = document.querySelectorAll('.other-plan.show');
        if(visibleOtherPlans.length) {
            visibleOtherPlans.forEach(visibleOtherPlan => {
                visibleOtherPlan.classList.remove('show');
            });
        }

        nextOtherPlan.classList.toggle('show');
        nextNextOtherPlan.classList.toggle('show');
        tips.forEach(tip => {
            tip.classList.add('tip--hidden');
            setTimeout(function(){
                tip.classList.add('tip--height0');
            },250);
            
        })
    })
});