import { i as d, n as c, h, k as f, t as p } from "./property-B8FBF_sx.js";
var u = Object.defineProperty, b = Object.getOwnPropertyDescriptor, s = (l, t, i, r) => {
  for (var e = r > 1 ? void 0 : r ? b(t, i) : t, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (e = (r ? a(t, i, e) : a(e)) || e);
  return r && e && u(t, i, e), e;
};
let o = class extends h {
  constructor() {
    super(...arguments), this.opts = {
      disableCache: !0
    }, this.docsHint = "Click on the Vite and Lit logos to learn more", this.count = 0;
  }
  render() {
    return f`
      <uui-box headline="Headline" headline-variant="h5">
        <p>Some content of this box, appended in the default slot.</p>
        <p>The headline is currently rendered as a h5.</p>
      </uui-box>
    `;
  }
};
o.styles = d`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
s([
  c()
], o.prototype, "docsHint", 2);
s([
  c({ type: Number })
], o.prototype, "count", 2);
o = s([
  p("ia-chatbot")
], o);
export {
  o as IAChatbot
};
//# sourceMappingURL=ia-chatbot.js.map
