<?php
/**
 * @var $order FitnessOrder
 * @var $trainer \frontend\models\data\Trainer
 */

use frontend\models\data\FitnessOrder;
?>
<h1>Описание заявки</h1>
<table>
    <tr>
        <td><b>Имя тренера:</b></td>
        <td><?= $trainer->name?></td>
    </tr>
    <tr>
        <td><b>Имя клиента:</b></td>
        <td><?= $order->name ?></td>
    </tr>
    <tr>
        <td><b>Телефон клиента:</b></td>
        <td><?= $order->phone ?></td>
    </tr>
    <tr>
        <td><b>E-mail клиента:</b></td>
        <td><?= $order->email ?></td>
    </tr>
    <tr>
        <td><b>Дата создания:</b></td>
        <td><?= date('Y-m-d H:i:s', $order->ts_created) ?></td>
    </tr>
</table>

