(** garnish: contact form > main garnish snippet **)
<form method="post" class="side-bar-form">
	{{if {post_var.sidebar_form} }}
	<h5>{{garnish.thank_you_text}}</h5>
	{{else}}
	<h5>{{garnish.form_title}}</h5>
	<fieldset>

		{{each sidebar_contact_form as element sort by element.sort asc}}
		{{if {element.input_type} == 'text'}}
		<div class="field text {{element.is_required}}">
			<label for="input-{{element.zid}}">{{element.label}}</label>
			<input class="{{element.is_required}}" type="text" name="{{element.label}}" id="input-{{element.zid}}" placeholder="{{element.label}}">
		</div>
		{{else if {element.input_type} == 'textarea'}}
		<div class="field textarea {{element.is_required}}">
			<label for="input-{{element.zid}}">{{element.label}}</label>
			<textarea class="{{element.is_required}}" name="{{element.label}}" id="input-{{element.zid}}" placeholder="{{element.label}}">{{element.optional_value}}</textarea>
		</div>
		{{end-if}}
		{{end-each}}
		{{if {garnish.use_recaptcha} }}
		<div id="captcha">
			<script type="text/javascript">
				var RecaptchaOptions = {
					theme : 'custom',
					custom_theme_widget: 'recaptcha_widget'
				};
			</script>
			{{site.recaptcha({garnish.recaptcha_public}, {garnish.recaptcha_private})}}
			<div id="recaptcha_widget" style="display:none">
				
				<div id="recaptcha_image"></div>
				<div class="recaptcha_only_if_incorrect_sol" style="color:red">Incorrect please try again</div>
				<br />
				<div class="field">
					<a href="javascript:Recaptcha.reload()" class="reload-recaptcha"><span class="icon-refresh"></span>New Words</a>
					<label class="recaptcha_only_if_image">Type the two words above</label>
					<input type="text" id="recaptcha_response_field" name="recaptcha_response_field" class="required" placeholder="Type the two words above" />
				</div>
			</div>
			<script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k={{garnish.recaptcha_public}}"></script>
			<noscript>
				<iframe src="http://www.google.com/recaptcha/api/noscript?k={{garnish.recaptcha_public}}"
				height="300" width="500" frameborder="0"></iframe><br>
				<textarea name="recaptcha_challenge_field" rows="3" cols="40">
				</textarea>
				<input type="hidden" name="recaptcha_response_field"
				value="manual_challenge">
			</noscript>
		</div>
		{{end-if}}
		<input type="hidden" name="zcf" value="1">
		<input type="hidden" name="zlf" value="Sidebar on {{thispage.seo_link_title}}">
		<input type="hidden" name="sidebar_form" value="1">
	</fieldset>
	<input type="submit" value="{{garnish.submit_title}}">
	{{end-if}}
</form>
<script type="text/javascript">
	function submitSidebarForm(e) {
		var inputs = this.getElementsByClassName('required'), input;
		for (var i = 0; i < inputs.length; i++) {
			input = inputs[i];
			if (input.nodeName != 'TEXTAREA' && input.nodeName != 'INPUT') continue;
			if (input.value == '') {
				input.parentNode.className += ' validate-failed';
				e.stopPropagation();
				e.preventDefault();
				return false;
			}
		}
	}
	
	var form = document.getElementsByClassName('side-bar-form')[0];
	if (form.addEventListener) form.addEventListener('submit', submitSidebarForm);
	else if (form.attachEvent) form.attachEvent('onsubmit', submitSidebarForm);
</script>