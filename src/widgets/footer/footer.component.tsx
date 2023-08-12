import React, { FC } from "react";
import { Container } from "../../shared";

export const Footer: FC = () => {
  return (
    <footer className="py-[42px] md:py-[80px]">
      <Container>
        <span className="text-sm text-white/50 block mb-7">
          Есть вопросы? Свяжитесь с нами.
        </span>
        <div className="flex flex-col md:flex-row">
          <ul className="mb-10 md:mr-16">
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Распространенные вопросы
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Для инвесторов
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Конфиденциальность
            </li>
            <li className="text-sm cursor-pointer text-white/50 hover:underline">
              Проверка скорости
            </li>
          </ul>

          <ul className="mb-10 md:mr-16">
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Центр поддержки
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Вакансии
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Настройки файлов cookie
            </li>
            <li className="text-sm cursor-pointer text-white/50 hover:underline">
              Юридические уведомления
            </li>
          </ul>

          <ul className="mb-10 md:mr-16">
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Аккаунт
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Способы просмотра
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Корпоративная информация
            </li>
            <li className="text-sm cursor-pointer text-white/50 hover:underline">
              Только на Netflix
            </li>
          </ul>

          <ul>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Медиацентр
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Правила использования
            </li>
            <li className="text-sm mb-3 cursor-pointer text-white/50 hover:underline">
              Свяжитесь с нами
            </li>
          </ul>
        </div>
        <span className="text-sm text-white/50 block mt:6 md:mt-16">
          Читайте о сериалах и фильмах Netflix и смотрите бонусные видео на
          сайте Tudum.com.
        </span>
      </Container>
    </footer>
  );
};
