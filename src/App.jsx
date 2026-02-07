import { render } from "@testing-library/react"
import'./App.css' 



const App = ()=>{
  render(

    <header>
        <h1>Добро пожаловать!</h1>
        <p>Мой первый веб-сайт</p>

    <nav>
        <ul>
            <li><a href="#about">О себе</a></li>
            <li><a href="#skills">Навыки</a></li>
            <li><a href="#counter">Счётчик</a></li>
            <li><a href="#contact">Контакты</a></li>
        </ul>
    </nav>

    <div class="container">
        <section id="about">
            <h2>О себе</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Привет! Я начинающий веб-разработчик. Изучаю HTML, CSS и JavaScript.</p>
                    <p>Мне нравится создавать красивые и функциональные веб-сайты. Это мой первый проект, и я продолжаю учиться каждый день!</p>
                </div>
                <div class="about-image">
                    Фото
                </div>
            </div>
        </section>

        <section id="skills">
            <h2>Мои навыки</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>HTML</h3>
                    <p>Создание структуры веб-страниц с использованием семантических тегов.</p>
                </div>
                <div class="skill-card">
                    <h3>CSS</h3>
                    <p>Стилизация элементов, работа с Flexbox и Grid.</p>
                </div>
                <div class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Базовое программирование, работа с DOM и событиями.</p>
                </div>
            </div>
        </section>

        <section id="counter">
            <h2>Интерактивный счётчик</h2>
            <div id="counter-display">0</div>
            <div class="counter-buttons">
                <button onclick="decrementCounter()">-</button>
                <button onclick="resetCounter()">Сброс</button>
                <button onclick="incrementCounter()">+</button>
            </div>
        </section>

        <section id="contact">
            <h2>Свяжитесь со мной</h2>
            <form class="contact-form" onsubmit="handleSubmit(event)">
                <div class="form-group">
                    <label for="name">Имя:</label>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                </div>
                <div class="form-group">
                    <label for="message">Сообщение:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Мой первый сайт. Все права защищены.</p>
    </footer>
</header>
  )
}
export default App; 