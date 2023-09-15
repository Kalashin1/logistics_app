import Layout from "../layout";
import PageHeader from "../about/components/page-header";
import ContactForm from "./components/contact";

const Contact = () => {
  return (
    <Layout>
      <PageHeader />
      <ContactForm />
    </Layout>
  );
};

export default Contact;