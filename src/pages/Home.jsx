import Nav from "../components/Nav";
import "../styles/home.scss";
import bannerImg from "../assets/banner.png";
import { Link } from "react-router-dom";
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import stackoverflowImg from "../assets/stackoverflow.png";
import atImg from "../assets/at.png";
import { useEffect, useState } from "react";

export default function Home() {
  const words = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [title, setTitle] = useState("");
  const [writing, setWriting] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const write = async () => {
      await writeAndDeleteWord(words[index]);
      setIndex((i) => (i + 1 === words.length ? 0 : i + 1));
    };
    write();
  }, [index]);

  const writeAndDeleteWord = async (word) => {
    return new Promise((resolve) => {
      const writeAndDelete = (text) => {
        setTimeout(() => {
          setWriting((writing) => {
            if (writing) {
              if (text.length < word.length) {
                const newTxt = text + word[text.length];
                setTitle(newTxt);
                writeAndDelete(newTxt);
                return writing;
              } else {
                const newTxt = text.slice(0, text.length - 1);
                setTitle(newTxt);
                writeAndDelete(newTxt);
                return false;
              }
            } else {
              if (text.length > 0) {
                const newTxt = text.slice(0, text.length - 1);
                setTitle(newTxt);
                writeAndDelete(newTxt);
                return writing;
              } else {
                resolve();
                return true;
              }
            }
          });
        }, 150);
      };
      writeAndDelete("");
    });
  };

  return (
    <div className="home-page">
      <Nav />
      <main className="container">
        <section className="left">
          <span className="i-am-a">i am a</span>
          <span className="title">{title}</span>
          <p className="description">
            with 3 years of expertise crafting immersive digital experiences.
            Proficient in PHP Laravel, Python Django, and React JS, I bring
            creativity and precision to every project. Let's turn your ideas
            into captivating web realities!
          </p>
          <ul className="social-list">
            <li>
              <Link to="">
                <img src={linkedinImg} alt="linkedin logo" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={githubImg} alt="linkedin logo" />
              </Link>
            </li>
            <li className="stackoverflow">
              <Link to="">
                <img src={stackoverflowImg} alt="linkedin logo" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={atImg} alt="linkedin logo" />
              </Link>
            </li>
          </ul>
        </section>
        <section className="right">
          <img src={bannerImg} alt="laptop" />
        </section>
      </main>
    </div>
  );
}
