#set document(title: "Резюме", author: "Артемий Илющенко")
#set page(paper: "a4", margin: 1.5cm)
#set text(font: "Inter", size: 12pt)
#show link: set text(fill: rgb("#0000ff"))

#align(center)[
  #text(size: 18pt)[= Артемий Илющенко]
  Россия, Красноярск |
  #link("mailto:mailto:artemilusenko2@gmail.com") |
  #link("https://github.com/BombasticFantastik")[github.com/BombasticFantastik]
]

== Обо мне
#line(length: 100%)
*Data Scientist* с фокусом на Computer Vision, 3 года практики с опытом в разработке end-to-end CV-пайплайнов: детекция, сегментация, классификация, аугментация, генерация, сиамские сети, оценка качества.
#v(1em)

== Навыки
#line(length: 100%)
*Языки программирования*: Python, SQL \
*Библиотеки*: Pytorch, Sklearn, Pandas, Numpy, Torchvision, OpenCV, PIL, Matplotlib, Seaborn, CatBoost, XGBoost \
*Остальное*: Linux, Git, Docker, PostgreSQL, SQLite, JupyterNotebook
#v(1em)

== Опыт работы
#line(length: 100%)

*Kozhin Dev* #h(1fr) _Июнь 2025 — Август 2025 (3 месяца)_ \
Разработка пайплайна для автоматической подготовки изображений обуви для e-commerce: \
- Создал UNet-сегментатор для выделения обуви на светлом фоне. \
- Реализовал модель предсказания угла поворота (регрессия на основе ResNet). \
- Разработал алгоритм восстановления тени без разметки (на основе маски объекта и анализа
градиентов) \
- Подготовил датасет, написал функции обучения, аугментации и инференса на PyTorch + OpenCV. \
GitHub: #link("https://github.com/BombasticFantastik/KD_Summer_Work")[github.com/BombasticFantastik/KD_Summer_Work]
#v(1em)

*Фабрика Решений* #h(1fr) _Июнь 2024 — Август 2024 (3 месяца)_ \
Разработка системы сравнения изображений багажа в аэропорту: \
- Построил сиамскую нейросеть на основе архитектуры ResNet. \
- Реализовал метрику rank-1 accuracy для оценки качества сопоставления. \
- Собрал и аннотировал обучающий датасет, настроил обучение с triplet loss. \
Kaggle: #link("https://www.kaggle.com/code/artemy228/bagagesiamsnet")[kaggle.com/code/artemy228/bagagesiamsnet]
#v(1em)

== Пройденные курсы
#line(length: 100%)
- *Deep Learning (продвинутый поток)* от МФТИ \
- *Введение в Data Science* от Института Биоинформатики \
- *Основы статистики 1 и 2* от Института Биоинформатики \
- *MLcourse.ai* от Юрия Кашитского \
#h(1fr)
#v(1em)
#h(1fr)

== Интересные проекты
#line(length: 100%)

*OCR для Российский авто номеров* #h(1fr)\
Задача - разработка OCR нейросети для распознования Российских автомобильных номеров \
Архитектура - CRNN состоящая из STN, Resnet34 и BiLSTM слоёв. \
Точность на тестовом датасете - 99.24% \
GitHub: #link("https://github.com/BombasticFantastik/VehicleNumberRecognizer")[github.com/BombasticFantastik/VehicleNumberRecognizer]
#v(1em)

*StyleGan на Pytorch* #h(1fr) \
Изучил архитектуру StyleGan и реализовал её на Pytorch. \
GitHub: #link("https://github.com/BombasticFantastik/StyleGanStepByStep")[github.com/BombasticFantastik/StyleGanStepByStep]
#v(1em)

*Pose Estimator* #h(1fr) \
Разработал нейросеть показывающую движение скелета человека перед камерой в реальном времени. \
GitHub: #link("https://github.com/BombasticFantastik/CustomPoseEstimator")[github.com/BombasticFantastik/CustomPoseEstimator]
#v(1em)

== Образование
#line(length: 100%)
*Сибирский Федеральный Университет* #h(1fr) _2023 - 2027_ \
Прикладная информатика - Бакалавриат