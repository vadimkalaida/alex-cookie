import React from 'react';

const FaqComponent = () => {
    return(
        <section className="faq-section">
            <div className="container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div>
                    <div className="faq-line"></div>
                    <h3 className="title-faq">Do Naked Cookies contain artificial sweetener?</h3>
                    <p className="text-faq">Naked Cookies do not contain any artificial flavors, sweeteners, or colors. All of the ingredients have been carefully selected to maintain quality nutrition while maintaining an indulgent taste. Our Naked approach has allowed us to develop a protein cookie that is both nutritious and delicious, with absolutely no hidden extras.</p>
                </div>
                <div>
                    <div className="faq-line"></div>
                    <h3 className="title-faq">Are Naked Cookies ok for people with nut allergies?</h3>
                    <p className="text-faq">No. All Naked Cookies contain almond butter and almond flour, both derived directly from almonds. Therefore, we do not suggest using the product if you suffer from a nut allergy.</p>
                </div>
                <div>
                    <div className="faq-line"></div>
                    <h3 className="title-faq">How many cookies are in each box?</h3>
                    <p className="text-faq">In each box, you’ll receive 12 delicious, nutrition-packed Naked Cookies.</p>
                </div>
                <div>
                    <div className="faq-line"></div>
                    <h3 className="title-faq">Who is this product recommended for?</h3>
                    <p className="text-faq">Whether you’re an athlete, a fitness fanatic, or you’re simply trying to look after your body, Chocolate Chip Naked Cookies are the perfect go-to snack option. Packed full of high quality nutrition with nothing artificial, our protein cookies are convenient, delicious snacks to boost your daily nutritional intake.</p>
                </div>
                <div>
                    <div className="faq-line"></div>
                </div>
                <div>
                    <a href="#orderMain" className="satisfy-button">YES! SATISFY MY SWEET TOOTH! </a>
                </div>
            </div>
        </section>
    )
};

export default FaqComponent;