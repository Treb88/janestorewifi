import { vouchers } from "./vocuherList.js";

document.addEventListener('DOMContentLoaded', () => {
    slider();
})

const voucherItem = document.querySelector('.js-voucher-item');
voucherItem.innerHTML = '';

vouchers.forEach(Item => {
    const itemHtml = `
        <div>
            <div class="voucher-display">
                <div>
                    <p>${Item.name}</p>
                    <p>${Item.unit}</p>
                </div>
                <p class="info">${Item.Description}</p>
                <p class="price">₱ <span>${(Item.price /100).toFixed(2)}</span></p>
            </div>
            <div class="voucher-code-partials">
                <p>Voucher code</p>
            </div>
        </div>
    `;
    voucherItem.innerHTML += itemHtml;
});


function slider() {
    const slider = document.querySelector('.hero-slider');
    const dotsContainer = document.querySelector('.dots');
    const slides = document.querySelectorAll('.hero-slide');

    // Create dots based on number of slides
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    // Scroll slider based on dot click
    const dots = document.querySelectorAll('.dots div');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollTo({
                left: index * slider.clientWidth,
                behavior: 'smooth'
            });
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Update active dot on scroll
    slider.addEventListener('scroll', () => {
        let scrollPos = Math.round(slider.scrollLeft / slider.clientWidth);
        
        // If the scroll position exceeds the number of dots, reset to the first dot
        if (scrollPos >= dots.length) {
            scrollPos = 0;
            slider.scrollTo({
                left: 0, // Scroll back to the first slide
                behavior: 'smooth'
            });
        }

        dots.forEach(dot => dot.classList.remove('active'));
        dots[scrollPos].classList.add('active');
    });
};