from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:5174")
    page.wait_for_timeout(1000)

    # 1. Verify Hero and Navbar
    page.screenshot(path="/home/jules/verification/screenshots/hero_modern.png")
    page.wait_for_timeout(500)

    # 2. Scroll to Services and hover over one to check color transition
    services_section = page.locator("#services")
    services_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Hover over the first service card
    service_card = page.locator("#service-unterhalt")
    service_card.hover()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/service_hover.png")

    # 3. Scroll to About section
    about_section = page.locator("#about")
    about_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/about_modern.png")

    # 4. Scroll to Contact section
    contact_section = page.locator("#contact")
    contact_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/contact_modern.png")

    # Final overview screenshot
    page.screenshot(path="/home/jules/verification/screenshots/verification_final.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
