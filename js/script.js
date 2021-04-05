// Діаграма пірожок

function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
    var p = pie.textContent;
    pie.style.animationDelay = '-' + parseFloat(p) + 's';
});


//Калькулятор

var buttons = document.querySelectorAll(".service__item");

for (var button of buttons) {
    button.addEventListener('click', function () {
        buttons.forEach(i => i.classList.remove('service__item--active'));

        this.classList.toggle('service__item--active');
    });
};

document.getElementById("service1"). innerHTML = servise_visit ;