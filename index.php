<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/includes/data.php';
require_once __DIR__ . '/includes/functions.php';

if (!empty($_POST)) {

    $fields = load($fields);
    if ($errors = validate($fields)) {
        $res = ['answer' => 'error', 'errors' => $errors];
    } else {
        if (!send_mail($fields, $mail_settings)) {
            $res = ['answer' => 'error', 'errors' => 'Ошибка отправки письма'];
        } else {
            $res = ['answer' => 'OK', 'data' => $fields];
        }
    }
    exit(json_encode($res));
}

?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Калькулятор услуг</title>
    <link rel="stylesheet" href="/node_modules/sweetalert2/dist/sweetalert2.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

<header class="header">
    <div class="container">
        <h1 class="header__title">Калькулятор услуг</h1>
    </div>
</header>

<section class="card">
    <div class="container">
        <form method="post" class="mt-4" id="calc-form">
            <div class="card__inner">

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Продвижение товаров</div>

                        <div class="card__text">Оптимизация карточек товара (работа с названиями, описаниями,
                            характеристиками и картинками), чтобы как можно больше людей находили Ваш товар.
                        </div>
                    </div>


                    <input type="range" min="0" max="30" value="0" class="card__slider slider-progress"
                           step="1" id="promotion" name="promotion">


                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="promotion-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="promotion-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Аудит конкурентных товаров</div>

                        <div class="card__text">Предложения наиболее релевантных вариантов размещения, рекомендации по
                            ценообразованию.
                        </div>
                    </div>


                    <input type="range" min="0" max="30" value="0" class="card__slider slider-progress" step="1"
                           id="audit" name="audit">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="audit-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="audit-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Отзывы</div>

                        <div class="card__text">Создание продающих отзывов, с которыми увеличится доверие клиента к
                            товару и
                            Ваши продажи.
                        </div>
                    </div>


                    <input type="range" min="0" max="30" value="0" class="card__slider slider-progress" step="1"
                           id="reviews"
                           name="reviews">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="reviews-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="reviews-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Комплексное создание и сопровождение магазина</div>

                        <div class="card__text">Аудит конкурентных товаров, предложения наиболее релевантных вариантов
                            размещения, рекомендации по ценообразованию, заполнение карточек товара: работа с
                            названиями,
                            описаниями, характеристиками и картинками (до 30 карточек), работа с отзывами и вопросами
                            покупателей, консультации.
                        </div>
                    </div>


                    <input type="range" min="0" max="12" value="0" class="card__slider slider-progress" step="1"
                           id="maintenance"
                           name="maintenance">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="maintenance-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="maintenance-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Консультационная и техническая поддержка</div>

                        <div class="card__text">Проведение консультации по любым вопросам размещения на маркетплейсах.
                        </div>
                    </div>

                    <input type="range" min="0" max="10" value="0" class="card__slider slider-progress" step="1"
                           id="support"
                           name="support">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="support-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="support-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Внешняя реклама</div>

                        <div class="card__text">Размещение рекламы товаров в поисковой системе Яндекс.</div>
                    </div>


                    <input type="range" min="0" max="30" value="0" class="card__slider slider-progress" step="1"
                           id="advertising"
                           name="advertising">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="advertising-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="advertising-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Дизайн фото</div>

                        <div class="card__text">Изменение размера фотографии, фотомонтаж, ретушь, коллажирование для
                            карточек товаров на маркетплейсах.
                        </div>
                    </div>

                    <input type="range" min="0" max="50" value="0" class="card__slider slider-progress" step="1"
                           id="design"
                           name="design">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="design-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="design-price">0</span> ₽</div>
                    </div>

                </div>

                <div class="card_item">

                    <div class="card__info">
                        <div class="card__title">Подготовка Rich-контент</div>

                        <div class="card__text">Rich-контент помогает акцентировать внимание на отдельных
                            характеристиках
                            или достоинствах товара — так вы можете повысить интерес потенциальных покупателей к своему
                            ассортименту.
                        </div>
                    </div>


                    <input type="range" min="0" max="30" value="0" class="card__slider slider-progress" step="1"
                           id="richContent"
                           name="richContent">

                    <div class="card__stats">
                        <div class="card__stats-item">Карточек <span class="card__stats-item-count"
                                                                     id="richContent-output">0</span></div>
                        <div class="card__stats-item">Сумма <span class="card__stats-item-count"
                                                                  id="richContent-price">0</span> ₽</div>
                    </div>

                </div>

            </div>

            <div class="card__price">Итоговая цена:&nbsp <span class="card__price-total" id="all-price">0</span>&nbsp₽</div>

            <div class="client__info">

                <input type="text" class="client__info-input" id="name" name="name" placeholder="Имя" required>

                <input type="hidden" id="token" name="token">

                <input type="hidden" name="total" id="price" value="0">

                <input type="tel" data-tel-input class="client__info-input" name="phone" placeholder="+ 7 999 999 99 99" id="tel" required>

                <button class="client__info-btn" id="send" type="submit">Заказать услуги</button>

            </div>

        </form>
    </div>
</section>


<script src="https://www.google.com/recaptcha/api.js?render=6Lc5H1ggAAAAAK998MgK_tIhWcEU5QL4JXEVHvos"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="module" src="./node_modules/sweetalert2/src/sweetalert2.js"></script>
<script type="module" src="js/range-slider.js"></script>
<script type="module" src="js/app.js"></script>

</body>
</html>
