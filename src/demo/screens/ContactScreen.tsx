import MainContentContainer from "@/components/containers/MainContentContainer";
import SimpleContactForm from "@/components/contact/SimpleContactForm";
const ContactScreen = () => {
  return (
    <MainContentContainer>
      <SimpleContactForm
        title="Contact Us"
        subtitle="We would love to hear from you"
        onSubmit={() => {}}
      />
    </MainContentContainer>
  );
};

export default ContactScreen;
