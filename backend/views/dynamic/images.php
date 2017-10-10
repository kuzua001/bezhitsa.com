<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="images-toolbar-element">
	<div class="row">
		<div class="span2">
			<div class="btn-group pull-right" data-toggle="buttons-radio">
				<button class="btn active">All</button>
				<button class="btn">Starred</button>
			</div>
		</div>
		<div class="span4">
			<form class="form-search">
				<div class="input-append">
					<input type="text" class="span2">
					<button type="submit" class="btn">Search</button>
				</div>
			</form>
		</div>
	</div>
</div>
<div class="drag-and-drop-images-element"></div>
<div class="images-list">

</div>