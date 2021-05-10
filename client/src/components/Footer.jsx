import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Contactanos
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  Ayuda
                </a>
                <a class="nav-link" href="#">
                  Instagram
                </a>
                <a class="nav-link" href="#">
                  Politicas de Privacidad
                </a>
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                ></a>
              </div>
              <Link className="navbar-brand" to="/addCategory">
                Agregar Categorias
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
