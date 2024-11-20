"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";
import { seopackages } from "@/utils/03utilHomeTab";

const OurSeoPackages = () => {
  return (
    <section className="webguruz-packages-seo py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center heading-main">
            <h2 className="packages-title-seo">
            Our Tailored SEO Packages <span>Start from $300</span> 
            </h2>
          </div>
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="experts" id="uncontrolled-example">
              <div className="row">
                {/* Left column for tabs */}
                <div className="col-md-4 tab-sidebar">
                  <Nav variant="pills" className="flex-column">
                    {seopackages.map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                {/* Right column for content */}
                <div className="col-md-8 package-phases">
                  <Tab.Content>
                    <div className="seo-package-headings">
                      <h4 className="packages-title-seo">
                        Deliverables <span>PLAN</span>
                      </h4>
                    </div>
                    <div className="packages-heading-two">
                      <h5>
                        On Page & OFF Page SEO Optimization
                      </h5>
                    </div>
                    {seopackages.map((tab) => (
                      <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        <div
                          className="packages-content"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                  <div className="col-sm-12 col-xs-12 text-center">
                    <form
                      id="payform"
                      className="package-form-box"
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                      data-gtm-form-interact-id={0}
                    >
                      <input
                        type="hidden"
                        name="on0"
                        defaultValue="businessname"
                      />
                      <input
                        type="hidden"
                        name="on1"
                        defaultValue="businessurl"
                      />
                      <input
                        type="hidden"
                        name="business"
                        defaultValue="info@webguruz.in"
                      />
                      <input
                        type="hidden"
                        name="item_name"
                        className="itemname"
                        defaultValue="Starter"
                      />
                      <input
                        type="hidden"
                        name="item_number"
                        defaultValue={16873}
                      />
                      <input
                        type="hidden"
                        name="amount"
                        className="itemprice"
                        defaultValue={300}
                      />
                      <input
                        type="hidden"
                        name="no_shipping"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        name="currency_code"
                        defaultValue="USD"
                      />
                      <input
                        type="hidden"
                        name="notify_url"
                        defaultValue="https://api.webguruz.in/notify.php"
                      />
                      <input
                        type="hidden"
                        name="cancel_return"
                        defaultValue="https://webguruz.in"
                      />
                      <input
                        type="hidden"
                        name="return"
                        defaultValue="https://webguruz.in/payment-recieved"
                      />
                      <input type="hidden" name="cmd" defaultValue="_xclick" />
                      <input
                        className="purchase-btn explore-btn"
                        name="Buy Package!"
                        value="Buy Package!"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSeoPackages;
