<?php

use yii\db\Migration;

class m171027_200451_big_initial_cms_migration extends Migration
{
    public function up()
    {
        $file = fopen(dirname(__FILE__) . '/big_migration.sql', 'r');
        if (!empty($file)) {
            $legacySQL = fread($file, filesize(dirname(__FILE__) . '/big_migration.sql'));

            $this->db->getMasterPdo()->prepare($legacySQL, [
                PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true
            ])->execute();
        }
    }

    public function down()
    {
        echo "m171027_200451_big_initial_cms_migration cannot be reverted.\n";

        return false;
    }
}
