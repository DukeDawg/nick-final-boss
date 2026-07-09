"use client";

import { useState } from "react";

const faces = [
  { face: "ಠ_ಠ", label: "The ‘Who Said That?’ Face" },
  { face: "(ง •̀_•́)ง", label: "Minor Inconvenience: Final Form" },
  { face: "ಠ益ಠ", label: "Somebody Touched the Thermostat" },
  { face: "(¬_¬)", label: "Reading Your Text. Not Replying." },
  { face: "ʕಠᴥಠʔ", label: "The Head Unit Was an Investment" },
];

const roastFiles = [
  {
    number: "01",
    arc: "THE SMEDIUM SAGA",
    title: "Attack on Personal Space",
    body: "Nick does not wear shirts. He enters into legally binding compression agreements with them. Every seam is giving 110%. Every button has seen things.",
    stamp: "SHIRT TENSION: 9,001",
  },
  {
    number: "02",
    arc: "THE FORBIDDEN PHRASE",
    title: "You Look Small Today",
    body: "Four harmless words. One twelve-episode tournament arc. Say them once and Nick starts powering up like the parking lot depends on it.",
    stamp: "EGO ARMOR: CRITICAL",
  },
  {
    number: "03",
    arc: "THE UNREAD MESSAGE TECHNIQUE",
    title: "Online. Active. Missing.",
    body: "The phone is in his hand. The screen is on. He has checked it fourteen times. Your text remains untouched like an ancient side quest nobody accepted.",
    stamp: "REPLY SPEED: 0 MPH",
  },
  {
    number: "04",
    arc: "THE HEAD UNIT ARC",
    title: "Master of Saving Money",
    body: "Nick can deliver a forty-minute sermon on financial discipline, then install a new head unit in his car because apparently Bluetooth is part of the emergency fund.",
    stamp: "BUDGET LOGIC: CINEMATIC",
  },
  {
    number: "05",
    arc: "THE FACE ACADEMY",
    title: "Every Emotion Has DLC",
    body: "Most people have six facial expressions. Nick has an expansion pack. Confused Nick, irritated Nick, fake-calm Nick, and the legendary face that means somebody is about to get a speech.",
    stamp: "EXPRESSIONS: UNPATCHED",
  },
];

