/**
 * Created by ivan on 7/31/17.
 */
import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';
import $ from "jquery";


declare let tinymce: any;

@Directive({ selector: '[interfaceElement]' })
export class InterfaceDirective {

	private element: Node;

	private interfaceSettings;

	public updateInterface(interfaceSettings)
	{
		this.interfaceSettings = interfaceSettings;
		this.updateModel();
	}

	private generateInterface(interfaceSettings, values, levelName: string)
	{
		let $interface = $('<div>');

		for (let i in interfaceSettings) {
			if (!$.isNumeric(i)) {
				continue;
			}

			let $input;
			let $inputBlock = $('<div>');


			let item     = interfaceSettings[i];
			let itemName = levelName !== '' ? (levelName + '.' + item.key) : item.key;
			let itemId   = 'interface-' + itemName;

			if (item.type == 'composite') {
				for (let i in values[item.key]) {
					let sectionSettings = values[item.key][i];
					let sectionType = sectionSettings.type;
					$inputBlock = this.generateInterface(item.availableInstances[sectionType], sectionSettings, itemName);
				}
			} else {
				switch (item.type) {
					case 'string':
						$input = $('<input type="text">');
						break;
					case 'html':
						$input = $('<textarea class="tinymce">');
						break;
					case 'text':
						$input = $('<input type="text">');
						break;
					case 'textarea':
						$input = $('<textarea>');
						break;
					case 'checkbox':
						$input = $('<input type="checkbox">');
						break;
				}

				$input.attr('id', itemId);
				console.log('setting value of ' + item.key + ':' + values[item.key]);
				$input.val(values[item.key]);
				$inputBlock.append($('<label for="' + itemId + '">' + item.title + '</label>'));
				$inputBlock.append($input);
			}

			$interface.append($inputBlock);
		}


		return $interface;

	}


	updateModel()
	{
		console.log('i am changing');
		let $interface: JQuery = $(this.element);
		$interface.empty();

		console.log(this.interfaceSettings.params);
		console.log(this.interfaceSettings.values);

		$interface.append(this.generateInterface(this.interfaceSettings.params, this.interfaceSettings.values, ''));
		tinymce.init({
			"selector" : ".tinymce",
			"plugins" : "code",
			"toolbar" : "code",
			"menubar" : "tools",
			"content_css" : "/css/tinymce.css"
		});
	}

	constructor(private elem: ElementRef, private renderer: Renderer)
	{
		this.element = elem.nativeElement;
	}
}