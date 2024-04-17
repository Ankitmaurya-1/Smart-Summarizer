import { logo } from "../assets";
function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center  w-full mb-10 pt-3">
        <img
          className="w-28 object-contain"
          src={logo}
          alt="smart summrizer logo"
        />

        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open("https://github.com/Ankitmaurya-1/Smart-Summarizer")
          }
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize your articles Smartly with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Smart-Summraizer, an open source article
        summarizer that transforms lengthy articles into clear and concise
        summaries
      </h2>
    </header>
  );
}

export default Hero;
