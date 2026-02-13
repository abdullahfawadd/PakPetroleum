from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for preloader to finish (memory says 6000ms)
            print("Waiting for preloader...")
            page.wait_for_timeout(7000)

            print("Taking initial screenshot")
            page.screenshot(path="initial.png")

            # Scroll down
            print("Scrolling down...")
            page.evaluate("window.scrollTo(0, 1000)")
            page.wait_for_timeout(1000) # Wait for smooth scroll (Lenis takes time)

            print("Taking scrolled screenshot")
            page.screenshot(path="scrolled.png")

            # Scroll more
            page.evaluate("window.scrollTo(0, 2000)")
            page.wait_for_timeout(1000)

            print("Taking another screenshot")
            page.screenshot(path="scrolled_more.png")

            print("Verification successful")
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
