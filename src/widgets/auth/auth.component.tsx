import React from "react";
import { Layout } from "../../app";
import { Container } from "../../shared";
import { Link } from "react-router-dom";
import { AuthProcess } from "../../process";

export const AuthComponent = () => {
  return (
    <Layout>
      <div className="relative h-screen w-full ">
        <img
          src="/assets/banner/bannerHome.jpg"
          alt="Img"
          className="absolute top-0 right-0 bottom-0 left-0 h-screen w-full"
        />
        <div className="bg-banner absolute top-0 right-0 bottom-0 left-0 h-screen w-full z-101 flex items-center justify-center">
          <Container>
            <div className="bg-banner-auth roudned-[8px] w-full md:w-[450px] p-10">
              <h2>Войти</h2>
              <AuthProcess />
              <span className="text-white/50 mt-4 block text-sm">
                Впервые на Netflix?{" "}
                <Link className="text-white" to="/">
                  Зарегистрируйтесь сейчас.
                </Link>
              </span>
              <span className="text-white/50 mt-4 block text-sm">
                Эта страница защищена Google reCAPTCHA, чтобы мы знали, что вы
                не бот. Подробнее.
              </span>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
};
