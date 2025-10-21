// Feature 1: Log search input
document.querySelector(".search-icon").addEventListener("click", () => {
    const input = document.querySelector(".search-input").value.trim();
    if (input) {
        alert(`You searched for: "${input}"`);
        // You could also redirect to a search results page if this were dynamic
    } else {
        alert("Please enter something to search.");
    }
});

// Feature 2: Back to Top
document.querySelector(".foot-panel1").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Feature 3: Highlight box on hover
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.boxShadow = "0px 0px 10px #00ff88";
        box.style.transition = "0.3s";
    });
    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "none";
    });
});

// Feature 4: Dynamic footer year
const copy = document.querySelector(".copy-right");
if (copy) {
    const currentYear = new Date().getFullYear();
    copy.textContent = `© 1996-${currentYear}, Amazon.com, Inc. or its affiliates`;
}

// Feature 5: Simulated Cart Item Count (for demo only)
let cartCount = 0;
const cartIcon = document.querySelector(".nav-cart");
if (cartIcon) {
    const countSpan = document.createElement("span");
    countSpan.style.marginLeft = "5px";
    countSpan.style.background = "orange";
    countSpan.style.padding = "2px 6px";
    countSpan.style.borderRadius = "50%";
    countSpan.style.fontWeight = "bold";
    countSpan.style.color = "black";
    countSpan.textContent = cartCount;

    cartIcon.appendChild(countSpan);

    boxes.forEach(box => {
        const clickText = box.querySelector(".clik");
        if (clickText) {
            clickText.style.cursor = "pointer";
            clickText.addEventListener("click", () => {
                cartCount++;
                countSpan.textContent = cartCount;
                alert("Item added to cart!");
            });
        }
    });
}
