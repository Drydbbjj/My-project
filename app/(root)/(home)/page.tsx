import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-center items-center text-center max-md:px-5 lg:p-11">
          <h1 className="text-4xl font-extrabold lg:text-6xl">Virtual Collaboration Platform</h1>
          <p className="mt-4 text-lg font-medium text-sky-1 lg:text-2xl">
            
            Great things happen when people come together.
          </p>
          <div className="mt-6">
            <h2 className="text-3xl font-bold">{time}</h2>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
