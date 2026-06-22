const { test, expect } = require('@playwright/test');

test('TodoMVC - 완료된 항목 텍스트 스타일', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  
  // 할 일 추가
  await page.fill('input[placeholder="What needs to be done?"]', '일본어 공부');
  await page.press('input[placeholder="What needs to be done?"]', 'Enter');
  
  // 체크박스 클릭
  await page.click('input[type="checkbox"]');
  
  // 완료된 항목이 "completed" 클래스를 가지는지 확인
  const completedItem = page.locator('[data-testid="todo-item"]').first();
  await expect(completedItem).toHaveClass(/completed/);
});