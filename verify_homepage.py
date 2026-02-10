from playwright.sync_api import sync_playwright
import time

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to homepage...")
            page.goto("http://localhost:3000")
            print("Waiting for network idle...")
            page.wait_for_load_state("networkidle")

            # Wait for preloader to finish (approx 3-4 seconds based on GSAP timeline)
            print("Waiting for preloader to finish...")
            time.sleep(5)

            # Take a screenshot of the top
            print("Taking screenshot of top...")
            page.screenshot(path="verification_homepage_after_load.png")

            # Tab to skip link and take screenshot
            print("Pressing Tab to focus skip link...")
            page.keyboard.press("Tab")
            time.sleep(0.5) # Wait for focus style
            page.screenshot(path="verification_skiplink.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
