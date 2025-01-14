import EmailAndSocialSignUpForm from "@/components/auth/EmailAndSocialSignUpForm";
import MainContentContainer from "@/components/containers/MainContentContainer";
import { signInWithEmail, signInWithGithub, signInWithGoogle } from "../state/authState";

const SignupScreen = () => {
  return (
    <MainContentContainer>
      <EmailAndSocialSignUpForm
        onSubmitEmail={(email: string) => {
          signInWithEmail(email);
        }}
        onGoogleSignIn={() => {
          signInWithGoogle();
        }}
        onGithubSignIn={() => {
          signInWithGithub();
        }}
      />
    </MainContentContainer>
  );
};

export default SignupScreen;
