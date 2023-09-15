import Layout from "../layout";
import PageHeader from "../about/components/page-header";
import QuoteComponent from "../components/quote";

const Quote = () => {
  return (
    <Layout>
      <PageHeader />
      <QuoteComponent />
    </Layout>
  );
};

export default Quote;