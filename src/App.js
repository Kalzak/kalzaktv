import './App.css';

import avatarGif from "./assets/avatar_static_loop.gif";
import contacts from "./data/contacts.json";
import staticVideo from "./assets/static.mp4";

function App() {
  return (

    <div className="w-full h-[calc(100dvh)] bg-tvwhite-0 flex justify-center items-center">

    
      <video position="absolute" autoplay="autoplay" muted="muted" loop="loop" style={{ width: "100vw", height: "100vh", opacity: "30%", position: "absolute", zIndex: "-1", filter: "invert(1)", objectFit: "cover" }}>
        <source src={staticVideo} type="video/mp4" />
      </video>

      <div className="max-w-2xl mx-auto flex flex-col gap-2 sm:gap-5">

        <div className="h-40 w-40 sm:h-56 sm:w-56 mx-auto">
          <div className="aspect-w-1 aspect-h-1">
            <img src={avatarGif} className="rounded-full object-cover object-center border-4 border-black" />
          </div>
        </div>

        <div className="text-center sm:p-3">
          <h1 className="text-4xl font-bold">Kalzak</h1>
          <p className="text-2xl sm:mt-3">
            Security Researcher
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-10">
          {contacts.map(({ text, username, link, color, textcolor }, index) => {
            console.log(index, text, username, link, color, textcolor);

            let target = "_blank";
            if (link == "#") {
              target = "";
              link = `javascript:alert(\"${text} doesn't support url invites, add me directly\")`;
            }

            return (
              <a href={link} key={index} target={target}>
                <div className={`w-80 sm:w-96 mx-auto ${color} 
                text-center text-xl font-bold py-2.5 sm:py-3
                border-2 border-black
                shadow-custom hover:shadow-none transition-all
                hover:translate-x-1 hover:translate-y-1`}>
                  <h1>{text}: {username}</h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default App;
