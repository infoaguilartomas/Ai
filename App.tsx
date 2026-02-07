import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { Ethics } from './components/Ethics';
import { TargetAudience } from './components/TargetAudience';
import { Workflow } from './components/Workflow';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white text-navy">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Gallery />
        <Benefits />
        <Ethics />
        <TargetAudience />
        <Workflow />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
