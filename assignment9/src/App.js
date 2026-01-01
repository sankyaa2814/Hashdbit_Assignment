import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header hero-lights">
        <div className="header__brand">
          <div className="brand__logo"></div>
          <div>
            <div className="brand__title">Sports Programs Demo</div>
            <div className="header__sub">React + JS Practice</div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container">
        <div className="grid">
          <div className="card third">
            <div className="card__head">
              <div className="card__title">Program 1</div>
            </div>
            <div className="card__body">
              <pre className="output">
{`Program 1 Output:
I am var
I am let
I am const
--------------------`}
              </pre>
            </div>
          </div>

          <div className="card third">
            <div className="card__head">
              <div className="card__title">Program 2</div>
            </div>
            <div className="card__body">
              <pre className="output">
{`Program 2 Output:
Banana
--------------------`}
              </pre>
            </div>
          </div>

          <div className="card third">
            <div className="card__head">
              <div className="card__title">Program 3</div>
            </div>
            <div className="card__body">
              <pre className="output">
{`Program 3 Output:
[1, 2, 3]
--------------------`}
              </pre>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        © 2025 Sports Demo — Built by Sanket
      </footer>
    </div>
  );
}

export default App;
