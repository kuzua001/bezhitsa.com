/**
 * Created by ivan on 7/31/17.
 */
import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';
declare let require: any;
declare let CKEDITOR: any;

import $ from 'jquery';
import 'bootstrap';
import 'jqueryui';
import 'spectrum';

@Directive({ selector: '[interfaceElement]' })
export class InterfaceDirective {

	private element: Node;

	private interfaceSettings;

	public updateInterface(interfaceSettings)
	{
		this.interfaceSettings = interfaceSettings;
		this.updateModel();
	}


	public readInterfaceValues() {
		this.interfaceSettings.values = this.readValuesStep(this.interfaceSettings.params, '');
		return this.interfaceSettings.values;
	}

	private readValuesStep(interfaceSettings, levelName)
	{
		let values = {};

		for (let i in interfaceSettings) {
			if (!$.isNumeric(i)) {
				//continue;
			}

			let item     = interfaceSettings[i];
			let itemName = levelName !== '' ? (levelName + '-' + item.key) : item.key;
			let itemId   = 'interface-' + itemName;

			if (item.type == 'composite') {
				console.log(itemName);
				values[item.key] = {};
				$('[data-section-name=' + itemName + '].existing').each((i, elem) => {
					let sectionType = $(elem).attr('data-section-type');
					values[item.key][i] = this.readValuesStep(item.availableInstances[sectionType], itemName +  '-' + i);
					values[item.key][i].type = sectionType;
				});
			} else {
				switch (item.type) {
					case 'checkbox':
						values[item.key] = $('#' + itemId).prop('checked');
						break;
					default:
						values[item.key] = $('#' + itemId).val();
						break;
				}
			}
		}

		return values;
	}

	private templateCounter: number = 0;
	private ckEditorIds = [];

	private generateInterface(interfaceSettings, values, levelName: string, ckeditorInit = true)
	{

		this.templateCounter ++;

		let $interface = $('<div>');

		for (let i in interfaceSettings) {
			if (!$.isNumeric(i)) {
				//continue;
			}

			let $input;
			let $inputBlock = $('<div class="form-group">');


			let item     = interfaceSettings[i];
			let itemName = levelName !== '' ? (levelName + '-' + item.key) : item.key;
			let itemId   = 'interface-' + itemName;

			if (item.type == 'composite') {
				for (let i in values[item.key]) {
					let sectionSettings = values[item.key][i];
					let sectionType = sectionSettings.type;


					console.log(sectionSettings);
					console.log(sectionType);
					console.log(item.availableInstances);


					let $interfaceSub = this.generateInterface(item.availableInstances[sectionType], sectionSettings, itemName +  '-' + i);
					$interfaceSub.attr('data-section-type', sectionType);
					$interfaceSub.attr('data-section-name', itemName);
					$interfaceSub.addClass('section').addClass('existing');
					$interfaceSub.append($('<span class="close"><i class="fa fa-close"></i></span>'));
					$inputBlock.append($interfaceSub);

					console.log($interfaceSub.html());
				}

				let templateName = 'ID' + this.templateCounter;

				let $newElementsBlock = $('<div class="new-elements" data-template-name="' + templateName + '">');
				let $newElementsSelect = $('<select>');
				let $newElementsHiddenList = $('<div class="new-elements-list" style="display: none">');

				for (let type in item.availableInstances) {
					$newElementsSelect.append($('<option value="' + type + '">' + type  + '</option>'));
					let $interfaceSub = this.generateInterface(item.availableInstances[type], [], itemName +  '-' + templateName, false);
					$interfaceSub.attr('data-section-type', type);
					$interfaceSub.attr('data-section-name', itemName);
					$interfaceSub.addClass('section');
					$interfaceSub.append($('<span class="close"><i class="fa fa-close"></i></span>'));
					$newElementsHiddenList.append($interfaceSub);
				}

				$newElementsBlock.append($newElementsSelect);
				$newElementsBlock.append($newElementsHiddenList);
				$newElementsBlock.append($('<button class="add btn btn-success"><i aria-hidden="true" class="fa fa-plus"></i></button>'));

				$inputBlock.append($newElementsBlock);

			} else {
				let value = values[item.key] ? values[item.key] : '';

				switch (item.type) {
					case 'string':
						$input = $('<input type="text">');
						$input.val(value);
						break;
					case 'html':
						$input = $('<textarea class="ckeditor">');
						$input.val(value);
						break;
					case 'text':
						$input = $('<input type="text">');
						$input.val(value);
						break;
					case 'textarea':
						$input = $('<textarea>');
						$input.val(value);
						break;
					case 'checkbox':
						$input = $('<input type="checkbox">');
						$input.prop('checked', value);
						break;
					case 'color':
						$input = $('<input type="text" class="color-picker">');
						$input.val(value);
						break;

					case 'image':
						$input = $('<div data-image-id="' + itemId + '" class="input-group image-preview">\
								<span class="input-group-btn">\
									<input style="display: inline-block;" type="file" accept="image/png, image/jpeg, image/gif" class="btn btn-default image-file">\
									<input type="hidden" id="' + itemId + '" class="image-file-value" value="' + value + '">\
									<button type="button" class="btn btn-labeled btn-primary image-upload"> <span class="btn-label"><i class="glyphicon glyphicon-upload"></i> </span>Upload</button>\
									<i class="fa fa-eye" aria-hidden="true"><img class="preview" src="' + value + '"></i>\
								</span>\
							</div>'
						);
						break;
				}


				if (item.type != 'image') {
					$input.attr('id', itemId);
				}

				if (item.type == 'checkbox') {
					$input.addClass('checkbox').addClass('checkbox-inline');
				} else if (item.type == 'color') {
				} else {
					$input.addClass('form-control');
				}


				if (item.type == 'html' && ckeditorInit) {
					this.ckEditorIds.push(itemId);
				}

				$inputBlock.append($('<label for="' + itemId + '">' + item.title + '</label>'));
				$inputBlock.append($input);

			}

			if (item.separated == true) {
				$interface.append($('<hr class="separator">'));
			}

			$interface.append($inputBlock);
		}

		return $interface;

	}

