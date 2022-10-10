import React from 'react';

const FooterComponent = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="flex-footer">
                    <div className="footer-text">© 2022 Naked Whey, LLC</div>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms & Conditions</a>
                    <a href="#" className="footer-link">Return & Refund Policy</a>
                    <a href="#" className="footer-link">Accessibility</a>
                </div>
                <p className="footer-small">*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p>
            </div>
        </footer>
    )
};

export default FooterComponent;