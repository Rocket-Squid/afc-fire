import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import ServicesSidebar from "@/components/sections/ServicesSidebar";

export default function FireExtinguishers() {
  return (
    <>
      <Layout breadcrumbTitle="Fire Extinguishers">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img
                        src="/assets/img/services/img_extinguishers_wide.jpg"
                        alt=""
                      />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">
                        Fire Risk Assessments are a legal requirement
                      </h2>

                      <p>
                        A <strong>Fire Extinguisher</strong> from{" "}
                        <strong class="red">AFC Fire & Security Ltd</strong>{" "}
                        will provide you with the confidence that you are
                        compliant, we can provide the following in accordance
                        with BS5306;
                      </p>
                      <ul>
                        <li>
                          <strong class="red">CO2:</strong> CO2 extinguishers
                          are ideal for fires involving electrical equipment
                          such as in the office, as they won’t harm PC’s,
                          monitors, or electrical cabling and they leave no
                          residue behind after use.
                        </li>
                        <br />
                        <li>
                          <strong class="red">Water:</strong> Standard water
                          extinguishers are designed to deal with Class A fires
                          only. They’re a cheaper option that can deal with
                          common fires such as those that have taken hold on
                          wood, paper and textiles.
                        </li>
                        <br />
                        <li>
                          <strong class="red">Water Additive:</strong> Water
                          Additive extinguishers are similar to the traditional
                          water extinguishers, designed to tackle Class A fires,
                          however the chemical additives make these
                          extinguishers much more effective when used and
                          therefore come with a higher fire rating.
                        </li>
                        <br />
                        <li>
                          <strong class="red">AFFF Foam:</strong> AFFF Foam
                          extinguishers are a very effective option for both A
                          and B class fires, which makes them a good option for
                          many different environments.
                        </li>
                        <br />
                        <li>
                          <strong class="red">Dry Powder:</strong> Dry Powder
                          extinguishers are another very versatile type, being
                          effective on all but Class F. They’re often known as
                          ABC Powder extinguishers because they’re widely used
                          on Class A, B and C.
                        </li>
                        <br />
                        <li>
                          <strong class="red">Wet Chemical:</strong> Wet
                          chemical extinguishers are often found in commercial
                          kitchens, as they are designed almost exclusively for
                          use on cooking oils and fats such as those found in
                          deep fat fryers (F Class).
                        </li>
                        <br />
                      </ul>

                      <hr />
                      <h2 className="title-two">
                        We Hope You Find What You are Looking for
                      </h2>
                      <p>
                        To order <strong>Fire Extinguishers</strong> with{" "}
                        <strong class="red">AFC Fire & Security</strong>, simply
                        call <a href="tel:02031434754">0203-143-4754</a>, or{" "}
                        <a href="tel:+447771366942">0777-1366-942</a>, or click
                        on the Get In Touch button below, and leave the rest to
                        us!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <ServicesSidebar />
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}
