import Layout from "../layout";
import PageHeader from "../about/components/page-header";
import Facts from "../components/facts";
import FeaturesComponent from "../components/features";

const Features = () => {
  return (
    <Layout>
      <PageHeader />
      <Facts />
      <FeaturesComponent />
    </Layout>
  );
};

export default Features;