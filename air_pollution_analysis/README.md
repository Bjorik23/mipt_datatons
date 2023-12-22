# Создание модели на основе данных о качестве воздуха

## Введение
В этом проекте мы исследуем данные о качестве воздуха для обучения модели машинного обучения, способной предсказывать концентрацию угарного газа в воздухе на основе различных загрязнителей. Проект включает работу с временными рядами и изучение динамики загрязнения в течение года.

## Набор данных
Данные взяты из [UCI Machine Learning Repository - Air Quality Dataset](https://archive.ics.uci.edu/ml/datasets/Air+Quality) и содержат почасовые усредненные ответы от массива химических сенсоров, расположенных в городе в Италии.

## Разделы проекта
1. **Открытие данных и изучение общей информации**
2. **Предобработка данных**
3. **Очистка данных**
4. **Анализ данных**
5. **Обучение моделей**
6. **Создание web интерфейса**

## Выводы

- Выявлена сезонная и суточная динамика загрязнения.
- Обнаружена сильная корреляция между откликами сенсоров.
- Метеорологические условия имеют сложные взаимосвязи с уровнями загрязнителей.
- Некоторые уровни CO превышают установленные пределы.
- Визуализация данных выявляет ключевые тенденции и выбросы.

## Выводы по обучению моделей

- **SVR** является наиболее эффективной моделью.
- **Случайный лес, KNN и Градиентный бустинг** показывают сильные результаты.
- **Линейная модель и Лассо** менее способны улавливать сложности данных.
- **Полносвязанная нейронная сеть** показывает наименьший MAE.

## Требования

Проект использует следующие библиотеки Python, которые необходимо установить:

```bash
pandas
numpy
datetime
matplotlib
seaborn
plotly
scikit-learn
pickle
torch
```

Установите их, используя pip install или conda install в зависимости от вашего средства управления пакетами.

## Установка

Чтобы работать с проектом, выполните следующие шаги:

1. Клонирование репозитория:
   ```bash
   git clone [https://github.com/Bjorik23/mipt_datatons]
   ```
2. Установите необходимые зависимости:
   ```bash
   pip install -r requirements.txt
   ```
3. Запустите Jupyter Notebooks:
    ```bash
   air_pollution_analysis/analysis.ipynb
   ```
   ```bash
   air_pollution_analysis/models.ipynb
   ```

## Запуск проекта



## Лицензия

Этот проект доступен для использования в исследовательских целях. Коммерческое использование данных исключено.

## Ссылки

S. De Vito, E. Massera, M. Piga, L. Martinotto, G. Di Francia, On field calibration of an electronic nose for benzene estimation in an urban pollution monitoring scenario, Sensors and Actuators B: Chemical, Volume 129, Issue 2, 22 February 2008, Pages 750-757, ISSN 0925-4005.
(https://www.sciencedirect.com/science/article/abs/pii/S0925400507007691)

## Авторы

Проект был разработан следующими участниками:

- **Karina Akchurina** [GitHub](https://github.com/Karina1605)
- **Elena Almaeva** [GitHub](https://github.com/Cu-hedgehog)
- **Bair Vambuev** [GitHub](https://github.com/Bjorik23)
- **Mikhail Kuzmenkov** [GitHub](https://github.com/MikhailKuzm)
- **Olga Redchenko** [GitHub](https://github.com/OlgaRedchenko)
