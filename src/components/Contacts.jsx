import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { token, chat_id } from "../bot";


const Contacts = React.memo(function Contacts({ className, lang }) {
  const [a, setA] = React.useState(null);
  const [b, setB] = React.useState(null);
  const [name, setName] = React.useState("");
  const history = useHistory();
  const [message, setMessage] = React.useState("");
  const [captPassed, setCapt] = React.useState(false);

  React.useEffect(() => {
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleChangeCapt = (e) => {
    if (a + b === +e.target.value) {
      setCapt(true);
    } else {
      setCapt(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captPassed) {
      let text = `Отправил: *${name}*
      Текст: *${message}*
      Дата: *${new Date()}* `;
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=markdown`;
      axios
        .get(url)
        .then((response) => {
          history.go(0);
        })
        .catch((error) => {
          history.go(0);
        });
    }
  };
  return (
    <section id="contacts" className={`section  ${className ? className : ""}`}>
      <h5 className="section-title">
        <svg
          id="svg2"
          className="section-svg"
          width="100"
          height="16"
          viewBox="0 0 100 16"
        >
          <defs>
            <clipPath id="b5">
              <rect width="100" height="16" />
            </clipPath>
          </defs>
          <g id="a" clipPath="url(#b5)">
            <path
              d="M861,2550.928l11.181-11.181,11.181,11.181,11.181-11.181,11.181,11.181,11.181-11.181,11.181,11.181"
              transform="translate(945.021 2553.5) rotate(180)"
              fill="none"
              stroke="#0fa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </g>
        </svg>
        {lang === "en" && <span className="text-neon">contacts</span>}
        {lang === "ru" && <span className="text-neon">контакты</span>}
      </h5>
      <div className="section-content contact-content container">
        {lang === "en" && <div className="section-subtitle">feedback</div>}
        {lang === "ru" && (
          <div className="section-subtitle">обратная связь</div>
        )}
        <form onSubmit={handleSubmit} className="form">
          {lang === "en" && (
            <>
              <input
                type="text"
                autoComplete="off"
                name="name"
                className="form-control"
                placeholder="Your name or telegram*"
                onChange={handleChangeName}
                required
              />
              <textarea
                name="message"
                autoComplete="off"
                id="message"
                className="form-control"
                placeholder="Your text*"
                onChange={handleChangeMessage}
                required
              ></textarea>
              <input
                type="text"
                autoComplete="off"
                name="capt"
                className="form-control"
                placeholder={`${a}+${b}=?*`}
                onChange={handleChangeCapt}
                required
              />
            </>
          )}
          {lang === "ru" && (
            <>
              <input
                type="text"
                autoComplete="off"
                name="name"
                className="form-control"
                placeholder="Ваше имя или телеграм*"
                onChange={handleChangeName}
                required
              />
              <textarea
                name="message"
                autoComplete="off"
                id="message"
                className="form-control"
                placeholder="Ваше сообщение*"
                onChange={handleChangeMessage}
                required
              ></textarea>
              <input
                type="text"
                autoComplete="off"
                name="capt"
                className="form-control"
                placeholder={`${a}+${b}=?*`}
                onChange={handleChangeCapt}
                required
              />
            </>
          )}

          <div className="form-tooltip">
            {a} + {b} =
          </div>
          <button type="submit" className="btn btn-contacts">
            {lang === "en" && <>SEND</>}
            {lang === "ru" && <>ОТПРАВИТЬ</>}
          </button>
          <div className="row contacts-icon justify-content-between pt-3">
            <Link to="#" className="contacts-icon-link" title="Telegram">
              <i className="fab fa-telegram"></i>
            </Link>
            <Link to="#" className="contacts-icon-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="contacts-icon-link" title="Codepen">
              <i className="fab fa-codepen"></i>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contacts;
