const { test, expect } = require('@playwright/test');

test('TodoMVC - 빈 값 입력 시 추가 안 됨', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  const input = page.locator('input[placeholder="What needs to be done?"]');
  
  // 빈 값 그대로 엔터
  await input.press('Enter');
  
  // 할 일이 추가되지 않았는지 확인 (목록에 아무것도 없어야 함)
  const todos = page.locator('[data-testid="todo-title"]');
  await expect(todos).toHaveCount(0);
});