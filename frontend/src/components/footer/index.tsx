function Footer() {
  const dev = 'App desenvolvido por '
  const prom = 'Evento promovido pela escola DevSuperior: '

  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          {dev}
          <a href="https://github.com/wesleydecezere"
            target="_blank"
            rel="noreferrer"
          >
            Wesley Decezere
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            {prom}
            <a href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;