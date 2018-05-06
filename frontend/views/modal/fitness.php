<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 5/6/18
 * Time: 10:40 PM
 */
?>
<div class="modal bezhitsa-modal" tabindex="-1" role="dialog" id="trainerFormSuccess">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="text-center"><?= Yii::t('app/modal', 'Спасибо, ваша заявка принята'); ?></p>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><?= Yii::t('app/modal', 'Закрыть'); ?></button>
            </div>
        </div>
    </div>
</div>
