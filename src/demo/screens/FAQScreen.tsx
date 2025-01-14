import MainContentContainer from "@/components/containers/MainContentContainer";
import SimpleFAQ from "@/components/faqs/SimpleFAQ";
import SimpleOpenedFAQ from "@/components/faqs/SimpleOpenedFAQ";

const FAQScreen = () => {
  return (
    <MainContentContainer>
      <SimpleFAQ
        title="Common Questions"
        faqs={[
          {
            question: "What is Tailwind CSS?",
            answer:
              "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It allows for rapid UI development without leaving your HTML.",
          },
          {
            question: "How do I get started with React?",
            answer:
              "To get started with React, you'll need Node.js installed. Then you can create a new project using Create React App or Vite. We recommend following the official React documentation and starting with their tutorial.",
          },
          {
            question: "What are React hooks?",
            answer:
              "React hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState for managing state, useEffect for side effects, and useContext for consuming context.",
          },
        ]}
      />
      <SimpleOpenedFAQ
        title="Technical Support"
        faqs={[
          {
            question: "How do I install project dependencies?",
            answer:
              "Run 'npm install' or 'yarn install' in your project directory to install all dependencies listed in your package.json file.",
          },
          {
            question: "How do I run the development server?",
            answer:
              "Use the command 'npm run dev' or 'yarn dev' to start the development server. This will typically run on localhost:3000 or another available port.",
          },
          {
            question: "How do I build for production?",
            answer:
              "Run 'npm run build' or 'yarn build' to create an optimized production build of your application. The output will be in the 'dist' or 'build' directory.",
          },
        ]}
      />
    </MainContentContainer>
  );
};

export default FAQScreen;
