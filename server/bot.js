import puppeteer from "puppeteer";
import Restaurant from "./models/restaurant.js";

const url = "https://menudino.com/delivery/montes-claros-mg";

export default async function scraper() {
  try {
    console.log("Recuperando os dados dos restaurantes");
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(url);

    const restaurants = await page.evaluate(() => {
      const cardArea = document.querySelector(
        ".DynamicCardsArea_content__umSs_"
      );
      const cards = Array.from(cardArea.children);
      return cards.map((card) => {
        const restName = card
          .querySelector(".MerchantCard_merchantInfos__z_OPk h3")
          .innerText.trim();
        const restDesc = card
          .querySelector(".MerchantCard_merchantInfos__z_OPk label")
          .innerText.trim();
        const href = card.href;
        return { href, restName, restDesc };
      });
    });

    for (let restaurant of restaurants) {
      await page.goto(restaurant.href, { waitUntil: "networkidle2" });
      await page.evaluate(async () => {
        const categoriesElement = document.querySelector(".categories");
        if (categoriesElement) {
          const children = categoriesElement.children;
          for (const child of children) {
            child.scrollIntoView({ behavior: "smooth", block: "start" });
            await new Promise((resolve) => setTimeout(resolve, 500)); 
          }
        }
      });

      if (!(await page.$(".product-item"))) continue;
      else {
        const menu = await page.$$eval(".product-item", (items) => {
          return items
            .map((item) => {
              const menuItem = {};
              if (item.getAttribute("data-name"))
                menuItem.name = item.getAttribute("data-name");
              if (item.getAttribute("data-price"))
                menuItem.price = parseFloat(
                  item.getAttribute("data-price").replace(",", ".")
                );
              if (item.getAttribute("data-description"))
                menuItem.description = item.getAttribute("data-description");
              return menuItem;
            })
            .filter((item) => item.name || item.price || item.description);
        });

        const objRest = {
          name: restaurant.restName,
          category: restaurant.restDesc.startsWith("Mini")
            ? "Mercado"
            : restaurant.restDesc,
          menu: menu,
        };

        const existingRestaurant = await Restaurant.findOne({
          name: restaurant.restName,
        });
        if (!existingRestaurant && menu.length !== 0) {
          await Restaurant.create(objRest);
        }
      }
    }

    await browser.close();
    console.log("Terminado!");
  } catch (error) {
    console.error("Um erro ocorreu:", error);
  }
}
