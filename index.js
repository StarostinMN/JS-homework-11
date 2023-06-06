(async () => {
    try {
        const responce = await fetch("data.json");

        if (!responce.ok) {
            throw new Error("Failed from data.json");
        }

        const data = await responce.json();

        const productBox = document.querySelector(".product__box");

        data.forEach(({ name, image, price, subtitle }) => {
            const productEl = `
          <div class="product">
            <img src="${image}" alt="${name}" class="product__img" />
            <div class="product__content">
              <h2 class="product__title">${name}</h2>
              <p class="product__subtitle">${subtitle}</p>
              <p class="product__price"><span class="price">$${price}.00</span></p>
            </div>
          </div>`;

            productBox.insertAdjacentHTML("beforeend", productEl);
        });
    } catch (error) {
        console.error(error);
    }
}).apply();