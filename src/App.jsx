import "./App.css";

function App() {
  return (
    <main className="page">
      <div className="container">
        <section className="wedding-invitation">
          <div className="names">
            <h1>Melanja</h1>
            <h1 className="and">in</h1>
            <h1>Andraž</h1>
          </div>
          <div className="invitation-icon">
            <img src="/wedding.png" alt="Poročna prstana" />
          </div>

          <div className="eyebrow">vas vabiva na poročno praznovanje!</div>

          <div className="event-card">
            <div>
              <span>DATUM</span>
              <strong>10. 10. 2026</strong>
            </div>

            <div>
              <span>URA</span>
              <strong>11:00</strong>
            </div>

            <div>
              <span>LOKACIJA</span>
              <strong>Cerkev sv. Urha na Tinju</strong>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.741427974242!2d15.504205684250197!3d46.42725979579396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f81fb080434c5%3A0x2a2f92faef87718a!2sSveti%20Urh!5e0!3m2!1ssl!2ssi!4v1790363299323!5m2!1ssl!2ssi"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija dogodka"
            ></iframe>
          </div>

          <div className="fine-print">
            <p>
              Po cerkvenem obredu nadaljujemo s praznovanjem
              <br />
              POD KOZOLCEM, Kovača vas 110.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
