const { test, expect } = require('@playwright/test');

test('TodoMVC - 할 일 추가', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  await page.fill('input[placeholder="What needs to be done?"]', '일본어 공부');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  await expect(page.locator('[data-testid="todo-title"]')).toContainText('일본어 공부');
});