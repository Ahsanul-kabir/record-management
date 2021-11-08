import React from 'react';

const About = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }
    const textStyle = {
        textAlign : "justify",
        textJustify: "inter-word"

    }
    return (
        <div style={containerStyle} className="row container-fluid">
            <div className="col-md-2">

            </div>

            <div className="col-md-10">
                <div className='p-3'>

                    <div class="card">
                        <div class="card-header">
                            About Us
                        </div>
                        <div class="card-body">
                            <div class="mb-0">
                                <p style={textStyle}>We are an iconic medical, health, and personal care entity, chosen and trusted by customers for authentic quality-controlled products and services at affordable prices. We started our journey on 5th June 2021 and from that day on we started serving our customers with utmost sincerity. Care-Box always sets the standards in the health, wellness, and beauty market, providing personalized advice in health and personal care on top of its market-leading product ranges. Making customers healthy, look good, and great every day.


                                    To ensure the best possible customer service trained pharmacists are on hand to give professional advice and consultation to customers. We are also launching an E-Commerce solution embedded with all types of payment methods available in Bangladesh for our consumers to make their life more convenient through an outstanding e-shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;