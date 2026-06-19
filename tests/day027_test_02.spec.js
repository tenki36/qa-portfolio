const { test, expect } = require('@playwright/test');

test('TodoMVC - 할 일 삭제', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  // 할 일 추가
  await page.fill('input[placeholder="What needs to be done?"]', '테스트 항목');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  // 항목 위에 마우스 올린 후 삭제 버튼 클릭
  await page.hover('[data-testid="todo-item"]');
  await page.click('button[aria-label="Delete"]');
  
  // 삭제됐는지 확인
  await expect(page.locator('[data-testid="todo-title"]')).not.toBeVisible();
});