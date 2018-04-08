<?php
use frontend\assets\BootstrapAsset;
use frontend\widgets\buttons\DetailButton;
use frontend\models\Page;
use frontend\models\pages\SliderTabsSectionParams;

BootstrapAsset::register($this);


/**
 * @var $item frontend\models\data\Room
 * @var \frontend\models\pages\BookingPage $page
 */
?>
<section class="booking">
    <header>
        <div class="content-wrapper">
            <div class="row">
                <div class="container container-90">
                    <div class="col-lg-4 center hidden-xs hidden-sm hidden-md">
                        <img src="/img/big-logo.png">
                        <h1>
                            <span class="name">Bezhitsa</span><br>
                            <span class="type">гранд отель</span>
                        </h1>
                    </div>
                    <div class="col-lg-8">
                        <div class="contacts">
                            <dl class="contacts-element inline">
                                <dt title="Адрес">
                                    <i class="address"></i>
                                </dt>
                                <dd>
                                    Клинцовская, 41,<br>
                                    Брянск<br>
                                    Российская Федерация<br>
                                </dd>
                                <dt title="Телефон">
                                    <i class="phone"></i>
                                </dt>
                                <dd>
                                    8(4832)40-00-01
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="content-wrapper reservation-form">
        <section class="content">
            <div class="container container-90">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- start TL Booking form script -->
                        <div id="tl-booking-form">&nbsp;</div>
                        <script type="text/javascript">
							(function(w) {
								var q = [
									['setContext', 'TL-INT-bezhitsa.new', '<?= \frontend\components\LanguageHelper::getCurrentLanguageCode(); ?>'],
									['embed', 'booking-form', {
										container: 'tl-booking-form'
									}]
								];
								var t = w.travelline = (w.travelline || {}),
									ti = t.integration = (t.integration || {});
								ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
								if (!ti.__loader) {
									ti.__loader = true;
									var d = w.document,
										p = d.location.protocol,
										s = d.createElement('script');
									s.type = 'text/javascript';
									s.async = true;
									s.src = (p == 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
									(d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
								}
							})(window);
                        </script>
                    </div>
                    <?php if ($page->pageParams->showBookingRules) { ?>
						<div class="col-lg-12">
								<?= $page->pageParams->bookingRulesText ?>
						</div>
                    <?php } ?>
				</div>
            </div>
        </section>
    </div>
</section>
