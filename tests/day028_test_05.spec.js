const { test, expect } = require('@playwright/test');

test('TodoMVC - 할 일 추가 후 입력칸 초기화', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  // 첫 번째 할 일 추가
  const input = page.locator('input[placeholder="What needs to be done?"]');
  await input.fill('첫 번째 항목');
  await input.press('Enter');
  
  // 입력칸이 비워졌는지 확인
  await expect(input).toHaveValue('');
  
  // 두 번째 할 일 추가
  await input.fill('두 번째 항목');
  await input.press('Enter');
  
  // 입력칸이 다시 비워졌는지 확인
  await expect(input).toHaveValue('');
});