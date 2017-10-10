<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="card">
	<div class="card-header">
		<div class="images-toolbar-element">
			<div class="row">
				<div class="col-md-8">
					<form class="form-search">
						<div class="input-append">
							<input type="text" class="span2">
							<button type="submit" class="btn">Search</button>
						</div>
					</form>
				</div>
				<div class="col-md-2">
			<span class="btn-group" data-toggle="buttons">
				<label class="btn active btn-default">
					<input type="checkbox" checked autocomplete="off"> png
				</label>
				<label class="btn btn-default">
					<input type="checkbox" autocomplete="off"> gif
				</label>
				<label class="btn btn-default">
					<input type="checkbox" autocomplete="off"> jpeg
				</label>
			</span>
				</div>
				<div clas="col-md-2">
					<div class="input-group">
						<select class="form-control">
							<option selected>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card-body">
		<div class="drag-and-drop-images-element"></div>
		<div class="images-list">

		</div>
	</div>
</div>