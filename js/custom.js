//Turf Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".turf-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 25,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
      1440: { slidesPerView: 1 },
    },
  });
});
//Turf Slider

// Duration JS
document.addEventListener("DOMContentLoaded", () => {
    const incBtn = document.querySelector(".inc-btn");
    const decBtn = document.querySelector(".dec-btn");
    const durationEl = document.querySelector(".duration");

    let duration = 1;
    const min = 1;
    const max = 24; 

    incBtn.addEventListener("click", () => {
        if (duration < max) {
            duration++;
            durationEl.textContent = duration + " hr";
        }
    });

    decBtn.addEventListener("click", () => {
        if (duration > min) {
            duration--;
            durationEl.textContent = duration + " hr";
        }
    });
});

//Add to Cart Logic
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".cart-form form");
    const submitBtn = document.querySelector(".submit-btn");
    const cartEmpty = document.getElementById("cart-details-empty");
    const cartDetails = document.getElementById("cart-details");
    const cartClear = document.getElementById("cart-clear");

    // Collect all required fields
    const requiredFields = form.querySelectorAll("[required]");

    function updateButtonState() {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value) allFilled = false;
        });

        submitBtn.disabled = !allFilled;
        submitBtn.classList.toggle("active", allFilled);
    }

    // Initial check
    updateButtonState();

    // Listen to changes in all required fields
    requiredFields.forEach(field => {
        field.addEventListener("input", updateButtonState);
        field.addEventListener("change", updateButtonState); // for select/date
    });

    // Form submission
    form.addEventListener("submit", function (e) {
        // Check validity
        if (!form.checkValidity()) {
            form.reportValidity(); // show browser default error
            return;
        }

        e.preventDefault(); // prevent real submission
        cartEmpty.style.display = "none";
        cartDetails.style.display = "flex";
    });

    // Clear cart
    cartClear.addEventListener("click", function () {
        cartDetails.style.display = "none";
        cartEmpty.style.display = "flex";

        // Reset form
        form.reset();
        updateButtonState();

        // HIDE AVAILABLE SLOT
        const availableSlot = document.querySelector(".available-slot");
        availableSlot.style.display = "none";
        
    });
});

//Discount button show
document.addEventListener("DOMContentLoaded", function () {

    const decBtn = document.querySelector(".dec-btn");
    const incBtn = document.querySelector(".inc-btn");
    const durationText = document.querySelector(".duration");
    const discountBox = document.querySelector(".discount-btn");
    const cartClear = document.getElementById("cart-clear");
    const availableSlot = document.querySelector(".available-slot");

    let duration = 1; // default 1 hour

    function updateDurationUI() {
        durationText.innerText = duration + " hr";

        // Show discount only if 3 hours or more
        if (duration >= 3) {
            discountBox.style.display = "block";
        } else {
            discountBox.style.display = "none";
        }
    }

    // Increase duration
    incBtn.addEventListener("click", function () {
        duration++;
        updateDurationUI();
    });

    // Decrease duration (minimum 1 hour)
    decBtn.addEventListener("click", function () {
        if (duration > 1) {
            duration--;
            updateDurationUI();
        }
    });

    // RESET WHEN CART IS CLEARED
    cartClear.addEventListener("click", function () {
        duration = 1;
        updateDurationUI();

        // Hide discount & available slots
        discountBox.style.display = "none";
        availableSlot.style.display = "none";
    });

    // Initial state
    discountBox.style.display = "none";
    availableSlot.style.display = "none";
    updateDurationUI();
});


//Available slot show
document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.querySelector('input[type="date"]');
    const availableSlot = document.querySelector(".available-slot");

    // Hide initially
    availableSlot.style.display = "none";

    dateInput.addEventListener("change", function () {
        if (this.value) {
            availableSlot.style.display = "block";
        } else {
            availableSlot.style.display = "none";
        }
    });
});
//Add to Cart Logic End



//Tab Js for my account page
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Show corresponding content
            const target = this.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
});

//Tab Js for my account page
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".profile-menu li");
    const boxes = document.querySelectorAll(".booking-box, .edit-box");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {

            // Remove active from menu
            menuItems.forEach(li => li.classList.remove("active"));

            // Hide all boxes
            boxes.forEach(box => box.classList.remove("active"));

            // Activate clicked menu
            this.classList.add("active");

            // Show related box
            const targetClass = this.getAttribute("data-target");
            document.querySelector("." + targetClass).classList.add("active");
        });
    });
});
//Tab Js for my accoun page

// Partial payment JS
document.addEventListener("DOMContentLoaded", function () {

  const fullPaymentRadio = document.getElementById("fullPayment");
  const partialPaymentRadio = document.getElementById("partialPayment");
  const totalAmountEl = document.getElementById("totalAmount");
  const payableAmountEl = document.getElementById("payableAmount");

  const totalAmount = parseFloat(totalAmountEl.innerText);

  function updatePayableAmount() {
    if (partialPaymentRadio.checked) {
      payableAmountEl.innerText = (totalAmount / 2).toFixed(2);
    } else {
      payableAmountEl.innerText = totalAmount.toFixed(2);
    }
  }

  // Event listeners
  fullPaymentRadio.addEventListener("change", updatePayableAmount);
  partialPaymentRadio.addEventListener("change", updatePayableAmount);

  // Initial load
  updatePayableAmount();
});
// Partial payment JS

//Inactive minutes
// const timeInput = document.querySelector('input[type="time"]');
// timeInput.addEventListener("change", function () {
//     const [hour] = this.value.split(":");
//     this.value = `${hour}:00`;
// });


/* Disable Right Click */
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

/* Disable common DevTools keys */
document.addEventListener('keydown', function (e) {

    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key.toUpperCase() === 'U') {
        e.preventDefault();
        return false;
    }

    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.key.toUpperCase() === 'S') {
        e.preventDefault();
        return false;
    }
});
