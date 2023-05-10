import Banner from '@/components/Banner';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integration from '@/components/Integration';
import Navbar from '@/components/Navbar';
import Planning from '@/components/Planning';
import SetupMinute from '@/components/SetupMinute';
import Sponsors from '@/components/Sponsors';
import Subscribe from '@/components/Subscribe';
import Support from '@/components/Support';
import Time from '@/components/Time';
import Visualize from '@/components/Visualize';

export default function Home() {
  return (
    <div className='font-main'>
      <div className='relative min-h-screen w-full bg-hero'>
        <div className='relative min-h-screen flex flex-col justify-center items-center'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Sponsors />
      <Planning />
      <Feature />
      <SetupMinute />
      <Integration />
      <Time />
      <Visualize />
      <Support />
      <Subscribe />
      <Footer />
    </div>
  );
}
