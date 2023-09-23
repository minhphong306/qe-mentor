import { test, expect } from "@playwright/test";

test.describe("Suite kiểm tra số lượng product", () => {
  test("Kiểm tra số lượng product trên trang collection all ", async ({ page }) => {
    await test.step("Truy cập trang collection all", async() => {
      await page.goto("https://manual-product-gallery.myshopbase.net/collections/all");
      
      // Kiem tra title la "All products"
      const allProductLoc = page.locator("//span[text()='All products']");
      await expect(allProductLoc).toBeVisible();

      // Kiem tra co dong chu "12 Products" xuat hien
      const twelveProductLoc = page.locator("//p[text()='12 Products']");
      await expect(twelveProductLoc).toBeVisible();
    });

    await test.step("Đếm số sản phẩm trong trang", async() => {
      const xpathProductCard = "//div[@class='wrap-card d-block product-item h-100']"; 
      const productCardLoc = page.locator(xpathProductCard);
      const count = await productCardLoc.count();

      await expect(count).toEqual(12);
    })
  })
});