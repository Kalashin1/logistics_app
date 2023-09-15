import Layout from "../layout";
import PageHeader from "./components/page-header";
import AboutComponet from "../components/about";
import Facts from "../components/facts";
import Features from "../components/features";
import Team from "../components/team";

const About = () => {
  return (
    <Layout>
      <PageHeader />
      <AboutComponet />
      <Facts />
      <Features />
      <Team />
    </Layout>
  );
};

export default About;