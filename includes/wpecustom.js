jQuery(document).ready(function(){
	jQuery(".md_button_add").click(function(){
		jQuery(".md_wc_extra_cost").append('<tr class="new"><td width="4%" class="sort"></td><td class="name" width="8%"><input type="text" name="md_extra_cost_country_code[]"></td><td class="name" width="40%"><input type="text" name="md_extra_cost_name[]"></td><td class="rate" width="48%"><input type="number" step="any" min="0" placeholder="0" name="md_extra_cost_value[]"><a href="javascript:void(0);" id="md_button_remove">Remove</a></td></tr>');
	});
	jQuery(".md_wc_extra_cost").on('click','#md_button_remove',function(){
		jQuery('#md_button_remove').parent().parent().remove();
	});
	
	
	jQuery( "#wp_ecommerce_dialog" ).dialog({ 
		modal: true, title: 'Subscribe Now', zIndex: 10000, autoOpen: true,
		width: '500', resizable: false,
		position: {my: "center", at:"center", of: window },
		dialogClass: 'dialogButtons',
		buttons: {
			Yes: function () {
				// $(obj).removeAttr('onclick');
				// $(obj).parents('.Parent').remove();
				var email_id = jQuery('#txt_user_sub_wp_ecommerce').val();

				var data = {
				'action': 'add_plugin_user_wp_ecommerce',
				'email_id': email_id
				};

				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					jQuery('#wp_ecommerce_dialog').html('<h2>You have been successfully subscribed');
					jQuery(".ui-dialog-buttonpane").remove();
				});

				
			},
			No: function () {
				var email_id = jQuery('#txt_user_sub_wp_ecommerce').val();

				var data = {
				'action': 'hide_subscribe_wp_ecommerce',
				'email_id': email_id
				};

				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					        					 
				});
				
				jQuery(this).dialog("close");
				
			}
		},
		close: function (event, ui) {
			jQuery(this).remove();
		}
	});
	jQuery("div.dialogButtons .ui-dialog-buttonset button").addClass("button-primary woocommerce-save-button");
    jQuery("div.dialogButtons .ui-dialog-buttonpane .ui-button").css("width","80px");


});