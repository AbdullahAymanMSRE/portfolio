import { ReactComponent as BannerSvg } from "../assets/svg/banner.svg";
import { Link } from "react-router-dom";
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import stackoverflowImg from "../assets/stackoverflow.png";
import atImg from "../assets/at.png";
import upworkLogo from "../assets/svg/upwork.svg";
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function MainPage() {
  const words = [
    "Backend Developer",
    "Frontend Developer",
    "Laravel Developer",
    "React Developer",
    "Fullstack Developer",
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
        }, 100);
      };
      writeAndDelete("");
    });
  };
  return (
    <div className="main page">
      <section className="right">
        <BannerSvg />
      </section>
      <section className="left">
        <span className="i-am-a">i am a</span>
        <span className="title">{title}</span>
        <p className="description">
          with 3 years of expertise crafting immersive digital experiences.
          Proficient in PHP Laravel, Python Django, and React JS, I bring
          creativity and precision to every project. Let's turn your ideas into
          captivating web realities!
        </p>
        <ul className="social-list">
          <li>
            <Link
              to="https://www.linkedin.com/in/abdullah-
ayman-2798a91ab/"
            >
              <img src={linkedinImg} alt="linkedin logo" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/AbdullahAymanMSRE">
              <img src={githubImg} alt="github logo" />
            </Link>
          </li>
          <li className="stackoverflow">
            <Link to="https://stackoverflow.com/users/22522913/abdullah-ayman">
              <img src={stackoverflowImg} alt="stackoverflow logo" />
            </Link>
          </li>
          <li>
            <Link to="mailto:abdullahaymanmsre@gmail.com">
              <img src={atImg} alt="email logo" />
            </Link>
          </li>
          <li>
            <Link to="https://www.upwork.com/freelancers/~016104954171b1b55c">
              <img src={upworkLogo} alt="upwork logo" />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
