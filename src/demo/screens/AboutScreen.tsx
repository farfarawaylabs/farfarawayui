import { GradiantContainer } from "@/components/containers/GradiantContainer";
import MainContentContainer from "@/components/containers/MainContentContainer";
import { TimelineView } from "@/components/misc/TimelineView";
import { GradiantAppearText } from "@/components/typography/GradiantAppearText";
import { Card } from "@/components/ui/card";

const data: Array<{ title: string; content: React.ReactNode }> = [
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Launched the next generation of our platform with revolutionary AI features and enhanced
          user experience. Reached 100k active users milestone.
        </p>
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI Visualization"
          className="rounded-lg w-full max-w-2xl object-cover h-64"
        />
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Secured Series A funding and expanded our team to 50+ talented individuals. Released
          mobile applications for iOS and Android.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b"
            alt="Team Meeting"
            className="rounded-lg w-full object-cover h-48"
          />
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            alt="Mobile Development"
            className="rounded-lg w-full object-cover h-48"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Beta launch of our core product. Onboarded first 1,000 early adopters. Won "Most
          Innovative Startup" award at TechCrunch Disrupt.
        </p>
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
          alt="Launch Event"
          className="rounded-lg w-full max-w-2xl object-cover h-64"
        />
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <p className="text-neutral-700 dark:text-neutral-300">
        Initial prototype development began. Assembled founding team of 5 engineers. Successfully
        raised seed funding from top-tier investors.
      </p>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Company founded with a vision to revolutionize the industry. First line of code written in
          a small garage office.
        </p>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Startup Beginnings"
          className="rounded-lg w-full max-w-2xl object-cover h-64"
        />
      </div>
    ),
  },
];

const AboutScreen = () => {
  return (
    <MainContentContainer>
      <GradiantAppearText
        words="Building the future of technology, one line of code at a time. From a small garage startup to an industry leader, our journey has been driven by innovation, passion, and the relentless pursuit of excellence. Together with our amazing team and community, we're reshaping what's possible in the digital landscape."
        className="text-2xl"
      />

      <TimelineView
        items={data}
        title="Building the future of technology, one line of code at a time."
        description="From a small garage startup to an industry leader, our journey has been driven by innovation, passion, and the relentless pursuit of excellence. Together with our amazing team and community, we're reshaping what's possible in the digital landscape."
      />

      <div className="w-96 h-96">
        <br />
        <br />
        <br />
        <GradiantContainer>
          <Card className="p-4 h-96">
            <h2 className="text-lg font-bold">Demo Card</h2>
            <p>This is a demo card with some sample data.</p>
          </Card>
        </GradiantContainer>
      </div>
    </MainContentContainer>
  );
};

export default AboutScreen;
