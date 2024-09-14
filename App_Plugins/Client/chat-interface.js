import { i as g, n as i, h, k as l, t as d } from "./property-B8FBF_sx.js";
var u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, n = (e, t, s, r) => {
  for (var o = r > 1 ? void 0 : r ? f(t, s) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (o = (r ? p(t, s, o) : p(o)) || o);
  return r && o && u(t, s, o), o;
};
let a = class extends h {
  constructor() {
    super(), this.messages = [], this.currentMessage = "", this.username = "user", this.Gpt = "bot", this.GptMessage = "";
    const e = localStorage.getItem("chat");
    console.log(e), this.messages = e ? JSON.parse(e) : [];
  }
  render() {
    return l`
      <div class="hero-container">
        <div class="hero-background continer">
          <h2 class="hero-title">scaynet</h2>
          <h4 class="hero-sub_title">Let Me Make Your Content</h4>
          <p class="hero-paragraph">
            The new tool for your CMS page, let me help you and everything will
            be fine.
          </p>
          <a><button class="hero-button">try it</button></a>
        </div>
      </div>
      <div class="chat-container">
        <div class="messages">
          ${this.messages.map((e) => {
      if (e.role === "user")
        return l`
                <div class="message">
                  <span class="user">${e.role}:</span> ${e.content}
                </div>
              `;
      if (e.role === "bot")
        return l`
                <div class="messageGpt">
                  ${e.content}<span class="Gpt"> :${e.role}</span>
                </div>
              `;
    })}
        </div>

        <div class="input-container">
          <input
            type="text"
            .value=${this.currentMessage}
            @input=${this._onInput}
            placeholder="Type a message..."
          />
          <button @click=${this._sendMessage}>Send</button>
        </div>
      </div>
    `;
  }
  _onInput(e) {
    const t = e.target;
    this.currentMessage = t.value;
  }
  async fetchData(e) {
    console.log("estoy dentro del fetch");
    const t = { messages: e };
    try {
      const s = await fetch(
        "https://localhost:44352/umbraco/management/api/v1/chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer kIzNHctDI-RawTkWQ8t7JmEk0ogN4XTmrRu0MFcvx1E"
          },
          body: JSON.stringify(t)
        }
      );
      if (!s)
        throw new Error("Error to send the message");
      const r = await s.text();
      this.messages = [
        ...this.messages,
        {
          role: this.Gpt,
          content: r,
          timestap: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19)
        }
      ], localStorage.clear(), localStorage.setItem("chat", JSON.stringify(this.messages));
    } catch (s) {
      this.messages = [
        ...this.messages,
        {
          role: this.Gpt,
          content: s.message,
          timestap: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19)
        }
      ];
    }
  }
  _sendMessage() {
    this.messages = [
      ...this.messages,
      {
        role: this.username,
        content: this.currentMessage,
        timestap: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19)
      }
    ], this.fetchData(this.messages), localStorage.clear(), localStorage.setItem("chat", JSON.stringify(this.messages)), this.currentMessage = "";
  }
};
a.styles = g`
    :host {
      color: rgba(255, 255, 255, 0.87);
      display: flex;
      width: 100%;
      font-family: Arial, sans-serif;
      justify-content: center;
    }

    .hero-container {
      width: 100%;
      position: absolute;
      display: flex;
      top: 0px;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
    }

    .hero-container {
      width: 100%;
      position: absolute;
      display: flex;
      top: 0px;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      background: linear-gradient(
        45deg,
        #ff552a,
        #eeba92,
        #ff7eb9,
        #f7e096,
        #a8edea,
        #2575fc,
        #6a11cb,
        #b92b27
      );
      background-size: 200% 200%;
      animation: gradientAnimation 8s ease-in-out infinite;
    }

    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      25% {
        background-position: 50% 100%;
      }
      50% {
        background-position: 100% 50%;
      }
      75% {
        background-position: 50% 0%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .hero-title {
      text-transform: uppercase;
      color: white;
      font-size: 2rem;
      margin: 10px;
      font-family: sans-serif;
    }

    .hero-button {
      width: 40%;
      height: 35%;
      background: rgba(255, 255, 255, 0.31);
      border-radius: 3px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9.2px);
      -webkit-backdrop-filter: blur(9.2px);
    }

    .hero-button :hover {
      cursor: none;
      transform: scale(1.1);
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }

    .chat-container {
      justify-content: center;
      margin: 10px;
      margin-top: 200px;
      width: 95%;
      max-width: 100%;
      padding: 10px;
      background-color: #383737;
    }

    .messages {
      height: 500px;
      overflow-y: auto;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
    }

    .message {
      padding: 5px 0;
    }
    .messageGpt {
      padding: 5px 0;
      margin-right: 20px;
      display: flex;
      justify-content: flex-end;
    }

    .messageGpt .Gpt {
      font-weight: bold;
    }

    .message .user {
      font-weight: bold;
    }

    .input-container {
      display: flex;
    }

    input[type="text"] {
      border: none;
      flex: 1;
      padding: 5px;
      background-color: #cacaca;
      color: #292929;
    }

    button {
      padding: 5px 10px;
      border: none;
      background-color: #68acf5;
      color: black;
      cursor: pointer;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    button:hover {
      transform: scale(1.1);
    }
  `;
n([
  i({ type: Array })
], a.prototype, "messages", 2);
n([
  i({ type: String })
], a.prototype, "currentMessage", 2);
n([
  i({ type: String })
], a.prototype, "username", 2);
n([
  i({ type: String })
], a.prototype, "Gpt", 2);
n([
  i({ type: String })
], a.prototype, "GptMessage", 2);
a = n([
  d("chat-interface")
], a);
//# sourceMappingURL=chat-interface.js.map
