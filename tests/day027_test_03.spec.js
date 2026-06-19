const { test, expect } = require('@playwright/test');

test('TodoMVC - 할 일 목록 개수 확인', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  // 할 일 3개 추가
  await page.fill('input[placeholder="What needs to be done?"]', '항목1');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  await page.fill('input[placeholder="What needs to be done?"]', '항목2');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  await page.fill('input[placeholder="What needs to be done?"]', '항목3');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  // 항목이 3개 있는지 확인
  const todos = page.locator('[data-testid="todo-title"]');
  await expect(todos).toHaveCount(3);
});