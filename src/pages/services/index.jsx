import Layout from "../layout";
import PageHeader from "../about/components/page-header";
import ServicesComponent from "../components/services";
import Testimonial from "../components/testimonial";

const Services = () => {
  return (
    <Layout>
      <PageHeader />
      <ServicesComponent />
      <Testimonial />
    </Layout>
  );
};

export default Services;