	private initAjaxFields()
	{
		let files = [];

		$('body').on('change', '.section.existing .image-file', (e) => {
			let $parent = $(e.currentTarget).closest('[data-image-id]');
			let imageId = $parent.data('image-id');
			files[imageId] = event.target.files;
		});

		$('body').on('click', '.section.existing .image-upload', (e) => {
			let $parent = $(e.currentTarget).closest('[data-image-id]');
			let imageId = $parent.data('image-id');
			let data = new FormData();

			let filesList = files[imageId];
			if (!filesList.length) return;

			data.append('file', filesList[0]);

			$.ajax({
				url: '/admin/api/files',
				type: 'POST',
				data: data,
				cache: false,
				dataType: 'json',
				processData: false,
				contentType: false,
				success: (data) => {
					if (data.status == 'ok') {
						$parent.find('.image-file-value').val(data.file);
						$parent.find('img.preview').attr('src', data.file);
					}
				}
			});
		});
	}


	private initSectionConstructor()
	{
		let directive = this;

		$('.new-elements .btn.add').each((i, elem) => {
			let $elem = $(elem);
			let $parent = $elem.parent();
			let templateName = $parent.data('template-name');
			$elem.off('click').on('click', () => {
				console.log('added!!');
				let sectionType = $parent.children('select').val();
				let $newSection = $parent.children('.new-elements-list').children('[data-section-type=' +  sectionType + ']');
				let newIndex = $parent.parent().children('[data-section-type]').length;
				let html = $newSection.get(0).outerHTML.replace(new RegExp(templateName, 'g'), newIndex);
				let $preparedSection = $(html).addClass('existing');
				$preparedSection.insertBefore($parent);
				$preparedSection.find('.ckeditor').each((i, elem) => {
					CKEDITOR.replace($(elem).attr('id'));
				});

				directive.initSectionConstructor();
			});
		});
	}

	updateModel()
	{
		console.log('i am changing');
		let $interface: JQuery = $(this.element);
		$interface.empty();

		console.log(this.interfaceSettings.params);
		console.log(this.interfaceSettings.values);

		this.templateCounter = 0;
		this.ckEditorIds = [];
		$interface.append(this.generateInterface(this.interfaceSettings.params, this.interfaceSettings.values, ''));

		$('.color-picker').spectrum({
			showInput: true,
			allowEmpty:true,
			preferredFormat: "hex"
		});

		for (let i in this.ckEditorIds) {
			CKEDITOR.replace(this.ckEditorIds[i]);
		}

		this.initAjaxFields();
		//$('.fields > div > .form-group').sortable();
		this.initSectionConstructor();
	}

	constructor(private elem: ElementRef, private renderer: Renderer)
	{
		this.element = elem.nativeElement;

		let bootstrapConfirm = (callback) => {
			$('#confirm-delete').modal('show');
			$('#confirm-delete').on('click', '.btn-ok', () => {
				callback();
			});
		};

		$('body').on('click', '.section.existing .close', (e) => {
			console.log('trying to remove');
			let $parent = $(e.currentTarget).parent();
			bootstrapConfirm(() => {
				$parent.remove();
			})
		})
	}
}