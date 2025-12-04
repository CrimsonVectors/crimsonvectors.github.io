document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 自动更新 Footer 的年份
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 移动端菜单切换 (Burger Menu)
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');

    if(burger && mobileNav) {
        burger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            
            // 简单的汉堡图标动画（可选）
            burger.classList.toggle('toggle');
        });
    }

    // 3. 点击移动端菜单链接后自动关闭菜单
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
});