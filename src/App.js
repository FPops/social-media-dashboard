import Header from "./components/Header";
import Followersf from "./components/Followers";
import Overview from "./components/Overview";
import Followers from "./components/Followers";

function App() {
  return (
    <>
    <div className="bg-slate-100 dark:bg-slate-800 h-52 w-full absolute top-0 left-0 rounded-b-3xl"
    style={{
      zIndex: 0,
    }}></div>

      <section className="p-8 dark:bg-slate-900 h-full lg:h-screen">
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  );
}

export default App;