export default function Home() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [battleMode, setBattleMode] = useState(false);

  const nextFace = () => {
    setFaceIndex((current) => (current + 1) % faces.length);
  };

  return (
    <main className={battleMode ? "battle-mode" : ""}>
      <div className="grain" aria-hidden="true" />
      <nav className="topbar" aria-label="Case file navigation">
        <a className="brand" href="#top" aria-label="Nick final boss home">
          NICK<span>//</span>FINAL BOSS
        </a>
        <div className="case-number">CASE FILE 00-NK</div>
      </nav>

      <section className="hero" id="top">
        <div className="speed-lines" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">AN UNAUTHORIZED ANIME EVENT</div>
          <h1>
            NICK:
            <span>THE FINAL BOSS</span>
            <em>OF MINOR INCONVENIENCES</em>
          </h1>
          <p className="hero-deck">
            He preaches savings. He buys car audio. He lives on his phone.
            He replies to no one. And whatever you do—do not tell him he
            looks small.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#roast-files">
              ENTER THE ROAST ARC
            </a>
            <button
              className="danger-button"
              type="button"
              onClick={() => setBattleMode((active) => !active)}
              aria-pressed={battleMode}
            >
              {battleMode ? "ABORT THE PHRASE" : "SAY HE LOOKS SMALL"}
            </button>
          </div>
          <div className="warning-strip">
            <span>WARNING</span>
            Prolonged exposure may result in a lecture, a crazy face, or both.
          </div>
        </div>

        <div className="boss-card" aria-label="Nick character statistics">
          <div className="boss-card-head">
            <span>SUBJECT: NICK</span>
            <span>THREAT: LOUD</span>
          </div>
          <div className="character-stage" aria-hidden="true">
            <div className="aura aura-one" />
            <div className="aura aura-two" />
            <div className="phone">▰</div>
            <div className="character">
              <div className="hair" />
              <div className="head">
                <span className="eye eye-left" />
                <span className="eye eye-right" />
                <span className="mouth" />
              </div>
              <div className="shirt">
                <span>SMEDIUM</span>
              </div>
            </div>
            <div className="battle-cry">
              {battleMode ? "WHO LOOKS SMALL?!" : "CHECK YOUR TONE."}
            </div>
          </div>
          <div className="stat-grid">
            <div><span>PHONE TIME</span><strong>∞</strong></div>
            <div><span>TEXT REPLIES</span><strong>0</strong></div>
            <div><span>SHIRT ROOM</span><strong>-3%</strong></div>
            <div><span>CAR AUDIO</span><strong>MAX</strong></div>
          </div>
        </div>
      </section>

      {battleMode && (
        <div className="rage-banner" role="status">
          <strong>CRITICAL ERROR:</strong> NICK HAS ENTERED HIS “I AM NOT SMALL”
          FORM
        </div>
      )}

      <section className="power-scan" aria-label="Nick power analysis">
        <div className="section-kicker">POWER SCAN // ABSOLUTELY SCIENTIFIC</div>
        <div className="meters">
          <PowerMeter label="Yelling over a tiny issue" value="97%" width="97%" />
          <PowerMeter label="Actually answering a text" value="04%" width="4%" />
          <PowerMeter label="Talking about saving money" value="100%" width="100%" />
          <PowerMeter label="Not buying a head unit" value="02%" width="2%" />
        </div>
      </section>

      <section className="roast-section" id="roast-files">
        <div className="section-heading">
          <div>
            <div className="section-kicker">SEASON ONE // INCIDENT REPORTS</div>
            <h2>THE FIVE LEGENDARY ARCS</h2>
          </div>
          <p>
            Scholars disagree on the timeline. Everybody agrees the shirt was
            too small.
          </p>
        </div>
        <div className="roast-grid">
          {roastFiles.map((file) => (
            <article className="roast-card" key={file.number}>
              <div className="card-number">{file.number}</div>
              <div className="arc-label">{file.arc}</div>
              <h3>{file.title}</h3>
              <p>{file.body}</p>
              <div className="stamp">{file.stamp}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="face-lab">
        <div className="face-copy">
          <div className="section-kicker">INTERACTIVE TRAINING MODE</div>
          <h2>THE NICK FACE GENERATOR</h2>
          <p>
            Nick’s facial expressions operate beyond normal human render
            limits. Tap the console to cycle through known forms.
          </p>
          <button className="primary-button" type="button" onClick={nextFace}>
            SUMMON ANOTHER FACE
          </button>
        </div>
        <div className="face-console" aria-live="polite">
          <div className="console-corners" aria-hidden="true" />
          <span className="face-code">FORM 0{faceIndex + 1}</span>
          <div className="ascii-face">{faces[faceIndex].face}</div>
          <strong>{faces[faceIndex].label}</strong>
          <div className="scanline" aria-hidden="true" />
        </div>
      </section>

      <section className="verdict">
        <div className="verdict-label">POST-CREDITS SCENE // REAL TALK</div>
        <h2>EVERY GREAT STORY NEEDS SOMEONE WHO ACTUALLY SHOWS UP.</h2>
        <div className="verdict-grid">
          <p className="verdict-lead">
            Under the yelling, the phone addiction, the impossible shirts, the
            fiscal contradictions, and a facial-expression catalog that should
            be studied by science—Nick is a genuinely good man.
          </p>
          <div className="verdict-body">
            <p>
              He cares about us. He wants people around him to get better, do
              better, and believe they can build a better life. He notices. He
              pushes. He stays in the fight. Sometimes the delivery arrives at
              maximum volume, but the reason behind it is usually that he gives
              a damn.
            </p>
            <p>
              So yes, Nick is getting roasted into another dimension. But only
              because the whole crew knows this: when things get real, he is
              one of the people you want in your corner.
            </p>
          </div>
        </div>
        <div className="final-line">
          <span>ROASTED BECAUSE RESPECTED.</span>
          <span>LOUDEST MENTOR ARC OF ALL TIME.</span>
        </div>
      </section>

      <footer>
        <span>AN AFFECTIONATE ROAST. NO NICKS WERE PHYSICALLY ENLARGED.</span>
        <a href="#top">BACK TO BOSS BATTLE ↑</a>
      </footer>
    </main>
  );
}

function PowerMeter({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="meter">
      <div className="meter-label">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="meter-track">
        <div className="meter-fill" style={{ width }} />
      </div>
    </div>
  );
}
