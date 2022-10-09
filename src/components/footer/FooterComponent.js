import React from 'react';

const FooterComponent = () => {
    return(
        <footer class="footer">
            <div class="container">
                <div class="flex-footer">
                    <div class="footer-text">© 2022 Naked Whey, LLC</div>
                    <a href="#" class="footer-link">Privacy Policy</a>
                    <a href="#" class="footer-link">Terms & Conditions</a>
                    <a href="#" class="footer-link">Return & Refund Policy</a>
                    <a href="#" class="footer-link">Accessibility</a>
                </div>
                <p class="footer-small">*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p>
            </div>
        </footer>
    )
}

export default FooterComponent;