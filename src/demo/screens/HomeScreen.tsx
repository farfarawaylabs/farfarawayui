import MainContentContainer from "@/components/containers/MainContentContainer";
import CenteredFeatureWithList from "@/components/features/CenteredFeatureWithList";
import SimpleFeaturesList from "@/components/features/SimpleFeaturesList";
import MobileAppHero from "@/components/heroes/MobileAppHero";
import SimpleTestimonial from "@/components/testimonials/SimpleTestimonial";
import { ServerIcon, ShieldIcon, SmartphoneIcon } from "lucide-react";

const HomeScreen = () => {
  return (
    <MainContentContainer>
      <MobileAppHero
        title="My Amazing App"
        description="This is my amazing app. You should download it now"
        primaryButton={{ label: "Download", href: "/download" }}
        secondaryButton={{ label: "Learn More", href: "/about" }}
        announcement={{ label: "This is our special announcement", href: "/about" }}
        appImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
      />
      <SimpleTestimonial
        testimonial="This app is amazing! I use it every day and it has changed my life."
        author="John Doe"
        authorTitle="CEO"
        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <CenteredFeatureWithList
        title="The Features of My App"
        subtitle="Discover the powerful capabilities that make our app stand out"
        features={[
          {
            title: "Secure by Design",
            description:
              "Enterprise-grade security with end-to-end encryption and advanced threat protection.",
            icon: ShieldIcon,
            action: { label: "Learn more", href: "/security" },
          },
          {
            title: "Cross-Platform Support",
            description:
              "Seamlessly sync your data across all your devices - mobile, tablet, and desktop.",
            icon: SmartphoneIcon,
            action: { label: "View devices", href: "/platforms" },
          },
          {
            title: "Cloud Integration",
            description:
              "Automatic cloud backup and real-time synchronization keep your data safe and accessible.",
            icon: ServerIcon,
            action: { label: "Cloud features", href: "/cloud" },
          },
        ]}
      />
      <SimpleFeaturesList
        title="Why Choose Our App"
        subtitle="Designed with your productivity and convenience in mind"
        features={[
          {
            title: "Intuitive Interface",
            description:
              "Clean, modern design that makes navigation a breeze for users of all skill levels.",
            icon: SmartphoneIcon,
          },
          {
            title: "Real-time Updates",
            description:
              "Stay synchronized with instant notifications and live data updates across all devices.",
            icon: ServerIcon,
          },
          {
            title: "Privacy First",
            description:
              "Your data privacy is our priority, with industry-leading security measures in place.",
            icon: ShieldIcon,
          },
          {
            title: "24/7 Support",
            description:
              "Round-the-clock customer support to help you whenever you need assistance.",
            icon: ServerIcon,
          },
        ]}
      />
    </MainContentContainer>
  );
};

export default HomeScreen;
